import React, { useCallback, useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Autocomplete from 'react-autocomplete';
import SVG from 'react-inlinesvg';
import { searchEntry } from '../contentstack/api';

const SearchItem = (item, isHighlighted) => (
  <h4 style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
    {item.title}
  </h4>
);

const SearchInput = props => (
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <SVG src="/explore.svg" style={{ width: '40px', height: '40px', margin: '0 5px 0 0' }} />
    </InputGroup.Prepend>
    <FormControl
      placeholder="Looking for cocktails?"
      {...props}
    />
  </InputGroup>
);


export const SearchBar = ({ searchResultSelected }) => {
  const [results, setResults] = useState([]);
  const [filterTimeout, setFilterTimeout] = useState(0);
  const [previousValue, setPreviousValue] = useState('');
  console.log('results', results);

  const searchChange = useCallback(async (text) => {
    const searchResults = await searchEntry('cocktail', `{ "title": { "$regex": "${text}", "$options": "i" } }`);
    setResults(searchResults);
  }, []);

  const searchInputKeypress = useCallback((e) => {
    const newValue = e.target.value;
    if (newValue !== previousValue) { // if text has changed
      clearTimeout(filterTimeout); // this will interrupt previous search
      const newTimeout = setTimeout(() => {
        searchChange(newValue);
      }, 1000); // this will trigger new search some delay

      // we save timer and values for later calls
      setFilterTimeout(newTimeout);
      setPreviousValue(newValue);
    }
  }, [setFilterTimeout, setPreviousValue]);

  return (
    <Autocomplete
      getItemValue={item => item.title}
      items={results}
      renderItem={SearchItem}
      renderInput={SearchInput}
      value={previousValue}
      onChange={searchInputKeypress}
      onSelect={title => searchResultSelected(results.find(result => result.title === title).uid)}
    />

  );
};
