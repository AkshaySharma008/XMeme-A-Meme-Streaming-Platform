import React from 'react'
import './styles.css'
import cardIcon from './meme-favicon.png'
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'

const MemeForm = ({memeform, setMemeAdded, memeAdded}) => {
    const [memerName ,setMemerName ] = useState('');
    const [memerCaption ,setCaption ] = useState('');
    const [memeUrl ,setMemeUrl ] = useState('');
    const [buttonText , setButtonText] = useState('Submit Your Meme')
    const [buttonDisable , setButtonDisable] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setButtonText('Submitting ...');
        setButtonDisable(true);
        const data = {
            name: memerName,
            caption: memerCaption,
            url: memeUrl
        }
        const apiUrl = 'http://localhost:8081/memes';
        axios.post(apiUrl, data).then((res) => {
            if(res.status === 200){
                setButtonText('Submit Your Meme');
                setButtonDisable(false);
                Swal.fire({
                    icon: 'success',
                    title: 'Your Meme has been Published !!',
                    showConfirmButton: false,
                    timer: 1800
                  })
                  resetStates();
            }else{
                setButtonText('Submit Your Meme')
                setButtonDisable(false);
                Swal.fire({
                    icon: 'error',
                    title: 'OOPS Something went wrong !!',
                    showConfirmButton: false,
                    timer: 1800
                  })
            }
            
        }).catch((err) => {
            setButtonText('Submit Your Meme')
            setButtonDisable(false);
            Swal.fire({
                icon: 'error',
                title: 'Please submit the data carefully !!',
                showConfirmButton: false,
                timer: 1800
              })
        })
    }

    const resetStates = () => {
        setMemerName('');
        setCaption('');
        setMemeUrl('');
        setMemeAdded(!memeAdded);
    }


    return (
            <div className="card col-md-12 shadow bg-white rounded">
                <div className="card-body m-2">
                    <div className="col-md-3 m-auto">
                    <img src={cardIcon}  alt="card-image" className="avatar" /> 
                    </div>
                    <h5 className="card-title text-center mt-4">X-Meme</h5>
                    <h6 className="card-subtitle mb-2 text-muted text-center">Let's Play with Meme's</h6>

                    <form onSubmit={handleSubmit}>
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
                             value={memerName}
                             onChange= {e => setMemerName(e.target.value)}
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
                    <div className="col-md-5 m-auto">
                    <button type="submit"  className="btn btn-danger btn-lg" disabled={buttonDisable} >{buttonText}</button>
                    </div>
                    </form>
                </div>
            </div>
    )
}

export default MemeForm