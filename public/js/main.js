/**
 * Dr. GI - Gastroenterology & Medical Fellowship Blog
 * Main Theme JavaScript (Standard Vanilla JS + jQuery Support)
 * WordPress Theme Ready
 */

(function ($) {
  'use strict';

  // DOM Ready
  $(document).ready(function () {

    /* ==========================================================================
       1. STICKY NAVBAR SHADOW ON SCROLL
       ========================================================================== */
    const $navbar = $('.navbar-custom');
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 30) {
        $navbar.addClass('is-scrolled');
      } else {
        $navbar.removeClass('is-scrolled');
      }
    });

    /* ==========================================================================
       2. SMOOTH SCROLLING FOR ANCHOR LINKS
       ========================================================================== */
    $('a[href^="#"]').on('click', function (e) {
      const target = $(this.getAttribute('href'));
      if (target.length) {
        e.preventDefault();
        const headerOffset = 80;
        const targetOffset = target.offset().top - headerOffset;
        $('html, body').stop().animate({
          scrollTop: targetOffset
        }, 600);
      }
    });

    /* ==========================================================================
       3. BACK TO TOP BUTTON
       ========================================================================== */
    const $backToTop = $('#backToTopBtn');
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 400) {
        $backToTop.fadeIn(200);
      } else {
        $backToTop.fadeOut(200);
      }
    });

    $backToTop.on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, 500);
    });

    /* ==========================================================================
       4. NEWSLETTER FORM SUBMISSION (AJAX READY)
       ========================================================================== */
    $('.newsletter-form').on('submit', function (e) {
      e.preventDefault();
      const $input = $(this).find('input[type="email"]');
      const email = $input.val().trim();
      const $btn = $(this).find('button[type="submit"]');

      if (email && email.includes('@')) {
        const originalText = $btn.html();
        $btn.prop('disabled', true).html('<i class="fa-solid fa-spinner fa-spin me-1"></i> Subscribing...');
        
        setTimeout(function () {
          $btn.prop('disabled', false).html('<i class="fa-solid fa-check me-1"></i> Subscribed!');
          $input.val('');
          
          // Show feedback toast or alert
          alert('Thank you for subscribing to Dr. GI Insights! Check your inbox to confirm.');
          
          setTimeout(function () {
            $btn.html(originalText);
          }, 3500);
        }, 800);
      } else {
        alert('Please enter a valid email address.');
      }
    });

    /* ==========================================================================
       5. LIVE SEARCH FILTER (QUICK ARTICLE FILTERING)
       ========================================================================== */
    $('#searchInput').on('keyup', function () {
      const query = $(this).val().toLowerCase();
      $('.post-entry-card, .editor-pick-item, .popular-ranked-item').each(function () {
        const title = $(this).find('h5, h6, .post-card-title').text().toLowerCase();
        const excerpt = $(this).find('p, .post-card-excerpt').text().toLowerCase();
        if (title.includes(query) || excerpt.includes(query)) {
          $(this).show();
        } else if (query.length > 2) {
          $(this).hide();
        } else {
          $(this).show();
        }
      });
    });

    /* ==========================================================================
       6. READING TIME ESTIMATOR (FOR WORDPRESS DYNAMIC POSTS)
       ========================================================================== */
    function calculateReadingTime() {
      $('.post-entry-card').each(function () {
        const text = $(this).text();
        const words = text.trim().split(/\s+/).length;
        const wpm = 200;
        const readTime = Math.ceil(words / wpm);
        // Can be attached dynamically if element exists
      });
    }
    calculateReadingTime();

    /* ==========================================================================
       7. ARTICLE MODAL TRIGGER (DEMO PREVIEW)
       ========================================================================== */
    $('[data-open-article]').on('click', function (e) {
      e.preventDefault();
      const articleId = $(this).data('open-article');
      $('#articleModal-' + articleId).addClass('is-active');
    });

    $('.modal-close-btn, .custom-modal-backdrop').on('click', function (e) {
      if (e.target === this) {
        $('.custom-modal-backdrop').removeClass('is-active');
      }
    });

    // Close modal on Escape key
    $(document).on('keydown', function (e) {
      if (e.key === 'Escape') {
        $('.custom-modal-backdrop').removeClass('is-active');
      }
    });

  });

})(jQuery);
