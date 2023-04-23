import React from 'react'
import { useState } from 'react'
import { marked } from 'marked'
import './App.css'



export default function App() {
  const markdowndArr = "# h1\n\n ## h2\n\n ### h3";

  const [text, setText] = useState('');

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



