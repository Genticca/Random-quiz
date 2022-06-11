"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var player = new ( /*#__PURE__*/function () {
  function _class2() {
    _classCallCheck(this, _class2);

    _defineProperty(this, "ratio", []);

    _defineProperty(this, "count", 0);

    _defineProperty(this, "cnt", 0);

    _defineProperty(this, "diffi", '초급');

    _defineProperty(this, "nickname", '');

    _defineProperty(this, "answer", []);

    _defineProperty(this, "check", []);
  }

  _createClass(_class2, [{
    key: "setPlayer",
    value: function setPlayer(config, arr) {
      var score = 0;

      if (config.ratio.length > arr.length) {
        alert('출제 주제보다 출제 비율이 더 많습니다.');
      } else {
        this.count = config.count;

        for (var i = 0; i < arr.length; i++) {
          arr[i].sort(function () {
            return Math.random() - 0.5;
          });
        }

        this.list = arr;
      }

      for (var _i = 0; _i < arr.length; _i++) {
        if (config.ratio[_i]) {
          this.ratio.push(config.ratio[_i] * 0.01);
        } else {
          this.ratio.push(25 * 0.01);
        }
      }
    }
  }, {
    key: "setMinNum",
    value: function setMinNum() {
      var min = this.list[0].length,
          num = 0;

      for (var i = 0; i < this.list.length; i++) {
        if (this.list[i].length < min) {
          min = this.list[i].length;
          num = i;
        }
      }

      return num;
    }
  }, {
    key: "setAnswer",
    value: function setAnswer(str) {
      var reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
      str = str.replace(reg, '');
      str = str.replace(/\s/g, '');
      str = str.replace(/^\s+|\s+$/g, '');
      this.answer.push(str);
    }
  }]);

  return _class2;
}())();
var test = [];

window.onload = function () {
  var location = document.querySelector('body').offsetHeight;

  document.getElementById('esay').onclick = function () {
    window.scrollTo({
      top: location,
      left: 0,
      behavior: 'smooth'
    });
  };

  document.getElementById('nickname_regs').onsubmit = function () {
    var nickname = document.getElementById('nickname').value;

    if (confirm('시작 이후 이름을 바꾸지 못 합니다.')) {
      if (nickname == '') {
        alert('빈칸을 입력해주세요.');
        return false;
      } else {
        player.nickname = nickname;
        questionAdd();
        document.getElementById('nickname').setAttribute('disabled', '');
        document.getElementById('subnickname').setAttribute('disabled', '');
        window.scrollTo({
          top: location,
          left: 0,
          behavior: 'smooth'
        });
        return false;
      }
    }
  };
};

var questionAdd = function questionAdd() {
  var parents = document.getElementById('warp');
  var num = Math.floor(Math.random() * player.list.length),
      result;

  for (var i = 0; i < player.list.length; i++) {
    if (player.list[i].length == 0) {
      player.list.splice(i, 1);
      num = player.setMinNum();
    }
  }

  var value = Math.floor(Math.random() * player.list[num].length);
  result = player.list[num][value];
  player.list[num].splice(value, 1);
  player.cnt++;
  player.setAnswer(result.answer);
  document.getElementById('warp').appendChild(elementAdd(result));
  test.push(document.getElementById("answer_form_".concat(player.cnt)).onsubmit = function () {
    var answer = document.getElementById("answer_input_".concat(player.cnt)).value;
    var location = document.querySelector('body').offsetHeight;
    var reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
    answer = answer.replace(reg, '');
    answer = answer.replace(/\s/g, '');
    answer = answer.replace(/^\s+|\s+$/g, '');

    if (answer == '') {
      if (confirm('이대로 진행해도 괜찮습니까?')) {
        questionAdd();
        document.getElementById("answer_input_".concat(player.cnt - 1)).setAttribute('disabled', '');
        document.getElementById("answer_submit_".concat(player.cnt - 1)).setAttribute('disabled', '');
        player.check.push(answer);
        window.scrollTo({
          top: location,
          left: 0,
          behavior: 'smooth'
        });
      }
    } else {
      questionAdd();
      document.getElementById("answer_input_".concat(player.cnt - 1)).setAttribute('disabled', '');
      document.getElementById("answer_submit_".concat(player.cnt - 1)).setAttribute('disabled', '');
      player.check.push(answer);
      window.scrollTo({
        top: location,
        left: 0,
        behavior: 'smooth'
      });
    }

    return false;
  });
};

var elementAdd = function elementAdd(result) {
  var str = '다음',
      tag = '';
  var content_section = document.createElement('div');
  content_section.setAttribute('id', 'content_section');
  content_section.setAttribute('class', 'quest_content');
  var content_inner = document.createElement('div');
  content_inner.setAttribute('id', 'content_inner');
  content_inner.setAttribute('class', 'quest_section');

  if (player.cnt == player.count) {
    str = '제출';
    tag = 'onclick="endTest()"';
  }

  content_inner.innerHTML = "\n    <span>".concat(player.cnt, "\uBC88</span>\n    <p>").concat(result.question, "</p>\n    <form id=\"answer_form_").concat(player.cnt, "\">\n        <input type=\"text\" name=\"answer_input\" id=\"answer_input_").concat(player.cnt, "\">\n        <div>\n            <input type=\"submit\" id=\"answer_submit_").concat(player.cnt, "\" ").concat(tag, " value=\"").concat(str, "\">\n        </div>\n    </form>\n    ");
  content_section.appendChild(content_inner);
  return content_section;
};

var endTest = function endTest() {
  var score = 0;

  for (var i = 0; i < player.answer.length; i++) {
    if (player.answer[i] == player.check[i]) {
      score += 1;
    }
  }

  var str = '';
  var content_section = document.createElement('div');
  content_section.setAttribute('id', 'content_section');
  content_section.setAttribute('class', 'quest_content');
  var content_inner = document.createElement('div');
  content_inner.setAttribute('id', 'content_inner');
  content_inner.setAttribute('class', 'quest_section');

  if (score > 35) {
    str = '엄청 똑똑함';
  } else if (score > 28) {
    str = '그냥 똑똑함';
  } else if (score > 22) {
    str = '똑똑함';
  } else if (score > 16) {
    str = '평범함';
  } else if (score > 10) {
    str = '조금만 더 공부해야됨';
  } else {
    str = '?';
  }

  content_inner.innerHTML = "\n    <p>\uC218\uD5D8\uC790 : ".concat(player.nickname, "<p>\n    <p>\uC810\uC218 : ").concat(score, "<p>\n    <p>\uB4F1\uAE09 : ").concat(str, "<p>\n    ");
  content_section.appendChild(content_inner);
  document.getElementById('warp').appendChild(content_section);
};
