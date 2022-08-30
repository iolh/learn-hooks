import { useCallback, useState } from 'react';

export interface Actions {
  setTrue: () => void;
  setFalse: () => void;
  set: (value: boolean) => void;
  toggle: () => void;
}

function useBoolean(initialState: boolean): [boolean, Actions] {
  const [bool, set] = useState(initialState);

  const toggle = useCallback(() => {
    set((bool) => !bool);
  }, []);

  const setTrue = useCallback(() => {
    set(true);
  }, []);

  const setFalse = useCallback(() => {
    set(false);
  }, []);

  return [
    bool,
    {
      toggle,
      set,
      setTrue,
      setFalse,
    },
  ];
}

export default useBoolean;
