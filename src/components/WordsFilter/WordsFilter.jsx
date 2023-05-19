import React from 'react';
import TextField from '@mui/material/TextField';

export default function WordsFilter({value, onChange}) {
  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Filter"
        variant="outlined"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
