// components/AboutUsPage.js
import React from 'react';
import { staff } from '../staffData';

function AboutUsPage() {
  return (
    <div>
      <h1>About Us</h1>
      <h2>Owners</h2>
      {/* Owners information here */}

      <h2>Groomers</h2>
      {staff.map((member) => (
        <div key={member.id}>
          <h3>{member.name}</h3>
          <p>{member.bio}</p>
        </div>
      ))}
    </div>
  );
}

export default AboutUsPage;
