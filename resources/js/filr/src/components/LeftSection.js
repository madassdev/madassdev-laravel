import React from "react";
import styled from "styled-components";
import { signOutUser } from "../actions";
import { connect } from "react-redux";

function LeftSection(props) {
    const openModal = (e) => {
        props.openModal(e);
    };
    return (
        <Container>
            <QuickAccessBar>
                <QuickAccessContainer>
                   
                <QuickAccessButton background="#13fe04">
                        A
                    </QuickAccessButton>
                    <QuickAccessButton background="#ff9000">
                        B
                    </QuickAccessButton>
                    <QuickAccessButton background="#fe0000">
                        C
                    </QuickAccessButton>
                    <QuickAccessButton background="#00d3ff">
                        D
                    </QuickAccessButton>
                    <QuickAccessButton background="#333" onClick={openModal}>
                        +
                    </QuickAccessButton>
                    <QuickAccessButton
                        background="#ff8000"
                        onClick={() => props.signOut()}
                    >
                        <i className="mdi mdi-logout"></i>
                    </QuickAccessButton>
                </QuickAccessContainer>
            </QuickAccessBar>

            <MenuBar>
                <MenuContainer>
                    <MenuItem>
                        <i className="mdi mdi-file" />
                        Storage
                    </MenuItem>
                    <MenuItem>
                        <i className="mdi mdi-message" />
                        Message
                    </MenuItem>
                    <MenuItem>
                        <i className="mdi mdi-map" />
                        Maps
                    </MenuItem>
                    <MenuItem>
                        <i className="mdi mdi-graph" />
                        Tracking
                    </MenuItem>
                    <MenuItem>
                        <i className="mdi mdi-cog" />
                        Settings
                    </MenuItem>
                </MenuContainer>
            </MenuBar>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 355px;
    @media (max-width: 768px) {
        display: none;
    }
`;

const QuickAccessBar = styled.div`
    background-color: #3f4bf5;
    /* display: flex;
    flex-direction: column;
    align-items: center; */
    justify-content: center;
    width: 100px;
`;

const QuickAccessContainer = styled.div`
    display: flex;
    height: 40vh;
    margin-top: 200px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const QuickAccessButton = styled.div`
    background: ${(props) => props.background};
    border-radius: 5px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    font-size: 20px;
    border: none;
    cursor: pointer;
    
`;

const MenuBar = styled.div`
    background-color: #5663ff;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: flex-end;
`;

const MenuContainer = styled.div`
    margin-top: 200px;
`;
const MenuItem = styled.div`
    color: white;
    text-transform: uppercase;
    padding: 10px 20px;
    i {
        margin-right: 10px;
    }
`;
const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOutUser()),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(LeftSection);
