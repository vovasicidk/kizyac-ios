(function (_0x492fec) {
  'use strict';

  const _0x43c598 = _0x492fec.KizyacCore || ('function' == typeof require ? require('./core.js') : null),
    { N: _0x18f526 } = _0x43c598,
    _0x156071 = Object.freeze({
      openAt: 0x6,
      realities: 0xa,
      ranks: 0x18,
      runes: 0x3,
      reactions: 0x4,
      modified: 0x4,
      research: 'r14',
      run: 0xc80,
      seconds: 0x278d00,
    });
  function _0x150723(_0x29ecfb) {
    const _0x4be878 = _0x29ecfb.finale,
      _0x3ed61d = _0x43c598.ranks(_0x29ecfb),
      _0x514b2a = new Set(_0x29ecfb.glyphs.map((_0x2febf7) => _0x2febf7.id)),
      _0x2be0b9 = _0x29ecfb.lab?.['combos']['length'] || 0x0,
      _0x1afc70 = _0x29ecfb.materials?.['mods']['filter']((_0x34e15b) => 0x3 === _0x34e15b)['length'] || 0x0,
      _0x1eeed6 = _0x29ecfb.realities >= _0x156071.openAt,
      _0x2a7451 = _0x1eeed6 && _0x3ed61d >= _0x156071.ranks && _0x514b2a.size >= _0x156071.runes,
      _0x247d81 = _0x2a7451 && _0x2be0b9 >= _0x156071.reactions && _0x1afc70 >= _0x156071.modified,
      _0x1c6b4a = _0x4be878?.['run'] ?? null,
      _0x36121d = null !== _0x1c6b4a,
      _0x46a4ed = _0x4be878?.['endedAt'] ?? null;
    return {
      open: _0x1eeed6,
      ranks: _0x3ed61d,
      runeKinds: _0x514b2a,
      reactions: _0x2be0b9,
      modified: _0x1afc70,
      admission: _0x2a7451,
      stabilizer: _0x247d81,
      testRun: _0x1c6b4a,
      tested: _0x36121d,
      endedAt: _0x46a4ed,
      canTest:
        _0x247d81 &&
        _0x29ecfb.realities >= _0x156071.realities &&
        !_0x29ecfb.pendingGlyph &&
        !_0x29ecfb.challenge &&
        _0x43c598.has(_0x29ecfb, _0x156071.research) &&
        _0x29ecfb.run >= _0x156071.run &&
        !_0x36121d,
      canFinish:
        _0x247d81 &&
        _0x36121d &&
        _0x29ecfb.realities >= _0x156071.realities &&
        _0x29ecfb.simSeconds >= _0x156071.seconds &&
        !_0x29ecfb.pendingGlyph &&
        !_0x29ecfb.challenge &&
        null === _0x46a4ed,
    };
  }
  function _0x178bce(_0x564c3e) {
    if (void 0x0 === _0x564c3e.finale)
      return {
        valid: true,
      };
    const _0x57a101 = {
        valid: false,
        reason: 'Некорректная запись финального опыта',
      },
      _0x54cca4 = _0x564c3e.finale;
    if (!_0x54cca4 || 'object' != typeof _0x54cca4 || Array.isArray(_0x54cca4)) return _0x57a101;
    const { run: _0x1b13fd, endedAt: _0x140578 } = _0x54cca4;
    return (null !== _0x1b13fd &&
      (!_0x18f526.valid(_0x1b13fd) ||
        _0x1b13fd < _0x156071.run ||
        _0x1b13fd > _0x18f526.MAX ||
        _0x1b13fd > _0x564c3e.best + 0.000001)) ||
      (null !== _0x140578 &&
        (!Number.isFinite(_0x140578) || _0x140578 < _0x156071.seconds || _0x140578 > _0x564c3e.simSeconds)) ||
      (null !== _0x1b13fd && (!_0x150723(_0x564c3e).stabilizer || _0x564c3e.realities < _0x156071.realities)) ||
      (null === _0x1b13fd && null !== _0x140578)
      ? _0x57a101
      : {
          valid: true,
        };
  }
  const _0x236e8e = _0x43c598.restore;
  ((_0x43c598.restore = function (_0x3269bc, _0x54015e) {
    const _0x2517e1 = _0x236e8e(_0x3269bc, _0x54015e);
    let _0x3ba52a = _0x3269bc;
    if ('string' == typeof _0x3269bc)
      try {
        _0x3ba52a = JSON.parse(_0x3269bc);
      } catch (_0x255ac0) {
        _0x3ba52a = null;
      }
    if (_0x2517e1.valid && _0x3ba52a?.['finale']) {
      const { run: _0x4b8693, endedAt: _0x3e74e0 } = _0x3ba52a.finale;
      ((_0x2517e1.state.finale = {
        run: _0x4b8693,
        endedAt: _0x3e74e0,
      }),
        _0x178bce(_0x2517e1.state).valid || delete _0x2517e1.state.finale);
    }
    return _0x2517e1;
  }),
    (_0x43c598.Finale = {
      RULES: _0x156071,
      progress: _0x150723,
      record: function (_0x4eaa5d) {
        return (
          !!_0x150723(_0x4eaa5d).canTest &&
          ((_0x4eaa5d.finale = {
            run: _0x4eaa5d.run,
            endedAt: null,
          }),
          true)
        );
      },
      finish: function (_0x16eb73) {
        return (
          !!_0x150723(_0x16eb73).canFinish &&
          ((_0x16eb73.finale = {
            run: _0x16eb73.finale.run,
            endedAt: _0x16eb73.simSeconds,
          }),
          true)
        );
      },
      validate: _0x178bce,
    }),
    'object' == typeof module && module.exports && (module.exports = _0x43c598.Finale));
})('undefined' != typeof globalThis ? globalThis : this);
