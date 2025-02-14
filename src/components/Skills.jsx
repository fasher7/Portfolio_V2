import React from 'react';
import { colorPalette } from '../styles/colors';
import { skills } from '../constants/skills';

const Skills = ({ isDarkMode }) => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items], index) => (
                <div
                    key={category}
                    className={`${isDarkMode ? `bg-[${colorPalette.dark.secondary}]` : `bg-[${colorPalette.light.secondary}]`} rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-[1.02]`}
                    style={{ animationDelay: `${index * 100}ms` }}
                >
                    <h3 className="text-lg font-semibold mb-4 capitalize">
                        {category.replace(/([A-Z])/g, ' $1').trim()}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {items.map((skill) => (
                            <span
                                key={skill}
                                className={`px-3 py-1 ${isDarkMode
                                        ? `bg-[${colorPalette.dark.accent}] text-white`
                                        : `bg-[${colorPalette.light.accent}] text-gray-800`
                                    } rounded-full text-sm transform transition-all duration-200 hover:scale-110`}
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Skills;
