import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled'

export const ImageGalleryItem = ({ image }) => {
    return <GalleryItem>
        <GalleryItemImage src={image.webformatURL} alt={image.tags} />
    </GalleryItem>
}