import React from 'react'
import { useState } from 'react'
import { marked } from 'marked'
import './App.css'



export default function App() {
  const str = "# Welcome to my React Markdown Previewer! \n\n ## This is a sub-heading...\n\n ### And here's some other cool stuff: \n\n Heres some code, `<div></div>`, between 2 backticks.\n\n ```
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '```' && lastLine == '```') {
      return multiLineCode;
    }
  }
  ```"
  

  const [text, setText] = useState(str);

  return (
    <div id="wraper">
      <label id='editorWraper'>
        <span>markdownd</span>
        <textarea id='editor'
        onChange={(e) => setText(e.target.value)}
        value={text}
        required
        >  
        </textarea>
      </label>
      <div id="preview" dangerouslySetInnerHTML={{ __html: marked(text) }}></div>
    </div>
  )
}



