import React,{useEffect} from "react";
import '../components/Components_css/CoreTeam.css';
import teamImg1 from '../images/about-img-1.jpg';
import teamImg2 from '../images/about-img-3.jpg';
import teamImg3 from '../images/about-img-2.jpeg';

function CoreTeam() {
  const members = [
    { id: 1, name: "Syed Shaheer Hasan", role: "VP Electronics", major: "Electronic Engineering", img: teamImg1 },
    { id: 2, name: "Mohammad Zafar", role: "President Software", major: "CS Major", img: teamImg2 },
    { id: 3, name: "Hooman", role: "President Mechanical", major: "CS Major", img: teamImg3 },
    { id: 4, name: "Dabeluchi", role: "VP Software", major: "CS Major", img: teamImg3 },
    { id: 5, name: "Mazen Ahmed", role: "VICE-PRESIDENT", major: "M.A", img: teamImg2 },
    { id: 6, name: "Godwill Attisso", role: "VICE-PRESIDENT", major: "G.A", img: teamImg1 },
  ];

  useEffect(()=>{
    const track = document.querySelector('.core-team__sliding-track');
    if(track){
      const trackItems = track.children; // Changed from items to trackItems
      Array.from(trackItems).forEach(element => {
        const clone = element.cloneNode(true);
        track.appendChild(clone);
      });
  
    }
  },[]);


  return (
    <div className="core-team">
      <h2>Meet the Core Members</h2>
      <p>Here's a glimpse into the individuals leading the current team</p>
      <div className="core-team__sliding-container">
        <div className="core-team__sliding-track">
          {members.map((member) => (
            <div key={member.id} className="core-team__card">
              <img src={member.img} alt={member.name} className="core-team__img" />
              <div className="core-team__info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <p>{member.major}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CoreTeam;
