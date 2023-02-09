import { useNavigate } from "react-router-dom";
import { IModule } from "../../const";
import "./PackageThumb.scss";

interface Props {
  onClick: () => void;
  title: string;
}

const PackageElement = ({ onClick, title }: Props) => {
  return (
    <div className="package-thumb" onClick={onClick}>
      <div className="tag" />
      <div className="text-container">
        <span className="title">{title}</span>
      </div>
      <i className="right-arrow" />
    </div>
  );
};

export default PackageElement;
