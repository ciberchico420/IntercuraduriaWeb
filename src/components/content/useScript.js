import { useEffect } from 'react';

export const useScript = (url,id) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.id = id;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [url]);
};
export const useLink = (url,id) => {
  useEffect(() => {
    const script = document.createElement('link');

    script.rel ="stylesheet";
    script.href = url;
    script.id = id;
    script.media = "all";

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    }
  }, [url]);
};
