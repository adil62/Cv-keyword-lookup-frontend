/* eslint-disable react/no-unescaped-entities */
import React, {useState} from 'react';
import styled from 'styled-components';

import Navbar from '../../components/shared/Navbar';
import DragAndDropZone from './components/DragAndDropZone';
import KeywordSearch from './components/KeywordSearch';
import Header from './components/Header';
import SearchResults from './components/SearchResults';
import LookupApi from '../../api/lookup';

const SplitScreenLayout = styled.div`
  display: flex;
  & > * {
    width: 50%;
  }
`;

const BodyContainer = styled.div`
  padding: 0 9rem;
`;

const Home = () => {
  const [uploadedFiles, setuploadedFiles] = useState([]);

  const onDrop = event => {
    event.preventDefault();
    setuploadedFiles(Array.from(event.dataTransfer.files));
  };

  const onFileRemove = deleteKey => {
    // remove file from state.
    setuploadedFiles(
      uploadedFiles.filter((file, index) => index !== deleteKey),
    );
  };

  // called by KeywordSearch comp
  const onSubmit = ({keywords}) => {
    console.log(keywords);
    const formData = new FormData();
    uploadedFiles.forEach(file => formData.append('files[]', file, file.name));
    keywords.forEach(keyword => formData.append('keywords[]', keyword));
    console.log(uploadedFiles);
    console.log(formData);

    LookupApi.submit(formData);
  };

  return (
    <>
      <Navbar />
      <BodyContainer>
        <Header />
        <SplitScreenLayout>
          <DragAndDropZone
            uploadedFiles={uploadedFiles}
            onDrop={onDrop}
            onFileRemove={onFileRemove}
          />
          <KeywordSearch onSubmit={onSubmit} />
        </SplitScreenLayout>
        <SearchResults />
      </BodyContainer>
    </>
  );
};

export default Home;
