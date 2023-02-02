import { IModule } from "../../../../const";
import "./ReadmeTab.scss";

interface Props {
  module?: IModule;
}

const ReadmeTab = ({ module }: Props) => {
  return (
    <div className="readme-tab">
      <div className="readme-area"></div>
      <div className="module-info-area">
        <span className="title">Metadata</span>
        <div className="info">
          <i className="calender" />
          <span>5 months ago</span>
        </div>
        <div className="info">
          <i className="license" />
          <span>{module?.license}</span>
        </div>
        <span className="title">Install</span>
        <span className="install-guide">
          Add the following line to your Move.toml:
        </span>
        <div className="guide-container">
          {module?.moduleName} = ‘{module?.version}’
        </div>
        <span className="title">Aptos address</span>
        <div className="info">
          <i className="aptos" />
          <span className="underline">{module?.aptosAddress}</span>
        </div>
        <span className="title">Repository</span>
        <div className="info">
          <i className="github" />
          <span className="underline">{module?.githubURI}</span>
        </div>
        <span className="title">Owners</span>
        <div className="info">
          <i className="github" />
          <span>{module?.author}</span>
        </div>
      </div>
    </div>
  );
};

export default ReadmeTab;
