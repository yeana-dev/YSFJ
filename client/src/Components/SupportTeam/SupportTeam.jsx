import { team } from "../../Services/team";
import "./SupportTeam.css";

const SupportTeam = () => {
  return (
    <div className="support-team-members">
      {team.map((member) => (
        <div className="support-team-card">
          <div className="team-name">{member.name}</div>
          <div className="team-links">
            <a href={member.github} target="_blank" rel="noreferrer">
              <i class="fab fa-github-square"></i>
            </a>
            <a href={member.linkedin} target="_blank" rel="noreferrer">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href={`mailto:${member.email}`}>
              <i class="fas fa-envelope-square"></i>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SupportTeam;
