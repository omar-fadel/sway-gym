import Typography from "../Typography/Typography";

const WordSeparator: React.FC<{
  word: string;
  variant: "primary" | "secondary";
}> = ({ word, variant }) => {
  return (
    <section
      className={`py-6 bg-${variant} text-center ${variant === "primary" ? "text-secondary" : "text-primary"}`}
    >
      <Typography variant="h2">{word}</Typography>
    </section>
  );
};
export default WordSeparator;
