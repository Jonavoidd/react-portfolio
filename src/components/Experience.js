import React from "react";
import userData from "../layout/myData";
const Experience = () => {
    return (
        <section className={"dark:bg-black"}>
            <div classname={"max-w-6xl h-48"}>
                <h1 className={"md:text-8xl text-5xl relative md:-left-36 md:top-12 top-20"}>
                    Experience
                </h1>
            </div>
            <div className={"h-full md:mt-56 mt-64 flex flex-col-reverse justify-center items-center"}>
                {userData.experience.map((exp, idx) => (
                    <>
                        <MyCard
                            key={idx}
                            year={exp.year}
                            title={exp.title}
                            company={exp.company}
                            desc={exp.desc}
                        />
                    </>
                ))}
            </div>
        </section>
    )
}

const MyCard = ({ title, company, year, desc }) => {
    return (
        <div className="block md:w-1/2 p-6 my-24 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-300">
            <h1 className={"relative -top-20 md:right-56 text-5xl text-gray-600 dark:text-gray-600"}>
                {year}
            </h1>
            <h5 className="mb-2 -mt-8 text-2xl font-bold tracking-tight text-gray-900">
                {title}
            </h5>
            <p className="mb-8 font-2xl font-bold text-gray-700">
                {company}
            </p>
            <p className="font-xl text-gray-700">
                {desc}
            </p>
        </div>
    )
}
export default Experience;