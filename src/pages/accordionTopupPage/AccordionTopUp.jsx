import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import IconChevronRight from "../../assets/icons/ico_chevron_right.png";
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

function AccordionTopUp() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div>
      <div className="text-2xl my-8 mx-4 text-center">
        <h1>{getHeaderPageHowToTopUpWithJakonePay()}</h1>
      </div>

      <div className="p-7">
        <Accordion
          open={open === 1}
          className="mb-2  border border-pink-300 px-4"
        >
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className={`border-b-0 transition-colors ${
              open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
          >
            <div className="grid grid-cols-6">
              <div className="...">
                <img className="" width={30} src={IcoBankCard} alt="My Image" />
              </div>
              <div className="col-span-4 ml-4">
                {getDescriptionHeaderTopUpWithATMBankDki()}
              </div>
              <div className="relative w-32 ...">
                <div className="absolute inset-x-0 top-0 h-16 ...">
                  <img
                    className="rotate-90"
                    width={30}
                    src={IconChevronRight}
                    alt="My Image"
                  />
                </div>
              </div>
            </div>
          </AccordionHeader>
          <AccordionBody className="">
            <h1 className="text-center font-semibold mb-2">
              {getHeaderPageHowToTopUpWithJakonePay()}
            </h1>

            {getBodyDescriptionTopUpWithATMBankDki()}

            {getDescriptionTopUpWithATMBankDki()}
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 2}
          className="mb-2  border border-pink-300 px-4"
        >
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className={`border-b-0 transition-colors ${
              open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
          >
            <div className="grid grid-cols-6">
              <div className="...">
                <img
                  className=""
                  width={30}
                  src={IcoAccountBalance}
                  alt="My Image"
                />
              </div>
              <div className="col-span-4 ml-4">
                {getDescriptionHeaderTopUpWithATMBankLain()}
              </div>
              <div className="relative w-32 ...">
                <div className="absolute inset-x-0 top-0 h-16 ...">
                  <img
                    className="rotate-90"
                    width={30}
                    src={IconChevronRight}
                    alt="My Image"
                  />
                </div>
              </div>
            </div>
          </AccordionHeader>
          <AccordionBody className="">
            <h1 className="text-center font-semibold mb-2">
              {getHeaderPageHowToTopUpWithJakonePay()}
            </h1>
            {getBodyDescriptionTopUpWithATMBankLain()}

            {getDescriptionTopUpWithATMBankLain()}
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 3}
          className="mb-2  border border-pink-300 px-4"
        >
          <AccordionHeader
            onClick={() => handleOpen(3)}
            className={`border-b-0 transition-colors ${
              open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
          >
            <div className="grid grid-cols-6">
              <div className="...">
                <img
                  className=""
                  width={30}
                  src={IcoJakoneMobile}
                  alt="My Image"
                />
              </div>
              <div className="col-span-4 ml-4">
                {getDescriptionHeaderTopUpWithATMJakOneMobile()}
              </div>
              <div className="relative w-32 ...">
                <div className="absolute inset-x-0 top-0 h-16 ...">
                  <img
                    className="rotate-90"
                    width={30}
                    src={IconChevronRight}
                    alt="My Image"
                  />
                </div>
              </div>
            </div>
          </AccordionHeader>
          <AccordionBody className="">
            <h1 className="text-center font-semibold mb-2">
              {getHeaderPageHowToTopUpWithJakonePay()}
            </h1>
            {getBodyDescriptionTopUpWithATMDebitKredit()}

            {getDescriptionTopUpWithATMDebitKredit()}
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 4}
          className="mb-2  border border-pink-300 px-4"
        >
          <AccordionHeader
            onClick={() => handleOpen(4)}
            className={`border-b-0 transition-colors ${
              open === 4 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
          >
            <div className="grid grid-cols-6">
              <div className="...">
                <img className="" width={30} src={IconCc2} alt="My Image" />
              </div>
              <div className="col-span-4 ml-4">
                {getDescriptionHeaderTopUpWithATMDebitKredit()}
              </div>
              <div className="relative w-32 ...">
                <div className="absolute inset-x-0 top-0 h-16 ...">
                  <img
                    className="rotate-90"
                    width={30}
                    src={IconChevronRight}
                    alt="My Image"
                  />
                </div>
              </div>
            </div>
          </AccordionHeader>
          <AccordionBody className="">
            <h1 className="text-center font-semibold mb-2">
              {getHeaderPageHowToTopUpWithJakonePay()}
            </h1>
            {getBodyDescriptionTopUpWithATMJakOneMobile()}

            {getDescriptionTopUpWithATMJakOneMobile()}
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
}

export default AccordionTopUp;
