import { useEffect } from 'react';

function useMount(fn: () => void) {
  return useEffect(() => {
    fn?.();
  }, []); // // useEffect 第一个参数的类型是 () => void
  // return useEffect(fn, []); 思考下为什么这种写法存在问题？
  // 用户定位错误会定位到react内部去
}

export default useMount;
