import MdAndUpSection, { SectionProps } from "./MdAndUpSection";
import SmSection from "./SmSection";

const Section: React.FC<SectionProps> = (props) => {
  return (
    <>
      <MdAndUpSection
        {...props}
        className={`hidden sm:flex ${props.className}`}
      />
      <SmSection {...props} className={`flex sm:hidden ${props.className}`} />
    </>
  );
};

export default Section;
