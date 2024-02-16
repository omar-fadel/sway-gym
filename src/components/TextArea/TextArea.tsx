import Typography from "../Typography/Typography";

interface TextAreaProps {
  value: string;
  onChange: (newValue: string) => void;
  placeholder?: string;
  rows?: number;
  label?: string;
  className?: string;
}
const TextArea: React.FC<TextAreaProps> = ({
  onChange,
  value,
  placeholder,
  rows = 5,
  label,
  className,
}) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <Typography className="mx-2" variant="label">
        {label}
      </Typography>
      <textarea
        className="flex w-full justify-between rounded-md border border-primary bg-transparent p-2 px-4 font-['Alexandria'] text-primary outline-0 focus:border-2"
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          if (e.target.value) onChange(e.target.value);
        }}
        rows={rows}
      />
    </div>
  );
};

export default TextArea;
