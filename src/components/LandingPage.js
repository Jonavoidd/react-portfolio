import React from "react";
import userData from "../layout/myData.js"

const Land = () => {
    return (
        <section className={"h-full"}>
            <div className={" flex md:flex-row flex-col-reverse justify-between"}>
                <div className={"md:float-left md:pt-56 md:pb-0 pt-12 pb-36 md:ml-64 items-center"}>
                    <div className={"flex flex-col"}>
                        <h1 className={"text-3xl"}>Hi! I'm <span className={"font-bold"}>Kurt</span></h1>
                    </div>

                    <p className={"text-xl"}>
                        <br/><br/>a 19 year old <span className={"font-bold"}>software engineer</span> <br/>
                        based in <span className={"font-bold"}>Cebu City, Cebu, Philippines</span>
                    </p>

                </div>
                <div className={"md:float-left md:p-12 p-8 md:pr-44 rounded-2xl"}>
                    <img src={userData.avatarUrlTwo} alt={"dev"} className={"dev-image rounded-3xl object-cover"}/>
                </div>
            </div>
        </section>
    )
}

export default Land;