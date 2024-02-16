import { ReactNode } from "react";
import Typography from "../Typography/Typography";

export interface InfoCardProps {
  title: string;
  icon: ReactNode;
  body: string;
}
const InfoCard: React.FC<InfoCardProps> = ({ body, icon, title }) => {
  return (
    <article className="flex max-w-96 flex-col items-center gap-8">
      <div>{icon}</div>
      <Typography variant="h4" className="text-center text-primary">
        {title}
      </Typography>
      <Typography variant="bodyLarge" className="text-center text-white">
        {body}
      </Typography>
    </article>
  );
};

export default InfoCard;
