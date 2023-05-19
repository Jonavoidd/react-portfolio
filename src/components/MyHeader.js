import { Helmet } from "react-helmet";
import React from "react";

const myHeader = () => {
    return (
        <Helmet>
            <title>Kurt's Portfolio</title>
            <meta name="description" content="my portfolio"/>
        </Helmet>
    )

}

export default myHeader;