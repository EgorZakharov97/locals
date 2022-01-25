import { CollectionConfig, FieldHook } from 'payload/types';

const RelationshipA: CollectionConfig = {
  slug: 'relationship-a',
  access: {
    read: () => true,
  },
  labels: {
    singular: 'Relationship A',
    plural: 'Relationship A',
  },
  fields: [
    {
      name: 'post',
      label: 'Post',
      type: 'relationship',
      relationTo: 'post',
    },
    {
      name: 'demoHiddenField',
      type: 'text',
      hidden: true,
    },
  ],
  timestamps: true,
};

export default RelationshipA;