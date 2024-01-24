import PinInput from "react-pin-input";

function NotifPin() {
  return (
    <>
      <div>
        <PinInput
          length={6}
          initialValue=""
          secret={false}
          secretDelay={1000}
          onChange={() => {}}
          type="numeric"
          inputMode="number"
          style={{ padding: "10px", marginRight: "1rem" }}
          inputStyle={{
            borderColor: "gray",
            height: "3rem",
            width: "2.5rem",
            marginRight: "1.47rem",
            border: "1px solid",
            borderBottom: "4px solid rgb(248 113 113)",
            margin: "0.5rem",
            borderRadius: "0.375rem",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.875rem",
            fontWeight: "100",
            textAlign: "center",
          }}
          inputFocusStyle={{}}
          onComplete={() => {}}
          autoSelect={true}
          regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
        />
      </div>
    </>
  );
}

export default NotifPin;
