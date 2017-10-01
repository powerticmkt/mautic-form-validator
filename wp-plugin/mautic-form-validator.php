<?php
/*
Plugin Name: Mautic Form Validator
Plugin URI: https://powertic.com
Description: Valida o e-mail digitado em um campo do tipo email
Author: Powertic
Version: 1.0.0-beta
Author URI: https://powertic.com
*/

wp_register_script( 'powertic-mautic-form-validator-js', 'https://cdn.rawgit.com/powerticmkt/mautic-form-validator/8b24d40e/dist/powertic-mautic-form-validator.js' , '', '', false );
wp_enqueue_script( 'powertic-mautic-form-validator-js' );
wp_enqueue_style("powertic-mautic-form-validator-css", "https://cdn.rawgit.com/powerticmkt/mautic-form-validator/8b24d40e/dist/powertic-mautic-form-validator.css");

?>
