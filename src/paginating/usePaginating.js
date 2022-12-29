import React, { useState } from "react";

const usePaginating = ({ limit, count }) => {
    const [page, setPage] = useState(1);

    const numberOfPage = Math.ceil(limit / count) || 1;

    const [firstArr, setFirstArr] = useState([]);
    const [lastArr, setLastArr] = useState([]);

    useEffect(() => {
        const newArr = [...Array(numberOfPage).fill(1)].map(
            (_, index) => index + 1
        );
        if (numberOfPage >= 4) {
            if (page + 2 <= numberOfPage - 1) {
                const arr = newArr.slice(page - 1, page + 2);
                setFirstArr(arr);
                const las = newArr.slice(numberOfPage - 1);
                setLastArr(las);
            } else {
                const arr = newArr.slice(numberOfPage - 4);
                setFirstArr(arr);
                setLastArr([]);
            }
        } else {
            setFirstArr(newArr);
            setLastArr([]);
        }
    }, [limit, count]);

    const prev = () => {
        return setPage(Math.max(page - 1, 1));
    };
    const next = () => {
        return setPage(Math.min(numberOfPage, page + 1));
    };

    const jump = (e) => {
        return setPage(e);
    };
    const activePage = (e) => {
        return e === page ? "active" : "";
    };

    return { prev, next, jump, page, setPage, firstArr, lastArr, activePage };
};

export default usePaginating;
