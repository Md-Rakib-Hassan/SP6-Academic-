
const Footer = () => {
    return (
        <footer className="footer">
      <div className="section__container footer__container">
        <div className="footer__logo">
          <img src="assets/logo-white.png" alt="logo" />
        </div>
        <div className="footer__content">
          <p>
            Welcome to Burger Company, where passion for exceptional food and
            genuine hospitality come together. Our story is one of dedication to
            crafting the perfect burger experience, from sourcing the finest
            ingredients to delivering unparalleled taste in every bite.
          </p>
          <div>
            <ul className="footer__links">
              <li>
                <span><i className="ri-map-pin-2-fill"></i></span>
                Kalma, Savar, Dhaka
              </li>
              <li>
                <span><i className="ri-mail-fill"></i></span>
                info@burgerhouse.com
              </li>
            </ul>
            <div className="footer__socials">
              <a href="#"><i className="ri-facebook-circle-fill"></i></a>
              <a href="#"><i className="ri-instagram-fill"></i></a>
              <a href="#"><i className="ri-twitter-fill"></i></a>
              <a href="#"><i className="ri-whatsapp-fill"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bar">
        Copyright © Md. Rakib Hassan (213-15-4411). All rights reserved.
      </div>
    </footer>
    );
};

export default Footer;