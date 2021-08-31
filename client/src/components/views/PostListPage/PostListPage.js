import React,{useState,useEffect} from 'react'
import Paper from '@material-ui/core/Paper';
import './PostListPage.css'
import Button from '@material-ui/core/Button';
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios';

function PostListPage(props) {
    const [Posts,setPosts]=useState([])
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
    const renderPosts=Posts.map((post,index)=>{
        return <Button style={{marginTop:"20px",marginLeft:"20px",justifyContent:"left"}} key={index}>{post.title}</Button>
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
