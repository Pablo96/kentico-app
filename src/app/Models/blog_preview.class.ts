import { ContentItem, Fields} from 'kentico-cloud-delivery';

export class BlogPreview extends ContentItem {
    public title: Fields.TextField;
    public description: Fields.TextField;
    public date: Fields.DateTimeField;
    public serie: Fields.TaxonomyField;

    constructor() {
        super({
            propertyResolver: (fieldName) => {
            if (fieldName === 'title') {
                return 'title'; // binds 'condition string name' from Kentico cloud to property of this class
            }
            if (fieldName === 'desription') {
                return 'description';
            }
            if (fieldName === 'date') {
                return 'date';
            }
            if (fieldName === 'blogsseries') {
                return 'serie';
            }
        }
        });
    }
}