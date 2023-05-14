import React from "react";
import "./card.css";

type Course = {
  banner: string;
  title: string;
  description: string;
  avatar: string;
  author: string;
};

const courses: Course[] = [
  {
    banner:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80",
    title: "Figma UI UX Design Essentials",
    description:
      "Use Figma to get a job in UI Design, User Interface, User Experience design, UX Design & Web Design",
    avatar:
      "https://images.unsplash.com/photo-1542309667-2a115d1f54c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
    author: "Afdolash",
  },
  {
    banner:
      "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    title: "Complete Web & Mobile Designer in 2023: UI/UX, Figma, +more",
    description:
      "Become a Designer in 2023! Master Mobile and Web Design, User Interface + User Experience (UI/UX Design), HTML, and CSS",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    author: "John Doe",
  },
  {
    banner:
      "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    title: "Complete Web & Mobile Designer in 2023: UI/UX, Figma, +more",
    description:
      "Become a Designer in 2023! Master Mobile and Web Design, User Interface + User Experience (UI/UX Design), HTML, and CSS",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    author: "John Doe",
  },
  {
    banner:
      "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    title: "Complete Web & Mobile Designer in 2023: UI/UX, Figma, +more",
    description:
      "Become a Designer in 2023! Master Mobile and Web Design, User Interface + User Experience (UI/UX Design), HTML, and CSS",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    author: "John Doe",
  },
  {
    banner:
      "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    title: "Complete Web & Mobile Designer in 2023: UI/UX, Figma, +more",
    description:
      "Become a Designer in 2023! Master Mobile and Web Design, User Interface + User Experience (UI/UX Design), HTML, and CSS",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    author: "John Doe",
  },
  {
    banner:
      "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    title: "Complete Web & Mobile Designer in 2023: UI/UX, Figma, +more",
    description:
      "Become a Designer in 2023! Master Mobile and Web Design, User Interface + User Experience (UI/UX Design), HTML, and CSS",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    author: "John Doe",
  },
  {
    banner:
      "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    title: "Complete Web & Mobile Designer in 2023: UI/UX, Figma, +more",
    description:
      "Become a Designer in 2023! Master Mobile and Web Design, User Interface + User Experience (UI/UX Design), HTML, and CSS",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    author: "John Doe",
  },
];

const Card = ({ banner, title, description, avatar, author }: Course) => {
  return (
    <div className="card">
      <img src={banner} alt={title} />
      <div className="detail">
        <div className="about">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="author">
          <img src={avatar} alt={author} />
          <p>{author}</p>
        </div>
      </div>
    </div>
  );
};

export const CardList = () => {
  return (
    <div className="container">
      {courses.map((item, index) => (
        <Card
          key={index}
          banner={item.banner}
          title={item.title}
          description={item.description}
          avatar={item.avatar}
          author={item.author}
        />
      ))}
    </div>
  );
};
