import React from "react";
import Marquee from "react-fast-marquee";

const FS = [
    { id: 1, src: "/assets/images/fSlide01.gif", link: "#!" },
    { id: 2, src: "/assets/images/fSlide02.gif", link: "#!" },
    { id: 3, src: "/assets/images/fSlide03.gif", link: "#!" },
    { id: 4, src: "/assets/images/fSlide04.gif", link: "#!" },
    { id: 5, src: "/assets/images/fSlide05.gif", link: "#!" },
    { id: 6, src: "/assets/images/fSlide06.gif", link: "#!" },
    { id: 7, src: "/assets/images/fSlide07.gif", link: "#!" },
    { id: 8, src: "/assets/images/fSlide08.gif", link: "#!" },
    { id: 9, src: "/assets/images/fSlide09.gif", link: "#!" },
    { id: 10, src: "/assets/images/fSlide10.gif", link: "#!" },
    { id: 11, src: "/assets/images/fSlide11.gif", link: "#!" },
    { id: 12, src: "/assets/images/fSlide12.gif", link: "#!" },
    { id: 13, src: "/assets/images/fSlide13.gif", link: "#!" },
    { id: 14, src: "/assets/images/fSlide14.gif", link: "#!" },
    { id: 15, src: "/assets/images/fSlide15.gif", link: "#!" },
    { id: 16, src: "/assets/images/fSlide16.gif", link: "#!" },
    { id: 17, src: "/assets/images/fSlide17.gif", link: "#!" },
];

const Fslide = () => {

    return (
        <section className="Fslide">
            <Marquee>
                {
                    FS.map(it=> {
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
