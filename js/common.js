"use strict";

document.addEventListener('DOMContentLoaded', function () {
  // js-faq-change
  document.querySelectorAll('.js-faq-change').forEach(function (item) {
    item.addEventListener('click', function () {
      this.classList.toggle('list-faq__change--active');
      this.closest('.list-faq__item').querySelector('.list-faq__body').classList.toggle('list-faq__body--active');
    });
  });

  // .js-change-authorization-nav
  document.querySelector('.js-change-authorization-nav').addEventListener('click', function () {
    this.classList.toggle('link-authorization--active');
    this.querySelector('.link-authorization__box').classList.toggle('link-authorization__box--active');
  });

  // js-change-list-catalog-nav
  document.querySelector('.js-change-list-catalog-nav').addEventListener('click', function (e) {
    e.preventDefault();
    this.classList.toggle('link-button--active');
    this.nextElementSibling.classList.toggle('header__link-catalog-box--active');
  });

  // js-mobile-search
  document.querySelector('.js-mobile-search').addEventListener('click', function () {
    this.classList.toggle('mobile-search--active');
  });
});