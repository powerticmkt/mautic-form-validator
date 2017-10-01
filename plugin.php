<?php
/*
Plugin Name: Mautic Form Validator
Plugin URI: https://powertic.com
Description: Mautic Form Validator aplica máscaras em campos e verifica e corrige o endereço de e-mail com erros ortográficos digitado em formulários mautic
Author: Powertic
Version: 1.0.0-beta
Author URI: https://powertic.com
*/

wp_register_script( 'powertic-mautic-form-validator-js', 'https://cdn.rawgit.com/powerticmkt/mautic-form-validator/8b24d40e/dist/powertic-mautic-form-validator.js' , '', '', false );
wp_enqueue_script( 'powertic-mautic-form-validator-js' );
wp_enqueue_style("powertic-mautic-form-validator-css", "https://cdn.rawgit.com/powerticmkt/mautic-form-validator/8b24d40e/dist/powertic-mautic-form-validator.css");

require 'plugin-update-checker/plugin-update-checker.php';
$myUpdateChecker = Puc_v4_Factory::buildUpdateChecker(
	'https://github.com/powerticmkt/mautic-form-validator/',
	__FILE__,
	'mautic-form-validator'
);

//Optional: Set the branch that contains the stable release.
$myUpdateChecker->setBranch('master');
