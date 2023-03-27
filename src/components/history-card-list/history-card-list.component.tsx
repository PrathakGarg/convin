import { FC } from "react";
import { useSelector } from "react-redux";

import HistoryCard from "../history-card/history-card.component";

import { HistoryItem } from "../../store/history/history.types";
import { selectHistoryItems } from "../../store/history/history.selector";

import { CardListContainer } from "../card-list/card-list.styles";

const HistoryCardList: FC = () => {
    const history = useSelector(selectHistoryItems);

    return (
        <CardListContainer>
            {history.map((historyItem: HistoryItem) => (
                <HistoryCard historyItem={historyItem} />
            ))}
        </CardListContainer>
    )
}

export default HistoryCardList;