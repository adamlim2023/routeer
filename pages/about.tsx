import React from "react";
import MainLayout from "components/layout/MainLayuout";
import Card from "components/common/Card";

const About = () => {
  const members = [
    {
      name: "Adam Bradley",
      role: "CEO",
      avatar: "images/pages/about/user_1.png",
      variant: "light-hotpink",
    },
    {
      name: "Liam Neville",
      role: "CTO",
      avatar: null,
      description:
        "Leading the dev team, Liam is a full-stack-web developer with an impressive background of developing SPAs, APIs & component-based web apps for start-ups and corporates. Also a passionate adventurer, Liam can often be found with a beer in hand on a faraway beach when not glued to his screens (sometimes at the same time)!",
      variant: "cyanblue",
    },
    {
      name: "Tom Newman",
      role: "CMO",
      avatar: "images/pages/about/user_2.png",
      variant: "light-hotpink",
    },
    {
      name: "Catalina Hernandez",
      role: "UX/UI Designer",
      avatar: "images/pages/about/user_3.png",
      variant: "light-cyanblue",
    },
    {
      name: "Haitham Desouky",
      role: "Full Stack Web Developer",
      avatar: "images/pages/about/user_2.png",
      variant: "light-hotpink",
    },
  ];
  
  return (
    <MainLayout>
      <img
        src="/images/pages/about/location.svg"
        className="w-1/2 tablet:w-5/12 absolute top-[65px] left-0 filter brightness-0 invert"
        alt=""
      />
      <div className="max-w-[1440px] mx-auto pt-[65px] pb-[52px] px-4 tablet:px-16 relative">
        <div className="flex flex-wrap items-center pt-14 pb-5 tablet:pt-20 tablet:pb-8 desktop:py-10">
          <div className="w-full desktop:w-1/2">
            <div className="w-full tablet:w-7/12 desktop:w-full pr-[60px] tablet:pr-0 desktop:pr-48 mb-5 desktop:mb-0">
              <p className="text-[40px] tablet:text-[64px] text-hotpink font-bold mb-2.5 tablet:mb-5 desktop:mb-[60px]">
                ABOUT US
              </p>
              <p className="text-base tablet:text-xl desktop:text-2xl text-cyanblue leading-normal">
                Our team here at Routeer is made up of a variety of
                personalities, experiences, skills and backgrounds. But we all
                share a collective passion for travel and exploring this
                wonderful planet of ours.
              </p>
            </div>
          </div>
          <div className="w-full desktop:w-1/2 flex justify-end">
            <div className="w-5/6 desktop:w-full">
              <Card className="p-3 tablet:px-8 flex justify-center">
                <img src="/images/pages/about/card.png" />
              </Card>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center mb-10">
          <div className="w-full desktop:w-3/5 pr-0 desktop:pr-8 text-base text-darkgray mb-0 tablet:mb-10 desktop:mb-0">
            We understand first-hand the difficulties and frustrations of trying
            to find and choose the best transport options on your trips. You can
            spend hours trawling through forums, guidebooks or local websites
            trying to find the information you need on how to get from A to B,
            and it is often out of date or inaccurate due the publications or
            content being many years old.
            <br />
            <br />
            The idea for Routeer actually materialised when one of our founders
            became stuck on an island in Croatia after reading poor travel
            advice and not being able to find anything helpful online. In
            thinking that “enough was enough”, he soon realised that something
            had to be done! We then set out to make the process of travelling
            around as pain-free and seamless as possible, by having all the
            information you need in one easily accessible place and the ability
            to book your perfect journey from your fingertips!
          </div>
          <div className="w-full desktop:w-2/5 hidden tablet:flex justify-end">
            <Card className="w-2/3 desktop:w-full rounded-[20px] overflow-hidden">
              <img
                src="/images/pages/about/splash.png"
                className="w-full"
                alt=""
              />
            </Card>
          </div>
        </div>
        <div>
          <p className="text-[40px] font-bold text-hotpink text-center leading-none mb-11 tablet:mb-5 desktop:mb-11">
            Meet the team
          </p>
          <div className="flex flex-wrap items-stretch mx-0 tablet:-mx-2 desktop:-mx-4 mb-5 tablet:mb-0">
            {members.map((member, index) => {
              return (
                <div
                  className="w-full tablet:w-1/2 desktop:w-1/3 px-0 tablet:px-2 desktop:px-4 mb-5 tablet:mb-8 desktop:mb-11"
                  key={index}
                >
                  <Card variant={member.variant} className="mb-2 desktop:mb-5">
                    <div className="w-full h-[250px] desktop:h-[400px] flex justify-center pt-3">
                      {member.avatar ? (
                        <img
                          src={member.avatar}
                          className="h-full self-end object-cover"
                        />
                      ) : (
                        <p className="self-center px-7 tablet:px-6 desktop:px-12 text-center text-base text-white text-justify">
                          {member.description}
                        </p>
                      )}
                    </div>
                  </Card>
                  <p className="text-center text-hotpink text-2xl font-bold">
                    {member.name}
                  </p>
                  <p className="text-center text-hotpink text-xl">
                    {member.role}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col desktop:flex-row items-center">
          <div className="w-full desktop:w-5/12 mb-10 tablet:mb-5">
            <img src="/images/pages/about/bg.png" alt="" />
          </div>
          <div className="w-full desktop:w-7/12 px-0 desktop:px-[30px]">
            <p className="text-[40px] font-bold text-hotpink -tracking-[-1px] leading-none mb-6">
              A message from the founders
            </p>
            <div className="text-base leading-normal text-darkgray">
              The core value of Routeer is created through the input of our
              esteemed users. Please help us in growing theweb of valuable
              travel information by joining us and contributing your own useful
              route information.
              <br />
              <br />
              We don’t take your support for granted either – by helping us and
              other users with your valuable contributions, we will welcome you
              into our Routeer community, keeping track of your efforts in order
              to thank you through unique rewards.We fully believe that the
              travel industry will emerge from this global pandemic stronger
              than ever, with a global wanderlust hitting new heights.
              <br />
              <br />
              We just need to ensure that we adapt innovatively to the new
              demands and restrictions and help each other as much as possible
              too: which is the reason why we believe it is the perfect time to
              be launching Routeer to the world!We hope you enjoy our service as
              much as we enjoy building it.
              <br />
              <br />
              We’d love to hear from you too – so feel free to reach out and say
              hello, lend some support or tell us what you think:{" "}
              <span className="font-bold text-hotpink">
                hello@routeer.co.uk.
              </span>
              <br />
              <br />
              <p className="text-lg">
                Our best wishes and thanks,
                <br />
                The Routeer Team
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
