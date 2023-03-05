import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled'

export const ImageGallery = ({ image }) => {
    return <Gallery>
            {image.map(img => {
                return <ImageGalleryItem 
                key={img.id}  
                smallImage={img.webformatURL}
                largeImage={img.largeImageURL}
                tags={img.tags} />
            })}
            </Gallery>
}

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired,
            tags: PropTypes.string.isRequired,
        })
    ).isRequired,
};