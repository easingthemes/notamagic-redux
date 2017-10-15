<?php
/**
 * Displays header site branding
 *
 * @package WordPress
 * @subpackage Twenty_Seventeen
 * @since 1.0
 * @version 1.0
 */

?>
<?php
$description = get_bloginfo( 'description', 'display' );
$screen_reader = ( twentyseventeen_is_frontpage() || ( is_home() && is_front_page() ) ) && ! has_nav_menu( 'top' );
$screen_reader_svg = twentyseventeen_get_svg( array( 'icon' => 'arrow-right' ) );
?>
<div
  class="site-branding"
  data-r-widget="SiteBranding"
  data-is_front_page="<?php echo is_front_page(); ?>"
  data-is_customize_preview="<?php echo is_customize_preview(); ?>"
  data-show_screen_reader="<?php echo $screen_reader; ?>"
  data-title-url="<?php echo esc_url( home_url( '/' ) ); ?>"
  data-title-text="<?php bloginfo( 'name' ); ?>"
  data-description="<?php echo $description; ?>"
  data-screen_reader_text="<?php _e( 'Scroll down to content', 'twentyseventeen' ); ?>"
  data-screen_reader_svg="<?php echo htmlspecialchars($screen_reader_svg, ENT_QUOTES, 'UTF-8'); ?>"
>
  <div class="wrap">

    <?php the_custom_logo(); ?>

    <div class="site-branding-text">
      <?php if ( is_front_page() ) : ?>
        <h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
      <?php else : ?>
        <p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
      <?php endif; ?>

      <?php
      $description = get_bloginfo( 'description', 'display' );

      if ( $description || is_customize_preview() ) :
      ?>
        <p class="site-description"><?php echo $description; ?></p>
      <?php endif; ?>
    </div><!-- .site-branding-text -->

    <?php if ( ( twentyseventeen_is_frontpage() || ( is_home() && is_front_page() ) ) && ! has_nav_menu( 'top' ) ) : ?>
    <a href="#content" class="menu-scroll-down"><?php echo twentyseventeen_get_svg( array( 'icon' => 'arrow-right' ) ); ?><span class="screen-reader-text"><?php _e( 'Scroll down to content', 'twentyseventeen' ); ?></span></a>
  <?php endif; ?>

  </div><!-- .wrap -->
</div><!-- .site-branding -->
