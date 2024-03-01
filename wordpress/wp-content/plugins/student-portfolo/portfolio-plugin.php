<?php
/**
 * Plugin Name:Student Portfolio Plugin
 * Plugin URI: http://example.com/my-student-portfolio-plugin
 * Description: A custom plugin to display student portfolios.
 * Version: 1.0
 * Author: Gavin s
 * Author URI: http://example.com
 * License: GPL2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: portfolio-plugin
 */


// Prevent direct file access
defined( 'ABSPATH' ) || exit;


function my_student_portfolio_register_post_type() {

}
add_action( 'init', 'my_student_portfolio_register_post_type' );

function my_student_portfolio_register_blocks() {

    wp_enqueue_script(
        'my-student-portfolio-editor-script',
        plugins_url( 'path/to/your/editor-script.js', __FILE__ ),
        array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'path/to/your/editor-script.js' )
    );

    wp_enqueue_style(
        'my-student-portfolio-editor-style',
        plugins_url( 'path/to/your/editor-style.css', __FILE__ ),
        array(),
        filemtime( plugin_dir_path( __FILE__ ) . 'path/to/your/editor-style.css' )
    );
}
add_action( 'init', 'my_student_portfolio_register_blocks' );

function my_student_portfolio_enqueue_scripts() {

    wp_enqueue_style(
        'my-student-portfolio-style',
        plugins_url( 'path/to/your/style.css', __FILE__ ),
        array(),
        filemtime( plugin_dir_path( __FILE__ ) . 'path/to/your/style.css' )
    );

    wp_enqueue_script(
        'my-student-portfolio-script',
        plugins_url( 'path/to/your/script.js', __FILE__ ),
        array(),
        filemtime( plugin_dir_path( __FILE__ ) . 'path/to/your/script.js' ),
        true
    );
}
add_action( 'wp_enqueue_scripts', 'my_student_portfolio_enqueue_scripts' );


function my_student_portfolio_activate() {
    // Actions to perform on plugin activation, like setting up default settings or flushing rewrite rules
    flush_rewrite_rules();
}
register_activation_hook( __FILE__, 'my_student_portfolio_activate' );


