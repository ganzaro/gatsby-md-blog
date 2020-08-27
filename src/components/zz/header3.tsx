// import React, { useState, useEffect } from 'react';
// import { Link } from 'gatsby';

// const Header = () => {
//   // determined if page has scrolled and if the view is on mobile
//   const [scrolled, setScrolled] = useState(false);

//   // change state on scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 10;
//       if (isScrolled !== scrolled) {
//         setScrolled(!scrolled);
//       }
//     };

//     document.addEventListener('scroll', handleScroll, { passive: true });

//     return () => {
//       // clean up the event handler when the component unmounts
//       document.removeEventListener('scroll', handleScroll);
//     };
//   }, [scrolled]);

//   return (
//     <header data-active={scrolled}>
//       <Link to="/">React Hooks on Gatsby</Link>
//       <nav>
//         <Link to="/about/">About</Link>
//         <Link to="/contact/">Contact Us</Link>
//       </nav>
//     </header>
//   );
// };

// export default Header;