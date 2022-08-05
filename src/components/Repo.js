import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer } from "@fortawesome/free-solid-svg-icons";

export default function Repo() {
  return (
    <div className="repo-info">
      <p className="icon-computer">
        <FontAwesomeIcon icon={faComputer} />
      </p>
      <p className="dev-name">CoffeeFueledDev</p>
      <p className="icon-slash">/</p>
      <h3 className="repo-name">my-feature</h3>
      <p className="repo-privacy">Public</p>
    </div>
  );
}
