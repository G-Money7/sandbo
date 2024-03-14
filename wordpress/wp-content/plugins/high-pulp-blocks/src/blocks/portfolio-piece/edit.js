import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, ServerSideRender } from '@wordpress/block-editor';
import { PanelBody, ColorPicker } from '@wordpress/components';
import metadata from './block.json';

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();

	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody title={__('Color Settings', 'portfolio-piece')}>
					<p>{__('Card Background Color:', 'portfolio-piece')}</p>
					<ColorPicker
						color={attributes.cardColor}
						onChangeComplete={(value) => setAttributes({ cardColor: value.hex })}
						disableAlpha
					/>
					<p>{__('Heading Color:', 'portfolio-piece')}</p>
					<ColorPicker
						color={attributes.headingColor}
						onChangeComplete={(value) => setAttributes({ headingColor: value.hex })}
						disableAlpha
					/>
					<p>{__('Text Color:', 'portfolio-piece')}</p>
					<ColorPicker
						color={attributes.textColor}
						onChangeComplete={(value) => setAttributes({ textColor: value.hex })}
						disableAlpha
					/>
				</PanelBody>
			</InspectorControls>

			<ServerSideRender
				block={metadata.name}
				attributes={attributes}
			/>
		</div>
	);
}
