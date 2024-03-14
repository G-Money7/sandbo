<?php
function render_portfolio_piece_block($attributes, $content) {
	// Start the block output.
	$output = '<div class="portfolio-piece-block">';

	// Hard-coded portfolio pieces (replace with your own content)
	$portfolio_pieces = array(
		array(
			'image' => 'http://example.com/image1.jpg',
			'title' => 'Portfolio Piece 1',
			'link' => 'http://example.com/portfolio-piece-1',
			'description' => 'Description for Portfolio Piece 1',
		),
		array(
			'image' => 'http://example.com/image2.jpg',
			'title' => 'Portfolio Piece 2',
			'link' => 'http://example.com/portfolio-piece-2',
			'description' => 'Description for Portfolio Piece 2',
		),
		// Add more portfolio pieces as needed
	);

	// Loop through each hard-coded portfolio piece
	foreach ($portfolio_pieces as $piece) {
		$output .= '<div class="portfolio-piece">';
		// Image
		if (!empty($piece['image'])) {
			$output .= '<img src="' . esc_url($piece['image']) . '" alt="' . esc_attr($piece['title']) . '" />';
		}
		// Title
		if (!empty($piece['title'])) {
			$output .= '<h3>' . esc_html($piece['title']) . '</h3>';
		}
		// Link
		if (!empty($piece['link'])) {
			$output .= '<a href="' . esc_url($piece['link']) . '" class="portfolio-piece-link">View More</a>';
		}
		// Description
		if (!empty($piece['description'])) {
			$output .= '<div class="portfolio-piece-description">' . esc_html($piece['description']) . '</div>';
		}
		$output .= '</div>'; // Close .portfolio-piece
	}

	// Close the block output.
	$output .= '</div>'; // Close .portfolio-piece-block

	return $output;
}
