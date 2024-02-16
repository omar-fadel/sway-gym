interface InputProps {
  value: string;
  onChange: (newValue: string) => void;
  placeholder?: string;
}
const Input: React.FC<InputProps> = ({ onChange, value, placeholder }) => {
  return (
    <input
      className="flex w-full justify-between rounded-full border border-primary bg-transparent p-2 px-4 font-['Alexandria'] text-primary outline-0 focus:border-2"
      value={value}
      placeholder={placeholder}
      onChange={(e) => {
        if (e.target.value) onChange(e.target.value);
      }}
    />
  );
};

export default Input;
