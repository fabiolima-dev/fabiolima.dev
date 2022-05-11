export default function DropDownMenu({ sections }) {
  return (
    <>
      {sections.map((section) => {
        return <h1>{section}</h1>;
      })}
    </>
  );
}
