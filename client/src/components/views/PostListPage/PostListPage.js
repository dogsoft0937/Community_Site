import React,{useState,useEffect} from 'react'
import Paper from '@material-ui/core/Paper';
import './PostListPage.css'
import Button from '@material-ui/core/Button';
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios';

function PostListPage(props) {
    const [Posts, setPosts]=useState([])
    // const [page, setpage] = useState(1)
    useEffect(() => {
        getPost()
        return () => {
            setPosts([])
        }
    }, [])
    const getPost=()=>{
        axios.get(`/api/post/posts`)
        .then(response=>{
            if(response.data.success && response.data.userInfo){
                setPosts(response.data.userInfo)
            }else{
                alert("게시글을 불러오는데 실패하였습니다.")
            }
        })
    }
    // function handleClick(e) {
    //   window.location.replace("/detail_post")
    // }

    //a 태그 href 속성이용해서 /detail_post페이지로 갈건데 이때 파라미터로 post의 고유 id를 보내줄거임
    const renderPosts=Posts.map((post,index)=>{
        return (
        <Button style={{marginTop:"20px",marginLeft:"20px",justifyContent:"left"}} key={index}>
            <a style={{width:'100%',textAlign:'left'}}href={`/detail_post/${post._id}`}>
                {post.title}
            </a>
        </Button>);
    })
    return (
        <div className="main" style={{ marginTop:"5%",display: 'flex', justifyContent: 'center', height: "100%", backgroundColor: "#ededed" }}>
            <Paper elevation={5} style={{ width: "80%", height: "70%" }}>
                <div className="list">
                    {renderPosts}
                </div>
                <div className="func_stage">
                    <Link to="/write" style={{ textDecoration: "none" }}>
                        <Button variant="contained" className="write_button" style={{backgroundColor:"#24b672",color:"white"}}>글쓰기</Button>
                    </Link>

                </div>
            </Paper>
        </div>
    )
}

export default withRouter(PostListPage);
