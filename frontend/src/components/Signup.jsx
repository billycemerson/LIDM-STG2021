import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/user", {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
        role: "user",
      });
      navigate("/");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <section className="hero hash-background-gry-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4">
              <div className="card is-shadowless">
                <div className="card-content">
                  <div className="content">
                    <form onSubmit={saveUser} className="box">
                    <h1 className="title is-2 has-text-centered">Sign Up</h1>
                      <p className="has-text-centered">{msg}</p>
                      <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                          <input
                            type="text"
                            className="input"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Name"
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                          <input
                            type="text"
                            className="input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                          <input
                            type="password"
                            className="input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="******"
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label">Confirm Password</label>
                        <div className="control">
                          <input
                            type="password"
                            className="input"
                            value={confPassword}
                            onChange={(e) => setConfPassword(e.target.value)}
                            placeholder="******"
                          />
                        </div>
                      </div>
                      <div className="field">
                        <div className="control">
                          <button type="submit" className="button is-success is-fullwidth">
                            Sign Up
                          </button>
                        </div>
                      </div>
                    </form>
                    <p className="has-text-centered">
                      Sudah punya akun? <Link to="/">Login</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;