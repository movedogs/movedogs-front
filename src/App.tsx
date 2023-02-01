import "./App.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| *a* | *b* |
| - | - |
| 1 | 2 |
`;

const markdown2 = `- First item
- Second item
- Third item
    - Indented item
    - Indented item
- Fourth item`;

function App() {
  return (
    <div className="App">
      <div>
        <ReactMarkdown># Hello, *World*!</ReactMarkdown>
        <ReactMarkdown>This text is ___really important___.</ReactMarkdown>
        <ReactMarkdown
          children={markdown}
          remarkPlugins={[remarkGfm]}
        ></ReactMarkdown>
        <ReactMarkdown>{markdown2}</ReactMarkdown>
      </div>
    </div>
  );
}

export default App;
