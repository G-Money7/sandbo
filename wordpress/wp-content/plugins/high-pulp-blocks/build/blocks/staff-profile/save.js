import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const blockProps = useBlockProps.save();
	const { profilePicture, name, jobTitle } = attributes;

	return (
		<div {...blockProps}>
			{profilePicture && <img src={profilePicture} alt="Profile" />}
			<RichText.Content tagName="h3" value={name} />
			<RichText.Content tagName="p" value={jobTitle} />
		</div>
	);
}
