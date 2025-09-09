import profile from "../assets/profile.jpg"
import bannerBg from "../assets/backgrounddd.jpg"

export default function BannerHeader() {
  return (
    <header 
      className="banner" 
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <a href="#top" className="banner-link">
        <nav className="navbar">
          <div className="logo">My Portfolio</div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#certificates">Certificates</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="hero">
          <div className="hero-left">
            <h1 className="hero-title">
              Hi, I’m <span>Luwie Regaspi</span>
            </h1>
            <p className="hero-subtitle">IT Student At AsianCollege</p>
            <div className="hero-buttons">
              <button className="btn-black">Contact Me</button>
              <button className="btn-black">Read More</button>
            </div>
          </div>

          <div className="hero-right">
            <img src={profile} alt="Profile" className="hero-image" />
          </div>
        </div>
      </a>
    </header>
  );
}