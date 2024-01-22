
import React from 'react';

const FilterSelector = () => {
    return (
        <div className="dropdown">
            <label htmlFor="filter">Filter:</label>
            <select id="filter">
                <option>Sort by material</option>
                <option>Sort by price</option>
                <option>Sort by location</option>
            </select>
        </div>
    );
};

export default FilterSelector;
