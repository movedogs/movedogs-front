import "./PackageThumb.scss";

interface Props {
  title: string;
  version: string;
}

const PackageThumb = ({ title, version }: Props) => {
  const onClick = () => {};
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
