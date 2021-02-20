import React , { useState, useEffect, useCallback } from 'react'
import './styles.css'
import axios from 'axios';
import EditForm from '../editForm'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import EditSharpIcon from '@material-ui/icons/EditSharp';
import Swal from 'sweetalert2'

const AllMemes = ({memeAdded , setMemeAdded}) => {
        const [memes, setAllMemes] = useState([]);
        const [loading, setLoading] = useState(true);
        const [isEditModal, setEditModal] = useState(false); 
        const [editMemeData , setEditMemeData] = useState({});
        const loadData = useCallback(async () => {
            const apiUrl = 'http://localhost:8081/memes';
             await axios.get(apiUrl)
                .then((res) => {
                    setAllMemes(res.data.memes);
                    setLoading(false);
                });
        }, []);

        useEffect(() => {
            loadData()
        }, [memeAdded])


        const deleteMeme = memeId => e => {
            e.preventDefault();
            const apiUrl = `http://localhost:8081/memes/${memeId}`;
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete(apiUrl).then((res) => {
                        Swal.fire({
                            icon: 'success',
                            title: 'Your Post deleted successfully !!',
                            showConfirmButton: false,
                            timer: 2000
                          })
                          setMemeAdded(!memeAdded);
                    }).catch((e) => {
                        console.log(e)
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops some error occured !!',
                            showConfirmButton: false,
                            timer: 2000
                          })
                    })
                }
              })

          
        }

        const editMeme = meme => e => {
            e.preventDefault();
            setEditModal(true);
            setEditMemeData(meme);
        }

        const getScroll = scroll => e => {
            e.preventDefault();
            console.log(scroll)
        }

        


    return (
        <div>
        <div className="col-md-12 allMemes card p-3 shadow bg-white rounded" onScroll={getScroll}>
            <h4 className="card-title text-center mt-1">X-Meme</h4>
            <h5 className="card-subtitle mb-2 text-muted text-center">Let's Play with Meme's</h5>

            {
                            (loading) ? (
                                <div className="text-center mt-5">
                                    <h6 className="mt-5">No Memes Found !</h6>
                                </div>

                            ) : (
                                memes.map((meme, index) => {
                                    return (
                                        <div className="card col-md-12 shadow bg-white rounded p-3 mt-1" key={index}>
                                            <div className="row">
                                                <img src={meme.url} alt="Meme Image" className="memeImg col-md-4" />
                                                <div className="col-md-7 m-2">
                                                    <h6> <span className="text-muted font-weight-bold"> Meme's Caption :</span> {meme.caption} </h6>
                                                    <span>
                                                    <h6 ><span className="text-muted"> Posted By :</span> {meme.name} </h6>   
                                                    </span> 
                                                </div>
                                                <div className="col-md-1">
                                                    <IconButton aria-label="delete" color="secondary" onClick={deleteMeme(meme._id)} > <DeleteIcon /> </IconButton>
                                                    <IconButton aria-label="edit" onClick={editMeme(meme)}> <EditSharpIcon /> </IconButton>
                                                </div>
                                            </div>
                                         </div>
                                    )
                                })
                                )
            }
        </div>
        {isEditModal && <EditForm meme={editMemeData} setEditModal={setEditModal} setMemeAdded={setMemeAdded} memeAdded={memeAdded} /> }
        </div>
    )
}

export default AllMemes