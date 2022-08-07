import RepoButton from "./RepoButton";
import Commit from "./Commit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import format from "date-fns/format";
import commitMessages from "./commitMessages";
import { useState } from "react";

export default function Content() {
  const date = format(new Date(), " MMM d ,yyyy");

  const [commitMessage, setCommitMessage] = useState();

  function getCommitMessage() {
    const randomNum = Math.floor(Math.random() * commitMessages.commits.length);
    const commitMessagesArr = commitMessages.commits;
    setCommitMessage(commitMessagesArr[randomNum]);
  }

  return (
    <div className="main-content">
      <RepoButton
        title="main ▼"
        icon={<FontAwesomeIcon icon={faCodeBranch} />}
      />
      <p className="date">Commits on {date}</p>
      <p className="line"></p>
      <p className="line-icon">{<FontAwesomeIcon icon={faBullseye} />}</p>
      <Commit text={commitMessage} handleClick={getCommitMessage} />
    </div>
  );
}
