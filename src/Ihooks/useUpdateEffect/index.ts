import { DependencyList, useEffect, useRef } from 'react';

function useUpdateEffect(fn: () => void, deps?: DependencyList) {
  const updateRef = useRef(false);

  useEffect(() => {
    if (updateRef.current) {
      fn();
    }

    return () => {
      updateRef.current = true;
    };
  }, [deps]);
}

export default useUpdateEffect;
