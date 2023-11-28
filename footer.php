<footer>
                <nav class="footer">
                    <ul>
                        <h4>Компания</h4>
                        <li><a href="">О&nbsp;нас</a></li>
                        <li><a href="">Контакты</a></li>
                    </ul>
                    <ul>
                        <h4>Полезное</h4>
                        <li><a href="">Оплата&nbsp;и&nbsp;доставка</a></li>
                        <li><a href="">Условия&nbsp;возврата</a></li>
                        <li><a href="">Бонусная&nbsp;система</a></li>
                    </ul>
                    <ul>
                        <h4>Покупателю</h4>
                        <li><a href="">Избранное</a></li>
                        <li><a href="">Публичная&nbsp;оферта</a></li>
                        <li><a href="">Политика&nbsp;конфиденциальности</a></li>
                    </ul>
                    <ul>
                        <h4>Контакты</h4>
                        <li>
                            <span><a href=""><img src="<?php bloginfo('template_url'); ?>/assets/imgs/svg/instagram.svg" alt="instagram"></a></span>
                            <span><a href=""><img src="<?php bloginfo('template_url'); ?>/assets/imgs/svg/vk.svg" alt="vk"></a></span>
                        </li>
<!-- Вывод телефона -->
<?php 
$tel = get_option('site_telephone');

if($tel != null){ ?>
    <li><a href="tel:<?php echo preg_replace('/[^0-9]/', '', $tel); ?>"><?php echo $tel; ?></a><i class="fa fa-phone" aria-hidden="true"></i></li>
<?php } ?>

<!--Вывод адреса--->
<?php 
$contact_inf = get_option('theme_contacttext');
if($contact_inf != null){ ?>
    <li><a href="mailto:<?php echo $contact_inf; ?>" class="contact_inf"><i class="fa fa-map-marker" aria-hidden="true"></i><?php echo $contact_inf; ?></a></li>
<?php } ?>

                    </ul>
                </nav>
            </footer>        
        </div>
    </section>
</body>
<?php wp_footer(); ?>
</html>