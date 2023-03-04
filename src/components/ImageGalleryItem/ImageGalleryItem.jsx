import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled'

export const ImageGalleryItem = ({ image, alt }) => {
    return <GalleryItem>
        <GalleryItemImage src={image} alt={alt} />
    </GalleryItem>
}