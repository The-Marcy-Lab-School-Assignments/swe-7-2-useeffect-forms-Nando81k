import React, { useState } from 'react';
import NavBar from './components/NavBar';
import GifContainer from './components/GifContainer';
import GifSearch from './components/GifSearch';

const App = () => {
  const [searchTerm, setSearchTerm] = useState(''); // State to store the search term

  const handleSearch = (term) => {
    setSearchTerm(term); // Update the search term when the form is submitted
  };

  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <div className="ui container">
        <GifSearch onSearch={handleSearch} /> {/* Pass handleSearch to GifSearch */}
        <br />
        <GifContainer searchTerm={searchTerm} /> {/* Pass searchTerm to GifContainer */}
      </div>
    </div>
  );
};

export default App;
