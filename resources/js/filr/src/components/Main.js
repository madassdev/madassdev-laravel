import React from "react";
import styled from "styled-components";
import { formatBytes } from "../utils/functions";
import { folder_data, files_data, cloud_data } from "../utils/data";
import { Link } from "react-router-dom";

function Main() {
    return (
        <Container>
            <CloudSection>
                <p>Cloud storage</p>
                <CloudContainer>
                    {cloud_data.map((storage) => (
                        <StorageCard key={storage.name}>
                            <p>{storage.name}</p>
                        </StorageCard>
                    ))}
                </CloudContainer>
            </CloudSection>

            <FolderSection>
                <SectionHeader>
                    <p>Folders</p>
                    <Link to="/cloud">View All</Link>
                </SectionHeader>
                <FolderContainer>
                    {folder_data.map((folder) => (
                        <FolderCard key={folder.name}>
                            <i className="mdi mdi-folder"></i>
                            <div>
                                <p>{folder.name}</p>
                                <span>{folder.files} Files</span>
                            </div>
                        </FolderCard>
                    ))}
                    <NewFolderCard>
                        <span>
                            <i className="mdi mdi-plus"></i>
                        </span>
                        <p>Create new</p>
                    </NewFolderCard>
                </FolderContainer>
            </FolderSection>
            <RecentSection>
                <SectionHeader>
                    <p>Recents</p>
                    <a href="#">View all</a>
                </SectionHeader>
                <RecentContainer>
                    <RecentItemHeader>
                        <div>Name</div>
                        <div>Size</div>
                        <div>Last Modified</div>
                        <div>Options</div>
                    </RecentItemHeader>
                    {files_data.map((file) => (
                        <RecentItem key={file.name}>
                            <FileItem>
                                <span>{file.type}</span>
                                <p>
                                    {file.name}.{file.type.toLowerCase()}
                                </p>
                            </FileItem>
                            <div>{formatBytes(file.size)}</div>
                            <div>{file.last_modified}</div>
                            <div>...</div>
                        </RecentItem>
                    ))}
                </RecentContainer>
            </RecentSection>
        </Container>
    );
}

const Container = styled.div`
   
`;


// REUSABLES
const CommonCard = styled.div`
    padding: 20px;
    background: white;
    border-radius: 5px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const SectionHeader = styled.div`
    margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
        font-weight: 600;
        font-size: 16px;
    }
    a {
        color: #5663ff;
        text-decoration: none;
    }
`;

// CLOUD SECTION
const CloudSection = styled.div`
    margin-top: 50px;
    p {
        font-weight: 600;
        font-size: 16px;
    }
`;
const CloudContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-column-gap: 20px;
    margin-top: 20px;
`;

const StorageCard = styled.div`
    padding: 20px;
    background: white;
    border-radius: 5px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    p {
        font-weight: 600;
        font-size: 14px;
        color: #333;
    }
`;

// FOLDER SECTION
const FolderSection = styled.div`
    margin: 30px 0;
`;


const FolderContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-column-gap: 20px;

    @media (max-width: 768px) {
        grid-template-columns: 50% 50%;
        grid-gap: 20px;
    }
`;

const FolderCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    background: white;
    border-radius: 5px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    i {
        color: #3f4bf5;
        font-size: 30px;
    }
    p {
        font-weight: 400;
    }

    span {
        color: #666;
    }
    @media (max-width: 768px) {
        /* display: grid; */
        grid-template-columns: 30% auto;
    }
`;
const NewFolderCard = styled(CommonCard)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #3f4bf5;
    i {
        font-size: 30px;
    }
`;

// RECENT SECTION

const RecentSection = styled.div``;

const RecentContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const RecentItemGrid = styled.div`
    display: grid;
    grid-template-columns: 40% 20% 30% 10%;
    margin: 5px 0;
`;

const RecentItemHeader = styled(RecentItemGrid)`
    font-weight: bold;
    color: #666;
`;
const RecentItem = styled(RecentItemGrid)`
    background: white;
    border-radius: 5px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    div {
        display: flex;
        align-items: center;
    }
`;

const FileItem = styled.div`
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


export default Main;
