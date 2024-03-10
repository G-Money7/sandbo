import { useBlockProps, MediaUpload, MediaUploadCheck, RichText } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
	const { profilePicture, name, jobTitle } = attributes;

	const onSelectImage = (media) => {
		setAttributes({ profilePicture: media.url });
	};

	return (
		<div {...blockProps}>
			<MediaUploadCheck>
				<MediaUpload
					onSelect={onSelectImage}
					allowedTypes={['image']}
					value={profilePicture}
					render={({ open }) => (
						<Button onClick={open} isDefault>
							{profilePicture ? <img src={profilePicture} alt="Profile" /> : 'Choose an image'}
						</Button>
					)}
				/>
			</MediaUploadCheck>
			<RichText
				tagName="h3" // The tag here could be "div" or another tag for the name.
				value={name}
				onChange={(value) => setAttributes({ name: value })}
				placeholder="Enter name..."
			/>
			<RichText
				tagName="p" // The tag here could be "div" or another tag for the job title.
				value={jobTitle}
				onChange={(value) => setAttributes({ jobTitle: value })}
				placeholder="Enter job title..."
			/>
		</div>
	);
}

export default Edit;
