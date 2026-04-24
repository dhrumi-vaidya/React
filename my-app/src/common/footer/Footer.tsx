import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">

        <div className="footer__brand">
          <h2>MyBrand</h2>
          <p>Building modern web experiences with speed and style.</p>
        </div>

        <div className="footer__links">
          <div className="footer__column">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
          </div>

          <div className="footer__column">
            <h4>Support</h4>
            <a href="#">Help Center</a>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
          </div>

          <div className="footer__column">
            <h4>Contact</h4>
            <a href="#">Email Us</a>
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
          </div>
        </div>

      </div>

      <div className="footer__bottom">
        © 2026 MyBrand. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;