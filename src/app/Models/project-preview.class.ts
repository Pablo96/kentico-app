import { ContentItem, Fields} from 'kentico-cloud-delivery';

export class ProjectPreview extends ContentItem {
    public title: Fields.TextField;
    public image: Fields.AssetsField;
    public date: Fields.DateTimeField;

    constructor() {
        super({
            propertyResolver: (fieldName) => {
                if (fieldName === 'title') {
                    return 'title'; // binds 'condition string name' from Kentico cloud to property of this class
                }
                if (fieldName === 'date') {
                    return 'date';
                }
                if (fieldName === 'preiewimage') {
                    return 'image';
                }
            }
        })
    }
}
