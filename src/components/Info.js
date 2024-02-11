import InfoList from './InfoList';

export default function Info({ items, sum, onDeleteItem, onClearList }) {
  return (
    <div className="info">
      <p className="info-text">
        Kids: <span className="info-amount">{sum} UAH</span>
      </p>

      <InfoList
        items={items}
        onDeleteItem={onDeleteItem}
        onClearList={onClearList}
      />
    </div>
  );
}
