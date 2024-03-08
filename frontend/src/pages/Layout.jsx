import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Sidebar from '../components/Sidebar.jsx';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <header>
        <Navbar />
      </header>
      <div className='columns mt-6' style={{minHeight: "100vh"}}>
        <aside className='column is-2'>
          <Sidebar />
        </aside>
        <section className='column has-background-light'>
          <main>{children}</main>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Layout;