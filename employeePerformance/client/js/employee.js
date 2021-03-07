/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/employee/index.ts":
/*!*******************************!*\
  !*** ./src/employee/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.performance = exports.EmployeeGlobal = void 0;

var EmployeeGlobal_1 = __webpack_require__(/*! ./performance/EmployeeGlobal */ "./src/employee/performance/EmployeeGlobal.ts");

Object.defineProperty(exports, "EmployeeGlobal", {
  enumerable: true,
  get: function get() {
    return EmployeeGlobal_1.EmployeeGlobal;
  }
});

var performance = __webpack_require__(/*! ../employee/performance */ "./src/employee/performance/index.ts");

exports.performance = performance;

/***/ }),

/***/ "./src/employee/performance/EmployeeGlobal.ts":
/*!****************************************************!*\
  !*** ./src/employee/performance/EmployeeGlobal.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmployeeGlobal = void 0;

var EmployeeGlobal = /*#__PURE__*/function () {
  function EmployeeGlobal() {
    _classCallCheck(this, EmployeeGlobal);
  }

  _createClass(EmployeeGlobal, null, [{
    key: "language",
    get: function get() {
      return this._language;
    },
    set: function set(value) {
      this._language = value;
    }
  }]);

  return EmployeeGlobal;
}();

exports.EmployeeGlobal = EmployeeGlobal; //アプリ情報

EmployeeGlobal.APP_NAME = "Employee Performnace";
EmployeeGlobal.APP_VERSION = "";
EmployeeGlobal.APP_CUSTOM = "";
/**
 * 言語
 */

EmployeeGlobal._language = "jp";
EmployeeGlobal.ROOT_URL = "http://localhost:3000";

/***/ }),

/***/ "./src/employee/performance/collection/index.ts":
/*!******************************************************!*\
  !*** ./src/employee/performance/collection/index.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Messages = void 0;

var messages_1 = __webpack_require__(/*! ./messages */ "./src/employee/performance/collection/messages.ts");

Object.defineProperty(exports, "Messages", {
  enumerable: true,
  get: function get() {
    return messages_1.Messages;
  }
});

/***/ }),

/***/ "./src/employee/performance/collection/messages.ts":
/*!*********************************************************!*\
  !*** ./src/employee/performance/collection/messages.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Messages = void 0;

var employee = __webpack_require__(/*! ../../../employee */ "./src/employee/index.ts");

var Messages = /*#__PURE__*/function () {
  function Messages() {
    _classCallCheck(this, Messages);
  }

  _createClass(Messages, null, [{
    key: "getText",
    value:
    /**
     * メッセージの取得
     * @param key:string
    */
    function getText(key) {
      var varname = (key + "_" + employee.performance.EmployeeGlobal.language).toUpperCase();
      return employee.performance.collection.Messages[varname];
    }
  }]);

  return Messages;
}();

exports.Messages = Messages;
Messages.ERROR_TITLE_JP = "警告";
Messages.ERROR_TITLE_EN = "Warning";
Messages.ERROR_INPUT_USERNAME_JP = "ユーザー名を入力してください";
Messages.ERROR_INPUT_USERNAME_EN = "Please enter username.";
Messages.ERROR_INPUT_PASSWORD_JP = "パスワードを入力してください";
Messages.ERROR_INPUT_PASSWORD_EN = "Please enter password.";
Messages.ERROR_INPUT_FIRSTNAME_JP = "名を入力してください";
Messages.ERROR_INPUT_FIRSTNAME_EN = "Please enter firstname.";
Messages.ERROR_INPUT_LASTNAME_JP = "姓を入力してください";
Messages.ERROR_INPUT_LASTNAME_EN = "Please enter lastname.";
Messages.ERROR_INPUT_EMAIL_JP = "メールアドレスを入力してください";
Messages.ERROR_INPUT_EMAIL_EN = "Please enter email.";
Messages.ERROR_INPUT_TITLE_JP = "タイトルを入力してください";
Messages.ERROR_INPUT_TITLE_EN = "Please enter title.";
Messages.ERROR_INPUT_DEPARTMENT_JP = "部門を入力してください";
Messages.ERROR_INPUT_DEPARTMENT_EN = "Please enter department.";
Messages.ERROR_INPUT_PASSWORD2_JP = "パスワードが違います。";
Messages.ERROR_INPUT_PASSWORD2_EN = "Please check your password.";

/***/ }),

/***/ "./src/employee/performance/index.ts":
/*!*******************************************!*\
  !*** ./src/employee/performance/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.collection = exports.manager = exports.EmployeeGlobal = void 0;

var EmployeeGlobal_1 = __webpack_require__(/*! ./EmployeeGlobal */ "./src/employee/performance/EmployeeGlobal.ts");

Object.defineProperty(exports, "EmployeeGlobal", {
  enumerable: true,
  get: function get() {
    return EmployeeGlobal_1.EmployeeGlobal;
  }
});

var manager = __webpack_require__(/*! ./manager */ "./src/employee/performance/manager/index.ts");

exports.manager = manager;

var collection = __webpack_require__(/*! ./collection */ "./src/employee/performance/collection/index.ts");

exports.collection = collection;

/***/ }),

/***/ "./src/employee/performance/manager/index.ts":
/*!***************************************************!*\
  !*** ./src/employee/performance/manager/index.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginManager = void 0;

var loginManager_1 = __webpack_require__(/*! ./loginManager */ "./src/employee/performance/manager/loginManager.ts");

Object.defineProperty(exports, "LoginManager", {
  enumerable: true,
  get: function get() {
    return loginManager_1.LoginManager;
  }
});

/***/ }),

/***/ "./src/employee/performance/manager/loginManager.ts":
/*!**********************************************************!*\
  !*** ./src/employee/performance/manager/loginManager.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginManager = void 0;

var employee = __webpack_require__(/*! ../../../employee */ "./src/employee/index.ts");

var LoginManager = /*#__PURE__*/function () {
  function LoginManager() {
    _classCallCheck(this, LoginManager);

    //ページ読込時のイベント
    this.init();
  }

  _createClass(LoginManager, [{
    key: "init",
    value: function init() {}
  }, {
    key: "login",
    value: function login() {
      var self = this;
      var username = $('#login-form').find('#username').val();
      var pass = $('#login-form').find('input[type="password"]:visible').val();

      if (!username) {
        $('#login-form').find('.msg_error').text(employee.performance.collection.Messages.getText("ERROR_INPUT_USERNAME"));
        return;
      } else if (!pass) {
        $('#login-form').find('.msg_error').text(employee.performance.collection.Messages.getText("ERROR_INPUT_PASSWORD"));
        return;
      } else {
        $('#login-form').find('.msg_error').text("");
      }

      var data;
      data = "username=" + username;
      data += "&password=" + pass;
      $.ajax({
        url: employee.EmployeeGlobal.ROOT_URL + '/api/signin',
        type: 'post',
        dataType: 'json',
        data: data
      }).done(function (list) {
        console.log(list);
      }).fail(function (e) {
        console.error(e);
        $('#login-form').find('.msg_error').text(employee.performance.collection.Messages.getText("ERROR_INPUT_PASSWORD"));
      });
    }
  }, {
    key: "register",
    value: function register() {
      var self = this;
      var username = $('#register-form').find('#username').val();
      var password = $('#register-form').find('#password').val();
      var email = $('#register-form').find('#email').val();
      var firstname = $('#register-form').find('#firstname').val();
      var lastname = $('#register-form').find('#lastname').val();
      var title = $('#register-form').find('#jobtitle').val();
      var dept = $('#register-form').find('#department').val();

      if (!username) {
        $('#register-form').find('.msg_error').text(employee.performance.collection.Messages.getText("ERROR_INPUT_USERNAME"));
        return;
      } else if (!password) {
        $('#register-form').find('.msg_error').text(employee.performance.collection.Messages.getText("ERROR_INPUT_PASSWORD"));
        return;
      } else if (!firstname) {
        $('#register-form').find('.msg_error').text(employee.performance.collection.Messages.getText("ERROR_INPUT_firstname"));
        return;
      } else if (!lastname) {
        $('#register-form').find('.msg_error').text(employee.performance.collection.Messages.getText("ERROR_INPUT_lastname"));
        return;
      } else if (!email) {
        $('#register-form').find('.msg_error').text(employee.performance.collection.Messages.getText("ERROR_INPUT_EMAIL"));
        return;
      } else if (!title) {
        $('#register-form').find('.msg_error').text(employee.performance.collection.Messages.getText("ERROR_INPUT_title"));
        return;
      } else if (!dept) {
        $('#register-form').find('.msg_error').text(employee.performance.collection.Messages.getText("ERROR_INPUT_department"));
        return;
      } else {
        $('#register-form').find('.msg_error').text("");
      }

      var data;
      data = "email=" + email;
      data += "&username=" + username;
      data += "&password=" + password;
      data += "&firstname=" + firstname;
      data += "&latname=" + lastname;
      data += "&title=" + title;
      data += "&department=" + dept;
      $.ajax({
        url: employee.EmployeeGlobal.ROOT_URL + '/api/signin?' + new Date().getTime(),
        type: 'post',
        dataType: 'json',
        data: data
      }).done(function (list) {}).fail(function (e) {
        console.error(e);
        $('#login-form').find('.msg_error').text(employee.performance.collection.Messages.getText("ERROR_INPUT_PASSWORD"));
      });
    }
  }]);

  return LoginManager;
}();

exports.LoginManager = LoginManager;

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Main = void 0;

var employee = __webpack_require__(/*! ./employee */ "./src/employee/index.ts");

var Main = /*#__PURE__*/function () {
  function Main() {
    var _this = this;

    _classCallCheck(this, Main);

    /**
     * ページが表示された
     */
    this.onPageLoaded = function () {
      if (navigator.language.match(/en/i)) {
        $('body').addClass('lang-en');
        employee.EmployeeGlobal.language = 'en';
      } else {
        $('body').addClass('lang-jp');
        employee.EmployeeGlobal.language = 'jp';
      }

      try {
        _this.onLoad();
      } catch (e) {
        window.addEventListener('DOMContentLoaded', _this.onLoad);
      }
    }; //ページ読込時のイベント


    window.addEventListener("pageshow", this.onPageLoaded);
  }
  /**
   * 初期化
   */


  _createClass(Main, [{
    key: "onLoad",
    value: function onLoad() {
      var loginManager = new employee.performance.manager.LoginManager();
      employee.EmployeeGlobal.loginManager = loginManager;
      $("#login-form").submit(function (event) {
        /* stop form from submitting normally */
        event.preventDefault();
        employee.EmployeeGlobal.loginManager.login();
      });
      $("#register-form").submit(function (event) {
        /* stop form from submitting normally */
        event.preventDefault();
        employee.EmployeeGlobal.loginManager.register();
      });
    }
  }]);

  return Main;
}();

exports.Main = Main;

var _main = new Main();

/***/ })

/******/ });
//# sourceMappingURL=employee.js.map