import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import WOW from "wowjs";
import axios from "axios";

const Contact = () => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  const history = useHistory();

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [Loading, setLoading] = useState(false);

  const sendMail = (e) => {
    e.preventDefault();

    var data = {
      service_id: "service_xpapsta",
      template_id: "template_0hp7ubg",
      user_id: "user_gzgTVdGZuhNwSkYkeDqqP",
      template_params: {
        from_name: Name,
        to_name: "Akash,",
        email: Email,
        message: Message,
      },
    };
    setLoading(true);

    axios
      .post("https://api.emailjs.com/api/v1.0/email/send", data)
      .then((response) => {
        history.push("/");
        console.log(response);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  return (
    <>
      <div className="wrapper">
        <div className="whitespace" />
        <div className="container">
          {Loading ? (
            <div
              style={{
                zIndex: 100,
                transform: `translate(${-50}%, ${-50}%)`,
                position: "absolute",
                left: "50%",
                top: "50%",
              }}
              class="loader">
              Loading...
            </div>
          ) : (
            ""
          )}
          <div className="hero-content">
            <br />
            <br />
            <div className="row">
              <div className="col-lg-8">
                <h3 className="wow fadeInUp" data-wow-delay="1s">
                  say hello 👋
                </h3>
                <br />
                <p className="wow fadeInUp" data-wow-delay="1.2s">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Neque, accusantium sint quod voluptatem dolorum, quaerat, ut
                  iusto cumque magni ab repudiandae, quasi minus unde temporibus
                  nulla eum eaque! Placeat praesentium sunt suscipit laboriosam
                  deserunt commodi atque corporis, iure maiores dicta, fugit
                  similique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8">
            <form onSubmit={sendMail} name="contact-form" id="contact-form">
              <ul>
                <li className="wow fadeInUp" data-wow-delay="1.4s">
                  <label htmlFor="contact-name">Name :</label>
                  <div className="textarea">
                    <input
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      name="contact-name"
                      id="contact-name"
                      required
                    />
                  </div>
                </li>
                <li className="wow fadeInUp" data-wow-delay="1.6s">
                  <label htmlFor="contact-email">Email :</label>
                  <div className="textarea">
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      name="email"
                      id="contact-email"
                      required
                    />
                  </div>
                </li>
                <li className="wow fadeInUp" data-wow-delay="1.6s">
                  <label htmlFor="contact-project">Message :</label>
                  <div className="textarea">
                    <textarea
                      type="text"
                      onChange={(e) => setMessage(e.target.value)}
                      name="contact-project"
                      id="contact-project"
                      rows={6}
                      required
                    />
                  </div>
                </li>
              </ul>
              <button
                type="submit"
                name="contact-submit"
                id="contact-submit"
                className="send wow fadeInUp">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
