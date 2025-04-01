import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import SignUp from "./pages/SignUp";
import InstructorProfile from "./pages/InstructorProfile";
import InstructorCreateCourseCurri11 from "./pages/InstructorCreateCourseCurri1";
import InstructorCreateCourseAdvan from "./pages/InstructorCreateCourseAdvan";
import InstructorCreateCourseBasic from "./pages/InstructorCreateCourseBasic";
import InstructorSettings from "./pages/InstructorSettings";
import InstructorMessage from "./pages/InstructorMessage";
import InstructorMyCoursesCourseD from "./pages/InstructorMyCoursesCourseD";
import InstructorMyCourses from "./pages/InstructorMyCourses";
import InstructorDashboard from "./pages/InstructorDashboard";
import BecomeAnInstrcutor from "./pages/BecomeAnInstrcutor";
import InstructorCreateCoursePubli from "./pages/InstructorCreateCoursePubli";
import SignIn from "./pages/SignIn";
import Contact from "./pages/Contact";
import About from "./pages/About";
import WatchCourse from "./pages/WatchCourse";
import CourseCategory from "./pages/CourseCategory";
import CourseList from "./pages/CourseList";
import Courses1 from "./pages/Courses";
import StudentMessage from "./pages/StudentMessage";
import StudentInstructors from "./pages/StudentInstructors";
import StudentCourses from "./pages/StudentCourses";
import StudentDashboard from "./pages/StudentDashboard";
import StudentSettings from "./pages/StudentSettings";
import InstructorCreateCourseCurri2 from "./components/InstructorCreateCourseCurri21";
import InstructorCreateCourseCurri from "./components/InstructorCreateCourseCurri";
import InstructorCreateCourseCurri3 from "./components/InstructorCreateCourseCurri3";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/29-sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/10-instructor-profile":
        title = "";
        metaDescription = "";
        break;
      case "/19-instructor-create-course-curriculum":
        title = "";
        metaDescription = "";
        break;
      case "/18-instructor-create-course-advance-information":
        title = "";
        metaDescription = "";
        break;
      case "/17-instructor-create-course-basic-information":
        title = "";
        metaDescription = "";
        break;
      case "/16-instructor-settings":
        title = "";
        metaDescription = "";
        break;
      case "/15-instructor-message":
        title = "";
        metaDescription = "";
        break;
      case "/14-instructor-my-courses-course-detail":
        title = "";
        metaDescription = "";
        break;
      case "/13-instructor-my-courses":
        title = "";
        metaDescription = "";
        break;
      case "/12-instructor-dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/11-become-an-instrcutor":
        title = "";
        metaDescription = "";
        break;
      case "/26-instructor-create-course-publish-course":
        title = "";
        metaDescription = "";
        break;
      case "/30-sign-in":
        title = "";
        metaDescription = "";
        break;
      case "/28-contact":
        title = "";
        metaDescription = "";
        break;
      case "/27-about":
        title = "";
        metaDescription = "";
        break;
      case "/05-watch-course":
        title = "";
        metaDescription = "";
        break;
      case "/02-course-category":
        title = "";
        metaDescription = "";
        break;
      case "/04-course-list":
        title = "";
        metaDescription = "";
        break;
      case "/03-courses":
        title = "";
        metaDescription = "";
        break;
      case "/09-student-message":
        title = "";
        metaDescription = "";
        break;
      case "/08-student-instructors":
        title = "";
        metaDescription = "";
        break;
      case "/07-student-courses":
        title = "";
        metaDescription = "";
        break;
      case "/06-student-dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/91-student-settings":
        title = "";
        metaDescription = "";
        break;
      case "/23-instructor-create-course-curriculum-attach-file":
        title = "";
        metaDescription = "";
        break;
      case "/25-instructor-create-course-curriculum-description":
        title = "";
        metaDescription = "";
        break;
      case "/21-instructor-create-course-curriculum-video":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
     <Route path="/" element={<Homepage />} />
      <Route path="/29-sign-up" element={<SignUp />} />
      <Route path="/10-instructor-profile" element={<InstructorProfile />} />
      <Route
        path="/19-instructor-create-course-curriculum"
        element={<InstructorCreateCourseCurri11 />}
      />
      <Route
        path="/18-instructor-create-course-advance-information"
        element={<InstructorCreateCourseAdvan />}
      />
      <Route
        path="/17-instructor-create-course-basic-information"
        element={<InstructorCreateCourseBasic />}
      />
      <Route path="/16-instructor-settings" element={<InstructorSettings />} />
      <Route path="/15-instructor-message" element={<InstructorMessage />} />
      <Route
        path="/14-instructor-my-courses-course-detail"
        element={<InstructorMyCoursesCourseD />}
      />
      <Route
        path="/13-instructor-my-courses"
        element={<InstructorMyCourses />}
      />
      <Route
        path="/12-instructor-dashboard"
        element={<InstructorDashboard />}
      />
      <Route path="/11-become-an-instrcutor" element={<BecomeAnInstrcutor />} />
      <Route
        path="/26-instructor-create-course-publish-course"
        element={<InstructorCreateCoursePubli />}
      />
      <Route path="/30-sign-in" element={<SignIn />} />
      <Route path="/28-contact" element={<Contact />} />
      <Route path="/27-about" element={<About />} />
      <Route path="/05-watch-course" element={<WatchCourse />} />
      <Route path="/02-course-category" element={<CourseCategory />} />
      <Route path="/04-course-list" element={<CourseList />} />
      <Route path="/03-courses" element={<Courses1 />} />
      <Route path="/09-student-message" element={<StudentMessage />} />
      <Route path="/08-student-instructors" element={<StudentInstructors />} />
      <Route path="/07-student-courses" element={<StudentCourses />} />
      <Route path="/06-student-dashboard" element={<StudentDashboard />} />
      <Route path="/91-student-settings" element={<StudentSettings />} />
      <Route
        path="/23-instructor-create-course-curriculum-attach-file"
        element={<InstructorCreateCourseCurri2 />}
      />
      <Route
        path="/25-instructor-create-course-curriculum-description"
        element={<InstructorCreateCourseCurri />}
      />
      <Route
        path="/21-instructor-create-course-curriculum-video"
        element={<InstructorCreateCourseCurri3 />}
      />
    </Routes>
  );
}
export default App;
