import { FC, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined, PlayCircleOutlined } from "@ant-design/icons";
import { useDrag } from "react-dnd";

import AddCardModal from "../add-card-modal/add-card-modal.categories";
import EditCardModal from "../edit-card-modal/edit-card-modal.component";
import IframeModal from "../iframe-modal/iframe-modal.component";

import { CardItem } from "../../store/bucket/bucket.types";
import { selectBuckets } from "../../store/bucket/bucket.selector";
import { deleteCardFromBucket } from "../../store/bucket/bucket.action";
import { addCardToHistory } from "../../store/history/history.action";
import { selectHistoryItems } from "../../store/history/history.selector";

const { Meta } = Card;

type CardProps = {
    bucketId: number;
    card?: CardItem;
}

export type CardDragItem = {
    card: CardItem;
}

type CardDragProps = {
    type: "card";
    item: CardDragItem;
    collect: (monitor: any) => { isDragging: boolean };
}

const CardI: FC<CardProps> = ({ bucketId, card }) => {
    const dispatch = useDispatch();
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isIframeModalOpen, setIsIframeModalOpen] = useState(false);
    const buckets = useSelector(selectBuckets);
    const history = useSelector(selectHistoryItems);

    const onClickAdd = () => {setIsAddModalOpen(true);}
    const handleAddOk = () => {setIsAddModalOpen(false);}
    const handleAddCancel = () => {setIsAddModalOpen(false);}

    const onClickEdit = () => {setIsEditModalOpen(true);}
    const handleEditOk = () => {setIsEditModalOpen(false);}
    const handleEditCancel = () => {setIsEditModalOpen(false);}

    const onClickDelete = (card: CardItem) => {dispatch(deleteCardFromBucket(buckets, card.bucketId, card.id))}

    const onClickPlay = (card: CardItem) => {
        dispatch(addCardToHistory(history, card.bucketId, card.id, card.card_name, card.link));
        setIsIframeModalOpen(true);
    }
    const handlePlayOk = () => {setIsIframeModalOpen(false);}
    const handlePlayCancel = () => {setIsIframeModalOpen(false);}

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

    const [{ isDragging }, drag] = useDrag((): CardDragProps => ({
        type: "card",
        item: { card },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))

    const { card_name, link } = card;
    return (
        <>
        <Card
            ref={drag}
            hoverable
            style={{ width: 300, border: "1px solid #ccc", opacity: isDragging ? 0.5 : 1 }}
            actions={[
                <PlayCircleOutlined key="play" onClick={() => onClickPlay(card)} />,
                <EditOutlined key="edit" onClick={onClickEdit} />,
                <DeleteOutlined key="delete" onClick={() => onClickDelete(card)} />,
            ]}
        >
            <Meta title={card_name} description={link} />
        </Card>
        <EditCardModal
            buckets={buckets}
            bucketId={card.bucketId}
            cardId={card.id}
            isModalOpen={isEditModalOpen}
            handleOk={handleEditOk}
            handleCancel={handleEditCancel}
        />
        <IframeModal
            isModalOpen={isIframeModalOpen}
            handleOk={handlePlayOk}
            handleCancel={handlePlayCancel}
            link={link}
            title={card_name}
        />
        </>
    )
}

export default CardI;