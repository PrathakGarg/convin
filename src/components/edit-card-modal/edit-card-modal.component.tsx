import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Form, Input, Button, Typography } from "antd";

import { Bucket, CardItem } from "../../store/bucket/bucket.types";
import { editCard } from "../../store/bucket/bucket.action";
import { selectBucketById, selectCardById } from "../../store/bucket/bucket.selector";

type EditCardModalProps = {
    buckets: Bucket[]
    bucketId: number;
    cardId: number;
    isModalOpen: boolean;
    handleOk: () => void;
    handleCancel: () => void;
}

export type FormValues = {
    bucket: number;
    card_name: string;
    link: string;
}

const EditCardModal: FC<EditCardModalProps> = ({ buckets, bucketId, cardId, isModalOpen, handleOk, handleCancel }) => {
    const dispatch = useDispatch();
    const card = useSelector(selectCardById(bucketId, cardId)) as CardItem;
    const [form] = Form.useForm();

    const layout = {
        labelCol: { span: 7 },
        wrapperCol: { span: 13 },
    };

    const tail_layout = {
        wrapperCol: { offset: 7, span: 13 },
    };

    const onFinish = (values: FormValues) => {
        dispatch(editCard(buckets, values.bucket, card.id, values.card_name, values.link));
        handleOk();
    };

    return (
        <Modal title="Add new card" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={[null]}>
            <Form {...layout} form={form} onFinish={onFinish} initialValues={{ bucket: bucketId, card_name: card.card_name, link: card.link }}>
                <Form.Item name={["bucket"]} label="Bucket" style={{position: "relative", top: 5}}>
                    <Typography.Text onClick={() => {alert("To change bucket, drag and drop card into a bucket on the sidebar")}}>{useSelector(selectBucketById(bucketId))?.bucket_name}</Typography.Text>
                </Form.Item>
                <Form.Item name="card_name" label="Card Name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="link" label="Link" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item {...tail_layout}>
                    <Button type="primary" htmlType="submit" style={{marginRight: 8}}>
                        Submit
                    </Button>
                    <Button htmlType="reset" onClick={handleCancel}>
                        Cancel
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default EditCardModal;