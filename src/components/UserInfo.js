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
} from "@fortawesome/free-solid-svg-icons";
import Repo from "./Repo";
import Tab from "./Tab";

export default function UserInfo() {
  return (
    <div className="user-info-section">
      <Repo />;
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
      </div>
    </div>
  );
}
