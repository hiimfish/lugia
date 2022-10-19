import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import '../anti-debug';

const markdown = `
~~~js
(() => {
  function block() {
    setInterval(() => {
      // eslint-disable-next-line no-new-func
      Function('debugger')();
    }, 50);
  }
  try {
    block();
  } catch (err) {
    /** */
  }
})();
~~~
`

export const App = () => {
  return (
    <>
      <h1>Anti-Debug</h1>

      <ReactMarkdown
        children={markdown}
        components={{
          code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                style={dark}
                children={String(children).replace(/\n$/, '')}
                language={match[1]}
                wrapLongLines={true}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          }
        }}
      />
    </>
  );
};

export default App;
