<?php
/*
Plugin Name: Mautic Form Validator
Plugin URI: https://powertic.com
Description: Mautic Form Validator aplica máscaras em campos e verifica e corrige o endereço de e-mail com erros ortográficos digitado em formulários mautic
Author: Powertic
Version: 1.0.0-beta
Author URI: https://powertic.com
*/

require 'plugin-update-checker/plugin-update-checker.php';
$myUpdateChecker = Puc_v4_Factory::buildUpdateChecker(
	'https://github.com/powerticmkt/mautic-form-validator/',
	__FILE__,
	'mautic-form-validator'
);

//Optional: Set the branch that contains the stable release.
$myUpdateChecker->setBranch('master');
