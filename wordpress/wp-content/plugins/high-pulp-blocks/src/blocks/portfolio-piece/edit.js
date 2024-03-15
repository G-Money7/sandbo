import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';
import { BlockSettings } from "./BlockSettings";

export default function Edit({ attributes, setAttributes }) {
	// Hypothetical check and usage of piece_picture attribute
	const imageUrl = attributes.piece_picture ? attributes.piece_picture.url : '';

	return (
		<div {...useBlockProps()}>
			<BlockSettings attributes={attributes} setAttributes={setAttributes} />
			<div className="flip-card">
				<div className="flip-card-inner">
					<div className="flip-card-front">
						{/* Checking and using imageUrl if available */}
						{imageUrl ? (
							<img src={imageUrl} alt="Piece Preview" />
						) : (
							<p>No image selected</p> // Placeholder when no image is available
						)}
					</div>
					<div className="flip-card-back" style={{ backgroundColor: attributes.cardColor }}>
						<h3 className="name" style={{ color: attributes.headingColor }}>Red Forman</h3>
						<div className="position" style={{ color: attributes.textColor }}>Manager</div>
						<div className="bio" style={{ color: attributes.textColor }}>
							<p>If I Was A Bird, I’d Fly Into A Ceiling Fan.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
