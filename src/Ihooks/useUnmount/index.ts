import { useLatest } from 'ahooks';
import { useEffect } from 'react';

function useUnmount(fn: () => void) {
  // 确保传入的effect函数拿到最新的值
  const fnRef = useLatest(fn);

  // useEffect 第一个参数的类型是 () => cleanup，cleanup 函数的类型是 () => void
  return useEffect(
    () => () => {
      fnRef.current();
    },
    []
  );
}

export default useUnmount;
