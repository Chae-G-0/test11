import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

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
    const setting = {
        infinite: true,
        slidesToShow: 13,
        arrows: false,
        autoplay: 1,
        speed: 2000,
        autoplaySpeed: 2000,
        swipeToSlide: true,
    };

    return (
        <section className="Fslide">
            <Slider {...setting}>
                {FS.map((fs, idx) => {
                    return (
                        <figure key={fs.id}>
                            <img src={process.env.PUBLIC_URL + fs.src} alt="" />
                        </figure>
                    );
                })}
            </Slider>
        </section>
    );
};

export default Fslide;
