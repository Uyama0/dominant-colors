import { useEffect, useReducer, useRef } from "react";
import { useDispatch } from "react-redux";
import { setData, setError } from "@/redux/slices/mailSlice";

interface State<T> {
  data?: T;
  error?: Error;
}

type Cache<T> = { [url: string]: T };

type Action<T> =
  | { type: "loading" }
  | { type: "fetched"; payload: T }
  | { type: "error"; payload: Error };

export function useFetch<T = unknown>(
  url?: string,
  options?: RequestInit
): State<T> {
  const cache = useRef<Cache<T>>({});
  const cancelRequest = useRef<boolean>(false);
  const dispatch = useDispatch(); // Получение функции dispatch из react-redux

  const initialState: State<T> = {
    error: undefined,
    data: undefined,
  };

  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case "loading":
        return { ...initialState };
      case "fetched":
        return { ...initialState, data: action.payload };
      case "error":
        return { ...initialState, error: action.payload };
      default:
        return state;
    }
  };

  const [state, localDispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    if (!url) return;

    cancelRequest.current = false;

    const fetchData = async () => {
      localDispatch({ type: "loading" });

      if (cache.current[url]) {
        localDispatch({ type: "fetched", payload: cache.current[url] });
        return;
      }

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = (await response.json()) as T;
        cache.current[url] = data;
        if (cancelRequest.current) return;

        // Диспетчеризация данных в store
        dispatch(setData(data));
        localDispatch({ type: "fetched", payload: data });
      } catch (error) {
        if (cancelRequest.current) return;

        // Диспетчеризация ошибки в store
        dispatch(setError(error as Error));
        localDispatch({ type: "error", payload: error as Error });
      }
    };

    void fetchData();

    return () => {
      cancelRequest.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, dispatch]);

  return state;
}
