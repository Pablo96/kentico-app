import { ContentItem, Fields} from 'kentico-cloud-delivery';

export class ArtPreview extends ContentItem {
    public title: Fields.TextField;
    public art: Fields.AssetsField;
    public description: Fields.TextField;
    public date: Fields.DateTimeField;

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