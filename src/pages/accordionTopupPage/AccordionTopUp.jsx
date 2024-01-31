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

function AccordionTopUp() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div>

      <div className="text-2xl my-8 mx-4 text-center">
        <h1>
          <strong>Topup JakOne Pay</strong>
        </h1>
      </div>
      <div className="p-7">
        <Accordion
          open={open === 1}
          className="mb-2  border border-pink-300 px-4"
        >
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className={`border-b-0 transition-colors ${open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
          >
            <div className="grid grid-cols-6">
              <div className="...">
                <img className="" width={60} src={IcoBankCard} alt="My Image" />
              </div>
              <div className="col-span-4 ml-4">
                <strong>ATM Bank DKI</strong> <br />
                <small>ATM Bank DKI terdekat</small>
              </div>
              <div className="relative w-32 ...">
                <div className="absolute inset-x-0 top-0 h-16 ...">
                  <img
                    className="rotate-90"
                    width={60}
                    src={IconChevronRight}
                    alt="My Image"
                  />
                </div>
              </div>
            </div>
          </AccordionHeader>
          <AccordionBody className="">
            <h1 className="text-center font-semibold mb-2">
              <strong>TopUp JakOne Pay</strong>
            </h1>
            <p>
              Sekarang kamu dapat mengisi JakonePay melalui seluruh mesin ATM Bank
              BKI. Ikuti Langkah-langkah di bawah ini untuk melakukan TopUp
              JakOnePay
            </p>
            <div className="grid grid-cols-6 my-4">
              <div className="w-8 h-8 bg-red-200 rounded flex items-center justify-center mb-2">
                1
              </div>
              <div className="col-span-4">
                Pilih Menu <span>Pembayaran</span>
              </div>
              <br />
              <div className="w-8 h-8 bg-red-200 rounded flex items-center justify-center mb-2">
                2
              </div>
              <div className="col-span-4">
                Pilih Menu
                <span>Virtual Account</span>
              </div>
              <br />
              <div className="w-8 h-8 bg-red-200 rounded flex items-center justify-center mb-2">
                3
              </div>
              <div className="col-span-4">
                Masukan <span>No. Virtual Account (9980) </span>
                yang diikuti dengan nomor Handphone Kamu.
              </div>
              <br />
              <div className="w-8 h-8 bg-red-200 rounded flex items-center justify-center mb-2">
                4
              </div>
              <div className="col-span-4">
                kosongkan
                <span>Kode Pembayaran</span>
                lalu pilih <span>Lanjut</span>
              </div>
              <br />
              <div className="w-8 h-8 bg-red-200 rounded flex items-center justify-center mb-2">
                5
              </div>
              <div className="col-span-4">
                Masukan
                <span>Nominal Transaksi, </span>
                lalu pilih <span>Lanjut</span>
              </div>
              <br />
              <div className="w-8 h-8 bg-red-200 rounded flex items-center justify-center mb-2">
                6
              </div>
              <div className="col-span-4">
                Jika
                <span>Nominal Transaksi, </span>
                dan <span>Nomor Virtual Account </span>
                benar, pilih Benar
              </div>
              <br />
              <div className="w-8 h-8 bg-red-200 rounded flex items-center justify-center mb-2">
                7
              </div>
              <div className="col-span-4">
                Setelah berhasil saldo JakOnePay Kamu akan bertambah
              </div>
            </div>
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 2}
          className="mb-2  border border-pink-300 px-4"
        >
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className={`border-b-0 transition-colors ${open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
          >
            <div className="grid grid-cols-6">
              <div className="...">
                <img
                  className=""
                  width={60}
                  src={IcoAccountBalance}
                  alt="My Image"
                />
              </div>
              <div className="col-span-4 ml-4">
                <strong>Bank Lain</strong> <br />
                <small>
                  Kapan pun dimana pun melalui chanel bank di indonesia
                </small>
              </div>
              <div className="relative w-32 ...">
                <div className="absolute inset-x-0 top-0 h-16 ...">
                  <img
                    className="rotate-90"
                    width={60}
                    src={IconChevronRight}
                    alt="My Image"
                  />
                </div>
              </div>
            </div>
          </AccordionHeader>
          <AccordionBody className="">
            <h1 className="text-center font-semibold mb-2">
              <strong>TopUp JakOne Pay</strong>
            </h1>
            <p>
              Kamu dapat mengisi JakOne Pay melalui transfer melalui bank lain.
              Ikuti Langkah-langkah dibawah ini untuk melakukan TopUp JakOne Pay.
            </p>
            <div className="grid grid-cols-6 my-4">
              <div className="w-8 h-8 bg-red-200 rounded flex items-center justify-center mb-2">
                1
              </div>
              <div className="col-span-4">
                Pilih Menu <span>Pembayaran</span>
              </div>
              <br />
              <div className="w-8 h-8 bg-red-200 rounded flex items-center justify-center mb-2">
                2
              </div>
              <div className="col-span-4">
                Pilih Menu
                <span>Virtual Account</span>
              </div>
              <br />
              <div className="w-8 h-8 bg-red-200 rounded flex items-center justify-center mb-2">
                3
              </div>
              <div className="col-span-4">
                Masukan <span>No. Virtual Account (9980) </span>
                yang diikuti dengan nomor Handphone Kamu.
              </div>
              <br />
              <div className="w-8 h-8 bg-red-200 rounded flex items-center justify-center mb-2">
                4
              </div>
              <div className="col-span-4">
                kosongkan
                <span>Kode Pembayaran</span>
                lalu pilih <span>Lanjut</span>
              </div>
              <br />
              <div className="w-8 h-8 bg-red-200 rounded flex items-center justify-center mb-2">
                5
              </div>
              <div className="col-span-4">
                Masukan
                <span>Nominal Transaksi, </span>
                lalu pilih <span>Lanjut</span>
              </div>
              <br />
              <div className="w-8 h-8 bg-red-200 rounded flex items-center justify-center mb-2">
                6
              </div>
              <div className="col-span-4">
                Jika
                <span>Nominal Transaksi, </span>
                dan <span>Nomor Virtual Account </span>
                benar, pilih Benar
              </div>
              <br />
              <div className="w-8 h-8 bg-red-200 rounded flex items-center justify-center mb-2">
                7
              </div>
              <div className="col-span-4">
                Setelah berhasil saldo JakOnePay Kamu akan bertambah
              </div>
            </div>
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 3}
          className="mb-2  border border-pink-300 px-4"
        >
          <AccordionHeader
            onClick={() => handleOpen(3)}
            className={`border-b-0 transition-colors ${open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
          >
            <div className="grid grid-cols-6">
              <div className="...">
                <img
                  className=""
                  width={60}
                  src={IcoJakoneMobile}
                  alt="My Image"
                />
              </div>
              <div className="col-span-4 ml-4">
                <strong>JakOne Mobile</strong> <br />
                <small>Tanpa biaya isi saldo dari JakOne Mobile</small>
              </div>
              <div className="relative w-32 ...">
                <div className="absolute inset-x-0 top-0 h-16 ...">
                  <img
                    className="rotate-90"
                    width={60}
                    src={IconChevronRight}
                    alt="My Image"
                  />
                </div>
              </div>
            </div>
          </AccordionHeader>
          <AccordionBody className="">
            <h1 className="text-center font-semibold mb-2">
              <strong>TopUp JakOne Pay</strong>
            </h1>
            <p>
              Sekarang kamu dapat mengisi JakonePay melalui seluruh mesin ATM Bank
              BKI. Ikuti Langkah-langkah di bawah ini untuk melakukan TopUp
              JakOnePay
            </p>
            <div className="grid grid-cols-6 my-4">
              <div className="w-8 h-8 bg-red-200 rounded flex items-center justify-center mb-2">
                1
              </div>
              <div className="col-span-4">
                Pilih Menu <span>Pembayaran</span>
              </div>
              <br />
              <div className="w-8 h-8 bg-red-200 rounded flex items-center justify-center mb-2">
                2
              </div>
              <div className="col-span-4">
                Pilih Menu
                <span>Virtual Account</span>
              </div>
              <br />
              <div className="w-8 h-8 bg-red-200 rounded flex items-center justify-center mb-2">
                3
              </div>
              <div className="col-span-4">
                Masukan <span>No. Virtual Account (9980) </span>
                yang diikuti dengan nomor Handphone Kamu.
              </div>
              <br />
              <div className="w-8 h-8 bg-red-200 rounded flex items-center justify-center mb-2">
                4
              </div>
              <div className="col-span-4">
                kosongkan
                <span>Kode Pembayaran</span>
                lalu pilih <span>Lanjut</span>
              </div>
              <br />
              <div className="w-8 h-8 bg-red-200 rounded flex items-center justify-center mb-2">
                5
              </div>
              <div className="col-span-4">
                Masukan
                <span>Nominal Transaksi, </span>
                lalu pilih <span>Lanjut</span>
              </div>
              <br />
              <div className="w-8 h-8 bg-red-200 rounded flex items-center justify-center mb-2">
                6
              </div>
              <div className="col-span-4">
                Jika
                <span>Nominal Transaksi, </span>
                dan <span>Nomor Virtual Account </span>
                benar, pilih Benar
              </div>
              <br />
              <div className="w-8 h-8 bg-red-200 rounded flex items-center justify-center mb-2">
                7
              </div>
              <div className="col-span-4">
                Setelah berhasil saldo JakOnePay Kamu akan bertambah
              </div>
            </div>
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 4}
          className="mb-2  border border-pink-300 px-4"
        >
          <AccordionHeader
            onClick={() => handleOpen(4)}
            className={`border-b-0 transition-colors ${open === 4 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
          >
            <div className="grid grid-cols-6">
              <div className="...">
                <img className="" width={60} src={IconCc2} alt="My Image" />
              </div>
              <div className="col-span-4 ml-4">
                <strong>Kartu Debit/Kredit</strong> <br />
                <small>
                  Praktis dan aman isi saldo dengan Debit atau Kartu Kredit
                  International
                </small>
              </div>
              <div className="relative w-32 ...">
                <div className="absolute inset-x-0 top-0 h-16 ...">
                  <img
                    className="rotate-90"
                    width={60}
                    src={IconChevronRight}
                    alt="My Image"
                  />
                </div>
              </div>
            </div>
          </AccordionHeader>
          <AccordionBody className="">
            <h1 className="text-center font-semibold mb-2">
              <strong>TopUp JakOne Pay</strong>
            </h1>
            <p>
              Sekarang kamu dapat mengisi JakonePay melalui seluruh mesin ATM Bank
              BKI. Ikuti Langkah-langkah di bawah ini untuk melakukan TopUp
              JakOnePay
            </p>
            <div className="grid grid-cols-6 my-4">
              <div className="w-8 h-8 bg-red-200 rounded flex items-center justify-center mb-2">
                1
              </div>
              <div className="col-span-4">
                Pilih Menu <span>Pembayaran</span>
              </div>
              <br />
              <div className="w-8 h-8 bg-red-200 rounded flex items-center justify-center mb-2">
                2
              </div>
              <div className="col-span-4">
                Pilih Menu
                <span>Virtual Account</span>
              </div>
              <br />
              <div className="w-8 h-8 bg-red-200 rounded flex items-center justify-center mb-2">
                3
              </div>
              <div className="col-span-4">
                Masukan <span>No. Virtual Account (9980) </span>
                yang diikuti dengan nomor Handphone Kamu.
              </div>
              <br />
              <div className="w-8 h-8 bg-red-200 rounded flex items-center justify-center mb-2">
                4
              </div>
              <div className="col-span-4">
                kosongkan
                <span>Kode Pembayaran</span>
                lalu pilih <span>Lanjut</span>
              </div>
              <br />
              <div className="w-8 h-8 bg-red-200 rounded flex items-center justify-center mb-2">
                5
              </div>
              <div className="col-span-4">
                Masukan
                <span>Nominal Transaksi, </span>
                lalu pilih <span>Lanjut</span>
              </div>
              <br />
              <div className="w-8 h-8 bg-red-200 rounded flex items-center justify-center mb-2">
                6
              </div>
              <div className="col-span-4">
                Jika
                <span>Nominal Transaksi, </span>
                dan <span>Nomor Virtual Account </span>
                benar, pilih Benar
              </div>
              <br />
              <div className="w-8 h-8 bg-red-200 rounded flex items-center justify-center mb-2">
                7
              </div>
              <div className="col-span-4">
                Setelah berhasil saldo JakOnePay Kamu akan bertambah
              </div>
            </div>
          </AccordionBody>
        </Accordion>
      </div>

    </div>
  );
}

export default AccordionTopUp;
