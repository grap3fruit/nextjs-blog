import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Utterances: React.FC = () => {
  const [isAlreadyCalled, setIsAlreadyCalled] = useState(false);
  const router = useRouter();

  return (
    <section
      ref={(elem) => {
        if (!elem) {
          return;
        }
        const scriptElem = document.createElement('script');
        scriptElem.src = 'https://utteranc.es/client.js';
        scriptElem.async = true;
        scriptElem.crossOrigin = 'anonymous';
        scriptElem.setAttribute('repo', 'grap3fruit/nextjs-blog');
        scriptElem.setAttribute('issue-term', 'title');
        scriptElem.setAttribute('label', 'blog-comment');
        scriptElem.setAttribute('theme', 'github-light');
        if (!isAlreadyCalled) {
          elem.appendChild(scriptElem);
          setIsAlreadyCalled(true);
        }
      }}
    />
  );
};

export default Utterances;
