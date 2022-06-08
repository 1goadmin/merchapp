<!-- footer section -->


<!-- footer section -->
<footer>
	<section class="ft"  >
		<div class="ft-col ft-left">
			<ul class="contacts col-space" style="display: inline-flex; padding: 10px 0 0 0;">
				<li class="ft-logo"><a href="#" aria-label="footerlogo"><img src="<?php echo get_template_directory_uri(); ?>/img/malogoinv.svg" alt="logo"
							style="width: 4rem;"></a>
				</li>
				<li><a class="ft-ahr" href="https://in1gotech.com/marketing-services/" aria-label="about" target="_blank" >About Us</a></li>
				<li><a class="ft-ahr" href="https://in1gotech.com/about-us/" aria-label="about" target="_blank" >ISO Certified</a></li>
				<li><a class="ft-ahr" href="https://in1gotech.com/partners/" aria-label="s" target="_blank">Partners</a></li>
				<li><a class="ft-ahr" href="https://in1gotech.com/patrons/"  aria-label="s" target="_blank" >Clients</a></li>
				<li><a class="ft-ahr" href="<?=bloginfo('url');?>/demo/"  aria-label="contact us">Contact Us</a></li>
			</ul>
		</div>
		<div class="ft-col ft-right" style="margin-right:9%;">
			<ul>
				<li>
					<div class="contacts ft-contacts solicons solicon" style="margin-left:0 !important">
						<a class="ft-ahr"  href="https://www.facebook.com/in1gotech/" aria-label="facebook profile"  target="_blank"  ><i class="fab fa-facebook-f social-icons" style="padding-left:12.5px; padding-right:12.5px;"></i></a>
						<a class="ft-ahr" href="https://www.linkedin.com/company/in1gotech" target="_blank" aria-label="linkedin profile" >
							<i class=" fab fa-linkedin-in social-icons" style="padding-left:11px; padding-right:11px;"></i></a>
						<a class="ft-ahr" href="https://www.youtube.com/channel/UCWu79HfXHYax8e-wnLhJU3g/videos"  target="_blank" aria-label="youtube profile"><i class="fab fa-youtube social-icons"></i></a>
					</div>
				</li>
			</ul>
		</div>
	</section>
	<h6 class="toc" style="padding-top:1rem;"><span style=" font-weight: 500;">Copyright © 2022 Mobidiser.ph</span> | <a class="ft-ahr" href="https://in1gotech.com/privacy-policy/"target="_blank">Privacy Policy</a>
</h6>
</footer>
</body>
<?php wp_footer()?>
<!-- Messenger Chat Plugin Code -->
    <div id="fb-root"></div>

    <!-- Your Chat Plugin code -->
    <div id="fb-customer-chat" class="fb-customerchat">
    </div>

    <script>
      var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "100677485664957");
      chatbox.setAttribute("attribution", "biz_inbox");
    </script>

    <!-- Your SDK code -->
    <script>
      window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v14.0'
        });
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    </script>
</html>
<!-- footer section -->
