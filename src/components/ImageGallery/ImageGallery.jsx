import { Component } from 'react';
import { toast } from 'react-toastify';

import { fetchImages } from '../../services/API';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Loader } from '../Loader/Loader';
import { Button } from '../Button/Button';

import { Gallery } from './ImageGallery.styled'

export class ImageGallery extends Component {
    state = {
        // images: [],
        hits: [],
        query: '',
        page: 1,
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

                this.setState(prevState=>({ hits: [...prevState.hits, ...hits],
                showLoadMore: page < Math.ceil(totalHits/12)
                })) 
            } catch (error) {
                this.setState({ status: 'rejected' });
            }

            // fetch(`https://pixabay.com/api/?q=${this.props.query}&page=${this.props.page}&key=32948391-41e06186a421161778854822b&image_type=photo&orientation=horizontal&per_page=12`)
            // .then(response => {
            //     if (response.ok) {
            //         return response.json()
            //     }
            //     return Promise.reject(
            //         new Error('No this query ...'),
            //     );
            // })
            // .then(query => this.setState({ query, status:'resolved' }))
            // .catch(error => this.setState({ error, status: 'rejected' }))
        }
    }

    handleOnClick = () => {
        this.setState(prevState => ({ page: prevState.page + 1, }));
    }

    render() {

        const {status, hits} = this.state;
        // const {status, error, images} = this.state;

        if (status === 'idel') {
            return toast.error('No results were found for your request');
        }

        if (status === 'pending') {
            return <Loader />
        }

        if (status === 'rejected') {
            return toast.error('Sorry, something went wrong. Please, try again');
        }

        if (status === 'resolved') {
            return <Gallery>
            {hits.map((hit, id) => {
                return <ImageGalleryItem key={id} image={hit} />
            })}
        </Gallery>
        }

        <Button onClick={this.handleOnClick} />
        // {showLoadMore && <Button onClick={this.handleOnClick} />}
        

        // return <>

        //     {this.state.error && <div>{this.state.error.message}</div>}
        //     {this.state.loading && <Loader />}

        //     {this.setState.query && (
        //         <Gallery>
        //             {this.state.images.map(image => {
        //                 return <ImageGalleryItem key={image.id} image={image} />
        //             })}
        //         </Gallery>
        //     )}

        // </>
    }
}