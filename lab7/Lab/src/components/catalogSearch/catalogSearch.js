// CatalogSearch.js
import React from 'react';
import FilterSelector from './FilterSelector';

const CatalogSearch = () => {
    return (
        <div className="filterwrapper">
            <div className="filterinner">
                <div className="filter-options">
                    <FilterSelector />
                    <p className="sorted-by">Plates sorted by: material/price/location</p>
                </div>
                <div className="material-inputs">
                    <label htmlFor="minMaterial">Minimum price</label>
                    <input type="text" id="minMaterial" name="minMaterial" />
                    <label htmlFor="maxMaterial">Maximum material</label>
                    <input type="text" id="maxMaterial" name="maxMaterial" />
                </div>
                <button className="apply-button">Apply</button>
            </div>
        </div>
    );
};

export default CatalogSearch;
