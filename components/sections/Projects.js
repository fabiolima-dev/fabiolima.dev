import SectionTitle from "../SectionTitle";

export default function Projects({ section }) {
  return (
    <section
      id={section.id}
      className="flex min-h-screen flex-col justify-evenly pt-16"
    >
      <SectionTitle section={section} />
    </section>
  );
}
