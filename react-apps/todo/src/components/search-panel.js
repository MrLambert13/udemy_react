import React from 'react';

const SearchPanel = () => {
  const searchStyle = {
    fontSize: '13px'

  };
  return <input
    style={searchStyle}
    placeholder="search"
  />;
};

export default SearchPanel();