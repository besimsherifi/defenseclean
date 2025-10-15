import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import logo from './assets/logo-transparent-min.png';
import Footer from './Components/Footer';
import ContactUs from './Pages/ContactUs';
import Services from './Pages/Service/Services';
import ServiceDetail from './Pages/Service/ServiceDetail';
import ScrollToTop from "./ScrollToTop";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Mobile: always bg. Desktop: bg only when scrolled.
  const navClass =
    `fixed top-0 left-0 w-full z-50 transition-colors duration-300
     bg-white/80 backdrop-blur-md border-b border-black/5 shadow-sm
     md:border-transparent
     ${scrolled ? 'md:bg-white/70 md:backdrop-blur-md md:border-b md:border-black/5 md:shadow-sm'
      : 'md:bg-transparent md:shadow-none'}`;

  return (
    <Router>
      <ScrollToTop />
      <div className="App relative min-h-screen">
        {/* Navbar */}
        <nav className={navClass}>
          <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 h-20 md:h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
              <img src={logo} alt="Defense Cleaning Logo" className="h-12 md:h-16 w-auto" />
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8 font-medium text-neutral-900">
              <Link to="/" className="hover:text-black transition">Home</Link>
              <Link to="/about" className="hover:text-black transition">About</Link>
              <Link to="/services" className="hover:text-black transition">Services</Link>
            </div>

            {/* Desktop CTA */}
            <Link to="/contact-us" onClick={() => setOpen(false)}>
              <button className="hidden md:block px-5 py-2 rounded-md bg-neutral-900 text-white hover:bg-black transition">
                Contact Us
              </button>
            </Link>

            {/* Mobile hamburger */}
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-900 focus:outline-none"
              onClick={() => setOpen(v => !v)}
            >
              <svg className={`h-6 w-6 ${open ? 'hidden' : 'block'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
              <svg className={`h-6 w-6 ${open ? 'block' : 'hidden'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          <div
            className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${open ? 'max-h-96' : 'max-h-0'}`}
          >
            <div className="px-4 sm:px-6 pb-4 pt-2 font-medium text-neutral-900">
              <div className="flex flex-col gap-3">
                <Link to="/" onClick={() => setOpen(false)} className="py-2 hover:text-black transition">Home</Link>
                <Link to="/about" onClick={() => setOpen(false)} className="py-2 hover:text-black transition">About</Link>
                <Link to="/services" onClick={() => setOpen(false)} className="py-2 hover:text-black transition">Services</Link>
                <Link to="/contact-us" onClick={() => setOpen(false)} className="py-2">
                  <button className="w-full px-5 py-2 rounded-md bg-neutral-900 text-white hover:bg-black transition">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main content */}
        <div className="pt-20 md:pt-24 relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/:type" element={<ServiceDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
          <Footer />
        </div>

        {/* Mobile backdrop */}
        {open && (
          <div
            className="fixed inset-0 top-20 bg-black/30 md:hidden"
            onClick={() => setOpen(false)}
          />
        )}
      </div>
    </Router>
  );
}
