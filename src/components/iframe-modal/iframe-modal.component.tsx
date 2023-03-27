import { FC } from "react";
import { Modal } from "antd";

type IframeModalProps = {
    isModalOpen: boolean;
    handleOk: () => void;
    handleCancel: () => void;
    link: string;
    title: string;
}

const IframeModal: FC<IframeModalProps> = ({ isModalOpen, handleOk, handleCancel, link, title }) => {
    const isYoutubeLink = (link: string) => {
        if (link.includes('youtube.com') || link.includes('youtu.be')) {
            return true;
        }
        return false;
    }

    const modifyLink = (link: string) => {
        if (isYoutubeLink(link)) {
            if (link.includes('youtu.be')) {
                const match = link.match(/youtu\.be\/([^?]+)/);
                const videoId = match && match[1];
                if (!videoId) 
                    return link;
                return `https://www.youtube.com/embed/${videoId}`;
            }
            else {
                const videoId = link.split('v=')[1];
                return `https://www.youtube.com/embed/${videoId}`;
            }
        }
        return link;
    }

    return (
        <Modal title={title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={[null]} width={800} style={{ alignItems:"center", display: "flex", justifyContent: "center"}}>
            <iframe width="560em" height="315em" src={modifyLink(link)} title="video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal>
    )
}

export default IframeModal;