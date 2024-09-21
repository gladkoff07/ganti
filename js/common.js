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
});