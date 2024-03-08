import React, { useEffect } from 'react';
import Layout from './Layout.jsx';
import FormAddHasil from '../components/FormAddHasil.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from "../features/AuthSlice.js";

const AddHasil = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);
  
  return (
    <Layout>
        <FormAddHasil />
    </Layout>
  )
}

export default AddHasil;