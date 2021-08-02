import React, { Component } from 'react';
import styled from 'styled-components';
import { Header } from '../components/header/Header';
import { History } from '../components/history/History';
import { Results } from '../components/results/Results';
import { Search } from '../components/search/Search';

export default class MainContainer extends Component {
  state = {
    search: '',
    method: '',
    body: '',
    data: [
      {
        'root': {
          'Hello' : 'I am bored. PLEASE make a fetch!'
        }
      }
    ]
  }

  handleTextChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleMethodChange = ({ target }) => {
    this.setState({ method: target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();

    if(this.state.method === 'GET'){
      return fetch(this.state.search, {
        method: this.state.method,
      })
        .then(res => res.json())
        .then(res => this.setState({ data: res }))
        .catch(err => console.log(err));
    }
    else {
      return fetch(this.state.search, {
        method: this.state.method,
        body: this.state.body
      })
        .then(res => res.json())
        .then(res => this.setState({ data: res }))
        .catch(err => console.error(err));
    }
  }

  handleJSONChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }
  
  render() {
    return (
      <>
        <Header />
        <MainStyled>
          <History />
          <Search 
            onMethodChange={this.handleMethodChange}
            search={this.state.search}
            onTextChange={this.handleTextChange}
            onSubmit={this.onSubmit}
            results={this.state.results}
            onJSONChange={this.handleJSONChange}
            method={this.state.method}
          />
        </MainStyled>
        <Results data={this.state.data} />
      </>
    );
  }
}

const MainStyled = styled.div`
  display: flex;
`;
