import React, { useState } from 'react';

const GifSearch = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value); // Update state as the user types
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        onSearch(searchTerm); // Pass the search term to the parent component
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="searchInput">Enter a Search Term </label>
            <input
                type="text"
                className="form-control"
                id="searchInput"
                value={searchTerm} // Controlled input
                onChange={handleInputChange} // Update state on input change
            />
            <button type="submit" className="btn btn-success">Search</button>
        </form>
    );
}

export default GifSearch;