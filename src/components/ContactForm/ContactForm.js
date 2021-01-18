import React, { Component } from "react";
import s from './ContactForm.module.css';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onAddContact({ ...this.state });

    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={s.contactForm} onSubmit={this.handleSubmit}>
        <label className={s.contactFormLabel}>
          Name
          <input
            className={s.contactFormInput}
            type='text'
            name='name'
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label className={s.contactFormLabel}>
          Number
          <input
            className={s.contactFormInput}
            type='text'
            name='number'
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>
        <button className={s.contactFormButton} type='submit'>
          Add contact
        </button>
      </form>
    );
  }
}
