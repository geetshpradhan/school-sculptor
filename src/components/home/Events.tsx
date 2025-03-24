
import React, { useState } from 'react';
import { Calendar, PlusCircle } from 'lucide-react';

const initialEvents = [
  "Annual Day Celebration",
  "Sports Day",
  "Science Fair",
  "Independence Day Program"
];

const Events = () => {
  const [events, setEvents] = useState(initialEvents);
  const [newEvent, setNewEvent] = useState("");

  const handleAddEvent = () => {
    if (newEvent.trim() !== "") {
      setEvents([...events, newEvent]);
      setNewEvent("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddEvent();
    }
  };

  return (
    <section id="events" className="py-16 md:py-20 px-4 md:px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 uppercase mb-4">Famous Events</h2>
          <div className="w-20 md:w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="bg-white rounded-xl md:rounded-3xl shadow-lg md:shadow-xl p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="md:col-span-1">
              <div className="flex items-center mb-4 md:mb-6">
                <Calendar className="h-5 w-5 md:h-6 md:w-6 text-blue-600 mr-2" />
                <h3 className="text-xl md:text-2xl font-semibold text-blue-800">School Events</h3>
              </div>
              <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">
                Throughout the academic year, we organize various events to enhance student learning and showcase their talents.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                alt="School event"
                className="rounded-xl shadow-lg w-full hidden md:block" 
              />
            </div>
            
            <div className="md:col-span-2">
              <div className="h-full flex flex-col">
                <div className="flex-grow">
                  <ul className="space-y-4 md:space-y-6">
                    {events.map((event, index) => (
                      <li key={index} className="flex items-center bg-blue-50 p-3 md:p-4 rounded-lg transition-all hover:-translate-y-1 hover:shadow-md duration-300">
                        <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3 md:mr-4">
                          <span className="font-semibold text-blue-800 text-sm md:text-base">{index + 1}</span>
                        </div>
                        <span className="text-gray-800 font-medium text-sm md:text-base">{event}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-100">
                  <label htmlFor="new-event" className="block text-sm font-medium text-gray-700 mb-2">Add a new event</label>
                  <div className="flex w-full">
                    <input
                      type="text"
                      id="new-event"
                      placeholder="Enter new event"
                      className="flex-grow px-3 py-2 md:px-4 md:py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm md:text-base"
                      value={newEvent}
                      onChange={(e) => setNewEvent(e.target.value)}
                      onKeyPress={handleKeyPress}
                    />
                    <button
                      id="add-event"
                      className="bg-blue-900 text-white px-3 py-2 md:px-4 md:py-3 rounded-r-lg font-medium flex items-center hover:bg-blue-800 transition-colors text-sm md:text-base"
                      onClick={handleAddEvent}
                    >
                      <PlusCircle className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2" />
                      Add Event
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
