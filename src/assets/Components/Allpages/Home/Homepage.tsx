import React from 'react';
import { useAuth } from '../../Context/AuthContext';

const HomePage: React.FC = () => {
  const { currentUser } = useAuth();

  // Replace with real data from Firestore later
  return (
    <div>
      <h1>Home</h1>
      {currentUser ? (
        <div>
          <p><strong>Email:</strong> {currentUser.email}</p>
          {/* Below you can fetch from Firestore */}
          <img src="https://w7.pngwing.com/pngs/241/840/png-transparent-computer-icons-student-school-student-angle-people-logo-thumbnail.png" alt="Student" width={100} />
          <p>Student ID: 12345</p>
          <p>Student Name: John Doe</p>
          <p>Current CGPA: 3.75</p>
        </div>
      ) : (
        <p>Loading user...</p>
      )}
    </div>
  );
};

export default HomePage;