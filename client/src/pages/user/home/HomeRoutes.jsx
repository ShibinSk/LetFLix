
import About from '../About';
import Contact from '../Contact';
import Faq from '../Faq';
import Login from '../LoginWithOtp/Login';
import RefundPolicy from '../RefundPolicy';
import Booking from '../booking/Booking';
import BookingDetails from '../booking/BookingDetails';
import ChooseTheater from '../booking/ChooseTheater';
import DecorationDetails from '../booking/DecorationDetails';
import SlotCheck from '../booking/SlotCheck';
import Gallery from '../gallery/Gallery';
import PaymentSuccess from '../paymetSuccess';
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
  { path: '/login', element: <Login /> },
  { path: '/bookingDetails', element: <BookingDetails /> },
  { path: '/decoration', element: <DecorationDetails /> },
  { path: '/paymentSuccess', element: <PaymentSuccess /> },
 

];
