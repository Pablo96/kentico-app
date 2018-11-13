import { ContentItem, Fields} from 'kentico-cloud-delivery';

export class Blog extends ContentItem {
    public title: Fields.TextField;
    public content: Fields.RichTextField;
    public date: Fields.DateTimeField;
    public slug: Fields.UrlSlugField;

    constructor() {
        super({
            propertyResolver: (fieldName) => {
            if (fieldName === 'title') {
                return 'title';
            }
            if (fieldName === 'content') {
                return 'content';
            }
            if (fieldName === 'date') {
                return 'date';
            }
            if (fieldName === 'slug') {
                return 'slug';
            }
        }
        });
    }
}