import {useNavigate} from "react-router-dom";
import {IPackage} from "../../const";
import "./PackageThumb.scss";

interface Props {
    pac: IPackage;
}

const PackageThumb = ({ pac }: Props) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(
      `/package?packageName=${pac.packageName}`
    );
  };
  return (
    <div className="package-thumb" onClick={onClick}>
      <div className="tag" />
      <div className="text-container">
        <span className="title">{pac.packageName}</span>
        <span className="version">{pac.version}</span>
      </div>
      <i className="right-arrow" />
    </div>
  );
};

export default PackageThumb;
