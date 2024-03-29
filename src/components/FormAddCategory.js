import { useState } from 'react';
import Button from './Button';

export default function FormAddCategory({ onAddCategory }) {
  const [categoryName, setCategoryName] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    if (!categoryName) return;
    const newCategory = {
      name: categoryName,
      id: Date.now(),
    };
    console.log(newCategory);
    onAddCategory(newCategory);
    setCategoryName('');
  }
  return (
    <form className="form-add-category" onSubmit={handleSubmit}>
      <label htmlFor="add-category" className="add-category-text">
        Category name
      </label>
      <input
        type="text"
        className="add-category-input"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
      ></input>
      {/* <button type="submit" className="submit-category btn">
        Add
      </button> */}
      <Button className="submit-category">Add</Button>
    </form>
  );
}
