import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faCircleDot,
  faShareNodes,
  faPlayCircle,
  faGrip,
  faBookOpen,
  faShield,
  faChartLine,
  faThumbTack,
  faEye,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import Repo from "./Repo";
import RepoButton from "./RepoButton";
import Tab from "./Tab";
import { faStar } from "@fortawesome/free-regular-svg-icons";

export default function UserInfo() {
  return (
    <div className="user-info-section">
      <Repo />
      <div className="repo-buttons">
        <RepoButton title="Pin" icon={<FontAwesomeIcon icon={faThumbTack} />} />
        <RepoButton title="Unwatch " icon={<FontAwesomeIcon icon={faEye} />} />
        <RepoButton
          title="Fork"
          icon={<FontAwesomeIcon icon={faShareNodes} />}
        />
        <RepoButton title="Star" icon={<FontAwesomeIcon icon={faStar} />} />
      </div>
      <div className="project-nav">
        <Tab title="Code" icon={<FontAwesomeIcon icon={faCode} />} />
        <Tab title="Issues" icon={<FontAwesomeIcon icon={faCircleDot} />} />
        <Tab
          title="Pull requests"
          icon={<FontAwesomeIcon icon={faShareNodes} />}
        />

        <Tab title="Actions" icon={<FontAwesomeIcon icon={faPlayCircle} />} />
        <Tab title="Projects" icon={<FontAwesomeIcon icon={faGrip} />} />
        <Tab title="Wiki" icon={<FontAwesomeIcon icon={faBookOpen} />} />
        <Tab title="Security" icon={<FontAwesomeIcon icon={faShield} />} />
        <Tab title="Insights" icon={<FontAwesomeIcon icon={faChartLine} />} />
        <Tab title="Settings" icon={<FontAwesomeIcon icon={faGear} />} />
      </div>
    </div>
  );
}
