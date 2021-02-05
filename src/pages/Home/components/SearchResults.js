/* eslint-disable arrow-body-style */
import React from 'react';
import styled from 'styled-components';

const Heading = styled.h3`
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

const SearchResultContainer = styled.div`
  height: 100%;
  border-radius: 7px;
  min-height: 200px;
`;

const ResultItem = styled.div`
  border-left: 2px solid #19ab8a;
`;

const ResultItemFileName = styled.div`
  margin: 0.5rem;
  font-weight: 700;
`;

const ResultItemMatchKeyword = styled.div`
  margin: 0.5rem 1rem;
`;

const SearchResult = () => {
  return (
    <SearchResultContainer>
      <Heading>Matching results(4)</Heading>
      <ResultItem>
        <ResultItemFileName>A.pdf</ResultItemFileName>
        <ResultItemMatchKeyword>React,jquery</ResultItemMatchKeyword>
      </ResultItem>

      <ResultItem>
        <ResultItemFileName>Asw.pdf</ResultItemFileName>
        <ResultItemMatchKeyword> jquery </ResultItemMatchKeyword>
      </ResultItem>
    </SearchResultContainer>
  );
};

export default SearchResult;
