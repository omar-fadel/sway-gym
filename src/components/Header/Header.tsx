"use client";
import Image from "next/image";
import Typography from "../Typography/Typography";
import Button from "../Button/Button";
import { useState } from "react";

interface HeaderProps {
  headerItems: {
    id: string;
    text: string;
  }[];
  buttonText: string;
  activeItemId?: string | null;
  onLogoClick: () => void;
  onHeaderItemClick?: (id: string) => void;
  onHeaderButtonClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  headerItems,
  buttonText,
  onHeaderButtonClick,
  activeItemId = null,
  onHeaderItemClick = () => {},
  onLogoClick = () => {},
}) => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  return (
    <nav className="flex justify-center bg-black p-8 transition-all ease-in">
      <div className="flex w-full max-w-screen-lg justify-between">
        <div className=" flex w-full items-center justify-between sm:w-fit sm:justify-start sm:gap-8">
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
          <div className="block sm:hidden">
            <button
              onClick={() => {
                setMenuIsOpen(true);
              }}
              className="flex cursor-pointer items-center justify-center"
            >
              <Image
                alt="burger-menu"
                height={32}
                width={32}
                src={"/images/burger-menu.svg"}
              />
            </button>
          </div>
          <div
            style={{
              left: menuIsOpen ? 0 : "-200%",
            }}
            className="absolute top-0 flex h-screen w-screen cursor-pointer flex-col bg-primary py-10 transition-all ease-in sm:hidden sm:hidden"
          >
            <button
              onClick={() => {
                setMenuIsOpen(false);
              }}
              className="mb-6 cursor-pointer px-8"
            >
              <Image
                alt="close"
                src={"/images/close.svg"}
                height={32}
                width={32}
              />
            </button>
            {headerItems.map((headerItem) => (
              <button
                className={`p-4 px-8 ${headerItem.id === activeItemId ? "bg-grey" : "bg-primary"} ${headerItem.id === activeItemId ? "text-primary" : "text-grey"}`}
                key={`menu-item-${headerItem.id}`}
                onClick={() => {
                  onHeaderItemClick(headerItem.id);
                  setMenuIsOpen(false);
                }}
              >
                <Typography className={`text-start `} variant="button">
                  {headerItem.text}
                </Typography>
              </button>
            ))}
            <div className="mx-8 my-8 h-1 w-64 rounded-md bg-black" />
            <div className="px-8">
              <Button
                onClick={() => {
                  if (onHeaderButtonClick) onHeaderButtonClick();
                }}
                color="secondary"
              >
                {buttonText}
              </Button>
            </div>
          </div>
          <div className="hidden gap-5 sm:flex md:gap-12">
            {headerItems.map((headerItem) => (
              <div
                key={headerItem.id}
                className="flex flex-col items-center gap-2"
              >
                {activeItemId === headerItem.id ? (
                  <Image
                    src={"/images/price-tag.svg"}
                    width={24}
                    height={24}
                    alt="price-tag"
                    style={{ marginTop: -32 }}
                  />
                ) : null}
                <button
                  onClick={() => {
                    onHeaderItemClick(headerItem.id);
                    setMenuIsOpen(false);
                  }}
                >
                  <p
                    className={`${activeItemId === headerItem.id ? "text-primary" : "text-grey"} hover:cursor-pointer hover:text-primary`}
                  >
                    {headerItem.text}
                  </p>
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:block">
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
