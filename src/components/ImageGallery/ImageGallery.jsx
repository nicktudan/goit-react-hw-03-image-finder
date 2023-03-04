import { Component } from 'react';
import { fetchImages } from '../../services/API';

import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

import { Gallery } from './ImageGallery.styled'

export class ImageGallery extends Component {
    state = {
        images: [],
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.query !== this.props.query || prevProps.page !== this.props.page) {
            // this.setState({ query });
        }
    }

    render() {
        return <Gallery>
            {images.map(({ id, webformatURL, tags }) => {
                return <ImageGalleryItem key={id} image={webformatURL} alt={tags} />
            })}
        </Gallery>
    }
}