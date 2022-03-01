import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Helmet} from "react-helmet";
import Video from './Section/Video';
import Blog from './Section/Blog';
import Image from './Section/Image';
import Navbar from './Header/Navbar';
import Banner from './Header/Banner';
import SEO from './Section/SEO';
import Footer from './Header/Footer';
class HomePage extends Component {

    render() {
        return (
            <> 
              
                 <Navbar />
                 <Banner /> 
                 <Blog />
                 <Image />
                 <Video />
                 <SEO />
                 <Footer />
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
