<?php
function gs_portfolio_piece_render_callback($block_attributes, $content) {
	$portfolio_posts = new WP_Query(array(
			'post_type' => 'portfolio_piece',
			'posts_per_page' => -1,
	));

	if (!$portfolio_posts->have_posts()) {
		return 'No portfolio pieces found.';
	}

	$output = '<div class="gs-portfolio">';
	while ($portfolio_posts->have_posts()) {
		$portfolio_posts->the_post();
		// Customize as needed. Use get_post_meta() to retrieve meta fields.
		$output .= sprintf(
				'<div class="portfolio-item"><h2><a href="%s">%s</a></h2></div>',
				esc_url(get_permalink()),
				esc_html(get_the_title())
		);
	}
	$output .= '</div>';

	wp_reset_postdata();

	return $output;
}

