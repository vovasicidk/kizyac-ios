(function (_0x15e1e3) {
  'use strict';

  const _0x3ba1c3 = _0x15e1e3.KizyacCore || ('function' == typeof require ? require('./core.js') : null),
    _0x1d4224 = {
      original: {
        name: 'Тихая лаборатория',
        bg: '#0b100e',
        panel: '#142017',
        line: '#2b3b2e',
        muted: '#97a58f',
        light: '#c2f36a',
        second: '#7a9a6c',
        kind: 'lab',
      },
      steel: {
        name: 'Стальной комплекс',
        bg: '#0b1219',
        panel: '#15232e',
        line: '#304550',
        muted: '#98afbe',
        light: '#b8d3e0',
        second: '#6c9eb5',
        kind: 'steel',
      },
      toxic: {
        name: 'Зона брожения',
        bg: '#0a120a',
        panel: '#142714',
        line: '#354b27',
        muted: '#9eb38c',
        light: '#a8ff44',
        second: '#55c299',
        kind: 'toxic',
      },
      crystal: {
        name: 'Кристальный\x20грот',
        bg: '#08151e',
        panel: '#102733',
        line: '#2b4d59',
        muted: '#91b9c4',
        light: '#65e6ff',
        second: '#8fa9ff',
        kind: 'crystal',
      },
      reactor: {
        name: 'Ядро комплекса',
        bg: '#170e08',
        panel: '#2a2014',
        line: '#594129',
        muted: '#c1a785',
        light: '#ffc05e',
        second: '#ec654b',
        kind: 'reactor',
      },
      plasma: {
        name: 'Плазменный разлом',
        bg: '#140d21',
        panel: '#251735',
        line: '#503666',
        muted: '#b8a0c9',
        light: '#d4a1ff',
        second: '#73b3ff',
        kind: 'plasma',
      },
      nebula: {
        name: 'Туманность кизяка',
        bg: '#080d20',
        panel: '#151e38',
        line: '#34456c',
        muted: '#9caccd',
        light: '#8ea8ff',
        second: '#bd79d9',
        kind: 'nebula',
      },
      void: {
        name: 'Горизонт событий',
        bg: '#0d0a13',
        panel: '#211b29',
        line: '#544234',
        muted: '#baaa9b',
        light: '#ffd090',
        second: '#d57357',
        kind: 'void',
      },
      chrono: {
        name: 'Архив\x20времени',
        bg: '#081a19',
        panel: '#122b29',
        line: '#2d5550',
        muted: '#96beb5',
        light: '#81f7df',
        second: '#abcf8a',
        kind: 'chrono',
      },
      absolute: {
        name: 'За\x20последней\x20крышкой',
        bg: '#17160e',
        panel: '#28291c',
        line: '#55583a',
        muted: '#c1c0a0',
        light: '#ecffc0',
        second: '#f4d57e',
        kind: 'absolute',
      },
    },
    _0x15caeb = ['original', 'steel', 'toxic', 'crystal', 'reactor', 'plasma', 'nebula', 'void', 'chrono', 'absolute'],
    _0x40ce44 = [0x0, 0x3, 0x6, 0xa, 0xf, 0x14, 0x19, 0x1e, 0x23, 0x27],
    _0x52e1da = new Map();
  ((_0x15e1e3.KizyacThemes = {
    families: _0x1d4224,
    resolve: function (_0x48f4ea) {
      const _0x17cfc3 = Math.min(0x27, Math.max(_0x48f4ea.bestStage || 0x0, _0x3ba1c3.stage(_0x48f4ea)));
      let _0x3d6ca6 = _0x40ce44.reduce(
        (_0x318d59, _0x402e2a, _0x43c0f6) => (_0x17cfc3 >= _0x402e2a ? _0x43c0f6 : _0x318d59),
        0x0,
      );
      _0x48f4ea.skin &&
        'auto' !== _0x48f4ea.skin &&
        _0x15caeb.includes(_0x48f4ea.skin) &&
        (_0x3d6ca6 = _0x15caeb.indexOf(_0x48f4ea.skin));
      const _0x41bb91 = _0x1d4224[_0x15caeb[_0x3d6ca6]];
      return {
        ..._0x41bb91,
        stage: _0x17cfc3,
        index: _0x3d6ca6,
        id: _0x15caeb[_0x3d6ca6] + '-' + _0x17cfc3,
        name: _0x41bb91.name + ' · ' + String(_0x17cfc3 + 0x1).padStart(0x2, '0'),
        intensity: (_0x17cfc3 + 0x1) / 0x28,
      };
    },
    art: function (_0x49dc91) {
      if (_0x52e1da.has(_0x49dc91.id)) return _0x52e1da.get(_0x49dc91.id);
      const _0x58ac1d = _0x49dc91.stage,
        _0x28c1c0 = _0x49dc91.light,
        _0xa95409 = _0x49dc91.second,
        _0x1b4ff7 = _0x49dc91.kind;
      let _0x25b679 = 0x1eef + 0x89 * _0x58ac1d + 0x1f3 * _0x49dc91.index;
      const _0x3024dd = () => ((_0x25b679 = (0x19660d * _0x25b679 + 0x3c6ef35f) >>> 0x0), _0x25b679 / 0x100000000);
      let _0x18f622 = '',
        _0x225b7f = '';
      const _0x35eed3 = (
          _0x1ff448,
          _0x312293,
          _0x495d43,
          _0x4d70a8,
          _0x52cef4 = _0x28c1c0,
          _0x2ec7d6 = 0.2,
          _0x39e084 = 0x1,
        ) =>
          '<path d="M' +
          _0x1ff448 +
          '\x20' +
          _0x312293 +
          'L' +
          _0x495d43 +
          '\x20' +
          _0x4d70a8 +
          '\x22\x20stroke=\x22' +
          _0x52cef4 +
          '" opacity="' +
          _0x2ec7d6 +
          '\x22\x20stroke-width=\x22' +
          _0x39e084 +
          '"/>',
        _0x399771 = (_0x837093, _0x1d6e09, _0x2b278e, _0x553918 = 0.2, _0x174b97 = _0x28c1c0) =>
          '<circle\x20cx=\x22' +
          _0x837093 +
          '" cy="' +
          _0x1d6e09 +
          '" r="' +
          _0x2b278e +
          '\x22\x20stroke=\x22' +
          _0x174b97 +
          '" fill="none" opacity="' +
          _0x553918 +
          '\x22/>';
      if ('lab' === _0x1b4ff7) {
        for (let _0x59c139 = -0x28; _0x59c139 < 0x1f4; _0x59c139 += 0x26)
          _0x18f622 += _0x35eed3(_0x59c139, 0xb4, _0x59c139, 0x3ac, _0x28c1c0, 0.075);
        for (let _0x1006eb = 0xb4; _0x1006eb < 0x3ac; _0x1006eb += 0x26)
          _0x18f622 += _0x35eed3(0x0, _0x1006eb, 0x1c2, _0x1006eb, _0x28c1c0, 0.075);
        _0x18f622 +=
          '<path d="M0 625H130l24-25h142l28 25h126M0 633h450" stroke="' + _0x28c1c0 + '" fill="none" opacity=".2"/>';
        for (let _0x1ec2f3 = 0x0; _0x1ec2f3 < 0x6 + _0x58ac1d; _0x1ec2f3++)
          _0x18f622 += _0x399771(
            0x18 + 0x190 * _0x3024dd(),
            0x10e + 0x12c * _0x3024dd(),
            0x5 + 0xc * _0x3024dd(),
            0.11,
          );
      } else {
        if ('steel' === _0x1b4ff7) {
          for (let _0x289dda = -0xc8; _0x289dda < 0x226; _0x289dda += 0x5f)
            _0x18f622 += _0x35eed3(_0x289dda, 0x0, _0x289dda + 0x154, 0x44c, _0x28c1c0, 0.09, 0xc);
          _0x18f622 +=
            '<path d="M-20 220h100l24 24v360l-24 25h-100M470 220H370l-24 24v360l24 25h100" fill="none" stroke="' +
            _0x28c1c0 +
            '" opacity=".25" stroke-width="2"/>';
          for (let _0x11c630 = 0xd2; _0x11c630 < 0x384; _0x11c630 += 0x4d)
            ((_0x18f622 += _0x399771(0x12, _0x11c630, 0x4, 0.35) + _0x399771(0x1b0, _0x11c630, 0x4, 0.35)),
              (_0x18f622 +=
                _0x35eed3(0x0, _0x11c630 + 0x12, 0x1c, _0x11c630 + 0x12, _0xa95409, 0.25, 0x2) +
                _0x35eed3(0x1a6, _0x11c630 + 0x12, 0x1c2, _0x11c630 + 0x12, _0xa95409, 0.25, 0x2)));
        } else {
          if ('toxic' === _0x1b4ff7) {
            for (let _0x23e965 = 0x0; _0x23e965 < 0x1c; _0x23e965++) {
              const _0x2aed74 = 0x1c2 * _0x3024dd(),
                _0x4f39dc = 0x3e8 * _0x3024dd(),
                _0x2e92a3 = 0x4 + 0x23 * _0x3024dd();
              ((_0x18f622 += _0x399771(_0x2aed74, _0x4f39dc, _0x2e92a3, 0.09 + 0.1 * _0x3024dd())),
                (_0x18f622 +=
                  '<circle cx="' +
                  (_0x2aed74 - 0.28 * _0x2e92a3) +
                  '\x22\x20cy=\x22' +
                  (_0x4f39dc - 0.33 * _0x2e92a3) +
                  '\x22\x20r=\x22' +
                  Math.max(0x1, 0.15 * _0x2e92a3) +
                  '" fill="' +
                  _0x28c1c0 +
                  '" opacity=".15"/>'));
            }
            _0x18f622 +=
              '<path d="M-20 760Q70 690 150 748T310 730T480 735V1100H-20Z" fill="url(#theme-cloud)" opacity=".65"/>';
            for (let _0xa09cfd = 0x0; _0xa09cfd < 0xf; _0xa09cfd++)
              _0x225b7f +=
                '<path\x20d=\x22M' +
                0x1c2 * _0x3024dd() +
                '\x20' +
                (0x46 + 0x230 * _0x3024dd()) +
                'l10\x206v12l-10\x206-10-6v-12Z\x22\x20stroke=\x22' +
                _0xa95409 +
                '" fill="none" opacity=".2"/>';
          } else {
            if ('crystal' === _0x1b4ff7) {
              for (let _0x2e6497 = 0x0; _0x2e6497 < 0xd; _0x2e6497++) {
                let _0x561114 = _0x3024dd() < 0.5 ? 0x41 * _0x3024dd() - 0x1e : 0x181 + 0x50 * _0x3024dd(),
                  _0x5b2e40 = 0x3e8 * _0x3024dd(),
                  _0x2c8384 = 0x64 + 0x12c * _0x3024dd(),
                  _0x130c20 = 0x1e + 0x46 * _0x3024dd();
                ((_0x18f622 +=
                  '<path\x20d=\x22M' +
                  _0x561114 +
                  '\x20' +
                  _0x5b2e40 +
                  'l' +
                  _0x130c20 +
                  '\x20' +
                  0.25 * _0x2c8384 +
                  '\x20' +
                  0.18 * -_0x130c20 +
                  '\x20' +
                  0.75 * _0x2c8384 +
                  '\x20' +
                  0.72 * -_0x130c20 +
                  '\x20' +
                  0.25 * -_0x2c8384 +
                  'Z" fill="' +
                  _0xa95409 +
                  '" fill-opacity=".04" stroke="' +
                  _0x28c1c0 +
                  '" stroke-opacity=".22"/>'),
                  (_0x18f622 +=
                    _0x35eed3(
                      _0x561114,
                      _0x5b2e40,
                      _0x561114 + 0.52 * _0x130c20,
                      _0x5b2e40 + 0.6 * _0x2c8384,
                      _0x28c1c0,
                      0.18,
                    ) +
                    _0x35eed3(
                      _0x561114 + _0x130c20,
                      _0x5b2e40 + 0.25 * _0x2c8384,
                      _0x561114 + 0.52 * _0x130c20,
                      _0x5b2e40 + 0.6 * _0x2c8384,
                      _0x28c1c0,
                      0.18,
                    )));
              }
              for (let _0x270bb6 = 0x0; _0x270bb6 < 0xf; _0x270bb6++)
                _0x225b7f += _0x35eed3(0x1c2 * _0x3024dd(), 0x3e8 * _0x3024dd(), 0xe1, 0x1b8, _0xa95409, 0.025);
            } else {
              if ('reactor' === _0x1b4ff7) {
                for (const _0x345bfb of [0xb2, 0xbd, 0xdc, 0xfe, 0x124, 0x15e])
                  _0x18f622 += _0x399771(0xe1, 0x181, _0x345bfb, 0.07 + (_0x345bfb % 0x3) * 0.025);
                for (let _0xebb503 = 0x0; _0xebb503 < 0x18; _0xebb503++) {
                  const _0x19992c = (_0xebb503 / 0x18) * Math.PI * 0x2,
                    _0x4a7cc8 = 0xdc;
                  _0x18f622 += _0x35eed3(
                    0xe1 + Math.cos(_0x19992c) * _0x4a7cc8,
                    0x181 + Math.sin(_0x19992c) * _0x4a7cc8,
                    0xe1 + Math.cos(_0x19992c) * (_0x4a7cc8 + 0xc),
                    0x181 + Math.sin(_0x19992c) * (_0x4a7cc8 + 0xc),
                    _0x28c1c0,
                    0.27,
                    0x2,
                  );
                }
                _0x18f622 +=
                  '<path d="M0 88h90l24 24v90M450 88h-90l-24 24v90M0 838h90l24-24v-90M450 838h-90l-24-24v-90" stroke="' +
                  _0xa95409 +
                  '" fill="none" opacity=".25"/>';
                for (let _0x511902 = 0x0; _0x511902 < 0x9; _0x511902++)
                  _0x225b7f += _0x35eed3(
                    0x19 + 0x6 * _0x511902,
                    0x91,
                    0x19 + 0x6 * _0x511902,
                    0xa5,
                    _0x28c1c0,
                    0.23,
                    0x2,
                  );
              } else {
                if ('plasma' === _0x1b4ff7) {
                  for (let _0x33ea2e = 0x0; _0x33ea2e < 0x7; _0x33ea2e++) {
                    const _0x403c08 = 0x50 + 0x334 * _0x3024dd();
                    _0x18f622 +=
                      '<path d="M-80 ' +
                      _0x403c08 +
                      'C40 ' +
                      (_0x403c08 - 0x78) +
                      '\x20110\x20' +
                      (_0x403c08 + 0xc8) +
                      '\x20230\x20' +
                      _0x403c08 +
                      'S410\x20' +
                      (_0x403c08 - 0xb4) +
                      ' 530 ' +
                      _0x403c08 +
                      '\x22\x20fill=\x22none\x22\x20stroke=\x22' +
                      (_0x33ea2e % 0x2 ? _0x28c1c0 : _0xa95409) +
                      '" stroke-width="' +
                      (0x1 + 0x2 * _0x3024dd()) +
                      '" opacity=".1"/>';
                  }
                  _0x18f622 +=
                    '<ellipse cx="225" cy="470" rx="270" ry="75" transform="rotate(-26 225 470)" stroke="' +
                    _0x28c1c0 +
                    '" opacity=".2" fill="none"/>';
                  for (let _0x3f2a8f = 0x0; _0x3f2a8f < 0x8; _0x3f2a8f++)
                    _0x225b7f +=
                      '<path d="M' +
                      0x1c2 * _0x3024dd() +
                      '\x20' +
                      0x3e8 * _0x3024dd() +
                      'l12-19-3 18 13-13-9 26" stroke="' +
                      _0xa95409 +
                      '" opacity=".22" fill="none"/>';
                } else {
                  if ('nebula' === _0x1b4ff7) {
                    _0x18f622 +=
                      '<ellipse cx="50" cy="280" rx="290" ry="170" fill="url(#theme-cloud)" opacity=".8" transform="rotate(-35 50 280)"/><ellipse cx="390" cy="760" rx="310" ry="150" fill="url(#theme-cloud2)" opacity=".8" transform="rotate(-35 390 760)"/>';
                    const _0x65ec59 = Array.from(
                      {
                        length: 0xc,
                      },
                      () => [0x1c2 * _0x3024dd(), 0x3e8 * _0x3024dd()],
                    );
                    for (let _0x40b836 = 0x1; _0x40b836 < _0x65ec59.length; _0x40b836++)
                      _0x225b7f += _0x35eed3(..._0x65ec59[_0x40b836 - 0x1], ..._0x65ec59[_0x40b836], _0x28c1c0, 0.1);
                    for (const [_0x38abb1, _0x5e9e76] of _0x65ec59)
                      _0x225b7f +=
                        '<circle cx="' +
                        _0x38abb1 +
                        '" cy="' +
                        _0x5e9e76 +
                        '" r="2" fill="' +
                        _0x28c1c0 +
                        '" opacity=".6"/>';
                  } else {
                    if ('void' === _0x1b4ff7) {
                      _0x18f622 +=
                        '<ellipse\x20cx=\x22225\x22\x20cy=\x22360\x22\x20rx=\x22265\x22\x20ry=\x2252\x22\x20transform=\x22rotate(-24\x20225\x20360)\x22\x20fill=\x22none\x22\x20stroke=\x22' +
                        _0xa95409 +
                        '" stroke-width="11" opacity=".11"/><ellipse cx="225" cy="360" rx="255" ry="42" transform="rotate(-24 225 360)" fill="none" stroke="' +
                        _0x28c1c0 +
                        '" stroke-width="2" opacity=".46"/><circle cx="225" cy="360" r="137" fill="' +
                        _0x49dc91.bg +
                        '\x22/><circle\x20cx=\x22225\x22\x20cy=\x22360\x22\x20r=\x22139\x22\x20stroke=\x22' +
                        _0x28c1c0 +
                        '" stroke-opacity=".32" fill="none"/>';
                      for (let _0x28cda2 = 0xaf; _0x28cda2 < 0x258; _0x28cda2 += 0x34)
                        _0x225b7f +=
                          '<ellipse\x20cx=\x22225\x22\x20cy=\x22360\x22\x20rx=\x22' +
                          _0x28cda2 +
                          '" ry="' +
                          0.77 * _0x28cda2 +
                          '\x22\x20fill=\x22none\x22\x20stroke=\x22' +
                          _0x28c1c0 +
                          '" opacity=".045"/>';
                    } else {
                      if ('chrono' === _0x1b4ff7) {
                        for (let _0x36ecf4 = 0x9b; _0x36ecf4 < 0x226; _0x36ecf4 += 0x2e)
                          _0x18f622 += _0x399771(0xe1, 0x1ae, _0x36ecf4, 0.12);
                        for (let _0x4de3c7 = 0x0; _0x4de3c7 < 0x3c; _0x4de3c7++) {
                          const _0x35eb74 = (_0x4de3c7 / 0x3c) * Math.PI * 0x2,
                            _0x3139f2 = 0xf8;
                          _0x18f622 += _0x35eed3(
                            0xe1 + Math.cos(_0x35eb74) * _0x3139f2,
                            0x1ae + Math.sin(_0x35eb74) * _0x3139f2,
                            0xe1 + Math.cos(_0x35eb74) * (_0x3139f2 + (_0x4de3c7 % 0x5 == 0x0 ? 0x12 : 0x7)),
                            0x1ae + Math.sin(_0x35eb74) * (_0x3139f2 + (_0x4de3c7 % 0x5 == 0x0 ? 0x12 : 0x7)),
                            _0x28c1c0,
                            _0x4de3c7 % 0x5 == 0x0 ? 0.35 : 0.16,
                            0x1,
                          );
                        }
                        for (let _0x5bd871 = 0x0; _0x5bd871 < 0x8; _0x5bd871++) {
                          const _0x1ec450 = 0x3e8 * _0x3024dd();
                          _0x225b7f +=
                            '<path\x20d=\x22M0\x20' +
                            _0x1ec450 +
                            'h45l15 15h50M450 ' +
                            (_0x1ec450 + 0x23) +
                            'h-45l-15-15h-50" stroke="' +
                            _0xa95409 +
                            '" opacity=".2" fill="none"/>';
                        }
                      } else {
                        for (let _0x3f5685 = 0x0; _0x3f5685 < 0x10; _0x3f5685++) {
                          const _0x1e9d6e = (_0x3f5685 / 0x10) * Math.PI * 0x2;
                          _0x18f622 += _0x35eed3(
                            0xe1 + 0x78 * Math.cos(_0x1e9d6e),
                            0x186 + 0x78 * Math.sin(_0x1e9d6e),
                            0xe1 + 0x28a * Math.cos(_0x1e9d6e),
                            0x186 + 0x28a * Math.sin(_0x1e9d6e),
                            _0x28c1c0,
                            0.12,
                            _0x3f5685 % 0x2 == 0x0 ? 0x2 : 0x1,
                          );
                        }
                        for (const _0x63f22 of [0x91, 0x99, 0xb9, 0xdc, 0x136, 0x190])
                          _0x18f622 += _0x399771(0xe1, 0x186, _0x63f22, 0.2);
                        for (let _0xfc9c51 = 0x0; _0xfc9c51 < 0x3; _0xfc9c51++)
                          _0x18f622 +=
                            '<path\x20d=\x22M225\x20' +
                            (0xb4 - 0x12 * _0xfc9c51) +
                            'L' +
                            (0x19f + 0x10 * _0xfc9c51) +
                            '\x20' +
                            (0x1ef + 0x9 * _0xfc9c51) +
                            'H' +
                            (0x23 - 0x10 * _0xfc9c51) +
                            'Z" transform="rotate(' +
                            0x1e * _0xfc9c51 +
                            '\x20225\x20390)\x22\x20fill=\x22none\x22\x20stroke=\x22' +
                            _0xa95409 +
                            '\x22\x20opacity=\x22.15\x22/>';
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      const _0x29fca6 = [];
      for (let _0x4c7a71 = 0x0; _0x4c7a71 < 0xc + 0x2 * _0x58ac1d; _0x4c7a71++) {
        const _0x51df5e = 0x1c2 * _0x3024dd(),
          _0x47f56c = 0x3e8 * _0x3024dd(),
          _0x19e772 = _0x3024dd() > 0.9 ? 1.6 : 0.65;
        _0x29fca6.push(
          '<circle cx="' +
            _0x51df5e.toFixed(0x1) +
            '" cy="' +
            _0x47f56c.toFixed(0x1) +
            '" r="' +
            _0x19e772 +
            '\x22\x20fill=\x22' +
            _0x28c1c0 +
            '\x22\x20opacity=\x22' +
            (0.12 + 0.4 * _0x3024dd()).toFixed(0x2) +
            '"/>',
        );
      }
      const _0x5bee07 = (
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 1000" preserveAspectRatio="xMidYMid slice"><defs><radialGradient id="theme-cloud"><stop stop-color="' +
        _0x28c1c0 +
        '" stop-opacity=".22"/><stop offset="1" stop-color="' +
        _0x28c1c0 +
        '\x22\x20stop-opacity=\x220\x22/></radialGradient><radialGradient\x20id=\x22theme-cloud2\x22><stop\x20stop-color=\x22' +
        _0xa95409 +
        '" stop-opacity=".24"/><stop offset="1" stop-color="' +
        _0xa95409 +
        '" stop-opacity="0"/></radialGradient><linearGradient id="theme-shade" x2="0" y2="1"><stop stop-color="' +
        _0x49dc91.bg +
        '" stop-opacity=".35"/><stop offset=".48" stop-color="' +
        _0x49dc91.bg +
        '\x22\x20stop-opacity=\x22.06\x22/><stop\x20offset=\x221\x22\x20stop-color=\x22' +
        _0x49dc91.bg +
        '" stop-opacity=".5"/></linearGradient></defs><rect width="450" height="1000" fill="' +
        _0x49dc91.bg +
        '"/><ellipse cx="225" cy="360" rx="350" ry="440" fill="url(#theme-cloud)"/>' +
        _0x18f622 +
        _0x225b7f +
        _0x29fca6.join('') +
        '<rect width="450" height="1000" fill="url(#theme-shade)"/></svg>'
      )
        .replaceAll('theme-cloud2', 'theme-' + _0x49dc91.id + '-cloud2')
        .replaceAll('theme-cloud', 'theme-' + _0x49dc91.id + '-cloud')
        .replaceAll('theme-shade', 'theme-' + _0x49dc91.id + '-shade');
      return (_0x52e1da.set(_0x49dc91.id, _0x5bee07), _0x5bee07);
    },
  }),
    'object' == typeof module && module.exports && (module.exports = _0x15e1e3.KizyacThemes));
})('undefined' != typeof window ? window : globalThis);
