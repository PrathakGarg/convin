import { FC } from "react";

import Card from "../card/card.component";
import { CardItem } from "../../store/bucket/bucket.types";

type CardListProps = {
    cards: CardItem[];
}

const CardList: FC<CardListProps> = ({ cards }) => {
    return (
        <div>
            {cards.map((card, index) => (
                <Card key={index} card={card} />
            ))}
        </div>
    )
}

export default CardList;