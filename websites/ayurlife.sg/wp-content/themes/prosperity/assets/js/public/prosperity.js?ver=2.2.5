'use strict';

(function () {
  // Initiate the menus when the DOM loads.
  function initNavigation() {
    if (!document.documentElement.classList) {
      return;
    }

    var siteMenus = document.querySelectorAll('.site-menu');

    if (!siteMenus.length) {
      return;
    }

    for (var i = 0; i < siteMenus.length; i++) {
      setToggleSubmenuOnFocus(siteMenus[i]);
      setToggleSubmenuOnTouch(siteMenus[i]);
    }

    createMobileMenu();
  }
  /**
   * Created a mobile menu based on the primary menu.
   */

  function createMobileMenu() {
    var siteHeader = document.getElementById('masthead');
    var mobileMenuContainer = document.getElementById('mobile-navigation');
    var headerSearchForm = siteHeader.querySelector('.search-form');
    var headerMenus = siteHeader.querySelectorAll('.menu');
    var headerSocialMenu = siteHeader.querySelector('.social-list');
    var mobileContent = document.createDocumentFragment();

    if (null !== headerSearchForm) {
      mobileContent.appendChild(headerSearchForm.cloneNode(true));
    }

    if (headerMenus.length) {
      for (var i = 0; i < headerMenus.length; i++) {
        var menu = headerMenus[i].cloneNode(true);
        menu.removeAttribute('id');
        mobileContent.appendChild(menu);
      }
    } // Copy social menu to the mobile navigation.

    if (null !== headerSocialMenu) {
      var socialMenuList = headerSocialMenu.getElementsByTagName('ul')[0];

      if ('undefined' !== typeof socialMenuList) {
        socialMenuList = socialMenuList.cloneNode(true);
        socialMenuList.removeAttribute('id');
        socialMenuList.classList.add('social-list');
        mobileContent.appendChild(socialMenuList);
      }
    } // Add dropdown toggle that displays child menu items.

    var parentMenuItems = mobileContent.querySelectorAll(
      '.menu-item-has-children'
    );

    if (parentMenuItems.length) {
      for (var _i = 0; _i < parentMenuItems.length; _i++) {
        var buttonScreenReaderText = document.createElement('span');
        buttonScreenReaderText.className = 'screen-reader-text';
        buttonScreenReaderText.appendChild(
          document.createTextNode(screenReaderText.expand)
        );
        var dropdownToggle = document.createElement('button');
        dropdownToggle.className = 'dropdown-toggle clean-button has-icon';
        dropdownToggle.setAttribute('aria-expanded', false);
        dropdownToggle.appendChild(buttonScreenReaderText);

        parentMenuItems[_i].appendChild(dropdownToggle);

        parentMenuItems[_i].setAttribute('aria-haspopup', true);
      }
    } // Add a search form and list items to the mobile container.

    mobileMenuContainer.appendChild(mobileContent); // Remove ID attributes from the list items to avoid repetition.

    var mobileMenuItems = mobileMenuContainer.getElementsByTagName('li');
    var mobileMenuItemsCount = mobileMenuItems.length;

    if (mobileMenuItemsCount) {
      for (var itemIndex = 0; itemIndex < mobileMenuItemsCount; itemIndex++) {
        mobileMenuItems[itemIndex].removeAttribute('id');
      }
    } // Toggle buttons and submenu items with active children menu items.

    var activeToggleButtons = mobileMenuContainer.querySelectorAll(
      '.current-menu-ancestor > button'
    );
    var activeToggleSubMenus = mobileMenuContainer.querySelectorAll(
      '.current-menu-ancestor > .sub-menu'
    );
    var activeToggleIndecators = mobileMenuContainer.querySelectorAll(
      '.current-menu-ancestor > .arrow-icon'
    );

    if (activeToggleButtons.length) {
      for (var _i2 = 0; _i2 < activeToggleButtons.length; _i2++) {
        activeToggleButtons[_i2].classList.add('toggled-on');

        activeToggleButtons[_i2].setAttribute('aria-expanded', true);
      }
    }

    if (activeToggleSubMenus.length) {
      for (var _i3 = 0; _i3 < activeToggleSubMenus.length; _i3++) {
        activeToggleSubMenus[_i3].classList.add('toggled-on');
      }
    }

    if (activeToggleIndecators.length) {
      for (var _i4 = 0; _i4 < activeToggleIndecators.length; _i4++) {
        activeToggleIndecators[_i4].classList.add('toggled-on');
      }
    }

    var dropdownToggleButtons = mobileMenuContainer.querySelectorAll(
      'button.dropdown-toggle'
    );

    if (dropdownToggleButtons.length) {
      var dropdownToggleEvent = function dropdownToggleEvent(e) {
        e.preventDefault();
        var screenReader = e.target.querySelector('.screen-reader-text');
        var arrowIconElement =
          e.target.parentElement.querySelector('.arrow-icon');
        arrowIconElement.classList.toggle('toggled-on');

        if (-1 !== e.target.className.indexOf('toggled-on')) {
          e.target.setAttribute('aria-expanded', false);

          if (null !== screenReader) {
            screenReader.textContent = screenReaderText.collapse;
          }
        } else {
          e.target.setAttribute('aria-expanded', true);

          if (null !== screenReader) {
            screenReader.textContent = screenReaderText.expand;
          }
        }

        e.target.classList.toggle('toggled-on');
        var parentItem = e.target.parentNode;

        for (var _i5 = 0; _i5 < parentItem.childNodes.length; _i5++) {
          if ('UL' === parentItem.childNodes[_i5].nodeName) {
            parentItem.childNodes[_i5].classList.toggle('toggled-on');
          }
        }
      };

      for (var _i6 = 0; _i6 < dropdownToggleButtons.length; _i6++) {
        dropdownToggleButtons[_i6].addEventListener(
          'click',
          dropdownToggleEvent,
          false
        );
      }
    }
  }
  /**
   * Toggle `focus` class to allow sub-menu access on focus and blur.
   *
   * @param {Object} container
   */

  function setToggleSubmenuOnFocus(container) {
    // Get the first ul element insite the menu container.
    var primaryMenu = container.getElementsByTagName('ul')[0]; // Get all the link elements within the menu.

    var menuLinks = primaryMenu.getElementsByTagName('a');
    var i, focusFn; // Sets or removes .focus class on an element.

    focusFn = function focusFn() {
      var self = this; // Move up through the ancestors of the current link until we hit .nav-menu.

      while (
        !self.classList.contains('site-menu') &&
        'nav' !== self.tagName.toLowerCase()
      ) {
        // On li elements toggle the class .focus.
        if ('li' === self.tagName.toLowerCase()) {
          if (self.classList.contains('focus')) {
            self.classList.remove('focus');
          } else {
            self.classList.add('focus');
          }
        }

        self = self.parentElement;
      }
    }; // Each time a menu link is focused or blurred, toggle focus.

    for (i = 0; i < menuLinks.length; i++) {
      menuLinks[i].addEventListener('focus', focusFn, false);
      menuLinks[i].addEventListener('blur', focusFn, false);
    }
  }
  /**
   * Toggle `focus` class to allow sub-menu access on touch screens.
   *
   * @param {Object} container
   */

  function setToggleSubmenuOnTouch(container) {
    var touchStartFn,
      touchOutsideFn,
      removeFocusFn,
      i,
      parentLink = container.querySelectorAll(
        '.menu-item-has-children > a, .page_item_has_children > a'
      );

    removeFocusFn = function removeFocusFn() {
      var focusedElements = container.querySelectorAll('li.focus');
      var i;

      for (i = 0; i < focusedElements.length; ++i) {
        focusedElements[i].classList.remove('focus');
      }
    };

    touchStartFn = function touchStartFn(e) {
      var menuItem = this.parentNode,
        i;

      if (!menuItem.classList.contains('focus')) {
        e.preventDefault();

        for (i = 0; i < menuItem.parentNode.children.length; ++i) {
          if (menuItem === menuItem.parentNode.children[i]) {
            continue;
          }

          menuItem.parentNode.children[i].classList.remove('focus');
        }

        if (!container.classList.contains('is-touched')) {
          container.classList.add('is-touched');
        }

        menuItem.classList.add('focus');
      } else {
        menuItem.classList.remove('focus');
      }
    };

    touchOutsideFn = function touchOutsideFn(e) {
      var isTochedMenu = container.classList.contains('is-touched');

      if (!isTochedMenu) {
        return;
      }

      var elementParent = e.target.parentNode;

      if (
        elementParent &&
        !elementParent.classList.contains('menu-item') &&
        isTochedMenu
      ) {
        removeFocusFn();
      }
    };

    document.addEventListener('touchstart', touchOutsideFn, false);

    for (i = 0; i < parentLink.length; ++i) {
      parentLink[i].addEventListener('touchstart', touchStartFn, false);
    }
  }

  if ('loading' === document.readyState) {
    // The DOM has not yet been loaded.
    document.addEventListener('DOMContentLoaded', initNavigation);
  } else {
    // The DOM has already been loaded.
    initNavigation();
  }
})();
/*
 Handles additional functionalities of the theme.
*/

(function () {
  var htmlRTL =
    'rtl' === document.documentElement.getAttribute('dir') ? true : false;
  var prosperityTheme = {
    // Run on ready.
    onReady: function onReady() {
      this.setToggleSidebar();
      this.skipLinkFocusFix();
    },
    // Set up a mobile toggle sidebar.
    setToggleSidebar: function setToggleSidebar() {
      var pageContainer = document.getElementById('page');

      if (!pageContainer) {
        return;
      }

      var toggleSection = document.getElementById('toggle-sidebar');
      var toggleButton = document.getElementById('mobile-menu-toggle');
      var closeBuutton = document.getElementById('close-toggle-sidebar');
      toggleSection.style.display = 'block';
      var toggleSectionWidth = toggleSection.offsetWidth;
      toggleSection.style.removeProperty('display');

      var bodyAction = function bodyAction(e) {
        if (
          !toggleSection.contains(e.target) &&
          e.target.nodeName !== 'BUTTON'
        ) {
          document.body.classList.toggle('active-toggle-sidebar');
          closeToggleSection();
        }
      };

      var closeToggleSection = function closeToggleSection() {
        // Move a content area to a regular position.
        if (htmlRTL) {
          pageContainer.style.removeProperty('left');
        } else {
          pageContainer.style.removeProperty('right');
        } // Update aria attributes.

        toggleSection.setAttribute('aria-hidden', true);
        toggleButton.setAttribute('aria-expanded', false); // Detect all clicks on the document

        document.body.removeEventListener('click', bodyAction, false);
      };

      var showToggleSection = function showToggleSection() {
        // Move a content area to the side.
        if (htmlRTL) {
          pageContainer.style.left = toggleSectionWidth + 'px';
        } else {
          pageContainer.style.right = toggleSectionWidth + 'px';
        } // Update aria attributes.

        toggleSection.setAttribute('aria-hidden', false);
        toggleButton.setAttribute('aria-expanded', true); // Detect all clicks on the document

        document.body.addEventListener('click', bodyAction, false);
      };

      var buttonAction = function buttonAction() {
        document.body.classList.toggle('active-toggle-sidebar');

        if (-1 !== document.body.className.indexOf('active-toggle-sidebar')) {
          showToggleSection();
        } else {
          closeToggleSection();
        }
      };

      toggleButton.addEventListener('click', buttonAction, false);
      closeBuutton.addEventListener('click', buttonAction, false);
    },
    // Helps with accessibility for keyboard only users.
    skipLinkFocusFix: function skipLinkFocusFix() {
      var isIe = /(trident|msie)/i.test(navigator.userAgent);

      if (isIe && document.getElementById && window.addEventListener) {
        window.addEventListener(
          'hashchange',
          function () {
            var id = location.hash.substring(1),
              element;

            if (!/^[A-z0-9_-]+$/.test(id)) {
              return;
            }

            element = document.getElementById(id);

            if (element) {
              if (
                !/^(?:a|select|input|button|textarea)$/i.test(element.tagName)
              ) {
                element.tabIndex = -1;
              }

              element.focus();
            }
          },
          false
        );
      }
    },
  }; // Things that need to happen when the document is ready.

  document.addEventListener('DOMContentLoaded', function () {
    prosperityTheme.onReady();
  });
})();
