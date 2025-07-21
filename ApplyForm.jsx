import {useState} from "react";
import './ApplyForm.css';


const SuccessModal = ({ onClose }) => (
  <div style={{
    position: 'fixed',
    top: 0, left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(253, 175, 175, 0.4)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
  }}>
    <div style={{
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
      textAlign: 'center'
    }}>
      <h3>✅ Success!</h3>
      <p>Your application has been submitted.</p>
      <button onClick={onClose}>Close</button>
    </div>
  </div>
);


const ApplyForm = () => {

    const [formData, setFormData] = useState ({
        name: '',
        teachingStyle: '',
        danceSpeciality: '',
        availability: '',
        phoneNumber: ''
    });

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    const validate = () => {

        const newErrors = {};

        if(!formData.name.trim()) newErrors.name = "Name is required";
        if(!formData.teachingStyle.trim()) newErrors.teachingStyle = "Teaching style is required";
        if(!formData.danceSpeciality.trim()) newErrors.danceSpeciality = "Dance speciality is required";
        if(!formData.availability.trim()) newErrors.availability = "Availability is required";
        if(!formData.phoneNumber.trim()) {
            newErrors.phoneNumber = "Phone number is required";
        }
        else if(!/^\d{10}$/.test(formData.phoneNumber)) {
            newErrors.phoneNumber = "Invalid phone number format";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    }


    const handleChange = (e) => {

        setFormData({...formData, [e.target.name] : e.target.value});
        setErrors({...errors, [e.target.name] : ''});
    }

    const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
        const response = await fetch("http://localhost:8085/api/addInstructor", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            setSuccess(true);

            setFormData({
                name: '',
                teachingStyle: '',
                danceSpeciality: '',
                availability: '',
                phoneNumber: ''
            });

            setErrors({});
        } else {
            const errorText = await response.text();
            console.error("Server error:", errorText);
            alert("Failed to submit: " + errorText);
        }
    } catch (error) {
        console.error("Error submitting form:", error);
        alert("Something went wrong. Please try again.");
    }
};


    return (<>

        <div>

            <h2>Apply to Become a Dance Instructor</h2>

            {success && <SuccessModal onClose={() => setSuccess(false)} />}

            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="name">Name:</label> <br/>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <p style={{color: 'red'}}>{errors.name}</p>}
                </div>

                <div>
                    <label htmlFor="teachingStyle">Teaching Style: </label> <br/>
                    <input
                        type="text"
                        id="teachingStyle"
                        name="teachingStyle"
                        value={formData.teachingStyle}
                        onChange={handleChange}
                    />
                    {errors.teachingStyle && <p style={{color: 'red'}}>{errors.teachingStyle}</p>}
                </div>

                <div>
                    <label htmlFor="danceSpeciality">Dance speciality: </label> <br/>
                    <input
                        type="text"
                        id="danceSpeciality"
                        name="danceSpeciality"
                        value={formData.danceSpeciality}
                        onChange={handleChange}
                    />
                    {errors.danceSpeciality && <p style={{color: 'red'}}>{errors.danceSpeciality}</p>}
                </div>

                <div>
                    <label htmlFor="availability">Availability: </label> <br/>
                    <input
                        type="text"
                        id="availability"
                        name="availability"
                        value={formData.availability}
                        onChange={handleChange}
                    />
                    {errors.availability && <p style={{color: 'red'}}>{errors.availability}</p>}
                </div>

                <div>
                    <label htmlFor="phoneNumber">Phone number: </label> <br/>
                    <input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                    {errors.phoneNumber && <p style={{color: 'red'}}>{errors.phoneNumber}</p>}
                </div>

                <button type="submit">Submit Application</button>

            </form>

        </div>
    
    </>)

}

export default ApplyForm;