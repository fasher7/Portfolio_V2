import { Github, Mail, Linkedin, Phone } from 'lucide-react';
import { colorPalette } from '../styles/colors';
import { Intro } from '../constants/Intro';

const Hero = ({ isDarkMode }) => {
    return (
        <div
            className="rounded-xl shadow-lg p-8 mb-8 transform transition-all duration-300 hover:scale-[1.02]"
            style={{
                backgroundColor: isDarkMode
                    ? colorPalette.dark.secondary
                    : colorPalette.light.secondary,
            }}
        >
            <div className="flex items-center gap-8">
                <div
                    className="w-48 h-48 rounded-xl overflow-hidden ring-2"
                    style={{
                        boxShadow: `0 0 0 2px ${isDarkMode ? colorPalette.dark.primary : colorPalette.light.accent}`,
                    }}
                >
                    <img
                        src="src/assets/Fahim_Shahriar_Eram_Photo.jpg"
                        alt="Fahim Shahriar Eram"
                        className="w-full h-full object-cover outline-none focus:outline-none"
                    />
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-2">Pattern Pioneer</h2>
                    <Intro isDarkMode={isDarkMode} />
                    <div className="flex flex-col space-y-2">
                        <a
                            href="mailto:fasher37@gmail.com"
                            className="flex items-center transition-colors duration-200"
                        >
                            <Mail className="w-4 h-4 mr-2"
                                style={{
                                    color: isDarkMode
                                        ? colorPalette.dark.highlight
                                        : colorPalette.light.highlight,
                                }}
                            />
                            fasher37@gmail.com
                        </a>
                        <a
                            href="tel:+8801671827339"
                            className="flex items-center transition-colors duration-200"
                        >
                            <Phone className="w-4 h-4 mr-2"
                                style={{
                                    color: isDarkMode
                                        ? colorPalette.dark.highlight
                                        : colorPalette.light.highlight,
                                }}
                            />
                            +880 16 7182 7339
                        </a>
                        <a
                            href="https://github.com/fasher7"
                            className="flex items-center transition-colors duration-200"
                        >
                            <Github className="w-4 h-4 mr-2"
                                style={{
                                    color: isDarkMode
                                        ? colorPalette.dark.highlight
                                        : colorPalette.light.highlight,
                                }} />
                            fasher7
                        </a>
                        <a
                            href="https://www.linkedin.com/in/fahim-shahriar-eram-555b78243/"
                            className="flex items-center transition-colors duration-200"

                        >
                            <Linkedin className="w-4 h-4 mr-2"
                                style={{
                                    color: isDarkMode
                                        ? colorPalette.dark.highlight
                                        : colorPalette.light.highlight,
                                }}
                            />
                            fahimshahriareram
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
