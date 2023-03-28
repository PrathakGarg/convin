import { FC } from "react";
import { useDispatch } from "react-redux";
import { Button } from "antd";

import HistoryCardList from "../../components/history-card-list/history-card-list.component";

import { deleteHistory } from "../../store/history/history.action";

const History: FC = () => {
    const dispatch = useDispatch();

    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <HistoryCardList />
            <Button style={{ margin: 25, bottom: 0, position: "inherit" }} onClick={() => {dispatch(deleteHistory())}}>Delete History</Button>
        </div>
    )
}

export default History;