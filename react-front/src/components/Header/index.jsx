import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FaCalendarCheck } from 'react-icons/fa';

import { Container, Head, Logo } from './styles';

export default class Header extends Component {
  render() {
    return (
      <>
        <Container>
          <Head>
            <Logo>
              <Link to="/">
                <FaCalendarCheck />
                <span>TodoApp</span>
              </Link>
            </Logo>

            <Link to="/task">Tasks</Link>
            <Link to="/about">About</Link>
          </Head>
        </Container>
      </>
    );
  }
}
