import Input from "../Input/Input";

interface DropdownProps {
  choices: string[];
  value: string;
  onChangeValue: (newValue: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  choices,
  onChangeValue,
  value,
}) => {
  if (!choices.includes(value))
    throw new Error(
      "Cannot provide a value for dropdown that does not exist in choices",
    );
  return (
    <select
      dir="rtl"
      className="w-full rounded-full border border-primary bg-transparent p-2 px-4 font-['Alexandria'] text-primary outline-0 focus:border-2"
      onChange={(e) => {
        onChangeValue(e.target.value);
      }}
    >
      {choices.map((choice) => (
        <option className="bg-transparent" key={choice} value={choice}>
          {choice}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
