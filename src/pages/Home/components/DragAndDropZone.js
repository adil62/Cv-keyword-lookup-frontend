/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';

import FileUploadIcon from '../../../assets/icons/file_upload.svg';
import FilesCard from './FilesCard';

const StyledDropZone = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StyledDropZoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  min-height: 11rem;
  box-shadow: 1px 1px 5px 0px rgba(209, 186, 209, 1);
  justify-content: center;
  background-color: #fef5fd;
  margin-bottom: 1rem;
  img {
    width: 100px;
  }
  h3 {
    margin-bottom: 0.5rem;
  }
`;

const DropZone = ({uploadedFiles, onDrop, onFileRemove}) => {
  const onDragEnter = event => {
    event.preventDefault();
  };

  const onDragLeave = event => {
    event.preventDefault();
  };

  const onDragOver = event => {
    event.preventDefault();
  };

  return (
    <StyledDropZone
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <StyledDropZoneContainer>
        <img src={FileUploadIcon} alt="file upload icon" />
        <h3> Upload your files </h3>
        <p>
          Drop your files here or <b> browse .</b>
        </p>
      </StyledDropZoneContainer>
      <FilesCard
        onRemoveItemClick={onFileRemove}
        files={uploadedFiles}
        className="mt-3"
      />
    </StyledDropZone>
  );
};

export default DropZone;
