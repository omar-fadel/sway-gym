import MdAndUpSection, { SectionProps } from "./MdAndUpSection";
import SmSection from "./SmSection";

const Section: React.FC<SectionProps> = (props) => {
  return (
    <>
      <MdAndUpSection
        {...props}
        className={`hidden md:flex ${props.className}`}
      />
      <SmSection {...props} className={`flex md:hidden ${props.className}`} />
    </>
  );
};

export default Section;
