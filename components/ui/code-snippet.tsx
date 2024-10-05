import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import sql from "highlight.js/lib/languages/sql";


import { useEffect, useRef } from "react";

hljs.registerLanguage("sql", sql);

const CodeSnippet = ({codeContent}) => {
  const codeRef = useRef(null);

  useEffect(() => {
    hljs.highlightBlock(codeRef.current);
  }, []);

    return (
      <pre>
        <code className="javascript" style={{ background: "transparent" }} ref={codeRef}>
          {`code 
          ${codeContent}`
          }
        </code>
      </pre>
    );
  };
  
export default CodeSnippet;