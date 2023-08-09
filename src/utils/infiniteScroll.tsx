import { Dispatch, SetStateAction } from "react";
/**
 *
 * @param {el} container - ref element
 * @param {number} page - 현재 페이지
 * @param {function} setPage - 현재 페이지 변경 함수
 * @param {number} offset - 무한 스크롤 offset(기본값 0)
 * @description - 무한 스크롤
 */

//set type for infiniteScroll
export type infiniteScrollType = (
  el: HTMLDivElement,
  page: number,
  setPage: Dispatch<SetStateAction<number>>,
  offset?: number
) => void;

const infiniteScroll: infiniteScrollType = (el, page, setPage, offset = 0) => {
  if (el && el.scrollWidth - el.scrollLeft <= el.clientWidth + offset) {
    setPage(page + 1);
  }
};

export default infiniteScroll;
