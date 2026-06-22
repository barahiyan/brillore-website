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

/** Updates document.title and meta description per route for SEO. */
function usePageTitle() {
  const { pathname } = useLocation();
  useEffect(() => {
    const meta: Record<string, { title: string; description: string }> = {
      "/": {
        title: "Brillore Holdings | Precision. Compliance. Reliability.",
        description:
          "Brillore Holdings provides reliable metrology, inspection, fire safety, and marine technical support services for oil, gas, industrial, and marine operations in Tanzania.",
      },
      "/services": {
        title: "Services | Brillore Holdings",
        description:
          "Explore Brillore Holdings' services: oil & gas measurement, inspection and verification, fire safety systems, and marine technical support across Tanzania.",
      },
      "/contact": {
        title: "Contact | Brillore Holdings",
        description:
          "Get in touch with Brillore Holdings in Dar es Salaam for metrology, inspection, fire safety, and marine technical support. Call, email, or send an inquiry.",
      },
    };
    const current = meta[pathname] ?? {
      title: "Brillore Holdings",
      description:
        "Brillore Holdings provides reliable metrology, inspection, fire safety, and marine technical support services in Tanzania.",
    };
    document.title = current.title;
    let tag = document.querySelector('meta[name="description"]');
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("name", "description");
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", current.description);
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
