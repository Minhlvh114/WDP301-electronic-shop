import { Link } from 'react-router-dom'


const HeaderMain = () => {

  return (

    /* <!-- Hero 16:9 — glowing laptop --> */
    <section className="hero-premium">
      <div className="container">
        <div className="hero-copy">
          <span className="eyebrow">New Collection 2026</span>
          <h1>Power meets <span>elegance</span></h1>
          <p>Discover premium laptops and smartphones. Minimal design, maximum performance — crafted for modern life.</p>
          <div className="hero-actions">
            <Link to="/product" className="btn btn-primary btn-lg">Shop Laptops</Link>
            <Link to="/product?cat=phones" className="btn btn-secondary btn-lg">Browse Phones</Link>
          </div>
        </div>
        <div className="hero-stage">
          <div className="hero-glow" aria-hidden="true"></div>
          <svg className="hero-laptop" viewBox="0 0 560 320" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Premium laptop">
            <defs>
              <linearGradient id="screen" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#0b6fff' }} />
                <stop offset="100%" style={{ stopColor: '#60a5fa' }} />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>
            {/* <!-- Base --> */}
            <rect x="40" y="200" width="480" height="16" rx="4" fill="#e4e4e7" />
            <path d="M120 216 H440 L420 240 H140 Z" fill="#d4d4d8" />
            {/* <!-- Screen lid --> */}
            <rect x="80" y="40" width="400" height="260" rx="12" fill="#27272a" filter="url(#glow)" />
            <rect x="96" y="56" width="368" height="228" rx="8" fill="url(#screen)" />
            {/* <!-- Screen shine --> */}
            <rect x="96" y="56" width="368" height="80" rx="8" fill="white" opacity="0.12" />
            {/* <!-- Logo dot --> */}
            <circle cx="280" cy="170" r="24" fill="white" opacity="0.15" />
            <circle cx="280" cy="170" r="8" fill="white" opacity="0.4" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default HeaderMain