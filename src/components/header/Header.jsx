import React from 'react';
import styled from 'styled-components';

export const Header = () => (
  <HeaderStyles>
    <h1>RESTless</h1>

  </HeaderStyles>
);

const HeaderStyles = styled.div`
  width: 100vw;
  background-color: #20405f;
  h1{
    font-family: Verdana,Geneva,Tahoma,sans-serif;
    color: white;
    font-size: 2rem;
    font-weight: 700;
    padding: 1rem 2rem;
  }
`;
