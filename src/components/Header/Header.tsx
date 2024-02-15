import Image from "next/image";
import Typography from "../Typography/Typography";
import Button from "../Button/Button";

interface HeaderProps {
  headerItems: {
    id: string;
    text: string;
  }[];
  buttonText: string;
  onHeaderItemClick?: (id: string) => void;
  onHeaderButtonClick?: () => void;
  onLogoClick: () => void;
}

const Header: React.FC<HeaderProps> = ({
  headerItems,
  buttonText,
  onHeaderButtonClick,
  onHeaderItemClick,
  onLogoClick,
}) => {
  return (
    <nav dir="rtl" className="flex justify-center bg-black p-8">
      <div className="flex w-full max-w-screen-2xl justify-between">
        <div className="flex gap-8">
          <button
            onClick={() => {
              if (onLogoClick) onLogoClick();
            }}
          >
            <Image
              alt="logo"
              height={100}
              width={100}
              src={"/icons/swayIcon.svg"}
            />
          </button>
          <div className="flex gap-12">
            {headerItems.map((headerItem) => (
              <button
                key={headerItem.id}
                onClick={() => {
                  if (onHeaderItemClick) onHeaderItemClick(headerItem.id);
                }}
              >
                <Typography className="text-white" variant="bodySmall">
                  {headerItem.text}
                </Typography>
              </button>
            ))}
          </div>
        </div>
        <div>
          <Button
            onClick={() => {
              if (onHeaderButtonClick) onHeaderButtonClick();
            }}
            color="primary"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
