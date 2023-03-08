import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { useEffect } from "react";
import WOW from "wow.js";
import Blog from "./pages/Blog/Blog";
import BlogDetailsPage from "./pages/BlogDetails/BlogDetailsPage";
import { useLocation } from "react-router-dom";
import { MoralisProvider } from "react-moralis";
import { MoralisDappProvider } from "./utils/MoralisDappProvider/MoralisDappProvider";

function App() {

  const appID = process.env.REACT_APP_MORALIS_APPLICATION_ID;
  const serverUrl = process.env.REACT_APP_MORALIS_SERVER_URL;


  useEffect(() => {
    const wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: false,
      live: true,
    });
    wow.init();
  }, []);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
     <MoralisProvider appId={appID} serverUrl={serverUrl}>
      <MoralisDappProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog-details" element={<BlogDetailsPage />} />
      </Routes>
      </MoralisDappProvider>
      </MoralisProvider>
    </>
  );
}

export default App;
