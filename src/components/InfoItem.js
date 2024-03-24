export default function InfoItem({ item, onDeleteItem }) {
  function isToday(date) {
    const now = new Date();

    // Отримати сьогоднішню дату без часу
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    // Отримати дату з Date.now() і звести час до півночі
    const dateFromTimestamp = new Date(date);
    const timestampDate = new Date(
      dateFromTimestamp.getFullYear(),
      dateFromTimestamp.getMonth(),
      dateFromTimestamp.getDate()
    );

    // Перевірити, чи обидві дати однакові
    return today.getTime() === timestampDate.getTime();
  }
  return (
    <li className="info-item">
      <div className="info-item-wrap">
        <p className="info-item-text">{item.topic}:</p>
        <p className="info-item-count">{item.income} UAH</p>
        <p className="info-item-data">
          {isToday(item.date)
            ? 'Today'
            : new Date(item.date).toLocaleDateString('uk-UA')}
        </p>
      </div>
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
