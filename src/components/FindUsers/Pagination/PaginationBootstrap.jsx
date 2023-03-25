/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  PaginationItemBootstrap,
} from './PaginationItem/PaginationItemBootstrap.jsx';

export function PaginationBootstrap({ pagesCount, currentItem, onPageChanged }) {
  const items = [];
  for (let i = 1; i <= pagesCount; i++) {
    items.push(<PaginationItemBootstrap
      key={i}
      number={i}
      isCurrent={i === currentItem}
      onPageChanged={onPageChanged}
    />);
  }
  const previousStyle = currentItem - 1 === 0 ? 'disabled page-link' : 'page-link';
  const nextStyle = currentItem + 1 === 0 ? 'disabled page-link' : 'page-link';
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <button type="submit" className={previousStyle} onClick={() => { onPageChanged(currentItem - 1); }}>Previous</button>
        </li>
        {items}
        <li className="page-item">
          <button type="submit" className={nextStyle} onClick={() => { onPageChanged(currentItem + 1); }}>Next</button>
        </li>
      </ul>
    </nav>
  );
}
