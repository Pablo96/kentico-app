import { DeliveryClient, TypeResolver } from 'kentico-cloud-delivery';
import { BlogPreview } from '../Models/blog_preview.class';

export function DeliveryClientFactory() {

    return new DeliveryClient({
        projectId: 'b7fdad86-853f-00d5-a02a-9cd75899664b',
        typeResolvers: [
            new TypeResolver('blogpreview', () => new BlogPreview()),
        ]
    });
}

export const DeliveryClientProvider = {
    provide: DeliveryClient,
    useFactory: DeliveryClientFactory,
    deps: []
};
