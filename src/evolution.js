(function (_0x2b2ccf) {
  'use strict';

  const _0xa07da = _0x2b2ccf.KizyacCore || ('function' == typeof require ? require('./core.js') : null),
    _0x2209a4 = _0xa07da.N,
    _0x709f0a = [0x0, 1.7, 0x3, 0x5, 0x8, 0xc, 0x12, 0x18, 0x23, 0x3c];
  function _0x34213d(_0xcadc8) {
    const _0x200610 = Math.min(0x27, Math.max(_0xcadc8.bestStage, _0xa07da.stage(_0xcadc8))),
      _0x7ea14c = (_0x3927a9) => _0x2209a4.format(_0x3927a9, _0xcadc8.settings.notation),
      _0x540ef3 = (_0x32580c, _0x5c6e58, _0x2a7951, _0x2ea6f6 = 'До следующей мутации') => {
        return {
          stage: _0x200610,
          next: _0x32580c,
          fraction: ((_0x4d0fae = _0x5c6e58), Math.max(0x0, Math.min(0x1, _0x4d0fae))),
          detail: _0x2a7951,
          caption: _0x2ea6f6,
          name: null === _0x32580c ? 'Эволюция завершена' : _0xa07da.STAGE_NAMES[_0x32580c],
        };
        var _0x4d0fae;
      };
    if (_0x200610 >= 0x27)
      return _0x540ef3(null, 0x1, 'Все\x20мутации\x20открыты.\x20Банка\x20достигла\x20предела.', 'Абсолютная форма');
    if (_0x200610 < 0x9) {
      const _0x5b180c = _0x200610 ? _0x709f0a[_0x200610] : _0x2209a4.Z,
        _0x27087e = _0x709f0a[_0x200610 + 0x1],
        _0x11a244 = Math.min(_0x27087e, _0xcadc8.best),
        _0x2ce7e4 = _0x2209a4.sub(_0x27087e, _0x11a244);
      return _0x540ef3(
        _0x200610 + 0x1,
        _0x2209a4.ratio(_0x2209a4.sub(_0x11a244, _0x5b180c), _0x2209a4.sub(_0x27087e, _0x5b180c)),
        'Ещё\x20' + _0x7ea14c(_0x2ce7e4) + ' кизяка за лучший цикл',
      );
    }
    if (0x9 === _0x200610)
      return _0x540ef3(
        0xa,
        _0xcadc8.run / _0xa07da.decayRequirement(_0xcadc8),
        _0x2209a4.valid(_0xa07da.isotopeGain(_0xcadc8))
          ? 'Распад\x20готов\x20—\x20выполни\x20его\x20во\x20вкладке\x20«Распад»'
          : 'Цикл ' +
              _0x7ea14c(_0xcadc8.run) +
              '\x20/\x201e' +
              _0xa07da.decayRequirement(_0xcadc8) +
              ' · затем выполни распад',
        'Следующая форма — после распада',
      );
    if (_0x200610 < 0x13) {
      const _0x1d6700 = Math.max(0x0, _0xcadc8.isoTotal) + _0xcadc8.decays / 0x5,
        _0x36c4e9 = _0x200610 - 0x9,
        _0x3a8e86 = Math.max(0x0, _0x36c4e9 - _0xcadc8.decays / 0x5);
      return _0x540ef3(
        _0x200610 + 0x1,
        _0x1d6700 - (_0x200610 - 0xa),
        'Всего\x20изотопов:\x20' +
          _0x7ea14c(_0xcadc8.isoTotal) +
          '\x20/\x20' +
          _0x7ea14c(_0x3a8e86) +
          '. Каждый распад приближает мутацию.',
      );
    }
    if (0x13 === _0x200610) {
      const _0xebc4dc = _0xa07da.singRequirements(_0xcadc8),
        _0x231e56 = [
          _0xcadc8.run / _0xebc4dc.am,
          _0xcadc8.isoEpoch / _0xebc4dc.iso,
          _0xcadc8.decaysHere / _0xebc4dc.decays,
          _0xa07da.ranks(_0xcadc8) / _0xebc4dc.ranks,
        ],
        _0x86fc8e = _0x231e56.filter((_0x549d60) => _0x549d60 >= 0x1).length;
      return _0x540ef3(
        0x14,
        Math.min(..._0x231e56),
        'Сингулярность:\x20' + _0x86fc8e + ' из 4 условий готовы',
        'Следующая форма — сингулярность',
      );
    }
    if (_0x200610 < 0x1d) {
      const _0x488e1b = Math.max(0x0, _0xcadc8.massTotal) + _0xcadc8.sings / 0x3,
        _0x527e91 = _0x200610 - 0x13,
        _0x1c0a6b = Math.max(0x0, _0x527e91 - _0xcadc8.sings / 0x3);
      return _0x540ef3(
        _0x200610 + 0x1,
        _0x488e1b - (_0x200610 - 0x14),
        'Всего\x20массы:\x20' +
          _0x7ea14c(_0xcadc8.massTotal) +
          ' / ' +
          _0x7ea14c(_0x1c0a6b) +
          '. Сингулярности тоже приближают мутацию.',
      );
    }
    const _0x278118 = _0xa07da.realityRequirements(_0xcadc8),
      _0x4281f5 = [
        _0xcadc8.massCycle / _0x278118.mass,
        _0xcadc8.isoEpoch / _0x278118.iso,
        _0xcadc8.singsHere / _0x278118.sings,
        _0xa07da.ranks(_0xcadc8) / _0x278118.ranks,
      ],
      _0x1bd986 = _0x4281f5.filter((_0x405b92) => _0x405b92 >= 0x1).length,
      _0x4d3824 = Math.min(0x27, 0x1e + Math.floor(1.5 * (_0xcadc8.realities + 0x1)));
    return _0x540ef3(
      Math.max(_0x200610 + 0x1, _0x4d3824),
      Math.min(..._0x4281f5),
      'Новая\x20реальность:\x20' + _0x1bd986 + ' из 4 условий готовы',
      'Следующая\x20форма\x20—\x20новый\x20сектор',
    );
  }
  ((_0xa07da.mutationProgress = _0x34213d),
    (_0x2b2ccf.KizyacEvolution = {
      progress: _0x34213d,
    }),
    'object' == typeof module && module.exports && (module.exports = _0x2b2ccf.KizyacEvolution));
})('undefined' != typeof globalThis ? globalThis : this);
