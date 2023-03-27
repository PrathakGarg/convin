import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";
import { EditOutlined, DeleteOutlined, CheckOutlined, CloseOutlined } from "@ant-design/icons";

import { CardDragItem } from "../card/card.component";
import { Bucket } from "../../store/bucket/bucket.types";
import { moveCard, deleteBucketFromList, editBucket } from "../../store/bucket/bucket.action";
import { selectBuckets } from "../../store/bucket/bucket.selector";
import { AppDispatch } from "../../store/store";

import { FormInputBox, FormButton } from "./navbar-bucket-item.styles";

type NavbarBucketItemProps = {
    bucket: Bucket;
};

const NavbarBucketItem: FC<NavbarBucketItemProps> = ({ bucket }) => {
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();
    const buckets = useSelector(selectBuckets);

    const [isEditing, setIsEditing] = useState(false);

    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const bucketName = form.bucket_name.value;
        dispatch(editBucket(buckets, bucket.id, bucketName));
        setIsEditing(false);
    }

    const [_, drop] = useDrop(() => ({
        accept: 'card',
        drop: (item: CardDragItem) => { dispatch(moveCard(item.card.bucketId, item.card.id, bucket.id)) },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    return (
        <div ref={drop} style={{display: "flex", justifyContent: "space-between"}}>
            {!isEditing && <div style={{width: "80%"}} onClick={() => navigate(`/bucket/${bucket.id}`)}>{bucket.bucket_name}</div>}
            {!isEditing && <div style={{ float: 'right', width: "20%" }}>
                <EditOutlined onClick={() => setIsEditing(true) } />
                <DeleteOutlined onClick={() => { dispatch(deleteBucketFromList(buckets, bucket.id)) }} />
            </div>}
            {isEditing && 
            <form action="" onSubmit={onFormSubmit} style={{display: "flex", justifyContent: "space-between"}}>
                <FormInputBox type="text" defaultValue={bucket.bucket_name} name="bucket_name" />
                <div style={{ width: "20%", display: "flex", justifyContent: "space-between"}}>
                    <FormButton type="submit"><CheckOutlined></CheckOutlined></FormButton>
                    <FormButton><CloseOutlined onClick={() => setIsEditing(false)}></CloseOutlined></FormButton>
                </div>
            </form>}
        </div>
    )
}

export default NavbarBucketItem;