import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Results = ({ data }) => (
  <ResultsStyled>
    {
      JSON.stringify(data, null, 2)
    }
  </ResultsStyled>
);

const ResultsStyled = styled.pre`
  height: 39.7vw;
  
  margin-top: 10px;
  margin-right: .3vw;
  margin-bottom: .3vw;
  border: 1px solid lightgray;
  padding: 1em;
  overflow: auto;
  background-color: white;
`;

Results.propTypes = {
  data: PropTypes.array.isRequired
};
