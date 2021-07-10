import { useEffect } from "react";
import WOW from "wowjs";

const Footer = () => {
  useEffect(() => {
    new WOW.WOW().init();
  });
  return (
    <div>
      <div className="whitespace" />

      <div className="footer">
        <div className="container">
          <br />
          <br />
          <div className="collab">
            <div className="row">
              <div className="col-lg-12">
                <p className="wow fadeInUp">
                  Got an interesting project? I can help you.
                </p>
              </div>
            </div>
          </div>
          <br />
          <div className="hr">
            <div className="row" />
          </div>
          <br />
          <br />
          <div className="info">
            <div className="row">
              <div className="col-lg-4" id="personal">
                <p className="wow fadeInUp">connect with me</p>
                <h4 className="wow fadeInUp" data-wow-delay="0.2s">
                  ig @innocent_akash28
                </h4>
                <br />
                <br />
              </div>
              <div className="col-lg-4" id="media">
                <p className="wow fadeInUp" data-wow-delay="0s">
                  follow me
                </p>
                <ul>
                  <li id="fb" className="wow fadeInUp" data-wow-delay="0.4s">
                    fb
                  </li>
                  <a href="https://www.instagram.com/innocent_akash28">
                    <li id="ig" className="wow fadeInUp" data-wow-delay="0.6s">
                      ig
                    </li>
                  </a>
                </ul>
                <br />
                <br />
              </div>
              <div className="col-lg-4" id="address">
                <p className="wow fadeInUp" data-wow-delay="0s">
                  say hello
                </p>
                <h4 className="wow fadeInUp" data-wow-delay="0.2s">
                  akashgodre98@gmail.com
                </h4>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Footer;
