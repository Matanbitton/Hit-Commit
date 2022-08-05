export default function Tab(props) {
  return (
    <nav className="tabs">
      <button className="tab-button">
        {props.icon} {props.title}
      </button>
    </nav>
  );
}
