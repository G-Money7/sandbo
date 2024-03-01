import { registerBlockType } from '@wordpress/blocks';
import edit from './edit';

import metadata from '/wordpress/wp-content/plugins/student-portfolo/blocks/src/block.json';

registerBlockType(metadata, {
    edit,
    save: () => null, // Rendered via PHP
});
