(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["todo"],{

/***/ "./src/app/todo/add-todo/add-todo.component.js":
/*!*****************************************************!*\
  !*** ./src/app/todo/add-todo/add-todo.component.js ***!
  \*****************************************************/
/*! exports provided: AddTodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTodoComponent", function() { return AddTodoComponent; });
/* harmony import */ var _add_todo_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-todo.template */ "./src/app/todo/add-todo/add-todo.template.js");
/* harmony import */ var _todo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../todo.component */ "./src/app/todo/todo.component.js");
/* harmony import */ var _todo_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todo.model */ "./src/app/todo/todo.model.js");
/* harmony import */ var _add_todo_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-todo.model */ "./src/app/todo/add-todo/add-todo.model.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }





var AddTodoComponent = {
  validateTextInput: function validateTextInput() {
    if (_add_todo_model__WEBPACK_IMPORTED_MODULE_3__["AddTodoModel"].name === '' || _add_todo_model__WEBPACK_IMPORTED_MODULE_3__["AddTodoModel"].name == null) {
      return false;
    }

    return true;
  },
  render: function render() {
    return Object(_add_todo_template__WEBPACK_IMPORTED_MODULE_0__["addTodoTemplate"])();
  },
  afterRender: function afterRender(model) {
    var _this = this;

    var txtTodo = document.querySelector('.txt-todo');
    var btnAddTodo = document.querySelector('.btn-add-todo');
    txtTodo.addEventListener('change', function (event) {
      model.name = event.target.value;
    });
    txtTodo.addEventListener('keyup', function (event) {
      if (event.key === 'Enter' && _this.validateTextInput()) {
        var todo = {
          id: Date.now(),
          name: _add_todo_model__WEBPACK_IMPORTED_MODULE_3__["AddTodoModel"].name
        };
        _add_todo_model__WEBPACK_IMPORTED_MODULE_3__["AddTodoModel"].name = ''; // Modify parent component model and trigger change explicitly

        _todo_model__WEBPACK_IMPORTED_MODULE_2__["TodoModel"].todos = [].concat(_toConsumableArray(_todo_model__WEBPACK_IMPORTED_MODULE_2__["TodoModel"].todos), [todo]);
        event.target.value = '';
        _todo_component__WEBPACK_IMPORTED_MODULE_1__["TodoComponent"].render();
      }
    });
    btnAddTodo.addEventListener('click', function (event) {
      if (!_this.validateTextInput()) {
        return;
      }

      var todo = {
        id: Date.now(),
        name: _add_todo_model__WEBPACK_IMPORTED_MODULE_3__["AddTodoModel"].name
      };
      _add_todo_model__WEBPACK_IMPORTED_MODULE_3__["AddTodoModel"].name = ''; // Modify parent component model and trigger change explicitly

      _todo_model__WEBPACK_IMPORTED_MODULE_2__["TodoModel"].todos = [].concat(_toConsumableArray(_todo_model__WEBPACK_IMPORTED_MODULE_2__["TodoModel"].todos), [todo]);
      event.target.previousElementSibling.value = '';
      _todo_component__WEBPACK_IMPORTED_MODULE_1__["TodoComponent"].render();
    });
  }
};

/***/ }),

/***/ "./src/app/todo/add-todo/add-todo.model.js":
/*!*************************************************!*\
  !*** ./src/app/todo/add-todo/add-todo.model.js ***!
  \*************************************************/
/*! exports provided: AddTodoModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTodoModel", function() { return AddTodoModel; });
var AddTodoModel = {
  name: ''
};

/***/ }),

/***/ "./src/app/todo/add-todo/add-todo.template.js":
/*!****************************************************!*\
  !*** ./src/app/todo/add-todo/add-todo.template.js ***!
  \****************************************************/
/*! exports provided: addTodoTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTodoTemplate", function() { return addTodoTemplate; });
var addTodoTemplate = function addTodoTemplate() {
  return "\n    <section class=\"add-todo-section\">\n        <input class=\"txt-todo\" type=\"text\" />\n        <button class=\"btn-add-todo\"> Add Todo </button>\n    </section>\n";
};

/***/ }),

/***/ "./src/app/todo/todo-item/todo-item.template.js":
/*!******************************************************!*\
  !*** ./src/app/todo/todo-item/todo-item.template.js ***!
  \******************************************************/
/*! exports provided: todoItemTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todoItemTemplate", function() { return todoItemTemplate; });
var todoItemTemplate = function todoItemTemplate(todo) {
  return "\n    <li class=\"todo-item\">\n        <span class=\"todo-item-name\"> ".concat(todo.name, " </span>\n        <button id=\"").concat(todo.id, "\" class=\"btn-delete-todo\"> X </button>\n    </li>\n");
};

/***/ }),

/***/ "./src/app/todo/todo-list/todo-list.component.js":
/*!*******************************************************!*\
  !*** ./src/app/todo/todo-list/todo-list.component.js ***!
  \*******************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var _todo_list_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-list.template */ "./src/app/todo/todo-list/todo-list.template.js");
/* harmony import */ var _todo_item_todo_item_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../todo-item/todo-item.template */ "./src/app/todo/todo-item/todo-item.template.js");
/* harmony import */ var _todo_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todo.model */ "./src/app/todo/todo.model.js");
/* harmony import */ var _todo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../todo.component */ "./src/app/todo/todo.component.js");




var TodoListComponent = {
  render: function render(model) {
    var todosHTML = model.todos.reduce(function (html, todo) {
      return html + Object(_todo_item_todo_item_template__WEBPACK_IMPORTED_MODULE_1__["todoItemTemplate"])(todo);
    }, '');
    return Object(_todo_list_template__WEBPACK_IMPORTED_MODULE_0__["todoListTemplate"])(todosHTML);
  },
  afterRender: function afterRender(model) {
    var todoList = document.querySelector('.todo-list');
    todoList.addEventListener('click', function (event) {
      if (event.target.className === 'btn-delete-todo') {
        model.todos = _todo_model__WEBPACK_IMPORTED_MODULE_2__["TodoModel"].todos.filter(function (todo) {
          return todo.id !== Number(event.target.id);
        });
        _todo_component__WEBPACK_IMPORTED_MODULE_3__["TodoComponent"].render();
      }
    });
  }
};

/***/ }),

/***/ "./src/app/todo/todo-list/todo-list.template.js":
/*!******************************************************!*\
  !*** ./src/app/todo/todo-list/todo-list.template.js ***!
  \******************************************************/
/*! exports provided: todoListTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todoListTemplate", function() { return todoListTemplate; });
var todoListTemplate = function todoListTemplate(todos) {
  return "\n    <ul class=\"todo-list\">\n        ".concat(todos, "\n    </ul>\n");
};

/***/ }),

/***/ "./src/app/todo/todo.component.js":
/*!****************************************!*\
  !*** ./src/app/todo/todo.component.js ***!
  \****************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var _add_todo_add_todo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-todo/add-todo.component */ "./src/app/todo/add-todo/add-todo.component.js");
/* harmony import */ var _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-list/todo-list.component */ "./src/app/todo/todo-list/todo-list.component.js");
/* harmony import */ var _todo_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo.model */ "./src/app/todo/todo.model.js");
/* harmony import */ var _add_todo_add_todo_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-todo/add-todo.model */ "./src/app/todo/add-todo/add-todo.model.js");




var TodoComponent = {
  init: function init() {
    this.appElement = document.querySelector('#app');
    this.render();
  },
  render: function render() {
    var todoComponentViewHTML = '<section class="todo">';
    todoComponentViewHTML += _add_todo_add_todo_component__WEBPACK_IMPORTED_MODULE_0__["AddTodoComponent"].render(_add_todo_add_todo_model__WEBPACK_IMPORTED_MODULE_3__["AddTodoModel"]);
    todoComponentViewHTML += _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_1__["TodoListComponent"].render(_todo_model__WEBPACK_IMPORTED_MODULE_2__["TodoModel"]);
    todoComponentViewHTML += '</section>';
    this.appElement.innerHTML = todoComponentViewHTML;
    this.afterRender();
  },
  afterRender: function afterRender() {
    _add_todo_add_todo_component__WEBPACK_IMPORTED_MODULE_0__["AddTodoComponent"].afterRender(_add_todo_add_todo_model__WEBPACK_IMPORTED_MODULE_3__["AddTodoModel"]);
    _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_1__["TodoListComponent"].afterRender(_todo_model__WEBPACK_IMPORTED_MODULE_2__["TodoModel"]);
  }
};

/***/ }),

/***/ "./src/app/todo/todo.model.js":
/*!************************************!*\
  !*** ./src/app/todo/todo.model.js ***!
  \************************************/
/*! exports provided: TodoModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoModel", function() { return TodoModel; });
var TodoModel = {
  todos: []
};

/***/ }),

/***/ "./src/app/todo/todo.module.js":
/*!*************************************!*\
  !*** ./src/app/todo/todo.module.js ***!
  \*************************************/
/*! exports provided: TodoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoModule", function() { return TodoModule; });
/* harmony import */ var _todo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.component */ "./src/app/todo/todo.component.js");

var TodoModule = {
  init: function init() {
    this.initComponents();
  },
  initComponents: function initComponents() {
    _todo_component__WEBPACK_IMPORTED_MODULE_0__["TodoComponent"].init();
  }
};

/***/ })

}]);
//# sourceMappingURL=todo.js.map