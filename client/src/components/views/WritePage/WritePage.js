import React, { useState } from 'react'
import axios from 'axios'
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { Form } from 'semantic-ui-react'
import Button from '@material-ui/core/Button';

function WritePage(props) {
  const [inputs, setInputs] = useState({
    writer: props.user,
    title: '',
    contents: ''
  })
  const { title, contents } = inputs;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }
  const onreset = () => {
    setInputs({
      title: '',
      contents: '',
    })
  }
  const submitHandler = (e) => {
    e.preventDefault();
    if (title.length < 5) {
      alert("제목이 너무 짧습니다.")
    } else {
      if (contents.length < 10) {
        alert("내용을 더 입력하세요.")
      } else {
        axios.post("/api/post/", inputs)
          .then(response => {
            if (response.data.success) {
              alert(response.data.msg);
              onreset();
              props.history.push('/');
            } else {
              alert(response.data.msg)
            }
          })
      }
    }
  }
  return (
    <div className="main" style={{ display: 'flex', justifyContent: 'center', height: "100%", backgroundColor: "#ededed" }}>
      <Paper elevation={5} style={{ width: "80%", height: "70%" }}>
        <div style={{}}>
          <Form onSubmit={submitHandler} style={{  }}>
            <TextField style={{ margin: '20px', width: '90%' }} id="standard-basic" label="제목" name="title" value={title} onChange={handleChange}></TextField>
            <TextField style={{ margin:"20px" }} label="내용" width={100} rows={15} multiline variant="outlined" placeholder="내용" name="contents" value={contents} onChange={handleChange} /><br />
            <Button style={{marginLeft:'90%'}} type="submit" variant="contained" color="secondary">
              작성
            </Button>
          </Form>
          <div>
          </div>
        </div>
      </Paper>
    </div>
  )
}
export default WritePage
