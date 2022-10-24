import React from "react";
import Marquee from "react-fast-marquee";
import { useSelector } from "react-redux";

const Fslide = () => {
    const { Fslide } = useSelector(state => state)
    return (
        <section className="Fslide">
            <Marquee>
                {
                    Fslide.map(it=> {
                        return(
                            <img src={process.env.PUBLIC_URL + it.src}></img>
                        )
                    })
                }
            </Marquee>
        </section>
    );
};

export default Fslide;
