import React from 'react';
import {
  PaginationItem,
} from './PaginationItem/PaginationItem.jsx';

export function Pagination({ pagesCount, currentPage, onPageChanged }) {
  const items = [];
  for (let i = 1; i <= pagesCount; i++) {
    items.push(<PaginationItem
      key={i}
      number={i}
      isCurrent={i === currentPage}
      onPageChanged={onPageChanged}
    />);
  }
  const previousStyle = currentPage - 1 === 0 ? 'disabled page-link' : 'page-link';
  const nextStyle = currentPage + 1 === 0 ? 'disabled page-link' : 'page-link';
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <button type="submit" className={previousStyle} onClick={() => { onPageChanged(currentPage - 1); }}>Previous</button>
        </li>
        {items}
        <li className="page-item">
          <button type="submit" className={nextStyle} onClick={() => { onPageChanged(currentPage + 1); }}>Next</button>
        </li>
      </ul>
    </nav>
  );
}
