import TopicItem from './TopicItem';

const topicList = [
  { id: 1, name: 'House' },
  { id: 2, name: 'Kids' },
  { id: 3, name: 'Food' },
  { id: 4, name: 'Transport' },
  { id: 5, name: 'Education' },
  { id: 6, name: 'Health' },
];

export default function TopicList() {
  return (
    <ul className="sidebar-list">
      {topicList.map((item) => (
        <TopicItem item={item} key={item.id} />
      ))}
    </ul>
  );
}
