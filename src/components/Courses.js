import React, { useState } from 'react';
import './Courses.css'; // Import the CSS file for styling

const Courses = () => {
  const [searchFaculty, setSearchFaculty] = useState('');
  const [searchSemester, setSearchSemester] = useState('');

  // Placeholder for course data. In a real app, this might come from state, props, or an API.
  const allCourses = [
    { id: 1, code: 'PSY101', name: 'Introduction to Psychology', semester: 'Fall 2024', faculty: 'Dr. John Doe' },
    { id: 2, code: 'MAT201', name: 'Advanced Mathematics', semester: 'Fall 2024', faculty: 'Dr. Jane Smith' },
    // ...more courses
  ];

  // Filter courses by faculty and/or semester
  const filteredCourses = allCourses.filter(course => {
    return (
      (searchFaculty ? course.faculty.includes(searchFaculty) : true) &&
      (searchSemester ? course.semester.includes(searchSemester) : true)
    );
  });

  return (
    <div className="courses-container">
      <h2>Courses</h2>
      <div className="filter-container">
        <input
          type="text"
          placeholder="Filter by faculty name"
          value={searchFaculty}
          onChange={e => setSearchFaculty(e.target.value)}
          className="filter-input"
        />
        <input
          type="text"
          placeholder="Filter by semester"
          value={searchSemester}
          onChange={e => setSearchSemester(e.target.value)}
          className="filter-input"
        />
      </div>
      <ul className="course-list">
        {filteredCourses.map((course) => (
          <li key={course.id} className="course-item">
            <span className="course-code">{course.code}</span>
            <span className="course-name">{course.name}</span>
            <span className="course-semester">{course.semester}</span>
            <span className="course-faculty">{course.faculty}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
