import user from "../assets/user.png";

export default function Commit(props) {
  return (
    <div className="commit">
      <div className="commit-text-container">
        <p className="commit-text">{props.text}</p>
        <button className="commit-button" onClick={props.handleClick}>
          Random Commit
        </button>
      </div>
      <div className="user-commit-container">
        <img className="user-icon" src={user} alt=""></img>
        <p className="user-commit-name">CoffeeFueledDev</p>
        <p className="user-commit-time"> commited now</p>
      </div>
    </div>
  );
}
