import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation3 from "../components/Navigation3";
import ParentWithConnections from "../components/ParentWithConnections";
import Footer from "../components/Footer";
import { courseService } from '../services/api';

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [displayedCourses, setDisplayedCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
    const [currentUser, setCurrentUser] = useState(null);
  const coursesPerPage = 10; // Limit to 10 courses per page for usability with 1000+ courses

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await courseService.getAllCourses();
        setCourses(data);
        // Display initial set of courses
        setDisplayedCourses(data.slice(0, coursesPerPage));
        setLoading(false);
      } catch (err) {
        console.error('Error fetching courses:', err);
        setError('Failed to load courses. Please try again later.');
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);


  useEffect(() => {
    // Update displayed courses based on current page
    const startIndex = (page - 1) * coursesPerPage;
    const endIndex = startIndex + coursesPerPage;
    setDisplayedCourses(courses.slice(startIndex, endIndex));
  }, [page, courses]);

  const handleWatchLecture = (courseId) => {
    navigate(`/video-player/${courseId}`);
  };

  const handleNextPage = () => {
    if (page < Math.ceil(courses.length / coursesPerPage)) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="w-full relative bg-gray-white overflow-hidden flex flex-col items-start justify-start gap-[80px] tracking-[normal] lg:gap-[40px_80px] mq825:gap-[20px_80px]">
      <Navigation3 />
      <section className="w-full h-[280px] absolute !m-[0] top-[148px] right-[0px] left-[0px] bg-primary-100" />
        {/* <h1 className="text-21xl text-gray-900 font-semibold">
          Welcome, {currentUser?.user?.username || currentUser?.username || 'Student'}
        </h1> */}
      <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <ParentWithConnections />
      </section>
      {error && (
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <p style={{ color: 'red' }}>{error}</p>
        </div>
      )}
      {loading && (
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <p>Loading...</p>
        </div>
      )}
      <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
          <h2>My Courses</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {displayedCourses.map((course) => (
              <div key={course.id} style={{ border: '1px solid #ccc', padding: '10px' }}>
                <h3>{course.name}</h3>
                <button
                  onClick={() => handleWatchLecture(course.id)}
                  style={{ padding: '5px 10px', cursor: 'pointer' }}
                >
                  Watch Lecture
                </button>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', gap: '10px' }}>
            <button
              onClick={handlePrevPage}
              disabled={page === 1}
              style={{ padding: '5px 10px', cursor: page === 1 ? 'not-allowed' : 'pointer' }}
            >
              Previous
            </button>
            <span>Page {page} of {Math.ceil(courses.length / coursesPerPage)}</span>
            <button
              onClick={handleNextPage}
              disabled={page === Math.ceil(courses.length / coursesPerPage)}
              style={{ padding: '5px 10px', cursor: page === Math.ceil(courses.length / coursesPerPage) ? 'not-allowed' : 'pointer' }}
            >
              Next
            </button>
          </div>
        </div>
      </section>
      <Footer propMarginTop="unset" />
    </div>
  );
};

export default StudentDashboard;
