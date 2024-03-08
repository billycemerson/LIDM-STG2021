import React, { useState } from 'react';
import axios  from "axios";
import { useNavigate } from 'react-router-dom';

const FormAddQuiz = () => {
    const [name, setName] = useState("");
    const [link, setLink] = useState("");
    const [kode, setKode] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate("");

    const saveQuiz = async (e)=>{
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/quiz', {
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
      <h2 className='subtitle'>Tambahkan Quiz Baru</h2>
      <div className="card is-shadowless">
        <div className="card-content">
            <div className="content">
                <form onSubmit={saveQuiz}>
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
                                Save
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

export default FormAddQuiz
