const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="flex container flex-col mx-auto items-center justify-center md:w-6/12 my-8">
      <h1 className="text-3xl mb-4 font-bold text-primary">{heading}</h1>
      <p className="text-blue-500 items-center">{subHeading}</p>
    </div>
  );
};

export default SectionTitle;
