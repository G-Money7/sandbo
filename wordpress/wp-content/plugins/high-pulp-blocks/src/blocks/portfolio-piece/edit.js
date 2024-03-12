/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

import { TextControl } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {

	const { portfolioItemId } = attributes;


	const onChangePortfolioItemId = (id) => {
		setAttributes({ portfolioItemId: id });
	};

	return (
		<div {...useBlockProps()}>
			<p>{ __('Portfolio Piece – hello from the editor!', 'portfolio-piece') }</p>
			<TextControl
				label={__('Portfolio Item ID:', 'portfolio-piece')}
				value={portfolioItemId}
				onChange={onChangePortfolioItemId}
				type="number"
			/>
			<p>{__('Enter the ID of the portfolio item you wish to display.', 'portfolio-piece')}</p>
		</div>
	);
}
