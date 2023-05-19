import React from "react";
import userData from "../layout/myData";

const Resume = () => {
    return (
        <section classname={"h-screen"}>
            <div className={"w-full flex flex-col items-center mt-12"}>
                <img className="w-56 h-56 rounded-full object-cover" src={userData.avatarUrl} alt="Rounded avatar"/>
                <h1  className={"my-4"}>
                    Kurt Jonathan L. Gozano
                </h1>
                <h1 className={"-mt-2"}>
                    Software Engineer
                </h1>
            </div>
            <div className={"mt-12"}>
                <div className={"flex flex-col items-start md:flex-row md:columns-4 p-4"}>
                    <div className={"items-start text-start"}>
                        <h1 className={"font-bold ml-6 md:ml-52 text-2xl md:text-3xl"}>
                            EDUCATION
                        </h1>
                        <h1 className={"my-1 font-bold ml-6 md:ml-52 text-1xl md:text-2xl text-start"}>
                            Southwestern University PHINMA
                        </h1>
                        <h1 className={"ml-[1.47rem] md:ml-52 text-[14px] text-start"}>
                            Bachelor of Science in Information Technology
                        </h1>

                        <br />
                        <br />

                        <h1 className={"my-1 font-bold ml-6 md:ml-52 text-1xl md:text-2xl"}>
                            BIT International College
                        </h1>
                        <h1 className={"ml-[1.47rem] md:ml-52 text-[14px] text-start"}>
                            Science, Technology, Engineering and Mathematics (STEM)
                        </h1>

                        <br />
                        <br />

                        <h1 className={"font-bold ml-6 md:ml-52 text-2xl md:text-3xl"}>
                            SKILLS
                        </h1>
                        <h1 className={"ml-[1.47rem] md:ml-52 text-[14px] text-start"}>
                            • Leadership <br />
                            • Adaptable <br />
                            • Learner <br />
                            • Team Player <br />
                            • Coding <br />
                            • Designing
                        </h1>
                    </div>

                    <br />
                    <br />

                    <div className={"items-start text-start md:flex md:flex-col-reverse"}>
                        <div>
                            <h1 className={"font-bold ml-6 md:ml-52 md:mt-[6.5rem] text-2xl md:text-3xl"}>
                                TOOLS
                            </h1>
                            <h1 className={"ml-[1.47rem] md:ml-52 text-[14px] text-start"}>
                                • Java <br />
                                • Python <br />
                                • React JS <br />
                                • Tailwind CSS <br />
                                • JavaScript <br />
                                • HTML 5 <br />
                                • CSS 3 <br />
                                • Figma
                            </h1>
                        </div>

                        <br />
                        <br />

                        <div>
                            <h1 className={"font-bold ml-6 md:ml-52 text-2xl md:text-3xl"}>
                                ACHIEVEMENTS
                            </h1>
                            <h1 className={"ml-[1.47rem] md:ml-52 text-[14px] text-start"}>
                                • Attended coding workshops <br />
                                • Volunteered to multiple start up events <br />
                                • Created a few programs with Programming
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume;