import { SyntheticEvent } from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function ProductSearchForm({ submitCallback } : { submitCallback?: Function }) {
  const { push } = useHistory();
  const [query, setQuery] = useState('');

  function onSubmit(event: SyntheticEvent) {
    event.preventDefault();

    if(query) {
      push(`/search/${query}`)
      setQuery('');
      submitCallback && submitCallback(event);
    }
  }
  
  return (
    <form 
      role="search"
      onSubmit={onSubmit}
    >
      <input 
        type="search"
        className="input input--search"
        placeholder="Search product..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
    </form>
  );
}