import React, {useState} from 'react'
import './styles.css'
import MemeForm from '../../components/memeForm'
import AllMemes from '../../components/allMemes'

const HomePage = () => {

    const [memeAdded , setMemeAdded] = useState(false);

    return (
        <div className="home col-md-12">
            <div className="col-md-12 p-2">
                <div className="row">
                    <div className="col-md-7 p-5">
                    <AllMemes memeAdded={memeAdded} setMemeAdded={setMemeAdded}/>
                    </div>
                    <div className="col-md-5 p-5">
                    <MemeForm memeAdded={memeAdded} setMemeAdded={setMemeAdded}/>
                    <div className="text-center p-5">
            <strong>Made with &#10084; by <a href="https://akshaysharma.co.in">Akshay Sharma</a> at  <a>Crio.do</a></strong>
        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage