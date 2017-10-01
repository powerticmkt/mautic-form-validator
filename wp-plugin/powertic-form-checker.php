<?php
/*
Plugin Name: Powertic Mail Check
Plugin URI: https://powertic.com
Description: Valida o e-mail digitado em um campo do tipo email
Author: Powertic
Version: 1.0.8
Author URI: https://powertic.com
*/

wp_register_script( 'jquery', 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js' , '', '', false );
wp_enqueue_script( 'powertic-mautic-form-validator' );
wp_enqueue_style("query-confirm", "https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.2/jquery-confirm.min.css");



add_action( 'wp_footer', 'mailcheck_js' );

?>
