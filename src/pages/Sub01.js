import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../css/Subpage.scss";

const Sub01 = () => {
    const [IDX, setIDX] = useState(0);
    const { BM } = useSelector(state => state)
    return (
        <section className="Subpage">
            <div className="Sh01"></div>
            <ul>
                {BM.map((bm, idx) => {
                    return (
                        <li
                            key={bm.id}
                            onClick={() => {
                                setIDX(idx);
                            }}
                            className={IDX === idx ? "on" : ""}>
                            {bm.title}
                        </li>
                    );
                })}
            </ul>
            <div className="tab">
                <div className="inner">
                    <h2>{BM[IDX].title}</h2>
                    <p>{BM[IDX].des}</p>
                </div>
                {BM[IDX].tab}
            </div>
        </section>
    );
};

export default Sub01;
