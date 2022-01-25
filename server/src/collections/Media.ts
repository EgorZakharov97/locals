import { CollectionConfig, CollectionBeforeChangeHook, CollectionBeforeValidateHook } from 'payload/types';


const checkForUploadSizesHook: CollectionBeforeChangeHook = ({ req: { payloadUploadSizes }, data }) => {
  if (typeof payloadUploadSizes === 'object') {
    return {
      ...data,
      foundUploadSizes: true,
    };
  }

  return data;
};

const applyAuthorHook: CollectionBeforeValidateHook = ({ req, data }) => {
  console.log(data)
  return {
    ...data,
    author: {
      relationTo: req.user.collection,
      value: req.user.id,
    },
  };
}

const Media: CollectionConfig = {
  slug: 'media',
  labels: {
    singular: 'Media',
    plural: 'Media',
  },
  access: {
    read: () => true,
  },
  admin: {
    enableRichTextRelationship: true,
    description: 'No selfies please',
  },
  hooks: {
    beforeChange: [
      checkForUploadSizesHook,
    ],
    beforeValidate: [
      applyAuthorHook,
    ]
  },
  upload: {
    staticURL: '/media',
    staticDir: './media',
    adminThumbnail: ({ doc }) => `api/media/${doc.filename}`,
    imageSizes: [
      {
        name: 'maintainedAspectRatio',
        width: 1024,
        height: null,
        crop: 'center',
      },
      {
        name: 'mobile',
        width: 320,
        height: 240,
        crop: 'center',
      },
      {
        name: 'icon',
        width: 16,
        height: 16,
      },
    ],
  },
  fields: [
    {
      name: 'alt',
      label: 'Alt Text',
      type: 'text',
      required: true,
    },
    {
      name: 'foundUploadSizes',
      type: 'checkbox',
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: ['admin', 'business', 'user'],
      hidden: true,
    }
  ],
  timestamps: true,
};

export default Media;