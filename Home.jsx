import { Link } from "react-router-dom";
import './Home.css'

const Home = () => {

    return (<> 
    
        <h2>Welcome to the dance instructor application</h2>

        <p>
            
            Join our community of skilled dance instructors and help others learn the art of movement
           
        </p>

        <Link to="/apply">Become a Dance Instructor</Link>

    </>)
}

export default Home;