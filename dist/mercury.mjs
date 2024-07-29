var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/.pnpm/tsup@8.2.3_typescript@5.5.4/node_modules/tsup/assets/esm_shims.js
var init_esm_shims = __esm({
  "node_modules/.pnpm/tsup@8.2.3_typescript@5.5.4/node_modules/tsup/assets/esm_shims.js"() {
  }
});

// node_modules/.pnpm/heap@0.2.7/node_modules/heap/lib/heap.js
var require_heap = __commonJS({
  "node_modules/.pnpm/heap@0.2.7/node_modules/heap/lib/heap.js"(exports, module) {
    init_esm_shims();
    (function() {
      var Heap, defaultCmp, floor, heapify, heappop, heappush, heappushpop, heapreplace, insort, min, nlargest, nsmallest, updateItem, _siftdown, _siftup;
      floor = Math.floor, min = Math.min;
      defaultCmp = function(x, y) {
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      };
      insort = function(a, x, lo, hi, cmp) {
        var mid;
        if (lo == null) {
          lo = 0;
        }
        if (cmp == null) {
          cmp = defaultCmp;
        }
        if (lo < 0) {
          throw new Error("lo must be non-negative");
        }
        if (hi == null) {
          hi = a.length;
        }
        while (lo < hi) {
          mid = floor((lo + hi) / 2);
          if (cmp(x, a[mid]) < 0) {
            hi = mid;
          } else {
            lo = mid + 1;
          }
        }
        return [].splice.apply(a, [lo, lo - lo].concat(x)), x;
      };
      heappush = function(array, item, cmp) {
        if (cmp == null) {
          cmp = defaultCmp;
        }
        array.push(item);
        return _siftdown(array, 0, array.length - 1, cmp);
      };
      heappop = function(array, cmp) {
        var lastelt, returnitem;
        if (cmp == null) {
          cmp = defaultCmp;
        }
        lastelt = array.pop();
        if (array.length) {
          returnitem = array[0];
          array[0] = lastelt;
          _siftup(array, 0, cmp);
        } else {
          returnitem = lastelt;
        }
        return returnitem;
      };
      heapreplace = function(array, item, cmp) {
        var returnitem;
        if (cmp == null) {
          cmp = defaultCmp;
        }
        returnitem = array[0];
        array[0] = item;
        _siftup(array, 0, cmp);
        return returnitem;
      };
      heappushpop = function(array, item, cmp) {
        var _ref;
        if (cmp == null) {
          cmp = defaultCmp;
        }
        if (array.length && cmp(array[0], item) < 0) {
          _ref = [array[0], item], item = _ref[0], array[0] = _ref[1];
          _siftup(array, 0, cmp);
        }
        return item;
      };
      heapify = function(array, cmp) {
        var i, _i, _j, _len, _ref, _ref1, _results, _results1;
        if (cmp == null) {
          cmp = defaultCmp;
        }
        _ref1 = function() {
          _results1 = [];
          for (var _j2 = 0, _ref2 = floor(array.length / 2); 0 <= _ref2 ? _j2 < _ref2 : _j2 > _ref2; 0 <= _ref2 ? _j2++ : _j2--) {
            _results1.push(_j2);
          }
          return _results1;
        }.apply(this).reverse();
        _results = [];
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          i = _ref1[_i];
          _results.push(_siftup(array, i, cmp));
        }
        return _results;
      };
      updateItem = function(array, item, cmp) {
        var pos;
        if (cmp == null) {
          cmp = defaultCmp;
        }
        pos = array.indexOf(item);
        if (pos === -1) {
          return;
        }
        _siftdown(array, 0, pos, cmp);
        return _siftup(array, pos, cmp);
      };
      nlargest = function(array, n, cmp) {
        var elem, result2, _i, _len, _ref;
        if (cmp == null) {
          cmp = defaultCmp;
        }
        result2 = array.slice(0, n);
        if (!result2.length) {
          return result2;
        }
        heapify(result2, cmp);
        _ref = array.slice(n);
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          elem = _ref[_i];
          heappushpop(result2, elem, cmp);
        }
        return result2.sort(cmp).reverse();
      };
      nsmallest = function(array, n, cmp) {
        var elem, i, los, result2, _i, _j, _len, _ref, _ref1, _results;
        if (cmp == null) {
          cmp = defaultCmp;
        }
        if (n * 10 <= array.length) {
          result2 = array.slice(0, n).sort(cmp);
          if (!result2.length) {
            return result2;
          }
          los = result2[result2.length - 1];
          _ref = array.slice(n);
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            elem = _ref[_i];
            if (cmp(elem, los) < 0) {
              insort(result2, elem, 0, null, cmp);
              result2.pop();
              los = result2[result2.length - 1];
            }
          }
          return result2;
        }
        heapify(array, cmp);
        _results = [];
        for (i = _j = 0, _ref1 = min(n, array.length); 0 <= _ref1 ? _j < _ref1 : _j > _ref1; i = 0 <= _ref1 ? ++_j : --_j) {
          _results.push(heappop(array, cmp));
        }
        return _results;
      };
      _siftdown = function(array, startpos, pos, cmp) {
        var newitem, parent, parentpos;
        if (cmp == null) {
          cmp = defaultCmp;
        }
        newitem = array[pos];
        while (pos > startpos) {
          parentpos = pos - 1 >> 1;
          parent = array[parentpos];
          if (cmp(newitem, parent) < 0) {
            array[pos] = parent;
            pos = parentpos;
            continue;
          }
          break;
        }
        return array[pos] = newitem;
      };
      _siftup = function(array, pos, cmp) {
        var childpos, endpos, newitem, rightpos, startpos;
        if (cmp == null) {
          cmp = defaultCmp;
        }
        endpos = array.length;
        startpos = pos;
        newitem = array[pos];
        childpos = 2 * pos + 1;
        while (childpos < endpos) {
          rightpos = childpos + 1;
          if (rightpos < endpos && !(cmp(array[childpos], array[rightpos]) < 0)) {
            childpos = rightpos;
          }
          array[pos] = array[childpos];
          pos = childpos;
          childpos = 2 * pos + 1;
        }
        array[pos] = newitem;
        return _siftdown(array, startpos, pos, cmp);
      };
      Heap = function() {
        Heap2.push = heappush;
        Heap2.pop = heappop;
        Heap2.replace = heapreplace;
        Heap2.pushpop = heappushpop;
        Heap2.heapify = heapify;
        Heap2.updateItem = updateItem;
        Heap2.nlargest = nlargest;
        Heap2.nsmallest = nsmallest;
        function Heap2(cmp) {
          this.cmp = cmp != null ? cmp : defaultCmp;
          this.nodes = [];
        }
        Heap2.prototype.push = function(x) {
          return heappush(this.nodes, x, this.cmp);
        };
        Heap2.prototype.pop = function() {
          return heappop(this.nodes, this.cmp);
        };
        Heap2.prototype.peek = function() {
          return this.nodes[0];
        };
        Heap2.prototype.contains = function(x) {
          return this.nodes.indexOf(x) !== -1;
        };
        Heap2.prototype.replace = function(x) {
          return heapreplace(this.nodes, x, this.cmp);
        };
        Heap2.prototype.pushpop = function(x) {
          return heappushpop(this.nodes, x, this.cmp);
        };
        Heap2.prototype.heapify = function() {
          return heapify(this.nodes, this.cmp);
        };
        Heap2.prototype.updateItem = function(x) {
          return updateItem(this.nodes, x, this.cmp);
        };
        Heap2.prototype.clear = function() {
          return this.nodes = [];
        };
        Heap2.prototype.empty = function() {
          return this.nodes.length === 0;
        };
        Heap2.prototype.size = function() {
          return this.nodes.length;
        };
        Heap2.prototype.clone = function() {
          var heap;
          heap = new Heap2();
          heap.nodes = this.nodes.slice(0);
          return heap;
        };
        Heap2.prototype.toArray = function() {
          return this.nodes.slice(0);
        };
        Heap2.prototype.insert = Heap2.prototype.push;
        Heap2.prototype.top = Heap2.prototype.peek;
        Heap2.prototype.front = Heap2.prototype.peek;
        Heap2.prototype.has = Heap2.prototype.contains;
        Heap2.prototype.copy = Heap2.prototype.clone;
        return Heap2;
      }();
      (function(root, factory) {
        if (typeof define === "function" && define.amd) {
          return define([], factory);
        } else if (typeof exports === "object") {
          return module.exports = factory();
        } else {
          return root.Heap = factory();
        }
      })(this, function() {
        return Heap;
      });
    }).call(exports);
  }
});

// node_modules/.pnpm/heap@0.2.7/node_modules/heap/index.js
var require_heap2 = __commonJS({
  "node_modules/.pnpm/heap@0.2.7/node_modules/heap/index.js"(exports, module) {
    init_esm_shims();
    module.exports = require_heap();
  }
});

// node_modules/.pnpm/difflib@git+https+++git@github.com+postlight+difflib.js.git#32e8e38c7fcd935241b9baab71bb432fd9b166ed/node_modules/difflib/lib/difflib.js
var require_difflib = __commonJS({
  "node_modules/.pnpm/difflib@git+https+++git@github.com+postlight+difflib.js.git#32e8e38c7fcd935241b9baab71bb432fd9b166ed/node_modules/difflib/lib/difflib.js"(exports) {
    init_esm_shims();
    (function() {
      var Differ, Heap, IS_CHARACTER_JUNK, IS_LINE_JUNK, SequenceMatcher, contextDiff, floor, getCloseMatches, max, min, ndiff, restore, unifiedDiff, _any, _arrayCmp, _calculateRatio, _countLeading, _formatRangeContext, _formatRangeUnified, _has, __indexOf = [].indexOf || function(item) {
        for (var i = 0, l = this.length; i < l; i++) {
          if (i in this && this[i] === item) return i;
        }
        return -1;
      };
      floor = Math.floor, max = Math.max, min = Math.min;
      Heap = require_heap2();
      _calculateRatio = function(matches, length) {
        if (length) {
          return 2 * matches / length;
        } else {
          return 1;
        }
      };
      _arrayCmp = function(a, b) {
        var i, la, lb, _i, _ref, _ref1;
        _ref = [a.length, b.length], la = _ref[0], lb = _ref[1];
        for (i = _i = 0, _ref1 = min(la, lb); 0 <= _ref1 ? _i < _ref1 : _i > _ref1; i = 0 <= _ref1 ? ++_i : --_i) {
          if (a[i] < b[i]) {
            return -1;
          }
          if (a[i] > b[i]) {
            return 1;
          }
        }
        return la - lb;
      };
      _has = function(obj, key) {
        return Object.prototype.hasOwnProperty.call(obj, key);
      };
      _any = function(items) {
        var item, _i, _len;
        for (_i = 0, _len = items.length; _i < _len; _i++) {
          item = items[_i];
          if (item) {
            return true;
          }
        }
        return false;
      };
      SequenceMatcher = function() {
        function SequenceMatcher2(isjunk, a, b, autojunk) {
          this.isjunk = isjunk;
          if (a == null) {
            a = "";
          }
          if (b == null) {
            b = "";
          }
          this.autojunk = autojunk != null ? autojunk : true;
          this.a = this.b = null;
          this.setSeqs(a, b);
        }
        SequenceMatcher2.prototype.setSeqs = function(a, b) {
          this.setSeq1(a);
          return this.setSeq2(b);
        };
        SequenceMatcher2.prototype.setSeq1 = function(a) {
          if (a === this.a) {
            return;
          }
          this.a = a;
          return this.matchingBlocks = this.opcodes = null;
        };
        SequenceMatcher2.prototype.setSeq2 = function(b) {
          if (b === this.b) {
            return;
          }
          this.b = b;
          this.matchingBlocks = this.opcodes = null;
          this.fullbcount = null;
          return this._chainB();
        };
        SequenceMatcher2.prototype._chainB = function() {
          var b, b2j, elt, i, idxs, indices, isjunk, junk, n, ntest, popular, _i, _j, _len, _len1, _ref;
          b = this.b;
          this.b2j = b2j = {};
          for (i = _i = 0, _len = b.length; _i < _len; i = ++_i) {
            elt = b[i];
            indices = _has(b2j, elt) ? b2j[elt] : b2j[elt] = [];
            indices.push(i);
          }
          junk = {};
          isjunk = this.isjunk;
          if (isjunk) {
            _ref = Object.keys(b2j);
            for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
              elt = _ref[_j];
              if (isjunk(elt)) {
                junk[elt] = true;
                delete b2j[elt];
              }
            }
          }
          popular = {};
          n = b.length;
          if (this.autojunk && n >= 200) {
            ntest = floor(n / 100) + 1;
            for (elt in b2j) {
              idxs = b2j[elt];
              if (idxs.length > ntest) {
                popular[elt] = true;
                delete b2j[elt];
              }
            }
          }
          this.isbjunk = function(b2) {
            return _has(junk, b2);
          };
          return this.isbpopular = function(b2) {
            return _has(popular, b2);
          };
        };
        SequenceMatcher2.prototype.findLongestMatch = function(alo, ahi, blo, bhi) {
          var a, b, b2j, besti, bestj, bestsize, i, isbjunk, j, j2len, k, newj2len, _i, _j, _len, _ref, _ref1, _ref2, _ref3, _ref4, _ref5;
          _ref = [this.a, this.b, this.b2j, this.isbjunk], a = _ref[0], b = _ref[1], b2j = _ref[2], isbjunk = _ref[3];
          _ref1 = [alo, blo, 0], besti = _ref1[0], bestj = _ref1[1], bestsize = _ref1[2];
          j2len = {};
          for (i = _i = alo; alo <= ahi ? _i < ahi : _i > ahi; i = alo <= ahi ? ++_i : --_i) {
            newj2len = {};
            _ref2 = _has(b2j, a[i]) ? b2j[a[i]] : [];
            for (_j = 0, _len = _ref2.length; _j < _len; _j++) {
              j = _ref2[_j];
              if (j < blo) {
                continue;
              }
              if (j >= bhi) {
                break;
              }
              k = newj2len[j] = (j2len[j - 1] || 0) + 1;
              if (k > bestsize) {
                _ref3 = [i - k + 1, j - k + 1, k], besti = _ref3[0], bestj = _ref3[1], bestsize = _ref3[2];
              }
            }
            j2len = newj2len;
          }
          while (besti > alo && bestj > blo && !isbjunk(b[bestj - 1]) && a[besti - 1] === b[bestj - 1]) {
            _ref4 = [besti - 1, bestj - 1, bestsize + 1], besti = _ref4[0], bestj = _ref4[1], bestsize = _ref4[2];
          }
          while (besti + bestsize < ahi && bestj + bestsize < bhi && !isbjunk(b[bestj + bestsize]) && a[besti + bestsize] === b[bestj + bestsize]) {
            bestsize++;
          }
          while (besti > alo && bestj > blo && isbjunk(b[bestj - 1]) && a[besti - 1] === b[bestj - 1]) {
            _ref5 = [besti - 1, bestj - 1, bestsize + 1], besti = _ref5[0], bestj = _ref5[1], bestsize = _ref5[2];
          }
          while (besti + bestsize < ahi && bestj + bestsize < bhi && isbjunk(b[bestj + bestsize]) && a[besti + bestsize] === b[bestj + bestsize]) {
            bestsize++;
          }
          return [besti, bestj, bestsize];
        };
        SequenceMatcher2.prototype.getMatchingBlocks = function() {
          var ahi, alo, bhi, blo, i, i1, i2, j, j1, j2, k, k1, k2, la, lb, matchingBlocks, nonAdjacent, queue, x, _i, _len, _ref, _ref1, _ref2, _ref3, _ref4;
          if (this.matchingBlocks) {
            return this.matchingBlocks;
          }
          _ref = [this.a.length, this.b.length], la = _ref[0], lb = _ref[1];
          queue = [[0, la, 0, lb]];
          matchingBlocks = [];
          while (queue.length) {
            _ref1 = queue.pop(), alo = _ref1[0], ahi = _ref1[1], blo = _ref1[2], bhi = _ref1[3];
            _ref2 = x = this.findLongestMatch(alo, ahi, blo, bhi), i = _ref2[0], j = _ref2[1], k = _ref2[2];
            if (k) {
              matchingBlocks.push(x);
              if (alo < i && blo < j) {
                queue.push([alo, i, blo, j]);
              }
              if (i + k < ahi && j + k < bhi) {
                queue.push([i + k, ahi, j + k, bhi]);
              }
            }
          }
          matchingBlocks.sort(_arrayCmp);
          i1 = j1 = k1 = 0;
          nonAdjacent = [];
          for (_i = 0, _len = matchingBlocks.length; _i < _len; _i++) {
            _ref3 = matchingBlocks[_i], i2 = _ref3[0], j2 = _ref3[1], k2 = _ref3[2];
            if (i1 + k1 === i2 && j1 + k1 === j2) {
              k1 += k2;
            } else {
              if (k1) {
                nonAdjacent.push([i1, j1, k1]);
              }
              _ref4 = [i2, j2, k2], i1 = _ref4[0], j1 = _ref4[1], k1 = _ref4[2];
            }
          }
          if (k1) {
            nonAdjacent.push([i1, j1, k1]);
          }
          nonAdjacent.push([la, lb, 0]);
          return this.matchingBlocks = nonAdjacent;
        };
        SequenceMatcher2.prototype.getOpcodes = function() {
          var ai, answer, bj, i, j, size, tag, _i, _len, _ref, _ref1, _ref2;
          if (this.opcodes) {
            return this.opcodes;
          }
          i = j = 0;
          this.opcodes = answer = [];
          _ref = this.getMatchingBlocks();
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            _ref1 = _ref[_i], ai = _ref1[0], bj = _ref1[1], size = _ref1[2];
            tag = "";
            if (i < ai && j < bj) {
              tag = "replace";
            } else if (i < ai) {
              tag = "delete";
            } else if (j < bj) {
              tag = "insert";
            }
            if (tag) {
              answer.push([tag, i, ai, j, bj]);
            }
            _ref2 = [ai + size, bj + size], i = _ref2[0], j = _ref2[1];
            if (size) {
              answer.push(["equal", ai, i, bj, j]);
            }
          }
          return answer;
        };
        SequenceMatcher2.prototype.getGroupedOpcodes = function(n) {
          var codes, group, groups, i1, i2, j1, j2, nn, tag, _i, _len, _ref, _ref1, _ref2, _ref3;
          if (n == null) {
            n = 3;
          }
          codes = this.getOpcodes();
          if (!codes.length) {
            codes = [["equal", 0, 1, 0, 1]];
          }
          if (codes[0][0] === "equal") {
            _ref = codes[0], tag = _ref[0], i1 = _ref[1], i2 = _ref[2], j1 = _ref[3], j2 = _ref[4];
            codes[0] = [tag, max(i1, i2 - n), i2, max(j1, j2 - n), j2];
          }
          if (codes[codes.length - 1][0] === "equal") {
            _ref1 = codes[codes.length - 1], tag = _ref1[0], i1 = _ref1[1], i2 = _ref1[2], j1 = _ref1[3], j2 = _ref1[4];
            codes[codes.length - 1] = [tag, i1, min(i2, i1 + n), j1, min(j2, j1 + n)];
          }
          nn = n + n;
          groups = [];
          group = [];
          for (_i = 0, _len = codes.length; _i < _len; _i++) {
            _ref2 = codes[_i], tag = _ref2[0], i1 = _ref2[1], i2 = _ref2[2], j1 = _ref2[3], j2 = _ref2[4];
            if (tag === "equal" && i2 - i1 > nn) {
              group.push([tag, i1, min(i2, i1 + n), j1, min(j2, j1 + n)]);
              groups.push(group);
              group = [];
              _ref3 = [max(i1, i2 - n), max(j1, j2 - n)], i1 = _ref3[0], j1 = _ref3[1];
            }
            group.push([tag, i1, i2, j1, j2]);
          }
          if (group.length && !(group.length === 1 && group[0][0] === "equal")) {
            groups.push(group);
          }
          return groups;
        };
        SequenceMatcher2.prototype.ratio = function() {
          var match, matches, _i, _len, _ref;
          matches = 0;
          _ref = this.getMatchingBlocks();
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            match = _ref[_i];
            matches += match[2];
          }
          return _calculateRatio(matches, this.a.length + this.b.length);
        };
        SequenceMatcher2.prototype.quickRatio = function() {
          var avail, elt, fullbcount, matches, numb, _i, _j, _len, _len1, _ref, _ref1;
          if (!this.fullbcount) {
            this.fullbcount = fullbcount = {};
            _ref = this.b;
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              elt = _ref[_i];
              fullbcount[elt] = (fullbcount[elt] || 0) + 1;
            }
          }
          fullbcount = this.fullbcount;
          avail = {};
          matches = 0;
          _ref1 = this.a;
          for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
            elt = _ref1[_j];
            if (_has(avail, elt)) {
              numb = avail[elt];
            } else {
              numb = fullbcount[elt] || 0;
            }
            avail[elt] = numb - 1;
            if (numb > 0) {
              matches++;
            }
          }
          return _calculateRatio(matches, this.a.length + this.b.length);
        };
        SequenceMatcher2.prototype.realQuickRatio = function() {
          var la, lb, _ref;
          _ref = [this.a.length, this.b.length], la = _ref[0], lb = _ref[1];
          return _calculateRatio(min(la, lb), la + lb);
        };
        return SequenceMatcher2;
      }();
      getCloseMatches = function(word, possibilities, n, cutoff) {
        var result2, s, score, x, _i, _j, _len, _len1, _ref, _results;
        if (n == null) {
          n = 3;
        }
        if (cutoff == null) {
          cutoff = 0.6;
        }
        if (!(n > 0)) {
          throw new Error("n must be > 0: (" + n + ")");
        }
        if (!(0 <= cutoff && cutoff <= 1)) {
          throw new Error("cutoff must be in [0.0, 1.0]: (" + cutoff + ")");
        }
        result2 = [];
        s = new SequenceMatcher();
        s.setSeq2(word);
        for (_i = 0, _len = possibilities.length; _i < _len; _i++) {
          x = possibilities[_i];
          s.setSeq1(x);
          if (s.realQuickRatio() >= cutoff && s.quickRatio() >= cutoff && s.ratio() >= cutoff) {
            result2.push([s.ratio(), x]);
          }
        }
        result2 = Heap.nlargest(result2, n, _arrayCmp);
        _results = [];
        for (_j = 0, _len1 = result2.length; _j < _len1; _j++) {
          _ref = result2[_j], score = _ref[0], x = _ref[1];
          _results.push(x);
        }
        return _results;
      };
      _countLeading = function(line, ch) {
        var i, n, _ref;
        _ref = [0, line.length], i = _ref[0], n = _ref[1];
        while (i < n && line[i] === ch) {
          i++;
        }
        return i;
      };
      Differ = function() {
        function Differ2(linejunk, charjunk) {
          this.linejunk = linejunk;
          this.charjunk = charjunk;
        }
        Differ2.prototype.compare = function(a, b) {
          var ahi, alo, bhi, blo, cruncher, g, line, lines, tag, _i, _j, _len, _len1, _ref, _ref1;
          cruncher = new SequenceMatcher(this.linejunk, a, b);
          lines = [];
          _ref = cruncher.getOpcodes();
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            _ref1 = _ref[_i], tag = _ref1[0], alo = _ref1[1], ahi = _ref1[2], blo = _ref1[3], bhi = _ref1[4];
            switch (tag) {
              case "replace":
                g = this._fancyReplace(a, alo, ahi, b, blo, bhi);
                break;
              case "delete":
                g = this._dump("-", a, alo, ahi);
                break;
              case "insert":
                g = this._dump("+", b, blo, bhi);
                break;
              case "equal":
                g = this._dump(" ", a, alo, ahi);
                break;
              default:
                throw new Error("unknow tag (" + tag + ")");
            }
            for (_j = 0, _len1 = g.length; _j < _len1; _j++) {
              line = g[_j];
              lines.push(line);
            }
          }
          return lines;
        };
        Differ2.prototype._dump = function(tag, x, lo, hi) {
          var i, _i, _results;
          _results = [];
          for (i = _i = lo; lo <= hi ? _i < hi : _i > hi; i = lo <= hi ? ++_i : --_i) {
            _results.push("" + tag + " " + x[i]);
          }
          return _results;
        };
        Differ2.prototype._plainReplace = function(a, alo, ahi, b, blo, bhi) {
          var first, g, line, lines, second, _i, _j, _len, _len1, _ref;
          if (bhi - blo < ahi - alo) {
            first = this._dump("+", b, blo, bhi);
            second = this._dump("-", a, alo, ahi);
          } else {
            first = this._dump("-", a, alo, ahi);
            second = this._dump("+", b, blo, bhi);
          }
          lines = [];
          _ref = [first, second];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            g = _ref[_i];
            for (_j = 0, _len1 = g.length; _j < _len1; _j++) {
              line = g[_j];
              lines.push(line);
            }
          }
          return lines;
        };
        Differ2.prototype._fancyReplace = function(a, alo, ahi, b, blo, bhi) {
          var aelt, ai, ai1, ai2, atags, belt, bestRatio, besti, bestj, bj, bj1, bj2, btags, cruncher, cutoff, eqi, eqj, i, j, la, lb, line, lines, tag, _i, _j, _k, _l, _len, _len1, _len2, _len3, _len4, _m, _n, _o, _ref, _ref1, _ref10, _ref11, _ref12, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9;
          _ref = [0.74, 0.75], bestRatio = _ref[0], cutoff = _ref[1];
          cruncher = new SequenceMatcher(this.charjunk);
          _ref1 = [null, null], eqi = _ref1[0], eqj = _ref1[1];
          lines = [];
          for (j = _i = blo; blo <= bhi ? _i < bhi : _i > bhi; j = blo <= bhi ? ++_i : --_i) {
            bj = b[j];
            cruncher.setSeq2(bj);
            for (i = _j = alo; alo <= ahi ? _j < ahi : _j > ahi; i = alo <= ahi ? ++_j : --_j) {
              ai = a[i];
              if (ai === bj) {
                if (eqi === null) {
                  _ref2 = [i, j], eqi = _ref2[0], eqj = _ref2[1];
                }
                continue;
              }
              cruncher.setSeq1(ai);
              if (cruncher.realQuickRatio() > bestRatio && cruncher.quickRatio() > bestRatio && cruncher.ratio() > bestRatio) {
                _ref3 = [cruncher.ratio(), i, j], bestRatio = _ref3[0], besti = _ref3[1], bestj = _ref3[2];
              }
            }
          }
          if (bestRatio < cutoff) {
            if (eqi === null) {
              _ref4 = this._plainReplace(a, alo, ahi, b, blo, bhi);
              for (_k = 0, _len = _ref4.length; _k < _len; _k++) {
                line = _ref4[_k];
                lines.push(line);
              }
              return lines;
            }
            _ref5 = [eqi, eqj, 1], besti = _ref5[0], bestj = _ref5[1], bestRatio = _ref5[2];
          } else {
            eqi = null;
          }
          _ref6 = this._fancyHelper(a, alo, besti, b, blo, bestj);
          for (_l = 0, _len1 = _ref6.length; _l < _len1; _l++) {
            line = _ref6[_l];
            lines.push(line);
          }
          _ref7 = [a[besti], b[bestj]], aelt = _ref7[0], belt = _ref7[1];
          if (eqi === null) {
            atags = btags = "";
            cruncher.setSeqs(aelt, belt);
            _ref8 = cruncher.getOpcodes();
            for (_m = 0, _len2 = _ref8.length; _m < _len2; _m++) {
              _ref9 = _ref8[_m], tag = _ref9[0], ai1 = _ref9[1], ai2 = _ref9[2], bj1 = _ref9[3], bj2 = _ref9[4];
              _ref10 = [ai2 - ai1, bj2 - bj1], la = _ref10[0], lb = _ref10[1];
              switch (tag) {
                case "replace":
                  atags += Array(la + 1).join("^");
                  btags += Array(lb + 1).join("^");
                  break;
                case "delete":
                  atags += Array(la + 1).join("-");
                  break;
                case "insert":
                  btags += Array(lb + 1).join("+");
                  break;
                case "equal":
                  atags += Array(la + 1).join(" ");
                  btags += Array(lb + 1).join(" ");
                  break;
                default:
                  throw new Error("unknow tag (" + tag + ")");
              }
            }
            _ref11 = this._qformat(aelt, belt, atags, btags);
            for (_n = 0, _len3 = _ref11.length; _n < _len3; _n++) {
              line = _ref11[_n];
              lines.push(line);
            }
          } else {
            lines.push("  " + aelt);
          }
          _ref12 = this._fancyHelper(a, besti + 1, ahi, b, bestj + 1, bhi);
          for (_o = 0, _len4 = _ref12.length; _o < _len4; _o++) {
            line = _ref12[_o];
            lines.push(line);
          }
          return lines;
        };
        Differ2.prototype._fancyHelper = function(a, alo, ahi, b, blo, bhi) {
          var g;
          g = [];
          if (alo < ahi) {
            if (blo < bhi) {
              g = this._fancyReplace(a, alo, ahi, b, blo, bhi);
            } else {
              g = this._dump("-", a, alo, ahi);
            }
          } else if (blo < bhi) {
            g = this._dump("+", b, blo, bhi);
          }
          return g;
        };
        Differ2.prototype._qformat = function(aline, bline, atags, btags) {
          var common, lines;
          lines = [];
          common = min(_countLeading(aline, "	"), _countLeading(bline, "	"));
          common = min(common, _countLeading(atags.slice(0, common), " "));
          common = min(common, _countLeading(btags.slice(0, common), " "));
          atags = atags.slice(common).replace(/\s+$/, "");
          btags = btags.slice(common).replace(/\s+$/, "");
          lines.push("- " + aline);
          if (atags.length) {
            lines.push("? " + Array(common + 1).join("	") + atags + "\n");
          }
          lines.push("+ " + bline);
          if (btags.length) {
            lines.push("? " + Array(common + 1).join("	") + btags + "\n");
          }
          return lines;
        };
        return Differ2;
      }();
      IS_LINE_JUNK = function(line, pat) {
        if (pat == null) {
          pat = /^\s*#?\s*$/;
        }
        return pat.test(line);
      };
      IS_CHARACTER_JUNK = function(ch, ws) {
        if (ws == null) {
          ws = " 	";
        }
        return __indexOf.call(ws, ch) >= 0;
      };
      _formatRangeUnified = function(start, stop) {
        var beginning, length;
        beginning = start + 1;
        length = stop - start;
        if (length === 1) {
          return "" + beginning;
        }
        if (!length) {
          beginning--;
        }
        return "" + beginning + "," + length;
      };
      unifiedDiff = function(a, b, _arg) {
        var file1Range, file2Range, first, fromdate, fromfile, fromfiledate, group, i1, i2, j1, j2, last, line, lines, lineterm, n, started, tag, todate, tofile, tofiledate, _i, _j, _k, _l, _len, _len1, _len2, _len3, _len4, _m, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6;
        _ref = _arg != null ? _arg : {}, fromfile = _ref.fromfile, tofile = _ref.tofile, fromfiledate = _ref.fromfiledate, tofiledate = _ref.tofiledate, n = _ref.n, lineterm = _ref.lineterm;
        if (fromfile == null) {
          fromfile = "";
        }
        if (tofile == null) {
          tofile = "";
        }
        if (fromfiledate == null) {
          fromfiledate = "";
        }
        if (tofiledate == null) {
          tofiledate = "";
        }
        if (n == null) {
          n = 3;
        }
        if (lineterm == null) {
          lineterm = "\n";
        }
        lines = [];
        started = false;
        _ref1 = new SequenceMatcher(null, a, b).getGroupedOpcodes();
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          group = _ref1[_i];
          if (!started) {
            started = true;
            fromdate = fromfiledate ? "	" + fromfiledate : "";
            todate = tofiledate ? "	" + tofiledate : "";
            lines.push("--- " + fromfile + fromdate + lineterm);
            lines.push("+++ " + tofile + todate + lineterm);
          }
          _ref2 = [group[0], group[group.length - 1]], first = _ref2[0], last = _ref2[1];
          file1Range = _formatRangeUnified(first[1], last[2]);
          file2Range = _formatRangeUnified(first[3], last[4]);
          lines.push("@@ -" + file1Range + " +" + file2Range + " @@" + lineterm);
          for (_j = 0, _len1 = group.length; _j < _len1; _j++) {
            _ref3 = group[_j], tag = _ref3[0], i1 = _ref3[1], i2 = _ref3[2], j1 = _ref3[3], j2 = _ref3[4];
            if (tag === "equal") {
              _ref4 = a.slice(i1, i2);
              for (_k = 0, _len2 = _ref4.length; _k < _len2; _k++) {
                line = _ref4[_k];
                lines.push(" " + line);
              }
              continue;
            }
            if (tag === "replace" || tag === "delete") {
              _ref5 = a.slice(i1, i2);
              for (_l = 0, _len3 = _ref5.length; _l < _len3; _l++) {
                line = _ref5[_l];
                lines.push("-" + line);
              }
            }
            if (tag === "replace" || tag === "insert") {
              _ref6 = b.slice(j1, j2);
              for (_m = 0, _len4 = _ref6.length; _m < _len4; _m++) {
                line = _ref6[_m];
                lines.push("+" + line);
              }
            }
          }
        }
        return lines;
      };
      _formatRangeContext = function(start, stop) {
        var beginning, length;
        beginning = start + 1;
        length = stop - start;
        if (!length) {
          beginning--;
        }
        if (length <= 1) {
          return "" + beginning;
        }
        return "" + beginning + "," + (beginning + length - 1);
      };
      contextDiff = function(a, b, _arg) {
        var file1Range, file2Range, first, fromdate, fromfile, fromfiledate, group, i1, i2, j1, j2, last, line, lines, lineterm, n, prefix, started, tag, todate, tofile, tofiledate, _, _i, _j, _k, _l, _len, _len1, _len2, _len3, _len4, _m, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6;
        _ref = _arg != null ? _arg : {}, fromfile = _ref.fromfile, tofile = _ref.tofile, fromfiledate = _ref.fromfiledate, tofiledate = _ref.tofiledate, n = _ref.n, lineterm = _ref.lineterm;
        if (fromfile == null) {
          fromfile = "";
        }
        if (tofile == null) {
          tofile = "";
        }
        if (fromfiledate == null) {
          fromfiledate = "";
        }
        if (tofiledate == null) {
          tofiledate = "";
        }
        if (n == null) {
          n = 3;
        }
        if (lineterm == null) {
          lineterm = "\n";
        }
        prefix = {
          insert: "+ ",
          "delete": "- ",
          replace: "! ",
          equal: "  "
        };
        started = false;
        lines = [];
        _ref1 = new SequenceMatcher(null, a, b).getGroupedOpcodes();
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          group = _ref1[_i];
          if (!started) {
            started = true;
            fromdate = fromfiledate ? "	" + fromfiledate : "";
            todate = tofiledate ? "	" + tofiledate : "";
            lines.push("*** " + fromfile + fromdate + lineterm);
            lines.push("--- " + tofile + todate + lineterm);
            _ref2 = [group[0], group[group.length - 1]], first = _ref2[0], last = _ref2[1];
            lines.push("***************" + lineterm);
            file1Range = _formatRangeContext(first[1], last[2]);
            lines.push("*** " + file1Range + " ****" + lineterm);
            if (_any(function() {
              var _j2, _len12, _ref32, _results;
              _results = [];
              for (_j2 = 0, _len12 = group.length; _j2 < _len12; _j2++) {
                _ref32 = group[_j2], tag = _ref32[0], _ = _ref32[1], _ = _ref32[2], _ = _ref32[3], _ = _ref32[4];
                _results.push(tag === "replace" || tag === "delete");
              }
              return _results;
            }())) {
              for (_j = 0, _len1 = group.length; _j < _len1; _j++) {
                _ref3 = group[_j], tag = _ref3[0], i1 = _ref3[1], i2 = _ref3[2], _ = _ref3[3], _ = _ref3[4];
                if (tag !== "insert") {
                  _ref4 = a.slice(i1, i2);
                  for (_k = 0, _len2 = _ref4.length; _k < _len2; _k++) {
                    line = _ref4[_k];
                    lines.push(prefix[tag] + line);
                  }
                }
              }
            }
            file2Range = _formatRangeContext(first[3], last[4]);
            lines.push("--- " + file2Range + " ----" + lineterm);
            if (_any(function() {
              var _l2, _len32, _ref52, _results;
              _results = [];
              for (_l2 = 0, _len32 = group.length; _l2 < _len32; _l2++) {
                _ref52 = group[_l2], tag = _ref52[0], _ = _ref52[1], _ = _ref52[2], _ = _ref52[3], _ = _ref52[4];
                _results.push(tag === "replace" || tag === "insert");
              }
              return _results;
            }())) {
              for (_l = 0, _len3 = group.length; _l < _len3; _l++) {
                _ref5 = group[_l], tag = _ref5[0], _ = _ref5[1], _ = _ref5[2], j1 = _ref5[3], j2 = _ref5[4];
                if (tag !== "delete") {
                  _ref6 = b.slice(j1, j2);
                  for (_m = 0, _len4 = _ref6.length; _m < _len4; _m++) {
                    line = _ref6[_m];
                    lines.push(prefix[tag] + line);
                  }
                }
              }
            }
          }
        }
        return lines;
      };
      ndiff = function(a, b, linejunk, charjunk) {
        if (charjunk == null) {
          charjunk = IS_CHARACTER_JUNK;
        }
        return new Differ(linejunk, charjunk).compare(a, b);
      };
      restore = function(delta, which) {
        var line, lines, prefixes, tag, _i, _len, _ref;
        tag = {
          1: "- ",
          2: "+ "
        }[which];
        if (!tag) {
          throw new Error("unknow delta choice (must be 1 or 2): " + which);
        }
        prefixes = ["  ", tag];
        lines = [];
        for (_i = 0, _len = delta.length; _i < _len; _i++) {
          line = delta[_i];
          if (_ref = line.slice(0, 2), __indexOf.call(prefixes, _ref) >= 0) {
            lines.push(line.slice(2));
          }
        }
        return lines;
      };
      exports._arrayCmp = _arrayCmp;
      exports.SequenceMatcher = SequenceMatcher;
      exports.getCloseMatches = getCloseMatches;
      exports._countLeading = _countLeading;
      exports.Differ = Differ;
      exports.IS_LINE_JUNK = IS_LINE_JUNK;
      exports.IS_CHARACTER_JUNK = IS_CHARACTER_JUNK;
      exports._formatRangeUnified = _formatRangeUnified;
      exports.unifiedDiff = unifiedDiff;
      exports._formatRangeContext = _formatRangeContext;
      exports.contextDiff = contextDiff;
      exports.ndiff = ndiff;
      exports.restore = restore;
    }).call(exports);
  }
});

// node_modules/.pnpm/difflib@git+https+++git@github.com+postlight+difflib.js.git#32e8e38c7fcd935241b9baab71bb432fd9b166ed/node_modules/difflib/index.js
var require_difflib2 = __commonJS({
  "node_modules/.pnpm/difflib@git+https+++git@github.com+postlight+difflib.js.git#32e8e38c7fcd935241b9baab71bb432fd9b166ed/node_modules/difflib/index.js"(exports, module) {
    init_esm_shims();
    module.exports = require_difflib();
  }
});

// src/mercury.js
init_esm_shims();
import URL12 from "url";
import cheerio6 from "cheerio";
import TurndownService from "turndown";

// src/extractors/add-extractor.js
init_esm_shims();

// src/utils/merge-supported-domains.js
init_esm_shims();
var merge = (extractor, domains) => domains.reduce((acc, domain) => {
  acc[domain] = extractor;
  return acc;
}, {});
function mergeSupportedDomains(extractor) {
  return extractor.supportedDomains ? merge(extractor, [extractor.domain, ...extractor.supportedDomains]) : merge(extractor, [extractor.domain]);
}

// src/extractors/add-extractor.js
var apiExtractors = {};
function addExtractor(extractor) {
  if (!extractor || !extractor.domain) {
    return {
      error: true,
      message: "Unable to add custom extractor. Invalid parameters."
    };
  }
  Object.assign(apiExtractors, mergeSupportedDomains(extractor));
  return apiExtractors;
}

// src/extractors/get-extractor.js
init_esm_shims();
import URL10 from "url";

// src/extractors/all.js
init_esm_shims();

// src/extractors/custom/index.js
var custom_exports = {};
__export(custom_exports, {
  AbcnewsGoComExtractor: () => AbcnewsGoComExtractor,
  ApartmentTherapyExtractor: () => ApartmentTherapyExtractor,
  ArstechnicaComExtractor: () => ArstechnicaComExtractor,
  BiorxivOrgExtractor: () => BiorxivOrgExtractor,
  BlisterreviewComExtractor: () => BlisterreviewComExtractor,
  BloggerExtractor: () => BloggerExtractor,
  BookwalkerJpExtractor: () => BookwalkerJpExtractor,
  BroadwayWorldExtractor: () => BroadwayWorldExtractor,
  BuzzapJpExtractor: () => BuzzapJpExtractor,
  BuzzfeedExtractor: () => BuzzfeedExtractor,
  ClinicaltrialsGovExtractor: () => ClinicaltrialsGovExtractor,
  DeadlineComExtractor: () => DeadlineComExtractor,
  DeadspinExtractor: () => DeadspinExtractor,
  EpaperZeitDeExtractor: () => EpaperZeitDeExtractor,
  FortuneComExtractor: () => FortuneComExtractor,
  ForwardComExtractor: () => ForwardComExtractor,
  GeniusComExtractor: () => GeniusComExtractor,
  GetnewsJpExtractor: () => GetnewsJpExtractor,
  GithubComExtractor: () => GithubComExtractor,
  GothamistComExtractor: () => GothamistComExtractor,
  HellogigglesComExtractor: () => HellogigglesComExtractor,
  IciRadioCanadaCaExtractor: () => IciRadioCanadaCaExtractor,
  JapanCnetComExtractor: () => JapanCnetComExtractor,
  JapanZdnetComExtractor: () => JapanZdnetComExtractor,
  JvndbJvnJpExtractor: () => JvndbJvnJpExtractor,
  LittleThingsExtractor: () => LittleThingsExtractor,
  MSNExtractor: () => MSNExtractor,
  MaTtiasBeExtractor: () => MaTtiasBeExtractor,
  MashableComExtractor: () => MashableComExtractor,
  MediumExtractor: () => MediumExtractor,
  MoneyCnnComExtractor: () => MoneyCnnComExtractor,
  NYMagExtractor: () => NYMagExtractor,
  NYTimesExtractor: () => NYTimesExtractor,
  NewYorkerExtractor: () => NewYorkerExtractor,
  NewrepublicComExtractor: () => NewrepublicComExtractor,
  NewsMynaviJpExtractor: () => NewsMynaviJpExtractor,
  NewsNationalgeographicComExtractor: () => NewsNationalgeographicComExtractor,
  ObamawhitehouseArchivesGovExtractor: () => ObamawhitehouseArchivesGovExtractor,
  ObserverComExtractor: () => ObserverComExtractor,
  OtrsComExtractor: () => OtrsComExtractor,
  PagesixComExtractor: () => PagesixComExtractor,
  PastebinComExtractor: () => PastebinComExtractor,
  PeopleComExtractor: () => PeopleComExtractor,
  PhpspotOrgExtractor: () => PhpspotOrgExtractor,
  PitchforkComExtractor: () => PitchforkComExtractor,
  PoliticoExtractor: () => PoliticoExtractor,
  PostlightComExtractor: () => PostlightComExtractor,
  QzComExtractor: () => QzComExtractor,
  ScanNetsecurityNeJpExtractor: () => ScanNetsecurityNeJpExtractor,
  ScienceflyComExtractor: () => ScienceflyComExtractor,
  SectIijAdJpExtractor: () => SectIijAdJpExtractor,
  SpektrumExtractor: () => SpektrumExtractor,
  TakagihiromitsuJpExtractor: () => TakagihiromitsuJpExtractor,
  TechlogIijAdJpExtractor: () => TechlogIijAdJpExtractor,
  TheAtlanticExtractor: () => TheAtlanticExtractor,
  ThefederalistpapersOrgExtractor: () => ThefederalistpapersOrgExtractor,
  ThoughtcatalogComExtractor: () => ThoughtcatalogComExtractor,
  TimesofindiaIndiatimesComExtractor: () => TimesofindiaIndiatimesComExtractor,
  TwitterExtractor: () => TwitterExtractor,
  UproxxComExtractor: () => UproxxComExtractor,
  WeeklyAsciiJpExtractor: () => WeeklyAsciiJpExtractor,
  WikiaExtractor: () => WikiaExtractor,
  WikipediaExtractor: () => WikipediaExtractor,
  WiredExtractor: () => WiredExtractor,
  WiredJpExtractor: () => WiredJpExtractor,
  WwwAbendblattDeExtractor: () => WwwAbendblattDeExtractor,
  WwwAlComExtractor: () => WwwAlComExtractor,
  WwwAmericanowComExtractor: () => WwwAmericanowComExtractor,
  WwwAndroidcentralComExtractor: () => WwwAndroidcentralComExtractor,
  WwwAolComExtractor: () => WwwAolComExtractor,
  WwwAsahiComExtractor: () => WwwAsahiComExtractor,
  WwwBloombergComExtractor: () => WwwBloombergComExtractor,
  WwwBustleComExtractor: () => WwwBustleComExtractor,
  WwwCbcCaExtractor: () => WwwCbcCaExtractor,
  WwwCbssportsComExtractor: () => WwwCbssportsComExtractor,
  WwwChicagotribuneComExtractor: () => WwwChicagotribuneComExtractor,
  WwwCnbcComExtractor: () => WwwCnbcComExtractor,
  WwwCnetComExtractor: () => WwwCnetComExtractor,
  WwwCnnComExtractor: () => WwwCnnComExtractor,
  WwwDmagazineComExtractor: () => WwwDmagazineComExtractor,
  WwwElecomCoJpExtractor: () => WwwElecomCoJpExtractor,
  WwwEngadgetComExtractor: () => WwwEngadgetComExtractor,
  WwwEonlineComExtractor: () => WwwEonlineComExtractor,
  WwwFastcompanyComExtractor: () => WwwFastcompanyComExtractor,
  WwwFoolComExtractor: () => WwwFoolComExtractor,
  WwwFortinetComExtractor: () => WwwFortinetComExtractor,
  WwwGizmodoJpExtractor: () => WwwGizmodoJpExtractor,
  WwwGrueneDeExtractor: () => WwwGrueneDeExtractor,
  WwwHuffingtonpostComExtractor: () => WwwHuffingtonpostComExtractor,
  WwwInfoqComExtractor: () => WwwInfoqComExtractor,
  WwwInquisitrComExtractor: () => WwwInquisitrComExtractor,
  WwwInvestmentexecutiveComExtractor: () => WwwInvestmentexecutiveComExtractor,
  WwwIpaGoJpExtractor: () => WwwIpaGoJpExtractor,
  WwwItmediaCoJpExtractor: () => WwwItmediaCoJpExtractor,
  WwwJnsaOrgExtractor: () => WwwJnsaOrgExtractor,
  WwwLadbibleComExtractor: () => WwwLadbibleComExtractor,
  WwwLatimesComExtractor: () => WwwLatimesComExtractor,
  WwwLemondeFrExtractor: () => WwwLemondeFrExtractor,
  WwwLifehackerJpExtractor: () => WwwLifehackerJpExtractor,
  WwwLinkedinComExtractor: () => WwwLinkedinComExtractor,
  WwwMacrumorsComExtractor: () => WwwMacrumorsComExtractor,
  WwwMentalflossComExtractor: () => WwwMentalflossComExtractor,
  WwwMiamiheraldComExtractor: () => WwwMiamiheraldComExtractor,
  WwwMoongiftJpExtractor: () => WwwMoongiftJpExtractor,
  WwwMsnbcComExtractor: () => WwwMsnbcComExtractor,
  WwwNationalgeographicComExtractor: () => WwwNationalgeographicComExtractor,
  WwwNbcnewsComExtractor: () => WwwNbcnewsComExtractor,
  WwwNdtvComExtractor: () => WwwNdtvComExtractor,
  WwwNprOrgExtractor: () => WwwNprOrgExtractor,
  WwwNydailynewsComExtractor: () => WwwNydailynewsComExtractor,
  WwwOpposingviewsComExtractor: () => WwwOpposingviewsComExtractor,
  WwwOreillyCoJpExtractor: () => WwwOreillyCoJpExtractor,
  WwwOssnewsJpExtractor: () => WwwOssnewsJpExtractor,
  WwwPhoronixComExtractor: () => WwwPhoronixComExtractor,
  WwwPopsugarComExtractor: () => WwwPopsugarComExtractor,
  WwwProspectmagazineCoUkExtractor: () => WwwProspectmagazineCoUkExtractor,
  WwwPublickey1JpExtractor: () => WwwPublickey1JpExtractor,
  WwwQdailyComExtractor: () => WwwQdailyComExtractor,
  WwwRawstoryComExtractor: () => WwwRawstoryComExtractor,
  WwwRbbtodayComExtractor: () => WwwRbbtodayComExtractor,
  WwwRecodeNetExtractor: () => WwwRecodeNetExtractor,
  WwwRedditComExtractor: () => WwwRedditComExtractor,
  WwwRefinery29ComExtractor: () => WwwRefinery29ComExtractor,
  WwwReutersComExtractor: () => WwwReutersComExtractor,
  WwwRollingstoneComExtractor: () => WwwRollingstoneComExtractor,
  WwwSanwaCoJpExtractor: () => WwwSanwaCoJpExtractor,
  WwwSbnationComExtractor: () => WwwSbnationComExtractor,
  WwwSiComExtractor: () => WwwSiComExtractor,
  WwwSlateComExtractor: () => WwwSlateComExtractor,
  WwwTheguardianComExtractor: () => WwwTheguardianComExtractor,
  WwwThepennyhoarderComExtractor: () => WwwThepennyhoarderComExtractor,
  WwwThepoliticalinsiderComExtractor: () => WwwThepoliticalinsiderComExtractor,
  WwwThevergeComExtractor: () => WwwThevergeComExtractor,
  WwwTmzComExtractor: () => WwwTmzComExtractor,
  WwwTodayComExtractor: () => WwwTodayComExtractor,
  WwwUsmagazineComExtractor: () => WwwUsmagazineComExtractor,
  WwwVoxComExtractor: () => WwwVoxComExtractor,
  WwwWashingtonpostComExtractor: () => WwwWashingtonpostComExtractor,
  WwwWesternjournalismComExtractor: () => WwwWesternjournalismComExtractor,
  WwwYomiuriCoJpExtractor: () => WwwYomiuriCoJpExtractor,
  WwwYoutubeComExtractor: () => WwwYoutubeComExtractor,
  YahooExtractor: () => YahooExtractor,
  twofortysevensportsComExtractor: () => twofortysevensportsComExtractor
});
init_esm_shims();

// src/extractors/custom/blogspot.com/index.js
init_esm_shims();
var BloggerExtractor = {
  domain: "blogspot.com",
  content: {
    // Blogger is insane and does not load its content
    // initially in the page, but it's all there
    // in noscript
    selectors: [".post-content noscript"],
    // Selectors to remove from the extracted content
    clean: [],
    // Convert the noscript tag to a div
    transforms: {
      noscript: "div"
    }
  },
  author: {
    selectors: [".post-author-name"]
  },
  title: {
    selectors: [".post h2.title"]
  },
  date_published: {
    selectors: ["span.publishdate"]
  }
};

// src/extractors/custom/nymag.com/index.js
init_esm_shims();
var NYMagExtractor = {
  domain: "nymag.com",
  content: {
    // Order by most likely. Extractor will stop on first occurrence
    selectors: ["div.article-content", "section.body", "article.article"],
    // Selectors to remove from the extracted content
    clean: [".ad", ".single-related-story"],
    // Object of tranformations to make on matched elements
    // Each key is the selector, each value is the tag to
    // transform to.
    // If a function is given, it should return a string
    // to convert to or nothing (in which case it will not perform
    // the transformation.
    transforms: {
      // Convert h1s to h2s
      h1: "h2",
      // Convert lazy-loaded noscript images to figures
      noscript: ($node, $) => {
        const $children = $.browser ? $($node.text()) : $node.children();
        if ($children.length === 1 && $children.get(0) !== void 0 && $children.get(0).tagName.toLowerCase() === "img") {
          return "figure";
        }
        return null;
      }
    }
  },
  title: {
    selectors: ["h1.lede-feature-title", "h1.headline-primary", "h1"]
  },
  author: {
    selectors: [".by-authors", ".lede-feature-author"]
  },
  dek: {
    selectors: [".lede-feature-teaser"]
  },
  date_published: {
    selectors: [
      ["time.article-timestamp[datetime]", "datetime"],
      "time.article-timestamp"
    ]
  }
};

// src/extractors/custom/wikipedia.org/index.js
init_esm_shims();
var WikipediaExtractor = {
  domain: "wikipedia.org",
  content: {
    selectors: ["#mw-content-text"],
    defaultCleaner: false,
    // transform top infobox to an image with caption
    transforms: {
      ".infobox img": ($node) => {
        const $parent = $node.parents(".infobox");
        if ($parent.children("img").length === 0) {
          $parent.prepend($node);
        }
      },
      ".infobox caption": "figcaption",
      ".infobox": "figure"
    },
    // Selectors to remove from the extracted content
    clean: [
      ".mw-editsection",
      "figure tr, figure td, figure tbody",
      "#toc",
      ".navbox"
    ]
  },
  author: "Wikipedia Contributors",
  title: {
    selectors: ["h2.title"]
  },
  date_published: {
    selectors: ["#footer-info-lastmod"]
  }
};

// src/extractors/custom/twitter.com/index.js
init_esm_shims();
var TwitterExtractor = {
  domain: "twitter.com",
  content: {
    transforms: {
      // We're transforming essentially the whole page here.
      // Twitter doesn't have nice selectors, so our initial
      // selector grabs the whole page, then we're re-writing
      // it to fit our needs before we clean it up.
      ".permalink[role=main]": ($node, $) => {
        const tweets = $node.find(".tweet");
        const $tweetContainer = $('<div id="TWEETS_GO_HERE"></div>');
        $tweetContainer.append(tweets);
        $node.replaceWith($tweetContainer);
      },
      // Twitter wraps @ with s, which
      // renders as a strikethrough
      s: "span"
    },
    selectors: [".permalink[role=main]"],
    defaultCleaner: false,
    clean: [".stream-item-footer", "button", ".tweet-details-fixer"]
  },
  author: {
    selectors: [".tweet.permalink-tweet .username"]
  },
  date_published: {
    selectors: [[".permalink-tweet ._timestamp[data-time-ms]", "data-time-ms"]]
  }
};

// src/extractors/custom/www.nytimes.com/index.js
init_esm_shims();
var NYTimesExtractor = {
  domain: "www.nytimes.com",
  title: {
    selectors: [
      'h1[data-testid="headline"]',
      "h1.g-headline",
      'h1[itemprop="headline"]',
      "h1.headline",
      "h1 .balancedHeadline"
    ]
  },
  author: {
    selectors: [
      ['meta[name="author"]', "value"],
      ".g-byline",
      ".byline",
      ['meta[name="byl"]', "value"]
    ]
  },
  content: {
    selectors: ["div.g-blocks", 'section[name="articleBody"]', "article#story"],
    transforms: {
      "img.g-lazy": ($node) => {
        let src = $node.attr("src");
        const width = 640;
        src = src.replace("{{size}}", width);
        $node.attr("src", src);
      }
    },
    clean: [
      ".ad",
      "header#story-header",
      ".story-body-1 .lede.video",
      ".visually-hidden",
      "#newsletter-promo",
      ".promo",
      ".comments-button",
      ".hidden",
      ".comments",
      ".supplemental",
      ".nocontent",
      ".story-footer-links"
    ]
  },
  date_published: {
    selectors: [
      ['meta[name="article:published_time"]', "value"],
      ['meta[name="article:published"]', "value"]
    ]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  dek: null,
  next_page_url: null,
  excerpt: null
};

// src/extractors/custom/www.theatlantic.com/index.js
init_esm_shims();
var TheAtlanticExtractor = {
  domain: "www.theatlantic.com",
  title: {
    selectors: ["h1", ".c-article-header__hed"]
  },
  author: {
    selectors: [['meta[name="author"]', "value"], ".c-byline__author"]
  },
  content: {
    selectors: ["article", ".article-body"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: [],
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [
      ".partner-box",
      ".callout",
      ".c-article-writer__image",
      ".c-article-writer__content",
      ".c-letters-cta__text",
      ".c-footer__logo",
      ".c-recirculation-link",
      ".twitter-tweet"
    ]
  },
  dek: {
    selectors: [['meta[name="description"]', "value"]]
  },
  date_published: {
    selectors: [['time[itemprop="datePublished"]', "datetime"]]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  next_page_url: null,
  excerpt: null
};

// src/extractors/custom/www.newyorker.com/index.js
init_esm_shims();
var NewYorkerExtractor = {
  domain: "www.newyorker.com",
  title: {
    selectors: [
      'h1[class^="content-header"]',
      'h1[class^="ArticleHeader__hed"]',
      'h1[class*="ContentHeaderHed"]',
      ['meta[name="og:title"]', "value"]
    ]
  },
  author: {
    selectors: [
      'article header div[class^="BylinesWrapper"]',
      ['meta[name="article:author"]', "value"],
      'div[class^="ArticleContributors"] a[rel="author"]',
      'article header div[class*="Byline__multipleContributors"]'
    ]
  },
  content: {
    selectors: [
      ".article__body",
      "article.article.main-content",
      'main[class^="Layout__content"]'
    ],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {
      ".caption__text": "figcaption",
      ".caption__credit": "figcaption"
    },
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: ['footer[class^="ArticleFooter__footer"]', "aside"]
  },
  date_published: {
    selectors: [
      ['meta[name="article:published_time"]', "value"],
      "time.content-header__publish-date",
      ['meta[name="pubdate"]', "value"]
    ],
    timezone: "America/New_York"
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  dek: {
    selectors: [
      'div[class^="ContentHeaderDek"]',
      "div.content-header__dek",
      'h2[class^="ArticleHeader__dek"]'
    ]
  },
  next_page_url: null,
  excerpt: null
};

// src/extractors/custom/www.wired.com/index.js
init_esm_shims();
var WiredExtractor = {
  domain: "www.wired.com",
  title: {
    selectors: [
      'h1[data-testId="ContentHeaderHed"]'
      // enter title selectors
    ]
  },
  author: {
    selectors: [
      ['meta[name="article:author"]', "value"],
      'a[rel="author"]'
      // enter author selectors
    ]
  },
  content: {
    selectors: [
      "article.article.main-content",
      "article.content"
      // enter content selectors
    ],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: [],
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [".visually-hidden", "figcaption img.photo", ".alert-message"]
  },
  date_published: {
    selectors: [['meta[name="article:published_time"]', "value"]]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  dek: {
    selectors: []
  },
  next_page_url: null,
  excerpt: null
};

// src/extractors/custom/www.msn.com/index.js
init_esm_shims();
var MSNExtractor = {
  domain: "www.msn.com",
  title: {
    selectors: [
      "h1"
      // enter title selectors
    ]
  },
  author: {
    selectors: [
      "span.authorname-txt"
      // enter author selectors
    ]
  },
  content: {
    selectors: [
      "div.richtext"
      // enter content selectors
    ],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: [],
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: ["span.caption"]
  },
  date_published: {
    selectors: ["span.time"]
  },
  lead_image_url: {
    selectors: []
  },
  dek: {
    selectors: []
  },
  next_page_url: null,
  excerpt: null
};

// src/extractors/custom/www.yahoo.com/index.js
init_esm_shims();
var YahooExtractor = {
  domain: "www.yahoo.com",
  title: {
    selectors: [
      "header.canvas-header"
      // enter title selectors
    ]
  },
  author: {
    selectors: [
      "span.provider-name"
      // enter author selectors
    ]
  },
  content: {
    selectors: [
      // enter content selectors
      ".content-canvas"
    ],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: [],
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [".figure-caption"]
  },
  date_published: {
    selectors: [["time.date[datetime]", "datetime"]]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  dek: {
    selectors: [
      // enter dek selectors
    ]
  },
  next_page_url: null,
  excerpt: null
};

// src/extractors/custom/www.buzzfeed.com/index.js
init_esm_shims();
var BuzzfeedExtractor = {
  domain: "www.buzzfeed.com",
  supportedDomains: ["www.buzzfeednews.com"],
  title: {
    selectors: [
      "h1.embed-headline-title"
      // enter title selectors
    ]
  },
  author: {
    selectors: [
      'a[data-action="user/username"]',
      "byline__author",
      ['meta[name="author"]', "value"]
      // enter author selectors
    ]
  },
  content: {
    selectors: [
      ['div[class^="featureimage_featureImageWrapper"]', ".js-subbuzz-wrapper"],
      [".js-subbuzz-wrapper"]
    ],
    defaultCleaner: false,
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {
      h2: "b",
      "div.longform_custom_header_media": ($node) => {
        if ($node.has("img") && $node.has(".longform_header_image_source")) {
          return "figure";
        }
        return null;
      },
      "figure.longform_custom_header_media .longform_header_image_source": "figcaption"
    },
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [
      ".instapaper_ignore",
      ".suplist_list_hide .buzz_superlist_item .buzz_superlist_number_inline",
      ".share-box",
      ".print",
      ".js-inline-share-bar",
      ".js-ad-placement"
    ]
  },
  date_published: {
    selectors: [["time[datetime]", "datetime"]]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  dek: {
    selectors: [".embed-headline-description"]
  },
  next_page_url: null,
  excerpt: null
};

// src/extractors/custom/fandom.wikia.com/index.js
init_esm_shims();
var WikiaExtractor = {
  domain: "fandom.wikia.com",
  title: {
    selectors: [
      "h1.entry-title"
      // enter title selectors
    ]
  },
  author: {
    selectors: [
      ".author vcard",
      ".fn"
      // enter author selectors
    ]
  },
  content: {
    selectors: [
      ".grid-content",
      ".entry-content"
      // enter content selectors
    ],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: [],
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: []
  },
  date_published: {
    selectors: [['meta[name="article:published_time"]', "value"]]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  dek: {
    selectors: []
  },
  next_page_url: null,
  excerpt: null
};

// src/extractors/custom/www.littlethings.com/index.js
init_esm_shims();
var LittleThingsExtractor = {
  domain: "www.littlethings.com",
  title: {
    selectors: [
      'h1[class*="PostHeader"]',
      "h1.post-title"
      // enter title selectors
    ]
  },
  author: {
    selectors: [
      'div[class^="PostHeader__ScAuthorNameSection"]',
      ['meta[name="author"]', "value"]
      // enter author selectors
    ]
  },
  content: {
    selectors: [
      // enter content selectors
      'section[class*="PostMainArticle"]',
      ".mainContentIntro",
      ".content-wrapper"
    ],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: [],
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: []
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  next_page_url: null,
  excerpt: null
};

// src/extractors/custom/www.politico.com/index.js
init_esm_shims();
var PoliticoExtractor = {
  domain: "www.politico.com",
  title: {
    selectors: [['meta[name="og:title"]', "value"]]
  },
  author: {
    selectors: [
      ['div[itemprop="author"] meta[itemprop="name"]', "value"],
      ".story-meta__authors .vcard",
      ".story-main-content .byline .vcard"
    ]
  },
  content: {
    selectors: [[".story-text"], ".story-main-content", ".story-core"],
    transforms: [],
    clean: ["figcaption", ".story-meta", ".ad"]
  },
  date_published: {
    selectors: [
      ['time[itemprop="datePublished"]', "datetime"],
      [".story-meta__details time[datetime]", "datetime"],
      [".story-main-content .timestamp time[datetime]", "datetime"]
    ],
    timezone: "America/New_York"
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  dek: {
    selectors: [['meta[name="og:description"]', "value"]]
  }
};

// src/extractors/custom/deadspin.com/index.js
init_esm_shims();
var DeadspinExtractor = {
  domain: "deadspin.com",
  supportedDomains: [
    "jezebel.com",
    "lifehacker.com",
    "kotaku.com",
    "gizmodo.com",
    "jalopnik.com",
    "kinja.com",
    "avclub.com",
    "clickhole.com",
    "splinternews.com",
    "theonion.com",
    "theroot.com",
    "thetakeout.com",
    "theinventory.com"
  ],
  title: {
    selectors: ["header h1", "h1.headline"]
  },
  author: {
    selectors: ['a[data-ga*="Author"]', ".author"]
  },
  content: {
    selectors: [".js_post-content", ".post-content", ".entry-content"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {
      'iframe.lazyload[data-recommend-id^="youtube://"]': ($node) => {
        const youtubeId = $node.attr("id").split("youtube-")[1];
        $node.attr("src", `https://www.youtube.com/embed/${youtubeId}`);
      }
    },
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [".magnifier", ".lightbox"]
  },
  date_published: {
    selectors: [
      ['meta[name="article:published_time"]', "value"],
      ["time.updated[datetime]", "datetime"]
    ]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  dek: {
    selectors: [
      // enter selectors
    ]
  },
  next_page_url: {
    selectors: [
      // enter selectors
    ]
  },
  excerpt: {
    selectors: [
      // enter selectors
    ]
  }
};

// src/extractors/custom/www.broadwayworld.com/index.js
init_esm_shims();
var BroadwayWorldExtractor = {
  domain: "www.broadwayworld.com",
  title: {
    selectors: ["h1[itemprop=headline]", "h1.article-title"]
  },
  author: {
    selectors: ["span[itemprop=author]"]
  },
  content: {
    selectors: ["div[itemprop=articlebody]"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: []
  },
  date_published: {
    selectors: [["meta[itemprop=datePublished]", "value"]]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  dek: {
    selectors: []
  },
  next_page_url: {
    selectors: [
      // enter selectors
    ]
  },
  excerpt: {
    selectors: [
      // enter selectors
    ]
  }
};

// src/extractors/custom/www.apartmenttherapy.com/index.js
init_esm_shims();
var ApartmentTherapyExtractor = {
  domain: "www.apartmenttherapy.com",
  title: {
    selectors: ["h1.headline"]
  },
  author: {
    selectors: [".PostByline__name"]
  },
  content: {
    selectors: ["div.post__content"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {
      'div[data-render-react-id="images/LazyPicture"]': ($node, $) => {
        const data = JSON.parse($node.attr("data-props"));
        const { src } = data.sources[0];
        const $img = $("<img />").attr("src", src);
        $node.replaceWith($img);
      }
    },
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: []
  },
  date_published: {
    selectors: [[".PostByline__timestamp[datetime]", "datetime"]]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  dek: {
    selectors: []
  },
  next_page_url: {
    selectors: [
      // enter selectors
    ]
  },
  excerpt: {
    selectors: [
      // enter selectors
    ]
  }
};

// src/extractors/custom/medium.com/index.js
init_esm_shims();
var MediumExtractor = {
  domain: "medium.com",
  title: {
    selectors: ["h1", ['meta[name="og:title"]', "value"]]
  },
  author: {
    selectors: [['meta[name="author"]', "value"]]
  },
  content: {
    selectors: ["article"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {
      // Allow drop cap character.
      "section span:first-of-type": ($node) => {
        const $text = $node.html();
        if ($text.length === 1 && /^[a-zA-Z()]+$/.test($text)) {
          $node.replaceWith($text);
        }
      },
      // Re-write lazy-loaded youtube videos
      iframe: ($node) => {
        const ytRe = /https:\/\/i.embed.ly\/.+url=https:\/\/i\.ytimg\.com\/vi\/(\w+)\//;
        const thumb = decodeURIComponent($node.attr("data-thumbnail"));
        const $parent = $node.parents("figure");
        if (ytRe.test(thumb)) {
          const [_, youtubeId] = thumb.match(ytRe);
          $node.attr("src", `https://www.youtube.com/embed/${youtubeId}`);
          const $caption = $parent.find("figcaption");
          $parent.empty().append([$node, $caption]);
          return;
        }
        $parent.remove();
      },
      // rewrite figures to pull out image and caption, remove rest
      figure: ($node) => {
        if ($node.find("iframe").length > 0) return;
        const $img = $node.find("img").slice(-1)[0];
        const $caption = $node.find("figcaption");
        $node.empty().append([$img, $caption]);
      },
      // Remove any smaller images that did not get caught by the generic image
      // cleaner (author photo 48px, leading sentence images 79px, etc.).
      img: ($node) => {
        const width = parseInt($node.attr("width"), 10);
        if (width < 100) $node.remove();
      }
    },
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: ["span a", "svg"]
  },
  date_published: {
    selectors: [['meta[name="article:published_time"]', "value"]]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  dek: null,
  next_page_url: {
    selectors: [
      // enter selectors
    ]
  },
  excerpt: {
    selectors: [
      // enter selectors
    ]
  }
};

// src/extractors/custom/www.tmz.com/index.js
init_esm_shims();
var WwwTmzComExtractor = {
  domain: "www.tmz.com",
  title: {
    selectors: [".post-title-breadcrumb", "h1", ".headline"]
  },
  author: "TMZ STAFF",
  date_published: {
    selectors: [".article__published-at", ".article-posted-date"],
    timezone: "America/Los_Angeles"
  },
  dek: {
    selectors: [
      // enter selectors
    ]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: [".article__blocks", ".article-content", ".all-post-body"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [".lightbox-link"]
  }
};

// src/extractors/custom/www.washingtonpost.com/index.js
init_esm_shims();
var WwwWashingtonpostComExtractor = {
  domain: "www.washingtonpost.com",
  title: {
    selectors: ["h1", "#topper-headline-wrapper"]
  },
  author: {
    selectors: [".pb-author-name"]
  },
  date_published: {
    selectors: [['.author-timestamp[itemprop="datePublished"]', "content"]]
  },
  dek: {
    selectors: []
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: [".article-body"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {
      "div.inline-content": ($node) => {
        if ($node.has("img,iframe,video").length > 0) {
          return "figure";
        }
        $node.remove();
        return null;
      },
      ".pb-caption": "figcaption"
    },
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [".interstitial-link", ".newsletter-inline-unit"]
  }
};

// src/extractors/custom/www.huffingtonpost.com/index.js
init_esm_shims();
var WwwHuffingtonpostComExtractor = {
  domain: "www.huffingtonpost.com",
  title: {
    selectors: ["h1.headline__title"]
  },
  author: {
    selectors: ["span.author-card__details__name"]
  },
  date_published: {
    selectors: [
      ['meta[name="article:modified_time"]', "value"],
      ['meta[name="article:published_time"]', "value"]
    ]
  },
  dek: {
    selectors: ["h2.headline__subtitle"]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: ["div.entry__body"],
    defaultCleaner: false,
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [
      ".pull-quote",
      ".tag-cloud",
      ".embed-asset",
      ".below-entry",
      ".entry-corrections",
      "#suggested-story"
    ]
  }
};

// src/extractors/custom/newrepublic.com/index.js
init_esm_shims();
var NewrepublicComExtractor = {
  domain: "newrepublic.com",
  title: {
    selectors: ["h1.article-headline"]
  },
  author: {
    selectors: ["span.AuthorList"]
  },
  date_published: {
    selectors: [['meta[name="article:published_time"]', "value"]],
    timezone: "America/New_York"
  },
  dek: {
    selectors: ["h2.article-subhead"]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: [["div.article-body"]],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: ["aside"]
  }
};

// src/extractors/custom/money.cnn.com/index.js
init_esm_shims();
var MoneyCnnComExtractor = {
  domain: "money.cnn.com",
  title: {
    selectors: [".article-title"]
  },
  author: {
    selectors: [['meta[name="author"]', "value"], ".byline a"]
  },
  date_published: {
    selectors: [['meta[name="date"]', "value"]],
    timezone: "GMT"
  },
  dek: {
    selectors: ["#storytext h2"]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: ["#storytext"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [".inStoryHeading"]
  }
};

// src/extractors/custom/www.theverge.com/index.js
init_esm_shims();
var WwwThevergeComExtractor = {
  domain: "www.theverge.com",
  supportedDomains: ["www.polygon.com"],
  title: {
    selectors: ["h1"]
  },
  author: {
    selectors: [['meta[name="author"]', "value"]]
  },
  date_published: {
    selectors: [['meta[name="article:published_time"]', "value"]]
  },
  dek: {
    selectors: [".p-dek"]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: [
      // feature template multi-match
      [".c-entry-hero .e-image", ".c-entry-intro", ".c-entry-content"],
      // regular post multi-match
      [".e-image--hero", ".c-entry-content"],
      // feature template fallback
      ".l-wrapper .l-feature",
      // regular post fallback
      "div.c-entry-content"
    ],
    // Transform lazy-loaded images
    transforms: {
      noscript: ($node) => {
        const $children = $node.children();
        if ($children.length === 1 && $children.get(0).tagName === "img") {
          return "span";
        }
        return null;
      }
    },
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [
      ".aside",
      "img.c-dynamic-image"
      // images come from noscript transform
    ]
  }
};

// src/extractors/custom/www.cnn.com/index.js
init_esm_shims();
var WwwCnnComExtractor = {
  domain: "www.cnn.com",
  title: {
    selectors: ["h1.pg-headline", "h1"]
  },
  author: {
    selectors: [['meta[name="author"]', "value"]]
  },
  date_published: {
    selectors: [['meta[name="article:published_time"]', "value"]]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: [
      // a more specific selector to grab the lead image and the body
      [".media__video--thumbnail", ".zn-body-text"],
      // a fallback for the above
      ".zn-body-text",
      'div[itemprop="articleBody"]'
    ],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {
      ".zn-body__paragraph, .el__leafmedia--sourced-paragraph": ($node) => {
        const $text = $node.html();
        if ($text) {
          return "p";
        }
        return null;
      },
      // this transform cleans the short, all-link sections linking
      // to related content but not marked as such in any way.
      ".zn-body__paragraph": ($node) => {
        if ($node.has("a")) {
          if ($node.text().trim() === $node.find("a").text().trim()) {
            $node.remove();
          }
        }
      },
      ".media__video--thumbnail": "figure"
    },
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: []
  }
};

// src/extractors/custom/www.aol.com/index.js
init_esm_shims();
var WwwAolComExtractor = {
  domain: "www.aol.com",
  title: {
    selectors: ["h1.p-article__title"]
  },
  author: {
    selectors: [['meta[name="author"]', "value"]]
  },
  date_published: {
    selectors: [".p-article__byline__date"],
    timezone: "America/New_York"
  },
  dek: {
    selectors: [
      // enter selectors
    ]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: [".article-content"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: []
  }
};

// src/extractors/custom/www.youtube.com/index.js
init_esm_shims();
var WwwYoutubeComExtractor = {
  domain: "www.youtube.com",
  title: {
    selectors: [
      ['meta[name="title"]', "value"],
      ".watch-title",
      "h1.watch-title-container"
    ]
  },
  author: {
    selectors: [['link[itemprop="name"]', "content"], ".yt-user-info"]
  },
  date_published: {
    selectors: [['meta[itemProp="datePublished"]', "value"]],
    timezone: "GMT"
  },
  dek: {
    selectors: [
      // enter selectors
    ]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    defaultCleaner: false,
    selectors: [
      "#player-container-outer",
      "ytd-expandable-video-description-body-renderer #description",
      ["#player-api", "#description"]
    ],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {
      "#player-api": ($node, $) => {
        const videoId = $('meta[itemProp="videoId"]').attr("value");
        $node.html(`
          <iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`);
      },
      "#player-container-outer": ($node, $) => {
        const videoId = $('meta[itemProp="videoId"]').attr("value");
        const description = $('meta[itemProp="description"]').attr("value");
        $node.html(`
        <iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
        <div><span>${description}</span></div>`);
      }
    },
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: []
  }
};

// src/extractors/custom/www.theguardian.com/index.js
init_esm_shims();
var WwwTheguardianComExtractor = {
  domain: "www.theguardian.com",
  title: {
    selectors: ["h1", ".content__headline"]
  },
  author: {
    selectors: ['address[data-link-name="byline"]', "p.byline"]
  },
  date_published: {
    selectors: [['meta[name="article:published_time"]', "value"]]
  },
  dek: {
    selectors: ['div[data-gu-name="standfirst"]', ".content__standfirst"]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: ["#maincontent", ".content__article-body"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [".hide-on-mobile", ".inline-icon"]
  }
};

// src/extractors/custom/www.sbnation.com/index.js
init_esm_shims();
var WwwSbnationComExtractor = {
  domain: "www.sbnation.com",
  title: {
    selectors: ["h1.c-page-title"]
  },
  author: {
    selectors: [['meta[name="author"]', "value"]]
  },
  date_published: {
    selectors: [['meta[name="article:published_time"]', "value"]]
  },
  dek: {
    selectors: ["p.c-entry-summary.p-dek", "h2.c-entry-summary.p-dek"]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: ["div.c-entry-content"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: []
  }
};

// src/extractors/custom/www.bloomberg.com/index.js
init_esm_shims();
var WwwBloombergComExtractor = {
  domain: "www.bloomberg.com",
  title: {
    selectors: [
      // normal articles
      ".lede-headline",
      // /graphics/ template
      "h1.article-title",
      // /news/ template
      'h1[class^="headline"]',
      "h1.lede-text-only__hed"
    ]
  },
  author: {
    selectors: [
      ['meta[name="parsely-author"]', "value"],
      ".byline-details__link",
      // /graphics/ template
      ".bydek",
      // /news/ template
      ".author",
      'p[class*="author"]'
    ]
  },
  date_published: {
    selectors: [
      ["time.published-at", "datetime"],
      ["time[datetime]", "datetime"],
      ['meta[name="date"]', "value"],
      ['meta[name="parsely-pub-date"]', "value"],
      ['meta[name="parsely-pub-date"]', "content"]
    ]
  },
  dek: {
    selectors: []
  },
  lead_image_url: {
    selectors: [
      ['meta[name="og:image"]', "value"],
      ['meta[name="og:image"]', "content"]
    ]
  },
  content: {
    selectors: [
      ".article-body__content",
      ".body-content",
      // /graphics/ template
      ["section.copy-block"],
      // /news/ template
      ".body-copy"
    ],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [".inline-newsletter", ".page-ad"]
  }
};

// src/extractors/custom/www.bustle.com/index.js
init_esm_shims();
var WwwBustleComExtractor = {
  domain: "www.bustle.com",
  title: {
    selectors: ["h1", "h1.post-page__title"]
  },
  author: {
    selectors: ['a[href*="profile"]', "div.content-meta__author"]
  },
  date_published: {
    selectors: [["time", "datetime"]]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: ["article", ".post-page__body"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: []
  }
};

// src/extractors/custom/www.npr.org/index.js
init_esm_shims();
var WwwNprOrgExtractor = {
  domain: "www.npr.org",
  title: {
    selectors: ["h1", ".storytitle"]
  },
  author: {
    selectors: ["p.byline__name.byline__name--block"]
  },
  date_published: {
    selectors: [
      [".dateblock time[datetime]", "datetime"],
      ['meta[name="date"]', "value"]
    ]
  },
  lead_image_url: {
    selectors: [
      ['meta[name="og:image"]', "value"],
      ['meta[name="twitter:image:src"]', "value"]
    ]
  },
  content: {
    selectors: [".storytext"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {
      ".bucketwrap.image": "figure",
      ".bucketwrap.image .credit-caption": "figcaption"
    },
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: ["div.enlarge_measure"]
  }
};

// src/extractors/custom/www.recode.net/index.js
init_esm_shims();
var WwwRecodeNetExtractor = {
  domain: "www.recode.net",
  title: {
    selectors: ["h1.c-page-title"]
  },
  author: {
    selectors: [['meta[name="author"]', "value"]]
  },
  date_published: {
    selectors: [['meta[name="article:published_time"]', "value"]]
  },
  dek: {
    selectors: ["h2.c-entry-summary.p-dek"]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: [
      ["figure.e-image--hero", ".c-entry-content"],
      ".c-entry-content"
    ],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: []
  }
};

// src/extractors/custom/qz.com/index.js
init_esm_shims();
var QzComExtractor = {
  domain: "qz.com",
  title: {
    selectors: ["article header h1"]
  },
  author: {
    selectors: [['meta[name="author"]', "value"]]
  },
  date_published: {
    selectors: [
      ['meta[name="article:published_time"]', "value"],
      ["time[datetime]", "datetime"]
    ]
  },
  lead_image_url: {
    selectors: [
      ['meta[name="og:image"]', "value"],
      ['meta[property="og:image"]', "content"],
      ['meta[name="twitter:image"]', "content"]
    ]
  },
  content: {
    selectors: ["#article-content"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: []
  }
};

// src/extractors/custom/www.dmagazine.com/index.js
init_esm_shims();
var WwwDmagazineComExtractor = {
  domain: "www.dmagazine.com",
  title: {
    selectors: ["h1.story__title"]
  },
  author: {
    selectors: [".story__info .story__info__item:first-child"]
  },
  date_published: {
    selectors: [
      // enter selectors
      ".story__info"
    ],
    timezone: "America/Chicago",
    format: "MMMM D, YYYY h:mm a"
  },
  dek: {
    selectors: [".story__subhead"]
  },
  lead_image_url: {
    selectors: [["article figure a:first-child", "href"]]
  },
  content: {
    selectors: [".story__content"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: []
  }
};

// src/extractors/custom/www.reuters.com/index.js
init_esm_shims();
var WwwReutersComExtractor = {
  domain: "www.reuters.com",
  title: {
    selectors: ['h1[class*="ArticleHeader-headline-"]', "h1.article-headline"]
  },
  author: {
    selectors: [['meta[name="og:article:author"]', "value"], ".author"]
  },
  date_published: {
    selectors: [['meta[name="og:article:published_time"]', "value"]]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: ["div.ArticleBodyWrapper", "#article-text"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {
      ".article-subtitle": "h4"
    },
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [
      'div[class^="ArticleBody-byline-container-"]',
      "#article-byline .author"
    ]
  }
};

// src/extractors/custom/mashable.com/index.js
init_esm_shims();
var MashableComExtractor = {
  domain: "mashable.com",
  title: {
    selectors: ["header h1", "h1.title"]
  },
  author: {
    selectors: [['meta[name="article:author"]', "value"], "span.author_name a"]
  },
  date_published: {
    selectors: [['meta[name="article:published_time"]', "value"]]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: ["#article", "section.article-content.blueprint"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {
      ".image-credit": "figcaption"
    },
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: []
  }
};

// src/extractors/custom/www.chicagotribune.com/index.js
init_esm_shims();
var WwwChicagotribuneComExtractor = {
  domain: "www.chicagotribune.com",
  title: {
    selectors: [['meta[name="og:title"]', "value"]]
  },
  author: {
    selectors: ["div.article_byline span:first-of-type"]
  },
  date_published: {
    selectors: ["time"]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: ["article"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: []
  }
};

// src/extractors/custom/www.vox.com/index.js
init_esm_shims();
var WwwVoxComExtractor = {
  domain: "www.vox.com",
  title: {
    selectors: ["h1.c-page-title"]
  },
  author: {
    selectors: [['meta[name="author"]', "value"]]
  },
  date_published: {
    selectors: [['meta[name="article:published_time"]', "value"]]
  },
  dek: {
    selectors: [".p-dek"]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: [
      ["figure.e-image--hero", ".c-entry-content"],
      ".c-entry-content"
    ],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {
      "figure .e-image__image noscript": ($node) => {
        const imgHtml = $node.html();
        $node.parents(".e-image__image").find(".c-dynamic-image").replaceWith(imgHtml);
      },
      "figure .e-image__meta": "figcaption"
    },
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: []
  }
};

// src/extractors/custom/news.nationalgeographic.com/index.js
init_esm_shims();
var NewsNationalgeographicComExtractor = {
  domain: "news.nationalgeographic.com",
  title: {
    selectors: ["h1", "h1.main-title"]
  },
  author: {
    selectors: [".byline-component__contributors b span"]
  },
  date_published: {
    selectors: [['meta[name="article:published_time"]', "value"]],
    format: "ddd MMM DD HH:mm:ss zz YYYY",
    timezone: "EST"
  },
  dek: {
    selectors: [".article__deck"]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: [[".parsys.content", ".__image-lead__"], ".content"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {
      ".parsys.content": ($node, $) => {
        const $imgSrc = $node.find(".image.parbase.section").find(".picturefill").first().data("platform-src");
        if ($imgSrc) {
          $node.prepend($(`<img class="__image-lead__" src="${$imgSrc}"/>`));
        }
      }
    },
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [".pull-quote.pull-quote--large"]
  }
};

// src/extractors/custom/www.nationalgeographic.com/index.js
init_esm_shims();
var WwwNationalgeographicComExtractor = {
  domain: "www.nationalgeographic.com",
  title: {
    selectors: ["h1", "h1.main-title"]
  },
  author: {
    selectors: [".byline-component__contributors b span"]
  },
  date_published: {
    selectors: [['meta[name="article:published_time"]', "value"]]
  },
  dek: {
    selectors: [".Article__Headline__Desc", ".article__deck"]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: [
      "section.Article__Content",
      [".parsys.content", ".__image-lead__"],
      ".content"
    ],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {
      ".parsys.content": ($node, $) => {
        const $imageParent = $node.children().first();
        if ($imageParent.hasClass("imageGroup")) {
          const $dataAttrContainer = $imageParent.find(".media--medium__container").children().first();
          const imgPath1 = $dataAttrContainer.data("platform-image1-path");
          const imgPath2 = $dataAttrContainer.data("platform-image2-path");
          if (imgPath2 && imgPath1) {
            $node.prepend(
              $(`<div class="__image-lead__">
                <img src="${imgPath1}"/>
                <img src="${imgPath2}"/>
              </div>`)
            );
          }
        } else {
          const $imgSrc = $node.find(".image.parbase.section").find(".picturefill").first().data("platform-src");
          if ($imgSrc) {
            $node.prepend($(`<img class="__image-lead__" src="${$imgSrc}"/>`));
          }
        }
      }
    },
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [".pull-quote.pull-quote--small"]
  }
};

// src/extractors/custom/www.latimes.com/index.js
init_esm_shims();
var WwwLatimesComExtractor = {
  domain: "www.latimes.com",
  title: {
    selectors: ["h1.headline", ".trb_ar_hl"]
  },
  author: {
    selectors: [
      'a[data-click="standardBylineAuthorName"]',
      ['meta[name="author"]', "value"]
    ]
  },
  date_published: {
    selectors: [
      ['meta[name="article:published_time"]', "value"],
      ['meta[itemprop="datePublished"]', "value"]
    ]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: [".page-article-body", ".trb_ar_main"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {
      ".trb_ar_la": ($node) => {
        const $figure = $node.find("figure");
        $node.replaceWith($figure);
      }
    },
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [".trb_ar_by", ".trb_ar_cr"]
  }
};

// src/extractors/custom/pagesix.com/index.js
init_esm_shims();
var PagesixComExtractor = {
  domain: "pagesix.com",
  supportedDomains: ["nypost.com"],
  title: {
    selectors: [['meta[name="og:title"]', "value"]]
  },
  author: {
    selectors: [".byline"]
  },
  date_published: {
    selectors: [['meta[name="article:published_time"]', "value"]]
  },
  dek: {
    selectors: [['meta[name="description"]', "value"]]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: [
      ["#featured-image-wrapper", ".entry-content"],
      ".entry-content"
    ],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {
      "#featured-image-wrapper": "figure",
      ".wp-caption-text": "figcaption"
    },
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [".modal-trigger"]
  }
};

// src/extractors/custom/thefederalistpapers.org/index.js
init_esm_shims();
var ThefederalistpapersOrgExtractor = {
  domain: "thefederalistpapers.org",
  title: {
    selectors: ["h1.entry-title"]
  },
  author: {
    selectors: [".author-meta-title", "main span.entry-author-name"]
  },
  date_published: {
    selectors: [['meta[name="article:published_time"]', "value"]]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: [".content"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [
      "header",
      ".article-sharing",
      ".after-article",
      ".type-commenting",
      ".more-posts",
      ["p[style]"]
    ]
  }
};

// src/extractors/custom/www.cbssports.com/index.js
init_esm_shims();
var WwwCbssportsComExtractor = {
  domain: "www.cbssports.com",
  title: {
    selectors: [".Article-headline", ".article-headline"]
  },
  author: {
    selectors: [".ArticleAuthor-nameText", ".author-name"]
  },
  date_published: {
    selectors: [['meta[itemprop="datePublished"]', "value"]],
    timezone: "UTC"
  },
  dek: {
    selectors: [".Article-subline", ".article-subline"]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: [".article"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: []
  }
};

// src/extractors/custom/www.msnbc.com/index.js
init_esm_shims();
var WwwMsnbcComExtractor = {
  domain: "www.msnbc.com",
  title: {
    selectors: ["h1", "h1.is-title-pane"]
  },
  author: {
    selectors: [".byline-name", ".author"]
  },
  date_published: {
    selectors: [
      ['meta[itemprop="datePublished"]', "value"],
      ['meta[name="DC.date.issued"]', "value"]
    ]
  },
  dek: {
    selectors: [['meta[name="description"]', "value"]]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: [".article-body__content", ".pane-node-body"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {
      ".pane-node-body": ($node, $) => {
        const [
          selector,
          attr
        ] = WwwMsnbcComExtractor.lead_image_url.selectors[0];
        const src = $(selector).attr(attr);
        if (src) {
          $node.prepend(`<img src="${src}" />`);
        }
      }
    },
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: []
  }
};

// src/extractors/custom/www.thepoliticalinsider.com/index.js
init_esm_shims();
var WwwThepoliticalinsiderComExtractor = {
  domain: "www.thepoliticalinsider.com",
  title: {
    selectors: [['meta[name="sailthru.title"]', "value"]]
  },
  author: {
    selectors: [['meta[name="sailthru.author"]', "value"]]
  },
  date_published: {
    selectors: [['meta[name="sailthru.date"]', "value"]],
    timezone: "America/New_York"
  },
  dek: {
    selectors: [
      // enter selectors
    ]
  },
  lead_image_url: {
    selectors: [
      ['meta[name="og:image"]', "value"]
      // enter selectors
    ]
  },
  content: {
    selectors: ["div#article-body"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: []
  }
};

// src/extractors/custom/www.mentalfloss.com/index.js
init_esm_shims();
var WwwMentalflossComExtractor = {
  domain: "www.mentalfloss.com",
  title: {
    selectors: [
      ['meta[name="og:title"]', "value"],
      "h1.title",
      ".title-group",
      ".inner"
    ]
  },
  author: {
    selectors: [
      'a[data-vars-label*="authors"]',
      ".field-name-field-enhanced-authors"
    ]
  },
  date_published: {
    selectors: [
      ['meta[name="article:published_time"]', "value"],
      ".date-display-single"
    ],
    timezone: "America/New_York"
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: ["article main", "div.field.field-name-body"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: ["small"]
  }
};

// src/extractors/custom/abcnews.go.com/index.js
init_esm_shims();
var AbcnewsGoComExtractor = {
  domain: "abcnews.go.com",
  title: {
    selectors: ['div[class*="Article_main__body"] h1', ".article-header h1"]
  },
  author: {
    selectors: [".ShareByline span:nth-child(2)", ".authors"],
    clean: [".author-overlay", ".by-text"]
  },
  date_published: {
    selectors: [".ShareByline", ".timestamp"],
    format: "MMMM D, YYYY h:mm a",
    timezone: "America/New_York"
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: ["article", ".article-copy"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: []
  }
};

// src/extractors/custom/www.nydailynews.com/index.js
init_esm_shims();
var WwwNydailynewsComExtractor = {
  domain: "www.nydailynews.com",
  title: {
    selectors: ["h1.headline", "h1#ra-headline"]
  },
  author: {
    selectors: [
      ".article_byline span",
      ['meta[name="parsely-author"]', "value"]
    ]
  },
  date_published: {
    selectors: ["time", ['meta[name="sailthru.date"]', "value"]]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: ["article", "article#ra-body"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: ["dl#ra-tags", ".ra-related", "a.ra-editor", "dl#ra-share-bottom"]
  }
};

// src/extractors/custom/www.cnbc.com/index.js
init_esm_shims();
var WwwCnbcComExtractor = {
  domain: "www.cnbc.com",
  title: {
    selectors: ["h1.title", "h1.ArticleHeader-headline"]
  },
  author: {
    selectors: [['meta[name="author"]', "value"]]
  },
  date_published: {
    selectors: [['meta[name="article:published_time"]', "value"]]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: [
      "div#article_body.content",
      "div.story",
      "div.ArticleBody-articleBody"
    ],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: []
  }
};

// src/extractors/custom/www.popsugar.com/index.js
init_esm_shims();
var WwwPopsugarComExtractor = {
  domain: "www.popsugar.com",
  title: {
    selectors: ["h2.post-title", "title-text"]
  },
  author: {
    selectors: [['meta[name="article:author"]', "value"]]
  },
  date_published: {
    selectors: [['meta[name="article:published_time"]', "value"]]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: ["#content"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [".share-copy-title", ".post-tags", ".reactions"]
  }
};

// src/extractors/custom/observer.com/index.js
init_esm_shims();
var ObserverComExtractor = {
  domain: "observer.com",
  title: {
    selectors: ["h1.entry-title"]
  },
  author: {
    selectors: [".author", ".vcard"]
  },
  date_published: {
    selectors: [['meta[name="article:published_time"]', "value"]]
  },
  dek: {
    selectors: ["h2.dek"]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: ["div.entry-content"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: []
  }
};

// src/extractors/custom/people.com/index.js
init_esm_shims();
var PeopleComExtractor = {
  domain: "people.com",
  title: {
    selectors: [".article-header h1", ['meta[name="og:title"]', "value"]]
  },
  author: {
    selectors: [['meta[name="sailthru.author"]', "value"], "a.author.url.fn"]
  },
  date_published: {
    selectors: [
      ".mntl-attribution__item-date",
      ['meta[name="article:published_time"]', "value"]
    ]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  dek: {
    selectors: [".article-header h2"]
  },
  content: {
    selectors: ['div[class^="loc article-content"]', "div.article-body__inner"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: []
  }
};

// src/extractors/custom/www.usmagazine.com/index.js
init_esm_shims();
var WwwUsmagazineComExtractor = {
  domain: "www.usmagazine.com",
  title: {
    selectors: ["header h1"]
  },
  author: {
    selectors: ["a.author", "a.article-byline.tracked-offpage"]
  },
  date_published: {
    timezone: "America/New_York",
    selectors: [['meta[name="article:published_time"]', "value"]]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: ["div.article-content"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [".module-related"]
  }
};

// src/extractors/custom/www.rollingstone.com/index.js
init_esm_shims();
var WwwRollingstoneComExtractor = {
  domain: "www.rollingstone.com",
  title: {
    selectors: ["h1.l-article-header__row--title", "h1.content-title"]
  },
  author: {
    selectors: ["a.c-byline__link", "a.content-author.tracked-offpage"]
  },
  date_published: {
    selectors: [
      ['meta[name="article:published_time"]', "value"],
      "time.content-published-date"
    ],
    timezone: "America/New_York"
  },
  dek: {
    selectors: ["h2.l-article-header__row--lead", ".content-description"]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: [
      ".l-article-content",
      [".lead-container", ".article-content"],
      ".article-content"
    ],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [".c-related-links-wrapper", ".module-related"]
  }
};

// src/extractors/custom/247sports.com/index.js
init_esm_shims();
var twofortysevensportsComExtractor = {
  domain: "247sports.com",
  title: {
    selectors: ["title", "article header h1"]
  },
  author: {
    selectors: [".article-cnt__author", ".author"]
  },
  date_published: {
    selectors: [["time[data-published]", "data-published"]]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: [".article-body", "section.body.article"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: []
  }
};

// src/extractors/custom/uproxx.com/index.js
init_esm_shims();
var UproxxComExtractor = {
  domain: "uproxx.com",
  title: {
    selectors: ["div.entry-header h1"]
  },
  author: {
    selectors: [['meta[name="qc:author"]', "value"]]
  },
  date_published: {
    selectors: [['meta[name="article:published_time"]', "value"]]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: [".entry-content"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {
      "div.image": "figure",
      "div.image .wp-media-credit": "figcaption"
    },
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: []
  }
};

// src/extractors/custom/www.eonline.com/index.js
init_esm_shims();
var WwwEonlineComExtractor = {
  domain: "www.eonline.com",
  title: {
    selectors: ["h1.article-detail__title", "h1.article__title"]
  },
  author: {
    selectors: [".article-detail__meta__author", ".entry-meta__author a"]
  },
  date_published: {
    selectors: [
      ['meta[name="article:published_time"]', "value"],
      ['meta[itemprop="datePublished"]', "value"]
    ]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: [
      [".article-detail__main-content section"],
      [".post-content section, .post-content div.post-content__image"]
    ],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {
      "div.post-content__image": "figure",
      "div.post-content__image .image__credits": "figcaption"
    },
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: []
  }
};

// src/extractors/custom/www.miamiherald.com/index.js
init_esm_shims();
var WwwMiamiheraldComExtractor = {
  domain: "www.miamiherald.com",
  title: {
    selectors: ["h1.title"]
  },
  date_published: {
    selectors: ["p.published-date"],
    timezone: "America/New_York"
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: ["div.dateline-storybody"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: []
  }
};

// src/extractors/custom/www.refinery29.com/index.js
init_esm_shims();
var WwwRefinery29ComExtractor = {
  domain: "www.refinery29.com",
  title: {
    selectors: ["h1.title"]
  },
  author: {
    selectors: [".contributor"]
  },
  date_published: {
    selectors: [['meta[name="sailthru.date"]', "value"]],
    timezone: "America/New_York"
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: [
      [".full-width-opener", ".article-content"],
      ".article-content",
      ".body"
    ],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {
      "div.loading noscript": ($node) => {
        const imgHtml = $node.html();
        $node.parents(".loading").replaceWith(imgHtml);
      },
      ".section-image": "figure",
      ".section-image .content-caption": "figcaption",
      ".section-text": "p"
    },
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [".story-share"]
  }
};

// src/extractors/custom/www.macrumors.com/index.js
init_esm_shims();
var WwwMacrumorsComExtractor = {
  domain: "www.macrumors.com",
  title: {
    selectors: ["h1", "h1.title"]
  },
  author: {
    selectors: ['article a[rel="author"]', ".author-url"]
  },
  date_published: {
    selectors: [["time", "datetime"]],
    timezone: "America/Los_Angeles"
  },
  dek: {
    selectors: [['meta[name="description"]', "value"]]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: ["article", ".article"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: []
  }
};

// src/extractors/custom/www.androidcentral.com/index.js
init_esm_shims();
var WwwAndroidcentralComExtractor = {
  domain: "www.androidcentral.com",
  title: {
    selectors: ["h1", "h1.main-title"]
  },
  author: {
    selectors: [['meta[name="parsely-author"]', "value"]]
  },
  date_published: {
    selectors: [['meta[name="article:published_time"]', "value"]]
  },
  dek: {
    selectors: [['meta[name="description"]', "value"]]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: ["#article-body"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [".intro", "blockquote"]
  }
};

// src/extractors/custom/www.si.com/index.js
init_esm_shims();
var WwwSiComExtractor = {
  domain: "www.si.com",
  title: {
    selectors: ["h1", "h1.headline"]
  },
  author: {
    selectors: [['meta[name="author"]', "value"]]
  },
  date_published: {
    selectors: [['meta[name="published"]', "value"]],
    timezone: "America/New_York"
  },
  dek: {
    selectors: [".m-detail-header--dek"]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: [
      ".m-detail--body",
      ["p", ".marquee_large_2x", ".component.image"]
    ],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {
      noscript: ($node) => {
        const $children = $node.children();
        if ($children.length === 1 && $children.get(0).tagName === "img") {
          return "figure";
        }
        return null;
      }
    },
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [
      [".inline-thumb", ".primary-message", ".description", ".instructions"]
    ]
  }
};

// src/extractors/custom/www.rawstory.com/index.js
init_esm_shims();
var WwwRawstoryComExtractor = {
  domain: "www.rawstory.com",
  title: {
    selectors: [['meta[name="og:title"]', "value"], ".blog-title"]
  },
  author: {
    selectors: [
      "div.main-post-head .social-author__name",
      ".blog-author a:first-of-type"
    ]
  },
  date_published: {
    selectors: [
      ['meta[name="article:published_time"]', "value"],
      ".blog-author a:last-of-type"
    ],
    timezone: "EST"
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: [".post-body", ".blog-content"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: []
  }
};

// src/extractors/custom/www.cnet.com/index.js
init_esm_shims();
var WwwCnetComExtractor = {
  domain: "www.cnet.com",
  title: {
    selectors: [['meta[name="og:title"]', "value"]]
  },
  author: {
    selectors: ["span.author", "a.author"]
  },
  date_published: {
    selectors: ["time"],
    timezone: "America/Los_Angeles"
  },
  dek: {
    selectors: [".c-head_dek", ".article-dek"]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: [
      ["img.__image-lead__", ".article-main-body"],
      ".article-main-body"
    ],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {
      "figure.image": ($node) => {
        const $img = $node.find("img");
        $img.attr("width", "100%");
        $img.attr("height", "100%");
        $img.addClass("__image-lead__");
        $node.remove(".imgContainer").prepend($img);
      }
    },
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: []
  }
};

// src/extractors/custom/www.today.com/index.js
init_esm_shims();
var WwwTodayComExtractor = {
  domain: "www.today.com",
  title: {
    selectors: ["h1.article-hero-headline__htag", "h1.entry-headline"]
  },
  author: {
    selectors: ["span.byline-name", ['meta[name="author"]', "value"]]
  },
  date_published: {
    selectors: ["time[datetime]", ['meta[name="DC.date.issued"]', "value"]]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: ["div.article-body__content", ".entry-container"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [".label-comment"]
  }
};

// src/extractors/custom/www.al.com/index.js
init_esm_shims();
var WwwAlComExtractor = {
  domain: "www.al.com",
  title: {
    selectors: [['meta[name="title"]', "value"]]
  },
  author: {
    selectors: [['meta[name="article_author"]', "value"]]
  },
  date_published: {
    selectors: [['meta[name="article_date_original"]', "value"]],
    timezone: "EST"
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: [".entry-content"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: []
  }
};

// src/extractors/custom/www.thepennyhoarder.com/index.js
init_esm_shims();
var WwwThepennyhoarderComExtractor = {
  domain: "www.thepennyhoarder.com",
  title: {
    selectors: [['meta[name="dcterms.title"]', "value"]]
  },
  author: {
    selectors: [['link[rel="author"]', "title"]]
  },
  date_published: {
    selectors: [['meta[name="article:published_time"]', "value"]]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: [
      [".post-img", ".post-text"],
      ".post-text",
      ".single-post-content-inner"
    ],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: []
  }
};

// src/extractors/custom/www.westernjournalism.com/index.js
init_esm_shims();
var WwwWesternjournalismComExtractor = {
  domain: "www.westernjournalism.com",
  title: {
    selectors: ["title", "h1.entry-title"]
  },
  author: {
    selectors: [['meta[name="author"]', "value"]]
  },
  date_published: {
    selectors: [['meta[name="DC.date.issued"]', "value"]]
  },
  dek: {
    selectors: [".subtitle"]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: ["div.article-sharing.top + div"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [".ad-notice-small"]
  }
};

// src/extractors/custom/www.americanow.com/index.js
init_esm_shims();
var WwwAmericanowComExtractor = {
  domain: "www.americanow.com",
  title: {
    selectors: [".title", ['meta[name="title"]', "value"]]
  },
  author: {
    selectors: [".byline"]
  },
  date_published: {
    selectors: [['meta[name="publish_date"]', "value"]]
  },
  dek: {
    selectors: [
      // enter selectors
    ]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: [[".article-content", ".image", ".body"], ".body"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [".article-video-wrapper", ".show-for-small-only"]
  }
};

// src/extractors/custom/sciencefly.com/index.js
init_esm_shims();
var ScienceflyComExtractor = {
  domain: "sciencefly.com",
  title: {
    selectors: [".entry-title", ".cb-entry-title", ".cb-single-title"]
  },
  author: {
    selectors: ["div.cb-author", "div.cb-author-title"]
  },
  date_published: {
    selectors: [['meta[name="article:published_time"]', "value"]]
  },
  dek: {
    selectors: [
      // enter selectors
    ]
  },
  lead_image_url: {
    selectors: [["div.theiaPostSlider_slides img", "src"]]
  },
  content: {
    selectors: ["div.theiaPostSlider_slides"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: []
  }
};

// src/extractors/custom/hellogiggles.com/index.js
init_esm_shims();
var HellogigglesComExtractor = {
  domain: "hellogiggles.com",
  title: {
    selectors: [['meta[name="og:title"]', "value"], ".title"]
  },
  author: {
    selectors: [".byline-wrapper span.author_name", ".author-link"]
  },
  date_published: {
    selectors: [
      ['meta[property="article:published_time"]', "content"],
      ['meta[name="article:published_time"]', "value"]
    ]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: [".main-content", ".entry-content"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: []
  }
};

// src/extractors/custom/thoughtcatalog.com/index.js
init_esm_shims();
var ThoughtcatalogComExtractor = {
  domain: "thoughtcatalog.com",
  title: {
    selectors: ["h1.title", ['meta[name="og:title"]', "value"]]
  },
  author: {
    selectors: [
      "cite a",
      "div.col-xs-12.article_header div.writer-container.writer-container-inline.writer-no-avatar h4.writer-name",
      "h1.writer-name"
    ]
  },
  date_published: {
    selectors: [['meta[name="article:published_time"]', "value"]]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: [".entry.post"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [".tc_mark", "figcaption"]
  }
};

// src/extractors/custom/www.inquisitr.com/index.js
init_esm_shims();
var WwwInquisitrComExtractor = {
  domain: "www.inquisitr.com",
  title: {
    selectors: ["h1.entry-title.story--header--title"]
  },
  author: {
    selectors: ["div.story--header--author"]
  },
  date_published: {
    selectors: [['meta[name="datePublished"]', "value"]]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: ["article.story", ".entry-content."],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [
      ".post-category",
      ".story--header--socials",
      ".story--header--content"
    ]
  }
};

// src/extractors/custom/www.nbcnews.com/index.js
init_esm_shims();
var WwwNbcnewsComExtractor = {
  domain: "www.nbcnews.com",
  title: {
    selectors: ["div.article-hero-headline h1", "div.article-hed h1"]
  },
  author: {
    selectors: [
      "div.article-inline-byline span.byline-name",
      "span.byline_author"
    ]
  },
  date_published: {
    selectors: [
      ['meta[name="article:published"]', "value"],
      [".flag_article-wrapper time.timestamp_article[datetime]", "datetime"],
      ".flag_article-wrapper time"
    ],
    timezone: "America/New_York"
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: ["div.article-body__content", "div.article-body"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: []
  }
};

// src/extractors/custom/fortune.com/index.js
init_esm_shims();
var FortuneComExtractor = {
  domain: "fortune.com",
  title: {
    selectors: ["h1"]
  },
  author: {
    selectors: [['meta[name="author"]', "value"]]
  },
  date_published: {
    selectors: [".MblGHNMJ"],
    timezone: "UTC"
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: [["picture", "article.row"], "article.row"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: []
  }
};

// src/extractors/custom/www.linkedin.com/index.js
init_esm_shims();
var WwwLinkedinComExtractor = {
  domain: "www.linkedin.com",
  title: {
    selectors: [".article-title", "h1"]
  },
  author: {
    selectors: [
      ".main-author-card h3",
      ['meta[name="article:author"]', "value"],
      ".entity-name a[rel=author]"
    ]
  },
  date_published: {
    selectors: [
      ".base-main-card__metadata",
      ['time[itemprop="datePublished"]', "datetime"]
    ],
    timezone: "America/Los_Angeles"
  },
  dek: {
    selectors: [
      // enter selectors
    ]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: [
      ".article-content__body",
      ["header figure", ".prose"],
      ".prose"
    ],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [".entity-image"]
  }
};

// src/extractors/custom/obamawhitehouse.archives.gov/index.js
init_esm_shims();
var ObamawhitehouseArchivesGovExtractor = {
  domain: "obamawhitehouse.archives.gov",
  supportedDomains: ["whitehouse.gov"],
  title: {
    selectors: ["h1", ".pane-node-title"]
  },
  author: {
    selectors: [".blog-author-link", ".node-person-name-link"]
  },
  date_published: {
    selectors: [['meta[name="article:published_time"]', "value"]]
  },
  dek: {
    selectors: [".field-name-field-forall-summary"]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    defaultCleaner: false,
    selectors: ["div#content-start", ".pane-node-field-forall-body"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [".pane-node-title", ".pane-custom.pane-1"]
  }
};

// src/extractors/custom/www.opposingviews.com/index.js
init_esm_shims();
var WwwOpposingviewsComExtractor = {
  domain: "www.opposingviews.com",
  title: {
    selectors: ["h1.m-detail-header--title", "h1.title"]
  },
  author: {
    selectors: [['meta[name="author"]', "value"], "div.date span span a"]
  },
  date_published: {
    selectors: [
      ['meta[name="published"]', "value"],
      ['meta[name="publish_date"]', "value"]
    ]
  },
  dek: {
    selectors: [
      // enter selectors
    ]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: [".m-detail--body", ".article-content"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [".show-for-small-only"]
  }
};

// src/extractors/custom/www.prospectmagazine.co.uk/index.js
init_esm_shims();
var WwwProspectmagazineCoUkExtractor = {
  domain: "www.prospectmagazine.co.uk",
  title: {
    selectors: [".blog-header__title", ".page-title"]
  },
  author: {
    selectors: [".blog-header__author-link", ".aside_author .title"]
  },
  date_published: {
    selectors: [['meta[name="article:published_time"]', "value"], ".post-info"],
    timezone: "Europe/London"
  },
  dek: {
    selectors: [".blog-header__description", ".page-subtitle"]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: [".blog__container", "article .post_content"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: []
  }
};

// src/extractors/custom/forward.com/index.js
init_esm_shims();
var ForwardComExtractor = {
  domain: "forward.com",
  title: {
    selectors: [['meta[name="og:title"]', "value"]]
  },
  author: {
    selectors: [
      ".post-author a",
      ".author-name",
      ['meta[name="sailthru.author"]', "value"]
    ]
  },
  date_published: {
    selectors: [
      ['meta[name="article:published_time"]', "value"],
      ['meta[name="date"]', "value"]
    ]
  },
  dek: {
    selectors: [
      // enter selectors
    ]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: [
      ".content-container article",
      [".post-item-media-wrap", ".post-item p"]
    ],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [".post-author", ".donate-box", ".message", ".subtitle"]
  }
};

// src/extractors/custom/www.qdaily.com/index.js
init_esm_shims();
var WwwQdailyComExtractor = {
  domain: "www.qdaily.com",
  title: {
    selectors: ["h2", "h2.title"]
  },
  author: {
    selectors: [".name"]
  },
  date_published: {
    selectors: [[".date.smart-date", "data-origindate"]]
  },
  dek: {
    selectors: [".excerpt"]
  },
  lead_image_url: {
    selectors: [[".article-detail-hd img", "src"]]
  },
  content: {
    selectors: [".detail"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [".lazyload", ".lazylad", ".lazylood"]
  }
};

// src/extractors/custom/gothamist.com/index.js
init_esm_shims();
var GothamistComExtractor = {
  domain: "gothamist.com",
  supportedDomains: [
    "chicagoist.com",
    "laist.com",
    "sfist.com",
    "shanghaiist.com",
    "dcist.com"
  ],
  title: {
    selectors: ["h1", ".entry-header h1"]
  },
  author: {
    // There are multiple article-metadata and byline-author classes, but the main article's is the 3rd child of the l-container class
    selectors: [".article-metadata:nth-child(3) .byline-author", ".author"]
  },
  date_published: {
    selectors: [
      ['meta[name="article:published_time"]', "value"],
      "abbr",
      "abbr.published"
    ],
    timezone: "America/New_York"
  },
  dek: {
    selectors: [null]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: [".article-body", ".entry-body"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {
      "div.image-none": "figure",
      ".image-none i": "figcaption",
      "div.image-left": "figure",
      ".image-left i": "figcaption",
      "div.image-right": "figure",
      ".image-right i": "figcaption"
    },
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [
      ".image-none br",
      ".image-left br",
      ".image-right br",
      ".galleryEase"
    ]
  }
};

// src/extractors/custom/www.fool.com/index.js
init_esm_shims();
var WwwFoolComExtractor = {
  domain: "www.fool.com",
  title: {
    selectors: ["h1"]
  },
  author: {
    selectors: [
      ['meta[name="author"]', "value"],
      ".author-inline .author-name"
    ]
  },
  date_published: {
    selectors: [['meta[name="date"]', "value"]]
  },
  dek: {
    selectors: [['meta[name="og:description"]', "value"], "header h2"]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: [".tailwind-article-body", ".article-content"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {
      ".caption img": ($node) => {
        const src = $node.attr("src");
        $node.parent().replaceWith(`<figure><img src="${src}"/></figure>`);
      },
      ".caption": "figcaption"
    },
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: ["#pitch"]
  }
};

// src/extractors/custom/www.slate.com/index.js
init_esm_shims();
var WwwSlateComExtractor = {
  domain: "www.slate.com",
  title: {
    selectors: [".hed", "h1"]
  },
  author: {
    selectors: ["a[rel=author]"]
  },
  date_published: {
    selectors: [".pub-date"],
    timezone: "America/New_York"
  },
  dek: {
    selectors: [".dek"]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: [".body"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [
      ".about-the-author",
      ".pullquote",
      ".newsletter-signup-component",
      ".top-comment"
    ]
  }
};

// src/extractors/custom/ici.radio-canada.ca/index.js
init_esm_shims();
var IciRadioCanadaCaExtractor = {
  domain: "ici.radio-canada.ca",
  title: {
    selectors: ["h1"]
  },
  author: {
    selectors: [['meta[name="dc.creator"]', "value"]]
  },
  date_published: {
    selectors: [['meta[name="dc.date.created"]', "value"]],
    format: "YYYY-MM-DD|HH[h]mm",
    timezone: "America/New_York"
  },
  dek: {
    selectors: ["div.lead-container", ".bunker-component.lead"]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: [
      "section.document-content-style",
      [".main-multimedia-item", ".news-story-content"]
    ],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: []
  }
};

// src/extractors/custom/www.fortinet.com/index.js
init_esm_shims();
var WwwFortinetComExtractor = {
  domain: "www.fortinet.com",
  title: {
    selectors: ["h1"]
  },
  author: {
    selectors: [".b15-blog-meta__author"]
  },
  date_published: {
    selectors: [['meta[name="article:published_time"]', "value"]]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: [
      "div.responsivegrid.aem-GridColumn.aem-GridColumn--default--12"
    ],
    transforms: {
      noscript: ($node) => {
        const $children = $node.children();
        if ($children.length === 1 && $children.get(0).tagName === "img") {
          return "figure";
        }
        return null;
      }
    }
  }
};

// src/extractors/custom/www.fastcompany.com/index.js
init_esm_shims();
var WwwFastcompanyComExtractor = {
  domain: "www.fastcompany.com",
  title: {
    selectors: ["h1"]
  },
  author: {
    selectors: [['meta[name="author"]', "value"]]
  },
  date_published: {
    selectors: [['meta[name="article:published_time"]', "value"]]
  },
  dek: {
    selectors: [".post__deck"]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: [".post__article"]
  }
};

// src/extractors/custom/blisterreview.com/index.js
init_esm_shims();
var BlisterreviewComExtractor = {
  domain: "blisterreview.com",
  title: {
    selectors: [['meta[name="og:title"]', "value"], "h1.entry-title"]
  },
  author: {
    selectors: ["span.author-name"]
  },
  date_published: {
    selectors: [
      ['meta[name="article:published_time"]', "value"],
      ["time.entry-date", "datetime"],
      ['meta[itemprop="datePublished"]', "content"]
    ]
  },
  dek: {
    selectors: [
      // enter selectors
    ]
  },
  lead_image_url: {
    selectors: [
      ['meta[name="og:image"]', "value"],
      ['meta[property="og:image"]', "content"],
      ['meta[itemprop="image"]', "content"],
      ['meta[name="twitter:image"]', "content"],
      ["img.attachment-large", "src"]
    ]
  },
  content: {
    selectors: [
      [
        ".elementor-section-wrap",
        ".elementor-text-editor > p, .elementor-text-editor > ul > li, .attachment-large, .wp-caption-text"
      ]
    ],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {
      figcaption: "p"
    },
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [".comments-area"]
  }
};

// src/extractors/custom/news.mynavi.jp/index.js
init_esm_shims();
var NewsMynaviJpExtractor = {
  domain: "news.mynavi.jp",
  title: {
    selectors: [['meta[name="og:title"]', "value"]]
  },
  author: {
    selectors: [
      "a.articleHeader_name",
      "main div.article-author a.article-author__name"
    ]
  },
  date_published: {
    selectors: [['meta[name="article:published_time"]', "value"]]
  },
  dek: {
    selectors: [['meta[name="og:description"]', "value"]]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: ["div.article-body", "main article div"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {
      img: ($node) => {
        const src = $node.attr("data-original");
        if (src !== "") {
          $node.attr("src", src);
        }
      }
    },
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: []
  }
};

// src/extractors/custom/clinicaltrials.gov/index.js
init_esm_shims();
var ClinicaltrialsGovExtractor = {
  domain: "clinicaltrials.gov",
  title: {
    selectors: ["h1.tr-solo_record"]
  },
  author: {
    selectors: ["div#sponsor.tr-info-text"]
  },
  date_published: {
    // selectors: ['span.term[data-term="Last Update Posted"]'],
    selectors: ['div:has(> span.term[data-term="Last Update Posted"])']
  },
  content: {
    selectors: ["div#tab-body"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [".usa-alert> img"]
  }
};

// src/extractors/custom/github.com/index.js
init_esm_shims();
var GithubComExtractor = {
  domain: "github.com",
  title: {
    selectors: [['meta[name="og:title"]', "value"]]
  },
  author: {
    selectors: [
      // enter author selectors
    ]
  },
  date_published: {
    selectors: [
      ["relative-time[datetime]", "datetime"],
      ['span[itemprop="dateModified"] relative-time', "datetime"]
    ]
  },
  dek: {
    selectors: [
      ['meta[name="description"]', "value"],
      'span[itemprop="about"]'
    ]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: [["#readme article"]],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: []
  }
};

// src/extractors/custom/www.reddit.com/index.js
init_esm_shims();
var WwwRedditComExtractor = {
  domain: "www.reddit.com",
  title: {
    selectors: [
      'div[data-test-id="post-content"] h1',
      'div[data-test-id="post-content"] h2'
    ]
  },
  author: {
    selectors: ['div[data-test-id="post-content"] a[href*="user/"]']
  },
  date_published: {
    selectors: [
      'div[data-test-id="post-content"] span[data-click-id="timestamp"]',
      'div[data-test-id="post-content"] a[data-click-id="timestamp"]'
    ]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: [
      ['div[data-test-id="post-content"] p'],
      // text post
      [
        'div[data-test-id="post-content"] a[target="_blank"]:not([data-click-id="timestamp"])',
        // external link
        'div[data-test-id="post-content"] div[data-click-id="media"]'
        // embedded media
      ],
      // external link with media preview (YouTube, imgur album, etc...)
      ['div[data-test-id="post-content"] div[data-click-id="media"]'],
      // Embedded media (Reddit video)
      ['div[data-test-id="post-content"] a'],
      // external link
      'div[data-test-id="post-content"]'
    ],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {
      'div[role="img"]': ($node) => {
        const $img = $node.find("img");
        const bgImg = $node.css("background-image");
        if ($img.length === 1 && bgImg) {
          $img.attr("src", bgImg.match(/\((.*?)\)/)[1].replace(/('|")/g, ""));
          return $img;
        }
        return $node;
      }
    },
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [
      ".icon",
      'span[id^="PostAwardBadges"]',
      'div a[data-test-id="comments-page-link-num-comments"]'
    ]
  }
};

// src/extractors/custom/otrs.com/index.js
init_esm_shims();
var OtrsComExtractor = {
  domain: "otrs.com",
  title: {
    selectors: ["#main article h1"]
  },
  author: {
    selectors: ["div.dateplusauthor a"]
  },
  date_published: {
    selectors: [['meta[name="article:published_time"]', "value"]]
  },
  dek: {
    selectors: [['meta[name="og:description"]', "value"]]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: ["#main article"],
    defaultCleaner: false,
    transforms: {},
    clean: [
      "div.dateplusauthor",
      "div.gr-12.push-6.footershare",
      "#atftbx",
      "div.category-modul"
    ]
  }
};

// src/extractors/custom/www.ossnews.jp/index.js
init_esm_shims();
var WwwOssnewsJpExtractor = {
  domain: "www.ossnews.jp",
  title: {
    selectors: ["#alpha-block h1.hxnewstitle"]
  },
  author: null,
  date_published: {
    selectors: ["p.fs12"],
    format: "YYYY年MM月DD日 HH:mm",
    timezone: "Asia/Tokyo"
  },
  dek: null,
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: ["#alpha-block .section:has(h1.hxnewstitle)"],
    defaultCleaner: false,
    transforms: {},
    clean: []
  }
};

// src/extractors/custom/buzzap.jp/index.js
init_esm_shims();
var BuzzapJpExtractor = {
  domain: "buzzap.jp",
  title: {
    selectors: ["h1.entry-title"]
  },
  author: null,
  date_published: {
    selectors: [["time.entry-date", "datetime"]]
  },
  dek: null,
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: ["div.ctiframe"],
    defaultCleaner: false,
    transforms: {},
    clean: []
  }
};

// src/extractors/custom/www.asahi.com/index.js
init_esm_shims();
var WwwAsahiComExtractor = {
  domain: "www.asahi.com",
  title: {
    selectors: ["main h1", ".ArticleTitle h1"]
  },
  author: {
    selectors: [['meta[name="article:author"]', "value"]]
  },
  date_published: {
    selectors: [['meta[name="pubdate"]', "value"]]
  },
  dek: null,
  excerpt: {
    selectors: [['meta[name="og:description"]', "value"]]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: ["main"],
    defaultCleaner: false,
    transforms: {},
    clean: ["div.AdMod", "div.LoginSelectArea", "time", "div.notPrint"]
  }
};

// src/extractors/custom/www.sanwa.co.jp/index.js
init_esm_shims();
var WwwSanwaCoJpExtractor = {
  domain: "www.sanwa.co.jp",
  title: {
    selectors: ["#newsContent h1"]
  },
  author: null,
  date_published: {
    selectors: ["dl.date"],
    format: "YYYY.MM.DD",
    timezone: "Asia/Tokyo"
  },
  dek: {
    selectors: [['meta[name="og:description"]', "value"]]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: ["#newsContent"],
    defaultCleaner: false,
    transforms: {},
    clean: ["#smartphone", "div.sns_box", "div.contentFoot"]
  }
};

// src/extractors/custom/www.elecom.co.jp/index.js
init_esm_shims();
var WwwElecomCoJpExtractor = {
  domain: "www.elecom.co.jp",
  title: {
    selectors: ["title"]
  },
  author: null,
  date_published: {
    selectors: ["p.section-last"],
    format: "YYYY.MM.DD",
    timezone: "Asia/Tokyo"
  },
  dek: null,
  lead_image_url: null,
  content: {
    selectors: ["td.TableMain2"],
    defaultCleaner: false,
    transforms: {
      table: ($node) => {
        $node.attr("width", "auto");
      }
    },
    clean: []
  }
};

// src/extractors/custom/scan.netsecurity.ne.jp/index.js
init_esm_shims();
var ScanNetsecurityNeJpExtractor = {
  domain: "scan.netsecurity.ne.jp",
  title: {
    selectors: ["header.arti-header h1.head"]
  },
  author: null,
  date_published: {
    selectors: [['meta[name="article:modified_time"]', "value"]]
  },
  dek: {
    selectors: ["header.arti-header p.arti-summary"]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: ["div.arti-content.arti-content--thumbnail"],
    defaultCleaner: false,
    transforms: {},
    clean: ["aside.arti-giga"]
  }
};

// src/extractors/custom/jvndb.jvn.jp/index.js
init_esm_shims();
var JvndbJvnJpExtractor = {
  domain: "jvndb.jvn.jp",
  title: {
    selectors: ["title"]
  },
  author: null,
  date_published: {
    selectors: ["div.modifytxt:nth-child(2)"],
    format: "YYYY/MM/DD",
    timezone: "Asia/Tokyo"
  },
  dek: null,
  lead_image_url: null,
  content: {
    selectors: ["#news-list"],
    defaultCleaner: false,
    transforms: {},
    clean: []
  }
};

// src/extractors/custom/genius.com/index.js
init_esm_shims();
var GeniusComExtractor = {
  domain: "genius.com",
  title: {
    selectors: ["h1"]
  },
  author: {
    selectors: ["h2 a"]
  },
  date_published: {
    selectors: [
      [
        "meta[itemprop=page_data]",
        "value",
        (res) => {
          const json = JSON.parse(res);
          return json.song.release_date;
        }
      ]
    ]
  },
  dek: {
    selectors: [
      // enter selectors
    ]
  },
  lead_image_url: {
    selectors: [
      [
        "meta[itemprop=page_data]",
        "value",
        (res) => {
          const json = JSON.parse(res);
          return json.song.album.cover_art_url;
        }
      ]
    ]
  },
  content: {
    selectors: [".lyrics"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: []
  }
};

// src/extractors/custom/www.jnsa.org/index.js
init_esm_shims();
var WwwJnsaOrgExtractor = {
  domain: "www.jnsa.org",
  title: {
    selectors: ["#wgtitle h2"]
  },
  author: null,
  date_published: null,
  dek: null,
  excerpt: {
    selectors: [['meta[name="og:description"]', "value"]]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: ["#main_area"],
    transforms: {},
    clean: ["#pankuzu", "#side"]
  }
};

// src/extractors/custom/phpspot.org/index.js
init_esm_shims();
var PhpspotOrgExtractor = {
  domain: "phpspot.org",
  title: {
    selectors: ["h3.hl"]
  },
  author: null,
  date_published: {
    selectors: ["h4.hl"],
    format: "YYYY年MM月DD日",
    timezone: "Asia/Tokyo"
  },
  dek: null,
  lead_image_url: null,
  content: {
    selectors: ["div.entrybody"],
    defaultCleaner: false,
    transforms: {},
    clean: []
  }
};

// src/extractors/custom/www.infoq.com/index.js
init_esm_shims();
var WwwInfoqComExtractor = {
  domain: "www.infoq.com",
  title: {
    selectors: ["h1.heading"]
  },
  author: {
    selectors: ["div.widget.article__authors"]
  },
  date_published: {
    selectors: [".article__readTime.date"],
    format: "YYYY年MM月DD日",
    timezone: "Asia/Tokyo"
  },
  dek: {
    selectors: [['meta[name="og:description"]', "value"]]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: ["div.article__data"],
    defaultCleaner: false,
    transforms: {},
    clean: []
  }
};

// src/extractors/custom/www.moongift.jp/index.js
init_esm_shims();
var WwwMoongiftJpExtractor = {
  domain: "www.moongift.jp",
  title: {
    selectors: ["h1.title a"]
  },
  author: null,
  date_published: {
    selectors: ["ul.meta li:not(.social):first-of-type"],
    timezone: "Asia/Tokyo"
  },
  dek: {
    selectors: [['meta[name="og:description"]', "value"]]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: ["#main"],
    transforms: {},
    clean: ["ul.mg_service.cf"]
  }
};

// src/extractors/custom/www.itmedia.co.jp/index.js
init_esm_shims();
var WwwItmediaCoJpExtractor = {
  domain: "www.itmedia.co.jp",
  supportedDomains: [
    "www.atmarkit.co.jp",
    "techtarget.itmedia.co.jp",
    "nlab.itmedia.co.jp"
  ],
  title: {
    selectors: ["#cmsTitle h1"]
  },
  author: {
    selectors: ["#byline"]
  },
  date_published: {
    selectors: [['meta[name="article:modified_time"]', "value"]]
  },
  dek: {
    selectors: ["#cmsAbstract h2"]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: ["#cmsBody"],
    defaultCleaner: false,
    transforms: {},
    clean: ["#snsSharebox"]
  }
};

// src/extractors/custom/www.publickey1.jp/index.js
init_esm_shims();
var WwwPublickey1JpExtractor = {
  domain: "www.publickey1.jp",
  title: {
    selectors: ["h1"]
  },
  author: {
    selectors: [".bloggerinchief p:first-of-type", "#subcol p:has(img)"]
  },
  date_published: {
    selectors: ["div.pubdate"],
    format: "YYYY年MM月DD日",
    timezone: "Asia/Tokyo"
  },
  dek: null,
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: ["#maincol"],
    defaultCleaner: false,
    transforms: {},
    clean: ["#breadcrumbs", "div.sbm", "div.ad_footer"]
  }
};

// src/extractors/custom/takagi-hiromitsu.jp/index.js
init_esm_shims();
var TakagihiromitsuJpExtractor = {
  domain: "takagi-hiromitsu.jp",
  title: {
    selectors: ["h3"]
  },
  author: {
    selectors: [['meta[name="author"]', "value"]]
  },
  date_published: {
    selectors: [['meta[http-equiv="Last-Modified"]', "value"]]
  },
  dek: null,
  lead_image_url: null,
  content: {
    selectors: ["div.body"],
    defaultCleaner: false,
    transforms: {},
    clean: []
  }
};

// src/extractors/custom/bookwalker.jp/index.js
init_esm_shims();
var BookwalkerJpExtractor = {
  domain: "bookwalker.jp",
  title: {
    selectors: ["h1.p-main__title", "h1.main-heading"]
  },
  author: {
    selectors: ["div.p-author__list", "div.authors"]
  },
  date_published: {
    selectors: [
      "dl.p-information__data dd:nth-of-type(7)",
      ".work-info .work-detail:first-of-type .work-detail-contents:last-of-type"
    ],
    timezone: "Asia/Tokyo"
  },
  dek: null,
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: [
      "div.p-main__information",
      ["div.main-info", "div.main-cover-inner"]
    ],
    defaultCleaner: false,
    transforms: {},
    clean: [
      "span.label.label--trial",
      "dt.info-head.info-head--coin",
      "dd.info-contents.info-contents--coin",
      "div.info-notice.fn-toggleClass"
    ]
  }
};

// src/extractors/custom/www.yomiuri.co.jp/index.js
init_esm_shims();
var WwwYomiuriCoJpExtractor = {
  domain: "www.yomiuri.co.jp",
  title: {
    selectors: ["h1.title-article.c-article-title"]
  },
  author: null,
  date_published: {
    selectors: [['meta[name="article:published_time"]', "value"]]
  },
  dek: null,
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: ["div.p-main-contents"],
    transforms: {},
    clean: []
  }
};

// src/extractors/custom/japan.cnet.com/index.js
init_esm_shims();
var JapanCnetComExtractor = {
  domain: "japan.cnet.com",
  title: {
    selectors: [".leaf-headline-ttl"]
  },
  author: {
    selectors: [".writer"]
  },
  date_published: {
    selectors: [".date"],
    format: "YYYY年MM月DD日 HH時mm分",
    timezone: "Asia/Tokyo"
  },
  dek: null,
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: ["div.article_body"],
    transforms: {},
    clean: []
  }
};

// src/extractors/custom/deadline.com/index.js
init_esm_shims();
var DeadlineComExtractor = {
  domain: "deadline.com",
  title: {
    selectors: ["h1"]
  },
  author: {
    selectors: ["section.author h2"]
  },
  date_published: {
    selectors: [['meta[name="article:published_time"]', "value"]]
  },
  dek: null,
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: ["div.a-article-grid__main.pmc-a-grid article.pmc-a-grid-item"],
    transforms: {
      ".embed-twitter": ($node) => {
        const innerHtml = $node.html();
        $node.replaceWith(innerHtml);
      }
    },
    clean: ["figcaption"]
  }
};

// src/extractors/custom/www.gizmodo.jp/index.js
init_esm_shims();
var WwwGizmodoJpExtractor = {
  domain: "www.gizmodo.jp",
  title: {
    selectors: ["h1.p-post-title"]
  },
  author: {
    selectors: ["li.p-post-AssistAuthor"]
  },
  date_published: {
    selectors: [["li.p-post-AssistTime time", "datetime"]]
  },
  dek: null,
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: ["article.p-post"],
    transforms: {
      "img.p-post-thumbnailImage": ($node) => {
        const src = $node.attr("src");
        $node.attr("src", src.replace(/^.*=%27/, "").replace(/%27;$/, ""));
      }
    },
    clean: ["h1.p-post-title", "ul.p-post-Assist"]
  }
};

// src/extractors/custom/getnews.jp/index.js
init_esm_shims();
var GetnewsJpExtractor = {
  domain: "getnews.jp",
  title: {
    selectors: ["article h1"]
  },
  author: {
    selectors: [['meta[name="article:author"]', "value"], "span.prof"]
  },
  date_published: {
    selectors: [
      ['meta[name="article:published_time"]', "value"],
      ["ul.cattag-top time", "datetime"]
    ]
  },
  dek: null,
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: ["div.post-bodycopy"],
    transforms: {},
    clean: []
  }
};

// src/extractors/custom/www.lifehacker.jp/index.js
init_esm_shims();
var WwwLifehackerJpExtractor = {
  domain: "www.lifehacker.jp",
  title: {
    selectors: ['h1[class^="article_pArticle_Title"]', "h1.lh-summary-title"]
  },
  author: {
    selectors: [
      ['meta[name="author"]', "value"],
      "p.lh-entryDetailInner--credit"
    ]
  },
  date_published: {
    selectors: [
      ['meta[name="article:published_time"]', "value"],
      ["div.lh-entryDetail-header time", "datetime"]
    ]
  },
  dek: null,
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: [
      'div[class^="article_pArticle_Body__"]',
      "div.lh-entryDetail-body"
    ],
    transforms: {
      "img.lazyload": ($node) => {
        const src = $node.attr("src");
        $node.attr("src", src.replace(/^.*=%27/, "").replace(/%27;$/, ""));
      }
    },
    clean: ["p.lh-entryDetailInner--credit"]
  }
};

// src/extractors/custom/sect.iij.ad.jp/index.js
init_esm_shims();
var SectIijAdJpExtractor = {
  domain: "sect.iij.ad.jp",
  title: {
    selectors: ["div.title-box-inner h1", "h3"]
  },
  author: {
    selectors: ["p.post-author a", "dl.entrydate dd"]
  },
  date_published: {
    selectors: ["time"],
    format: "YYYY年MM月DD日",
    timezone: "Asia/Tokyo"
  },
  dek: null,
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: [".entry-inner", "#article"],
    transforms: {},
    clean: ["dl.entrydate"]
  }
};

// src/extractors/custom/www.oreilly.co.jp/index.js
init_esm_shims();
var WwwOreillyCoJpExtractor = {
  domain: "www.oreilly.co.jp",
  title: {
    selectors: [['meta[name="og:title"]', "value"], "h3"]
  },
  author: {
    selectors: ['span[itemprop="author"]', 'li[itemprop="author"]']
  },
  date_published: {
    selectors: [
      ['dd[itemprop="datePublished"]', "content"],
      ['meta[itemprop="datePublished"]', "value"]
    ],
    timezone: "Asia/Tokyo"
  },
  dek: null,
  lead_image_url: {
    selectors: [
      ['meta[name="og:image:secure_url"]', "value"],
      ['meta[name="og:image"]', "value"]
    ]
  },
  content: {
    selectors: ["section.detail", "#content"],
    defaultCleaner: false,
    transforms: {},
    clean: [".social-tools"]
  }
};

// src/extractors/custom/www.ipa.go.jp/index.js
init_esm_shims();
var WwwIpaGoJpExtractor = {
  domain: "www.ipa.go.jp",
  title: {
    selectors: ["h1"]
  },
  author: null,
  date_published: {
    selectors: ["p.ipar_text_right"],
    format: "YYYY年M月D日",
    timezone: "Asia/Tokyo"
  },
  dek: null,
  lead_image_url: null,
  content: {
    selectors: ["#ipar_main"],
    defaultCleaner: false,
    transforms: {},
    clean: ["p.ipar_text_right"]
  }
};

// src/extractors/custom/weekly.ascii.jp/index.js
init_esm_shims();
var WeeklyAsciiJpExtractor = {
  domain: "weekly.ascii.jp",
  title: {
    selectors: ["article h1", 'h1[itemprop="headline"]']
  },
  author: {
    selectors: ["p.author"]
  },
  date_published: {
    selectors: ["p.date", ['meta[name="odate"]', "value"]],
    format: "YYYY年MM月DD日 HH:mm",
    timezone: "Asia/Tokyo"
  },
  dek: null,
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: ["div#contents_detail", "div.article"],
    transforms: {},
    clean: []
  }
};

// src/extractors/custom/techlog.iij.ad.jp/index.js
init_esm_shims();
var TechlogIijAdJpExtractor = {
  domain: "techlog.iij.ad.jp",
  title: {
    selectors: ["h1.entry-title"]
  },
  author: {
    selectors: ['a[rel="author"]']
  },
  date_published: {
    selectors: [["time.entry-date", "datetime"]]
  },
  dek: null,
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: ["div.entry-content"],
    defaultCleaner: false,
    transforms: {},
    clean: [".wp_social_bookmarking_light"]
  }
};

// src/extractors/custom/wired.jp/index.js
init_esm_shims();
import URL from "url";
var WiredJpExtractor = {
  domain: "wired.jp",
  title: {
    selectors: ['h1[data-testid="ContentHeaderHed"]', "h1.post-title"]
  },
  author: {
    selectors: [
      ['meta[name="article:author"]', "value"],
      'p[itemprop="author"]'
    ]
  },
  date_published: {
    selectors: [
      ['meta[name="article:published_time"]', "value"],
      ["time", "datetime"]
    ]
  },
  dek: {
    selectors: ['div[class^="ContentHeaderDek"]', ".post-intro"]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: [
      'div[data-attribute-verso-pattern="article-body"]',
      "article.article-detail"
    ],
    transforms: {
      "img[data-original]": ($node) => {
        const dataOriginal = $node.attr("data-original");
        const src = $node.attr("src");
        const url = URL.resolve(src, dataOriginal);
        $node.attr("src", url);
      }
    },
    clean: [".post-category", "time", "h1.post-title", ".social-area-syncer"]
  }
};

// src/extractors/custom/japan.zdnet.com/index.js
init_esm_shims();
var JapanZdnetComExtractor = {
  domain: "japan.zdnet.com",
  title: {
    selectors: ["h1"]
  },
  author: {
    selectors: [['meta[name="cXenseParse:author"]', "value"]]
  },
  date_published: {
    selectors: [['meta[name="article:published_time"]', "value"]]
  },
  dek: null,
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: ["div.article_body"],
    transforms: {},
    clean: []
  }
};

// src/extractors/custom/www.rbbtoday.com/index.js
init_esm_shims();
var WwwRbbtodayComExtractor = {
  domain: "www.rbbtoday.com",
  title: {
    selectors: ["h1"]
  },
  author: {
    selectors: [".writer.writer-name"]
  },
  date_published: {
    selectors: [["header time", "datetime"]]
  },
  dek: {
    selectors: [['meta[name="description"]', "value"], ".arti-summary"]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: [".arti-content"],
    transforms: {},
    clean: [".arti-giga"]
  }
};

// src/extractors/custom/www.lemonde.fr/index.js
init_esm_shims();
var WwwLemondeFrExtractor = {
  domain: "www.lemonde.fr",
  title: {
    selectors: ["h1.article__title"]
  },
  author: {
    selectors: [".author__name"]
  },
  date_published: {
    selectors: [['meta[name="og:article:published_time"]', "value"]]
  },
  dek: {
    selectors: [".article__desc"]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: [".article__content"],
    transforms: {},
    clean: ["figcaption"]
  }
};

// src/extractors/custom/www.phoronix.com/index.js
init_esm_shims();
var WwwPhoronixComExtractor = {
  domain: "www.phoronix.com",
  title: {
    selectors: ["article h1", "article header"]
  },
  author: {
    selectors: [".author a:first-child"]
  },
  date_published: {
    selectors: [".author"],
    // 1 June 2019 at 08:34 PM EDT
    format: "D MMMM YYYY at hh:mm",
    timezone: "America/New_York"
  },
  dek: null,
  lead_image_url: null,
  content: {
    selectors: [".content"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: []
  }
};

// src/extractors/custom/pitchfork.com/index.js
init_esm_shims();
var PitchforkComExtractor = {
  domain: "pitchfork.com",
  title: {
    selectors: [['meta[name="og:title"]', "value"], "title"]
  },
  author: {
    selectors: [
      ['meta[name="article:author"]', "value"],
      ".authors-detail__display-name"
    ]
  },
  date_published: {
    selectors: ['div[class^="InfoSliceWrapper-"]', [".pub-date", "datetime"]]
  },
  dek: {
    selectors: [
      ['meta[name="og:description"]', "value"],
      ".review-detail__abstract"
    ]
  },
  lead_image_url: {
    selectors: [
      ['meta[name="og:image"]', "value"],
      [".single-album-tombstone__art img", "src"]
    ]
  },
  content: {
    selectors: ["div.body__inner-container", ".review-detail__text"]
  },
  extend: {
    score: {
      selectors: ['p[class*="Rating"]', ".score"]
    }
  }
};

// src/extractors/custom/biorxiv.org/index.js
init_esm_shims();
var BiorxivOrgExtractor = {
  domain: "biorxiv.org",
  title: {
    selectors: ["h1#page-title"]
  },
  author: {
    selectors: [
      "div.highwire-citation-biorxiv-article-top > div.highwire-cite-authors"
    ]
  },
  content: {
    selectors: ["div#abstract-1"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: []
  }
};

// src/extractors/custom/epaper.zeit.de/index.js
init_esm_shims();
var EpaperZeitDeExtractor = {
  domain: "epaper.zeit.de",
  title: {
    selectors: ["p.title"]
  },
  author: {
    selectors: [".article__author"]
  },
  date_published: null,
  excerpt: {
    selectors: ["subtitle"]
  },
  lead_image_url: null,
  content: {
    selectors: [".article"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {
      "p.title": "h1",
      ".article__author": "p",
      byline: "p",
      linkbox: "p"
    },
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: ["image-credits", "box[type=citation]"]
  }
};

// src/extractors/custom/www.ladbible.com/index.js
init_esm_shims();
var WwwLadbibleComExtractor = {
  domain: "www.ladbible.com",
  title: {
    selectors: ["h1"]
  },
  author: {
    selectors: ["[class*=Byline]"]
  },
  date_published: {
    selectors: ["time"],
    timezone: "Europe/London"
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: ["[class*=ArticleContainer]"],
    clean: [
      "time",
      "source",
      'a[href^="https://www.ladbible.com/"]',
      "picture",
      "[class*=StyledCardBlock]"
    ]
  }
};

// src/extractors/custom/timesofindia.indiatimes.com/index.js
init_esm_shims();
var TimesofindiaIndiatimesComExtractor = {
  domain: "timesofindia.indiatimes.com",
  title: {
    selectors: ["h1"]
  },
  extend: {
    reporter: {
      selectors: ["div.byline"],
      transforms: {}
    }
  },
  date_published: {
    selectors: [".byline"],
    format: "MMM D, YYYY, HH:mm z",
    timezone: "Asia/Kolkata"
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: ["div.contentwrapper:has(section)"],
    defaultCleaner: false,
    clean: [
      "section",
      "h1",
      ".byline",
      ".img_cptn",
      ".icon_share_wrap",
      'ul[itemtype="https://schema.org/BreadcrumbList"]'
    ]
  }
};

// src/extractors/custom/ma.ttias.be/index.js
init_esm_shims();
var MaTtiasBeExtractor = {
  domain: "ma.ttias.be",
  title: {
    selectors: [['meta[name="twitter:title"]', "value"]]
  },
  author: {
    selectors: [['meta[name="author"]', "value"]]
  },
  date_published: {
    selectors: [['meta[name="article:published_time"]', "value"]]
  },
  content: {
    selectors: [[".content"]],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {
      h2: ($node) => {
        $node.attr("id", null);
        return "h3";
      },
      h1: ($node) => {
        $node.attr("id", null);
        $node.after("<p></p>");
      },
      ul: ($node) => {
        $node.attr("class", "entry-content-asset");
      }
    }
  }
};

// src/extractors/custom/pastebin.com/index.js
init_esm_shims();
var PastebinComExtractor = {
  domain: "pastebin.com",
  title: {
    selectors: ["h1"]
  },
  author: {
    selectors: [".username", ".paste_box_line2 .t_us + a"]
  },
  date_published: {
    selectors: [".date", ".paste_box_line2 .t_da + span"],
    timezone: "America/New_York",
    format: "MMMM D, YYYY"
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: [".source", "#selectable .text"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {
      ol: "div",
      li: "p"
    },
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: []
  }
};

// src/extractors/custom/www.abendblatt.de/index.js
init_esm_shims();
var WwwAbendblattDeExtractor = {
  domain: "www.abendblatt.de",
  title: {
    selectors: ["h2.article__header__headline"]
  },
  author: {
    selectors: ["span.author-info__name-text"]
  },
  date_published: {
    selectors: [
      ["time.teaser-stream-time", "datetime"],
      ["time.article__header__date", "datetime"]
    ]
  },
  dek: {
    selectors: [['meta[name="description"]', "value"]]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: ["div.article__body"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {
      p: ($node) => {
        if (!$node.hasClass("obfuscated")) return null;
        let o = "";
        let n = 0;
        for (let i = $node.text(); n < i.length; n += 1) {
          const r = i.charCodeAt(n);
          r === 177 ? o += "%" : r === 178 ? o += "!" : r === 180 ? o += ";" : r === 181 ? o += "=" : r === 32 ? o += " " : r === 10 ? o += "\n" : r > 33 && (o += String.fromCharCode(r - 1));
        }
        $node.html(o);
        $node.removeClass("obfuscated");
        $node.addClass("deobfuscated");
        return null;
      },
      div: ($node) => {
        if (!$node.hasClass("obfuscated")) return null;
        let o = "";
        let n = 0;
        for (let i = $node.text(); n < i.length; n += 1) {
          const r = i.charCodeAt(n);
          r === 177 ? o += "%" : r === 178 ? o += "!" : r === 180 ? o += ";" : r === 181 ? o += "=" : r === 32 ? o += " " : r === 10 ? o += "\n" : r > 33 && (o += String.fromCharCode(r - 1));
        }
        $node.html(o);
        $node.removeClass("obfuscated");
        $node.addClass("deobfuscated");
        return null;
      }
    },
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: []
  }
};

// src/extractors/custom/www.gruene.de/index.js
init_esm_shims();
var WwwGrueneDeExtractor = {
  domain: "www.gruene.de",
  title: {
    selectors: ["header h1"]
  },
  author: null,
  date_published: null,
  dek: null,
  lead_image_url: {
    selectors: [['meta[property="og:image"]', "content"]]
  },
  content: {
    // selectors: ['section'],
    selectors: [["section header", "section h2", "section p", "section ol"]],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: ["figcaption", "p[class]"]
  }
};

// src/extractors/custom/www.engadget.com/index.js
init_esm_shims();
var WwwEngadgetComExtractor = {
  domain: "www.engadget.com",
  title: {
    selectors: [['meta[name="og:title"]', "value"]]
  },
  author: {
    selectors: ['a.th-meta[data-ylk*="subsec:author"]']
  },
  // Engadget stories have publish dates, but the only representation of them on the page
  // is in a format like "2h ago". There are also these tags with blank values:
  // <meta class="swiftype" name="published_at" data-type="date" value="">
  date_published: {
    selectors: [
      // enter selectors
    ]
  },
  dek: {
    selectors: ['div[class*="o-title_mark"] div']
  },
  // Engadget stories do have lead images specified by an og:image meta tag, but selecting
  // the value attribute of that tag fails. I believe the "&#x2111;" sequence of characters
  // is triggering this inability to select the attribute value.
  lead_image_url: {
    selectors: [
      // enter selectors
    ]
  },
  content: {
    selectors: [
      [
        // Some figures will be inside div.article-text, but some header figures/images
        // will not.
        "#page_body figure:not(div.article-text figure)",
        "div.article-text"
      ]
    ],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: []
  }
};

// src/extractors/custom/arstechnica.com/index.js
init_esm_shims();
var ArstechnicaComExtractor = {
  domain: "arstechnica.com",
  // Articles from this site are often paginated, but I was unable to write a CSS
  // selector to find the next page. On the last page, there will be a link with a CSS
  // selector indicating that the previous page is next. But the parser appears to find
  // the next page without this extractor finding it, as long as the fallback option is
  // left at its default value of true.
  title: {
    selectors: ["title"]
  },
  author: {
    selectors: ['*[rel="author"] *[itemprop="name"]']
  },
  date_published: {
    selectors: [[".byline time", "datetime"]]
  },
  dek: {
    selectors: ['h2[itemprop="description"]']
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: ['div[itemprop="articleBody"]'],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {
      h2: ($node) => {
        $node.before("<p></p>");
      }
    },
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result.
    clean: [
      // Remove enlarge links and separators inside image captions.
      "figcaption .enlarge-link",
      "figcaption .sep",
      // I could not transform the video into usable elements, so I
      // removed them.
      "figure.video",
      // Image galleries that do not work.
      ".gallery",
      "aside",
      ".sidebar"
    ]
  }
};

// src/extractors/custom/www.ndtv.com/index.js
init_esm_shims();
var WwwNdtvComExtractor = {
  domain: "www.ndtv.com",
  title: {
    selectors: [['meta[name="og:title"]', "value"], "h1.entry-title"]
  },
  author: {
    selectors: ['span[itemprop="author"] span[itemprop="name"]']
  },
  date_published: {
    selectors: [['span[itemprop="dateModified"]', "content"]]
  },
  dek: {
    selectors: ["h2"]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: ['div[itemprop="articleBody"]'],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {
      // This site puts a dateline in a 'b' above the first paragraph, and then somehow
      // blends it into the first paragraph with CSS. This transform moves the dateline
      // to the first paragraph.
      ".place_cont": ($node) => {
        if (!$node.parents("p").length) {
          const nextSibling = $node.next("p");
          if (nextSibling) {
            $node.remove();
            nextSibling.prepend($node);
          }
        }
      }
    },
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [
      ".highlghts_Wdgt",
      ".ins_instory_dv_caption",
      "input",
      "._world-wrapper .mt20"
    ]
  }
};

// src/extractors/custom/www.spektrum.de/index.js
init_esm_shims();
var SpektrumExtractor = {
  domain: "www.spektrum.de",
  title: {
    selectors: [".content__title"]
  },
  author: {
    selectors: [".content__author__info__name"]
  },
  date_published: {
    selectors: [".content__meta__date"],
    timezone: "Europe/Berlin"
  },
  dek: {
    selectors: [".content__intro"]
  },
  lead_image_url: {
    selectors: [
      // This is how the meta tag appears in the original source code.
      ['meta[name="og:image"]', "value"],
      // This is how the meta tag appears in the DOM in Chrome.
      // The selector is included here to make the code work within the browser as well.
      ['meta[property="og:image"]', "content"],
      // This is the image that is shown on the page.
      // It can be slightly cropped compared to the original in the meta tag.
      ".image__article__top img"
    ]
  },
  content: {
    selectors: ["article.content"],
    clean: [
      ".breadcrumbs",
      ".hide-for-print",
      "aside",
      "header h2",
      ".image__article__top",
      ".content__author",
      ".copyright",
      ".callout-box"
    ]
  }
};

// src/extractors/custom/postlight.com/index.js
init_esm_shims();
var PostlightComExtractor = {
  domain: "postlight.com",
  title: {
    selectors: [['meta[name="og:title"]', "value"]]
  },
  author: {
    selectors: [['meta[name="parsely-author"]', "value"]]
  },
  date_published: {
    selectors: [['meta[name="article:published_time"]', "value"]]
  },
  dek: {
    selectors: ["h2.single-hero__abstract"]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: ["main.post"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [
      "section.pl-post-link",
      "aside",
      "section.insights_featured_case_studies"
    ]
  }
};

// src/extractors/custom/www.investmentexecutive.com/index.js
init_esm_shims();
var WwwInvestmentexecutiveComExtractor = {
  domain: "www.investmentexecutive.com",
  title: {
    selectors: ["h1"]
  },
  author: {
    selectors: ['div[itemprop="author"]']
  },
  date_published: {
    selectors: [['meta[itemprop="datePublished"]', "value"]]
  },
  dek: {
    selectors: [['meta[name="og:description"]', "value"]]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: ["section.article-body"],
    clean: [".hidden"]
  }
};

// src/extractors/custom/www.cbc.ca/index.js
init_esm_shims();
var WwwCbcCaExtractor = {
  domain: "www.cbc.ca",
  title: {
    selectors: ["h1"]
  },
  author: {
    selectors: [".authorText", ".bylineDetails"]
  },
  date_published: {
    selectors: [[".timeStamp[datetime]", "datetime"]]
  },
  dek: {
    selectors: [".deck"]
  },
  lead_image_url: {
    selectors: [['meta[name="og:image"]', "value"]]
  },
  content: {
    selectors: [".story"],
    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},
    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: []
  }
};

// src/extractors/all.js
var all_default = Object.keys(custom_exports).reduce((acc, key) => {
  const extractor = custom_exports[key];
  return {
    ...acc,
    ...mergeSupportedDomains(extractor)
  };
}, {});

// src/extractors/generic/index.js
init_esm_shims();
import cheerio3 from "cheerio";
import stringDirection from "string-direction";

// src/extractors/generic/content/extractor.js
init_esm_shims();
import cheerio from "cheerio";

// src/utils/dom/index.js
init_esm_shims();

// src/utils/dom/strip-unlikely-candidates.js
init_esm_shims();

// src/utils/dom/constants.js
init_esm_shims();
var SPACER_RE = new RegExp("transparent|spacer|blank", "i");
var KEEP_CLASS = "mercury-parser-keep";
var KEEP_SELECTORS = [
  'iframe[src^="https://www.youtube.com"]',
  'iframe[src^="https://www.youtube-nocookie.com"]',
  'iframe[src^="http://www.youtube.com"]',
  'iframe[src^="https://player.vimeo"]',
  'iframe[src^="http://player.vimeo"]',
  'iframe[src^="https://www.redditmedia.com"]'
];
var STRIP_OUTPUT_TAGS = [
  "title",
  "script",
  "noscript",
  "link",
  "style",
  "hr",
  "embed",
  "iframe",
  "object"
];
var REMOVE_ATTRS = ["style", "align"];
var REMOVE_ATTR_SELECTORS = REMOVE_ATTRS.map(
  (selector) => `[${selector}]`
);
var REMOVE_ATTR_LIST = REMOVE_ATTRS.join(",");
var WHITELIST_ATTRS = [
  "src",
  "srcset",
  "sizes",
  "type",
  "href",
  "class",
  "id",
  "alt",
  "xlink:href",
  "width",
  "height"
];
var WHITELIST_ATTRS_RE = new RegExp(
  `^(${WHITELIST_ATTRS.join("|")})$`,
  "i"
);
var REMOVE_EMPTY_TAGS = ["p"];
var REMOVE_EMPTY_SELECTORS = REMOVE_EMPTY_TAGS.map(
  (tag) => `${tag}:empty`
).join(",");
var CLEAN_CONDITIONALLY_TAGS = [
  "ul",
  "ol",
  "table",
  "div",
  "button",
  "form"
].join(",");
var HEADER_TAGS = ["h2", "h3", "h4", "h5", "h6"];
var HEADER_TAG_LIST = HEADER_TAGS.join(",");
var UNLIKELY_CANDIDATES_BLACKLIST = [
  "ad-break",
  "adbox",
  "advert",
  "addthis",
  "agegate",
  "aux",
  "blogger-labels",
  "combx",
  "comment",
  "conversation",
  "disqus",
  "entry-unrelated",
  "extra",
  "foot",
  // 'form', // This is too generic, has too many false positives
  "header",
  "hidden",
  "loader",
  "login",
  // Note: This can hit 'blogindex'.
  "menu",
  "meta",
  "nav",
  "outbrain",
  "pager",
  "pagination",
  "predicta",
  // readwriteweb inline ad box
  "presence_control_external",
  // lifehacker.com container full of false positives
  "popup",
  "printfriendly",
  "related",
  "remove",
  "remark",
  "rss",
  "share",
  "shoutbox",
  "sidebar",
  "sociable",
  "sponsor",
  "taboola",
  "tools"
];
var UNLIKELY_CANDIDATES_WHITELIST = [
  "and",
  "article",
  "body",
  "blogindex",
  "column",
  "content",
  "entry-content-asset",
  "format",
  // misuse of form
  "hfeed",
  "hentry",
  "hatom",
  "main",
  "page",
  "posts",
  "shadow"
];
var DIV_TO_P_BLOCK_TAGS = [
  "a",
  "blockquote",
  "dl",
  "div",
  "img",
  "p",
  "pre",
  "table"
].join(",");
var NON_TOP_CANDIDATE_TAGS = [
  "br",
  "b",
  "i",
  "label",
  "hr",
  "area",
  "base",
  "basefont",
  "input",
  "img",
  "link",
  "meta"
];
var NON_TOP_CANDIDATE_TAGS_RE = new RegExp(
  `^(${NON_TOP_CANDIDATE_TAGS.join("|")})$`,
  "i"
);
var PHOTO_HINTS = ["figure", "photo", "image", "caption"];
var PHOTO_HINTS_RE = new RegExp(PHOTO_HINTS.join("|"), "i");
var POSITIVE_SCORE_HINTS = [
  "article",
  "articlecontent",
  "instapaper_body",
  "blog",
  "body",
  "content",
  "entry-content-asset",
  "entry",
  "hentry",
  "main",
  "Normal",
  "page",
  "pagination",
  "permalink",
  "post",
  "story",
  "text",
  "[-_]copy",
  // usatoday
  "\\Bcopy"
];
var POSITIVE_SCORE_RE = new RegExp(
  POSITIVE_SCORE_HINTS.join("|"),
  "i"
);
var READABILITY_ASSET = new RegExp("entry-content-asset", "i");
var NEGATIVE_SCORE_HINTS = [
  "adbox",
  "advert",
  "author",
  "bio",
  "bookmark",
  "bottom",
  "byline",
  "clear",
  "com-",
  "combx",
  "comment",
  "comment\\B",
  "contact",
  "copy",
  "credit",
  "crumb",
  "date",
  "deck",
  "excerpt",
  "featured",
  // tnr.com has a featured_content which throws us off
  "foot",
  "footer",
  "footnote",
  "graf",
  "head",
  "info",
  "infotext",
  // newscientist.com copyright
  "instapaper_ignore",
  "jump",
  "linebreak",
  "link",
  "masthead",
  "media",
  "meta",
  "modal",
  "outbrain",
  // slate.com junk
  "promo",
  "pr_",
  // autoblog - press release
  "related",
  "respond",
  "roundcontent",
  // lifehacker restricted content warning
  "scroll",
  "secondary",
  "share",
  "shopping",
  "shoutbox",
  "side",
  "sidebar",
  "sponsor",
  "stamp",
  "sub",
  "summary",
  "tags",
  "tools",
  "widget"
];
var NEGATIVE_SCORE_RE = new RegExp(
  NEGATIVE_SCORE_HINTS.join("|"),
  "i"
);
var IS_WP_SELECTOR = "meta[name=generator][value^=WordPress]";
var DIGIT_RE = new RegExp("[0-9]");
var EXTRANEOUS_LINK_HINTS = [
  "print",
  "archive",
  "comment",
  "discuss",
  "e-mail",
  "email",
  "share",
  "reply",
  "all",
  "login",
  "sign",
  "single",
  "adx",
  "entry-unrelated"
];
var EXTRANEOUS_LINK_HINTS_RE = new RegExp(
  EXTRANEOUS_LINK_HINTS.join("|"),
  "i"
);
var PAGE_RE = new RegExp("pag(e|ing|inat)", "i");
var CAP_LINK_TEXT_RE = new RegExp("(first|last|end)", "i");
var PREV_LINK_TEXT_RE = new RegExp("(prev|earl|old|new|<|«)", "i");
var BR_TAGS_RE = new RegExp("(<br[^>]*>[ \n\r	]*){2,}", "i");
var BR_TAG_RE = new RegExp("<br[^>]*>", "i");
var BLOCK_LEVEL_TAGS = [
  "article",
  "aside",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "col",
  "colgroup",
  "dd",
  "div",
  "dl",
  "dt",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "hgroup",
  "hr",
  "li",
  "map",
  "object",
  "ol",
  "output",
  "p",
  "pre",
  "progress",
  "section",
  "table",
  "tbody",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "tr",
  "ul",
  "video"
];
var BLOCK_LEVEL_TAGS_RE = new RegExp(
  `^(${BLOCK_LEVEL_TAGS.join("|")})$`,
  "i"
);
var candidatesBlacklist = UNLIKELY_CANDIDATES_BLACKLIST.join("|");
var CANDIDATES_BLACKLIST = new RegExp(candidatesBlacklist, "i");
var candidatesWhitelist = UNLIKELY_CANDIDATES_WHITELIST.join("|");
var CANDIDATES_WHITELIST = new RegExp(candidatesWhitelist, "i");
var UNLIKELY_RE = new RegExp(
  `!(${candidatesWhitelist})|(${candidatesBlacklist})`,
  "i"
);
var PARAGRAPH_SCORE_TAGS = new RegExp("^(p|li|span|pre)$", "i");
var CHILD_CONTENT_TAGS = new RegExp("^(td|blockquote|ol|ul|dl)$", "i");
var BAD_TAGS = new RegExp("^(address|form)$", "i");
var HTML_OR_BODY_RE = new RegExp("^(html|body)$", "i");

// src/utils/dom/strip-unlikely-candidates.js
function stripUnlikelyCandidates($) {
  $("*").not("a").each((index, node) => {
    const $node = $(node);
    const classes = $node.attr("class");
    const id = $node.attr("id");
    if (!id && !classes) return;
    const classAndId = `${classes || ""} ${id || ""}`;
    if (CANDIDATES_WHITELIST.test(classAndId)) {
      return;
    }
    if (CANDIDATES_BLACKLIST.test(classAndId)) {
      $node.remove();
    }
  });
  return $;
}

// src/utils/dom/brs-to-ps.js
init_esm_shims();
function brsToPs($) {
  let collapsing = false;
  $("br").each((index, element) => {
    const $element = $(element);
    const nextElement = $element.next().get(0);
    if (nextElement && nextElement.tagName.toLowerCase() === "br") {
      collapsing = true;
      $element.remove();
    } else if (collapsing) {
      collapsing = false;
      paragraphize(element, $, true);
    }
  });
  return $;
}

// src/utils/dom/paragraphize.js
init_esm_shims();
function paragraphize(node, $, br = false) {
  const $node = $(node);
  if (br) {
    let sibling = node.nextSibling;
    const p = $("<p></p>");
    while (sibling && !(sibling.tagName && BLOCK_LEVEL_TAGS_RE.test(sibling.tagName))) {
      const { nextSibling } = sibling;
      $(sibling).appendTo(p);
      sibling = nextSibling;
    }
    $node.replaceWith(p);
    $node.remove();
    return $;
  }
  return $;
}

// src/utils/dom/convert-to-paragraphs.js
init_esm_shims();
function convertDivs($) {
  $("div").each((index, div) => {
    const $div = $(div);
    const convertible = $div.children(DIV_TO_P_BLOCK_TAGS).length === 0;
    if (convertible) {
      convertNodeTo($div, $, "p");
    }
  });
  return $;
}
function convertSpans($) {
  $("span").each((index, span) => {
    const $span = $(span);
    const convertible = $span.parents("p, div, li, figcaption").length === 0;
    if (convertible) {
      convertNodeTo($span, $, "p");
    }
  });
  return $;
}
function convertToParagraphs($) {
  $ = brsToPs($);
  $ = convertDivs($);
  $ = convertSpans($);
  return $;
}

// src/utils/dom/convert-node-to.js
init_esm_shims();
function convertNodeTo($node, $, tag = "p") {
  const node = $node.get(0);
  if (!node) {
    return $;
  }
  const attrs = getAttrs(node) || {};
  const attribString = Reflect.ownKeys(attrs).map((key) => `${key}=${attrs[key]}`).join(" ");
  let html;
  if ($.browser) {
    html = node.tagName.toLowerCase() === "noscript" ? $node.text() : $node.html();
  } else {
    html = $node.contents();
  }
  $node.replaceWith(`<${tag} ${attribString}>${html}</${tag}>`);
  return $;
}

// src/utils/dom/clean-images.js
init_esm_shims();
function cleanForHeight($img, $) {
  const height = parseInt($img.attr("height"), 10);
  const width = parseInt($img.attr("width"), 10) || 20;
  if ((height || 20) < 10 || width < 10) {
    $img.remove();
  } else if (height) {
    $img.removeAttr("height");
  }
  return $;
}
function removeSpacers($img, $) {
  if (SPACER_RE.test($img.attr("src"))) {
    $img.remove();
  }
  return $;
}
function cleanImages($article, $) {
  $article.find("img").each((index, img) => {
    const $img = $(img);
    cleanForHeight($img, $);
    removeSpacers($img, $);
  });
  return $;
}

// src/utils/dom/mark-to-keep.js
init_esm_shims();
import URL2 from "url";
function markToKeep(article, $, url, tags = []) {
  if (tags.length === 0) {
    tags = KEEP_SELECTORS;
  }
  if (url) {
    const { protocol, hostname } = URL2.parse(url);
    tags = [...tags, `iframe[src^="${protocol}//${hostname}"]`];
  }
  $(tags.join(","), article).addClass(KEEP_CLASS);
  return $;
}

// src/utils/dom/strip-junk-tags.js
init_esm_shims();
function stripJunkTags(article, $, tags = []) {
  if (tags.length === 0) {
    tags = STRIP_OUTPUT_TAGS;
  }
  $(tags.join(","), article).not(`.${KEEP_CLASS}`).remove();
  return $;
}

// src/utils/dom/clean-h-ones.js
init_esm_shims();
function cleanHOnes(article, $) {
  const $hOnes = $("h1", article);
  if ($hOnes.length < 3) {
    $hOnes.each((index, node) => $(node).remove());
  } else {
    $hOnes.each((index, node) => {
      convertNodeTo($(node), $, "h2");
    });
  }
  return $;
}

// src/utils/dom/clean-attributes.js
init_esm_shims();
function removeAllButWhitelist($article, $) {
  $article.find("*").each((index, node) => {
    const attrs = getAttrs(node);
    setAttrs(
      node,
      Reflect.ownKeys(attrs).reduce((acc, attr) => {
        if (WHITELIST_ATTRS_RE.test(attr)) {
          return { ...acc, [attr]: attrs[attr] };
        }
        return acc;
      }, {})
    );
  });
  $(`.${KEEP_CLASS}`, $article).removeClass(KEEP_CLASS);
  return $article;
}
function cleanAttributes($article, $) {
  return removeAllButWhitelist(
    $article.parent().length ? $article.parent() : $article,
    $
  );
}

// src/utils/dom/remove-empty.js
init_esm_shims();
function removeEmpty($article, $) {
  $article.find("p").each((index, p) => {
    const $p = $(p);
    if ($p.find("iframe, img").length === 0 && $p.text().trim() === "")
      $p.remove();
  });
  return $;
}

// src/utils/dom/clean-tags.js
init_esm_shims();

// src/extractors/generic/content/scoring/index.js
init_esm_shims();

// src/extractors/generic/content/scoring/get-weight.js
init_esm_shims();

// src/extractors/generic/content/scoring/constants.js
init_esm_shims();
var UNLIKELY_CANDIDATES_BLACKLIST2 = [
  "ad-break",
  "adbox",
  "advert",
  "addthis",
  "agegate",
  "aux",
  "blogger-labels",
  "combx",
  "comment",
  "conversation",
  "disqus",
  "entry-unrelated",
  "extra",
  "foot",
  "form",
  "header",
  "hidden",
  "loader",
  "login",
  // Note: This can hit 'blogindex'.
  "menu",
  "meta",
  "nav",
  "pager",
  "pagination",
  "predicta",
  // readwriteweb inline ad box
  "presence_control_external",
  // lifehacker.com container full of false positives
  "popup",
  "printfriendly",
  "related",
  "remove",
  "remark",
  "rss",
  "share",
  "shoutbox",
  "sidebar",
  "sociable",
  "sponsor",
  "tools"
];
var UNLIKELY_CANDIDATES_WHITELIST2 = [
  "and",
  "article",
  "body",
  "blogindex",
  "column",
  "content",
  "entry-content-asset",
  "format",
  // misuse of form
  "hfeed",
  "hentry",
  "hatom",
  "main",
  "page",
  "posts",
  "shadow"
];
var DIV_TO_P_BLOCK_TAGS2 = [
  "a",
  "blockquote",
  "dl",
  "div",
  "img",
  "p",
  "pre",
  "table"
].join(",");
var NON_TOP_CANDIDATE_TAGS2 = [
  "br",
  "b",
  "i",
  "label",
  "hr",
  "area",
  "base",
  "basefont",
  "input",
  "img",
  "link",
  "meta"
];
var NON_TOP_CANDIDATE_TAGS_RE2 = new RegExp(
  `^(${NON_TOP_CANDIDATE_TAGS2.join("|")})$`,
  "i"
);
var HNEWS_CONTENT_SELECTORS = [
  [".hentry", ".entry-content"],
  ["entry", ".entry-content"],
  [".entry", ".entry_content"],
  [".post", ".postbody"],
  [".post", ".post_body"],
  [".post", ".post-body"]
];
var PHOTO_HINTS2 = ["figure", "photo", "image", "caption"];
var PHOTO_HINTS_RE2 = new RegExp(PHOTO_HINTS2.join("|"), "i");
var POSITIVE_SCORE_HINTS2 = [
  "article",
  "articlecontent",
  "instapaper_body",
  "blog",
  "body",
  "content",
  "entry-content-asset",
  "entry",
  "hentry",
  "main",
  "Normal",
  "page",
  "pagination",
  "permalink",
  "post",
  "story",
  "text",
  "[-_]copy",
  // usatoday
  "\\Bcopy"
];
var POSITIVE_SCORE_RE2 = new RegExp(
  POSITIVE_SCORE_HINTS2.join("|"),
  "i"
);
var READABILITY_ASSET2 = new RegExp("entry-content-asset", "i");
var NEGATIVE_SCORE_HINTS2 = [
  "adbox",
  "advert",
  "author",
  "bio",
  "bookmark",
  "bottom",
  "byline",
  "clear",
  "com-",
  "combx",
  "comment",
  "comment\\B",
  "contact",
  "copy",
  "credit",
  "crumb",
  "date",
  "deck",
  "excerpt",
  "featured",
  // tnr.com has a featured_content which throws us off
  "foot",
  "footer",
  "footnote",
  "graf",
  "head",
  "info",
  "infotext",
  // newscientist.com copyright
  "instapaper_ignore",
  "jump",
  "linebreak",
  "link",
  "masthead",
  "media",
  "meta",
  "modal",
  "outbrain",
  // slate.com junk
  "promo",
  "pr_",
  // autoblog - press release
  "related",
  "respond",
  "roundcontent",
  // lifehacker restricted content warning
  "scroll",
  "secondary",
  "share",
  "shopping",
  "shoutbox",
  "side",
  "sidebar",
  "sponsor",
  "stamp",
  "sub",
  "summary",
  "tags",
  "tools",
  "widget"
];
var NEGATIVE_SCORE_RE2 = new RegExp(
  NEGATIVE_SCORE_HINTS2.join("|"),
  "i"
);
var DIGIT_RE2 = new RegExp("[0-9]");
var BR_TAGS_RE2 = new RegExp("(<br[^>]*>[ \n\r	]*){2,}", "i");
var BR_TAG_RE2 = new RegExp("<br[^>]*>", "i");
var BLOCK_LEVEL_TAGS2 = [
  "article",
  "aside",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "col",
  "colgroup",
  "dd",
  "div",
  "dl",
  "dt",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "hgroup",
  "hr",
  "li",
  "map",
  "object",
  "ol",
  "output",
  "p",
  "pre",
  "progress",
  "section",
  "table",
  "tbody",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "tr",
  "ul",
  "video"
];
var BLOCK_LEVEL_TAGS_RE2 = new RegExp(
  `^(${BLOCK_LEVEL_TAGS2.join("|")})$`,
  "i"
);
var candidatesBlacklist2 = UNLIKELY_CANDIDATES_BLACKLIST2.join("|");
var CANDIDATES_BLACKLIST2 = new RegExp(candidatesBlacklist2, "i");
var candidatesWhitelist2 = UNLIKELY_CANDIDATES_WHITELIST2.join("|");
var CANDIDATES_WHITELIST2 = new RegExp(candidatesWhitelist2, "i");
var UNLIKELY_RE2 = new RegExp(
  `!(${candidatesWhitelist2})|(${candidatesBlacklist2})`,
  "i"
);
var PARAGRAPH_SCORE_TAGS2 = new RegExp("^(p|li|span|pre)$", "i");
var CHILD_CONTENT_TAGS2 = new RegExp("^(td|blockquote|ol|ul|dl)$", "i");
var BAD_TAGS2 = new RegExp("^(address|form)$", "i");
var HTML_OR_BODY_RE2 = new RegExp("^(html|body)$", "i");

// src/extractors/generic/content/scoring/get-weight.js
function getWeight(node) {
  const classes = node.attr("class");
  const id = node.attr("id");
  let score = 0;
  if (id) {
    if (POSITIVE_SCORE_RE2.test(id)) {
      score += 25;
    }
    if (NEGATIVE_SCORE_RE2.test(id)) {
      score -= 25;
    }
  }
  if (classes) {
    if (score === 0) {
      if (POSITIVE_SCORE_RE2.test(classes)) {
        score += 25;
      }
      if (NEGATIVE_SCORE_RE2.test(classes)) {
        score -= 25;
      }
    }
    if (PHOTO_HINTS_RE2.test(classes)) {
      score += 10;
    }
    if (READABILITY_ASSET2.test(classes)) {
      score += 25;
    }
  }
  return score;
}

// src/extractors/generic/content/scoring/get-score.js
init_esm_shims();
function getScore($node) {
  return parseFloat($node.attr("score")) || null;
}

// src/extractors/generic/content/scoring/score-commas.js
init_esm_shims();
function scoreCommas(text) {
  return (text.match(/,/g) || []).length;
}

// src/extractors/generic/content/scoring/score-length.js
init_esm_shims();
var idkRe = new RegExp("^(p|pre)$", "i");
function scoreLength(textLength2, tagName = "p") {
  const chunks = textLength2 / 50;
  if (chunks > 0) {
    let lengthBonus;
    if (idkRe.test(tagName)) {
      lengthBonus = chunks - 2;
    } else {
      lengthBonus = chunks - 1.25;
    }
    return Math.min(Math.max(lengthBonus, 0), 3);
  }
  return 0;
}

// src/extractors/generic/content/scoring/score-paragraph.js
init_esm_shims();
function scoreParagraph(node) {
  let score = 1;
  const text = node.text().trim();
  const textLength2 = text.length;
  if (textLength2 < 25) {
    return 0;
  }
  score += scoreCommas(text);
  score += scoreLength(textLength2);
  if (text.slice(-1) === ":") {
    score -= 1;
  }
  return score;
}

// src/extractors/generic/content/scoring/set-score.js
init_esm_shims();
function setScore($node, $, score) {
  $node.attr("score", score);
  return $node;
}

// src/extractors/generic/content/scoring/add-score.js
init_esm_shims();
function addScore($node, $, amount) {
  try {
    const score = getOrInitScore($node, $) + amount;
    setScore($node, $, score);
  } catch (e) {
  }
  return $node;
}

// src/extractors/generic/content/scoring/add-to-parent.js
init_esm_shims();
function addToParent(node, $, score) {
  const parent = node.parent();
  if (parent) {
    addScore(parent, $, score * 0.25);
  }
  return node;
}

// src/extractors/generic/content/scoring/get-or-init-score.js
init_esm_shims();
function getOrInitScore($node, $, weightNodes = true) {
  let score = getScore($node);
  if (score) {
    return score;
  }
  score = scoreNode($node);
  if (weightNodes) {
    score += getWeight($node);
  }
  addToParent($node, $, score);
  return score;
}

// src/extractors/generic/content/scoring/score-node.js
init_esm_shims();
function scoreNode($node) {
  const { tagName } = $node.get(0);
  if (PARAGRAPH_SCORE_TAGS2.test(tagName)) {
    return scoreParagraph($node);
  }
  if (tagName.toLowerCase() === "div") {
    return 5;
  }
  if (CHILD_CONTENT_TAGS2.test(tagName)) {
    return 3;
  }
  if (BAD_TAGS2.test(tagName)) {
    return -3;
  }
  if (tagName.toLowerCase() === "th") {
    return -5;
  }
  return 0;
}

// src/extractors/generic/content/scoring/score-content.js
init_esm_shims();
function convertSpans2($node, $) {
  if ($node.get(0)) {
    const { tagName } = $node.get(0);
    if (tagName === "span") {
      convertNodeTo($node, $, "div");
    }
  }
}
function addScoreTo($node, $, score) {
  if ($node) {
    convertSpans2($node, $);
    addScore($node, $, score);
  }
}
function scorePs($, weightNodes) {
  $("p, pre").not("[score]").each((index, node) => {
    let $node = $(node);
    $node = setScore($node, $, getOrInitScore($node, $, weightNodes));
    const $parent = $node.parent();
    const rawScore = scoreNode($node);
    addScoreTo($parent, $, rawScore, weightNodes);
    if ($parent) {
      addScoreTo($parent.parent(), $, rawScore / 2, weightNodes);
    }
  });
  return $;
}
function scoreContent($, weightNodes = true) {
  HNEWS_CONTENT_SELECTORS.forEach(([parentSelector, childSelector]) => {
    $(`${parentSelector} ${childSelector}`).each((index, node) => {
      addScore($(node).parent(parentSelector), $, 80);
    });
  });
  scorePs($, weightNodes);
  scorePs($, weightNodes);
  return $;
}

// src/extractors/generic/content/scoring/find-top-candidate.js
init_esm_shims();

// src/extractors/generic/content/scoring/merge-siblings.js
init_esm_shims();

// src/utils/text/index.js
init_esm_shims();

// src/utils/text/normalize-spaces.js
init_esm_shims();
var NORMALIZE_RE = /\s{2,}(?![^<>]*<\/(pre|code|textarea)>)/g;
function normalizeSpaces(text) {
  return text.replace(NORMALIZE_RE, " ").trim();
}

// src/utils/text/extract-from-url.js
init_esm_shims();
function extractFromUrl(url, regexList) {
  const matchRe = regexList.find((re) => re.test(url));
  if (matchRe) {
    return matchRe.exec(url)[1];
  }
  return null;
}

// src/utils/text/page-num-from-url.js
init_esm_shims();

// src/utils/text/constants.js
init_esm_shims();
var PAGE_IN_HREF_RE = new RegExp(
  "(page|paging|(p(a|g|ag)?(e|enum|ewanted|ing|ination)))?(=|/)([0-9]{1,3})",
  "i"
);
var HAS_ALPHA_RE = /[a-z]/i;
var IS_ALPHA_RE = /^[a-z]+$/i;
var IS_DIGIT_RE = /^[0-9]+$/i;
var ENCODING_RE = /charset=([\w-]+)\b/;
var DEFAULT_ENCODING = "utf-8";

// src/utils/text/page-num-from-url.js
function pageNumFromUrl(url) {
  const matches = url.match(PAGE_IN_HREF_RE);
  if (!matches) return null;
  const pageNum = parseInt(matches[6], 10);
  return pageNum < 100 ? pageNum : null;
}

// src/utils/text/remove-anchor.js
init_esm_shims();
function removeAnchor(url) {
  return url.split("#")[0].replace(/\/$/, "");
}

// src/utils/text/article-base-url.js
init_esm_shims();
import URL3 from "url";
function isGoodSegment(segment, index, firstSegmentHasLetters) {
  let goodSegment = true;
  if (index < 2 && IS_DIGIT_RE.test(segment) && segment.length < 3) {
    goodSegment = true;
  }
  if (index === 0 && segment.toLowerCase() === "index") {
    goodSegment = false;
  }
  if (index < 2 && segment.length < 3 && !firstSegmentHasLetters) {
    goodSegment = false;
  }
  return goodSegment;
}
function articleBaseUrl(url, parsed) {
  const parsedUrl = parsed || URL3.parse(url);
  const { protocol, host, path } = parsedUrl;
  let firstSegmentHasLetters = false;
  const cleanedSegments = path.split("/").reverse().reduce((acc, rawSegment, index) => {
    let segment = rawSegment;
    if (segment.includes(".")) {
      const [possibleSegment, fileExt] = segment.split(".");
      if (IS_ALPHA_RE.test(fileExt)) {
        segment = possibleSegment;
      }
    }
    if (PAGE_IN_HREF_RE.test(segment) && index < 2) {
      segment = segment.replace(PAGE_IN_HREF_RE, "");
    }
    if (index === 0) {
      firstSegmentHasLetters = HAS_ALPHA_RE.test(segment);
    }
    if (isGoodSegment(segment, index, firstSegmentHasLetters)) {
      acc.push(segment);
    }
    return acc;
  }, []);
  return `${protocol}//${host}${cleanedSegments.reverse().join("/")}`;
}

// src/utils/text/has-sentence-end.js
init_esm_shims();
var SENTENCE_END_RE = new RegExp(".( |$)");
function hasSentenceEnd(text) {
  return SENTENCE_END_RE.test(text);
}

// src/utils/text/excerpt-content.js
init_esm_shims();
function excerptContent(content, words = 10) {
  return content.trim().split(/\s+/).slice(0, words).join(" ");
}

// src/utils/text/get-encoding.js
init_esm_shims();
import iconv from "iconv-lite";
function getEncoding(str) {
  let encoding = DEFAULT_ENCODING;
  const matches = ENCODING_RE.exec(str);
  if (matches !== null) {
    [, str] = matches;
  }
  if (iconv.encodingExists(str)) {
    encoding = str;
  }
  return encoding;
}

// src/extractors/generic/content/scoring/merge-siblings.js
function mergeSiblings($candidate, topScore, $) {
  if (!$candidate.parent().length) {
    return $candidate;
  }
  const siblingScoreThreshold = Math.max(10, topScore * 0.25);
  const wrappingDiv = $("<div></div>");
  $candidate.parent().children().each((index, sibling) => {
    const $sibling = $(sibling);
    if (NON_TOP_CANDIDATE_TAGS_RE2.test(sibling.tagName)) {
      return null;
    }
    const siblingScore = getScore($sibling);
    if (siblingScore) {
      if ($sibling.get(0) === $candidate.get(0)) {
        wrappingDiv.append($sibling);
      } else {
        let contentBonus = 0;
        const density = linkDensity($sibling);
        if (density < 0.05) {
          contentBonus += 20;
        }
        if (density >= 0.5) {
          contentBonus -= 20;
        }
        if ($sibling.attr("class") === $candidate.attr("class")) {
          contentBonus += topScore * 0.2;
        }
        const newScore = siblingScore + contentBonus;
        if (newScore >= siblingScoreThreshold) {
          return wrappingDiv.append($sibling);
        }
        if (sibling.tagName === "p") {
          const siblingContent = $sibling.text();
          const siblingContentLength = textLength(siblingContent);
          if (siblingContentLength > 80 && density < 0.25) {
            return wrappingDiv.append($sibling);
          }
          if (siblingContentLength <= 80 && density === 0 && hasSentenceEnd(siblingContent)) {
            return wrappingDiv.append($sibling);
          }
        }
      }
    }
    return null;
  });
  if (wrappingDiv.children().length === 1 && wrappingDiv.children().first().get(0) === $candidate.get(0)) {
    return $candidate;
  }
  return wrappingDiv;
}

// src/extractors/generic/content/scoring/find-top-candidate.js
function findTopCandidate($) {
  let $candidate;
  let topScore = 0;
  $("[score]").each((index, node) => {
    if (NON_TOP_CANDIDATE_TAGS_RE2.test(node.tagName)) {
      return;
    }
    const $node = $(node);
    const score = getScore($node);
    if (score > topScore) {
      topScore = score;
      $candidate = $node;
    }
  });
  if (!$candidate) {
    return $("body") || $("*").first();
  }
  $candidate = mergeSiblings($candidate, topScore, $);
  return $candidate;
}

// src/utils/dom/clean-tags.js
function removeUnlessContent($node, $, weight) {
  if ($node.hasClass("entry-content-asset")) {
    return;
  }
  const content = normalizeSpaces($node.text());
  if (scoreCommas(content) < 10) {
    const pCount = $("p", $node).length;
    const inputCount = $("input", $node).length;
    if (inputCount > pCount / 3) {
      $node.remove();
      return;
    }
    const contentLength = content.length;
    const imgCount = $("img", $node).length;
    if (contentLength < 25 && imgCount === 0) {
      $node.remove();
      return;
    }
    const density = linkDensity($node);
    if (weight < 25 && density > 0.2 && contentLength > 75) {
      $node.remove();
      return;
    }
    if (weight >= 25 && density > 0.5) {
      const tagName = $node.get(0).tagName.toLowerCase();
      const nodeIsList = tagName === "ol" || tagName === "ul";
      if (nodeIsList) {
        const previousNode = $node.prev();
        if (previousNode && normalizeSpaces(previousNode.text()).slice(-1) === ":") {
          return;
        }
      }
      $node.remove();
      return;
    }
    const scriptCount = $("script", $node).length;
    if (scriptCount > 0 && contentLength < 150) {
      $node.remove();
    }
  }
}
function cleanTags($article, $) {
  $(CLEAN_CONDITIONALLY_TAGS, $article).each((index, node) => {
    const $node = $(node);
    if ($node.hasClass(KEEP_CLASS) || $node.find(`.${KEEP_CLASS}`).length > 0)
      return;
    let weight = getScore($node);
    if (!weight) {
      weight = getOrInitScore($node, $);
      setScore($node, $, weight);
    }
    if (weight < 0) {
      $node.remove();
    } else {
      removeUnlessContent($node, $, weight);
    }
  });
  return $;
}

// src/utils/dom/clean-headers.js
init_esm_shims();
function cleanHeaders($article, $, title = "") {
  $(HEADER_TAG_LIST, $article).each((index, header) => {
    const $header = $(header);
    if ($($header, $article).prevAll("p").length === 0) {
      return $header.remove();
    }
    if (normalizeSpaces($(header).text()) === title) {
      return $header.remove();
    }
    if (getWeight($(header)) < 0) {
      return $header.remove();
    }
    return $header;
  });
  return $;
}

// src/utils/dom/rewrite-top-level.js
init_esm_shims();
function rewriteTopLevel(article, $) {
  $ = convertNodeTo($("html"), $, "div");
  $ = convertNodeTo($("body"), $, "div");
  return $;
}

// src/utils/dom/make-links-absolute.js
init_esm_shims();
import URL4 from "url";
function absolutize($, rootUrl, attr) {
  const baseUrl = $("base").attr("href");
  $(`[${attr}]`).each((_, node) => {
    const attrs = getAttrs(node);
    const url = attrs[attr];
    if (!url) return;
    const absoluteUrl = URL4.resolve(baseUrl || rootUrl, url);
    setAttr(node, attr, absoluteUrl);
  });
}
function absolutizeSet($, rootUrl, $content) {
  $("[srcset]", $content).each((_, node) => {
    const attrs = getAttrs(node);
    const urlSet = attrs.srcset;
    if (urlSet) {
      const candidates = urlSet.match(
        /(?:\s*)(\S+(?:\s*[\d.]+[wx])?)(?:\s*,\s*)?/g
      );
      if (!candidates) return;
      const absoluteCandidates = candidates.map((candidate) => {
        const parts = candidate.trim().replace(/,$/, "").split(/\s+/);
        parts[0] = URL4.resolve(rootUrl, parts[0]);
        return parts.join(" ");
      });
      const absoluteUrlSet = [...new Set(absoluteCandidates)].join(", ");
      setAttr(node, "srcset", absoluteUrlSet);
    }
  });
}
function makeLinksAbsolute($content, $, url) {
  ["href", "src"].forEach((attr) => absolutize($, url, attr));
  absolutizeSet($, url, $content);
  return $content;
}

// src/utils/dom/link-density.js
init_esm_shims();
function textLength(text) {
  return text.trim().replace(/\s+/g, " ").length;
}
function linkDensity($node) {
  const totalTextLength = textLength($node.text());
  const linkText = $node.find("a").text();
  const linkLength = textLength(linkText);
  if (totalTextLength > 0) {
    return linkLength / totalTextLength;
  }
  if (totalTextLength === 0 && linkLength > 0) {
    return 1;
  }
  return 0;
}

// src/utils/dom/extract-from-meta.js
init_esm_shims();
function extractFromMeta($, metaNames, cachedNames, cleanTags2 = true) {
  const foundNames = metaNames.filter((name) => cachedNames.indexOf(name) !== -1);
  for (const name of foundNames) {
    const type = "name";
    const value = "value";
    const nodes = $(`meta[${type}="${name}"]`);
    const values = nodes.map((index, node) => $(node).attr(value)).toArray().filter((text) => text !== "");
    if (values.length === 1) {
      let metaValue;
      if (cleanTags2) {
        metaValue = stripTags(values[0], $);
      } else {
        [metaValue] = values;
      }
      return metaValue;
    }
  }
  return null;
}

// src/utils/dom/extract-from-selectors.js
init_esm_shims();
function isGoodNode($node, maxChildren) {
  if ($node.children().length > maxChildren) {
    return false;
  }
  if (withinComment($node)) {
    return false;
  }
  return true;
}
function extractFromSelectors($, selectors, maxChildren = 1, textOnly = true) {
  for (const selector of selectors) {
    const nodes = $(selector);
    if (nodes.length === 1) {
      const $node = $(nodes[0]);
      if (isGoodNode($node, maxChildren)) {
        let content;
        if (textOnly) {
          content = $node.text();
        } else {
          content = $node.html();
        }
        if (content) {
          return content;
        }
      }
    }
  }
  return null;
}

// src/utils/dom/strip-tags.js
init_esm_shims();
function stripTags(text, $) {
  const cleanText = $(`<span>${text}</span>`).text();
  return cleanText === "" ? text : cleanText;
}

// src/utils/dom/within-comment.js
init_esm_shims();
function withinComment($node) {
  const parents = $node.parents().toArray();
  const commentParent = parents.find((parent) => {
    const attrs = getAttrs(parent);
    const { class: nodeClass, id } = attrs;
    const classAndId = `${nodeClass} ${id}`;
    return classAndId.includes("comment");
  });
  return commentParent !== void 0;
}

// src/utils/dom/node-is-sufficient.js
init_esm_shims();
function nodeIsSufficient($node) {
  return $node.text().trim().length >= 100;
}

// src/utils/dom/is-wordpress.js
init_esm_shims();
function isWordpress($) {
  return $(IS_WP_SELECTOR).length > 0;
}

// src/utils/dom/get-attrs.js
init_esm_shims();
function getAttrs(node) {
  const { attribs, attributes } = node;
  if (!attribs && attributes) {
    const attrs = Reflect.ownKeys(attributes).reduce((acc, index) => {
      const attr = attributes[index];
      if (!attr.name || !attr.value) return acc;
      acc[attr.name] = attr.value;
      return acc;
    }, {});
    return attrs;
  }
  return attribs;
}

// src/utils/dom/set-attr.js
init_esm_shims();
function setAttr(node, attr, val) {
  if (node.attribs) {
    node.attribs[attr] = val;
  } else if (node.attributes) {
    node.setAttribute(attr, val);
  }
  return node;
}

// src/utils/dom/set-attrs.js
init_esm_shims();
function setAttrs(node, attrs) {
  if (node.attribs) {
    node.attribs = attrs;
  } else if (node.attributes) {
    while (node.attributes.length > 0) {
      node.removeAttribute(node.attributes[0].name);
    }
    Reflect.ownKeys(attrs).forEach((key) => {
      node.setAttribute(key, attrs[key]);
    });
  }
  return node;
}

// src/cleaners/index.js
init_esm_shims();

// src/cleaners/author.js
init_esm_shims();

// src/cleaners/constants.js
init_esm_shims();
var CLEAN_AUTHOR_RE = /^\s*(posted |written )?by\s*:?\s*(.*)/i;
var TEXT_LINK_RE = new RegExp("http(s)?://", "i");
var MS_DATE_STRING = /^\d{13}$/i;
var SEC_DATE_STRING = /^\d{10}$/i;
var CLEAN_DATE_STRING_RE = /^\s*published\s*:?\s*(.*)/i;
var TIME_MERIDIAN_SPACE_RE = /(.*\d)(am|pm)(.*)/i;
var TIME_MERIDIAN_DOTS_RE = /\.m\./i;
var TIME_NOW_STRING = /^\s*(just|right)?\s*now\s*/i;
var timeUnits = [
  "seconds?",
  "minutes?",
  "hours?",
  "days?",
  "weeks?",
  "months?",
  "years?"
];
var allTimeUnits = timeUnits.join("|");
var TIME_AGO_STRING = new RegExp(
  `(\\d+)\\s+(${allTimeUnits})\\s+ago`,
  "i"
);
var months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec"
];
var allMonths = months.join("|");
var timestamp1 = "[0-9]{1,2}:[0-9]{2,2}( ?[ap].?m.?)?";
var timestamp2 = "[0-9]{1,2}[/-][0-9]{1,2}[/-][0-9]{2,4}";
var timestamp3 = "-[0-9]{3,4}$";
var SPLIT_DATE_STRING = new RegExp(
  `(${timestamp1})|(${timestamp2})|(${timestamp3})|([0-9]{1,4})|(${allMonths})`,
  "ig"
);
var TIME_WITH_OFFSET_RE = /-\d{3,4}$/;
var TITLE_SPLITTERS_RE = /(: | - | \| )/g;
var DOMAIN_ENDINGS_RE = new RegExp(".com$|.net$|.org$|.co.uk$", "g");

// src/cleaners/author.js
function cleanAuthor(author) {
  return normalizeSpaces(author.replace(CLEAN_AUTHOR_RE, "$2").trim());
}

// src/cleaners/lead-image-url.js
init_esm_shims();
import validUrl from "valid-url";
function clean(leadImageUrl) {
  leadImageUrl = leadImageUrl.trim();
  if (validUrl.isWebUri(leadImageUrl)) {
    return leadImageUrl;
  }
  return null;
}

// src/cleaners/dek.js
init_esm_shims();
function cleanDek(dek, { $, excerpt }) {
  if (dek.length > 1e3 || dek.length < 5) return null;
  if (excerpt && excerptContent(excerpt, 10) === excerptContent(dek, 10))
    return null;
  const dekText = stripTags(dek, $);
  if (TEXT_LINK_RE.test(dekText)) return null;
  return normalizeSpaces(dekText.trim());
}

// src/cleaners/date-published.js
init_esm_shims();
import moment from "moment-timezone";
import parseFormat from "moment-parseformat";
function cleanDateString(dateString) {
  return (dateString.match(SPLIT_DATE_STRING) || []).join(" ").replace(TIME_MERIDIAN_DOTS_RE, "m").replace(TIME_MERIDIAN_SPACE_RE, "$1 $2 $3").replace(CLEAN_DATE_STRING_RE, "$1").trim();
}
function createDate(dateString, timezone, format) {
  if (TIME_WITH_OFFSET_RE.test(dateString)) {
    return moment(new Date(dateString));
  }
  if (TIME_AGO_STRING.test(dateString)) {
    const fragments = TIME_AGO_STRING.exec(dateString);
    return moment().subtract(fragments[1], fragments[2]);
  }
  if (TIME_NOW_STRING.test(dateString)) {
    return moment();
  }
  return timezone ? moment.tz(dateString, format || parseFormat(dateString), timezone) : moment(dateString, format || parseFormat(dateString));
}
function cleanDatePublished(dateString, { timezone, format } = {}) {
  if (MS_DATE_STRING.test(dateString)) {
    return new Date(parseInt(dateString, 10)).toISOString();
  }
  if (SEC_DATE_STRING.test(dateString)) {
    return new Date(parseInt(dateString, 10) * 1e3).toISOString();
  }
  let date = createDate(dateString, timezone, format);
  if (!date.isValid()) {
    dateString = cleanDateString(dateString);
    date = createDate(dateString, timezone, format);
  }
  return date.isValid() ? date.toISOString() : null;
}

// src/cleaners/content.js
init_esm_shims();
function extractCleanNode(article, { $, cleanConditionally = true, title = "", url = "", defaultCleaner = true }) {
  rewriteTopLevel(article, $);
  if (defaultCleaner) cleanImages(article, $);
  makeLinksAbsolute(article, $, url);
  markToKeep(article, $, url);
  stripJunkTags(article, $);
  cleanHOnes(article, $);
  cleanHeaders(article, $, title);
  if (defaultCleaner) cleanTags(article, $, cleanConditionally);
  removeEmpty(article, $);
  cleanAttributes(article, $);
  return article;
}

// src/cleaners/title.js
init_esm_shims();
function cleanTitle(title, { url, $ }) {
  if (TITLE_SPLITTERS_RE.test(title)) {
    title = resolveSplitTitle(title, url);
  }
  if (title.length > 150) {
    const h1 = $("h1");
    if (h1.length === 1) {
      title = h1.text();
    }
  }
  return normalizeSpaces(stripTags(title, $).trim());
}

// src/cleaners/resolve-split-title.js
init_esm_shims();
import URL5 from "url";
import wuzzy from "wuzzy";
function extractBreadcrumbTitle(splitTitle, text) {
  if (splitTitle.length >= 6) {
    const termCounts = splitTitle.reduce((acc, titleText) => {
      acc[titleText] = acc[titleText] ? acc[titleText] + 1 : 1;
      return acc;
    }, {});
    const [maxTerm, termCount] = Reflect.ownKeys(termCounts).reduce(
      (acc, key) => {
        if (acc[1] < termCounts[key]) {
          return [key, termCounts[key]];
        }
        return acc;
      },
      [0, 0]
    );
    if (termCount >= 2 && maxTerm.length <= 4) {
      splitTitle = text.split(maxTerm);
    }
    const splitEnds = [splitTitle[0], splitTitle.slice(-1)];
    const longestEnd = splitEnds.reduce(
      (acc, end) => acc.length > end.length ? acc : end,
      ""
    );
    if (longestEnd.length > 10) {
      return longestEnd;
    }
    return text;
  }
  return null;
}
function cleanDomainFromTitle(splitTitle, url) {
  const { host } = URL5.parse(url);
  const nakedDomain = host.replace(DOMAIN_ENDINGS_RE, "");
  const startSlug = splitTitle[0].toLowerCase().replace(" ", "");
  const startSlugRatio = wuzzy.levenshtein(startSlug, nakedDomain);
  if (startSlugRatio > 0.4 && startSlug.length > 5) {
    return splitTitle.slice(2).join("");
  }
  const endSlug = splitTitle.slice(-1)[0].toLowerCase().replace(" ", "");
  const endSlugRatio = wuzzy.levenshtein(endSlug, nakedDomain);
  if (endSlugRatio > 0.4 && endSlug.length >= 5) {
    return splitTitle.slice(0, -2).join("");
  }
  return null;
}
function resolveSplitTitle(title, url = "") {
  const splitTitle = title.split(TITLE_SPLITTERS_RE);
  if (splitTitle.length === 1) {
    return title;
  }
  let newTitle = extractBreadcrumbTitle(splitTitle, title);
  if (newTitle) return newTitle;
  newTitle = cleanDomainFromTitle(splitTitle, url);
  if (newTitle) return newTitle;
  return title;
}

// src/cleaners/index.js
var Cleaners = {
  author: cleanAuthor,
  lead_image_url: clean,
  dek: cleanDek,
  date_published: cleanDatePublished,
  content: extractCleanNode,
  title: cleanTitle
};
var cleaners_default = Cleaners;

// src/extractors/generic/content/extract-best-node.js
init_esm_shims();
function extractBestNode($, opts) {
  if (opts.stripUnlikelyCandidates) {
    $ = stripUnlikelyCandidates($);
  }
  $ = convertToParagraphs($);
  $ = scoreContent($, opts.weightNodes);
  const $topCandidate = findTopCandidate($);
  return $topCandidate;
}

// src/extractors/generic/content/extractor.js
var GenericContentExtractor = {
  defaultOpts: {
    stripUnlikelyCandidates: true,
    weightNodes: true,
    cleanConditionally: true
  },
  // Extract the content for this resource - initially, pass in our
  // most restrictive opts which will return the highest quality
  // content. On each failure, retry with slightly more lax opts.
  //
  // :param return_type: string. If "node", should return the content
  // as a cheerio node rather than as an HTML string.
  //
  // Opts:
  // stripUnlikelyCandidates: Remove any elements that match
  // non-article-like criteria first.(Like, does this element
  //   have a classname of "comment")
  //
  // weightNodes: Modify an elements score based on whether it has
  // certain classNames or IDs. Examples: Subtract if a node has
  // a className of 'comment', Add if a node has an ID of
  // 'entry-content'.
  //
  // cleanConditionally: Clean the node to return of some
  // superfluous content. Things like forms, ads, etc.
  extract({ $, html, title, url }, opts) {
    opts = { ...this.defaultOpts, ...opts };
    $ = $ || cheerio.load(html);
    let node = this.getContentNode($, title, url, opts);
    if (nodeIsSufficient(node)) {
      return this.cleanAndReturnNode(node, $);
    }
    for (const key of Reflect.ownKeys(opts).filter((k) => opts[k] === true)) {
      opts[key] = false;
      $ = cheerio.load(html);
      node = this.getContentNode($, title, url, opts);
      if (nodeIsSufficient(node)) {
        break;
      }
    }
    return this.cleanAndReturnNode(node, $);
  },
  // Get node given current options
  getContentNode($, title, url, opts) {
    return extractCleanNode(extractBestNode($, opts), {
      $,
      cleanConditionally: opts.cleanConditionally,
      title,
      url
    });
  },
  // Once we got here, either we're at our last-resort node, or
  // we broke early. Make sure we at least have -something- before we
  // move forward.
  cleanAndReturnNode(node, $) {
    if (!node) {
      return null;
    }
    return normalizeSpaces($.html(node));
  }
};
var extractor_default = GenericContentExtractor;

// src/extractors/generic/title/extractor.js
init_esm_shims();

// src/extractors/generic/title/constants.js
init_esm_shims();
var STRONG_TITLE_META_TAGS = [
  "tweetmeme-title",
  "dc.title",
  "rbtitle",
  "headline",
  "title"
];
var WEAK_TITLE_META_TAGS = ["og:title"];
var STRONG_TITLE_SELECTORS = [
  ".hentry .entry-title",
  "h1#articleHeader",
  "h1.articleHeader",
  "h1.article",
  ".instapaper_title",
  "#meebo-title"
];
var WEAK_TITLE_SELECTORS = [
  "article h1",
  "#entry-title",
  ".entry-title",
  "#entryTitle",
  "#entrytitle",
  ".entryTitle",
  ".entrytitle",
  "#articleTitle",
  ".articleTitle",
  "post post-title",
  "h1.title",
  "h2.article",
  "h1",
  "html head title",
  "title"
];

// src/extractors/generic/title/extractor.js
var GenericTitleExtractor = {
  extract({ $, url, metaCache }) {
    let title;
    title = extractFromMeta($, STRONG_TITLE_META_TAGS, metaCache);
    if (title) return cleanTitle(title, { url, $ });
    title = extractFromSelectors($, STRONG_TITLE_SELECTORS);
    if (title) return cleanTitle(title, { url, $ });
    title = extractFromMeta($, WEAK_TITLE_META_TAGS, metaCache);
    if (title) return cleanTitle(title, { url, $ });
    title = extractFromSelectors($, WEAK_TITLE_SELECTORS);
    if (title) return cleanTitle(title, { url, $ });
    return "";
  }
};
var extractor_default2 = GenericTitleExtractor;

// src/extractors/generic/author/extractor.js
init_esm_shims();

// src/extractors/generic/author/constants.js
init_esm_shims();
var AUTHOR_META_TAGS = [
  "byl",
  "clmst",
  "dc.author",
  "dcsext.author",
  "dc.creator",
  "rbauthors",
  "authors"
];
var AUTHOR_MAX_LENGTH = 300;
var AUTHOR_SELECTORS = [
  ".entry .entry-author",
  ".author.vcard .fn",
  ".author .vcard .fn",
  ".byline.vcard .fn",
  ".byline .vcard .fn",
  ".byline .by .author",
  ".byline .by",
  ".byline .author",
  ".post-author.vcard",
  ".post-author .vcard",
  "a[rel=author]",
  "#by_author",
  ".by_author",
  "#entryAuthor",
  ".entryAuthor",
  ".byline a[href*=author]",
  "#author .authorname",
  ".author .authorname",
  "#author",
  ".author",
  ".articleauthor",
  ".ArticleAuthor",
  ".byline"
];
var bylineRe = /^[\n\s]*By/i;
var BYLINE_SELECTORS_RE = [
  ["#byline", bylineRe],
  [".byline", bylineRe]
];

// src/extractors/generic/author/extractor.js
var GenericAuthorExtractor = {
  extract({ $, metaCache }) {
    let author;
    author = extractFromMeta($, AUTHOR_META_TAGS, metaCache);
    if (author && author.length < AUTHOR_MAX_LENGTH) {
      return cleanAuthor(author);
    }
    author = extractFromSelectors($, AUTHOR_SELECTORS, 2);
    if (author && author.length < AUTHOR_MAX_LENGTH) {
      return cleanAuthor(author);
    }
    for (const [selector, regex] of BYLINE_SELECTORS_RE) {
      const node = $(selector);
      if (node.length === 1) {
        const text = node.text();
        if (regex.test(text)) {
          return cleanAuthor(text);
        }
      }
    }
    return null;
  }
};
var extractor_default3 = GenericAuthorExtractor;

// src/extractors/generic/date-published/extractor.js
init_esm_shims();

// src/extractors/generic/date-published/constants.js
init_esm_shims();
var DATE_PUBLISHED_META_TAGS = [
  "article:published_time",
  "displaydate",
  "dc.date",
  "dc.date.issued",
  "rbpubdate",
  "publish_date",
  "pub_date",
  "pagedate",
  "pubdate",
  "revision_date",
  "doc_date",
  "date_created",
  "content_create_date",
  "lastmodified",
  "created",
  "date"
];
var DATE_PUBLISHED_SELECTORS = [
  ".hentry .dtstamp.published",
  ".hentry .published",
  ".hentry .dtstamp.updated",
  ".hentry .updated",
  ".single .published",
  ".meta .published",
  ".meta .postDate",
  ".entry-date",
  ".byline .date",
  ".postmetadata .date",
  ".article_datetime",
  ".date-header",
  ".story-date",
  ".dateStamp",
  "#story .datetime",
  ".dateline",
  ".pubdate"
];
var abbrevMonthsStr = "(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)";
var DATE_PUBLISHED_URL_RES = [
  new RegExp("/(20\\d{2}/\\d{2}/\\d{2})/", "i"),
  new RegExp("(20\\d{2}-[01]\\d-[0-3]\\d)", "i"),
  new RegExp(`/(20\\d{2}/${abbrevMonthsStr}/[0-3]\\d)/`, "i")
];

// src/extractors/generic/date-published/extractor.js
var GenericDatePublishedExtractor = {
  extract({ $, url, metaCache }) {
    let datePublished;
    datePublished = extractFromMeta(
      $,
      DATE_PUBLISHED_META_TAGS,
      metaCache,
      false
    );
    if (datePublished) return cleanDatePublished(datePublished);
    datePublished = extractFromSelectors($, DATE_PUBLISHED_SELECTORS);
    if (datePublished) return cleanDatePublished(datePublished);
    datePublished = extractFromUrl(url, DATE_PUBLISHED_URL_RES);
    if (datePublished) return cleanDatePublished(datePublished);
    return null;
  }
};
var extractor_default4 = GenericDatePublishedExtractor;

// src/extractors/generic/dek/extractor.js
init_esm_shims();
var GenericDekExtractor = {
  extract() {
    return null;
  }
};
var extractor_default5 = GenericDekExtractor;

// src/extractors/generic/lead-image-url/extractor.js
init_esm_shims();

// src/extractors/generic/lead-image-url/constants.js
init_esm_shims();
var LEAD_IMAGE_URL_META_TAGS = [
  "og:image",
  "twitter:image",
  "image_src"
];
var LEAD_IMAGE_URL_SELECTORS = ["link[rel=image_src]"];
var POSITIVE_LEAD_IMAGE_URL_HINTS = [
  "upload",
  "wp-content",
  "large",
  "photo",
  "wp-image"
];
var POSITIVE_LEAD_IMAGE_URL_HINTS_RE = new RegExp(
  POSITIVE_LEAD_IMAGE_URL_HINTS.join("|"),
  "i"
);
var NEGATIVE_LEAD_IMAGE_URL_HINTS = [
  "spacer",
  "sprite",
  "blank",
  "throbber",
  "gradient",
  "tile",
  "bg",
  "background",
  "icon",
  "social",
  "header",
  "hdr",
  "advert",
  "spinner",
  "loader",
  "loading",
  "default",
  "rating",
  "share",
  "facebook",
  "twitter",
  "theme",
  "promo",
  "ads",
  "wp-includes"
];
var NEGATIVE_LEAD_IMAGE_URL_HINTS_RE = new RegExp(
  NEGATIVE_LEAD_IMAGE_URL_HINTS.join("|"),
  "i"
);
var GIF_RE = /\.gif(\?.*)?$/i;
var JPG_RE = /\.jpe?g(\?.*)?$/i;

// src/extractors/generic/lead-image-url/score-image.js
init_esm_shims();
function getSig($node) {
  return `${$node.attr("class") || ""} ${$node.attr("id") || ""}`;
}
function scoreImageUrl(url) {
  url = url.trim();
  let score = 0;
  if (POSITIVE_LEAD_IMAGE_URL_HINTS_RE.test(url)) {
    score += 20;
  }
  if (NEGATIVE_LEAD_IMAGE_URL_HINTS_RE.test(url)) {
    score -= 20;
  }
  if (GIF_RE.test(url)) {
    score -= 10;
  }
  if (JPG_RE.test(url)) {
    score += 10;
  }
  return score;
}
function scoreAttr($img) {
  if ($img.attr("alt")) {
    return 5;
  }
  return 0;
}
function scoreByParents($img) {
  let score = 0;
  const $figParent = $img.parents("figure").first();
  if ($figParent.length === 1) {
    score += 25;
  }
  const $parent = $img.parent();
  let $gParent;
  if ($parent.length === 1) {
    $gParent = $parent.parent();
  }
  [$parent, $gParent].forEach(($node) => {
    if (PHOTO_HINTS_RE2.test(getSig($node))) {
      score += 15;
    }
  });
  return score;
}
function scoreBySibling($img) {
  let score = 0;
  const $sibling = $img.next();
  const sibling = $sibling.get(0);
  if (sibling && sibling.tagName.toLowerCase() === "figcaption") {
    score += 25;
  }
  if (PHOTO_HINTS_RE2.test(getSig($sibling))) {
    score += 15;
  }
  return score;
}
function scoreByDimensions($img) {
  let score = 0;
  const width = parseFloat($img.attr("width"));
  const height = parseFloat($img.attr("height"));
  const src = $img.attr("src");
  if (width && width <= 50) {
    score -= 50;
  }
  if (height && height <= 50) {
    score -= 50;
  }
  if (width && height && !src.includes("sprite")) {
    const area = width * height;
    if (area < 5e3) {
      score -= 100;
    } else {
      score += Math.round(area / 1e3);
    }
  }
  return score;
}
function scoreByPosition($imgs, index) {
  return $imgs.length / 2 - index;
}

// src/extractors/generic/lead-image-url/extractor.js
var GenericLeadImageUrlExtractor = {
  extract({ $, content, metaCache, html }) {
    let cleanUrl;
    if (!$.browser && $("head").length === 0) {
      $("*").first().prepend(html);
    }
    const imageUrl = extractFromMeta(
      $,
      LEAD_IMAGE_URL_META_TAGS,
      metaCache,
      false
    );
    if (imageUrl) {
      cleanUrl = clean(imageUrl);
      if (cleanUrl) return cleanUrl;
    }
    const $content = $(content);
    const imgs = $("img", $content).toArray();
    const imgScores = {};
    imgs.forEach((img, index) => {
      const $img = $(img);
      const src = $img.attr("src");
      if (!src) return;
      let score = scoreImageUrl(src);
      score += scoreAttr($img);
      score += scoreByParents($img);
      score += scoreBySibling($img);
      score += scoreByDimensions($img);
      score += scoreByPosition(imgs, index);
      imgScores[src] = score;
    });
    const [topUrl, topScore] = Reflect.ownKeys(imgScores).reduce(
      (acc, key) => imgScores[key] > acc[1] ? [key, imgScores[key]] : acc,
      [null, 0]
    );
    if (topScore > 0) {
      cleanUrl = clean(topUrl);
      if (cleanUrl) return cleanUrl;
    }
    for (const selector of LEAD_IMAGE_URL_SELECTORS) {
      const $node = $(selector).first();
      const src = $node.attr("src");
      if (src) {
        cleanUrl = clean(src);
        if (cleanUrl) return cleanUrl;
      }
      const href = $node.attr("href");
      if (href) {
        cleanUrl = clean(href);
        if (cleanUrl) return cleanUrl;
      }
      const value = $node.attr("value");
      if (value) {
        cleanUrl = clean(value);
        if (cleanUrl) return cleanUrl;
      }
    }
    return null;
  }
};
var extractor_default6 = GenericLeadImageUrlExtractor;

// src/extractors/generic/next-page-url/extractor.js
init_esm_shims();
import URL8 from "url";

// src/extractors/generic/next-page-url/scoring/score-links.js
init_esm_shims();
import URL7 from "url";

// src/extractors/generic/next-page-url/scoring/utils/index.js
init_esm_shims();

// src/extractors/generic/next-page-url/scoring/utils/score-similarity.js
init_esm_shims();
var import_difflib = __toESM(require_difflib2());
function scoreSimilarity(score, articleUrl, href) {
  if (score > 0) {
    const similarity = new import_difflib.default.SequenceMatcher(
      null,
      articleUrl,
      href
    ).ratio();
    const diffPercent = 1 - similarity;
    const diffModifier = -(250 * (diffPercent - 0.2));
    return score + diffModifier;
  }
  return 0;
}

// src/extractors/generic/next-page-url/scoring/utils/score-link-text.js
init_esm_shims();
function scoreLinkText(linkText, pageNum) {
  let score = 0;
  if (IS_DIGIT_RE.test(linkText.trim())) {
    const linkTextAsNum = parseInt(linkText, 10);
    if (linkTextAsNum < 2) {
      score = -30;
    } else {
      score = Math.max(0, 10 - linkTextAsNum);
    }
    if (pageNum && pageNum >= linkTextAsNum) {
      score -= 50;
    }
  }
  return score;
}

// src/extractors/generic/next-page-url/scoring/utils/score-page-in-link.js
init_esm_shims();
function scorePageInLink(pageNum, isWp) {
  if (pageNum && !isWp) {
    return 50;
  }
  return 0;
}

// src/extractors/generic/next-page-url/scoring/utils/score-extraneous-links.js
init_esm_shims();

// src/extractors/generic/next-page-url/scoring/constants.js
init_esm_shims();
var DIGIT_RE3 = /\d/;
var EXTRANEOUS_LINK_HINTS2 = [
  "print",
  "archive",
  "comment",
  "discuss",
  "e-mail",
  "email",
  "share",
  "reply",
  "all",
  "login",
  "sign",
  "single",
  "adx",
  "entry-unrelated"
];
var EXTRANEOUS_LINK_HINTS_RE2 = new RegExp(
  EXTRANEOUS_LINK_HINTS2.join("|"),
  "i"
);
var NEXT_LINK_TEXT_RE = new RegExp(
  "(next|weiter|continue|>([^|]|$)|»([^|]|$))",
  "i"
);
var CAP_LINK_TEXT_RE2 = new RegExp("(first|last|end)", "i");
var PREV_LINK_TEXT_RE2 = new RegExp("(prev|earl|old|new|<|«)", "i");
var PAGE_RE2 = new RegExp("pag(e|ing|inat)", "i");

// src/extractors/generic/next-page-url/scoring/utils/score-extraneous-links.js
function scoreExtraneousLinks(href) {
  if (EXTRANEOUS_LINK_HINTS_RE2.test(href)) {
    return -25;
  }
  return 0;
}

// src/extractors/generic/next-page-url/scoring/utils/score-by-parents.js
init_esm_shims();

// src/utils/index.js
init_esm_shims();

// src/utils/range.js
init_esm_shims();
function* range(start = 1, end = 1) {
  while (start <= end) {
    yield start += 1;
  }
}

// src/utils/validate-url.js
init_esm_shims();
function validateUrl({ hostname }) {
  return !!hostname;
}

// src/extractors/generic/next-page-url/scoring/utils/score-by-parents.js
function makeSig($link) {
  return `${$link.attr("class") || ""} ${$link.attr("id") || ""}`;
}
function scoreByParents2($link) {
  let $parent = $link.parent();
  let positiveMatch = false;
  let negativeMatch = false;
  let score = 0;
  Array.from(range(0, 4)).forEach(() => {
    if ($parent.length === 0) {
      return;
    }
    const parentData = makeSig($parent, " ");
    if (!positiveMatch && PAGE_RE.test(parentData)) {
      positiveMatch = true;
      score += 25;
    }
    if (!negativeMatch && NEGATIVE_SCORE_RE.test(parentData) && EXTRANEOUS_LINK_HINTS_RE2.test(parentData)) {
      if (!POSITIVE_SCORE_RE.test(parentData)) {
        negativeMatch = true;
        score -= 25;
      }
    }
    $parent = $parent.parent();
  });
  return score;
}

// src/extractors/generic/next-page-url/scoring/utils/score-prev-link.js
init_esm_shims();
function scorePrevLink(linkData) {
  if (PREV_LINK_TEXT_RE2.test(linkData)) {
    return -200;
  }
  return 0;
}

// src/extractors/generic/next-page-url/scoring/utils/should-score.js
init_esm_shims();
import URL6 from "url";
function shouldScore(href, articleUrl, baseUrl, parsedUrl, linkText, previousUrls) {
  if (previousUrls.find((url) => href === url) !== void 0) {
    return false;
  }
  if (!href || href === articleUrl || href === baseUrl) {
    return false;
  }
  const { hostname } = parsedUrl;
  const { hostname: linkHost } = URL6.parse(href);
  if (linkHost !== hostname) {
    return false;
  }
  const fragment = href.replace(baseUrl, "");
  if (!DIGIT_RE3.test(fragment)) {
    return false;
  }
  if (EXTRANEOUS_LINK_HINTS_RE2.test(linkText)) {
    return false;
  }
  if (linkText.length > 25) {
    return false;
  }
  return true;
}

// src/extractors/generic/next-page-url/scoring/utils/score-base-url.js
init_esm_shims();
function scoreBaseUrl(href, baseRegex) {
  if (!baseRegex.test(href)) {
    return -25;
  }
  return 0;
}

// src/extractors/generic/next-page-url/scoring/utils/score-next-link-text.js
init_esm_shims();
function scoreNextLinkText(linkData) {
  if (NEXT_LINK_TEXT_RE.test(linkData)) {
    return 50;
  }
  return 0;
}

// src/extractors/generic/next-page-url/scoring/utils/score-cap-links.js
init_esm_shims();
function scoreCapLinks(linkData) {
  if (CAP_LINK_TEXT_RE2.test(linkData)) {
    if (NEXT_LINK_TEXT_RE.test(linkData)) {
      return -65;
    }
  }
  return 0;
}

// src/extractors/generic/next-page-url/scoring/score-links.js
function makeBaseRegex(baseUrl) {
  return new RegExp(`^${baseUrl}`, "i");
}
function makeSig2($link, linkText) {
  return `${linkText || $link.text()} ${$link.attr("class") || ""} ${$link.attr(
    "id"
  ) || ""}`;
}
function scoreLinks({
  links,
  articleUrl,
  baseUrl,
  parsedUrl,
  $,
  previousUrls = []
}) {
  parsedUrl = parsedUrl || URL7.parse(articleUrl);
  const baseRegex = makeBaseRegex(baseUrl);
  const isWp = isWordpress($);
  const scoredPages = links.reduce((possiblePages, link) => {
    const attrs = getAttrs(link);
    if (!attrs.href) return possiblePages;
    const href = removeAnchor(attrs.href);
    const $link = $(link);
    const linkText = $link.text();
    if (!shouldScore(href, articleUrl, baseUrl, parsedUrl, linkText, previousUrls)) {
      return possiblePages;
    }
    if (!possiblePages[href]) {
      possiblePages[href] = {
        score: 0,
        linkText,
        href
      };
    } else {
      possiblePages[href].linkText = `${possiblePages[href].linkText}|${linkText}`;
    }
    const possiblePage = possiblePages[href];
    const linkData = makeSig2($link, linkText);
    const pageNum = pageNumFromUrl(href);
    let score = scoreBaseUrl(href, baseRegex);
    score += scoreNextLinkText(linkData);
    score += scoreCapLinks(linkData);
    score += scorePrevLink(linkData);
    score += scoreByParents2($link);
    score += scoreExtraneousLinks(href);
    score += scorePageInLink(pageNum, isWp);
    score += scoreLinkText(linkText, pageNum);
    score += scoreSimilarity(score, articleUrl, href);
    possiblePage.score = score;
    return possiblePages;
  }, {});
  return Reflect.ownKeys(scoredPages).length === 0 ? null : scoredPages;
}

// src/extractors/generic/next-page-url/extractor.js
var GenericNextPageUrlExtractor = {
  extract({ $, url, parsedUrl, previousUrls = [] }) {
    parsedUrl = parsedUrl || URL8.parse(url);
    const articleUrl = removeAnchor(url);
    const baseUrl = articleBaseUrl(url, parsedUrl);
    const links = $("a[href]").toArray();
    const scoredLinks = scoreLinks({
      links,
      articleUrl,
      baseUrl,
      parsedUrl,
      $,
      previousUrls
    });
    if (!scoredLinks) return null;
    const topPage = Reflect.ownKeys(scoredLinks).reduce(
      (acc, link) => {
        const scoredLink = scoredLinks[link];
        return scoredLink.score > acc.score ? scoredLink : acc;
      },
      { score: -100 }
    );
    if (topPage.score >= 50) {
      return topPage.href;
    }
    return null;
  }
};
var extractor_default7 = GenericNextPageUrlExtractor;

// src/extractors/generic/url/extractor.js
init_esm_shims();
import URL9 from "url";

// src/extractors/generic/url/constants.js
init_esm_shims();
var CANONICAL_META_SELECTORS = ["og:url"];

// src/extractors/generic/url/extractor.js
function parseDomain(url) {
  const parsedUrl = URL9.parse(url);
  const { hostname } = parsedUrl;
  return hostname;
}
function result(url) {
  return {
    url,
    domain: parseDomain(url)
  };
}
var GenericUrlExtractor = {
  extract({ $, url, metaCache }) {
    const $canonical = $("link[rel=canonical]");
    if ($canonical.length !== 0) {
      const href = $canonical.attr("href");
      if (href) {
        return result(href);
      }
    }
    const metaUrl = extractFromMeta($, CANONICAL_META_SELECTORS, metaCache);
    if (metaUrl) {
      return result(metaUrl);
    }
    return result(url);
  }
};
var extractor_default8 = GenericUrlExtractor;

// src/extractors/generic/excerpt/extractor.js
init_esm_shims();
import ellipsize from "ellipsize";

// src/extractors/generic/excerpt/constants.js
init_esm_shims();
var EXCERPT_META_SELECTORS = ["og:description", "twitter:description"];

// src/extractors/generic/excerpt/extractor.js
function clean2(content, $, maxLength = 200) {
  content = content.replace(/[\s\n]+/g, " ").trim();
  return ellipsize(content, maxLength, { ellipse: "&hellip;" });
}
var GenericExcerptExtractor = {
  extract({ $, content, metaCache }) {
    const excerpt = extractFromMeta($, EXCERPT_META_SELECTORS, metaCache);
    if (excerpt) {
      return clean2(stripTags(excerpt, $));
    }
    const maxLength = 200;
    const shortContent = content.slice(0, maxLength * 5);
    return clean2($(shortContent).text(), $, maxLength);
  }
};
var extractor_default9 = GenericExcerptExtractor;

// src/extractors/generic/word-count/extractor.js
init_esm_shims();
import cheerio2 from "cheerio";
var getWordCount = (content) => {
  const $ = cheerio2.load(content);
  const $content = $("div").first();
  const text = normalizeSpaces($content.text());
  return text.split(/\s/).length;
};
var getWordCountAlt = (content) => {
  content = content.replace(/<[^>]*>/g, " ");
  content = content.replace(/\s+/g, " ");
  content = content.trim();
  return content.split(" ").length;
};
var GenericWordCountExtractor = {
  extract({ content }) {
    let count = getWordCount(content);
    if (count === 1) count = getWordCountAlt(content);
    return count;
  }
};
var extractor_default10 = GenericWordCountExtractor;

// src/extractors/generic/index.js
var GenericExtractor = {
  // This extractor is the default for all domains
  domain: "*",
  title: extractor_default2.extract,
  date_published: extractor_default4.extract,
  author: extractor_default3.extract,
  content: extractor_default.extract.bind(extractor_default),
  lead_image_url: extractor_default6.extract,
  dek: extractor_default5.extract,
  next_page_url: extractor_default7.extract,
  url_and_domain: extractor_default8.extract,
  excerpt: extractor_default9.extract,
  word_count: extractor_default10.extract,
  direction: ({ title }) => stringDirection.getDirection(title),
  extract(options) {
    const { html, $ } = options;
    if (html && !$) {
      const loaded = cheerio3.load(html);
      options.$ = loaded;
    }
    const title = this.title(options);
    const date_published = this.date_published(options);
    const author = this.author(options);
    const content = this.content({ ...options, title });
    const lead_image_url = this.lead_image_url({ ...options, content });
    const dek = this.dek({ ...options, content });
    const next_page_url = this.next_page_url(options);
    const excerpt = this.excerpt({ ...options, content });
    const word_count = this.word_count({ ...options, content });
    const direction = this.direction({ title });
    const { url, domain } = this.url_and_domain(options);
    return {
      title,
      author,
      date_published: date_published || null,
      dek,
      lead_image_url,
      content,
      next_page_url,
      url,
      domain,
      excerpt,
      word_count,
      direction
    };
  }
};
var generic_default = GenericExtractor;

// src/extractors/detect-by-html.js
init_esm_shims();
var Detectors = {
  'meta[name="al:ios:app_name"][value="Medium"]': MediumExtractor,
  'meta[name="generator"][value="blogger"]': BloggerExtractor
};
function detectByHtml($) {
  const selector = Reflect.ownKeys(Detectors).find((s) => $(s).length > 0);
  return Detectors[selector];
}

// src/extractors/get-extractor.js
function getExtractor(url, parsedUrl, $) {
  parsedUrl = parsedUrl || URL10.parse(url);
  const { hostname } = parsedUrl;
  const baseDomain = hostname.split(".").slice(-2).join(".");
  return apiExtractors[hostname] || apiExtractors[baseDomain] || all_default[hostname] || all_default[baseDomain] || detectByHtml($) || generic_default;
}

// src/extractors/root-extractor.js
init_esm_shims();
function cleanBySelectors($content, $, { clean: clean4 }) {
  if (!clean4) return $content;
  $(clean4.join(","), $content).remove();
  return $content;
}
function transformElements($content, $, { transforms }) {
  if (!transforms) return $content;
  Reflect.ownKeys(transforms).forEach((key) => {
    const $matches = $(key, $content);
    const value = transforms[key];
    if (typeof value === "string") {
      $matches.each((index, node) => {
        convertNodeTo($(node), $, transforms[key]);
      });
    } else if (typeof value === "function") {
      $matches.each((index, node) => {
        const result2 = value($(node), $);
        if (typeof result2 === "string") {
          convertNodeTo($(node), $, result2);
        }
      });
    }
  });
  return $content;
}
function findMatchingSelector($, selectors, extractHtml, allowMultiple) {
  return selectors.find((selector) => {
    if (Array.isArray(selector)) {
      if (extractHtml) {
        return selector.reduce((acc, s2) => acc && $(s2).length > 0, true);
      }
      const [s, attr] = selector;
      return (allowMultiple || !allowMultiple && $(s).length === 1) && $(s).attr(attr) && $(s).attr(attr).trim() !== "";
    }
    return (allowMultiple || !allowMultiple && $(selector).length === 1) && $(selector).text().trim() !== "";
  });
}
function select(opts) {
  const { $, type, extractionOpts, extractHtml = false } = opts;
  if (!extractionOpts) return null;
  if (typeof extractionOpts === "string") return extractionOpts;
  const { selectors, defaultCleaner = true, allowMultiple } = extractionOpts;
  const overrideAllowMultiple = type === "lead_image_url" || allowMultiple;
  const matchingSelector = findMatchingSelector(
    $,
    selectors,
    extractHtml,
    overrideAllowMultiple
  );
  if (!matchingSelector) return null;
  function transformAndClean($node) {
    makeLinksAbsolute($node, $, opts.url || "");
    cleanBySelectors($node, $, extractionOpts);
    transformElements($node, $, extractionOpts);
    return $node;
  }
  function selectHtml() {
    let $content;
    if (Array.isArray(matchingSelector)) {
      $content = $(matchingSelector.join(","));
      const $wrapper = $("<div></div>");
      $content.each((_, element) => {
        $wrapper.append(element);
      });
      $content = $wrapper;
    } else {
      $content = $(matchingSelector);
    }
    $content.wrap($("<div></div>"));
    $content = $content.parent();
    $content = transformAndClean($content);
    if (cleaners_default[type]) {
      cleaners_default[type]($content, { ...opts, defaultCleaner });
    }
    if (allowMultiple) {
      return $content.children().toArray().map((el) => $.html($(el)));
    }
    return $.html($content);
  }
  if (extractHtml) {
    return selectHtml(matchingSelector);
  }
  let $match;
  let result2;
  if (Array.isArray(matchingSelector)) {
    const [selector, attr, transform] = matchingSelector;
    $match = $(selector);
    $match = transformAndClean($match);
    result2 = $match.map((_, el) => {
      const item = $(el).attr(attr).trim();
      return transform ? transform(item) : item;
    });
  } else {
    $match = $(matchingSelector);
    $match = transformAndClean($match);
    result2 = $match.map(
      (_, el) => $(el).text().trim()
    );
  }
  result2 = Array.isArray(result2.toArray()) && allowMultiple ? result2.toArray() : result2[0];
  if (defaultCleaner && cleaners_default[type]) {
    return cleaners_default[type](result2, { ...opts, ...extractionOpts });
  }
  return result2;
}
function selectExtendedTypes(extend, opts) {
  const results = {};
  Reflect.ownKeys(extend).forEach((t) => {
    if (!results[t]) {
      results[t] = select({ ...opts, type: t, extractionOpts: extend[t] });
    }
  });
  return results;
}
function extractResult(opts) {
  const { type, extractor, fallback = true } = opts;
  const result2 = select({ ...opts, extractionOpts: extractor[type] });
  if (result2) {
    return result2;
  }
  if (fallback) return generic_default[type](opts);
  return null;
}
var RootExtractor = {
  extract(extractor = generic_default, opts) {
    const { contentOnly, extractedTitle } = opts;
    if (extractor.domain === "*") return extractor.extract(opts);
    opts = {
      ...opts,
      extractor
    };
    if (contentOnly) {
      const content2 = extractResult({
        ...opts,
        type: "content",
        extractHtml: true,
        title: extractedTitle
      });
      return {
        content: content2
      };
    }
    let extendedResults = {};
    if (extractor.extend) {
      extendedResults = selectExtendedTypes(extractor.extend, opts);
    }
    const title = extractResult({ ...opts, type: "title" });
    const date_published = extractResult({ ...opts, type: "date_published" });
    const author = extractResult({ ...opts, type: "author" });
    const next_page_url = extractResult({ ...opts, type: "next_page_url" });
    const content = extractResult({
      ...opts,
      type: "content",
      extractHtml: true,
      title
    });
    const lead_image_url = extractResult({
      ...opts,
      type: "lead_image_url",
      content
    });
    const excerpt = extractResult({ ...opts, type: "excerpt", content });
    const dek = extractResult({ ...opts, type: "dek", content, excerpt });
    const word_count = extractResult({ ...opts, type: "word_count", content });
    const direction = extractResult({ ...opts, type: "direction", title });
    const { url, domain } = extractResult({
      ...opts,
      type: "url_and_domain"
    }) || { url: null, domain: null };
    return {
      title,
      content,
      author,
      date_published,
      lead_image_url,
      dek,
      next_page_url,
      url,
      domain,
      excerpt,
      word_count,
      direction,
      ...extendedResults
    };
  }
};
var root_extractor_default = RootExtractor;

// src/extractors/collect-all-pages.js
init_esm_shims();

// src/resource/index.js
init_esm_shims();
import cheerio5 from "cheerio";
import iconv2 from "iconv-lite";

// src/resource/utils/index.js
init_esm_shims();

// src/resource/utils/fetch-resource.js
init_esm_shims();
import URL11 from "url";
import request from "postman-request";

// src/resource/utils/constants.js
init_esm_shims();
import cheerio4 from "cheerio";
var REQUEST_HEADERS = cheerio4.browser ? {} : {
  "User-Agent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36"
};
var FETCH_TIMEOUT = 1e4;
var BAD_CONTENT_TYPES = [
  "audio/mpeg",
  "image/gif",
  "image/jpeg",
  "image/jpg"
];
var BAD_CONTENT_TYPES_RE = new RegExp(
  `^(${BAD_CONTENT_TYPES.join("|")})$`,
  "i"
);
var MAX_CONTENT_LENGTH = 5242880;

// src/resource/utils/fetch-resource.js
function get(options) {
  return new Promise((resolve, reject) => {
    request(options, (err, response, body) => {
      if (err) {
        reject(err);
      } else {
        resolve({ body, response });
      }
    });
  });
}
function validateResponse(response, parseNon200 = false) {
  if (response.statusMessage && response.statusMessage !== "OK" || response.statusCode !== 200) {
    if (!response.statusCode) {
      throw new Error(
        `Unable to fetch content. Original exception was ${response.error}`
      );
    } else if (!parseNon200) {
      throw new Error(
        `Resource returned a response status code of ${response.statusCode} and resource was instructed to reject non-200 status codes.`
      );
    }
  }
  const {
    "content-type": contentType,
    "content-length": contentLength
  } = response.headers;
  if (BAD_CONTENT_TYPES_RE.test(contentType)) {
    throw new Error(
      `Content-type for this resource was ${contentType} and is not allowed.`
    );
  }
  if (contentLength > MAX_CONTENT_LENGTH) {
    throw new Error(
      `Content for this resource was too large. Maximum content length is ${MAX_CONTENT_LENGTH}.`
    );
  }
  return true;
}
async function fetchResource(url, parsedUrl, headers = {}) {
  parsedUrl = parsedUrl || URL11.parse(encodeURI(url));
  const options = {
    url: parsedUrl.href,
    headers: { ...REQUEST_HEADERS, ...headers },
    timeout: FETCH_TIMEOUT,
    // Accept cookies
    jar: true,
    // Set to null so the response returns as binary and body as buffer
    // https://github.com/request/request#requestoptions-callback
    encoding: null,
    // Accept and decode gzip
    gzip: true,
    // Follow any non-GET redirects
    followAllRedirects: true,
    ...typeof window !== "undefined" ? {} : {
      // Follow GET redirects; this option is for Node only
      followRedirect: true
    }
  };
  const { response, body } = await get(options);
  try {
    validateResponse(response);
    return {
      body,
      response
    };
  } catch (e) {
    return {
      error: true,
      message: e.message
    };
  }
}

// src/resource/utils/dom/index.js
init_esm_shims();

// src/resource/utils/dom/normalize-meta-tags.js
init_esm_shims();
function convertMetaProp($, from, to) {
  $(`meta[${from}]`).each((_, node) => {
    const $node = $(node);
    const value = $node.attr(from);
    $node.attr(to, value);
    $node.removeAttr(from);
  });
  return $;
}
function normalizeMetaTags($) {
  $ = convertMetaProp($, "content", "value");
  $ = convertMetaProp($, "property", "name");
  return $;
}

// src/resource/utils/dom/convert-lazy-loaded-images.js
init_esm_shims();

// src/resource/utils/dom/constants.js
init_esm_shims();
var IS_LINK = new RegExp("https?://", "i");
var IMAGE_RE = ".(png|gif|jpe?g)";
var IS_IMAGE = new RegExp(`${IMAGE_RE}`, "i");
var IS_SRCSET = new RegExp(
  `${IMAGE_RE}(\\?\\S+)?(\\s*[\\d.]+[wx])`,
  "i"
);
var TAGS_TO_REMOVE = ["script", "style", "form"].join(",");

// src/resource/utils/dom/convert-lazy-loaded-images.js
function convertLazyLoadedImages($) {
  const extractSrcFromJSON = (str) => {
    try {
      const { src } = JSON.parse(str);
      if (typeof src === "string") return src;
    } catch (_) {
      return false;
    }
    return false;
  };
  $("img").each((_, img) => {
    const attrs = getAttrs(img);
    Reflect.ownKeys(attrs).forEach((attr) => {
      const value = attrs[attr];
      if (attr !== "srcset" && IS_LINK.test(value) && IS_SRCSET.test(value)) {
        $(img).attr("srcset", value);
      } else if (attr !== "src" && attr !== "srcset" && IS_LINK.test(value) && IS_IMAGE.test(value)) {
        const existingSrc = extractSrcFromJSON(value);
        if (existingSrc) {
          $(img).attr("src", existingSrc);
        } else {
          $(img).attr("src", value);
        }
      }
    });
  });
  return $;
}

// src/resource/utils/dom/clean.js
init_esm_shims();
function isComment(index, node) {
  return node.type === "comment";
}
function cleanComments($) {
  $.root().find("*").contents().filter(isComment).remove();
  return $;
}
function clean3($) {
  $(TAGS_TO_REMOVE).remove();
  $ = cleanComments($);
  return $;
}

// src/resource/index.js
var Resource = {
  // Create a Resource.
  //
  // :param url: The URL for the document we should retrieve.
  // :param response: If set, use as the response rather than
  //                  attempting to fetch it ourselves. Expects a
  //                  string.
  // :param headers: Custom headers to be included in the request
  async create(url, preparedResponse, parsedUrl, headers = {}) {
    let result2;
    if (preparedResponse) {
      const validResponse = {
        statusMessage: "OK",
        statusCode: 200,
        headers: {
          "content-type": "text/html",
          "content-length": 500
        }
      };
      result2 = {
        body: preparedResponse,
        response: validResponse,
        alreadyDecoded: true
      };
    } else {
      result2 = await fetchResource(url, parsedUrl, headers);
    }
    if (result2.error) {
      result2.failed = true;
      return result2;
    }
    return this.generateDoc(result2);
  },
  generateDoc({ body: content, response, alreadyDecoded = false }) {
    const { "content-type": contentType = "" } = response.headers;
    if (!contentType.includes("html") && !contentType.includes("text")) {
      throw new Error("Content does not appear to be text.");
    }
    let $ = this.encodeDoc({ content, contentType, alreadyDecoded });
    if ($.root().children().length === 0) {
      throw new Error("No children, likely a bad parse.");
    }
    $ = normalizeMetaTags($);
    $ = convertLazyLoadedImages($);
    $ = clean3($);
    return $;
  },
  encodeDoc({ content, contentType, alreadyDecoded = false }) {
    if (alreadyDecoded) {
      return cheerio5.load(content);
    }
    const encoding = getEncoding(contentType);
    let decodedContent = iconv2.decode(content, encoding);
    let $ = cheerio5.load(decodedContent);
    const contentTypeSelector = cheerio5.browser ? "meta[http-equiv=content-type]" : "meta[http-equiv=content-type i]";
    const metaContentType = $(contentTypeSelector).attr("content") || $("meta[charset]").attr("charset");
    const properEncoding = getEncoding(metaContentType);
    if (metaContentType && properEncoding !== encoding) {
      decodedContent = iconv2.decode(content, properEncoding);
      $ = cheerio5.load(decodedContent);
    }
    return $;
  }
};
var resource_default = Resource;

// src/extractors/collect-all-pages.js
async function collectAllPages({
  next_page_url,
  html,
  $,
  metaCache,
  result: result2,
  Extractor,
  title,
  url
}) {
  let pages = 1;
  const previousUrls = [removeAnchor(url)];
  while (next_page_url && pages < 26) {
    pages += 1;
    $ = await resource_default.create(next_page_url);
    html = $.html();
    const extractorOpts = {
      url: next_page_url,
      html,
      $,
      metaCache,
      extractedTitle: title,
      previousUrls
    };
    const nextPageResult = root_extractor_default.extract(Extractor, extractorOpts);
    previousUrls.push(next_page_url);
    result2 = {
      ...result2,
      content: `${result2.content}<hr><h4>Page ${pages}</h4>${nextPageResult.content}`
    };
    next_page_url = nextPageResult.next_page_url;
  }
  const word_count = generic_default.word_count({
    content: `<div>${result2.content}</div>`
  });
  return {
    ...result2,
    total_pages: pages,
    rendered_pages: pages,
    word_count
  };
}

// src/mercury.js
var Parser = {
  /**
   * @param {string} url
   * @param {{
   * html?: string
   * fetchAllPages?: boolean;
   * fallback?: boolean;
   * contentType?: 'html' | 'markdown' | 'text';
   * headers?: Record<string, string>;
   * extend?: (loader: any) => void;
   * customExtractor?: (content: HTMLElement) => string;
   * }} opts
   * @returns {Promise<{
   * title: string | null;
   * content: string | null;
   * author: string | null;
   * date_published: string | null;
   * lead_image_url: string | null;
   * dek: string | null;
   * next_page_url: string | null;
   * url: string | null;
   * domain: string | null;
   * excerpt: string | null;
   * word_count: number | null;
   * direction: 'ltr' | 'rtl' | null;
   * total_pages: number | null;
   * rendered_pages: number | null;}>}
   */
  async parse(url, { html, ...opts } = {}) {
    const {
      fetchAllPages = true,
      fallback = true,
      contentType = "html",
      headers = {},
      extend,
      customExtractor
    } = opts;
    if (!url && cheerio6.browser) {
      url = window.location.href;
      html = html || cheerio6.html();
    }
    const parsedUrl = URL12.parse(url);
    if (!validateUrl(parsedUrl)) {
      return {
        error: true,
        message: "The url parameter passed does not look like a valid URL. Please check your URL and try again."
      };
    }
    const $ = await resource_default.create(url, html, parsedUrl, headers);
    if ($.failed) {
      return $;
    }
    if (customExtractor) {
      addExtractor(customExtractor);
    }
    const Extractor = getExtractor(url, parsedUrl, $);
    if (!html) {
      html = $.html();
    }
    const metaCache = $("meta").map((_, node) => $(node).attr("name")).toArray();
    let extendedTypes = {};
    if (extend) {
      extendedTypes = selectExtendedTypes(extend, { $, url, html });
    }
    let result2 = root_extractor_default.extract(Extractor, {
      url,
      html,
      $,
      metaCache,
      parsedUrl,
      fallback,
      contentType
    });
    const { title, next_page_url } = result2;
    if (fetchAllPages && next_page_url) {
      result2 = await collectAllPages({
        Extractor,
        next_page_url,
        html,
        $,
        metaCache,
        result: result2,
        title,
        url
      });
    } else {
      result2 = {
        ...result2,
        total_pages: 1,
        rendered_pages: 1
      };
    }
    if (contentType === "markdown") {
      const turndownService = new TurndownService();
      result2.content = turndownService.turndown(result2.content);
    } else if (contentType === "text") {
      result2.content = $.text($(result2.content));
    }
    return { ...result2, ...extendedTypes };
  },
  browser: !!cheerio6.browser,
  // A convenience method for getting a resource
  // to work with, e.g., for custom extractor generator
  /**
   * @param {string} url
   */
  fetchResource(url) {
    return resource_default.create(url);
  },
  /**
   * @param {{ domain: string; title: { selectors: string[]; }; author: { selectors: string[]; }; content: { selectors: string[]; }; extend: { testContent: { selectors: string[]; }; }; }} extractor
   */
  addExtractor(extractor) {
    return addExtractor(extractor);
  }
};
var mercury_default = Parser;
export {
  mercury_default as default
};
//# sourceMappingURL=mercury.mjs.map