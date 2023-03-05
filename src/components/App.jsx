import { Component } from 'react';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';

import { fetchImages } from '..//services/API';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery'
import { Button } from './Button/Button';

import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";


export class App extends Component {
  state={
    query: '',
    page: 1,
    images: [],
    // error: null,
    status: 'idle',
    showLoadMore: false,
  }

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.props;

    if(prevProps.query !== query || prevProps.page !== page) {
        // this.setState({ query });
        // console.log(prevProps.query);
        // console.log(this.props.query);

        this.setState({status: 'pending'});

        try {
            const { hits, totalHits } = await fetchImages(query, page);

            if(hits.length === 0) {
                this.setState({ status: 'idel' });
            }

            this.setState(prevState=>({ image: [...prevState.image, ...hits],
            showLoadMore: page < Math.ceil(totalHits / 12)
            })) 
        } catch (error) {
            this.setState({ status: 'rejected' });
        }
    }
}

  handleFormSubmit = query =>{
    // console.log(query);
    this.setState({ query: query,
    page: 1,
    images: [], });
  };

  handleOnClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1, }));
  }


  render(){
    const {status, image, showLoadMore} = this.state;

    return (
      <Layout>
        <GlobalStyle />

        <Searchbar onSubmit={this.handleFormSubmit} />

        {status === 'idel' && toast.error('No results were found for your request')}
        
        {status === 'pending' && <Loader />}

        {status === 'rejected' && toast.error('Sorry, something went wrong. Please, try again')}
        
        {status === 'resolved' && <ImageGallery image={image} />}
        
        {showLoadMore && <Button onClick={this.handleOnClick} />}

        {/* <ImageGallery query={this.state.query} /> */}
        

        <ToastContainer />
        
      </Layout>
    );
  }
};
