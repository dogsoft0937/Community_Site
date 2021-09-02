import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { withRouter  } from 'react-router-dom'


//봐줬으면 하는 문제점 
//1. 데이터를 불러오고싶은데 안불러와짐 << 백엔드에서 아직 구현하지 않았음 
//2. 다시 목록으로 돌아가는 버튼을 하나 구현했는데 안뜸 << 수정해놨음 태그로 묶어야함
//3. app.js에 detail페이지 추가했는데 이상한거나 오류는 없는지 확인부탁!! << app.js 수정 후 주석 달아놨음
//4. 내일 수업이 끝나면 시간많음
//5. 오후 4시 15분에 끝남. 난 이제 자야겠음
function DetailPostPage(props){
  const postId=props.match.params.postId; //postId를 가져옴 >> 그러려면 PostListPage에서 각 post에 링크를 부여하면됨
  const [ data, setData ] = useState({})

  useEffect(() => {
    const getData =() =>{
      //파라미터에 있는 postid로 백엔드 서버에 post 정보를 요청함
      axios.get(`api/post/post_id?id=${postId}`)
      .then(response=>{
        console.log(response.data.post) 
        //백엔드에서 처리결과를 success에 보내줄거임
        if(response.data.success){ //처리 성공시
          setData(response.data.post) //백엔드에서 보내준 post데이터를 data에 저장하고
        }
        else{ //처리 실패시
          setData({})
          alert(response.data.msg) // 실패 메시지를 경고창으로 띄워줄거
        }
      })
    }
    getData();
    return ()=>{ //컴포넌트가 unmount 됐을때 data를 비움
      setData({})
    } 
  }, [postId]); 
  

  const BackToList = () => {   
    return (
        <div className="post-view">
          <button className="go-post-list" onClick={() => props.history.goBack()}>목록으로 돌아가기</button>
        </div>
    )
  }
  return (
    <> 
      <div className="post-view">{
          (data.title&&data.contents) ? (//이부분에 글 제목, 내용 넣어주면 됨 ex data.title , data.contents 
              <div className="post-view-row">
                <div>
                  {data.title} {data.contents}
                </div>
              </div>
          ) : <div>데이터를 불러오지 못했음</div>
        }
      </div>
      {<BackToList/>}
    </>
  )
}

export default withRouter(DetailPostPage);