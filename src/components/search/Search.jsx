import React from 'react';
import styled from 'styled-components';
import { Results } from '../results/Results';

export const Search = (
  { onMethodChange, search,
    onTextChange, onSubmit,
    json, onJSONChange, method }
) => (
  <SearchStyled>
    <form onSubmit={onSubmit}>
      <input 
        type="text"
        name="search"
        className="url-bar"
        onChange={onTextChange}
        
      />
      <div>
        <label htmlFor="GET">
          GET
        </label>
        <input 
          name="method"
          value="GET" 
          type="radio"
          onChange={onMethodChange}
          checked={ method === 'GET' }
        />
        
        <label>
          POST
          <input 
            name="method"
            value="POST"
            type="radio"
            onChange={onMethodChange}
            checked={ method === 'POST' }
          />
        </label>
        <label>
          PUT
          <input 
            name="method"
            value="PUT"  
            type="radio"
            onChange={onMethodChange}
            checked={ method === 'PUT' }
          />
        </label>
        <label>
          PATCH
          <input 
            name="method"
            value="PATCH" 
            type="radio"
            onChange={onMethodChange}
            checked={ method === 'PATCH' }
          />
        </label>
        <label>
          DELETE
          <input 
            name="method"
            value="DELETE"
            type="radio"
            onChange={onMethodChange}
            checked={ method === 'DELETE' }
          />
        </label>
        <button>Go!</button>
      </div>
      <textarea
        placeholder="Raw JSON Body"
        onChange={onJSONChange}
        value={json}
      >
        
      </textarea>
    </form>
  </SearchStyled>
);

const SearchStyled = styled.div`
  width: 100%;
  padding: 2px;
  .url-bar {
    width: 100%;
    padding: 2px 2px;
    cursor: text;
  }


  textarea {
    margin-top: 5px;
    height: 6vw;
    width: 50%;
  }
  
`;
