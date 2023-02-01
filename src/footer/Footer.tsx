import "./Footer.scss";

const Footer = () => {
  const onClickColumn = (column: string) => {
    if (column === "") {
      window.open("");
    }
  };
  return (
    <footer className="move-docs-footer">
      <div className="upper">
        <i className="move-dogs-icon" />
        <div className="contact-short-cut">
          <div className="column">
            <span className="title">Move</span>
            <span className="value">Web-designers</span>
            <span className="value">Marketers</span>
            <span className="value">Small Business</span>
            <span className="value">Website Builder</span>
          </div>
          <div className="column">
            <span className="title">Policies</span>
            <span className="value">Academy</span>
            <span className="value">Blog</span>
            <span className="value">Themes</span>
          </div>
          <div className="column">
            <span className="title">Company</span>
            <span className="value">About Us</span>
            <span className="value">Careers</span>
            <span className="value">FAQs</span>
            <span className="value">Contact Us</span>
          </div>
        </div>
      </div>
      <div className="div" />
    </footer>
  );
};

export default Footer;
