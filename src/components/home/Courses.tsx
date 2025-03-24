
import React from 'react';

const coursesData = [
  { class: 'KG-1', annualFees: '₹15,000', monthlyFees: '₹1,500' },
  { class: 'KG-2', annualFees: '₹18,000', monthlyFees: '₹1,800' },
  { class: 'Class 1', annualFees: '₹22,000', monthlyFees: '₹2,000' },
  { class: 'Class 2', annualFees: '₹22,000', monthlyFees: '₹2,000' },
  { class: 'Class 3', annualFees: '₹24,000', monthlyFees: '₹2,200' },
  { class: 'Class 4', annualFees: '₹24,000', monthlyFees: '₹2,200' },
  { class: 'Class 5', annualFees: '₹26,000', monthlyFees: '₹2,400' },
  { class: 'Class 6', annualFees: '₹28,000', monthlyFees: '₹2,600' },
  { class: 'Class 7', annualFees: '₹30,000', monthlyFees: '₹2,800' },
  { class: 'Class 8', annualFees: '₹32,000', monthlyFees: '₹3,000' },
  { class: 'Class 9', annualFees: '₹34,000', monthlyFees: '₹3,200' },
  { class: 'Class 10', annualFees: '₹36,000', monthlyFees: '₹3,400' },
  { class: 'Class 11', annualFees: '₹38,000', monthlyFees: '₹3,800' },
  { class: 'Class 12', annualFees: '₹40,000', monthlyFees: '₹4,000' },
];

const Courses = () => {
  return (
    <section id="courses" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 uppercase mb-4">Courses & Fees</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="py-5 px-8 text-center">Class</th>
                  <th className="py-5 px-8 text-center">Annual Fees</th>
                  <th className="py-5 px-8 text-center">Monthly Fees</th>
                </tr>
              </thead>
              <tbody>
                {coursesData.map((course, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-blue-50'}>
                    <td className="py-4 px-8 text-center font-medium">{course.class}</td>
                    <td className="py-4 px-8 text-center">{course.annualFees}</td>
                    <td className="py-4 px-8 text-center">{course.monthlyFees}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-center text-blue-900 mb-4">Academic Excellence</h3>
            <p className="text-gray-600 text-center">
              Our curriculum is designed to promote academic excellence through comprehensive learning programs.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-center text-blue-900 mb-4">Modern Facilities</h3>
            <p className="text-gray-600 text-center">
              Our school is equipped with modern facilities including computer labs, science labs, and sports facilities.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-center text-blue-900 mb-4">Experienced Faculty</h3>
            <p className="text-gray-600 text-center">
              Our dedicated teachers bring a wealth of experience and passion to nurture every student's potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
