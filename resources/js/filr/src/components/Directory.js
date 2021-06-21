import React from "react";
import { connect } from "react-redux";
import { fetchItems } from "../actions/itemActions";
import styled from "styled-components";
import { useEffect } from "react";
import { files_data } from "../utils/data";
import { formatBytes } from "../utils/functions";

function Directory(props) {
    useEffect(() => {
        props.fetchItems();
    }, []);
    return (
        <>
            <button onClick={() => props.fetchItems()}>Fetch</button>
            <ItemsBreadcrumb></ItemsBreadcrumb>
            <Loader></Loader>
            <ItemsContainer>
                <ItemsHeader>
                    <div>Name</div>
                    <div>Size</div>
                    <div>Last Modified</div>
                    <div>Options</div>
                </ItemsHeader>
                {files_data.map((file) => (
                    <Item key={file.name}>
                        <ItemFile>
                            <span>{file.type}</span>
                            <p>
                                {file.name}.{file.type.toLowerCase()}
                            </p>
                        </ItemFile>
                        <div>{formatBytes(file.size)}</div>
                        <div>{file.last_modified}</div>
                        <div>...</div>
                    </Item>
                ))}
            </ItemsContainer>
            {props.items.length ? (
                <h1>We have items</h1>
            ) : (
                <h1>Folder empty. Start by uploading</h1>
            )}
        </>
    );
}

const ItemsBreadcrumb = styled.div``;
const Loader = styled.div``;

const ItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
const RecentItemGrid = styled.div`
    display: grid;
    grid-template-columns: 40% 20% 30% 10%;
    margin: 5px 0;
`;

const ItemsHeader = styled(RecentItemGrid)`
    font-weight: bold;
    color: #666;
`;
const Item = styled(RecentItemGrid)`
    background: white;
    border-radius: 5px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    div {
        display: flex;
        align-items: center;
    }
`;

const ItemFile = styled.div`
    display: flex;
    align-items: center;
    span {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        width: 50px;
        font-weight: 600;
        color: white;
        background: #3f4bf5;
        text-transform: uppercase;
        margin-right: 10px;
    }
`;

const mapStateToProps = (state) => {
    return {
        items: state.itemState.items,
        is_fetching: state.itemState.is_fetching,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchItems: () => dispatch(fetchItems()),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Directory);
