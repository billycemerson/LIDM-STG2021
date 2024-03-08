import React, { useEffect, useState} from 'react';
import axios  from "axios";
import { useNavigate, useParams } from 'react-router-dom';

const FormEditQuiz = () => {
    const [name, setName] = useState();
    const [link, setLink] = useState();
    const [kode, setKode] = useState();
    const [msg, setMsg] = useState();
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        const getQuizById = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/quiz/${id}`);
                setName(response.data.name);
                setLink(response.data.link);
                setKode(response.data.kode);
            } catch (error) {
                if (error.response) {
                    setMsg(error.response.data.msg);
                }
            }
        };
    
        getQuizById();
    }, [id]);
    
    
    const updateQuiz = async (e)=>{
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/quiz/${id}`, {
                name: name,
                link: link,
                kode: kode
            });
            navigate("/quiz");
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg)
            }
        }
    }
    return (
    <div>
       <h1 className='title'>Quiz</h1>
      <h2 className='subtitle'>Edit Quiz</h2>
      <div className="card is-shadowless">
        <div className="card-content">
            <div className="content">
                <form onSubmit={updateQuiz}>
                    <p className='has-text-centered'>{msg}</p>
                        <div className="field">
                            <label className='label'>Name</label>
                            <div>
                                <input 
                                type="text"
                                value = {name}
                                onChange={(e)=> setName(e.target.value)}
                                className='input' 
                                placeholder='Nama Quiz'/>
                            </div>
                        </div>
                        <div className="field">
                            <label className='label'>Link</label>
                            <div>
                                <input 
                                type="text"
                                value = {link}
                                onChange={(e)=> setLink(e.target.value)}
                                className='input' 
                                placeholder='Link Quiz'/>
                            </div>
                        </div>
                        <div className="field">
                            <label className='label'>Kode</label>
                            <div>
                                <input 
                                type="text"
                                value = {kode}
                                onChange={(e)=> setKode(e.target.value)}
                                className='input' 
                                placeholder='Kode Quiz'/>
                            </div>
                        </div>
                        
                        <div className="field">
                            <div className="control">
                            <button type='submit' className="button is-success" >
                                Update
                            </button>
                            </div>
                        </div>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FormEditQuiz