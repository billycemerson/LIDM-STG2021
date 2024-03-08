import React, {useEffect} from 'react';
import Layout from './Layout.jsx';
import FormAddUser from '../components/FormAddUser.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from "../features/AuthSlice.js";

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
    if(user && user.role !== "admin"){
      navigate("/dashboard");
    }
  }, [isError, user, navigate]);
  
  return (
    <Layout>
        <FormAddUser />
    </Layout>
  )
}

export default AddUser
