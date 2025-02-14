import React from 'react';
import { colorPalette } from '../styles/colors';
import { projects } from '../constants/projects';

const Projects = ({ isDarkMode }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
                <div
                    key={project.title}
                    className={`${isDarkMode ? `bg-[${colorPalette.dark.secondary}]` : `bg-[${colorPalette.light.secondary}]`} rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-[1.02]`}
                    style={{ animationDelay: `${index * 100}ms` }}
                >
                    <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className={`px-3 py-1 ${isDarkMode
                                        ? `bg-[${colorPalette.dark.accent}] text-white`
                                        : `bg-[${colorPalette.light.accent}] text-gray-800`
                                    } rounded-full text-sm transform transition-all duration-200 hover:scale-110`}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;