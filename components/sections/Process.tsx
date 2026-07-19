import { process } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";

export function Process() {
  return (
    <Section id="process" index="06" kicker="From idea to deployment" title="A clear route to useful.">
      <ol className="process-list reveal">
        {process.map((p, i) => (
          <li key={p}>
            <span aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
            <b>{p}</b>
          </li>
        ))}
      </ol>
    </Section>
  );
}
