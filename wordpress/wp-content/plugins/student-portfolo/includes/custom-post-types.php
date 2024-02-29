
<?php
function portfolio_show_register_student_post_type() {
$args = array(
'labels' => array(
'name' => 'Students',
'singular_name' => 'Student',
),
'public' => true,
'has_archive' => true,
'supports' => array('title', 'editor', 'thumbnail'),
'menu_icon' => 'dashicons-welcome-learn-more',
);

register_post_type('student', $args);
}

add_action('init', 'portfolio_show_register_student_post_type');