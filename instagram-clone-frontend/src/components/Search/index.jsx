import React, { useState } from 'react';
import axios from 'axios';

function Search({handleUnfollow,isSearchVisible}) {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
        if (searchQuery.trim() === '') {
            return;
        }
        
        try {
            const token = localStorage.getItem('jwtToken');
            const response = await axios.get(`http://127.0.0.1:8000/api/search/${searchQuery}`,{headers: {Authorization: `Bearer ${token}`,},});
            setSearchResults(response.data.users);
            console.error(response.data);
        } catch (error) {
            console.error('Error searching:', error);
        }
    };

    return (
        <div className={`${isSearchVisible ? 'search-component' : 'display-none'}`}>
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
                        <h4>{result.username}</h4>
                        <button onClick={() => handleUnfollow(result.id)}>follow</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Search;
