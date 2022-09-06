// DO NOT USE THIS PAGE
import "../styles/globals.sass";
import { UserProvider } from "@auth0/nextjs-auth0";
import "animate.css";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
