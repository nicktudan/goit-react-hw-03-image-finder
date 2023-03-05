import PropTypes from 'prop-types';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled'

export const ImageGalleryItem = ({ image, alt }) => {
    return <GalleryItem>
        <GalleryItemImage src={image} alt={alt} />
    </GalleryItem>
}

ImageGalleryItem.propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}