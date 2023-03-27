import { FC } from "react";
import { useDispatch } from "react-redux";
import { Modal, Form, Select, Input, Button } from "antd";

import { Bucket } from "../../store/bucket/bucket.types";
import { addCardToBucket } from "../../store/bucket/bucket.action";
import { FormValues } from "../edit-card-modal/edit-card-modal.component";

type AddCardModalProps = {
    buckets: Bucket[]
    bucketId: number;
    isModalOpen: boolean;
    handleOk: () => void;
    handleCancel: () => void;
}

const { Option } = Select;

const AddCardModal: FC<AddCardModalProps> = ({ buckets, bucketId, isModalOpen, handleOk, handleCancel }) => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const layout = {
        labelCol: { span: 7 },
        wrapperCol: { span: 13 },
    };

    const tail_layout = {
        wrapperCol: { offset: 7, span: 13 },
    };

    const onFinish = (values: FormValues) => {
        dispatch(addCardToBucket(buckets, values.bucket, values.card_name, values.link));
        handleOk();
        form.resetFields();
    };

    return (
        <Modal title="Add new card" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={[null]}>
            <Form {...layout} form={form} onFinish={onFinish} initialValues={{ bucket: bucketId }}>
                <Form.Item name="bucket" label="Bucket" rules={[{ required: true }]}>
                    <Select placeholder="Select a bucket" allowClear>
                        {buckets.map((bucket, index) => (
                            <Option key={index} value={bucket.id}>{bucket.bucket_name}</Option>
                        ))}
                    </Select>
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

export default AddCardModal;