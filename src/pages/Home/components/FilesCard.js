/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import styled from 'styled-components';
import {Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.min.css';

import other from '../../../assets/icons/other.svg';
import redCloseIcon from '../../../assets/icons/close-red-variant-2.svg';

const StyledSwiper = styled(Swiper)`
  .swiper-slide {
    width: 80px;
    height: 80px;
    margin-right: 2rem;
  }
  .swiper-wrapper {
    padding: 2rem 0;
  }
`;

const Card = styled.div`
  margin-right: 0.5rem;
  position: relative;
  width: 98px;
  background: #ffffff;
  border: 1px solid #e6e6e6;
  box-sizing: border-box;
  border-radius: 5px;
  img {
    display: block;
    margin: 0.3rem auto;
    width: 91%;
  }
  .file-name,
  .file-size {
    width: 91%;
    margin: 0 auto;
  }
  .file-name {
    font-size: 0.7rem;
  }
  .file-size {
    font-size: 0.6rem;
    margin-bottom: 0.3rem;
    color: #aaaaaa;
  }
  &:hover {
    box-shadow: -5px 5px 9px 0px rgba(230, 230, 230, 1);
  }
`;

const CardContainer = styled.div`
  display: flex;
  max-width: 56%;
  overflow: auto;
`;

const RemoveFileIco = styled.img`
  position: absolute;
  width: 20px !important;
  margin: 0;
  right: -3px;
  top: -7px;
  cursor: pointer;
`;

// foreach file generate a card.
const FilesCard = ({files, className, onRemoveItemClick}) => {
  const cards = [];

  for (let i = 0; i < files.length; i += 1) {
    const file = files[i];
    cards.push(
      <SwiperSlide key={i}>
        <Card className={className}>
          <img src={other} alt="" />
          <p className="file-name">{file.name.substr(0, 13)}</p>
          <p className="file-size">{(file.size / 1000).toFixed(2)} KB</p>
          <RemoveFileIco
            src={redCloseIcon}
            onClick={event => onRemoveItemClick(i)}
          />
        </Card>
      </SwiperSlide>,
    );
  }

  return (
    <CardContainer>
      <StyledSwiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
      >
        {cards}
      </StyledSwiper>
    </CardContainer>
  );
};

export default FilesCard;
