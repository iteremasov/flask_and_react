import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import { Header } from '../components/Header';
import { Router } from './Router';
export default class Home extends Component {

  checkToken() {
    const token = localStorage.getItem('token')
    if (!token) return false
    return true
  }
  render() {
    return (

      <div className="Home">
          <Header />
        <Container maxWidth="lg">
          <Router />
        </Container>
      </div>
    );
  }
}