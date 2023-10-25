
import About from '../About';
import Contact from '../Contact';
import Faq from '../Faq';
import RefundPolicy from '../RefundPolicy';
import Booking from '../booking/Booking';
import ChooseTheater from '../booking/ChooseTheater';
import SlotCheck from '../booking/SlotCheck';
import Gallery from '../gallery/Gallery';
import Home from './Home';

export default [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/faq', element: <Faq /> },
  { path: '/gallery', element: <Gallery /> },
  { path: '/RefundPolicy', element: <RefundPolicy /> },
  { path: '/contact', element: <Contact /> },
  { path: '/booking', element: <Booking /> },
  { path: '/chooseTheater', element: <ChooseTheater /> },
  { path: '/checkSlot', element: <SlotCheck /> },
 

];
