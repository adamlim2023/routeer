import React from "react";
import MainLayout from "components/layout/MainLayuout";
import SearchForm from "features/blog/SearchFrom";
import { Col, Row } from "components/common/Grid";
import PostCard from "features/blog/PostCard";
import BlogCard from "features/blog/BlogCard";

const Blog = () => {
  const mainPost = {
    size: "large",
    avatar: "/images/pages/blog/post/1.png",
    writer: {
      name: "Writer name",
      avatar: "/images/icons/user_cyanblue.svg",
    },
    title: "Title - Travellers' Choice the best  amusement parks",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat sed do eiusmod tem.",
  };

  const topPosts = [
    {
      avatar: "/images/pages/blog/post/2.png",
      writer: {
        name: "Writer name",
        avatar: "/images/icons/user_cyanblue.svg",
      },
      title: "Title - Travellers' Choice the best  amusement parks",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat sed do eiusmod tem.",
    },
    {
      avatar: "/images/pages/blog/post/3.png",
      writer: {
        name: "Writer name",
        avatar: "/images/icons/user_cyanblue.svg",
      },
      title: "Title - Travellers' Choice the best  amusement parks",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat sed do eiusmod tem.",
    },
    {
      avatar: "/images/pages/blog/post/4.png",
      writer: {
        name: "Writer name",
        avatar: "/images/icons/user_cyanblue.svg",
      },
      title: "Title - Travellers' Choice the best  amusement parks",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat sed do eiusmod tem.",
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
        <div className="pt-14 tablet:pt-[78px] desktop:pt-[135px]">
          <div className="desktop:px-[110px] flex flex-col items-center mb-9 tablet:mb-10 desktop:mb-20">
            <p className="text-[40px] tablet:text-[64px] font-bold text-hotpink mb-4 tablet:mb-5 desktop:mb-8 text-center tracking-[-1px]">
              OUR STORIES
            </p>
            <p className="text-2xl text-cyanblue mb-6 tablet:mb-2.5 desktop:mb-16 text-center">
              We like sharing our stories with you, read them over here
            </p>
            <SearchForm />
          </div>
          <div className="mb-10 desktop:mb-[60px]">
            <p className="text-2xl text-hotpink font-bold mb-5 tracking-[-1px]">
              TOP POSTS
            </p>
            <Row className="-mx-4">
              <Col
                size={["full", "full", "7/12"]}
                className="px-4 mb-5 desktop:mb-0 pb-0 desktop:pb-4"
              >
                <PostCard {...mainPost} />
              </Col>
              <Col size={["full", "full", "5/12"]} className="px-4">
                {topPosts.map((post, index) => {
                  return (
                    <div key={index} className="mb-5 desktop:mb-4">
                      <PostCard {...post} />
                    </div>
                  );
                })}
              </Col>
            </Row>
          </div>
          {Array.from(Array(3).keys()).map((index) => {
            return (
              <div className="pb-10 desktop:pb-[60px]" key={index}>
                <div className="h-0.5 bg-cyanblue mx-16 desktop:mx-[110px] mb-[60px] desktop:mb-20"></div>
                <p className="text-2xl desktop:text-[40px] font-bold text-hotpink mb-[30px] desktop:mb-10 text-center tracking-[-1px]">
                  Category {index + 1}
                </p>
                <div className="flex flex-wrap -mx-2 desktop:-mx-4">
                  <div className="w-full tablet:w-1/2 desktop:w-1/3 px-2 desktop:px-4">
                    <BlogCard
                      name="Title - Travellers' Choice the best  amusement parks"
                      photo="/images/pages/blog/blog/1.png"
                    />
                    <BlogCard
                      name="Title - Travellers' Choice the best  amusement parks"
                      photo="/images/pages/blog/blog/2.png"
                    />
                  </div>
                  <div className="w-full tablet:w-1/2 desktop:w-1/3 px-2 desktop:px-4">
                    <BlogCard
                      name="Title - Travellers' Choice the best  amusement parks"
                      photo="/images/pages/blog/blog/3.png"
                    />
                    <BlogCard
                      name="Title - Travellers' Choice the best  amusement parks"
                      photo="/images/pages/blog/blog/4.png"
                    />
                  </div>
                  <div className="w-full desktop:w-1/3 px-2 desktop:px-4">
                    <div className=" flex flex-col tablet:flex-row desktop:flex-col -mx-2 desktop:-mx-4">
                      <div className="w-full tablet:w-1/2 desktop:w-full px-2 desktop:px-4">
                        <BlogCard
                          name="Title - Travellers' Choice the best  amusement parks"
                          photo="/images/pages/blog/blog/5.png"
                        />
                      </div>
                      <div className="w-full tablet:w-1/2 desktop:w-full px-2 desktop:px-4">
                        <BlogCard
                          name="Title - Travellers' Choice the best  amusement parks"
                          photo="/images/pages/blog/blog/6.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
};

export default Blog;
