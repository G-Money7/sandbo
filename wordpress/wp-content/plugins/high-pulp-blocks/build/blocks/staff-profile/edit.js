import { InspectorControls, MediaUpload, MediaUploadCheck, RichText, useBlockProps, PanelBody, RangeControl, ColorPalette } from '@wordpress/block-editor';
import { Panel, Button } from '@wordpress/components';
import { useState } from '@wordpress/element';

function Edit({ attributes, setAttributes }) {
	const { backgroundColor, textSize, imageSize, profilePicture, name, jobTitle } = attributes;

	// Handlers for attribute changes
	const onImageSelect = (media) => {
		setAttributes({ profilePicture: media.url });
	};

	// Use useState for local state
	const [tempImageUrl, setTempImageUrl] = useState(profilePicture);

	return (
		<>
			<InspectorControls>
				<Panel>
					<PanelBody title="Background Color">
						<ColorPalette
							value={backgroundColor}
							onChange={(color) => setAttributes({ backgroundColor: color })}
						/>
					</PanelBody>
					<PanelBody title="Text Size">
						<RangeControl
							value={textSize}
							onChange={(size) => setAttributes({ textSize: size })}
							min={12}
							max={100}
						/>
					</PanelBody>
					<PanelBody title="Image Size">
						<RangeControl
							value={imageSize}
							onChange={(size) => setAttributes({ imageSize: size })}
							min={10}
							max={100}
						/>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<div {...useBlockProps()} style={{ backgroundColor, fontSize: textSize }}>
				<MediaUploadCheck>
					<MediaUpload
						onSelect={(media) => {
							onImageSelect(media);
							setTempImageUrl(media.url);
						}}
						allowedTypes={['image']}
						render={({ open }) => (
							<Button className={'button button-large'} onClick={open}>
								{!tempImageUrl ? 'Select Image' : <img src={tempImageUrl} alt="Profile" style={{ width: imageSize + '%' }} />}
							</Button>
						)}
					/>
				</MediaUploadCheck>
				<RichText
					tagName="h4"
					placeholder="Name"
					value={name}
					onChange={(value) => setAttributes({ name: value })}
					style={{ fontSize: textSize }}
				/>
				<RichText
					tagName="p"
					placeholder="Job Title"
					value={jobTitle}
					onChange={(value) => setAttributes({ jobTitle: value })}
					style={{ fontSize: textSize }}
				/>
			</div>
		</>
	);
}

export default Edit;
