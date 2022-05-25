import SectionTitle from "../SectionTitle";

export default function Contact({ section }) {
  return (
    <div
      id={section.id}
      className="flex min-h-screen flex-col justify-evenly pt-16"
    >
      <div className="m-auto flex max-w-md flex-col items-center gap-20">
        <SectionTitle section={section} />
        <p className="text-center text-gray-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ac magna facilisis, accumsan orci a, vehicula magna. Aliquam laoreet
          orci sed ligula gravida fringilla. Ut non sagittis ante. Ut sed cursus
          tortor. Quisque iaculis sed mauris nec ultrices.
        </p>
        <div className="flex gap-4 text-2xl">
          <i className="ri-github-line"></i>
          <i className="ri-linkedin-line"></i>
          <i className="ri-twitter-line"></i>
          <i className="ri-mail-line"></i>
        </div>
      </div>
    </div>
  );
}
