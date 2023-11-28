<?php

add_action( 'wp_enqueue_scripts', function() {

    wp_enqueue_style( 'fonts', get_template_directory_uri() . '/assets/fonts/stylesheet.css' );
    wp_enqueue_style( 'style', get_template_directory_uri() . '/assets/css/style.css' );


	wp_enqueue_script( 'app', get_template_directory_uri() . '/assets/js/app.js', array(), 'null', true );
});

add_theme_support( 'post-thumbnails' ); //что бы добавлять изображение записи с админки
add_theme_support( 'title-tag' ); // что б настраивать тайтл из админки
add_theme_support( 'custom-logo' ); // что б в настройках с админки добавлять логотип

add_filter( 'upload_mimes', 'svg_upload_allow' );

# Добавляет SVG в список разрешенных для загрузки файлов.
function svg_upload_allow( $mimes ) {
	$mimes['svg']  = 'image/svg+xml';

	return $mimes;
}

add_filter( 'wp_check_filetype_and_ext', 'fix_svg_mime_type', 10, 5 );

# Исправление MIME типа для SVG файлов.
function fix_svg_mime_type( $data, $file, $filename, $mimes, $real_mime = '' ){

	// WP 5.1 +
	if( version_compare( $GLOBALS['wp_version'], '5.1.0', '>=' ) ){
		$dosvg = in_array( $real_mime, [ 'image/svg', 'image/svg+xml' ] );
	}
	else {
		$dosvg = ( '.svg' === strtolower( substr( $filename, -4 ) ) );
	}

	// mime тип был обнулен, поправим его
	// а также проверим право пользователя
	if( $dosvg ){

		// разрешим
		if( current_user_can('manage_options') ){

			$data['ext']  = 'svg';
			$data['type'] = 'image/svg+xml';
		}
		// запретим
		else {
			$data['ext']  = false;
			$data['type'] = false;
		}
	}
	return $data;
}

?>

<?php
/*
Короткий пример для использования Theme_Customization_API 
http://casepress.org/kb/web/nastrojki-temy-wordpress-kak-dobavit-svoi-polya/
*/
/**
 * Добавляет страницу настройки темы в админку Вордпресса
 */
function mytheme_customize_register( $wp_customize ) {
/*
Добавляем секцию в настройки темы
*/
$wp_customize->add_section(
    // ID
    'data_site_section',
    // Массив аргументов
    array(
        'title' => 'Контакты',
        'capability' => 'edit_theme_options',
        'description' => "Здесь можно указать контактные данные"
    )
);
/*
Добавляем поле контактных данных
 1. Добавляем поле с почтовым адресом theme_contacttext
*/
$wp_customize->add_setting(
    // ID
    'theme_contacttext',
    // Массив аргументов
    array(
        'default' => '',
        'type' => 'option'
    )
);
$wp_customize->add_control(
    // ID
    'theme_contacttext_control',
    // Массив аргументов
    array(
        'type' => 'text',
        'label' => "Почтовый адрес:",
        'section' => 'data_site_section',
        // Этот последний должен соответствовать идентификатору настройки, указанному выше.
        'settings' => 'theme_contacttext'
    )
);
/*
 2. Добавляем поле телефона site_telephone
*/
$wp_customize->add_setting(
    // ID
    'site_telephone',
    // Массив аргументов
    array(
        'default' => '',
        'type' => 'option'
    )
);
$wp_customize->add_control(
    // ID
    'site_telephone_control',
    // Arguments array
    array(
        'type' => 'text',
        'label' => "Номер телефона:",
        'section' => 'data_site_section',
        // Этот последний должен соответствовать идентификатору настройки, указанному выше
        'settings' => 'site_telephone'
    ),    
);

}
add_action( 'customize_register', 'mytheme_customize_register' );