import './Portfolio.css'; 
import headshot from '../images/headshot.jpg';

export default function About() {
  return (
    <div>
    <div>
      <h1>About Me</h1>
      <p className='aboutPar'>
      Daria is a Full Stack Web Developper and Certified Associate Project Management Professional with extensive experience in business operations, customer relations, and team leadership. She is highly organized with proven ability to manage high-volume projects and coordinate efficient workflow and logistics. Daria effectively balances competing priorities in fast-paced, people-facing environments. She motivates and leads team members in progressing the organization’s mission, and formulates mutually beneficial solutions to difficult challenges. Daria is an outstanding communicator and relationship-builder known for going above and beyond to ensure best possible outcomes for an organization. She is currently doing her Msc at Northeastern University.
      </p>
    </div>
    <div>
      <img className="profilePhoto" src={headshot} alt={"Daria Pressley"}/>
      </div>
    </div>
  );
}
