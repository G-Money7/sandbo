import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
	const { backgroundColor, textSize, imageSize, profilePicture, name, jobTitle } = attributes;

	const blockProps = useBlockProps.save({
		style: { backgroundColor: backgroundColor, fontSize: textSize }
	});

	return (
		<div {...blockProps}>
			{profilePicture && (
				<img src={profilePicture} alt="Profile" style={{ width: imageSize + '%' }} />
			)}
			<RichText.Content tagName="h4" value={name} />
			<RichText.Content tagName="p" value={jobTitle} />
		</div>
	);
}
