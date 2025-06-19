
const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      skills: ["Java", "Spring Boot", "Node.js", "REST APIs", "Microservices", "JWT", "JSP/Servlets"],
      color: "bg-blue-500"
    },
    {
      title: "Frontend Development", 
      skills: ["React.js", "Redux", "JavaFX", "HTML/CSS", "JavaScript", "Responsive Design"],
      color: "bg-green-500"
    },
    {
      title: "Databases",
      skills: ["SQL", "MongoDB", "H2 Database", "Database Design", "Query Optimization"],
      color: "bg-purple-500"
    },
    {
      title: "Programming Languages",
      skills: ["Java", "C++", "Python", "JavaScript", "SQL"],
      color: "bg-orange-500"
    },
    {
      title: "Tools & Technologies",
      skills: ["Git/GitHub", "Razorpay Integration", "OpenCV", "CNN", "RESTful Services"],
      color: "bg-red-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with to build robust applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 hover-scale"
            >
              <div className="flex items-center mb-4">
                <div className={`w-4 h-4 rounded-full ${category.color} mr-3`}></div>
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
