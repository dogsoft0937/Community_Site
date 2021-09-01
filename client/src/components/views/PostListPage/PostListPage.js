import React,{useState,useEffect} from 'react'
import Paper from '@material-ui/core/Paper';
import './PostListPage.css'
import Button from '@material-ui/core/Button';
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios';

function PostListPage(props) {
    const [Posts, setPosts]=useState([])
    const [page, setpage] = useState(1)
    useEffect(() => {
        getPost(page);
    }, [])
    const getPost=(body)=>{
        axios.get('/api/post/posts')
        .then(response=>{
            console.log(response.data.userInfo)
            if(response.data.success){
                setPosts(response.data.userInfo)
            }else{
                setPosts("");
                alert("게시글을 불러오는데 실패하였습니다.")
            }
            setpage(1)
        })
    }
    function handleClick(e) {
      window.location.replace("/detail_post")
    }
    const renderPosts=Posts.map((post,index)=>{
        return <Button onClick = {handleClick} style={{marginTop:"20px",marginLeft:"20px",justifyContent:"left"}} key={index}>{post.title}</Button>
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
