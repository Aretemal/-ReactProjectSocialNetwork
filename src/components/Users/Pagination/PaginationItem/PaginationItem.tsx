/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

export function PaginationItem({ number, isCurrent, onPageChanged }) {
  const style = `page-item ${isCurrent && 'active'}`;
  return (
    <li className={style}>
      <button
        type='submit'
        onClick={() => { onPageChanged(number); }}
        className="page-link"
      >
        {number}
      </button>
    </li>
  );
}
