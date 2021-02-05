/* eslint-disable react/no-unescaped-entities */
import styled from 'styled-components';

const StyledHeader = styled.div`
  margin-bottom: 2rem;
  margin-top: 2rem;
  ul {
    list-style: none;
  }
  h2 {
    font-size: 32px;
    margin-bottom: 1rem;
  }
  ul li {
    font-weight: 300;
  }
`;

const Header = () => (
  <StyledHeader>
    <h2>C.V keyword lookup</h2>
    <ul>
      <li>1. Upload multiple C.V's.</li>
      <li>2. Add terms to search for.</li>
      <li>3. Get C.V's that match the terms.</li>
    </ul>
  </StyledHeader>
);

export default Header;
