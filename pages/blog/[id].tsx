import React from "react";
import MainLayout from "components/layout/MainLayuout";
import Button from "components/common/Button";
import Card from "components/common/Card";
import BlogCard from "features/blog/BlogCard";

const BlogDetail = () => {
  const blogs = [
    {
      name: "Title - Travellers' Choice the best  amusement parks",
      photo: "/images/pages/blog/detail/sm_1.png",
    },
    {
      name: "Title - Travellers' Choice the best  amusement parks",
      photo: "/images/pages/blog/detail/sm_2.png",
    },
    {
      name: "Title - Travellers' Choice the best  amusement parks",
      photo: "/images/pages/blog/detail/sm_3.png",
    },
  ];

  return (
    <MainLayout>
      <img
        src="/images/pages/about/location.svg"
        className="w-1/2 tablet:w-5/12 absolute top-[65px] left-0 filter brightness-0 invert"
        alt=""
      />
      <div className="max-w-[1440px] mx-auto pt-[65px] px-4 tablet:px-16 relative">
        <div className="pt-[68px] tablet:pt-[89px] desktop:pt-12 pb-24 tablet:pb-[70px] desktop:pb-20">
          <div className="flex flex-wrap items-center mb-[30px] tablet:mb-10 desktop:mb-14">
            <div className="w-full desktop:w-1/2 mb-[50px] tablet:mb-10 desktop:mb-0">
              <p className="text-2xl tablet:text-[40px] mb-5 tablet:mb-7 desktop:mb-10 text-hotpink font-bold tracking-[-1px]">
                Title - Travellers' Choice the best amusement parks
              </p>
              <div className="flex items-center">
                <div className="w-5 h-5 tablet:w-[45px] tablet:h-[45px] mr-2.5 tablet:mr-5 rounded-full shadow-theme bg-gradient-to-r from-[#DEDEDE] to-[#F2F2F200] bg-[#FAFAFA] p-0.5 tablet:p-1 flex justify-center">
                  <img
                    src="/images/icons/user_cyanblue.svg"
                    className="h-full"
                    alt=""
                  />
                </div>
                <p className="text-base font-bold text-cyanblue">Writer name</p>
              </div>
            </div>
            <div className="w-full desktop:w-1/2">
              <Card className="overflow-hidden">
                <img
                  src="/images/pages/blog/detail/1.png"
                  className="w-full"
                  alt=""
                />
              </Card>
            </div>
          </div>
          <div className="desktop:px-56">
            <div className="relative flex flex-col tablet:flex-row-reverse">
              <div className="w-full flex flex-col items-center">
                <p className="text-base mb-[30px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                  <br />
                  <br />
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                  iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur?
                </p>
                <Card className="overflow-hidden mb-[30px] max-w-full w-auto">
                  <img src="/images/pages/blog/detail/2.png" alt="" />
                </Card>
                <p className="text-2xl text-cyanblue mb-3 self-start">
                  This is a subtitle on the blog post
                </p>
                <p className="text-base mb-[30px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                  <br />
                  <br />
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                  iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur?
                </p>
                <Card className="overflow-hidden mb-[30px] max-w-full w-auto">
                  <img src="/images/pages/blog/detail/3.png" alt="" />
                </Card>
                <p className="text-base mb-[30px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                  <br />
                  <br />
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                  iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur?
                </p>
                <div className="flex flex-wrap mb-9 tablet:mb-7 desktop:mb-20">
                  {Array.from(Array(8).keys()).map((index) => {
                    return (
                      <span
                        key={index}
                        className="flex justify-center items-center h-6 tablet:h-[38px] px-3 tablet:px-5 rounded-[20px] bg-cyanblue text-white text-sm tablet:text-base tablet:font-bold uppercase mb-4 tablet:mb-3 mr-6 tablet:mr-3 desktop:mr-5"
                      >
                        #tagtext
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className="mb-[50px] desktop:top-0 desktop:-left-10 desktop:transform desktop:-translate-x-full tablet:pr-3 desktop:pr-0">
                <div className="flex flex-row tablet:flex-col items-center sticky top-20">
                  <span className="text-base tablet:text-[18px] font-bold text-hotpink mr-8 tablet:mr-0 tablet:mb-6">
                    Share
                  </span>
                  <ul className="p-0 m-0 flex flex-row tablet:flex-col items-center">
                    <li className="mr-8 tablet:mr-0 tablet:mb-6">
                      <a href="https://facebook.com">
                        <img src="/images/icons/facebook_hotpink.svg" alt="" />
                      </a>
                    </li>
                    <li className="mr-8 tablet:mr-0 tablet:mb-6">
                      <a href="https://instagram.com">
                        <img src="/images/icons/instagram_hotpink.svg" alt="" />
                      </a>
                    </li>
                    <li className="mr-8 tablet:mr-0 tablet:mb-6">
                      <a href="https://twitter.com">
                        <img src="/images/icons/twitter_hotpink.svg" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center mb-[50px] tablet:mb-[60px] desktop:mb-[90px]">
            <img
              src="/images/pages/blog/detail/group.png"
              className="mb-5"
              alt=""
            />
            <p className="text-2xl destkop:text-[40px] font-bold text-darkgray mb-5 tracking-[-1px]">
              It’s your turn to start exploring
            </p>
            <Button variant="danger">find your route</Button>
          </div>
          <div>
            <p className="text-2xl font-bold text-hotpink mb-3 tablet:mb-[18px] desktop:mb-8 tracking-[-1px]">
              More stories
            </p>
            <div className="flex flex-wrap tablet:-mx-2 desktop:-mx-4">
              {blogs.map((blog, index) => {
                return (
                  <div
                    key={index}
                    className="w-full tablet:w-1/2 desktop:w-1/3 tablet:px-2 desktop:px-4"
                  >
                    <BlogCard {...blog} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BlogDetail;
