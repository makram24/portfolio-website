import type { AgentSkill } from "../data/agentSkills";

interface Props {
  skill: AgentSkill;
}

const AgentSkillCard = ({ skill }: Props) => {
  const primaryUrl =
    skill.agensiUrl ?? skill.skillHqUrl ?? skill.buySkillsUrl;

  return (
    <article className="agent-skill-card">
      <div className="agent-skill-meta">
        <span className="agent-skill-status agent-skill-status--live">
          Live
        </span>
        <span className="agent-skill-price">${skill.price}</span>
      </div>
      <h3>{skill.title}</h3>
      <p>{skill.description}</p>
      <div className="agent-skill-links">
        <a
          href={primaryUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="disable"
        >
          Open listing
        </a>
        {skill.agensiUrl && (
          <a
            href={skill.skillHqUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="disable"
          >
            SkillHQ
          </a>
        )}
        {!skill.agensiUrl && skill.buySkillsUrl && (
          <a
            href={skill.buySkillsUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="disable"
          >
            BuySkills
          </a>
        )}
      </div>
    </article>
  );
};

export default AgentSkillCard;
