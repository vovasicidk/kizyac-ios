(function (_0x296999) {
  'use strict';

  const _0x5bcfb3 = -0x3b9aca00,
    _0x43f2a8 = 0x989680,
    _0x4080ea = (_0x2a784c) =>
      'number' == typeof _0x2a784c && Number.isFinite(_0x2a784c) && _0x2a784c > _0x5bcfb3 / 0x2,
    _0x57412e = (_0x22892d) =>
      'number' == typeof _0x22892d && _0x22892d > 0x0 && Number.isFinite(_0x22892d) ? Math.log10(_0x22892d) : _0x5bcfb3,
    _0x5dade1 = [
      ['тысяча', 'тысячи', 'тысяч'],
      ...[
        'миллион',
        'миллиард',
        'триллион',
        'квадриллион',
        'квинтиллион',
        'секстиллион',
        'септиллион',
        'октиллион',
        'нониллион',
        'дециллион',
        'ундециллион',
        'дуодециллион',
        'тредециллион',
        'кваттуордециллион',
        'квиндециллион',
        'сексдециллион',
        'септендециллион',
        'октодециллион',
        'новемдециллион',
        'вигинтиллион',
      ].map((_0x46ab7e) => [_0x46ab7e, _0x46ab7e + 'а', _0x46ab7e + 'ов']),
    ],
    _0x449828 = {
      Z: _0x5bcfb3,
      MAX: _0x43f2a8,
      valid: _0x4080ea,
      from: _0x57412e,
      add: function (_0x46efd, _0x50d71e) {
        if (!_0x4080ea(_0x46efd)) return _0x4080ea(_0x50d71e) ? _0x50d71e : _0x5bcfb3;
        if (!_0x4080ea(_0x50d71e)) return _0x46efd;
        const _0x4c3949 = Math.max(_0x46efd, _0x50d71e),
          _0x3efffd = Math.min(_0x46efd, _0x50d71e);
        return Math.min(
          _0x43f2a8,
          _0x4c3949 + (_0x4c3949 - _0x3efffd > 0x10 ? 0x0 : Math.log10(0x1 + Math.pow(0xa, _0x3efffd - _0x4c3949))),
        );
      },
      sub: function (_0x28574c, _0x4b0fcf) {
        return !_0x4080ea(_0x28574c) || _0x4b0fcf >= _0x28574c - 1e-13
          ? _0x5bcfb3
          : !_0x4080ea(_0x4b0fcf) || _0x28574c - _0x4b0fcf > 0x10
            ? _0x28574c
            : _0x28574c + Math.log10(-Math.expm1((_0x4b0fcf - _0x28574c) * Math.LN10));
      },
      scale: (_0x3e8157, _0x4e79e3) =>
        _0x4080ea(_0x3e8157) && _0x4e79e3 > 0x0 ? _0x3e8157 + Math.log10(_0x4e79e3) : _0x5bcfb3,
      floor: function (_0x44efe4) {
        return !_0x4080ea(_0x44efe4) || _0x44efe4 < 0x0
          ? _0x5bcfb3
          : _0x44efe4 > 0xe
            ? _0x44efe4
            : _0x57412e(Math.floor(Math.pow(0xa, _0x44efe4) + 1e-10));
      },
      format: function (_0x49523f, _0x4329b2 = 'mixed', _0x5c4f2c = 0x1) {
        if (!_0x4080ea(_0x49523f)) return '0';
        if (_0x49523f < -0.01)
          return Math.pow(0xa, _0x49523f).toLocaleString('ru-RU', {
            maximumSignificantDigits: 0x2,
          });
        if (_0x49523f < 0x3)
          return Math.pow(0xa, _0x49523f).toLocaleString('ru-RU', {
            maximumFractionDigits: _0x49523f < 0x1 ? _0x5c4f2c : 0x0,
          });
        if ('words' === _0x4329b2) {
          const _0x1ea203 = (function (_0x170154) {
            let _0x57e3d5 = Math.floor(_0x170154 / 0x3),
              _0x2bcd87 = Math.round(0x64 * Math.pow(0xa, _0x170154 - 0x3 * _0x57e3d5)) / 0x64;
            _0x2bcd87 >= 0x3e8 && ((_0x2bcd87 = 0x1), _0x57e3d5++);
            const _0x172540 = _0x5dade1[_0x57e3d5 - 0x1];
            if (!_0x172540) return null;
            const _0xb312bc = _0x2bcd87 % 0xa,
              _0x1bc36d = _0x2bcd87 % 0x64,
              _0x3f75e7 = Number.isInteger(_0x2bcd87)
                ? 0x1 === _0xb312bc && 0xb !== _0x1bc36d
                  ? 0x0
                  : _0xb312bc >= 0x2 && _0xb312bc <= 0x4 && (_0x1bc36d < 0xc || _0x1bc36d > 0xe)
                    ? 0x1
                    : 0x2
                : 0x1;
            return (
              _0x2bcd87.toLocaleString('ru-RU', {
                maximumFractionDigits: 0x2,
              }) +
              '\x20' +
              _0x172540[_0x3f75e7]
            );
          })(_0x49523f);
          if (_0x1ea203) return _0x1ea203;
        }
        const _0x46c552 = Math.floor(_0x49523f),
          _0x5b5cfc = Math.pow(0xa, _0x49523f - _0x46c552);
        if ('scientific' === _0x4329b2 || _0x46c552 >= 0xf)
          return _0x5b5cfc >= 9.95
            ? '1,0e' + (_0x46c552 + 0x1)
            : _0x5b5cfc.toLocaleString('ru-RU', {
                maximumFractionDigits: 0x1,
              }) +
                'e' +
                _0x46c552;
        const _0x240aa8 = Math.floor(_0x46c552 / 0x3);
        return (
          Math.pow(0xa, _0x49523f - 0x3 * _0x240aa8).toLocaleString('ru-RU', {
            maximumFractionDigits: 0x1,
          }) +
          '\x20' +
          ['тыс.', 'млн', 'млрд', 'трлн'][_0x240aa8 - 0x1]
        );
      },
      ratio: (_0x40d356, _0x53c928) =>
        _0x4080ea(_0x40d356) && _0x4080ea(_0x53c928)
          ? Math.min(0x1, Math.pow(0xa, Math.min(0x0, _0x40d356 - _0x53c928)))
          : 0x0,
      parse: function (_0x491a92) {
        const _0x1a8b8f = /^(\d+(?:\.\d+)?)(?:e\+?(\d+))?$/i.exec(
          String(_0x491a92).trim().replace(',', '.').replace(/\s/g, ''),
        );
        if (!_0x1a8b8f || Number(_0x1a8b8f[0x1]) <= 0x0) return null;
        const _0x52dc3b = Math.log10(Number(_0x1a8b8f[0x1])) + Number(_0x1a8b8f[0x2] || 0x0);
        return Number.isFinite(_0x52dc3b) && _0x52dc3b >= 0x0 && _0x52dc3b <= _0x43f2a8 ? _0x52dc3b : null;
      },
    };
  ((_0x296999.KN = _0x449828), 'undefined' != typeof module && module.exports && (module.exports = _0x449828));
})('undefined' != typeof globalThis ? globalThis : this);
