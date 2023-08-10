import React, { useState } from 'react';
import axios from 'axios';

function Search() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
        if (searchQuery.trim() === '') {
            return;
        }

        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/search?q=${searchQuery}`);
            setSearchResults(response.data.results);
        } catch (error) {
            console.error('Error searching:', error);
        }
    };

    return (
        <div className="search-component">
            <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            <div className="search-results">
                {searchResults.map((result) => (
                    <div key={result.id} className="search-result">
                        <p>{result.name}</p>
                        {/* Display more information about the search result as needed */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Search;
