import React from 'react'
import { useState } from 'react'
import { marked } from 'marked'
import './App.css'



export default function App() {

  marked.setOptions({
    breaks: true,
  });

  const str = `# Welcome to my React Markdown Previewer!

  and feel free to erase everything
  and type your own text :)


  ## This is a sub-heading...
  ### And here's some other cool stuff:

  Heres some code, \`<div></div>\`, between 2 backticks.


   \`\`\`javascript
   // this is multi-line code:
      function anotherExample(firstLine, lastLine) {
        if (firstLine == "\`\`\`" && lastLine == "\`\`\`") {
          return multiLineCode;
        }
      };
  \`\`\`
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!
  >
  > And more block quotes


And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
- Some are bulleted.
  - With different indentation levels.
    - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freecodecamp logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

  `
  

  const [text, setText] = useState(str)
  

  return (
    <div id="wrapper">
      <div id='editorWrapper'>
        <label htmlFor="editor" className='title'>Editor</label>
        <textarea id='editor'
        onChange={(e) => setText(e.target.value)}
        value={text}
        required
        >  
        </textarea>
      
      </div>
      <div id='prewiewWrapper'>
        <h1 className='title'>Preview</h1>
        <div id="preview" dangerouslySetInnerHTML={{ __html: marked(text) }}></div>
      </div>
    </div>
  )
}



