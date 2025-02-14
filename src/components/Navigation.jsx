import { colorPalette } from '../styles/colors';

const Navigation = ({ activeSection, setActiveSection }) => {
    const sections = ['about', 'skills', 'projects', 'experience', 'contact'];

    return (
        <nav className="space-x-4">
            {sections.map((section) => (
                <button
                    key={section}
                    onClick={() => setActiveSection(section)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 transform hover:scale-105 ${activeSection === section
                            ? `text-[${colorPalette.dark.highlight}] bg-opacity-20`
                            : 'hover:text-[${colorPalette.dark.accent}]'
                        }`}
                >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
            ))}
        </nav>
    );
};

export default Navigation;