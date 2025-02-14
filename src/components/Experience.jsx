import React from 'react';
import { colorPalette } from '../styles/colors';

const Experience = ({ isDarkMode }) => {
    return (
        <div className={`${isDarkMode ? `bg-[${colorPalette.dark.secondary}]` : `bg-[${colorPalette.light.secondary}]`} rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-[1.02]`}>
            <div className="mb-8">
                <h3 className="text-lg font-semibold mb-2">
                    Software Engineer at mPower Social Enterprises Ltd.
                </h3>
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mb-4`}>June 2024 - Present</p>
                <ul className="list-disc list-inside space-y-2">
                    <li>Developed eLearning platforms using Moodle as a Full Stack Developer</li>
                    <li>Designed secure backend solutions with PHP, Express JS, and REST APIs</li>
                    <li>Built responsive frontend interfaces with React JS, TypeScript, Tailwind CSS, and MUI</li>
                    <li>Integrated dynamic data visualization with Graph.js</li>
                    <li>Ensured secure user authentication using JWT</li>
                    <li>Optimized MySQL, and PostgreSQL databases for performance and scalability</li>
                </ul>
            </div>
        </div>
    );
};

export default Experience;