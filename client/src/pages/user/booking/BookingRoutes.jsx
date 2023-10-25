
import About from '../About';
import Contact from '../Contact';
import Faq from '../Faq';
import RefundPolicy from '../RefundPolicy';
import Gallery from '../gallery/Gallery';
import Booking from './Booking';
import Home from './Home';

export default [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/faq', element: <Faq /> },
  { path: '/gallery', element: <Gallery /> },
  { path: '/RefundPolicy', element: <RefundPolicy /> },
  { path: '/contact', element: <Contact /> },
  { path: '/Booking', element: <Booking /> },
 

];
