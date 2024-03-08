<?php

/**
 * Plugin Name: My Student Portfolio Plugin
 * Plugin URI: http://example.com/my-student-portfolio-plugin
 * Description: A custom plugin to display student portfolios.
 * Version: 1.0
 * Author: Your Name
 * Author URI: http://example.com
 * License: GPL2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: my-student-portfolio-plugin
 */

// Prevent direct access to the file
if (!defined('ABSPATH')) {
    exit;
}

// Register Custom Post Type
require_once plugin_dir_path(__FILE__) . 'includes/custom-post-types.php';

// Include the file for meta boxes or ACF field definitions
require_once plugin_dir_path(__FILE__) . 'includes/meta-boxes.php'; // If using manual meta boxes
// or
// require_once plugin_dir_path(__FILE__) . 'includes/acf-fields.php'; // If using ACF for fields

// Register Dynamic Blocks
require_once plugin_dir_path(__FILE__) . 'blocks/student-list/render.php';

// Enqueue scripts and styles
function my_student_portfolio_enqueue_scripts()
{
    // Enqueue frontend styles and scripts
    wp_enqueue_style('my-student-portfolio-style', plugins_url('/public/styles/public-style.css', __FILE__));
    wp_enqueue_script('my-student-portfolio-script', plugins_url('/public/scripts/public-script.js', __FILE__), array('jquery'), '1.0', true);

    // Enqueue block editor styles and scripts
    // This is where you'd enqueue block-specific assets, but they're mainly handled via block.json
}

add_action('wp_enqueue_scripts', 'my_student_portfolio_enqueue_scripts');
add_action('enqueue_block_editor_assets', 'my_student_portfolio_enqueue_scripts');

// Activation Hook
function my_student_portfolio_activate()
{
    // Trigger any actions that need to occur on plugin activation, such as populating default settings
    // This may include flushing rewrite rules for your custom post type to ensure permalinks work
    flush_rewrite_rules();
}

register_activation_hook(__FILE__, 'my_student_portfolio_activate');

// Deactivation Hook
function my_student_portfolio_deactivate()
{
    // Clean up any settings or temporary data, flush rewrite rules again to remove custom post type rules
    flush_rewrite_rules();
}

register_deactivation_hook(__FILE__, 'my_student_portfolio_deactivate');
