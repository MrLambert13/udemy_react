import React from 'react';

const ItemStatusFilter = () => {
  return (
    <div className="item-status-filter btn-group">
      <button type="button" className="btn btn-info">
        All
      </button>
      <button type="button" className="btn btn-secondary">
        Active
      </button>
      <button type="button" className="btn btn-secondary">
        Done
      </button>
    </div>
  );
};

export default ItemStatusFilter;