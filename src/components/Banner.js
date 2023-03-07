import React from "react";
import "./Banner.css";


function Banner({bannertitle}){
    return (
        <header className="Banner">
            <img src='/projImages/primevideoLogo.png' />
            <img src='/projImages/hbomaxLogo.webp' />
            <h1>{bannertitle}</h1>
            <img src='/projImages/disneyplus.jpg' />
            <img src='/projImages/netflixLogo.webp' />
        </header>
    )
}


export default Banner;