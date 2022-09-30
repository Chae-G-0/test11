import React, { useEffect, useState } from "react";

const FLINK = [
    { id: 0, name: "Family Link", link: "/" },
    { id: 1, name: "부산시티투어", link: "http://citytourbusan.com/ko/00main/main.php" },
    { id: 2, name: "부산컨벤션뷰로", link: "https://bto.or.kr/cvb/Main.do" },
    { id: 3, name: "VISIT BUSAN", link: "https://www.visitbusan.net/kr/index.do" },
];

const FamilyLink = () => {
    const [flnk, setFlnk] = useState();

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
