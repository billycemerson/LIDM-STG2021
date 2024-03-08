import React from 'react';
import { useSelector } from 'react-redux';

const Welcome = () => {
  const { user } = useSelector((state) => state.auth);
  
  return (
    <div className="container is-max-desktop">
      <div className="columns is-centered">
        <div className="column is-half">
          <h2 className='subtitle has-text-centered'>Selamat Datang, Guru <strong>{user && user.name}</strong></h2>
          <div className="mt-5">
            <div className="box">
              <p className="content has-text-centered">
                Mari kita mulai analisis kemampuan siswa saat kuis dan terima rekomendasi dari AI.
              </p>
            </div>
            <div className="box">
              <p className="content has-text-centered">
                Dengan mempelajari hasil kuis siswa, Anda dapat mengevaluasi pemahaman mereka terhadap materi yang diajarkan.
              </p>
            </div>
            <div className="box">
              <p className="content has-text-centered">
                Rekomendasi dari kecerdasan buatan akan membantu Anda dalam menemukan area yang perlu ditingkatkan oleh siswa dan memberikan panduan untuk meningkatkan kemampuan belajar mereka.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;