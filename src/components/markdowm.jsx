import React, { useState } from "react";
import MarkdownIt from "markdown-it";
import { DefaultText } from "./defaultText";

const md = new MarkdownIt();

const MarkdownPreviewer = () => {
  const [markdown, setMarkdown] = useState(DefaultText);

  const handleMarkdownChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div
    style={{
        display:'flex',
        flexDirection:'column',
        alignItems: 'center'
    }}>
        <h1> Editor </h1>
            <textarea
            style={{
                backgroundColor: '#EEEE',
                color: 'black',
                height: '200px',
                width: '100%',
                border: 'solid 5px green',
            }}
            id="editor" 
            onChange={handleMarkdownChange} 
            value={markdown} />

        <h1> Previewer </h1>
            <div
            style={{
                backgroundColor: '#EEEE',
                color: 'black',
                height: '70%',
                width: '70%',
                border: 'solid 5px green'
            }} 
            id="preview" 
            dangerouslySetInnerHTML={{ __html: md.render(markdown, {breaks: true}) }}>

            </div>
    </div>
  );
};

export default MarkdownPreviewer;
