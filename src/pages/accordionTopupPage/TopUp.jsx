import React from "react";
import { useTranslation } from "react-i18next";
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
  getBodyDescriptionTopUpWithATMJakOneMobile,
  getDescriptionHeaderTopUpWithATMDebitKredit,
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
  const { t } = useTranslation();
  const headerDescription = t("topupDescription.header", {
    returnObjects: true,
  });
  const descriptionHowToTopUpWithATMBankDki = t(
    "topupDescription.description",
    { returnObjects: true }
  );
  const headerDescription2 = t("topupDescriptionBankLain.header", {
    returnObjects: true,
  });
  const headerDescription3 = t("topupDescriptionJakOneMobile.header", {
    returnObjects: true,
  });

  return (
    <>
      <div className="bg-white min-h-screen flex flex-col">
        <nav className="bg-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <a href="/" className="text-black text-xl font-bold ml-3">
              Top up
            </a>
          </div>
        </nav>
        <div className="m-5">
          <Accordion
            open={open === 1}
            icon={<Icon id={1} open={open} />}
            className=""
          >
            <AccordionHeader
              className="bg-white rounded-md rounded-xl px-2 my-1 border border-gray-300"
              onClick={() => handleOpen(1)}
            >
              <img className="" width={25} src={IcoBankCard} alt="My Image" />
              <div className="text-base -ml-28">
                {headerDescription.map((key, index) => (
                  <div key={index}>
                    {index === 0 && (
                      <p>
                        {t(`topupDescription.${key}`).substring(
                          "topupDescription.".length
                        )}
                      </p>
                    )}
                    {index === 1 && (
                      <small>
                        {t(`topupDescription.${key}`).substring(
                          "topupDescription.".length
                        )}
                      </small>
                    )}
                  </div>
                ))}
              </div>
            </AccordionHeader>
            <AccordionBody>
              {t("topupDescription.body")}
              {/* {getDescriptionTopUpWithATMBankDki()} */}
              <div className="grid grid-cols-6 my-4">
                {descriptionHowToTopUpWithATMBankDki.map((step, index) => (
                  <React.Fragment key={index}>
                    <div
                      key={index}
                      className="w-6 h-6 bg-red-200 rounded-full text-white flex items-center justify-center mb-2 relative"
                    >
                      {index + 1}
                      {index !== 8 && (
                        <div className="h-10 bg-red-200 absolute top-6 w-0.5"></div>
                      )}
                      {index === 2 && (
                        <div className="h-16 bg-red-200 absolute top-6 w-0.5"></div>
                      )}
                      {index === 3 && (
                        <div className="h-12 bg-red-200 absolute top-6 w-0.5"></div>
                      )}
                    </div>
                    <div className="col-span-4">
                      {step.split("<span>").map((part, i) =>
                        i % 2 === 0 ? (
                          <React.Fragment key={i}>
                            {part}
                            <hr className="my-5 bg-gray-300 h-0.3" />
                          </React.Fragment>
                        ) : (
                          <span key={i}>{part}</span>
                        )
                      )}
                    </div>
                    <br />
                  </React.Fragment>
                ))}
              </div>
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
            <AccordionHeader
              className="bg-white rounded-md rounded-xl px-2 my-1 border border-gray-300"
              onClick={() => handleOpen(3)}
            >
              <img
                className="mr-5"
                width={25}
                src={IcoJakoneMobile}
                alt="My Image"
              />
              <div className="text-base">
                {headerDescription3.map((key, index) => (
                  <div key={index}>
                    {index === 0 && (
                      <p>
                        {t(`topupDescriptionJakOneMobile.${key}`).substring(
                          "topupDescriptionJakOneMobile.".length
                        )}
                      </p>
                    )}
                    {index === 1 && (
                      <small>
                        {t(`topupDescriptionJakOneMobile.${key}`).substring(
                          "topupDescriptionJakOneMobile.".length
                        )}
                      </small>
                    )}
                  </div>
                ))}
              </div>
            </AccordionHeader>
            <AccordionBody>
              {t("topupDescriptionDebitKredit.body")}
              <div className="grid grid-cols-6 my-4">
                {descriptionHowToTopUpWithATMBankDki.map((step, index) => (
                  <React.Fragment key={index}>
                    <div
                      key={index}
                      className="w-6 h-6 bg-red-200 rounded-full text-white flex items-center justify-center mb-2 relative"
                    >
                      {index + 1}
                      {index !== 8 && (
                        <div className="h-10 bg-red-200 absolute top-6 w-0.5"></div>
                      )}
                      {index === 2 && (
                        <div className="h-16 bg-red-200 absolute top-6 w-0.5"></div>
                      )}
                      {index === 3 && (
                        <div className="h-12 bg-red-200 absolute top-6 w-0.5"></div>
                      )}
                    </div>
                    <div className="col-span-4">
                      {step.split("<span>").map((part, i) =>
                        i % 2 === 0 ? (
                          <React.Fragment key={i}>
                            {part}
                            <hr className="my-5 bg-gray-300 h-0.3" />
                          </React.Fragment>
                        ) : (
                          <span key={i}>{part}</span>
                        )
                      )}
                    </div>
                    <br />
                  </React.Fragment>
                ))}
              </div>
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
            <AccordionHeader
              className="bg-white rounded-md rounded-xl px-2 my-1 border border-gray-300"
              onClick={() => handleOpen(4)}
            >
              <img className="mr-5" width={25} src={IconCc2} alt="My Image" />
              <div className="text-base">
                {getDescriptionHeaderTopUpWithATMDebitKredit()}
              </div>
            </AccordionHeader>
            <AccordionBody>
              {getBodyDescriptionTopUpWithATMJakOneMobile()}
              <div className="grid grid-cols-6 my-4">
                {descriptionHowToTopUpWithATMBankDki.map((step, index) => (
                  <React.Fragment key={index}>
                    <div
                      key={index}
                      className="w-6 h-6 bg-red-200 rounded-full text-white flex items-center justify-center mb-2 relative"
                    >
                      {index + 1}
                      {index !== 8 && (
                        <div className="h-10 bg-red-200 absolute top-6 w-0.5"></div>
                      )}
                      {index === 2 && (
                        <div className="h-16 bg-red-200 absolute top-6 w-0.5"></div>
                      )}
                      {index === 3 && (
                        <div className="h-12 bg-red-200 absolute top-6 w-0.5"></div>
                      )}
                    </div>
                    <div className="col-span-4">
                      {step.split("<span>").map((part, i) =>
                        i % 2 === 0 ? (
                          <React.Fragment key={i}>
                            {part}
                            <hr className="my-5 bg-gray-300 h-0.3" />
                          </React.Fragment>
                        ) : (
                          <span key={i}>{part}</span>
                        )
                      )}
                    </div>
                    <br />
                  </React.Fragment>
                ))}
              </div>
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
            <AccordionHeader
              className="bg-white rounded-md rounded-xl px-2 my-1 border border-gray-300"
              onClick={() => handleOpen(2)}
            >
              <img
                className="mr-5"
                width={25}
                src={IcoAccountBalance}
                alt="My Image"
              />
              <div className="text-base">
                {headerDescription2.map((key, index) => (
                  <div key={index}>
                    {index === 0 && (
                      <p>
                        {t(`topupDescriptionBankLain.${key}`).substring(
                          "topupDescriptionBankLain.".length
                        )}
                      </p>
                    )}
                    {index === 1 && (
                      <small>
                        {t(`topupDescriptionBankLain.${key}`).substring(
                          "topupDescriptionBankLain.".length
                        )}
                      </small>
                    )}
                  </div>
                ))}
              </div>
            </AccordionHeader>
            <AccordionBody>
              {t("topupDescriptionBankLain.body")}
              <div className="grid grid-cols-6 my-4">
                {descriptionHowToTopUpWithATMBankDki.map((step, index) => (
                  <React.Fragment key={index}>
                    <div
                      key={index}
                      className="w-6 h-6 bg-red-200 rounded-full text-white flex items-center justify-center mb-2 relative"
                    >
                      {index + 1}
                      {index !== 8 && (
                        <div className="h-10 bg-red-200 absolute top-6 w-0.5"></div>
                      )}
                      {index === 2 && (
                        <div className="h-16 bg-red-200 absolute top-6 w-0.5"></div>
                      )}
                      {index === 3 && (
                        <div className="h-12 bg-red-200 absolute top-6 w-0.5"></div>
                      )}
                    </div>
                    <div className="col-span-4">
                      {step.split("<span>").map((part, i) =>
                        i % 2 === 0 ? (
                          <React.Fragment key={i}>
                            {part}
                            <hr className="my-5 bg-gray-300 h-0.3" />
                          </React.Fragment>
                        ) : (
                          <span key={i}>{part}</span>
                        )
                      )}
                    </div>
                    <br />
                  </React.Fragment>
                ))}
              </div>
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </>
  );
}
export default AccordionCustomIcon;
