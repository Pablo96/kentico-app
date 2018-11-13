import { ContentItem, Fields} from 'kentico-cloud-delivery';

export class Blog extends ContentItem {
    public title: Fields.TextField;
    public content: Fields.RichTextField;

    constructor() {
        super({
            propertyResolver: (fieldName) => {
            if (fieldName === 'title') {
                return 'title';
            }
            if (fieldName === 'content') {
                return 'content';
            }
        }
        });
    }
}