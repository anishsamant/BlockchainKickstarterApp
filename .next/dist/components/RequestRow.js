"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _web = require("../ethereum/web3.js");

var _web2 = _interopRequireDefault(_web);

var _campaign = require("../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\ANISH\\BlockChainProjects\\kickstarter\\components\\RequestRow.js";


var RequestRow = function (_Component) {
  (0, _inherits3.default)(RequestRow, _Component);

  function RequestRow() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var campaign, accounts;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              campaign = (0, _campaign2.default)(_this.props.address);
              _context.next = 3;
              return _web2.default.eth.getAccounts();

            case 3:
              accounts = _context.sent;
              _context.next = 6;
              return campaign.methods.approveRequest(_this.props.id).send({
                from: accounts[0]
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _this.onFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var campaign, accounts;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              campaign = (0, _campaign2.default)(_this.props.address);
              _context2.next = 3;
              return _web2.default.eth.getAccounts();

            case 3:
              accounts = _context2.sent;
              _context2.next = 6;
              return campaign.methods.finalizeRequest(_this.props.id).send({
                from: accounts[0]
              });

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RequestRow, [{
    key: "render",
    value: function render() {
      var Row = _semanticUiReact.Table.Row,
          Cell = _semanticUiReact.Table.Cell;
      var _props = this.props,
          id = _props.id,
          request = _props.request,
          contributersCount = _props.contributersCount;

      var readyToFinalize = request.approvalCount > contributersCount / 2;
      return _react2.default.createElement(Row, {
        disabled: request.complete,
        positive: readyToFinalize && !request.complete,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, id), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, request.description), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _web2.default.utils.fromWei(request.value, "ether")), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, request.recipient), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, request.approvalCount, "/", contributersCount), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: "green", basic: true, onClick: this.onApprove, __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, "Approve")), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: "teal", basic: true, onClick: this.onFinalize, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, "Finalize")));
    }
  }]);

  return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFJlcXVlc3RSb3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJUYWJsZSIsIkJ1dHRvbiIsIndlYjMiLCJDYW1wYWlnbiIsIlJlcXVlc3RSb3ciLCJvbkFwcHJvdmUiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiYXBwcm92ZVJlcXVlc3QiLCJpZCIsInNlbmQiLCJmcm9tIiwib25GaW5hbGl6ZSIsImZpbmFsaXplUmVxdWVzdCIsIlJvdyIsIkNlbGwiLCJyZXF1ZXN0IiwiY29udHJpYnV0ZXJzQ291bnQiLCJyZWFkeVRvRmluYWxpemUiLCJhcHByb3ZhbENvdW50IiwiY29tcGxldGUiLCJkZXNjcmlwdGlvbiIsInV0aWxzIiwiZnJvbVdlaSIsInZhbHVlIiwicmVjaXBpZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTzs7QUFDaEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBYzs7Ozs7Ozs7O0lBRWYsQTs7Ozs7Ozs7Ozs7Ozs7O29OLEFBQ0oscUZBQVksbUJBQUE7b0JBQUE7b0VBQUE7a0JBQUE7MkNBQUE7aUJBQ0o7QUFESSx5QkFDTyx3QkFBUyxNQUFBLEFBQUssTUFEckIsQUFDTyxBQUFvQjs4QkFEM0I7cUJBRWEsY0FBQSxBQUFLLElBRmxCLEFBRWEsQUFBUzs7aUJBQTFCO0FBRkksa0NBQUE7OEJBQUE7OEJBR0osQUFBUyxRQUFULEFBQWlCLGVBQWUsTUFBQSxBQUFLLE1BQXJDLEFBQTJDLElBQTNDLEFBQStDO3NCQUM3QyxTQUpFLEFBR0osQUFBb0QsQUFDbEQsQUFBUztBQUR5QyxBQUN4RCxlQURJOztpQkFISTtpQkFBQTs4QkFBQTs7QUFBQTtrQkFBQTtBLGUsQUFRWixzRkFBYSxvQkFBQTtvQkFBQTtzRUFBQTtrQkFBQTs2Q0FBQTtpQkFDTDtBQURLLHlCQUNNLHdCQUFTLE1BQUEsQUFBSyxNQURwQixBQUNNLEFBQW9COytCQUQxQjtxQkFFWSxjQUFBLEFBQUssSUFGakIsQUFFWSxBQUFTOztpQkFBMUI7QUFGSyxtQ0FBQTsrQkFBQTs4QkFHTCxBQUFTLFFBQVQsQUFBaUIsZ0JBQWdCLE1BQUEsQUFBSyxNQUF0QyxBQUE0QyxJQUE1QyxBQUFnRDtzQkFDOUMsU0FKRyxBQUdMLEFBQXFELEFBQ25ELEFBQVM7QUFEMEMsQUFDekQsZUFESTs7aUJBSEs7aUJBQUE7K0JBQUE7O0FBQUE7bUJBQUE7QTs7Ozs7NkJBUUo7VUFBQSxBQUNDLE1BREQsQUFDZSx1QkFEZixBQUNDO1VBREQsQUFDTSxPQUROLEFBQ2UsdUJBRGYsQUFDTTttQkFDOEIsS0FGcEMsQUFFeUM7VUFGekMsQUFFQyxZQUZELEFBRUM7VUFGRCxBQUVLLGlCQUZMLEFBRUs7VUFGTCxBQUVjLDJCQUZkLEFBRWMsQUFDckI7O1VBQU0sa0JBQWtCLFFBQUEsQUFBUSxnQkFBZ0Isb0JBQWhELEFBQW9FLEFBQ3BFOzZCQUNHLGNBQUQ7a0JBQ1ksUUFEWixBQUNvQixBQUNsQjtrQkFBVSxtQkFBbUIsQ0FBQyxRQUZoQyxBQUV3Qzs7b0JBRnhDO3NCQUFBLEFBSUU7QUFKRjtBQUNFLE9BREYsa0JBSUcsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsU0FKRixBQUlFLEFBQ0EscUJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsaUJBTEYsQUFLRSxBQUFlLEFBQ2YsOEJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsdUJBQU8sQUFBSyxNQUFMLEFBQVcsUUFBUSxRQUFuQixBQUEyQixPQU5wQyxBQU1FLEFBQU8sQUFBa0MsQUFDekMsMkJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsaUJBUEYsQUFPRSxBQUFlLEFBQ2YsNEJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFDRztBQURIO0FBQUEsaUJBQUEsQUFDVyxlQUFnQixLQVQ3QixBQVFFLEFBR0Esb0NBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFDRztBQURIO0FBQUEsaUJBQ0csQUFBUSxXQUFSLEFBQW1CLHVCQUNsQixBQUFDLHlDQUFPLE9BQVIsQUFBYyxTQUFRLE9BQXRCLE1BQTRCLFNBQVMsS0FBckMsQUFBMEM7b0JBQTFDO3NCQUFBO0FBQUE7T0FBQSxFQWJOLEFBV0UsQUFFSSxBQUtKLDZCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0c7QUFESDtBQUFBLGlCQUNHLEFBQVEsV0FBUixBQUFtQix1QkFDbEIsQUFBQyx5Q0FBTyxPQUFSLEFBQWMsUUFBTyxPQUFyQixNQUEyQixTQUFTLEtBQXBDLEFBQXlDO29CQUF6QztzQkFBQTtBQUFBO09BQUEsRUFyQlIsQUFDRSxBQWtCRSxBQUVJLEFBT1Q7Ozs7O0FBakRzQixBLEFBb0R6Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJSZXF1ZXN0Um93LmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0FOSVNIL0Jsb2NrQ2hhaW5Qcm9qZWN0cy9raWNrc3RhcnRlciJ9