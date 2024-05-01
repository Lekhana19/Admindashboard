import React, { useState } from 'react';
import './AssignCourse.css'; // Import the CSS file for styling

const AssignCourse = () => {
  const [selectedFaculty, setSelectedFaculty] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');

  // Placeholder for faculty, courses, and semesters data
  const faculties = [
    { id: 1, name: 'Dr. John Doe' },
    { id: 2, name: 'Dr. Jane Smith' },
    // ...more faculties
  ];

  const courses = [
    { id: 1, name: 'Calculus 101' },
    { id: 2, name: 'World History' },
    // ...more courses
  ];

  const semesters = [
    { id: 1, name: 'Fall 2024' },
    { id: 2, name: 'Spring 2025' },
    // ...more semesters
  ];

  const handleFacultyChange = (event) => {
    setSelectedFaculty(event.target.value);
  };

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  const handleSemesterChange = (event) => {
    setSelectedSemester(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit logic here
    console.log(`Course ${selectedCourse} for ${selectedSemester} semester assigned to faculty ${selectedFaculty}`);
    // Reset form or give a success message
  };

  return (
    <div className="assign-course-container">
      <h2>Assign Course</h2>
      <form onSubmit={handleSubmit} className="assign-course-form">
        <label htmlFor="faculty-select">Select Faculty:</label>
        <select id="faculty-select" value={selectedFaculty} onChange={handleFacultyChange} className="faculty-select">
          <option value="">--Please choose a faculty--</option>
          {faculties.map((faculty) => (
            <option key={faculty.id} value={faculty.id}>
              {faculty.name}
            </option>
          ))}
        </select>

        <label htmlFor="course-select">Select Course:</label>
        <select id="course-select" value={selectedCourse} onChange={handleCourseChange} className="course-select">
          <option value="">--Please choose a course--</option>
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.name}
            </option>
          ))}
        </select>

        <label htmlFor="semester-select">Select Semester:</label>
        <select id="semester-select" value={selectedSemester} onChange={handleSemesterChange} className="semester-select">
          <option value="">--Please choose a semester--</option>
          {semesters.map((semester) => (
            <option key={semester.id} value={semester.id}>
              {semester.name}
            </option>
          ))}
        </select>

        <button type="submit" className="submit-btn">Assign Course</button>
      </form>
    </div>
  );
};

export default AssignCourse;
