import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ClipLoader } from 'react-spinners'; // Import the spinner

// Lazy load components to split the code
const LandingPage = lazy(() => import('./pages/LandingPage'));
const AdminLogin = lazy(() => import('./pages/AdminLogin'));
const TeacherLogin = lazy(() => import('./pages/TeacherLogin'));
const StudentLogin = lazy(() => import('./pages/StudentLogin'));

const AdminDashboard = lazy(() => import('./components/admin/AdminDashboard'));
const TeachersPage = lazy(() => import('./components/admin/TeachersPage'));
const StudentsPage = lazy(() => import('./components/admin/StudentsPage'));
const CoursesPage = lazy(() => import('./components/admin/CoursesPage'));
const AnalyticsPage = lazy(() => import('./components/admin/AnalyticsPage'));

const TeacherDashboard = lazy(() => import('./components/teacher/TeacherDashboard'));
const MyCourses = lazy(() => import('./components/teacher/MyCourses'));
const Assignments = lazy(() => import('./components/teacher/Assignments'));
const Students = lazy(() => import('./components/teacher/Students'));
const TeacherAnalytics = lazy(() => import('./components/teacher/Analytics'));

const StudentDashboard = lazy(() => import('./components/student/StudentDashboard'));
const StudentCourses = lazy(() => import('./components/student/MyCourses'));
const AssignmentsPage = lazy(() => import('./components/student/Assignments'));
const Schedule = lazy(() => import('./components/student/Schedule'));
const Grades = lazy(() => import('./components/student/Grades'));

// Custom Loading Component
const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <ClipLoader color="#4CAF50" size={60} />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/teacherLogin" element={<TeacherLogin />} />
          <Route path="/studentLogin" element={<StudentLogin />} />

          {/* Admin Routes */}
          <Route path="/admin/adminDashboard" element={<AdminDashboard />} />
          <Route path="/admin/teachersPage" element={<TeachersPage />} />
          <Route path="/admin/studentsPage" element={<StudentsPage />} />
          <Route path="/admin/coursesPage" element={<CoursesPage />} />
          <Route path="/admin/analyticsPage" element={<AnalyticsPage />} />

          {/* Teacher Routes */}
          <Route path="/teacher/teacherDashboard" element={<TeacherDashboard />} />
          <Route path="/teacher/myCourses" element={<MyCourses />} />
          <Route path='/teacher/assignments' element={<Assignments />} />
          <Route path='/teacher/students' element={<Students />} />
          <Route path='/teacher/analytics' element={<TeacherAnalytics />} />

          {/* Student Routes */}
          <Route path="/student/studentDashboard" element={<StudentDashboard />} />
          <Route path="/student/myCourses" element={<StudentCourses />} />
          <Route path="/student/assignments" element={<AssignmentsPage />} />
          <Route path="/student/schedule" element={<Schedule />} />
          <Route path="/student/grades" element={<Grades />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </Router>
  );
};

export default App;
