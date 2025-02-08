import React, { useState } from 'react'
import '../style/dashboard.css';

const CustomSearchBox = ({ searchString, setSearchString, apiCall, onClick }) => {

    const [timeoutId, setTimeoutId] = useState();

    const handleSearch = (e) => {
        setSearchString(e.target.value);
        let isSearch = true;
        clearTimeout(timeoutId);
        let _timeOutId = setTimeout(() => {
            apiCall(1, e.target.value);
        }, 2000);
        setTimeoutId(_timeOutId);
    };

    function handleClear(params) {
        setSearchString("");
        apiCall(1, "");
    }
    return (
        <>
            <div className="search_box">
                <input type="search"
                    value={searchString}
                    onChange={(e) => handleSearch(e)}
                    placeholder="Search"
                    className="search_input"
                />
                <i className="fas fa-search search_icon"></i>
            </div>
        </>
    )
}

export default CustomSearchBox
