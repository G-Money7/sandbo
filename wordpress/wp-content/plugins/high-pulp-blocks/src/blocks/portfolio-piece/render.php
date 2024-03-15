<?php
/**
 * Render callback for the portfolio list block.
 * Displays portfolio pieces with an image and a link.
 */

$query = new WP_Query([
		'post_type' => 'pieces', // Corrected post type key
		'posts_per_page' => -1, // Fetch all posts
		'orderby' => 'title',
		'order' => 'ASC',
]);

if ($query->have_posts()): ?>
	<div <?php echo get_block_wrapper_attributes(); ?>>
		<?php while ($query->have_posts()): $query->the_post();
			$piece_picture = get_field('piece_picture'); // ACF field for the image
			$piece_link = get_field('piece_link'); // ACF field for the URL
			?>

			<div class="portfolio-piece">
				<a href="<?php echo esc_url($piece_link['url']); ?>" target="<?php echo esc_attr($piece_link['target'] ?? '_self'); ?>">
					<div class="portfolio-piece-image">
						<?php if ($piece_picture): ?>
							<img src="<?php echo esc_url($piece_picture['url']); ?>" alt="<?php echo esc_attr($piece_picture['alt'] ?? get_the_title()); ?>">
						<?php endif; ?>
					</div>
					<div class="portfolio-piece-info" style="background-color: <?php echo esc_attr($attributes['cardColor']); ?>">
						<h3 class="portfolio-piece-title" style="color: <?php echo esc_attr($attributes['headingColor']); ?>"><?php the_title(); ?></h3>
						<div class="portfolio-piece-description" style="color: <?php echo esc_attr($attributes['textColor']); ?>">
							<?php the_excerpt(); ?>
						</div>
					</div>
				</a>
			</div>

		<?php endwhile; ?>
	</div>
<?php endif; wp_reset_postdata(); ?>
