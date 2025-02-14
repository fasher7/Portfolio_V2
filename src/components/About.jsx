import React from 'react';
import { colorPalette } from '../styles/colors';

const About = ({ isDarkMode }) => {
    return (
        <div className={`${isDarkMode ? `bg-[${colorPalette.dark.secondary}]` : `bg-[${colorPalette.light.secondary}]`} rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-[1.02]`}>
            <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Education</h3>
                <div className="space-y-4">
                    <div>
                        <h4 className="font-medium">Independent University, Bangladesh</h4>
                        <p>Bachelor of Science in Computer Science (Major)</p>
                        <p>Bachelor of Business Administration in MIS (Minor)</p>
                        <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>2020 - 2024 · CGPA: 3.72</p>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-4">Awards & Certifications</h3>
                <ul className="list-disc list-inside space-y-2">
                    <li>Deep Learning Coding & Code Management, IUB CCDS (2024)</li>
                    <li>Techfest Database Project Showcase, IUB (2023)</li>
                    <li>Vice Chancellor's List, IUB Academic Award (2023)</li>
                    <li>Dean's Merit List, IUB Academic Award (2022)</li>
                    <li>Dean's List, IUB Academic Award (2020)</li>
                </ul>
            </div>
        </div>
    );
};

export default About;