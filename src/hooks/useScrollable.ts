import { MutableRefObject, useEffect, useState } from 'react';

export const useScrollable = ({
  containerRef,
  contentRef,
}: {
  containerRef: MutableRefObject<HTMLElement | null>;
  contentRef: MutableRefObject<HTMLElement | null>;
}) => {
  const [up, setUp] = useState(false);
  const [down, setDown] = useState(false);

  useEffect(() => {
    const ob: IntersectionObserver[] = [];
    if (containerRef.current && contentRef.current) {
      const createObserver = (rootMargin: string, cb: (value: boolean) => void) => {
        return new IntersectionObserver(
          (entities) => {
            const [entry] = entities;
            const scrollabable = entry.isIntersecting && entry.intersectionRatio !== 0;

            cb(scrollabable);
          },
          {
            root: containerRef.current,
            rootMargin: rootMargin,
            threshold: [0, 1e-12],
          },
        );
      };

      ob.push(createObserver('100% 0px -100% 0px', setUp));
      ob.push(createObserver('-100% 0px 100% 0px', setDown));

      ob.forEach((o) => {
        o.observe(contentRef.current!);
      });
    }

    return () => {
      ob.forEach((o) => {
        o.disconnect();
      });
    };
  }, [containerRef, contentRef]);

  return { up, down };
};
