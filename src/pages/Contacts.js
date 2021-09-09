import { FaPhone, FaEnvelope } from "react-icons/fa";

const Contacts = () => {
  return (
    <>
      <section className="contacts">
        <h1>Contact Me Bro</h1>
        <ul>
          <li>
            <a href="tel:082245793981">
              <FaPhone /> +6282-438-801-716
            </a>
          </li>
          <li>
            <a href="mailto:mochalvinfaisal@gmail.com">
              <FaEnvelope /> mochalvinfaisal@gmail.com
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Contacts;
