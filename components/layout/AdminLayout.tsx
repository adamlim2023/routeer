import React, { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  children: React.ReactNode;
}

const AdminLayout: FC<Props> = (props) => {
  const router = useRouter();
  const adminRoutes = [
    {
      icon: "/images/icons/transport_provider.svg",
      link: "/admin/bulk",
    },
    {
      icon: "/images/icons/road.svg",
      link: "/admin/route",
    },
    {
      icon: "/images/icons/user.svg",
      link: "/admin/user",
    },
  ];

  return (
    <div className="flex bg-[#FAFAFA]">
      <div className="fixed top-0 left-0 w-[60px] h-screen bg-white flex flex-col items-center py-10">
        <img src="/images/icons/admin_logo.svg" className="mb-10" />
        <ul className="flex flex-col items-center">
          {adminRoutes.map((route, index) => {
            return (
              <li
                className={`mb-10 cursor-pointer ${
                  router.pathname === route.link
                    ? `pb-2 border-b-2 border-hotpink`
                    : `opacity-50`
                }`}
                key={index}
              >
                <Link href={route.link}>
                  <img src={route.icon} alt="" />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-full pl-[60px]">{props.children}</div>
    </div>
  );
};

export default AdminLayout;
