import React, { useState, useRef } from "react";
import { formatBytes, truncate } from "../utils/functions";
import styled from "styled-components";

function UploadModal(props) {
    const reset = (e) => {
        props.handleClick(e);
        setUploadedFile(null);
    };
    const [uploadedFile, setUploadedFile] = useState(null);

    const inputFile = useRef(null);

    const selectFile = () => {
        inputFile.current.click();
    };
    const handleChange = (e) => {
        const file = e.target.files[0];

        if (file === "" || file === undefined) {
            alert("not a valid file, file is", typeof file);
            return;
        }

        console.log(file);
        setUploadedFile(file);
    };

    const removeFile = (e) => {
        setUploadedFile(null);
    };

    return (
        <>
            {props.showModal == "open" && (
                <Container>
                    <Content>
                        <Header>
                            <h2>Upload file</h2>
                            <span onClick={reset}>
                                <i className="mdi mdi-close"></i>
                            </span>
                        </Header>
                        <Body>
                            {uploadedFile ? (
                                <UploadStatus>
                                    <UploadedFile>
                                        <FileExt>
                                            {uploadedFile.name.split(".").pop()}
                                        </FileExt>
                                        <FileName>
                                            {truncate(uploadedFile.name) +
                                                uploadedFile.name
                                                    .split(".")
                                                    .pop()}
                                        </FileName>
                                        <FileStatus>
                                            <p>
                                                {formatBytes(uploadedFile.size)}
                                            </p>
                                            <span>
                                                30% uploaded
                                                <i
                                                    className="mdi mdi-close"
                                                    onClick={removeFile}
                                                ></i>
                                            </span>
                                        </FileStatus>
                                    </UploadedFile>
                                </UploadStatus>
                            ) : (
                                <UploadBox onClick={selectFile}>
                                    <input
                                        type="file"
                                        accept="iimage/gif, video/mp4, image/jpg, image/jpeg"
                                        name="file"
                                        id="file"
                                        style={{ display: "none" }}
                                        ref={inputFile}
                                        onChange={handleChange}
                                    />
                                    <h2>Select file to upload</h2>
                                </UploadBox>
                            )}

                            <UploadAction>
                                <button onClick={reset}>Cancel</button>
                            </UploadAction>
                        </Body>
                    </Content>
                </Container>
            )}
        </>
    );
}

const UploadAction = styled.div`
    button{
        float: right;
        border: none;
        padding: 4px 8px;
        border-radius: 3px;
        background: rgba(0,0,0,0.3);
        color: white;
    }
`

const UploadedFile = styled.div`
    display: grid;
    grid-template-columns: 20% auto auto;
    column-gap: 30px;
    width: 100%;
`;
const FileName = styled.div`
    font-weight: 700;
    color: rgba(0, 0, 0, 0.5);
    text-transform: capitalize;
    display: flex;
    align-items: center;
`;

const FileStatus = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
        color: rgba(0, 0, 0, 0.8);
    }
    span {
        display: flex;
        align-items: center;
        color: rgba(0, 0, 0, 0.5);
        font-size: 10px;
        i {
            font-size: 16px;
            margin-left: 16px;
            color: red;
            cursor: pointer;
        }
    }
`;

const FileExt = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border-radius: 3px;
    margin-right: 20px;
    font-weight: 700;
    color: white;
    text-transform: uppercase;
    font-size: 16px;
    background: #ff8000;
`;
const UploadStatus = styled.div`
    display: flex;
`;
const UploadBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 100%;
    border-radius: 5px;
    padding: 60px;
    border: 2px dashed rgba(0, 0, 128, 0.5);
    h2 {
        font-weight: 700;
        font-size: 20px;
        color: rgba(0, 0, 0, 0.3);
    }
`;
const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.8);
    animation: fadeIn 0.3s;
`;

const Content = styled.div`
    width: 100%;
    max-width: 552px;
    background: white;
    max-height: 90%;
    overflow: initial;
    border-radius: 5px;
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    top: 32px;
`;
const Header = styled.div`
    padding: 16px 20px;
    border-bottom: rgba(0, 0, 0, 0.15);
    font-size: 16px;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.6);
    font-weight: 400;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
        font-weight: 700;
    }
    span {
        height: 40px;
        width: 40px;
        min-width: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 3px;
        color: rgba(0, 0, 0, 0.5);
        cursor: pointer;
        i {
            pointer-events: none;
        }
    }
`;

const Body = styled.div`
    padding: 20px;
    display: inline-flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 30px;
`;

export default UploadModal;
