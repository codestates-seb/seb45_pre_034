"use client";

import styles from "@component/common/SortHandler.module.css";

/**
 * 리스트 정렬 기준을 선택하기 위한 SortHandler
 * recoil을 사용하여 선택된 아이템을 관리
 * @param {Array<string>} btnNameArr 정렬 기준 string 배열
 * @param {"md" | "sm" | undefined} size 버튼 사이즈
 * @param {string} selectedItem 선택된 아이템
 * @param {(v: string) => void} setSelectedItem 선택된 아이템 바꾸는 함수
 */
function SortHandler({ btnNameArr, size = "md", selectedItem, setSelectedItem }) {
    const handleOnClick = (el) => {
        if (setSelectedItem) {
            setSelectedItem(el);
        }
    };

    return (
        <>
            <div className={styles.container}>
                {btnNameArr
                    ? btnNameArr.map((el, idx) => {
                          return (
                              <button
                                  className={`${selectedItem === el && styles.selected}
                                                ${size === "sm" && styles.mini}
                                                ${styles.btn}`}
                                  key={idx}
                                  onClick={() => handleOnClick(el)}
                              >
                                  {el}
                              </button>
                          );
                      })
                    : null}
            </div>
        </>
    );
}

export default SortHandler;
