import React, { Component, useEffect } from 'react';

// export const Utterances = () => {
//   const commentBox = React.createRef();

//   useEffect(() => {
//     const scriptEl = document.createElement('script');
//     const utterancesConfig: { [key: string, string] } = {
//       repo: 'grap3fruit/nextjs-blog',
//       'issue-term': 'title',
//       label: 'comment',
//       theme: 'github-light',
//       crossorigin: 'anonymous',
//     };

//     Object.keys(utterancesConfig).forEach((configKey: string) => {
//       scriptEl.setAttribute(configKey, utterancesConfig[configKey]);
//     });
//     commentBox.current.appendChild(scriptEl);
//   }, []);

//   return <div className="utterances" ref={commentBox} />;
// };

// export default Utterances;

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
