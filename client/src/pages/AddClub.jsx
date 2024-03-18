import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addClub } from '../services/api';
import {useNavigate} from "react-router-dom";

export const AddClub =() =>{
    // navigate=useNavigate();
    const [titleClub, setTitle] = useState('')
    const [descriptionClub, setDescription] = useState('')
    const [imageClub, setImage] = useState('')
    const [typeClub, setType] = useState('')
    const [pathClub, setPath] = useState('')
    const [clubAdded,setClubAdded] = useState(false)
    const handleSubmit = async(e) => {
        e.preventDefault()
        let club = {
            title: titleClub,
            description:descriptionClub,
            image:imageClub,
            type:typeClub,
            path:pathClub
        }
        return addClub(club)
                .then(data=> data && setClubAdded(true))
                .catch(err=>console.log(err))

    }

    useEffect(()=>{
        console.log({clubAdded});
        clubAdded &&  alert("Club/Domain Added!") && navigate('/clubs');
         setInterval(() => {
            setClubAdded(false)
         }, 5000);
    },[clubAdded])
    return (
        <div className='container mt-4 p-4 ' style={{ width: '40%',background:'#D3D3D3' }}>
        {clubAdded && < ToastContainer/>}
        <h3>Add New Club/Domain </h3>
        <br />
        <form
        onSubmit={(e)=>handleSubmit(e)}
        >
            <div className='form-group'>
                <label>Title : </label>
                <input type='text'
                    required
                    className='form-control'
                    value={titleClub}
                    onChange={e => setTitle(e.target.value)}
                />
            </div>
            <div className='form-group'>
                <label>Description : </label>
                <input type='text'
                    required
                    className='form-control'
                    value={descriptionClub}
                    onChange={e => setDescription(e.target.value)}
                />
            </div>
            <div className='form-group'>
                <label>Image : </label>
                <input type='text'
                    required
                    className='form-control'
                    value={imageClub}
                    onChange={e => setImage(e.target.value)}
                />
            </div>
            <div className='form-group'>
                <label>Type : </label>
                <input type='text'
                    required
                    className='form-control'
                    value={typeClub}
                    onChange={e => setType(e.target.value)}
                />
            </div>
            <div className='form-group'>
                <label>Path : </label>
                <input type='text'
                    required
                    className='form-control'
                    value={pathClub}
                    onChange={e => setPath(e.target.value)}
                />
            </div>
            <br />
            <div>
                <button type='submit' className='btn btn-secondary' >Submit</button>
            </div>
        </form>
    </div>
    )
}

// export default AddClub;