<?php
// Add to your functions.php or a custom plugin
function portfolio_show_add_student_meta_boxes() {
    add_meta_box(
        'student_details',
        'Student Details',
        'portfolio_show_student_details_callback',
        'student'
    );
}

add_action('add_meta_boxes', 'portfolio_show_add_student_meta_boxes');

function portfolio_show_student_details_callback($post) {
    // Use nonce for verification
    wp_nonce_field(basename(__FILE__), 'student_details_nonce');

    // Fields setup
    $fields = [
        'program' => 'Program',
        'linkedin_link' => 'LinkedIn Link',
        'portfolio_link' => 'Portfolio Link',
        'student_picture' => 'Picture of the Student',
        'work_brand_picture' => 'Picture of their Work/Brand',
        'pronouns' => 'Pronouns',
    ];

    // Output fields
    foreach ($fields as $key => $label) {
        $value = get_post_meta($post->ID, $key, true);
        echo '<label for="' . esc_attr($key) . '">' . esc_html($label) . ':</label>';
        echo '<input type="text" id="' . esc_attr($key) . '" name="' . esc_attr($key) . '" value="' . esc_attr($value) . '" size="25" />';
        echo '<br/>';
    }
}

// Save the meta box content
function portfolio_show_save_student_meta($post_id) {
    // Check save status and nonce
    if (!isset($_POST['student_details_nonce']) || !wp_verify_nonce($_POST['student_details_nonce'], basename(__FILE__)) || defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return $post_id;
    }

    // Fields to save
    $fields = [
        'program',
        'linkedin_link',
        'portfolio_link',
        'student_picture',
        'work_brand_picture',
        'pronouns',
    ];

    foreach ($fields as $field) {
        if (isset($_POST[$field])) {
            update_post_meta($post_id, $field, sanitize_text_field($_POST[$field]));
        }
    }
}

add_action('save_post', 'portfolio_show_save_student_meta');
