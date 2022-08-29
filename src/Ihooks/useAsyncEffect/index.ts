import { DependencyList, useEffect } from 'react';

function useAsyncEffect(fn: () => Promise<void>, deps?: DependencyList) {
  useEffect(() => {
    async function execute() {
      // 只考虑了普通的async函数，异步生成器呢？
      await fn();
    }

    execute();
  }, deps);
}

export default useAsyncEffect;
