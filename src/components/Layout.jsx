import React from 'react';
import Footer from '../components/Footer';

function Layout(props) {
    return(
        <div>
            
            { props.children }

            <Footer />
        </div>
    )
}

export default Layout;