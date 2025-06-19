
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      title: "EduPro – Online Teaching Platform",
      description: "A comprehensive online learning platform built with React.js and Spring Boot. Features include student registration, course management, shopping cart functionality, and secure payment integration with Razorpay.",
      technologies: ["React.js", "Spring Boot", "JWT", "Razorpay", "REST APIs", "SQL"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      features: [
        "Student registration and authentication",
        "Course browsing and cart management", 
        "Secure payment processing",
        "Teacher course management dashboard"
      ]
    },
    {
      title: "Traffic Sign Recognition System",
      description: "Real-time traffic sign detection system using Convolutional Neural Networks (CNN) with the GTSRB dataset. Includes OpenCV integration and multi-language voice output for enhanced accessibility.",
      technologies: ["Python", "CNN", "OpenCV", "GTSRB Dataset", "Machine Learning"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop",
      features: [
        "Real-time traffic sign detection",
        "CNN-based classification model",
        "Multi-language voice output",
        "OpenCV integration for image processing"
      ]
    },
    {
      title: "Patent Awareness Portal",
      description: "SIH Hackathon finalist project designed to educate school students about patent, copyright, and trademark laws. Features interactive learning modules and gamified content delivery.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
      features: [
        "Interactive learning modules",
        "Gamified educational content",
        "Student progress tracking",
        "Responsive design for all devices"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating full-stack development skills and problem-solving abilities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 hover-scale">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">{project.title}</CardTitle>
                <CardDescription className="text-gray-600">{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-600 text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
