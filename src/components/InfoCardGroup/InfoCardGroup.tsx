import InfoCard, { InfoCardProps } from "../InfoCard/InfoCard";
import Typography from "../Typography/Typography";

interface InfoCardGroup {
  cards: InfoCardProps[];
  title: string;
}

const InfoCardGroup: React.FC<InfoCardGroup> = ({ cards, title }) => {
  return (
    <section>
      <Typography variant="h3" className="mb-16 text-center text-primary">
        {title}
      </Typography>
      <div className="flex flex-wrap justify-center gap-12">
        {cards.map((card, index) => (
          <InfoCard
            key={`card-${index}`}
            body={card.body}
            icon={card.icon}
            title={card.title}
          />
        ))}
      </div>
    </section>
  );
};

export default InfoCardGroup;
