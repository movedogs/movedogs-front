import { useNavigate } from "react-router-dom";
import { IModule } from "../../const";
import "./PackageThumb.scss";

interface Props {
  module: IModule;
}

const PackageThumb = ({ module }: Props) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(
      `/package?address=${module.packageName}&name=${module.moduleName}`
    );
  };
  return (
    <div className="package-thumb" onClick={onClick}>
      <div className="tag" />
      <div className="text-container">
        <span className="title">{module.moduleName}</span>
        <span className="version">{module.version}</span>
      </div>
      <i className="right-arrow" />
    </div>
  );
};

export default PackageThumb;
