import React, {useEffect} from 'react';
import Layout from './Layout';
import VisualisasiHasil from "../components/VisualisasiHasil.jsx";
import AnalisisHasil from '../components/AnalisisHasil.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from "../features/AuthSlice.js";

const Visualisasi = () => {
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
        <VisualisasiHasil />
        <AnalisisHasil style={{ marginTop: '5rem' }}/>
    </Layout>
  )
}

export default Visualisasi