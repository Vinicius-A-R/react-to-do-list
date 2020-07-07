import React, { Component } from 'react';
import axios from 'axios';

import { Container } from './styles';

import Form from '../../components/Form';
import List from '../../components/List';

const URL = 'http://localhost:3003/api/todos';

export default class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      list: [],
    };

    this.handleTask = this.handleTask.bind(this);
    this.handleInputTask = this.handleInputTask.bind(this);
    this.handleRemove = this.handleRemove.bind(this);

    this.handleDone = this.handleDone.bind(this);
    this.handlePending = this.handlePending.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  refresh(description = '') {
    const search = description ? `&description__regex=/${description}/` : '';
    console.log(search);

    axios.get(`${URL}?sort=-createdAt${search}`).then((resp) => {
      this.setState({
        ...this.state,
        description,
        list: resp.data,
      });

      localStorage['list'] = JSON.stringify(resp.data);
    });
  }

  async componentDidMount() {
    let empty = localStorage['list'] ? false : true;

    if (empty) {
      await this.refresh();
    } else {
      await this.setState({
        list: JSON.parse(localStorage['list']),
      });

      console.log('AAAAAAAAAAAAAAAA');
      console.log(this.state.list);
    }
  }

  handleInputTask = (e) => {
    this.setState({ ...this.state, description: e.target.value });
  };

  handleSearch() {
    this.refresh(this.state.description);
  }

  handleTask = (e) => {
    e.preventDefault();

    const { description } = this.state;

    if (description === '') {
      return alert('Invalid Task!');
    }

    axios.post(URL, { description }).then((resp) => this.refresh());
  };

  async handleRemove(todo) {
    await axios
      .delete(`${URL}/${todo._id}`)
      .then((res) => this.refresh(this.state.description));
  }

  async handleDone(todo) {
    await axios.put(`${URL}/${todo._id}`, { done: true }).then((res) => {
      console.log(res.data);
      this.refresh(this.state.description);
    });
  }

  async handlePending(todo) {
    await axios.put(`${URL}/${todo._id}`, { done: false }).then((res) => {
      console.log(res.data);
      this.refresh(this.state.description);
    });
  }

  handleClear() {
    this.refresh();
  }

  render() {
    return (
      <>
        <Container>
          <h2>Tasks: </h2>

          <Form
            submitTask={this.handleTask}
            addTask={this.state.description}
            handleInputTask={this.handleInputTask}
            handleSearch={this.handleSearch}
            handleClear={this.handleClear}
          />

          <List
            listTask={this.state.list}
            remove={this.handleRemove}
            done={this.handleDone}
            warning={this.handlePending}
          />
        </Container>
      </>
    );
  }
}
