import { createClient }from 'next-sanity';
import ImageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: 'k15jnl8j',
    dataset: 'production',
    apiVersion: '2024-01-08',
    useCdn: true,
})
const imgBuilder = ImageUrlBuilder (client);
export function urlFor (source) {
    return imgBuilder.image (source);
}