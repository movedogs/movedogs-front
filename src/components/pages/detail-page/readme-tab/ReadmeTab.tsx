import "./ReadmeTab.scss";

const ReadmeTab = () => {
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
          <span>MIT License</span>
        </div>
        <span className="title">Install</span>
        <span className="install-guide">
          Add the following line to your Move.toml:
        </span>
        <div className="guide-container">django = ‘3.3.0’</div>
        <span className="title">Aptos address</span>
        <div className="info">
          <i className="aptos" />
          <span className="underline">0x777...........................dbb</span>
        </div>
        <span className="title">Repository</span>
        <div className="info">
          <i className="github" />
          <span className="underline">github.com/django/django</span>
        </div>
        <span className="title">Owners</span>
        <div className="info">
          <i className="github" />
          <span>Axe Lee</span>
        </div>
      </div>
    </div>
  );
};

export default ReadmeTab;
