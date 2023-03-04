import { Component } from 'react';
// import { fetchImages } from '../../services/API';

import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Loader } from '../Loader/Loader';

import { Gallery } from './ImageGallery.styled'

export class ImageGallery extends Component {
    state = {
        images: [],
        query: null,
        loading: false,
        error: null,
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.query !== this.props.query || prevProps.page !== this.props.page) {
            // this.setState({ query });
            // console.log(prevProps.query);
            // console.log(this.props.query);

            this.setState({loading: true});

            setTimeout(()=> { 
            fetch(`https://pixabay.com/api/?q=${this.props.query}&page=${this.props.page}&key=32948391-41e06186a421161778854822b&image_type=photo&orientation=horizontal&per_page=12`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
            })
            .then(query => this.setState({ query }))
            .catch(error => this.setState({ error }))
            .finally(() => this.setState({ loading: false }));
        }, 5000);

            // fetch(`https://pixabay.com/api/?q=${this.props.query}&page=${this.props.page}&key=32948391-41e06186a421161778854822b&image_type=photo&orientation=horizontal&per_page=12`)
            // .then(res => res.json())
            // // .then(console.log);
            // .then(query => this.setState({ query }))
            // .finally(() => this.setState({loading: false}));
        }
    }

    // this.setState.query && 

    render() {
        return <>

            {this.state.error && <div>{this.state.error.message}</div>}
            {this.state.loading && <Loader />}

            {this.setState.query && (
                <Gallery>
                    {this.state.images.map(image => {
                        return <ImageGalleryItem key={image.id} image={image} />
                    })}
                </Gallery>
            )}

        </>
    }
}