export default function TopicItem({ item }) {
  return (
    <li className="sidebar-item">
      <a href="#" className="sidebar-link">
        {item.name}
      </a>
    </li>
  );
}
