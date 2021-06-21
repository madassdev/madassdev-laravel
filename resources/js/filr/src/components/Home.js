import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Directory from "./Directory";
import LeftSection from "./LeftSection";
import Main from "./Main";
import RightSection from "./RightSection";
import UploadModal from "./UploadModal";

function Home(props) {
    const [showModal, setShowModal] = useState("close");

    const handleClick = (e) => {
        e.preventDefault();
        if (e.target !== e.currentTarget) {
            return;
        }

        switch (showModal) {
            case "open":
                setShowModal("close");
                break;
            case "close":
                setShowModal("open");
                break;
            default:
                setShowModal("close");
                break;
        }
    };

    return (
        <Container>
            {/* {props.user === null && <Redirect to="/login" />} */}
            <LeftSection openModal={handleClick} />
            <MainContainer>
                <SearchBar>
                    <input name="searchInput" placeholder="SEARCH HERE" />
                </SearchBar>
                {props.children}
            </MainContainer>
            <RightSection onClick={handleClick} />
            <UploadModal
                showModal={showModal}
                handleClick={handleClick}
            ></UploadModal>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    /* max-width: 1128px; */
    display: flex;
`;

const MainContainer = styled.div`
    width: 60%;
    @media (max-width: 768px) {
        width: 100%;
    }
    background-color: #f0f2ff;
    padding: 10px 40px;
    height: 100vh;
`;

const SearchBar = styled.div`
    width: 70%;
    margin: 10px auto;

    input {
        border: 1px solid #e1e1e1;
        width: 100%;
        padding: 5px 20px;
        border-radius: 5px;
    }
`;

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
