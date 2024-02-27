import { Link, useLocation } from "react-router-dom";
import "./navbar.scss";
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const { hash } = useLocation();
  const isActive = (iHash) => hash === iHash;
  return (
    <>
      <section className="main-navbar">
        <div className="custom-container">
          <nav class="navbar navbar-expand-xl p-0">
            <Link class="navbar-brand" to="/"><img src="\logo.svg" alt="img" className="img-fluid" /></Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g clip-path="url(#clip0_48_777)">
                  <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_48_777">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <div className="mobile-set-bg">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <HashLink to="#" style={
                      isActive("")
                        ? {
                          color: "#61D290"
                        }
                        : {}} class="nav-link" >Home</HashLink>
                  </li>
                  <li class="nav-item">
                    <HashLink to="#about" class="nav-link" style={
                      isActive("#about")
                        ? {
                          color: "#61D290"
                        }
                        : {}}>About</HashLink>
                  </li>
                  <li class="nav-item">
                    <HashLink to="#partner" class="nav-link" style={
                      isActive("#partner")
                        ? {
                          color: "#61D290"
                        }
                        : {}}>Features</HashLink>
                  </li>
                  <li class="nav-item">
                    <HashLink to="#faqs" class="nav-link" style={
                      isActive("#faqs")
                        ? {
                          color: "#61D290"
                        }
                        : {}}>FAQs</HashLink>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Join</a>
                  </li>
                </ul>
                <div className="social-links">
                  <a href="twitter.com/ElosysIo" target="_blank"><img src="\assets\main-landing\socials\twitter.svg" alt="img" className="img-fluid" /></a>
                  <a href="#" target="_blank"><img src="\assets\main-landing\socials\medium.svg" alt="img" className="img-fluid" /></a>
                  <a href="discord.gg/elosysio" target="_blank"><img src="\assets\main-landing\socials\discord.svg" alt="img" className="img-fluid" /></a>
                  <a href="#" target="_blank"><img src="\assets\main-landing\socials\insta.svg" alt="img" className="img-fluid" /></a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Navbar;
