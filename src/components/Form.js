import { useState } from 'react';

export default function Form({ onAddSum, onAddItems }) {
  const [income, setIncome] = useState('');
  const [topic, setTopic] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!income || !topic) return;

    const result = { income, topic, id: Date.now() };
    console.log(result);

    onAddSum(result.income);
    onAddItems(result);

    setIncome('');
    setTopic('');
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="input-wrap">
        <input
          type="text"
          name="user-text"
          className="form-input"
          placeholder="Enter type"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <input
          type="number"
          name="user-sum"
          className="form-input"
          placeholder="Enter data"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
        />
      </div>

      <button type="submit" className="form-btn btn">
        Save
      </button>
    </form>
  );
}
