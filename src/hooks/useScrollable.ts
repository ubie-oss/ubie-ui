import debounce from 'debounce';
import { useCallback, useState } from 'react';

export const useScrollable = () => {
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(false);

  let abrotController: AbortController | null = null;

  const checkScrollable = (element: HTMLDivElement) => {
    const { top, bottom } = element.getBoundingClientRect();
    const { top: contentTop, bottom: contentBottom } = element.children[0].getBoundingClientRect();

    // On some Android devices, the decimal point in the number causes the judgment to be incorrect.
    setCanScrollUp(Math.floor(contentTop) < Math.floor(top));
    setCanScrollDown(Math.floor(contentBottom) > Math.floor(bottom));
  };

  const handleEvent = (element: HTMLDivElement) => () => {
    checkScrollable(element);
  };

  const setContainer = (element: HTMLDivElement) => {
    if (!abrotController) return;

    element.addEventListener('scroll', debounce(handleEvent(element), 25), {
      signal: abrotController.signal,
      passive: true,
    });

    window.addEventListener('resize', debounce(handleEvent(element), 50), {
      signal: abrotController.signal,
      passive: true,
    });

    setTimeout(() => {
      checkScrollable(element);
    }, 10);
  };

  const unSetContainer = () => {
    abrotController?.abort();
    abrotController = null;
  };

  const scrollContainerRef = useCallback((node: HTMLDivElement | null) => {
    if (node === null) {
      unSetContainer();
      return;
    }

    abrotController = new AbortController();
    setContainer(node);
  }, []);

  return { scrollContainerRef, canScrollUp, canScrollDown };
};
