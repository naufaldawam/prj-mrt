import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import IcoBankCard from "../../assets/icons/ico_bank_card.png";
import IcoAccountBalance from "../../assets/icons/ico_account_balance.png";
import IcoJakoneMobile from "../../assets/icons/ico_jakone_mobile.png";
import IconCc2 from "../../assets/icons/icon_cc_2.png";

import {
  getDescriptionHeaderTopUpWithATMBankDki,
  getBodyDescriptionTopUpWithATMBankDki,
  getDescriptionTopUpWithATMBankDki,
  getDescriptionHeaderTopUpWithATMBankLain,
  getBodyDescriptionTopUpWithATMBankLain,
  getDescriptionTopUpWithATMBankLain,
  getDescriptionHeaderTopUpWithATMJakOneMobile,
  getBodyDescriptionTopUpWithATMJakOneMobile,
  getDescriptionTopUpWithATMJakOneMobile,
  getDescriptionHeaderTopUpWithATMDebitKredit,
  getBodyDescriptionTopUpWithATMDebitKredit,
  getDescriptionTopUpWithATMDebitKredit,
  getHeaderPageHowToTopUpWithJakonePay,
} from "../../constantFile/I_Constant";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

function AccordionCustomIcon() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <h2 className="mx-5 my-5 font-medium text-xl">
        {getHeaderPageHowToTopUpWithJakonePay()}
      </h2>
      <div className="m-5">
        <Accordion
          open={open === 1}
          icon={<Icon id={1} open={open} />}
          className=""
        >
          <AccordionHeader onClick={() => handleOpen(1)}>
            <img className="" width={25} src={IcoBankCard} alt="My Image" />
            <div className="text-base -ml-28">
              {getDescriptionHeaderTopUpWithATMBankDki()}
            </div>
          </AccordionHeader>
          <AccordionBody>
            {getBodyDescriptionTopUpWithATMBankDki()}

            {getDescriptionTopUpWithATMBankDki()}
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            <img
              className="mr-5"
              width={25}
              src={IcoAccountBalance}
              alt="My Image"
            />
            <div className="text-base">
              {getDescriptionHeaderTopUpWithATMBankLain()}
            </div>
          </AccordionHeader>
          <AccordionBody>
            {getBodyDescriptionTopUpWithATMBankLain()}

            {getDescriptionTopUpWithATMBankLain()}
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            <img
              className="mr-5"
              width={25}
              src={IcoJakoneMobile}
              alt="My Image"
            />
            <div className="text-base">
              {getDescriptionHeaderTopUpWithATMJakOneMobile()}
            </div>
          </AccordionHeader>
          <AccordionBody>
            {getBodyDescriptionTopUpWithATMDebitKredit()}

            {getDescriptionTopUpWithATMDebitKredit()}
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(4)}>
            <img className="mr-5" width={25} src={IconCc2} alt="My Image" />
            <div className="text-base">
              {getDescriptionHeaderTopUpWithATMDebitKredit()}
            </div>
          </AccordionHeader>
          <AccordionBody>
            {getBodyDescriptionTopUpWithATMJakOneMobile()}

            {getDescriptionTopUpWithATMJakOneMobile()}
          </AccordionBody>
        </Accordion>
      </div>
    </>
  );
}
export default AccordionCustomIcon;
