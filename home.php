<?php
/*
Template Name: home
*/
?>

<?php get_header(); ?>

    </div>
    <section class="bg_homepage">
        <div class="menu">
            <nav class="menu-container">
               <ul class="menu-list">
                <img class="menu-btn-close" src="<?php bloginfo('template_url'); ?>/assets/imgs/svg/close.svg" alt="close">
                <li><a href="#">оплата&nbsp;и&nbsp;доставка</a></li>
                <li><a href="#">условия&nbsp;возврата</a></li>
                <li><a href="#">контакты</a></li>
               </ul>
            </nav>
        </div>
        <?php the_custom_logo(); ?>


        <h2 class="bg_homepage-content">
           Новая&nbsp;коллекция 
        </h2>
        <div class="trait"><span></span></div> 
        <div class="bg_homepage-content--link">
            <a href="#">Смотреть новинки
                <svg width="10" height="7" viewBox="0 0 10 7" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 3.88903L8.88906 -3.05661e-05L10 1.11091L5 6.1109L-4.85606e-08 1.1109L1.11094 -3.09061e-05L5 3.88903Z"/>
                </svg></a>
        </div>              
    </section>
    <section class="homepage-categories">
        <div class="container">
            <h3>Категории</h3>
            <div class="container-arrow--svg">
                <div id="viewport">
                <div id="next" class="next">
                    <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H40V40H0V0Z" fill="#E0BEA2"/>
                        <path d="M21.8819 20.1334L13.0667 11.3182L15.5848 8.80005L26.9181 20.1334L15.5848 31.4667L13.0667 28.9486L21.8819 20.1334Z"/>
                    </svg>
                </div>
                <ul id="carousel" class="homepage-categories--carousel"> 

<?php
global $post;

$myposts = get_posts([ 
	'numberposts' => -1,
]);

if( $myposts ){
	foreach( $myposts as $post ){
		setup_postdata( $post );
?>
    <li class="homepage-categories--img">
        <a href="#">
            <h4><?php the_title(); ?></h4>
        </a>
    <?php the_post_thumbnail();
        array(274, 450)
    ?>
    </li>
<?php } } wp_reset_postdata(); ?>

            </div> 
            <form class="subscription">
                <h3>Узнайте&nbsp;первым&nbsp;о&nbsp;новинках</h3>
                <input type="email" name="email" placeholder="Ваш e-mail*" class="email">
                <p><input type="submit" value="подписаться" class="submit"></p>
                <p>Нажимая на нопку «Подписаться», я соглашаюсь на обработку моих персональных данных и ознакомлен(а) с условиями конфиденциальности.
                </p>
            </form> 
<?php get_footer(); ?>