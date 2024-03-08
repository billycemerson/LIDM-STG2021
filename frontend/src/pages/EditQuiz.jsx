import React, {useEffect} from 'react'
import Layout from './Layout.jsx';
import FormEditQuiz from '../components/FormEditQuiz.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from "../features/AuthSlice.js";

const EditQuiz = () => {
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
        <FormEditQuiz />
    </Layout>
  )
}

export default EditQuiz