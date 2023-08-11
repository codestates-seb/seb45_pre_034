import { useState, useEffect, useMemo } from "react";
import throttle from "lodash/throttle";

export function useScroll() {
    let beforeScrollY = 0;
    const [isScrollDown, setIsScrollDown] = useState(false);

    const scrollEvent = useMemo(
        () =>
            throttle(() => {
                const curScrollY = window.scrollY;
                if (curScrollY === 0) {
                    setIsScrollDown(false);
                } else if (curScrollY > beforeScrollY) {
                    setIsScrollDown(false);
                } else {
                    setIsScrollDown(true);
                }

                beforeScrollY = curScrollY;
            }, 300),
        [isScrollDown],
    );

    useEffect(() => {
        window.addEventListener("scroll", scrollEvent);

        return () => {
            window.removeEventListener("scroll", scrollEvent);
        };
    }, []);

    return { isScrollDown };
}
