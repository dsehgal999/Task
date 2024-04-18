import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Add = () => {

    const[inputData, setInputData] = useState({name:'', email:'', department:''})

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault()

        axios.post('http://localhost:3030/users', inputData)
        .then(res => {
            alert("Data Added Successfully!");
            navigate('/')
        }).catch(err => console.log(err));
    }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-light p-5'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' className='form-control'
                    onChange={e=> setInputData({...inputData, name:e.target.value})} />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' className='form-control' 
                    onChange={e=> setInputData({...inputData, email:e.target.value})}/>
                    
                </div>

                <div>
                    <label htmlFor="department">Department</label>
                    <input type="text" name='department' className='form-control' 
                    onChange={e=> setInputData({...inputData, department:e.target.value})}/>
                    
                </div>
                <br />
                <button className='btn btn-info'>Submit</button>

            </form>
            
        </div>
      
    </div>
  )
}

export default Add
