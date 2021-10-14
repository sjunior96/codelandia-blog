import React from "react";
import './PostsList.css';
import { IPost, TPostsListProps } from "../../types";

const PostsList = (props: TPostsListProps) => {
    return (
        <div className="post-list">
            {props.listItems
                && props.items
                && props.items.map((item) => props.listItems(item))
            }
        </div>
    );
};

export default PostsList;