import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { withRouter  } from 'react-router-dom'


//봐줬으면 하는 문제점 
//1. 데이터를 불러오고싶은데 안불러와짐
//2. 다시 목록으로 돌아가는 버튼을 하나 구현했는데 안뜸
//3. app.js에 detail페이지 추가했는데 이상한거나 오류는 없는지 확인부탁!!
//4. 내일 수업이 끝나면 시간많음
//5. 오후 4시 15분에 끝남. 난 이제 자야겠음
function DetailPostPage(props){
  const [ data, setData ] = useState({})
  const [ page, setPage ] = useState(1)
  useEffect(() => {
    setData(getData(page));
  }, [ ]);
  const getData = e =>{
    axios.get('api/post/posts')
    .then(response=>{
      console.log(response.data.userInfo)
      if(response.data.success){
        setData(response.data.userInfo)
      }
      else{
        setData("");
        alert("None")
      }
      setPage(1)
    })
  }

  const BackToList = ({ history }) => {   
    return (
      <> 
        <div className="post-view">
          <button className="go-post-list" onClick={() => history.goBack()}>목록으로 돌아가기</button>
        </div>
      </>
    )
  }
  return (
    <> 
      <div className="post-view">{
          data ? (
              <div className="post-view-row">
                <div>
                  내용
                </div>
              </div>
          ) : '해당 게시글을 찾을 수 없습니다.'
        }
      </div>
      <div>
        { BackToList }
      </div>
    </>
  )
}

export default withRouter(DetailPostPage);