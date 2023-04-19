import React, { FC, useState } from "react";
import Button from "components/common/Button";
import TextField from "components/common/TextField";
import Checkbox from "components/common/Checkbox";

import API from "apis/API";

interface Props {
  handleClose: () => void;
  handleOpenSigninModal?: () => void;
}

const SignupModal: FC<Props> = (props) => {
  const [tab, setTab] = useState("traveler");
  const [tabs] = useState([
    { id: "traveler", label: "As Traveler" },
    { id: "transporter", label: "As transport provider" },
  ]);

  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    if (password === confirmPassword) {
      API.post("/auth/register", {
        email,
        password,
        firstName,
        lastName,
        companyName,
        userName,
      }).then((res) => {
        if (res.status === 200) {
          props.handleClose();
        }
      });
    } else {
      alert("Not matched Password");
    }
  };

  return (
    <div className="shadow-large rounded-[20px] overflow-hidden">
      <div className="bg-cyanblue py-[60px]">
        <button
          className="w-9 h-9 rounded-full bg-hotpink shadow-theme flex justify-center items-center absolute top-6 right-5 tablet:right-6"
          onClick={props.handleClose}
        >
          <img src="/images/icons/close.svg" alt="" />
        </button>
        <p className="text-[40px] font-bold text-white text-center">Sign up</p>
      </div>
      <div className="mt-[-26px]">
        <div className="w-full h-[52px] flex items-center text-base font-bold">
          {tabs.map((item, index) => {
            return (
              <div
                key={index}
                className={`w-1/2 h-full flex items-center justify-center cursor-pointer rounded-xl text-center ${
                  item.id === tab
                    ? `bg-light text-cyanblue`
                    : `bg-cyanblue text-white`
                }`}
                onClick={() => setTab(item.id)}
              >
                {item.label}
              </div>
            );
          })}
        </div>
        <div className="pt-6 px-4 tablet:px-6 desktop:px-9 pb-7 tablet:pb-10">
          <div className="flex flex-col items-center border-b border-b-cyanblue pb-6">
            <div className="w-full mb-6">
              <TextField
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label={
                  <span className="text-base text-hotpink mb-2 ml-4">
                    Email
                  </span>
                }
              />
            </div>
            <div className="w-full mb-6">
              <TextField
                type="pasword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label={
                  <span className="text-base text-hotpink mb-2 ml-4">
                    Password
                  </span>
                }
              />
            </div>
            <div className="w-full mb-6">
              <TextField
                type="pasword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                label={
                  <span className="text-base text-hotpink mb-2 ml-4">
                    Repeat Password
                  </span>
                }
              />
            </div>
            {tab === "traveler" ? (
              <>
                <div className="w-full mb-6">
                  <TextField
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    label={
                      <span className="text-base text-hotpink mb-2 ml-4">
                        Company Name
                      </span>
                    }
                  />
                </div>
              </>
            ) : (
              <>
                <div className="w-full mb-6">
                  <TextField
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    label={
                      <span className="text-base text-hotpink mb-2 ml-4">
                        Username
                      </span>
                    }
                  />
                </div>
                <div className="w-full mb-6">
                  <TextField
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    label={
                      <span className="text-base text-hotpink mb-2 ml-4">
                        First Name
                      </span>
                    }
                  />
                </div>
                <div className="w-full mb-6">
                  <TextField
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    label={
                      <span className="text-base text-hotpink mb-2 ml-4">
                        Last Name
                      </span>
                    }
                  />
                </div>
              </>
            )}
            <div className="w-full flex items-start mb-6">
              <Checkbox checked={true} />
              <span className="text-base ml-1.5">
                I agree with the Terms & Conditions
              </span>
            </div>
            <div className="w-full flex items-start mb-6">
              <Checkbox checked={false} />
              <span className="text-base ml-1.5">
                Receive news of product updates and marketing emails from
                Routeer
              </span>
            </div>
            <Button variant="danger" onClick={handleSignup}>
              sign up
            </Button>
          </div>
          <div className="text-darkgray text-base pt-6 text-center">
            Already a member?{" "}
            <span
              className="text-hotpink font-bold cursor-pointer"
              onClick={props.handleOpenSigninModal}
            >
              Sign in
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
