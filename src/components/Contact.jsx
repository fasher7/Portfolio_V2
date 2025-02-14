import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { colorPalette } from '../styles/colors';

const Contact = ({ isDarkMode }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsLoading(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className={`${isDarkMode ? `bg-[${colorPalette.dark.secondary}]` : `bg-[${colorPalette.light.secondary}]`} rounded-xl shadow-lg p-8 transform transition-all duration-300`}>
            <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
            <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                    <label className="block mb-2 text-sm font-medium">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full p-3 rounded-lg ${isDarkMode
                                ? `bg-[${colorPalette.dark.primary}] border-gray-600`
                                : `bg-[${colorPalette.light.primary}] border-gray-300`
                            } border focus:ring-2 focus:ring-[${colorPalette.dark.highlight}] outline-none transition-all duration-200`}
                        required
                    />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full p-3 rounded-lg ${isDarkMode
                                ? `bg-[${colorPalette.dark.primary}] border-gray-600`
                                : `bg-[${colorPalette.light.primary}] border-gray-300`
                            } border focus:ring-2 focus:ring-[${colorPalette.dark.highlight}] outline-none transition-all duration-200`}
                        required
                    />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium">Subject</label>
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={`w-full p-3 rounded-lg ${isDarkMode
                                ? `bg-[${colorPalette.dark.primary}] border-gray-600`
                                : `bg-[${colorPalette.light.primary}] border-gray-300`
                            } border focus:ring-2 focus:ring-[${colorPalette.dark.highlight}] outline-none transition-all duration-200`}
                        required
                    />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="4"
                        className={`w-full p-3 rounded-lg ${isDarkMode
                                ? `bg-[${colorPalette.dark.primary}] border-gray-600`
                                : `bg-[${colorPalette.light.primary}] border-gray-300`
                            } border focus:ring-2 focus:ring-[${colorPalette.dark.highlight}] outline-none transition-all duration-200`}
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    disabled={isLoading}
                    className={`flex items-center justify-center w-full p-3 rounded-lg bg-[${colorPalette.dark.accent}] hover:bg-[${colorPalette.dark.highlight}] text-white font-medium transition-all duration-200 ${isLoading ? 'opacity-70 cursor-not-allowed' : 'transform hover:scale-[1.02]'
                        }`}
                >
                    {isLoading ? (
                        <span className="animate-pulse">Sending...</span>
                    ) : (
                        <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                        </>
                    )}
                </button>
            </form>
        </div>
    );
};

export default Contact;