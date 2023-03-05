import { Component } from 'react';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';
// import { toast } from 'react-toastify';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery'

import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";


export class App extends Component {
  state={
    // imges: [],
    query: '',
    page: 1,
  }

  handleFormSubmit = query =>{
    // console.log(query);
    this.setState({ query });
  };


  render(){
    return (
      <Layout>
        <GlobalStyle />
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery query={this.state.query} />

        <ToastContainer />
      </Layout>
    );
  }
};
