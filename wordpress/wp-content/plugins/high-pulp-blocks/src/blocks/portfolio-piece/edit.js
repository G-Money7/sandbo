import { useBlockProps } from '@wordpress/block-editor';

function Edit() {
	const blockProps = useBlockProps();

	// Ideally, fetch a preview of the ACF data here or provide a static placeholder

	return (
		<div {...blockProps}>
			<p>Placeholder for piece card. Actual content will be displayed on the front end.</p>
		</div>
	);
}

export default Edit;
