"use client";
import Image from "next/image";
import Contacts, { ContactsProps } from "./Contacts/Contacts";
import Follow, { FollowProps } from "./Follow/Follow";
import Reservation, { ReservationProps } from "./Reservation/Reservation";
import SectionWrapper from "./SectionWrapper/SectionWrapper";
import License from "./License/License";

interface FooterProps {
  followTitle: string;
  followIcons: FollowProps;
  contactsTitle: string;
  contacts: ContactsProps;
  reservationTitle: string;
  reservation: ReservationProps;
}

const Footer: React.FC<FooterProps> = ({
  contactsTitle,
  contacts,
  followTitle,
  followIcons,
  reservationTitle,
  reservation,
}) => {
  return (

<div className="flex flex-col items-center bg-black">
      <footer className="flex max-w-screen-lg flex-col gap-4 px-8 py-4">
        <Image
          className="-mx-4 mb-4"
          alt="logo"
          height={150}
          width={150}
          src={"/icons/swayIcon.svg"}
        />
        <div className="flex flex-wrap">
          <SectionWrapper title={followTitle}>
            <Follow {...followIcons} />
          </SectionWrapper>
          <SectionWrapper title={contactsTitle}>
            <Contacts {...contacts} />
          </SectionWrapper>
          <SectionWrapper title={reservationTitle}>
            <Reservation {...reservation} />
          </SectionWrapper>
        </div>
      </footer>
      <div className="mt-8 h-1 w-full bg-primary" />
      <License />
    </div>
  );
};

export default Footer;
