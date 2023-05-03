import "./Footer.scss"

function Footer () {

  return (
    <footer className="footer">
      <div className="footer-info">
        <p className="footer-text">
          Designed and developed by <span className="producer">Marco</span> and{" "}
          <span className="producer">Alireza</span>
        </p>
        <p className="footer-text">March 2023</p>
      </div>
    </footer>
  );
};

export default Footer;