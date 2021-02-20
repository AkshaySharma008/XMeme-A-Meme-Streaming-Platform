import React from 'react'
import './styles.css'
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'


const EditForm = ({meme, setEditModal , memeAdded, setMemeAdded}) => {
    const [memerCaption ,setCaption ] = useState(meme.caption);
    const [memeUrl ,setMemeUrl ] = useState(meme.url);
    const handleSubmit = async(e) => {
        e.preventDefault();
        const memeId = meme._id;
        const apiUrl = `http://localhost:8081/memes/${memeId}`;
        const data = {
            caption: memerCaption,
            url: memeUrl
         }
        await axios.patch(apiUrl, data).then((res) => {
            if(res.status === 200){
                Swal.fire({
                    icon: 'success',
                    title: 'Your Meme has been Updated !!',
                    showConfirmButton: false,
                    timer: 1800
                  })
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'OOPS Something went wrong !!',
                    showConfirmButton: false,
                    timer: 1800
                  })
            }
            }).catch((e) => console.log(e))
        setEditModal(false);
        setMemeAdded(!memeAdded);
    }

    const cancelEditing = async(e) => {
        e.preventDefault();
        setEditModal(false);
    }

    return (
        <div className="card col-md-12 shadow bg-white rounded editForm">
             <form onSubmit={handleSubmit} className="p-3">
             <h5 className="card-title text-center mt-4">X-Meme</h5>
                    <h6 className="card-subtitle mb-2 text-muted text-center">Let's Play with Meme's</h6>
                    {/* Author's name */}
                    <div className="input-group my-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="Name"> Name </span>
                        </div>
                        <input
                             type="text" 
                             className="form-control" 
                             placeholder="Memer's Name" 
                             name="memerName"
                             value={meme.name}
                             disabled={true}
                              />
                    </div> 
                    {/* Meme's Caption */}
                    <div className="input-group my-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="Caption">Caption </span>
                        </div>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Caption of the meme" 
                            name="memerCaption"
                            value={memerCaption}
                            onChange= {e => setCaption(e.target.value)}
                            
                        />
                    </div> 
                    {/* Meme URL */}
                    <div className="input-group my-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="URL of the Meme's Image / Gif" 
                            name="memeUrl"
                            value={memeUrl}
                            onChange= {e => setMemeUrl(e.target.value)} 
                        />
                        <div className="input-group-append">
                            <span className="input-group-text" id="memeUrl">Meme URL</span>
                        </div>
                    </div>
                    {/* Submit Button */}
                    <div className="col-md-8 m-auto">
                    <button type="submit"  className="btn btn-success btn-lg" >Edit your Meme</button> &nbsp;
                    <button type="btn"  className="btn btn-danger btn-lg" onClick={cancelEditing} >Cancel</button>
                    </div>
                    </form>
                </div>
    )
}

export default EditForm