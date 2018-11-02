export const cssString = `
.unite-ui .togglebutton .toggle-status {
  position: initial
}

.unite-ui .togglebutton label {
  padding: 0
}

.input.is-danger,.multiselect__tags.is-danger {
  border: 1px solid #ff3860!important
}

.help {
  display: block;
  font-size: 11px;
  margin-top: 5px
}

.help.is-danger {
  color: #ff3860
}

.wrapper-noti {
  position: fixed;
  width: 300px;
  z-index: 99999999999;
  -webkit-box-shadow: -1px 2px 6px rgba(30,32,40,.3);
  box-shadow: -1px 2px 6px rgba(30,32,40,.3);
  -webkit-transition: all .8s ease;
  transition: all .8s ease;
  opacity: 1;
  filter: alpha(opacity=100)
}

.wrapper-noti .wrapper-theme {
  padding: 14px 25px 14px 10px;
  border-radius: 6px;
  padding-bottom: 18px;
}

.wrapper-noti .wrapper-theme::after {
  content: '';
  clear: both;
  display: table
}

.wrapper-noti .close-noti {
  position: absolute;
  width: 12px;
  height: 12px;
  top: 8px;
  right: 8px;
  cursor: pointer;
  -webkit-transform: none!important;
  transform: none!important
}

.wrapper-noti .close-noti svg {
  vertical-align: top
}

.wrapper-noti .noti-body,.wrapper-noti .noti-body-com,.wrapper-noti .noti-time,.wrapper-noti .noti-title {
  float: right;
  line-height: 1;
  width: calc(100% - 93px)
}

.wrapper-noti .noti-body span,.wrapper-noti .noti-body-com span,.wrapper-noti .noti-time span,.wrapper-noti .noti-title span {
  font-size: 17px;
  line-height: normal;
}

.wrapper-noti .noti-title span {
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  white-space: nowrap;
}

.wrapper-noti .noti-body a,.wrapper-noti .noti-body-com a,.wrapper-noti .noti-time a,.wrapper-noti .noti-title a {
  font-size: 20px;
  line-height: normal;
  display: block;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap
}

.wrapper-noti .noti-body a:hover,.wrapper-noti .noti-body-com a:hover,.wrapper-noti .noti-time a:hover,.wrapper-noti .noti-title a:hover {
  text-decoration: underline;
  opacity: 1;
  filter: alpha(opacity=100)
}

.wrapper-noti .noti-time {
  font-size: 16px
}



.wrapper-noti .restaurant-image-com {
  position: relative;
  float: left;
  width: 60px;
  height: 51px;
  line-height: 0;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  display: -webkit-box;
  display: -moz-flex;
  display: -ms-flexbox;
  display: flex
}
.img-thumbnail {
  background-color:#fff;
  border:1px solid #dee2e6;
  border-radius:.25rem;
}
.wrapper-noti .restaurant-image-com img {
  width: 60px;
  height: 51px;
  border-radius: 1px;
  background-clip: padding-box
}
.wrapper-noti.basic .restaurant-image-com {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 93px;
  flex: 0 0 93px;
  height: 108px
}

.wrapper-noti.basic .restaurant-image-com img {
  border-radius: 0;
  background-clip: padding-box
}

.wrapper-noti.basicLabel .restaurant-image-com {
  width: 68px;
  height: 60px
}

.wrapper-noti.basicLabel .restaurant-image-com img {
  max-width: 60px
}


.wrapper-noti .restaurant-image {
  position: relative;
  float: left;
  width: 93px;
  height: 85px;
  /* padding-right: 8px; */
  line-height: 0;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  display: -webkit-box;
  display: -moz-flex;
  display: -ms-flexbox;
  display: flex
}

.wrapper-noti .restaurant-image img {
  max-width: 85px;
  max-height: 100%;
  border-radius: 3px;
  background-clip: padding-box
}

.wrapper-noti.bottom-left,.wrapper-noti.bottom-right {
  bottom: 20px
}

.wrapper-noti.bottom-left,.wrapper-noti.top-left {
  left: 20px
}

.wrapper-noti.bottom-right,.wrapper-noti.top-right {
  right: 20px
}

.wrapper-noti.top-left,.wrapper-noti.top-right {
  top: 20px
}

.wrapper-noti.top {
  top: 10px;
  left: 8px
}

.wrapper-noti.bottom {
  bottom: 10px;
  left: 8px
}

.wrapper-noti.bottom.not-power-user.thanks_giving {
  margin: 0
}

.wrapper-noti.basic {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -moz-flex;
  display: -ms-flexbox;
  display: flex
}

.wrapper-noti.basic .restaurant-image {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 93px;
  flex: 0 0 93px;
  height: 108px
}

.wrapper-noti.basic .restaurant-image img {
  border-radius: 0;
  background-clip: padding-box
}

.wrapper-noti.basic .wrapper-theme {
  padding: 12px 25px 12px 8px;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: calc(100% - 93px);
  display: -webkit-box;
  display: -moz-flex;
  display: -ms-flexbox;
  display: flex
}

.wrapper-noti.basic .wrapper-theme .noti-body,.wrapper-noti.basic .wrapper-theme .noti-body-com,.wrapper-noti.basic .wrapper-theme .noti-time,.wrapper-noti.basic .wrapper-theme .noti-title {
  width: 100%
}

.wrapper-noti.basic .noti-title {
  margin: 0 0 8px
}

.wrapper-noti.basic .noti-title span {
  margin: 0
}

.wrapper-noti.basic .noti-body {
  margin: 0 0 14px
}


.wrapper-noti.basic .noti-body-com {
  margin: 0 0 14px
}

.wrapper-noti.basic .noti-body span {
  margin: 0
}
.wrapper-noti.basic .noti-body-com span {
  margin: 0
}

.wrapper-noti.basicRounded {
  overflow: visible;
  padding: 0;
  border-radius: 6px;
  background-clip: padding-box
}

.wrapper-noti.basicRounded .noti-body,.wrapper-noti.basicRounded .noti-body-com,.wrapper-noti.basicRounded .noti-title {
  float: right;
  width: calc(100% - 93px)
}

.wrapper-noti.basicRounded .noti-title {
    margin :  0 1px;
  
}

.wrapper-noti.basicRounded .noti-time {
  position: absolute;
  bottom: 6px;
  left: 101px
}

.wrapper-noti.basicLabel {
  overflow: hidden;
  border-radius: 6px;
  background-clip: padding-box
}

.wrapper-noti.basicLabel .wrapper-theme {
  padding: 0 8px 8px
}

.wrapper-noti.basicLabel .noti-body span,.wrapper-noti.basicLabel .noti-body-com span,.wrapper-noti.basicLabel .noti-title span {
  color: #55586c
}

.wrapper-noti.basicLabel .noti-body a,.wrapper-noti.basicLabel .noti-body-com a,.wrapper-noti.basicLabel .noti-title a {
  color: #2d46eb
}

.wrapper-noti.basicLabel .noti-title {
  float: left;
  padding: 10px 8px;
  margin: 0 0 8px -8px;
  width: calc(100% + 16px)
}

.wrapper-noti.basicLabel .noti-title span {
  display: block;
  margin: 0 15px 0 0
}

.wrapper-noti.basicLabel .restaurant-image {
  width: 68px;
  height: 60px
}

.wrapper-noti.basicLabel .restaurant-image img {
  max-width: 60px
}

.wrapper-noti.basicLabel .noti-body,.wrapper-noti.basicLabel .noti-body-com,.wrapper-noti.basicLabel .noti-time {
  margin: 0 0 10px;
  width: calc(100% - 68px)
}

.wrapper-noti.xmas {
  background-image: url(/assets/images/apps/sale_notification/images/holiday_theme/xmas-bg.png);
  background-size: 100% 100%;
  margin: 38px 0 0
}

.wrapper-noti.xmas:before {
  content: '';
  position: absolute;
  top: -38px;
  z-index: 1;
  right: 20px;
  background: url(/assets/images/apps/sale_notification/images/holiday_theme/xmas-icon_top.png) 0 0 no-repeat;
  background-size: 100%;
  width: 70px;
  height: 55%
}

.wrapper-noti.xmas .close-noti [id=bkt-close] {
  fill: #fff
}

.wrapper-noti.xmas .noti-body a,.wrapper-noti.xmas .noti-body span,.wrapper-noti.xmas .noti-body-com a,.wrapper-noti.xmas .noti-body-com span,.wrapper-noti.xmas .noti-title a,.wrapper-noti.xmas .noti-title span {
  color: #fff
}

.wrapper-noti.xmas .noti-time {
  color: #fff
}

.wrapper-noti.valentine {
  background-image: url(/assets/images/apps/sale_notification/images/holiday_theme/valentine-bg.png);
  background-size: 100% 100%;
  margin: 45px 0 0
}

.wrapper-noti.valentine:before {
  content: '';
  position: absolute;
  bottom: calc(100% - 10px);
  left: 5px;
  width: 60px;
  height: 58px;
  background: url(/assets/images/apps/sale_notification/images/holiday_theme/valentine-icon_top.svg) no-repeat;
  background-size: 100%
}

.wrapper-noti.valentine .close-noti [id=bkt-close] {
  fill: #dd4754
}

.wrapper-noti.valentine .noti-body a,.wrapper-noti.valentine .noti-body span,.wrapper-noti.valentine .noti-body-com a,.wrapper-noti.valentine .noti-body-com span,.wrapper-noti.valentine .noti-title a,.wrapper-noti.valentine .noti-title span {
  color: #dd4754
}

.wrapper-noti.valentine .noti-time {
  color: #dd4754
}

.wrapper-noti.new_year {
  margin: 60px 0 0
}

.wrapper-noti.new_year .wrapper-theme {
  background-image: url(/assets/images/apps/sale_notification/images/holiday_theme/new_year-bg.png);
  background-size: 100% 100%;
  position: relative;
  z-index: 1
}

.wrapper-noti.new_year:before {
  content: '';
  position: absolute;
  bottom: calc(100% - 10px);
  left: 5px;
  width: 60px;
  height: 58px;
  background: url(/assets/images/apps/sale_notification/images/holiday_theme/new_year-icon_top.svg) 0 0 no-repeat;
  background-size: 100%
}

.wrapper-noti.new_year .noti-body a,.wrapper-noti.new_year .noti-body span,.wrapper-noti.new_year .noti-body-com a,.wrapper-noti.new_year .noti-body-com span,.wrapper-noti.new_year .noti-title a,.wrapper-noti.new_year .noti-title span {
  color: #fff
}

.wrapper-noti.new_year .noti-time {
  color: #fff
}

.wrapper-noti.thanks_giving {
  margin: 20px 0
}

.wrapper-noti.thanks_giving .wrapper-theme {
  background-image: url(/assets/images/apps/sale_notification/images/holiday_theme/thanks_giving-bg.png);
  background-size: 100% 100%;
  position: relative;
  z-index: 1
}

.wrapper-noti.thanks_giving::after,.wrapper-noti.thanks_giving::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 85px;
  left: 0;
  background: url(/assets/images/apps/sale_notification/images/holiday_theme/thanks_giving-icon_top.svg) no-repeat
}

.wrapper-noti.thanks_giving::before {
  top: -20%;
  -webkit-transform: rotate(3deg);
  transform: rotate(3deg)
}

.wrapper-noti.thanks_giving::after {
  bottom: -20%;
  -webkit-filter: FlipH;
  filter: FlipH;
  -ms-flipter: FlipH;
  -webkit-transform: rotate(3deg) scale(-1);
  transform: rotate(3deg) scale(-1)
}

.wrapper-noti.thanks_giving .close-noti [id=bkt-close] {
  fill: #ffb053
}

.wrapper-noti.thanks_giving .noti-body span,.wrapper-noti.thanks_giving .noti-body-com span,.wrapper-noti.thanks_giving .noti-title span {
  color: #c1272d
}

.wrapper-noti.thanks_giving .noti-body a,.wrapper-noti.thanks_giving .noti-body-com a,.wrapper-noti.thanks_giving .noti-title a {
  color: #f7931e
}

.wrapper-noti.thanks_giving .noti-time {
  color: #ffb053
}

.wrapper-noti.black_friday .close-noti [id=bkt-close],.wrapper-noti.cyber_monday .close-noti [id=bkt-close],.wrapper-noti.halloween .close-noti [id=bkt-close] {
  fill: #fff
}

.wrapper-noti.black_friday .noti-body a,.wrapper-noti.black_friday .noti-body span,.wrapper-noti.black_friday .noti-body-com a,.wrapper-noti.black_friday .noti-body-com span,.wrapper-noti.black_friday .noti-title a,.wrapper-noti.black_friday .noti-title span,.wrapper-noti.cyber_monday .noti-body a,.wrapper-noti.cyber_monday .noti-body span,.wrapper-noti.cyber_monday .noti-body-com a,.wrapper-noti.cyber_monday .noti-body-com span,.wrapper-noti.cyber_monday .noti-title a,.wrapper-noti.cyber_monday .noti-title span,.wrapper-noti.halloween .noti-body a,.wrapper-noti.halloween .noti-body span,.wrapper-noti.halloween .noti-body-com a,.wrapper-noti.halloween .noti-body-com span,.wrapper-noti.halloween .noti-title a,.wrapper-noti.halloween .noti-title span {
  color: #fff
}

.wrapper-noti.black_friday .noti-time,.wrapper-noti.cyber_monday .noti-time,.wrapper-noti.halloween .noti-time {
  color: #fff
}

.wrapper-noti.halloween {
  background-image: url(/assets/images/apps/sale_notification/images/holiday_theme/halloween-bg.png);
  background-size: 100% 100%
}

.wrapper-noti.black_friday {
  background-image: url(/assets/images/apps/sale_notification/images/holiday_theme/black_friday-bg.png);
  background-size: 100% 100%
}

.wrapper-noti.cyber_monday {
  background-image: url(/assets/images/apps/sale_notification/images/holiday_theme/cyber_monday-bg.png);
  background-size: 100% 100%
}

.wrapper-noti.dark {
  background-color: #1e2028
}

.wrapper-noti.dark.basic .close-noti [id=bkt-close],.wrapper-noti.dark.basicRounded .close-noti [id=bkt-close] {
  fill: #fff
}

.wrapper-noti.dark.basic .noti-body,.wrapper-noti.dark.basic .noti-body-com,.wrapper-noti.dark.basic .noti-time,.wrapper-noti.dark.basic .noti-title,.wrapper-noti.dark.basicRounded .noti-body,.wrapper-noti.dark.basicRounded .noti-body-com,.wrapper-noti.dark.basicRounded .noti-time,.wrapper-noti.dark.basicRounded .noti-title {
  color: #fff
}

.wrapper-noti.dark.basic .noti-body a,.wrapper-noti.dark.basic .noti-body span,.wrapper-noti.dark.basic .noti-body-com a,.wrapper-noti.dark.basic .noti-body-com span,.wrapper-noti.dark.basic .noti-time a,.wrapper-noti.dark.basic .noti-time span,.wrapper-noti.dark.basic .noti-title a,.wrapper-noti.dark.basic .noti-title span,.wrapper-noti.dark.basicRounded .noti-body a,.wrapper-noti.dark.basicRounded .noti-body span,.wrapper-noti.dark.basicRounded .noti-body-com a,.wrapper-noti.dark.basicRounded .noti-body-com span,.wrapper-noti.dark.basicRounded .noti-time a,.wrapper-noti.dark.basicRounded .noti-time span,.wrapper-noti.dark.basicRounded .noti-title a,.wrapper-noti.dark.basicRounded .noti-title span {
  color: #fff
}

.wrapper-noti.dark.basicLabel .close-noti [id=bkt-close] {
  fill: #c4c6d4
}

.wrapper-noti.dark.basicLabel .noti-title {
  background-color: #686868
}

.wrapper-noti.dark.basicLabel .noti-body,.wrapper-noti.dark.basicLabel .noti-body-com,.wrapper-noti.dark.basicLabel .noti-time,.wrapper-noti.dark.basicLabel .noti-title {
  color: #fff
}

.wrapper-noti.dark.basicLabel .noti-body a,.wrapper-noti.dark.basicLabel .noti-body span,.wrapper-noti.dark.basicLabel .noti-body-com a,.wrapper-noti.dark.basicLabel .noti-body-com span,.wrapper-noti.dark.basicLabel .noti-time a,.wrapper-noti.dark.basicLabel .noti-time span,.wrapper-noti.dark.basicLabel .noti-title a,.wrapper-noti.dark.basicLabel .noti-title span {
  color: #fff
}

.wrapper-noti.dark .bkt--brand,.wrapper-noti.dark a {
  color: #fff
}

.wrapper-noti.dark .bkt--brand a {
  text-decoration: underline
}

.wrapper-noti.light {
  background-color: #fff
}

.wrapper-noti.light.basic .noti-time,.wrapper-noti.light.basicRounded .noti-time {
  color: #55586c
}

.wrapper-noti.light.basicLabel .close-noti [id=bkt-close] {
  fill: #c4c6d4
}

.wrapper-noti.light.basicLabel .noti-title {
  background-color: #f2f2f8
}

.wrapper-noti.light.basicLabel .noti-time {
  color: #55586c
}

.wrapper-noti.light .bkt--brand,.wrapper-noti.light a,.wrapper-noti.light span {
  color: #55586c
}

.wrapper-noti.holiday-theme_type .bkt--brand {
  top: 100%;
  left: 50%;
  bottom: auto;
  right: auto;
  padding: 3px 20px;
  background: rgba(255,255,255,.7);
  border-radius: 100px;
  background-clip: padding-box;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%)
}

.wrapper-noti.holiday-theme_type .bkt--brand a {
  color: #312791
}

.wrapper-noti .bkt--brand {
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 11px;
  float: none
}

.wrapper-noti .bkt--brand span,.wrapper-noti .bkt--brand svg {
  float: none
}

.wrapper-noti .bkt--brand svg {
  vertical-align: middle
}

.wrapper-noti .bkt--brand span:hover {
  text-decoration: underline
}

.wrapper-noti .bkt--brand:hover {
  text-decoration: none
}

.wrapper-noti.slide-bottom-left-enter,.wrapper-noti.slide-bottom-left-leave-to,.wrapper-noti.slide-bottom-right-enter,.wrapper-noti.slide-bottom-right-leave-to {
  -webkit-transform: translateY(100%);
  transform: translateY(100%);
  opacity: 0;
  filter: alpha(opacity=0)
}

.wrapper-noti.active {
  opacity: 1;
}

.wrapper-noti.slide-top-left-enter,.wrapper-noti.slide-top-left-leave-to,.wrapper-noti.slide-top-right-enter,.wrapper-noti.slide-top-right-leave-to {
  -webkit-transform: translateY(-100%);
  transform: translateY(-100%);
  opacity: 0;
  filter: alpha(opacity=0)
}

.wrapper-noti.slide-bottom-enter,.wrapper-noti.slide-bottom-leave-to {
  -webkit-transform: translateY(100%);
  transform: translateY(100%);
  opacity: 0;
  filter: alpha(opacity=0)
}

.wrapper-noti.slide-top-enter,.wrapper-noti.slide-top-leave-to {
  -webkit-transform: translateY(-100%);
  transform: translateY(-100%);
  opacity: 0;
  filter: alpha(opacity=0)
}

@media(max-width: 320px) {
  .wrapper-noti {
    max-width:95%
  }
}

.modal-container {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: 0 16px;
  z-index: 99999;
  overflow-y: scroll;
  text-align: center
}

.modal-container .modal-mask {
  background: rgba(30,32,40,.88);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%
}

.modal-container .modal-wrapper {
  padding: 30px 0;
  display: inline-block;
  width: 100%;
  top: 50px;
  margin-bottom: 100px;
  background: #fff;
  position: relative
}

.turn-on-off {
  float: right;
  bottom: 2px;
  position: absolute;
  right: 2px;
}

@media(max-width: 480px) {
  .wrapper-noti.top, .wrapper-noti.bottom {
    left: 50%;
    margin-left: -168px;
  }
}

@media(min-width: 1024px) {
  .modal-container .modal-wrapper {
    width:886px
  }
}

@media(min-width: 768px) {
  .modal-container .modal-wrapper .modal-header .title-holiday {
    font-size:24px;
    line-height: 28px
  }
}

.modal-container .modal-wrapper .modal-header .modal-close {
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 15px;
  width: 12px;
  height: 12px
}

.modal-container .modal-wrapper .modal-header .modal-close img {
  vertical-align: top
}

.modal-container .modal-wrapper .modal-body .wrapper-themes {
  width: 100%;
  text-align: left;
  margin: 0 auto
}

@media(min-width: 768px) {
  .modal-container .modal-wrapper .modal-body .wrapper-themes {
    width:672px
  }
}

@media(min-width: 1024px) {
  .modal-container .modal-wrapper .modal-body .wrapper-themes {
    width:772px
  }
}


.modal-container .modal-wrapper .modal-body .wrapper-themes .radio {
  margin: 0 8px 16px;
  display: inline-block
}

@media(min-width: 768px) {
  .modal-container .modal-wrapper .modal-body .wrapper-themes .radio {
    width:320px
  }
}

@media(min-width: 1024px) {
  .modal-container .modal-wrapper .modal-body .wrapper-themes .radio {
    width:370px
  }
}

.modal-container .modal-wrapper .modal-body .wrapper-themes .radio label {
  padding-left: 0;
  position: relative
}

.modal-container .modal-wrapper .modal-body .wrapper-themes .radio label span.check,.modal-container .modal-wrapper .modal-body .wrapper-themes .radio label span.circle {
  position: absolute;
  top: 16px!important;
  right: 10px;
  left: auto;
  -webkit-transform: translate(0,0);
  transform: translate(0,0)
}

.modal-container .modal-wrapper .modal-body .wrapper-themes .radio label span.check {
  right: 14px;
  -webkit-transform: translate(-50%,50%);
  transform: translate(-50%,50%)
}

.modal-container .modal-wrapper .modal-body .wrapper-themes .radio label .included_el img {
  width: 100%
}

.modal-container .modal-wrapper .modal-footer {
  text-align: center
}

.modal-container .modal-wrapper .modal-footer .btn-save-theme {
  width: 208px
}

@media(min-width: 768px) {
  .modal-container .modal-wrapper .modal-footer .btn-save-theme {
    width:240px
  }
}

.wrapper-select-restaurant {
  position: relative;
  display: inline-block;
  vertical-align: top
}

.wrapper-select-restaurant img {
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 10px;
  z-index: 1;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%)
}

.wrapper-select-restaurant.search-restaurant .multiselect__select {
  display: none
}


.message_ticker {
  width: 800px;
  height:30px;
  overflow:hidden;
  float:left;
 -webkit-transition: 0.5s ease-in;  
-moz-transition: 0.5s ease-in;  
-o-transition: 0.5s ease-in;  
transition: 0.5s ease-in; 
  
}

.message_ticker:hover {
 -webkit-transition: 4s ease-in;  
-moz-transition: 4s ease-in;  
-o-transition: 4s ease-in;  
transition: 4s ease-in;  
  text-indent: -300px;
}


a:link {
  text-decoration: none;
}

`;
