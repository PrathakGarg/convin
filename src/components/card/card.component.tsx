import { FC } from "react";
import { Card } from "antd";

import { CardItem } from "../../store/bucket/bucket.types";

type CardProps = {
    card: CardItem
}

const CardI: FC<CardProps> = ({ card }) => {
    const { bucket, card_name, link } = card;
    return (
        <Card
            hoverable
        />
    )
}

export default CardI;