import React, { useState } from 'react';
import './StudentList.css'; // Import the CSS file for styling

const StudentList = () => {
  const [selectedCourse, setSelectedCourse] = useState('');

  // Placeholder for courses and student data
  const courses = [
    { id: 'c1', name: 'Calculus 101' },
    { id: 'c2', name: 'World History' },
    // ...more courses
  ];

  const students = {
    c1: [
      { id: 1, name: 'Alice Johnson', email: 'alice.johnson@example.com' },
      // ...more students enrolled in Calculus 101
    ],
    c2: [
      { id: 2, name: 'Bob Smith', email: 'bob.smith@example.com' },
      // ...more students enrolled in World History
    ],
    // ...student lists for more courses
  };

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="student-list-container">
      <h2>Student List</h2>
      <div className="controls">
        <select value={selectedCourse} onChange={handleCourseChange} className="course-select">
          <option value="">Select a course</option>
          {courses.map((course) => (
            <option key={course.id} value={course.id}>{course.name}</option>
          ))}
        </select>
        <button onClick={handlePrint} className="print-btn">Print</button>
      </div>
      {selectedCourse && (
        <ul className="student-list">
          {students[selectedCourse].map((student) => (
            <li key={student.id} className="student-item">
              <span className="student-id">{student.id}</span>
              <span className="student-name">{student.name}</span>
              <span className="student-email">{student.email}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StudentList;
