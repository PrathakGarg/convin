import { FC, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Modal } from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";

import AddCardModal from "../add-card-modal/add-card-modal.categories";
import EditCardModal from "../edit-card-modal/edit-card-modal.component";

import { CardItem } from "../../store/bucket/bucket.types";
import { selectBuckets } from "../../store/bucket/bucket.selector";
import { deleteCardFromBucket } from "../../store/bucket/bucket.action";

const { Meta } = Card;

type CardProps = {
    bucketId: number;
    card?: CardItem;
}

const CardI: FC<CardProps> = ({ bucketId, card }) => {
    const dispatch = useDispatch();
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const buckets = useSelector(selectBuckets);

    const onClickAdd = () => {setIsAddModalOpen(true);}
    const handleAddOk = () => {setIsAddModalOpen(false);}
    const handleAddCancel = () => {setIsAddModalOpen(false);}

    const onClickEdit = () => {setIsEditModalOpen(true);}
    const handleEditOk = () => {setIsEditModalOpen(false);}
    const handleEditCancel = () => {setIsEditModalOpen(false);}

    if (!card) {
        return (
            <>
            <Card
                hoverable
                style={{ width: 300, height: 175, border: "1px solid #ddd" }}
                actions={[
                    <PlusOutlined key="add" onClick={onClickAdd} />,
                ]}
            >
                <Meta title="Add new card" />
            </Card>
            <AddCardModal
                buckets={buckets}
                bucketId={bucketId}
                isModalOpen={isAddModalOpen}
                handleOk={handleAddOk}
                handleCancel={handleAddCancel}
            />
            </>
        )
    }

    const { card_name, link } = card;
    return (
        <>
        <Card
            hoverable
            style={{ width: 300, border: "1px solid #ddd" }}
            actions={[
                <EditOutlined key="edit" onClick={onClickEdit} />,
                <DeleteOutlined key="delete" onClick={() => {dispatch(deleteCardFromBucket(buckets, bucketId, card.id))}} />,
            ]}
        >
            <Meta title={card_name} description={link} />
        </Card>
        <EditCardModal
            buckets={buckets}
            bucketId={bucketId}
            cardId={card.id}
            isModalOpen={isEditModalOpen}
            handleOk={handleEditOk}
            handleCancel={handleEditCancel}
        />
        </>
    )
}

export default CardI;