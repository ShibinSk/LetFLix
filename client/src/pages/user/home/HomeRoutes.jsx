
import CommingSoon from '../../../components/CommingSoon';
import T1Gallery from '../../../components/T1Gallery';
import T2Gallery from '../../../components/T2Gallery';
import Test from '../../../components/Test';
import About from '../About';
import Contact from '../Contact';
import Faq from '../Faq';
import Login from '../LoginWithOtp/Login';
import Privacypolicy from '../Privacypolicy';
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
  // { path: '/', element: <CommingSoon/>},
  { path: '/about', element: <About /> },
  // { path: '/faq', element: <Faq /> },
  { path: '/faq', element: <CommingSoon/> },
  { path: '/gallery', element: <Gallery /> },
  // { path: '/gallery', element: <CommingSoon/> },
  { path: '/RefundPolicy', element: <RefundPolicy /> },
  // { path: '/contact', element: <Contact /> },
  { path: '/contact', element: <CommingSoon/>},
  { path: '/booking', element: <Booking /> },
  { path: '/chooseTheater', element: <ChooseTheater /> },
  // { path: '/chooseTheater', element: <CommingSoon/> },
  { path: '/checkSlot', element: <SlotCheck /> },
  // { path: '/checkSlot', element: <CommingSoon/> },
  { path: '/login', element: <Login /> },
  { path: '/bookingDetails', element: <BookingDetails /> },
  { path: '/decoration/:slot/:value/', element: <DecorationDetails /> },
  { path: '/paymentSuccess', element: <PaymentSuccess /> },
  { path: '/T1Gallery', element: <T1Gallery /> },
  { path: '/T2Gallery', element: <T2Gallery/> },
  { path: '/Test', element: <Test/> },
  { path: '/privacypolicy', element: <Privacypolicy/> },

 

];
