import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LogoIntro from "./components/home/LogoIntro";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

/** Scrolls to top on every route change. */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
  return null;
}

/** Updates document.title per route for SEO. */
function usePageTitle() {
  const { pathname } = useLocation();
  useEffect(() => {
    const titles: Record<string, string> = {
      "/": "Brillore Holdings | Precision. Compliance. Reliability.",
      "/services": "Services | Brillore Holdings",
      "/contact": "Contact | Brillore Holdings",
    };
    document.title = titles[pathname] ?? "Brillore Holdings";
  }, [pathname]);
}

export default function App() {
  // Show the logo intro only once per browser session, and only on the home route.
  const [introDone, setIntroDone] = useState(
    () => sessionStorage.getItem("brillore-intro") === "done" || window.location.pathname !== "/"
  );

  usePageTitle();

  const handleIntroDone = () => {
    sessionStorage.setItem("brillore-intro", "done");
    setIntroDone(true);
  };

  return (
    <>
      {!introDone && <LogoIntro onDone={handleIntroDone} />}
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}
