
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Admissions = () => {
  return (
    <section id="admissions" className="py-16 md:py-20 px-4 md:px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 uppercase mb-4">Admissions</h2>
          <div className="w-20 md:w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 md:mt-6 max-w-3xl mx-auto">
            Join our vibrant school community and embark on a journey of academic excellence and personal growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-5 md:space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold text-blue-800">Admission Process</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                </div>
                <div className="ml-3">
                  <h4 className="text-base md:text-lg font-medium text-gray-900">Application Submission</h4>
                  <p className="mt-1 text-gray-600 text-sm md:text-base">Complete the application form and submit it along with required documents.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                </div>
                <div className="ml-3">
                  <h4 className="text-base md:text-lg font-medium text-gray-900">Entrance Test</h4>
                  <p className="mt-1 text-gray-600 text-sm md:text-base">Students may be required to take an entrance test based on their grade level.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                </div>
                <div className="ml-3">
                  <h4 className="text-base md:text-lg font-medium text-gray-900">Interview</h4>
                  <p className="mt-1 text-gray-600 text-sm md:text-base">A brief interview with the student and parents may be conducted.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                </div>
                <div className="ml-3">
                  <h4 className="text-base md:text-lg font-medium text-gray-900">Admission Confirmation</h4>
                  <p className="mt-1 text-gray-600 text-sm md:text-base">Successful candidates will receive an admission offer and fee payment details.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 md:mt-8">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 bg-blue-900 text-white font-medium rounded-lg hover:bg-blue-800 transition-smooth text-sm md:text-base"
              >
                Apply Now
                <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
          
          <div className="space-y-5 md:space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold text-blue-800">Required Documents</h3>
            
            <ul className="space-y-2 md:space-y-3 text-gray-700 text-sm md:text-base">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span>Completed application form</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span>Birth certificate</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span>Transfer certificate from previous school (if applicable)</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span>Report cards from the previous academic year</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span>Passport-sized photographs (3)</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span>Aadhaar card copy</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span>Caste certificate (if applicable)</span>
              </li>
            </ul>
            
            <div className="bg-blue-50 p-4 md:p-6 rounded-lg mt-4 md:mt-6">
              <h4 className="text-base md:text-lg font-medium text-blue-900 mb-2">Academic Year</h4>
              <p className="text-gray-700 text-sm md:text-base">Our academic year begins in April. Admissions for the new academic year typically open in January.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
