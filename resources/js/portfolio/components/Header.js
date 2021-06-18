import React from "react";
import styled from "styled-components";

function Header() {
    return (
        <Container>
            <Content>
                <Logo>MadAssDev</Logo>
                <NavMenu>
                    <li>
                        <a href="#">Link 1</a>
                    </li>
                    <li>
                        <a href="#">Link 2</a>
                    </li>
                    <li>
                        <a href="#">Link 3</a>
                    </li>
                </NavMenu>
            </Content>
        </Container>
    );
}

const Container = styled.div`
    position: fixed;
    background-color: white;
    padding: 0 25px;
    top: 0;
    left: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    width: 100vw;
    height: 60px;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 8px;
    max-width: 1128px;
    min-height: 100%;
    margin: 0px auto;
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: auto;
    width: 20%;
    li {
        list-style: none;
        color: #6e6e6e;
        &:hover {
            color: #000;
        }
    }
    
`;

const Logo = styled.div``;
export default Header;
