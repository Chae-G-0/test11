import React from "react";
import { useSelector } from "react-redux";
import "../css/Mice.scss";

const Mice = () => {
    const { MICE } = useSelector((state) => state);

    return (
        <div className="Mice">
            <div className="inner">
                {MICE.map((mc) => {
                    return (
                        <figure key={mc.id}>
                            <img src={process.env.PUBLIC_URL + mc.src} alt="" />
                            <div className="des">{mc.des}</div>
                        </figure>
                    );
                })}
            </div>
        </div>
    );
};

export default Mice;
