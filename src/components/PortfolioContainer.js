import React, {useState} from "react";
import Home from '../pages/Home'
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import NavHome from "./Nav";
import Footer from "./Footer";
import '../dist/output.css'

// Logic to display page based on what tab user is in
function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
      if (currentPage === 'Home') {
        return <Home />;
      }
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      return <Contact />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        <NavHome currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}

        <Footer />
      </div>
    );
}

export default PortfolioContainer;