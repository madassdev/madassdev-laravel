import React from "react";
import styled from "styled-components";

function RightSection() {
    return <Container>Right</Container>;
}

const Container = styled.div`
    width: 15%;
    @media (max-width: 768px) {
        display: none;
    }
    background-color: #fff;
    height: 100vh;
`;
export default RightSection;
