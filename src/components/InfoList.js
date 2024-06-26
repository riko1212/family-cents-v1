import { useState } from 'react';

import InfoItem from './InfoItem';

export default function InfoList({
  items,
  onDeleteModalOpen,
  handleClearList,
  isModalClose,
  onDeleteItemId,
  onUpdateItemData,
  onClearModal,
}) {
  const [sortBy, setSortBy] = useState('order');

  let sortedItems;

  switch (sortBy) {
    case 'description':
      sortedItems = items
        .slice()
        .sort((a, b) => a.topic.localeCompare(b.topic));
      break;
    case 'hight':
      sortedItems = items.slice().sort((a, b) => b.income - a.income);
      break;
    case 'low':
      sortedItems = items.slice().sort((a, b) => a.income - b.income);
      break;
    case 'first':
      sortedItems = items.slice().sort((a, b) => a.date - b.date);
      break;
    case 'last':
      sortedItems = items.slice().sort((a, b) => b.date - a.date);
      break;
    default:
      sortedItems = items;
  }

  return (
    <>
      <ul className="info-list">
        {sortedItems.map((item) => (
          <InfoItem
            item={item}
            key={item.id}
            onDeleteModalOpen={onDeleteModalOpen}
            isModalClose={isModalClose}
            onDeleteItemId={onDeleteItemId}
            onUpdateItemData={onUpdateItemData}
          />
        ))}
      </ul>
      <div className="info-actions">
        <div className="info-sorting">
          <label className="info-sort-text" htmlFor="sort-select">
            Sort by:
          </label>
          <select
            className="info-sort-select btn"
            id="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="order">order</option>
            <option value="hight">from hight</option>
            <option value="low">from low</option>
            <option value="description">description</option>
            <option value="first">from first</option>
            <option value="last">from last</option>
          </select>
        </div>
        <button className="btn" onClick={onClearModal}>
          Clear list
        </button>
      </div>
    </>
  );
}
