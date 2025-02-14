import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { colorPalette } from '../../styles/colors';
import Navigation from '../../components/Navigation';

const Header = ({ isDarkMode, setIsDarkMode, activeSection, setActiveSection }) => {
    return (
        <header
            className="shadow-lg transition-all duration-300 backdrop-blur-sm bg-opacity-90"
            style={{
                backgroundColor: isDarkMode
                    ? colorPalette.dark.secondary
                    : colorPalette.light.secondary,
            }}
        >
            <div className="max-w-6xl mx-auto px-4 py-6">
                <div className="flex justify-between items-center">
                    <div className="transform transition-transform duration-300 hover:scale-102">
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Fahim Shahriar Eram
                        </h1>
                    </div>
                    <div className="flex items-center space-x-6">
                        <div className="relative group">
                            <button
                                onClick={() => setIsDarkMode(!isDarkMode)}
                                className="p-2 rounded-full hover:bg-opacity-20 transition-all duration-200 
                                         hover:scale-110 hover:shadow-md active:scale-95
                                         bg-gray-100 dark:bg-gray-800"
                                aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                            >
                                {isDarkMode ? (
                                    <Sun className="w-5 h-5 text-yellow-500" />
                                ) : (
                                    <Moon className="w-5 h-5 text-blue-600" />
                                )}
                            </button>

                            <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100
                                          transition-all duration-200 transform translate-y-2 group-hover:translate-y-0
                                          top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5
                                          text-sm text-white bg-gray-900 rounded-lg whitespace-nowrap
                                          shadow-lg backdrop-blur-sm bg-opacity-90">
                                {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mt-2
                                              border-4 border-transparent border-b-gray-900"/>
                            </div>
                        </div>
                        <Navigation
                            activeSection={activeSection}
                            setActiveSection={setActiveSection}
                            isDarkMode={isDarkMode}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;