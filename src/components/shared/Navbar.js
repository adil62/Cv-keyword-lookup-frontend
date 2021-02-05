/* eslint-disable arrow-body-style */
import styled from 'styled-components';

const StyledUl = styled.ul`
  box-shadow: 5px 0px 5px 0px rgb(208 208 208);
  list-style: none;
  display: flex;
  height: 10%;
  padding: 1rem 2rem;
  align-items: center;
  li:nth-child(1) {
    margin-left: auto;
  }
`;

const StyledLI = styled.li`
  cursor: pointer;
  margin-right: 1rem;
  font-weight: 600;
`;

const Navbar = () => {
  return (
    <StyledUl>
      <StyledLI>Home</StyledLI>
      <StyledLI>About</StyledLI>
    </StyledUl>
  );
};

export default Navbar;
