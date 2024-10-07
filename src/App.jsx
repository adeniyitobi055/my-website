import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import { DarkModeProvider } from "./context/DarkModeContext";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <GlobalStyles />

        <Routes>
          <Route element={<AppLayout />}>
            {/* <Route index element={<Navigate replace to="home" />} /> */}
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>

        <Toaster
          position="top-right"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: { duration: 3000 },
            error: { duration: 5000 },
            style: {
              fontSize: "15px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
