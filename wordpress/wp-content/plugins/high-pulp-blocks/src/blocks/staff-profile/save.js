import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function save({ attributes }) {
	const { name, jobTitle, imageUrl, textColor, backgroundColor, imageSize } = attributes;

	return (
		<div {...useBlockProps.save()} style={{ color: textColor, backgroundColor: backgroundColor }}>
			{imageUrl && (
				<img src={imageUrl} alt={__('Profile Picture', 'my-staff-profile-block')} style={{ width: imageSize, height: 'auto' }} />
			)}
			<RichText.Content tagName="h3" value={name} />
			<RichText.Content tagName="p" value={jobTitle} />
		</div>
	);
}
