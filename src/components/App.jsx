import React, { Component } from 'react';
import WordsForm from './WordsForm/WordsForm';
import WordsList from './WordsList/WordsList';
import WordsFilter from './WordsFilter/WordsFilter';

export default class App extends Component {
  state = {
    words: [],
    filter: '',
  };

  addWord = word => {
    this.setState(prevState => {
      return {
        words: [...prevState.words, word],
      };
    });
  };

  removeWord = id => {
    this.setState(prevState => {
      return {
        words: prevState.words.filter(el => el.id !== id),
      };
    });
  };

  handleChange = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  filterWords = () => {
    const { words, filter } = this.state;
    return words.filter(word => {
      return (
        word.uaWord.toLowerCase().includes(filter.toLowerCase().trim()) ||
        word.enWord.toLowerCase().includes(filter.toLowerCase().trim())
      );
    });
  };

  editWord = (word) => {
    
     this.setState(prevState => ({
      words: prevState.words.map(el => {
        if (el.id === word.id) {
          return word;
        }
        return el;
      })
    }))

  }

  render() {
    const filteredWords = this.filterWords()
    return (
      <div>
        <WordsForm addWord={this.addWord} />
        <WordsFilter onChange={this.handleChange} value={this.state.filter} />
        <WordsList words={filteredWords} onDelete={this.removeWord} onEdit={ this.editWord}/>
      </div>
    );
  }
}
