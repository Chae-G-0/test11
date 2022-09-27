import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const SLIDE = [
    {id:1, des:"광안대교"},
    {id:2, des:"오륙도"},
    {id:3, des:"마린시티"},
    {id:4, des:"감천문화마을"},
    {id:5, des:"다대포"},
]

const MainVisual = () => {
    const setting = {
        arrows: false,
        autoplay: 1,
    }
  return (
    <section className='MainVisual'>
        <Slider {...setting}>
            {
                SLIDE.map((sl, idx)=>{
                    return (
                        <figure key={sl.id} className={"item0" + sl.id}></figure>
                    )
                })
            }
        </Slider>
    </section>
  )
}

export default MainVisual