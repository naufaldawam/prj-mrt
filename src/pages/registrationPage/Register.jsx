import { Card } from "@material-tailwind/react";
import { decode as base64_decode } from "base-64";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  LoadLogo,
  LoaderPageWithLottie,
  getButtonStyle,
  getChannelID,
  handleButtonGoToPageCreatePin,
  setCookie,
  FunctionDecryptAES,
  popMessage,
  getCookie
} from "../../constantFile/I_Constant";
import DataEndPoint from "../../services/APIServices";

const Registration = () => {
  let { idreg, channel, url, stannum, urlExpired } = useParams();
  const [tfphoneNumber, settfphoneNumber] = useState(false);
  const [tffullName, settffullName] = useState(false);
  const [tfdateOfBirth, settfdateOfBirth] = useState(false);
  const [tfplaceOfBirth, settfplaceOfBirth] = useState(false);
  const [tfemail, settfemail] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [disableFormInputEmail, setDisableFormInputEmail] = useState(true);
  const [disableFormInputDateOfBirth, setDisableFormInputDateOfBirth] = useState(true);
  const [disableFormInputPlaceOfBirth, setDisableFormInputPlaceOfBirth] = useState(true);
  const [showModalChekkingEmail, setShowModalChekkingEmail] = useState(false);
  const [showModalChekkingEmailUnableToProcess, setShowModalChekkingEmailUnableToProcess] = useState(false);
  const [handleButtonConfirmationToDisable, setHandleButtonConfirmationToDisable] = useState(false);
  const [oldEmail, setOldEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [popTitle, setPopTitle] = useState("");

  const modalclose = () => {
    setShowModalChekkingEmail(false);
  };

  url = "/create-pin/" + getChannelID();
  urlExpired = "/expire-link/" + getChannelID();
  channel = getChannelID();
  stannum = Math.floor(Math.random() * 999999) + 100000;

  const maxDate = () => {
    const today = new Date();
    today.setFullYear(today.getFullYear() - 100);
    return today.toISOString().split('T')[0];
  };

  const getTimeExpired = () => {
    const getValueIdReg = FunctionDecryptAES(base64_decode(idreg))
    const getValue = getValueIdReg.split("||");
    const getDate = Date.parse(getValue[1]);
    return getDate;
  };

  const [formData, setFormData] = useState({
    phoneNumber: "",
    fullName: "",
    dateOfBirth: "",
    placeOfBirth: "",
    email: "",
    channelId: "",
    stan: "",
    requestDate: "",
    requestTime: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      [e.target.phoneNumber]: e.target.value,
      [e.target.fullName]: e.target.value,
      [e.target.dateOfBirth]: e.target.value,
      [e.target.placeOfBirth]: e.target.value,
      [e.target.email]: e.target.value,
      channelId: channel.toUpperCase(),
      stan: stannum,
      requestDate: moment().format("YYYY-MM-DD"),
      requestTime: moment().format("hh:mm:ss"),
    });
    if (oldEmail === e.target.value) {
      setHandleButtonConfirmationToDisable(true);
    } else {
      setHandleButtonConfirmationToDisable(false);
    }
  };

  const params = useParams();
  const pParams = {
    idRequest: params.idreg, // value ? value : null,
    requestDate: moment().format("YYYY-MM-DD"),
    requestTime: moment().format("hh:mm:ss"),
    channelId: getChannelID(), //sesData.channelId, // "MARTIPAY"
  };

  const loadDataInquiry = () => {
    DataEndPoint.getinquiryDataByIdRequest(pParams).then((res) => {
      if (res.resultMessages == "Success") {
        if (
          res.result.username !== null &&
          res.result.username !== "" &&
          res.result.username !== ""
        ) {
        } else {
          setIsLoading(false);
          res.result.phoneNumber
            ? settfphoneNumber(true)
            : settfphoneNumber(false);
          res.result.fullName ? settffullName(true) : settffullName(false);
          res.result.dateOfBirth
            ? settfdateOfBirth(true)
            : settfdateOfBirth(false);
          res.result.placeOfBirth
            ? settfplaceOfBirth(true)
            : settfplaceOfBirth(false);
          res.result.email ? settfemail(false) : settfemail(false);

          const mailParams = {
            checkBalance: false,
            checkUser: false,
            emailAddress: res.result.email,
            phoneNumber: res.result.phoneNumber,
            requestDate: moment().format("YYYY-MM-DD"),
            requestTime: moment().format("hh:mm:ss"),
            channelId: getChannelID(),
          };
          DataEndPoint.getCheckEmail(mailParams).then((res) => {
            setOldEmail(res.data.emailAddress);
            if (res.responseCode === "00") {
              setMsg("Email sudah digunakan");
              setPopTitle("Peringatan!");

              setShowModalChekkingEmail(true);
              setDisableFormInputEmail(false);
              setHandleButtonConfirmationToDisable(true);
            }
            if (res.responseCode === "05") {
              setMsg("TIDAK DAPAT MELANJUTKAN");
              setPopTitle("Peringatan!");
              setShowModalChekkingEmail(true);
              setHandleButtonConfirmationToDisable(false);
            }
          });

          setFormData(res.result);
          setDisableFormInputDateOfBirth(true)
          setDisableFormInputEmail(true)
          setDisableFormInputPlaceOfBirth(true)

          if (res.result.email == "") {
            setDisableFormInputEmail(false);
          }
          if (res.result.dateOfBirth == "") {
            setDisableFormInputDateOfBirth(false)
          }
          if (res.result.placeOfBirth == "") {
            setDisableFormInputPlaceOfBirth(false)
          }
        }
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCookie(formData);
    handleButtonGoToPageCreatePin(url + "/" + params.idreg);
  };

  useEffect(() => {
    const fetchData = async () => {
      loadDataInquiry();
      getTimeExpired();

      const urlExpired = "/expired-link/" + getChannelID();
      const getDateFromBlockPayment = getTimeExpired();
      const date = Date.parse(moment().format("DD-MM-YYYY HH:mm:SS"));
      if (date > getDateFromBlockPayment) {
        window.location.replace(urlExpired);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Card color="transparent" shadow={false}>
        <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
          {isLoading ? <LoaderPageWithLottie /> : Registration}
          <div>
            <a href="/">
              <h3 className="text-4xl font-bold text-red-600">{LoadLogo()}</h3>
            </a>
          </div>
          <hr className="w-64 h-1 bg-gray-200 border-0 rounded dark:bg-gray-700" />
          <h4 className="text-xl pt-4 text-center text-gray-600">
            Registration form
          </h4>
          <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white sm:max-w-lg sm:rounded-lg">
            <form id="frmReg" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="phoneNumber"
                >
                  Phone Number
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phoneNumber"
                  type="text"
                  placeholder="Enter Phone Number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  readOnly={tfphoneNumber}
                  disabled={true}
                  pattern="[0-9]*"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="fullName"
                >
                  Full Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="fullName"
                  type="text"
                  placeholder="Enter Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  readOnly={tffullName}
                  disabled={true}
                  pattern="[A-Za-z\s&\d]+"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="dateOfBirth"
                >
                  Birth of date
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="dateOfBirth"
                  type="date"
                  placeholder="Enter birth date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                  readOnly={tfdateOfBirth}
                  disabled={disableFormInputDateOfBirth}
                  max={maxDate()}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="placeOfBirth"
                >
                  Place of Birth
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="placeOfBirth"
                  type="text"
                  placeholder="Enter Place of Birth"
                  name="placeOfBirth"
                  value={formData.placeOfBirth}
                  onChange={handleChange}
                  required
                  readOnly={tfplaceOfBirth}
                  disabled={disableFormInputPlaceOfBirth}
                  pattern="[A-Za-z\s&\d]+"
                  title="Periksa kembali inputan anda"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  readOnly={tfemail}
                  disabled={disableFormInputEmail}
                  pattern="[^😀-🙏]*"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  disabled={handleButtonConfirmationToDisable}
                  type="submit"
                  data-ripple-light="true"
                  className={getButtonStyle()}
                >
                  Konfirmasi
                </button>
              </div>
            </form>
          </div>
        </div>
        {showModalChekkingEmail
          ? popMessage({
            txtTitle: popTitle,
            txtBody: msg,
            btnClose: modalclose,
          })
          : null}
      </Card>
    </>
  );
};

export default Registration;
