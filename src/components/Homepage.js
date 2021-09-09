import {FaInstagram, FaGithub} from "react-icons/fa"

const Homepage = () => {
    return (
      <>
        <section className="homepage">
          <div className="overlay">
            <h1>Moch Alvin Faisal</h1>
            <p>Software Engineer</p>

            <ul>
              <li>
                <a href="https://instagram.com/alvinfsl" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="https://github.com/alvinfaisal" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>
        </section>
      </>
    );
}

export default Homepage
