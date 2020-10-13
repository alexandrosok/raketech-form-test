<?php
/**
 * Plugin Name: Raketech Form Test
 * Description:
 * Version: 1.0.0
 * License:
 * Author: Alexandros Okkalides
 * Author URI:
 */

add_action('admin_bar_menu', 'my_admin_bar_menu', 100);
function my_admin_bar_menu($wp_admin_bar)
{
    $wp_admin_bar->add_menu(array(
        'id' => 'menu_id',
        'title' => __('Raketech Form Test'),
        'href' => admin_url('admin.php?page=taketech-form-test'),
    ));
}

function menuCallBack()
{
    add_menu_page('Raketech Form Test',
        'Raketech Form Test',
        'manage_options',
        'raketech_form_test',
        'raketech_form_test_init',
        '');
}

add_action('admin_menu', 'menuCallBack');

function raketech_form_test_init()
{
    require_once __DIR__ . '/dist/index.html';
}

add_action('rest_api_init', function () {
    $Router = new Raketech_Form_Test\Router();
    $Router->InitializeRoutes();
});

/**
 * Enqueueing the JS and CSS for our plugin settings page
 */
add_action('admin_enqueue_scripts', function ($page) {
    $menu_slug = 'raketech_form_test';

    if ($menu_slug === substr($page, -1 * strlen($menu_slug))) {
        wp_register_script('raketest_form_test_handle', null);
        wp_localize_script('raketest_form_test_handle', 'raketech_form_test_options',
            [
                'siteUrl' => get_site_url(),
                'isMultiSite' => is_multisite(),
                'locale' => substr(get_locale(), 0, 2)
            ]);
        wp_enqueue_script('raketest_form_test_handle');
    }
});
