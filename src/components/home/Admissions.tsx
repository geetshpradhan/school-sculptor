
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Admissions = () => {
  return (
    <section id="admissions" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 uppercase mb-4">Admissions</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
            Join our vibrant school community and embark on a journey of academic excellence and personal growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-blue-800">Admission Process</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-medium text-gray-900">Application Submission</h4>
                  <p className="mt-1 text-gray-600">Complete the application form and submit it along with required documents.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-medium text-gray-900">Entrance Test</h4>
                  <p className="mt-1 text-gray-600">Students may be required to take an entrance test based on their grade level.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-medium text-gray-900">Interview</h4>
                  <p className="mt-1 text-gray-600">A brief interview with the student and parents may be conducted.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-medium text-gray-900">Admission Confirmation</h4>
                  <p className="mt-1 text-gray-600">Successful candidates will receive an admission offer and fee payment details.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-900 text-white font-medium rounded-lg hover:bg-blue-800 transition-smooth"
              >
                Apply Now
                <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-blue-800">Required Documents</h3>
            
            <ul className="space-y-3 text-gray-700">
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
            
            <div className="bg-blue-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-medium text-blue-900 mb-2">Academic Year</h4>
              <p className="text-gray-700">Our academic year begins in April. Admissions for the new academic year typically open in January.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
