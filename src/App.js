import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Styles
import './index.css';

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }, []);

    return (
        <Router basename="/abhireact-portfolio">
            <div className="App bg-white dark:bg-gray-900 min-h-screen">
                <Navbar />
                <Routes>
                    <Route path="/" element={
                        <>
                            <Hero />
                            <About />
                            <Experience />
                            <Projects />
                            <Certifications />
                            <Contact />
                        </>
                    } />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
