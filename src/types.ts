export interface IPost {
    title: string;
    content: string;
    date: string;
}

export type TPostsListProps = {
    children?: React.ReactNode;
    listItems: (items: IPost) => void;
    items: IPost[];
};

export type TBoxContainerProps = {
    children?: React.ReactNode;
};

export type TButtonProps = {
    children?: React.ReactNode;
};

export type TPostCardProps = {
    post: IPost;
};