<?php
include_once 'manifest.php';

function notamagic_enqueue_assets() {
    $manifest = new Manifest("", "");

    $parent_style = 'twentyseventeen-style';
    wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );

    wp_enqueue_style( 'child-style',
       get_stylesheet_directory_uri() . $manifest->css,
       array( $parent_style ),
       wp_get_theme()->get('Version')
    );

    wp_enqueue_script( 'script', get_stylesheet_directory_uri() . $manifest->js, null, 1.1, true);
}
add_action( 'wp_enqueue_scripts', 'notamagic_enqueue_assets' );

add_action('wp_footer', 'notamagic_root');
function notamagic_root() {
    echo '<div id="notamagic-root" style="display: none"></div>';
}

function header_image_attrs($html, $header, $attr) {
    $custom_header = get_custom_header();

    $image_data = array (
        "url" => $custom_header->url,
        "width" => $custom_header->width,
        "height" => $custom_header->height
    );

    if ( !empty( $custom_header->attachment_id ) ) {
        $alt_text = get_post_meta($custom_header->attachment_id, '_wp_attachment_image_alt', true);

        if (empty($alt_text)) {
            $attachment = get_post($custom_header->attachment_id);
            $alt_text = trim(strip_tags( $attachment->post_excerpt ));
        }
        if (empty($alt_text)) {
            $attachment = get_post($custom_header->attachment_id);
            $alt_text = trim(strip_tags( $attachment->post_title ));
        }

        $image_data['alt'] = $alt_text;
    }

    return json_encode( (array)$image_data );
}


?>
