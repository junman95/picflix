/**
 *
 * @param {function} callback - 실행할 함수
 * @param {number} delay - 지연시간
 * @returns
 */

const setThrottle = (callback: () => void, delay: number) => {
  let throttle: ReturnType<typeof setTimeout> | null;
  return (...args: unknown[]) => {
    if (throttle) return;
    throttle = setTimeout(() => {
      callback(...(args as Parameters<typeof callback>));
      throttle = null;
    }, delay);
  };
};

export default setThrottle;
