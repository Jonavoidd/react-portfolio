import React from "react";
import userData from "../layout/myData";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <section className={"dark:bg-black"}>
        <div className={"max-w-6xl h-48"}>
          <h1
            className={
              "md:text-8xl text-5xl relative md:-left-36 md:top-12 top-20"
            }
          >
            Projects
          </h1>
        </div>
        <div
          className={
            "h-full md:mt-56 mt-64 flex flex-col justify-center items-center"
          }
        >
          {userData.projects.map((proj, idx) => (
            <>
              <MyCard
                key={idx}
                bgImage={proj.bgImage}
                title={proj.title}
                url={proj.url}
              />
            </>
          ))}
        </div>
      </section>
    </>
  );
};

const MyCard = ({ title, bgImage, url }) => {
  return (
    <Link to={url} target="__blank" className={"justify-center items-center"}>
      <div
        className={
          "relative h-full block md:w-1/2 mt-12 bg-white rounded-lg shadow m-auto overflow-hidden"
        }
      >
        <img src={bgImage} alt="bg" className={"w-full h-full rounded-lg object-cover transform hover:scale-125 transition duration-1000 ease-out"} />
        
      </div>
      <h1
          className={
            "mb-12 justify-center text-xl font-bold text-black dark:text-white w-full text-center"
          }
        >
          {title}
        </h1>
    </Link>
  );
};

export default Projects;
