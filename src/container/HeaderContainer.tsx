"use client";

import { getDictionary } from "@/app/[lang]/dictionaries";
import Header from "@/components/Header/Header";
import { usePathname, useRouter } from "next/navigation";

const HeaderContainer: React.FC<{
  headers: string[];
  headerButtonText: string;
  locale: "ar" | "en";
}> = ({ headers, headerButtonText, locale }) => {
  const router = useRouter();
  const pathname = usePathname();
  const currentRoute = pathname.split("/").pop();
  return (
    <Header
      onLogoClick={() => {
        router.push("/");
      }}
      onHeaderButtonClick={() => {
        console.log("button click");
      }}
      onHeaderItemClick={(id) => {
        router.push(`/${locale}/${id}`);
      }}
      buttonText={headerButtonText}
      activeItemId={currentRoute}
      headerItems={[
        {
          id: "around-us",
          text: headers[0],
        },
        {
          id: "address",
          text: headers[1],
        },
        {
          id: "prices",
          text: headers[2],
        },
        {
          id: "classes",
          text: headers[3],
        },
        {
          id: "contact-us",
          text: headers[4],
        },
      ]}
    />
  );
};

export default HeaderContainer;
