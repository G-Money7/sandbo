<?php
function render_piece_card_block($block_attributes, $content) {
	// Assuming 'piece' is a post object or similar. Adjust query as needed.
	$pieces = get_posts(array('post_type' => 'piece'));

	if (empty($pieces)) {
		return 'No pieces found.';
	}

	$output = '<div class="piece-cards">';
	foreach ($pieces as $piece) {
		$picture = get_field('piece_picture', $piece->ID);
		$title = get_field('piece_title', $piece->ID);
		$link = get_field('piece_link', $piece->ID);
		$description = get_field('piece_description', $piece->ID);

		$output .= sprintf(
			'<div class="piece-card"><img src="%s" alt="%s"><h3>%s</h3><p>%s</p><a href="%s">Learn More</a></div>',
			esc_url($picture),
			esc_attr($title),
			esc_html($title),
			esc_html($description),
			esc_url($link)
		);
	}
	$output .= '</div>';

	return $output;
}
