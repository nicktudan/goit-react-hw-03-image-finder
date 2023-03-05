import PropTypes from 'prop-types';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled'

export const ImageGalleryItem = ({ smallImage, tags }) => {
    return <GalleryItem>
        <GalleryItemImage src={smallImage} alt={tags} />
    </GalleryItem>
}

ImageGalleryItem.propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}