
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Krishna Parashar</h3>
            <p className="text-gray-400 mb-4">
              Java Full Stack Developer passionate about creating scalable web applications 
              and solving complex problems through technology.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors duration-200">About</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors duration-200">Skills</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors duration-200">Projects</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Technologies</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Java & Spring Boot</li>
              <li>React.js & Redux</li>
              <li>Node.js & REST APIs</li>
              <li>SQL & MongoDB</li>
              <li>Microservices</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Krishna Parashar. Built with React.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
