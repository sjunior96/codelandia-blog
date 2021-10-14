import React from "react";
import BoxContainer from "../components/BoxContainer/BoxContainer";
import Header from "../components/Header/Header";
import PostCard from "../components/PostCard/PostCard";
import PostsList from "../components/PostsList/PostsList";
import { IPost } from "../types";

const HomeScreen = () => {
    const posts = [
        {
            title: "Agora é oficial: o Windows 11 está vindo",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.",
            date: "02 de jul, 2021"
        },
        {
            title: "Tim Berners-Lee vai leiloar código-fonte da web",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit lectus libero, id efficitur arcu viverra ac. Etiam sed sagittis velit, vitae convallis turpis. Praesent in purus non tellus tincidunt fermentum eu at sem. Curabitur lacus libero.",
            date: "02 de jul, 2021"
        }
    ];

    const listItems = (item: IPost) => (
        <PostCard post={item} />
    );

    return (
        <BoxContainer>
            <Header />
            <PostsList
                items={posts}
                listItems={(item) => listItems(item)}
            />
        </BoxContainer>
    );
};

export default HomeScreen;