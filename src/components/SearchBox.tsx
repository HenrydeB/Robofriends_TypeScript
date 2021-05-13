import * as React from 'react';

interface isSearchBoxProps {
  searchChange(event: React.SyntheticEvent<HTMLInputElement>): void;
}

// searchChange is an event that doesn't change the state. Events for react is pretty much what we typed above and is the industry standard of how we do this.
// We do the HTMLInputElement because as we see below we have and Input element for HTML, and since we don't return anything, we put the type void

const SearchBox = ({ searchChange } : isSearchBoxProps) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;