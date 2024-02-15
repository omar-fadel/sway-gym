"use client";

import { getDictionary } from "@/app/[lang]/dictionaries";
import Header from "@/components/Header/Header";
import { useRouter } from "next/navigation";

const HeaderContainer: React.FC<{
  headers: string[];
  headerButtonText: string;
}> = ({ headers, headerButtonText }) => {
  const router = useRouter();
  return (
    <Header
      onLogoClick={() => {
        router.push("/");
      }}
      onHeaderButtonClick={() => {
        console.log("button click");
      }}
      onHeaderItemClick={(id) => {
        console.log(`${id}`);
        router.push(id);
      }}
      buttonText={headerButtonText}
      headerItems={[
        {
          id: "0",
          text: headers[0],
        },
        {
          id: "1",
          text: headers[1],
        },
        {
          id: "2",
          text: headers[2],
        },
        {
          id: "3",
          text: headers[3],
        },
        {
          id: "4",
          text: headers[4],
        },
      ]}
    />
  );
};

export default HeaderContainer;
