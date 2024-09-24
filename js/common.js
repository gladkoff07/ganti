"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var _document$querySelect;
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
    document.querySelector('.header__search').classList.remove('header__search--active');
    document.querySelector('.js-mobile-search').classList.remove('mobile-search--active');
    document.querySelector('.js-change-list-catalog-nav').classList.remove('link-button--active');
    document.querySelector('.header__link-catalog-box').classList.remove('header__link-catalog-box--active');
  });

  // js-change-list-catalog-nav
  document.querySelector('.js-change-list-catalog-nav').addEventListener('click', function (e) {
    e.preventDefault();
    this.classList.toggle('link-button--active');
    this.nextElementSibling.classList.toggle('header__link-catalog-box--active');
    document.querySelector('.js-change-authorization-nav').classList.remove('link-authorization--active');
    document.querySelector('.link-authorization__box').classList.remove('link-authorization__box--active');
    document.querySelector('.header__search').classList.remove('header__search--active');
    document.querySelector('.js-mobile-search').classList.remove('mobile-search--active');
  });

  // js-mobile-search
  document.querySelector('.js-mobile-search').addEventListener('click', function () {
    this.classList.toggle('mobile-search--active');
    this.closest('.container').querySelector('.header__search').classList.toggle('header__search--active');
    document.querySelector('.js-change-list-catalog-nav').classList.remove('link-button--active');
    document.querySelector('.header__link-catalog-box').classList.remove('header__link-catalog-box--active');
    document.querySelector('.js-change-authorization-nav').classList.remove('link-authorization--active');
    document.querySelector('.link-authorization__box').classList.remove('link-authorization__box--active');
  });

  // input mask
  document.querySelectorAll(".js-form-phone").forEach(function (e) {
    var phoneMask = IMask(e, {
      mask: "+{7}(000)000-00-00"
    });
  });

  // input file
  (_document$querySelect = document.querySelector(".form__input-file")) === null || _document$querySelect === void 0 || _document$querySelect.addEventListener("change", function () {
    var fileName = document.querySelector(".form__input-file").files[0].name;
    document.querySelector(".form__file-text").innerHTML = fileName;
  });
});