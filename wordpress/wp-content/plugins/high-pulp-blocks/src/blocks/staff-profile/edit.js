import { useBlockProps, MediaUpload, MediaUploadCheck, RichText, InspectorControls } from '@wordpress/block-editor';
import { Button, PanelBody, ColorPicker, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function Edit({ attributes, setAttributes }) {
	const { name, jobTitle, imageUrl, textColor, backgroundColor, imageSize } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Settings', 'my-staff-profile-block')} initialOpen={true}>
					<p>{__('Text Color', 'my-staff-profile-block')}</p>
					<ColorPicker
						color={textColor}
						onChangeComplete={(value) => setAttributes({ textColor: value.hex })}
						disableAlpha
					/>
					<p>{__('Background Color', 'my-staff-profile-block')}</p>
					<ColorPicker
						color={backgroundColor}
						onChangeComplete={(value) => setAttributes({ backgroundColor: value.hex })}
						disableAlpha
					/>
					<RangeControl
						label={__('Image Size', 'my-staff-profile-block')}
						value={imageSize}
						onChange={(value) => setAttributes({ imageSize: value })}
						min={100}
						max={300}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()} style={{ color: textColor, backgroundColor: backgroundColor }}>
				<MediaUploadCheck>
					<MediaUpload
						onSelect={(media) => setAttributes({ imageUrl: media.url })}
						allowedTypes={['image']}
						value={imageUrl}
						render={({ open }) => (
							<Button onClick={open}>
								{imageUrl ? __('Change Profile Picture', 'my-staff-profile-block') : __('Upload Profile Picture', 'my-staff-profile-block')}
							</Button>
						)}
					/>
				</MediaUploadCheck>
				{imageUrl && (
					<img src={imageUrl} alt={__('Profile Picture', 'my-staff-profile-block')} style={{ width: imageSize, height: 'auto' }} />
				)}
				<RichText
					tagName="h3"
					value={name}
					placeholder={__('Name', 'my-staff-profile-block')}
					onChange={(newName) => setAttributes({ name: newName })}
					style={{ color: textColor }}
				/>
				<RichText
					tagName="p"
					value={jobTitle}
					placeholder={__('Job Title', 'my-staff-profile-block')}
					onChange={(newJobTitle) => setAttributes({ jobTitle: newJobTitle })}
					style={{ color: textColor }}
				/>
			</div>
		</>
	);
}
