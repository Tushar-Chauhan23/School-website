// import React from 'react';
import '../css/FacultyPage.css';
import men1 from  "../assets/men1.jpg"
import men2 from  "../assets/men2.jpg"
import men3 from  "../assets/men3.jpg"
import men4 from  "../assets/men4.jpg"
import lady1 from  "../assets/lady1.jpg"
import lady2 from  "../assets/lady2.jpg"

const facultyMembers = [
  {
    name: 'John Doe',
    position: 'Principal',
    qualifications: 'M.Ed',
    experience: '20 years of experience in educational administration',
    image:men1, 
  },
  {
    name: 'Jane Smith',
    position: 'Vice Principal',
    qualifications: 'M.Sc. in Physics',
    experience: '15 years of teaching experience',
    image:men2, 
  },
  {
    name: 'Emily Johnson',
    position: 'English Teacher',
    qualifications: 'M.A. in English',
    experience: '10 years of teaching experience',
    image:lady1, 
  },
  {
    name: 'Michael Brown',
    position: 'Mathematics Teacher',
    qualifications: 'M.Sc. in Mathematics',
    experience: '8 years of teaching experience',
    image:men3, 
  },
  {
    name: 'Sophia Davis',
    position: 'Science Teacher',
    qualifications: 'M.Sc. in Chemistry',
    experience: '12 years of teaching experience',
    image:lady2, 
  },
  {
    name: 'David Wilson',
    position: 'Computer Science Teacher',
    qualifications: 'B.Tech in Computer Science',
    experience: '5 years of teaching experience',
    image: men4, 
  },
];

function FacultyPage() {
  return (
    <div className="faculty-page">
      <h1 className="faculty-header">Meet Our Faculty</h1>
      <div className="faculty-container">
        {facultyMembers.map((member, index) => (
          <div className="faculty-card" key={index}>
            <div className="faculty-image">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="faculty-info">
              <h2>{member.name}</h2>
              <h3>{member.position}</h3>
              <p>{member.qualifications}</p>
              <p>{member.experience}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FacultyPage;
