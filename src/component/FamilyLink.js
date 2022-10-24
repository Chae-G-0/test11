import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const FamilyLink = () => {
    const [flnk, setFlnk] = useState();
    const { FLINK } = useSelector(state => state)

    useEffect(() => {
        flnk && window.open(flnk);
    }, [flnk]);

    return (
        <select onChange={(e) => setFlnk(e.target.value)}>
            {FLINK.map((link) => {
                return (
                    <option value={link.link} key={link.id}>
                        {link.name}
                    </option>
                );
            })}
        </select>
    );
};

export default FamilyLink;
