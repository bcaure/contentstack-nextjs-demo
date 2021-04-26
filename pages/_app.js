/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/style.css";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
