// PaginationComponent.js
import React, { useState } from 'react';

const Pagination = ({ data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {currentItems.map((item, index) => (
          <div key={index} style={{ width: '30%', margin: '10px', padding: '10px', border: '1px solid #ddd' }}>
            <img src={item.image} alt={`Item ${index + 1}`} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      {/* Render pagination controls */}
      <div style={{'margin-top':'7rem'}}>
        {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map(
          (item, index) => (
            <button className='bn-style' key={index} onClick={() => handlePageChange(index + 1)}>
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Pagination;
