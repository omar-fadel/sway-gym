import Typography from "@/components/Typography/Typography";
import Image from "next/image";

export interface ContactsProps {
  items: { icon: string; value: string }[];
}

const Contacts: React.FC<ContactsProps> = ({ items }) => {
  return (
    <div className="flex flex-col gap-2">
      {items.map((item, index) => (
        <div key={`contact-item-${index}`} className="flex gap-4 items-center">
          <Image src={item.icon} alt={"contact-item"} width={32} height={32} />
          <Typography className="text-white text-wrap" variant="bodySmall">
            {item.value}
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default Contacts;
