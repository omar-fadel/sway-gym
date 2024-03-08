import Typography from "@/components/Typography/Typography";
import { ReactNode } from "react";

export interface SectionWrapperProps {
  title: string;
  children: ReactNode;
  className?: string
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, title,className }) => {
  return (
    <div className={`flex flex-col gap-6 p-8 w-full sm:w-1/2 md:w-1/3 ${className}`}>
      <Typography
        variant="bodySmall"
        className="font-bold text-primary"
      >
        {title}
      </Typography>
      <section>
        {children}
      </section>
    </div>
  );
};

export default SectionWrapper;
