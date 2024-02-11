export default function InfoItem({ item, onDeleteItem }) {
  return (
    <li className="info-item">
      <p className="info-item-text">
        {item.topic}:<span>{item.income} UAH</span>
      </p>
      <div className="info-icons">
        <button type="button" className="info-icon-btn info-edit">
          &#9998;
        </button>
        <button
          type="button"
          className="info-icon-btn info-delete"
          onClick={() => onDeleteItem(item.id)}
        >
          &#10060;
        </button>
      </div>
    </li>
  );
}
