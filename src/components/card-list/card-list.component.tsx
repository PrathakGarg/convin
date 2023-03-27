import { FC } from "react";

import Card from "../card/card.component";
import { CardItem } from "../../store/bucket/bucket.types";

import { CardListContainer } from "./card-list.styles";

type CardListProps = {
    cards: CardItem[];
    bucketId: number;
}

const CardList: FC<CardListProps> = ({ cards, bucketId }) => {
    return (
        <CardListContainer>
            {cards.map((card, index) => (
                <Card key={index} card={card} bucketId={bucketId} />
            ))}
            <Card bucketId={bucketId}/>
        </CardListContainer>
    )
}

export default CardList;