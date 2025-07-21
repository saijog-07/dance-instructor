import { useEffect, useState } from "react";
import './DisplayInstructor.css';

const DisplayInstructor = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8085/api/getAllInstructors")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch instructors");
        }
        return res.json();
      })
      .then((data) => setInstructors(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div>
      <h2>Submitted Dance Instructor Applications</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Teaching Style</th>
            <th>Dance Speciality</th>
            <th>Availability</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {instructors.length > 0 ? (
            instructors.map((inst) => (
              <tr key={inst.id}>
                <td>{inst.name}</td>
                <td>{inst.teachingStyle}</td>
                <td>{inst.danceSpeciality}</td>
                <td>{inst.availability}</td>
                <td>{inst.phoneNumber}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No instructors found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayInstructor;
