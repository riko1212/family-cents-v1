import TopicItem from './TopicItem';

export default function TopicList({ categories }) {
  return (
    <ul className="sidebar-list">
      {categories.map((item) => (
        <TopicItem item={item} key={item.id} />
      ))}
    </ul>
  );
}
