import { ArrowUpRight, GitBranch } from "lucide-react";
import { projects } from "@/data/portfolio";

export function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const hasDemo = Boolean(project.demo);
  const hasSource = Boolean(project.source);

  return (
    <article className="project-card reveal">
      <div className="project-visual">
        <img src={project.image} alt={`${project.name} interface preview`} />
        <span>{project.id}</span>
      </div>
      <div className="project-copy">
        <p className="eyebrow">Featured project</p>
        <h3>{project.name}</h3>
        <p className="summary">{project.summary}</p>
        <dl>
          <div>
            <dt>Contribution</dt>
            <dd>{project.contribution}</dd>
          </div>
          <div>
            <dt>Impact</dt>
            <dd>{project.impact}</dd>
          </div>
        </dl>
        <div className="tags">
          {project.stack.map((x) => (
            <span key={x}>{x}</span>
          ))}
        </div>
        {(hasDemo || hasSource) && (
          <div className="card-actions">
            {hasDemo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                Live demo <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            )}
            {hasSource && (
              <a href={project.source} target="_blank" rel="noopener noreferrer">
                <GitBranch size={16} aria-hidden="true" /> Source
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
