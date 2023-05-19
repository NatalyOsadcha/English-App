import React from 'react';
import WordsListItem from './WordsListItem';

export default function WordsList({ words, onDelete, onEdit }) {
  return (
    <ul>
      {words.map((word, index) => 
        <WordsListItem key={word.id} word={word} index={index} onDelete={onDelete} onEdit={ onEdit} />
      )}
    </ul>
  );
};


