import Image from "next/image";

export interface FollowProps {
  icons: string[];
}

const Follow: React.FC<FollowProps> = ({ icons }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {icons.map((icon, index) => (
        <div key={`social-media-icon-${index}`}>
          <Image width={32} height={32} alt="social-media-icon" src={icon} />
        </div>
      ))}
    </div>
  );
};

export default Follow;
