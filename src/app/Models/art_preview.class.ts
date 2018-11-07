import { ContentItem, Fields} from 'kentico-cloud-delivery';

export class ArtPreview extends ContentItem {
    public description: Fields.TextField;
    public date: Fields.DateTimeField;
    public art: Fields.AssetsField;
    public title: Fields.TextField;

    constructor() {
        super({
            propertyResolver: (fieldName) => {
            if (fieldName === 'title') {
                return 'title'; // binds 'condition string name' from Kentico cloud to property of this class
            }
            if (fieldName === 'description') {
                return 'description'
            }
            if (fieldName === 'image') {
                return 'art';
            }
            if (fieldName === 'date') {
                return 'date';
            }
        }
        });
    }
}