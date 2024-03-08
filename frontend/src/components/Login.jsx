import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { LoginUser, reset } from '../features/AuthSlice';

const Login = () => {
    // State untuk menyimpan email dan password
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    // Dispatch dan navigate
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    // Mengambil data auth dari Redux store
    const { user, isError, isSuccess, isLoading, message } = useSelector(
        (state) => state.auth
    );

    // Menggunakan useEffect untuk melakukan navigasi dan reset ketika user berhasil login
    useEffect(() => {
        if (user || isSuccess) {
            navigate("/dashboard");
        }
        dispatch(reset());
    }, [user, isSuccess, dispatch, navigate]);
    
    // Handler untuk proses autentikasi (login)
    const Auth = (e) => {
        e.preventDefault();
        dispatch(LoginUser({ email, password }));
    }

    return (
        <section className="hero hash-background-gry-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4">
                            <form onSubmit={Auth} className='box'>
                                {isError && <p className='has-text-centered'>{message}</p>}
                                <h1 className='title is-2 has-text-centered'>Login</h1>
                                <div className="field">
                                    <label className='label'>Email</label>
                                    <div>
                                        <input 
                                            type="email" 
                                            className='input' 
                                            value={email} 
                                            onChange={(e) => setEmail(e.target.value)} 
                                            placeholder='Email'
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className='label'>Password</label>
                                    <div>
                                        <input 
                                            type="password" 
                                            className='input'
                                            value={password} 
                                            onChange={(e) => setPassword(e.target.value)} 
                                            placeholder='********'
                                        />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button 
                                        type="submit" 
                                        className="button is-success is-fullwidth"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? "Logging in..." : "Login"}
                                    </button>
                                </div>
                                <p className="has-text-centered mt-3">
                                    Belum Punya Akun? <Link to="/signup">Daftar</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;