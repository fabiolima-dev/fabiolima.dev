export default function SectionTitle({ title, section }) {
  function renderSection() {
    if (section) {
      return (
        <div className="fixed top-[75px] flex">
          <h1
            className={`gradient-hyper relative my-2 w-fit bg-gradient-to-r bg-clip-text text-5xl font-bold text-transparent  md:my-6 md:text-7xl`}
          >
            Projetos.
            <div className="gradient-hyper relative bottom-[105%] h-[110%] w-0 animate-insta-cover rounded-lg bg-gradient-to-r duration-500 ease-in-out"></div>
          </h1>
        </div>
      );
    } else {
      return <></>;
    }
  }
  return <div className="h-[50vh] bg-red-500">{renderSection()}</div>;
}
