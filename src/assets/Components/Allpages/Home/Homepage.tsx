import React from 'react';
import { useAuth } from '../../Context/AuthContext';

const HomePage: React.FC = () => {
  const { currentUser } = useAuth();

  return (
    <div className='text-white bg-blue-900 py-16 px-16 flex justify-center rounded-2xl'>
      {currentUser ? (
        <div>
          <p><strong>Email:</strong> {currentUser.email}</p>
          {/*fetch from Firestore */}
          <img src="https://w7.pngwing.com/pngs/241/840/png-transparent-computer-icons-student-school-student-angle-people-logo-thumbnail.png" alt="Student" width={100} />
          <p>Student ID: 12345</p>
          <p>Student Name: Abdulah Bin Abdul Aziz</p>
          <p>Current CGPA: 3.67</p>
          <p>01792527058</p>
        </div>
      ) : (
        <p>Loading user...</p>
      )}
    </div>
  );
};

export default HomePage;