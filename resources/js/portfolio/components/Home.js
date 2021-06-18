import React from "react";
import styled from "styled-components";

function Home() {
    return (
        <Container>
            <HeroContainer>
                <Hero>
                    <p>Favour</p>
                    <p color="#ee9817">Olayinka</p>
                </Hero>
                <Image>
                    <img src="images/hero-image.png" alt="hero image" />
                </Image>
                <AboutText>About me</AboutText>
            </HeroContainer>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    max-width: 1128px;
    margin: 0px auto;
`;

const HeroContainer = styled.div`
    background-color: #2d2d39;
    color: white;
    height: 400px;
    display: flex;
    justify-content: center;
`;
const Hero = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    p {
        font-weight: 700;
        font-size: 42px;
    }
`;

const Image = styled.div`
    z-index: 1;
    margin-top: 20px;
    img{
        height:100%;
    }
`;

const AboutText = styled.div`
    z-index: 1;
`;

export default Home;
