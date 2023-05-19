import React, { Component } from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';

export default class WordsListItem extends Component {
  state = {
    isEdit: false,
    uaWord: this.props.word.uaWord,
    enWord: this.props.word.enWord,
  };

  handleEdit = () => {
    if (this.state.isEdit) {
      const updatedWord = {
        ...this.props.word,
        uaWord: this.state.uaWord,
        enWord: this.state.enWord,
      };
      this.props.onEdit(updatedWord);
    }
    this.setState(prevState => ({ isEdit: !prevState.isEdit }));
  };
    
    onChange = e => {
        this.setState({
      [e.target.name]: e.target.value,
    }
    )
    }

  render() {
    const { word, index, onDelete } = this.props;
    const { isEdit } = this.state;
    return (
      <li key={word.id}>
        <Checkbox />
        <span>{index + 1}</span>{' '}
        {isEdit ? (
          <TextField
            id="standard-basic"
            label="English"
            variant="standard"
            name="enWord"
            value={this.state.enWord}
            onChange={this.onChange}
          />
        ) : (
          <span>{word.enWord}</span>
        )}{' '}
        {isEdit ? (
          <TextField
            id="standard-basic"
            label="Ukrainian"
            variant="standard"
            name="uaWord"
            value={this.state.uaWord}
            onChange={this.onChange}
          />
        ) : (
          <span>{word.uaWord}</span>
        )}{' '}
        <button type="button" onClick={() => onDelete(word.id)}>
          Delete
        </button>{' '}
        <button type="button" onClick={this.handleEdit}>
          {isEdit ? 'Save' : 'Edit'}
        </button>
      </li>
    );
  }
}
