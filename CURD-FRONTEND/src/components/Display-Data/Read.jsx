// import { Icon } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { NavLink } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import "./read.css"

const Read = () => {
    const [userData, setUserData] = useState([])
    const[reduce,forceReducer] = useReducer(x => x + 1, 0)
    const Fetch = async () => {
        await axios.get("http://localhost:8000/getuser")
            .then((res) => {
                
                setUserData(res.data)
            })
    }
    useEffect(() => {
        Fetch();
        
    },[reduce])

    

    const Delete = async(id)=>{
        try{
            const prompts = prompt("Enter key of this data!!!")
            if(prompts){
                await axios.post("http://localhost:8000/delete",{
                    id,prompts
                }).then((res)=>{
                    if(res.data.mess === "Data is Deleted"){
                        toast.success('Your data is deleted', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false, 
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                            });
                            forceReducer()
                    }else if(res.data.mess === "Invalid key"){
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
                    }else{
                        toast.error('Server error!', {
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
            }else{
                toast.warn('You Left Empty Field', {
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
        }catch(e){
            console.log(e)
        }
    }
    return (
        <>
            <Navbar />
            <div className="main-table">
                <table className="table table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">NAME</th>
                            <th scope="col">EMAIL</th>
                            <th scope="col">AGE</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    {
                        userData.map((value, i) => {
                         return(
                            <>
                            <tbody>
                                <tr>
                                    <th scope="row">{i + 1}</th>
                                    <td>{value.name}</td>
                                    <td>{value.email}</td>
                                    <td>{value.age}</td>
                                    <td>
                                        <div className="button-div" >
                                        <NavLink to={`/update/${value._id}`}><button type="button" className="btn btn-info">Update</button></NavLink>    
                                            <button type="button" style={{ marginLeft: "1rem" }} className="btn btn-danger" onClick={()=>Delete(value._id)}>Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                            </>
                         )   
                        })
                    }
                </table>
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

export default Read