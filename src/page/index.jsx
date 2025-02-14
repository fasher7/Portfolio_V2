import React, { useState, useEffect } from 'react';
import Header from './layout/Header';
import About from '../components/About';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import { colorPalette } from '../styles/colors';

const Portfolio = () => {
    const [activeSection, setActiveSection] = useState('about');
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        document.body.style.backgroundColor = isDarkMode
            ? colorPalette.dark.primary
            : colorPalette.light.primary;
    }, [isDarkMode]);

    const renderActiveSection = () => {
        switch (activeSection) {
            case 'skills':
                return <Skills isDarkMode={isDarkMode} />;
            case 'projects':
                return <Projects isDarkMode={isDarkMode} />;
            case 'experience':
                return <Experience isDarkMode={isDarkMode} />;
            case 'contact':
                return <Contact isDarkMode={isDarkMode} />;
            default:
                return <About isDarkMode={isDarkMode} />;
        }
    };

    return (
        <div
            className={`min-h-screen transition-colors duration-300 text-gray-100`}
            style={{
                backgroundColor: isDarkMode
                    ? colorPalette.dark.primary
                    : colorPalette.light.primary,
                color: isDarkMode ? 'white' : 'black',
            }}
        >
            <Header
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
            />
            <main className="max-w-6xl mx-auto px-4 py-8">
                <Hero isDarkMode={isDarkMode} />
                {renderActiveSection()}
            </main>
        </div>
    );
};


export default Portfolio;