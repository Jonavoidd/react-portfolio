import React from "react";
import userData from "../layout/myData.js"

const Land = () => {
    return (
        <section className={"h-full"}>
            <div className={" flex lg:flex-row flex-col-reverse justify-between"}>
                <div className={"lg:float-left lg:pt-56 lg:pb-0 pt-12 pb-36 lg:ml-64 justify-center items-center"}>
                    <div className={"flex flex-col"}>
                        <h1 className={"text-3xl"}>Hi! I'm <span className={"font-bold"}>Kurt</span></h1>
                    </div>

                    <p className={"text-xl"}>
                        <br/><br/>a 19 year old <span className={"font-bold"}>software engineer</span> <br/>
                        based in <span className={"font-bold"}>Cebu City, Cebu, Philippines</span>
                    </p>

                </div>
                <div className={"p-8 lg:float-left lg:p-12 lg:pr-44 rounded-2xl flex justify-center items-center"}>
                    <img src={userData.avatarUrlTwo} alt={"dev"} className={"dev-image rounded-3xl object-cover"}/>
                </div>
            </div>
        </section>
    )
}

export default Land;