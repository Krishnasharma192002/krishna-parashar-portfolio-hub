
import { Award, GraduationCap, Star } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education & Achievements</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <GraduationCap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Education</h3>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h4 className="text-lg font-semibold text-gray-900">B.Tech Computer Science Engineering</h4>
                <p className="text-blue-600 font-medium">MIET (Model Institute of Engineering & Technology)</p>
                <p className="text-gray-600">Final Year • 2021-2025</p>
                <p className="text-sm text-gray-500 mt-2">
                  Specializing in Software Development, Data Structures, Algorithms, and System Design
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-6">
                <h4 className="text-lg font-semibold text-gray-900">12th Grade</h4>
                <p className="text-green-600 font-medium">92.3% Score</p>
                <p className="text-gray-600">2021</p>
                <p className="text-sm text-gray-500 mt-2">
                  Strong foundation in Mathematics, Physics, and Computer Science
                </p>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <Award className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Achievements</h3>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
                <div className="flex items-center mb-3">
                  <Star className="h-5 w-5 text-yellow-500 mr-2" />
                  <h4 className="text-lg font-semibold text-gray-900">Smart India Hackathon Finalist</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Reached the finals with the Patent Awareness Portal project, competing against 
                  thousands of teams nationwide and demonstrating innovation in educational technology.
                </p>
              </div>
              
              <div className="p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                <div className="flex items-center mb-3">
                  <Star className="h-5 w-5 text-yellow-500 mr-2" />
                  <h4 className="text-lg font-semibold text-gray-900">Real-time Intelligent Systems</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Successfully developed and deployed multiple real-time systems including traffic 
                  sign recognition and online learning platforms with thousands of potential users.
                </p>
              </div>
              
              <div className="p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg">
                <div className="flex items-center mb-3">
                  <Star className="h-5 w-5 text-yellow-500 mr-2" />
                  <h4 className="text-lg font-semibold text-gray-900">Full-Stack Expertise</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Demonstrated proficiency in end-to-end application development, from database 
                  design to user interface implementation and deployment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
