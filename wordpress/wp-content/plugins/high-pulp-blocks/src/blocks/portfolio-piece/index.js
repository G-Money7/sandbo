import { registerBlockType } from '@wordpress/blocks';
import './editor.scss'; // For editor styles
import './style.scss'; // For front-end styles
import Edit from './edit';
import metadata from './block.json';

registerBlockType(metadata.name, {
	title: metadata.title,
	category: metadata.category,
	attributes: metadata.attributes,
	supports: metadata.supports,
	example: metadata.example,
	edit: Edit,
});
