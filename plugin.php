<?php
/*
Plugin Name: Mautic E-mail Validator
Plugin URI: https://powertic.com/pt-br/blog/validacao-de-e-mails-mautic/
Description: Mautic E-mail Validator aplica máscaras em campos e verifica e corrige o endereço de e-mail com erros ortográficos digitado em formulários mautic
Author: Powertic
Version: 2.0.2
Author URI: https://powertic.com/pt-br/
*/

function mauti_form_validator_init() {
	wp_register_script( 'powertic-mautic-form-validator-js', plugin_dir_url( __FILE__ ) . 'dist/powertic-mautic-form-validator.js' , array('jquery') );
	wp_enqueue_script( 'powertic-mautic-form-validator-js' );
	wp_enqueue_style("powertic-mautic-form-validator-css", plugin_dir_url( __FILE__ ) . "dist/powertic-mautic-form-validator.css");
}

add_action('wp_enqueue_scripts','mauti_form_validator_init');

require_once 'plugin-update-checker/plugin-update-checker.php';
$MFVUpdateChecker = Puc_v4_Factory::buildUpdateChecker(
	'https://github.com/powerticmkt/mautic-form-validator/',
	__FILE__,
	'mautic-form-validator'
);

$MFVUpdateChecker->setBranch('master');
