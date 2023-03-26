import React, { useState } from 'react'
import "./update.css"
import Navbar from "../Navbar/Navbar"
import { Box, TextField, Button, Tooltip } from '@mui/material'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { useParams } from 'react-router-dom';


const Update = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")
    
    const{id} = useParams()





    const Update = async(e)=>{
        e.preventDefault()
        const prompts = prompt("Enter key of this data!!!")
        if(prompts){
            try{
                await axios.put(`http://localhost:8000/update`,{
                    name,email,age,prompts,id
                }).then((res)=>{
                    if(res.data.mess === "Data updated"){
                        toast.success('Your data is been updated', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                            });
                            setName("")
                            setAge("")
                            setEmail("")
                    }else if(res.data.mess === "Key doesn't match"){
                        toast.error('Your key is invalid!', {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                            });
                    }else if(res.data.mess === "invalid Data"){
                        toast.error('Invalid Data!', {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                            });
                    }else if(res.data.mess === "server error"){
                        toast.error('Server problem!', {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                            });
                    }
                })
            }catch(e){
                console.log(e)
            }
        }else{
            toast.warn('Data was empty!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
        
    }
  return (
  
  <>
    <Navbar />
            <div className="main-container">
                <div className="main-div">
                    <div className="top">
                        <h1>Update Data</h1>
                    </div>
                    <div className="bottom">
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: -2, width: '100ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <div className="bottom">
                                <TextField value={name} onChange={(e) => setName(e.target.value)} className='text' id="outlined-basic" label="Name" variant="outlined" />
                                <TextField value={email} onChange={(e) => setEmail(e.target.value)} className='text' id="filled-basic" label="Email" variant="outlined" />
                                <TextField value={age} onChange={(e) => setAge(e.target.value)} className='text' id="standard-basic" label="Age" variant="outlined" />
                                
                            </div>
                        </Box>
                        <Tooltip title="Add" arrow>
                            <Button 
                            className='button1' 
                            variant="contained"
                            onClick={Update}
                            >Update Data</Button>
                        </Tooltip>
                    </div>
                </div>
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />
            </div>
  </>
  
    )
}

export default Update