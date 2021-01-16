import React from 'react';

const Utterances: React.FC = () => (
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
      elem.appendChild(scriptElem);
    }}
  />
);

export default Utterances;
