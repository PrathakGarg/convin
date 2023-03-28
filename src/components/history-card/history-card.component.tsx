import { FC } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Card } from "antd";
import { ForwardOutlined, CloseCircleOutlined } from "@ant-design/icons";

import { HistoryItem } from "../../store/history/history.types";
import { selectBuckets } from "../../store/bucket/bucket.selector";

const { Meta } = Card;

type CardProps = {
    historyItem: HistoryItem;
}

const HistoryCard: FC<CardProps> = ({ historyItem }) => {
    console.log(historyItem);
    const navigate = useNavigate();
    const buckets = useSelector(selectBuckets);

    const isCardExists = buckets.some((bucket) => bucket.cards.some((card) => card.id === historyItem.cardId));
    const actions = isCardExists ? [<ForwardOutlined key="forward" onClick={() => {navigate(`/bucket/${historyItem.bucketId}`)}} />] : [<CloseCircleOutlined key="close" />];

    return (
        <Card
            hoverable
            style={{ width: 300, border: "1px solid #ccc"}}
            actions={actions}
        >
            <Meta title={historyItem.card_name} description={historyItem.date} />
            <p>{historyItem.link}</p>
        </Card>
    )
}

export default HistoryCard;