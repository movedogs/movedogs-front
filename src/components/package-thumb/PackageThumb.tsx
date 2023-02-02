import { useNavigate } from "react-router-dom";
import "./PackageThumb.scss";

interface Props {
  title: string;
  version: string;
}

const PackageThumb = ({ title, version }: Props) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/django");
  };
  return (
    <div className="package-thumb" onClick={onClick}>
      <div className="tag" />
      <div className="text-container">
        <span className="title">{title}</span>
        <span className="version">{version}</span>
      </div>
      <i className="right-arrow" />
    </div>
  );
};

export default PackageThumb;
