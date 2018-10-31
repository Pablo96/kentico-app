import { ContentItem, FieldType } from "kentico-cloud-delivery";

export class BlogPreview extends ContentItem {
    public title: FieldType.Text;
    public description: FieldType.RichText;
    public date: FieldType.DateTime;

    constructor() {
        super({
            propertyResolver: (fieldName) => {
              if (fieldName === 'title') {
                return 'title'; // binds 'title' (in the condition) response from Kentico cloud to 'title' property of this class
              }
              if (fieldName === 'description') {
                return 'description';
              }
              if (fieldName === 'date') {
                return 'date';
              }
            }
          });
    }
}