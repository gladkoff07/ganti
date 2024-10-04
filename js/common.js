"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var _document$querySelect, _document$querySelect10, _document$querySelect11;
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

  // clone element 
  (function () {
    // Условие для viewport шириной 1023
    var mediaQuery = window.matchMedia("(max-width: 1023px)");
    function handleTabletChange(e) {
      // Проверить, что media query будет true
      if (e.matches) {
        var _document$querySelect2;
        var basketInfo = ((_document$querySelect2 = document.querySelector(".block-basket__content")) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.querySelector('.servise-info')) || '';
        var basketAside = document.querySelector(".block-basket__aside");
        basketAside === null || basketAside === void 0 || basketAside.after(basketInfo);
      } else {
        var _document$querySelect3, _document$querySelect4;
        var _basketInfo = ((_document$querySelect3 = document.querySelector(".block-basket")) === null || _document$querySelect3 === void 0 ? void 0 : _document$querySelect3.querySelector('.servise-info')) || '';
        var basketList = (_document$querySelect4 = document.querySelector(".block-basket__content")) === null || _document$querySelect4 === void 0 ? void 0 : _document$querySelect4.querySelector('.basket-list');
        basketList === null || basketList === void 0 || basketList.after(_basketInfo);
      }
    }
    // Слушать события
    mediaQuery.addListener(handleTabletChange);

    // Начальная проверка
    handleTabletChange(mediaQuery);
  })();

  // clone element 
  (function () {
    // Условие для viewport шириной 575
    var mediaQuery = window.matchMedia("(max-width: 575px)");
    function handleTabletChange(e) {
      // Проверить, что media query будет true
      if (e.matches) {
        var _document$querySelect5, _document$querySelect6;
        var headerMenu = (_document$querySelect5 = document.querySelector(".header__top")) === null || _document$querySelect5 === void 0 ? void 0 : _document$querySelect5.querySelector('.header-menu');
        var menuMobileBody = document.querySelector(".menu-mobile").querySelector('.menu-mobile__body');
        menuMobileBody === null || menuMobileBody === void 0 || menuMobileBody.append(headerMenu);
        var headerRegion = (_document$querySelect6 = document.querySelector(".header__top")) === null || _document$querySelect6 === void 0 ? void 0 : _document$querySelect6.querySelector('.region');
        menuMobileBody === null || menuMobileBody === void 0 || menuMobileBody.append(headerRegion);
      } else {
        var _document$querySelect7, _document$querySelect8, _document$querySelect9;
        var menuMobileBodyNav = ((_document$querySelect7 = document.querySelector(".menu-mobile")) === null || _document$querySelect7 === void 0 ? void 0 : _document$querySelect7.querySelector('.header-menu')) || '';
        var headerTopContainer = (_document$querySelect8 = document.querySelector(".header__top")) === null || _document$querySelect8 === void 0 ? void 0 : _document$querySelect8.querySelector('.container');
        headerTopContainer === null || headerTopContainer === void 0 || headerTopContainer.append(menuMobileBodyNav);
        var menuMobileBodyRegion = ((_document$querySelect9 = document.querySelector(".menu-mobile")) === null || _document$querySelect9 === void 0 ? void 0 : _document$querySelect9.querySelector('.region')) || '';
        headerTopContainer === null || headerTopContainer === void 0 || headerTopContainer.prepend(menuMobileBodyRegion);
      }
    }
    // Слушать события
    mediaQuery.addListener(handleTabletChange);

    // Начальная проверка
    handleTabletChange(mediaQuery);
  })();

  // menu mobile
  var buttonMenu = document.querySelector(".js-mobile-button");
  var blockMenu = document.querySelector(".menu-mobile");
  // const buttonMenuClose = document.querySelector('.js-menu-close');
  var blockBody = document.querySelector("body");
  var openMenu = function openMenu() {
    buttonMenu.classList.toggle('mobile-button--active');
    blockMenu.classList.toggle("menu-mobile--active");
    blockBody.classList.toggle('body-overflow');
  };

  // const closeMenu = () => {
  //   blockMenu.classList.remove("menu-mobile--active");
  //   blockBody.classList.remove('body-overflow');
  // };

  buttonMenu.addEventListener("click", function () {
    openMenu();
  });

  // buttonMenuClose.addEventListener("click", () => {
  //   closeMenu();
  // });

  // js-change-list-sorting
  (_document$querySelect10 = document.querySelector('.js-change-list-sorting')) === null || _document$querySelect10 === void 0 || _document$querySelect10.addEventListener('click', function (e) {
    e.preventDefault();
    this.classList.toggle('list-sorting__head--active');
    this.nextElementSibling.classList.toggle('list-sorting__body--active');
  });

  // js-aside-category-toggle-view
  (_document$querySelect11 = document.querySelector('.js-aside-category-toggle-view')) === null || _document$querySelect11 === void 0 || _document$querySelect11.addEventListener('click', function () {
    this.classList.toggle('aside-category__box--active');
    this.nextElementSibling.classList.toggle('aside-category__inner--active');
  });
});