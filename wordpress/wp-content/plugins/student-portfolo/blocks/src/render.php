<?php

function portfolio_show_render_students_block($attributes) {
$args = array(
'post_type' => 'student',
'posts_per_page' => -1,
);

$query = new WP_Query($args);

if (!$query->have_posts()) {
return 'No students found.'; // Basic check for content existence
}

$output = '<div class="students-list">';

    while ($query->have_posts()) {
    $query->the_post();
    $program = get_field('program'); // Using ACF's get_field() function. Replace with get_post_meta() if not using ACF.
    $linkedin_link = get_field('linkedin_link');
    // Add other fields as needed

    // Debugging: Check if fields are correctly fetched
    // error_log(print_r($program, true)); // Check PHP error log to see if the program is fetched correctly

    $output .= '<div class="student">';
        $output .= '<h2>' . get_the_title() . '</h2>'; // Post title
        $output .= '<p>Program: ' . esc_html($program) . '</p>';
        // Append other fields to $output
        $output .= '</div>';
    }

    $output .= '</div>';

wp_reset_postdata(); // Important: Reset global post data

return $output;
}

register_block_type('portfolio-show/students-list', array(
'render_callback' => 'portfolio_show_render_students_block',
));
