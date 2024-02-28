document.write(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="index.CSS" />
    <link rel="stylesheet" href="indexResponsive.CSS">
    <link rel="stylesheet" href="COMMON/common.css">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="COMMON/flaticon_xoft.css" />
    <link
      rel="stylesheet"
      href="https://owlcarousel2.github.io/OwlCarousel2/assets/owlcarousel/assets/owl.carousel.min.css"
    />
    <link
      rel="stylesheet"
      href="https://owlcarousel2.github.io/OwlCarousel2/assets/owlcarousel/assets/owl.theme.default.min.css"
    />
  </head>
  <body>
      <div id="header" class="navbar row-after">
        <div class="logo">
          <img
            src="https://specbitsgroup.com/demo/public/online-education/assets/img/logo/logo-yellow.png"
            alt=""
          />
        </div>
        <div class="links-btn">
          <a href="index.html" class="links-tag">Home</a>
          <a href="aboutUs.html" class="links-tag">About Us</a>
          <a href="services.html" class="links-tag">Services</a>
          <a href="blog.html" class="links-tag">Blog</a>
          <a href="contactUs.html" class="links-tag">Contact</a>
        </div>

        <div class="cart-button">
          <i class="fa-solid fa-cart-shopping fa-xl" style="color: #ffffff"></i
          ><button class="Contact-Us">
            Contact Us <i class="fa-solid fa-arrow-right-long"></i>
          </button>
          <button id="toggle-btn" class="menu-btn" onclick="myfun()">
            <i class="fa-solid fa-bars"></i>
          </button>

          <div id="dropdown-menu" class="hide-menu">
            <div class="dropdown-bar">
              <button id="toggle-btn" class="menu-btn cross-btn" onclick="myfun()">
                <i class="fa-solid fa-xmark " style="color: #ffffff"></i>
              </button>
            </div>
            <div class="dropdown-logo">
              <img
                src="https://specbitsgroup.com/demo/public/online-education/assets/img/logo/logo-yellow.png"
                alt=""
              />
            </div>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="aboutUs.html">About Us</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="blog.html">Blog</a></li>
              <li><a href="contactUs.html">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>`);