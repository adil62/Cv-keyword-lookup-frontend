/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import styled from 'styled-components';
import {useForm} from 'react-hook-form';

import Plus from '../../../assets/icons/plus.svg';

const StyledKeywordSearchContainer = styled.div`
  height: 100%;
`;

const StyledForm = styled.form`
  width: 59%;
  margin-left: auto;

  margin-right: auto;
`;

const InputWrapper = styled.div`
  display: flex;
`;

const InputContainer = styled.div`
  display: flex;
  max-height: 200px;
  overflow-y: auto;
  flex-direction: column;
`;

const TextInput = styled.input`
  padding: 7px 2px;
  border: none;
  border-bottom: 1px solid;
  margin-bottom: 1rem;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

const Button = styled.img`
  width: 20px;
  cursor: pointer;
  margin-left: 1rem;
  margin-right: 1rem;
`;
const FindButton = styled.button`
  color: white;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1.5rem;
  display: block;
  padding: 10px 29px;
  background-color: #1aab8a;
  outline: none;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: 0.2s cubic-bezier(0.4, 0, 1, 1);
  }
`;

const KeywordSearch = ({onSubmit}) => {
  const [keywords, setkeywords] = useState(['', '']);
  const {register, errors, handleSubmit} = useForm();

  const addNewRow = () => {
    setkeywords(state => [...state, '']);
  };

  return (
    <StyledKeywordSearchContainer>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          {keywords.map((keyword, index) => (
            <InputWrapper key={index}>
              <TextInput
                name={`keywords[${index}]`}
                placeholder="Type keyword."
                type="text"
                ref={register}
              />
              <Button
                draggable="false"
                alt="add"
                src={Plus}
                onClick={addNewRow}
              />
            </InputWrapper>
          ))}
        </InputContainer>
        <FindButton type="submit"> Find </FindButton>
      </StyledForm>
    </StyledKeywordSearchContainer>
  );
};

export default KeywordSearch;
