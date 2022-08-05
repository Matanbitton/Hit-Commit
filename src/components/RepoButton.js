export default function RepoButton(props) {
  return (
    <div>
      <button className="repo-button">
        <p className="repo-button-logo">{props.icon}</p>
        <p className="repo-button-text">{props.title}</p>
      </button>
    </div>
  );
}
