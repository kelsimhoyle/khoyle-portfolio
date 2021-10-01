import styled from "styled-components";

export const BlogPostPage = styled.main`
    width: 80%;
    margin: auto;
`

export const BlogPostContent = styled.div`
    width: 70%;
    padding: 20px;
    margin: auto;

    h2, h3, h4, p {
        margin: 10px;

    }
    p, li {
        line-height: 1.5;
    }

    ul {
        list-style: square;
        padding-left: 50px;
    }

    li {
        padding: 2px;
    }
`

export const BlogPostTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`