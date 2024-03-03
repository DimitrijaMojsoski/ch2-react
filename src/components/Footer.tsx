import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__social">
        <div className="footer__title">Social Share</div>
        <div className="footer__icons">
          <i className="fab fa-facebook footer__icon"></i>
          <i className="fab fa-instagram footer__icon"></i>
          <i className="fab fa-twitter footer__icon"></i>
          <i className="fab fa-linkedin footer__icon"></i>
        </div>
      </div>

      <div className="footer__column">
        <div className="footer__title">Event Info</div>
        <div className="footer__links">
          <a href="#">Enter Now</a>
          <a href="#">Event Info</a>
          <a href="#">Course Maps</a>
          <a href="#">Race Pack</a>
          <a href="#">Results</a>
          <a href="#">FAQs</a>
          <a href="#">Am I registered?</a>
        </div>
      </div>

      <div className="footer__column">
        <div className="footer__title">Registration</div>
        <div className="footer__links">
          <a href="#">Volunteers</a>
          <a href="#">Gallery</a>
          <a href="#">Press</a>
          <a href="#">Results</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Service Plus</a>
          <a href="#">Contacts</a>
        </div>
      </div>

      <div className="footer__column">
        <div className="footer__title">Schedule</div>
        <div className="footer__links">
          <a href="#">Gallery</a>
          <a href="#">About</a>
          <a href="#">Videos</a>
          <a href="#">Results</a>
          <a href="#">FAQs</a>
          <a href="#">Results</a>
          <a href="#">Volunteers</a>
        </div>
      </div>
    </footer>
  );
};
