import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
import ProjectForm from './ProjectForm';
import HistoryPage from './HistoryPage';
import FavoritesPage from './FavoritesPage';
import ProjectDetails from './ProjectDetails';
import Navbar from './Navbar';
import Footer from './Footer';
import CookiesBanner from './CookiesBanner';

// Function to check if the user is authenticated
const isAuthenticated = () => {
  const token = localStorage.getItem('authToken');
  return token !== null;
};

const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Box display="flex" flexDirection="column" minHeight="100vh">
          <Navbar />
          <Box flex="1">
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegistrationPage />} />
              <Route path="/" element={<ProtectedRoute element={<ProjectForm />} />} /> {/* Default route */}
              <Route path="/history" element={<ProtectedRoute element={<HistoryPage />} />} />
              <Route path="/favorites" element={<ProtectedRoute element={<FavoritesPage />} />} />
              <Route path="/project-details" element={<ProtectedRoute element={<ProjectDetails />} />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
        <CookiesBanner />
      </Router>
    </ChakraProvider>
  );
}

export default App;
