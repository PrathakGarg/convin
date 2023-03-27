import { FC } from "react";
import { Card } from "antd";
import { ForwardOutlined, CloseCircleOutlined } from "@ant-design/icons";

import { HistoryItem } from "../../store/history/history.types";

const { Meta } = Card;

type CardProps = {
    historyItem: HistoryItem;
}

const HistoryCard: FC<CardProps> = ({ historyItem }) => {
    return (
        <Card
            hoverable
            style={{ width: 300, border: "1px solid #ccc"}}
            actions={[
                <ForwardOutlined key="forward"  />
            ]}
        >
            <Meta title={historyItem.card_name} description={historyItem.link} />
        </Card>
    )
}

export default HistoryCard;