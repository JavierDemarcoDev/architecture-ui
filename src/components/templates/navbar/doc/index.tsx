import React from "react";

import { NavbarLayout, NavbarLinks } from "..";

const Link = ({ label }: { label: string }) => (
  <p className="px-4 py-2">{label}</p>
);

export const NavbarExample = () => {
  return (
    <NavbarLayout
      container={{
        className:
          "w-full px-[50px] py-2 shadow hover:shadow-lg transition-shadow flex justify-center flex-row",
      }}
      menu={{
        logo: {
          img: {
            src: "https://scontent.faep9-1.fna.fbcdn.net/v/t39.30808-6/326199203_853842605872148_2610728013556829022_n.png?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=xphlF6OxhAQQ7kNvgF9t3mC&_nc_ht=scontent.faep9-1.fna&oh=00_AYCjns1p0-hYguvsIscPE3S3YPyWLe1h87gZYewMTG6ZiQ&oe=665EFB6C",
            width: 95,
            height: 86,
          },
        },
      }}
    >
      <NavbarLinks
        container={{
          className: "p-2 rounded border flex flex-row w-full",
        }}
        links={[
          {
            navLink: {
              link: {
                href: "/home",
              },
              children: <Link label="HOME" />,
            },
          },
          {
            trigger: {
              props: {
                children: <Link label="CLASSES" />,
              },
              contentList: classesContentList,
            },
          },
          {
            trigger: {
              props: {
                children: <Link label="RESOURCES" />,
              },
              contentList: resourcesContentList,
            },
          },
          {
            trigger: {
              props: {
                children: <Link label="COMMUNITY" />,
              },
              contentList: communityContentList,
            },
          },
        ]}
      />
    </NavbarLayout>
  );
};

const classesContentList = [
  {
    title: "Private Lessons",
    href: "/classes/private-lessons",
    description: "Information about one-on-one classes and how to book them.",
  },
  {
    title: "Group Lessons",
    href: "/classes/group-lessons",
    description: "Information about group classes and how to book them.",
  },
  {
    title: "Schedule Classes",
    href: "/classes/schedule-classes",
    description: "Booking system to schedule classes.",
  },
];

const resourcesContentList = [
  {
    title: "Educational Resources",
    href: "/resources/educational-resources",
    description:
      "Study materials like PDFs, videos, and interactive exercises.",
  },
  {
    title: "Library",
    href: "/resources/library",
    description: "Access to articles, e-books, and other readings.",
  },
  {
    title: "Blog/News",
    href: "/resources/blogs-news",
    description:
      "Recent articles, news, and updates related to the platform and learning English.",
  },
];

const communityContentList = [
  {
    title: "Student Forum",
    href: "/community/student-forum",
    description: "Space for students to interact and help each other.",
  },
  {
    title: "Study Groups",
    href: "/community/study-group",
    description: "Organization of groups to study together.",
  },
  {
    title: "Testimonials",
    href: "/community/testimonials",
    description: "Comments and experiences from current or former students.",
  },
];
