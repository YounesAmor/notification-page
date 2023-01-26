import React, { useState } from "react";
const Notifications = () => {
  const [allRead, setAllRead] = useState(false);
  const toggleStateComment = () => {
    setAllRead(!allRead);
    console.log("here booo", allRead);
  };
  return (
    <div className="h-auto lg:w-[730px] bg-white border rounded-lg sm:w-auto sm:mx-10 sm:my-2">
      {/* Top of the page */}
      <div className="flex flex-row justify-between lg:mx-8 lg:my-10 sm:mx-4 sm:my-4">
        <div className="flex">
          <div className="mr-2 lg:text-2xl text-veryDarkBlue font-bold sm:text-lg">
            Notifications
          </div>
          <p className="bg-blue text-white lg:p-2 sm:p-1 text-jakarta border rounded font-medium sm:text-sm">
            {allRead === false ? "3" : "0"}
          </p>
        </div>

        <div className="sm:flex sm:items-center">
          <button
            className="text-grayishBlue lg:text-lg sm:text-[10px] font-medium sm:ml-4 hover:cursor-pointer hover:text-blue"
            onClick={toggleStateComment}
          >
            Mark all as Read
          </button>
        </div>
      </div>
      {/* Notification Section */}
      <div className="lg:mx-8 lg:my-1 sm:mx-4 sm:my-1">
        <div
          className={
            allRead === true
              ? "flex items-center border rounded-lg border-transparent bg-white p-2"
              : "flex items-center border rounded-lg border-transparent bg-veryLightGrayishBlue p-2"
          }
        >
          <div className="">
            <img
              src={require("../assets/images/avatar-mark-webber.webp")}
              alt="mark"
              className="lg:w-[80px] sm:w-[80px]"
            />
          </div>
          <div className="flex flex-col text-left justify-center ml-4">
            <div className="text-jakarta text-gray-400 lg:text-[15px] sm:text-[10px] flex flex-row">
              <div className="flex items-center">
                <p className="lg:mr-2">
                  <span className="font-bold text-black hover:text-blue hover:cursor-pointer">
                    Mark Webber
                  </span>{" "}
                  reacted to your recent post{"  "}
                  <span className="text-gray-500 font-bold hover:text-blue hover:cursor-pointer">
                    My first tournament today!
                  </span>
                  {"  "}
                  <span className="p-[2px] border border-transparent rounded-full bg-red w-2 h-2 inline-block"></span>
                </p>
              </div>
            </div>

            <div className="text-jakarta text-gray-400 lg:text-[15px] sm:text-[11px]">
              1m ago
            </div>
          </div>
        </div>
      </div>
      <div className="lg:mx-8 lg:my-1 sm:mx-4 sm:my-1">
        <div
          className={
            allRead === true
              ? "flex items-center border rounded-lg border-transparent bg-white p-2"
              : "flex items-center border rounded-lg border-transparent bg-veryLightGrayishBlue p-2"
          }
        >
          <div className="">
            <img
              src={require("../assets/images/avatar-angela-gray.webp")}
              alt="mark"
              className="lg:w-[80px] sm:w-[40px]"
            />
          </div>
          <div className="flex flex-col text-left justify-center ml-4">
            <div className="text-jakarta text-gray-400 lg:text-[15px] sm:text-[10px] flex flex-row">
              <div className="flex items-center">
                <p className="lg:mr-2">
                  <span className="font-bold text-black hover:text-blue hover:cursor-pointer">
                    Angela Gray
                  </span>{" "}
                  followed you{" "}
                  <span className="p-[2px] border border-transparent rounded-full bg-red w-2 h-2 inline-block"></span>
                </p>
              </div>
            </div>

            <div className="text-jakarta text-gray-400 lg:text-[15px] sm:text-[11px]">
              5m ago
            </div>
          </div>
        </div>
      </div>
      <div className="lg:mx-8 lg:my-1 sm:mx-4 sm:my-1">
        <div
          className={
            allRead === true
              ? "flex items-center border rounded-lg border-transparent bg-white p-2"
              : "flex items-center border rounded-lg border-transparent bg-veryLightGrayishBlue p-2"
          }
        >
          <div className="">
            <img
              src={require("../assets/images/avatar-jacob-thompson.webp")}
              alt="mark"
              className="lg:w-[80px] sm:w-[60px]"
            />
          </div>
          <div className="flex flex-col text-left justify-center ml-4">
            <div className="text-jakarta text-gray-400 lg:text-[15px] sm:text-[10px] flex flex-row">
              <div className="flex items-center">
                <p className="lg:mr-2">
                  <span className="font-bold text-black hover:text-blue hover:cursor-pointer">
                    Jacob Thompson
                  </span>{" "}
                  has joined your group{" "}
                  <span className="text-gray-500 font-bold hover:text-blue hover:cursor-pointer">
                    Chess Club
                  </span>{" "}
                  <span className="p-[2px] border border-transparent rounded-full bg-red w-2 h-2 inline-block"></span>
                </p>
              </div>
            </div>

            <div className="text-jakarta text-gray-400 lg:text-[15px] sm:text-[11px]">
              1 day ago
            </div>
          </div>
        </div>
      </div>
      <div className="lg:mx-8 lg:my-1 sm:mx-4 sm:my-1">
        <div className="flex items-center border rounded-lg border-transparent bg-white p-2">
          <div className="self-start">
            <img
              src={require("../assets/images/avatar-rizky-hasanuddin.webp")}
              alt="mark"
              className="lg:w-[145px] sm:w-[190px]"
            />
          </div>
          <div className="flex flex-col text-left justify-center ml-4">
            <div className="text-jakarta text-gray-400 lg:text-[15px] sm:text-[10px] flex flex-row">
              <div className="flex items-center">
                <p className="lg:mr-2">
                  <span className="font-bold text-black hover:text-blue hover:cursor-pointer">
                    Rizky Hasanuddin
                  </span>{" "}
                  sent you a private message
                </p>
              </div>
            </div>
            <div className="text-jakarta text-gray-400 lg:text-[15px] sm:text-[11px]">
              5 days ago
            </div>
            <div className="mt-2">
              <p className="text-left text-jakarta lg:text-[17px] sm:text-[11px] border rounded-md p-2 text-grayishBlue">
                Hello, thanks for setting up the Chess Club. I've been a member
                for a few weeks now and I'm already having lots of fun and
                improving my game.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:mx-8 lg:my-1 sm:mx-4 sm:my-1">
        <div className="flex items-center border rounded-lg border-transparent bg-white p-2">
          <div className="">
            <img
              src={require("../assets/images/avatar-kimberly-smith.webp")}
              alt="mark"
              className="lg:w-[70px] sm:w-[60px]"
            />
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col text-left justify-center ml-4 sm:mr-3">
              <div className="text-jakarta text-gray-400 lg:text-[15px] sm:text-[10px] flex flex-row">
                <div className="flex items-center">
                  <p className="lg:mr-2">
                    <span className="font-bold text-black hover:text-blue hover:cursor-pointer">
                      Kimberly Smith
                    </span>{" "}
                    commented on your picture{" "}
                  </p>
                </div>
              </div>

              <div className="text-jakarta text-gray-400 lg:text-[15px] sm:text-[11px]">
                1 week ago
              </div>
            </div>
            <div className="flex items-center">
              <img
                src={require("../assets/images/image-chess.webp")}
                alt=""
                className="lg:w-[50px] sm:w-[40px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:mx-8 lg:my-1 sm:mx-4 sm:my-1">
        <div className="flex items-center border rounded-lg border-transparent bg-white p-2">
          <div className="">
            <img
              src={require("../assets/images/avatar-nathan-peterson.webp")}
              alt="mark"
              className="lg:w-[80px] sm:w-[120px]"
            />
          </div>
          <div className="flex flex-col text-left justify-center ml-4">
            <div className="text-jakarta text-gray-400 lg:text-[15px] sm:text-[10px] flex flex-row">
              <div className="flex items-center">
                <p className="lg:mr-2">
                  <span className="font-bold text-black hover:text-blue hover:cursor-pointer">
                    Nathan Peterson
                  </span>{" "}
                  reacted to your recent post {"  "}
                  <span className="text-gray-500 font-bold hover:text-blue hover:cursor-pointer">
                    5 end-game strategies to increase your win rate
                  </span>
                </p>
              </div>
            </div>

            <div className="text-jakarta text-gray-400 lg:text-[15px] sm:text-[11px]">
              2 weeks ago
            </div>
          </div>
        </div>
      </div>
      <div className="lg:mx-8 lg:my-1 sm:mx-4 sm:my-1">
        <div className="flex items-center border rounded-lg border-transparent bg-white p-2">
          <div className="">
            <img
              src={require("../assets/images/avatar-anna-kim.webp")}
              alt="mark"
              className="lg:w-[60px] sm:w-[50px]"
            />
          </div>
          <div className="flex flex-col text-left justify-center ml-4">
            <div className="text-jakarta text-gray-400 lg:text-[15px] sm:text-[10px] flex flex-row">
              <div className="flex items-center">
                <p className="lg:mr-2">
                  <span className="font-bold text-black hover:text-blue hover:cursor-pointer">
                    Anna Kim
                  </span>{" "}
                  left the group{" "}
                  <span className="text-gray-500 font-bold hover:text-blue hover:cursor-pointer">
                    Chess Club
                  </span>{" "}
                </p>
              </div>
            </div>

            <div className="text-jakarta text-gray-400 lg:text-[15px] sm:text-[11px]">
              2 weeks ago
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
