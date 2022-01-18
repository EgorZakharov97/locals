import { buildConfig } from 'payload/config';
import path from 'path';
import Categories from './collections/Categories';
import Posts from './collections/Posts';
import Tags from './collections/Tags';
import Blogger from './collections/Blogger';
import Business from './collections/Business';
import Admin from './collections/Admin';
import Media from './collections/Media';

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Admin.slug,
  },
  collections: [
    Categories,
    Posts,
    Tags,
    Blogger,
    Business,
    Admin,
    Media,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  },
});
