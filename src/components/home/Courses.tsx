
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
    <section id="courses" className="py-10 px-4 sm:px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 uppercase mb-4">Courses & Fees</h2>
          <div className="w-16 sm:w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="py-3 sm:py-5 px-4 sm:px-8 text-center">Class</th>
                  <th className="py-3 sm:py-5 px-4 sm:px-8 text-center">Annual Fees</th>
                  <th className="py-3 sm:py-5 px-4 sm:px-8 text-center">Monthly Fees</th>
                </tr>
              </thead>
              <tbody>
                {coursesData.map((course, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-blue-50'}>
                    <td className="py-2 sm:py-4 px-4 sm:px-8 text-center font-medium">{course.class}</td>
                    <td className="py-2 sm:py-4 px-4 sm:px-8 text-center">{course.annualFees}</td>
                    <td className="py-2 sm:py-4 px-4 sm:px-8 text-center">{course.monthlyFees}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {["Academic Excellence", "Modern Facilities", "Experienced Faculty"].map((title, index) => (
            <div key={index} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-14 sm:w-16 h-14 sm:h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 sm:h-8 w-6 sm:w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-2 sm:mb-4">{title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {title === "Academic Excellence" && "Our curriculum promotes academic excellence through comprehensive learning programs."}
                {title === "Modern Facilities" && "Our school is equipped with modern facilities including computer labs, science labs, and sports facilities."}
                {title === "Experienced Faculty" && "Our dedicated teachers bring a wealth of experience to nurture every student's potential."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;


// import React, { useState } from 'react';

// const coursesData = [
//   { class: 'KG-1', annualFees: '₹15,000', monthlyFees: '₹1,500' },
//   { class: 'KG-2', annualFees: '₹18,000', monthlyFees: '₹1,800' },
//   { class: 'Class 1', annualFees: '₹22,000', monthlyFees: '₹2,000' },
//   { class: 'Class 2', annualFees: '₹22,000', monthlyFees: '₹2,000' },
//   { class: 'Class 3', annualFees: '₹24,000', monthlyFees: '₹2,200' },
//   { class: 'Class 4', annualFees: '₹24,000', monthlyFees: '₹2,200' },
//   { class: 'Class 5', annualFees: '₹26,000', monthlyFees: '₹2,400' },
//   { class: 'Class 6', annualFees: '₹28,000', monthlyFees: '₹2,600' },
//   { class: 'Class 7', annualFees: '₹30,000', monthlyFees: '₹2,800' },
//   { class: 'Class 8', annualFees: '₹32,000', monthlyFees: '₹3,000' },
//   { class: 'Class 9', annualFees: '₹34,000', monthlyFees: '₹3,200' },
//   { class: 'Class 10', annualFees: '₹36,000', monthlyFees: '₹3,400' },
//   { class: 'Class 11', annualFees: '₹38,000', monthlyFees: '₹3,800' },
//   { class: 'Class 12', annualFees: '₹40,000', monthlyFees: '₹4,000' },
// ];

// const Courses = () => {
//   const [selectedCourse, setSelectedCourse] = useState(null);

//   return (
//     <section id="courses" className="py-10 px-4 sm:px-6 bg-gray-50">
//       <div className="container mx-auto max-w-6xl">
//         <div className="text-center mb-8">
//           <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 uppercase mb-4">Courses & Fees</h2>
//           <div className="w-16 sm:w-24 h-1 bg-blue-600 mx-auto"></div>
//         </div>
        
//         <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="w-full border-collapse text-sm sm:text-base">
//               <thead>
//                 <tr className="bg-blue-900 text-white">
//                   <th className="py-3 sm:py-5 px-4 sm:px-8 text-center">Class</th>
//                   <th className="py-3 sm:py-5 px-4 sm:px-8 text-center">Annual Fees</th>
//                   <th className="py-3 sm:py-5 px-4 sm:px-8 text-center">Monthly Fees</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {coursesData.map((course, index) => (
//                   <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-blue-50'} onClick={() => setSelectedCourse(course)}>
//                     <td className="py-2 sm:py-4 px-4 sm:px-8 text-center font-medium cursor-pointer">{course.class}</td>
//                     <td className="py-2 sm:py-4 px-4 sm:px-8 text-center">{course.annualFees}</td>
//                     <td className="py-2 sm:py-4 px-4 sm:px-8 text-center">{course.monthlyFees}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {selectedCourse && (
//           <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
//             <div className="bg-white p-6 rounded-lg shadow-xl w-96">
//               <h3 className="text-xl font-bold text-blue-900">{selectedCourse.class} Details</h3>
//               <p className="mt-2 text-gray-700"><strong>Annual Fees:</strong> {selectedCourse.annualFees}</p>
//               <p className="text-gray-700"><strong>Monthly Fees:</strong> {selectedCourse.monthlyFees}</p>
//               <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" 
//                       onClick={() => setSelectedCourse(null)}>
//                 Close
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Courses;
