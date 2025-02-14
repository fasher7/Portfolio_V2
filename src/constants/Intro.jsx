export const Intro = ({ isDarkMode }) => {
    return (
        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 max-w-2xl`}>
            A dedicated software engineer with strong programming expertise in AI/ML and full-stack development. However, I am planning on pursuing Masters of Science / Engineering in Cybersecurity Program.
        </p>
    );
};