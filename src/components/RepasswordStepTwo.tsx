import React, { useState } from "react";

export const RepasswordStepTwo = ({
  setStep,
  code,
  setAlertVisible,
  setAlertWord,
}: any) => {
  const [authCode, setAuthCode] = useState<any>(0);
  const auth = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (code != authCode) {
        setAlertWord("Баталгаажуулах код буруу байна!");
        setAlertVisible(true);
        setTimeout(() => {
          setAlertVisible(false);
        }, 2000);
        return;
      }
      setAlertWord("Баталгаажуулах код таарлаа!");
      setAlertVisible(true);
      setTimeout(() => {
        setAlertVisible(false);
      }, 2000);
      return setStep(3);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form
      onSubmit={auth}
      className="flex flex-col w-1/3 h-96 justify-center items-center my-8 gap-8"
    >
      <p className="text-black font-semibold text-3xl">Нууц үг сэргээх</p>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-gray-600">Нууц үг сэргээх код</label>
          <input
            type="number"
            onChange={(e) => setAuthCode(e.target.value)}
            placeholder="123456"
            className="bg-gray-200 w-80 h-12 rounded-lg text-black px-4"
          />
        </div>
      </div>
      <button
        type="submit"
        className={`${
          authCode == "" ? "bg-gray-300" : "bg-green-500"
        } rounded-lg w-80 h-12`}
      >
        Үргэлжлүүлэх
      </button>
    </form>
  );
};
