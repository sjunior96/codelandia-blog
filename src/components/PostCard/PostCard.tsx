import React from "react";
import HeartIcon from "../../assets/icons/HeartIcon";
import { TPostCardProps } from "../../types";
import SimpleButton from "../Button/SimpleButton";
import "./PostCard.css";

const PostCard = (props: TPostCardProps) => {
    return (
        <div className="card">
            <div className="card-header">
                <p className="post-date">{props.post.date}</p>
                <SimpleButton>
                    <HeartIcon />
                </SimpleButton>
            </div>

            <div className="card-title">
                <p className="post-title">{props.post.title}</p>
            </div>

            <div className="card-content">
                <p className="post-content">{props.post.content}</p>
            </div>
        </div>
    );
};

export default PostCard;