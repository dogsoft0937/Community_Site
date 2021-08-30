import React from 'react'
import axios from 'axios'

function WritePage() {
    return (
      <>
      <div>
        <input type='text' id = 'title_txt' name = 'title' placeholder = 'Title'/>
      </div>

      <div>
        <textarea id='content_txt' name = 'contents' placeholder='내용을 입력하세요'> </textarea>
      </div>

      <div id = 'post_submit'>
        <button> Submit </button>
      </div>
      </>
    )
}

export default WritePage
