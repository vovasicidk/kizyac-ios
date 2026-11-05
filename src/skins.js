(function (_0x537cf6) {
  'use strict';

  const _0x376ea8 = _0x537cf6.KizyacCore || ('function' == typeof require ? require('./core.js') : null),
    _0x49f749 = [
      {
        id: 'original',
        name: 'Твоя банка',
        at: 0x0,
        color: '#c2f36a',
        desc: 'Тот\x20самый\x20кизяк\x20с\x20твоей\x20фотографии.',
      },
      {
        id: 'steel',
        name: 'Лабораторный',
        at: 0x3,
        color: '#b8d3e0',
        desc: 'Стальной корпус, защитные полосы и маркировка образца.',
      },
      {
        id: 'toxic',
        name: 'Токсичный',
        at: 0x6,
        color: '#a8ff44',
        desc: 'Неоновая жижа, светящиеся пузыри и едкое свечение.',
      },
      {
        id: 'crystal',
        name: 'Кристаллический',
        at: 0xa,
        color: '#65e6ff',
        desc: 'Гранёный\x20кристалл\x20с\x20ледяным\x20светом\x20внутри.',
      },
      {
        id: 'reactor',
        name: 'Реакторный',
        at: 0xf,
        color: '#ffc05e',
        desc: 'Бронированный\x20реактор,\x20светящиеся\x20кольца\x20и\x20раскалённое\x20ядро.',
      },
      {
        id: 'plasma',
        name: 'Плазменный',
        at: 0x14,
        color: '#d4a1ff',
        desc: 'Плазма, энергетические разряды и белый центр.',
      },
      {
        id: 'nebula',
        name: 'Космический',
        at: 0x19,
        color: '#8ea8ff',
        desc: 'Туманность и целое звёздное небо внутри банки.',
      },
      {
        id: 'void',
        name: 'Сингулярность',
        at: 0x1e,
        color: '#ffd090',
        desc: 'Тёмное ядро с ярким диском искажения вокруг.',
      },
      {
        id: 'chrono',
        name: 'Временной',
        at: 0x23,
        color: '#81f7df',
        desc: 'Кольца\x20времени,\x20световые\x20схемы\x20и\x20парящие\x20частицы.',
      },
      {
        id: 'absolute',
        name: 'Абсолютный',
        at: 0x27,
        color: '#ffe5a1',
        desc: 'Золото,\x20белое\x20ядро,\x20ореол\x20и\x20корона\x20последней\x20банки.',
      },
    ],
    _0x3018af = (_0x3bfdd1) => Math.max(_0x3bfdd1.bestStage, _0x376ea8.stage(_0x3bfdd1)),
    _0x7dc85c = (_0x489755, _0x5a8325) =>
      _0x49f749.some(
        (_0x439978) =>
          _0x439978.id === _0x5a8325 &&
          (_0x3018af(_0x489755) >= _0x439978.at ||
            (_0x489755.cheats?.['unlocked'] && _0x489755.cheats.used && _0x489755.cheats.allSkins)),
      );
  function _0x218051(_0x4bc85a) {
    _0x4bc85a.skin || (_0x4bc85a.skin = 'auto');
    const _0x30bc00 = _0x49f749.find((_0x52f648) => _0x52f648.id === _0x4bc85a.skin);
    return _0x30bc00 && _0x7dc85c(_0x4bc85a, _0x30bc00.id)
      ? _0x30bc00
      : _0x49f749.filter((_0x404ccb) => _0x7dc85c(_0x4bc85a, _0x404ccb.id)).slice(-0x1)[0x0];
  }
  function _0x595dcb(_0x43f3de, _0x11266d = 'skin', _0x113667 = 0x9f) {
    const _0x156cf6 = _0x49f749.find((_0x55c3b6) => _0x55c3b6.id === _0x43f3de) || _0x49f749[0x0],
      _0x31b030 = (_0xa835cc) => _0x11266d + '-' + _0xa835cc;
    if ('original' === _0x43f3de)
      return {
        body: '',
        extra: '',
      };
    const _0x3d185e = {
        steel: ['#edf8ff', '#687b8b', '#d7e6ed'],
        toxic: ['#ceff63', '#215a12', '#66e21c'],
        crystal: ['#d7ffff', '#186dce', '#53ceee'],
        reactor: ['#10202b', '#263a46', '#0a141b'],
        plasma: ['#ffa9ff', '#3b156e', '#b34aff'],
        nebula: ['#071336', '#351c69', '#0b2844'],
        void: ['#070a10', '#14171f', '#030406'],
        chrono: ['#183f44', '#163736', '#4baaa7'],
        absolute: ['#fff7d8', '#b77e29', '#f7d57c'],
      }[_0x43f3de],
      _0x2627ce =
        '<defs><linearGradient id="' +
        _0x31b030('base') +
        '" x1="0" y1="0" x2="1" y2="0"><stop stop-color="' +
        _0x3d185e[0x1] +
        '"/><stop offset=".28" stop-color="' +
        _0x3d185e[0x0] +
        '"/><stop offset=".64" stop-color="' +
        _0x3d185e[0x2] +
        '\x22/><stop\x20offset=\x221\x22\x20stop-color=\x22' +
        _0x3d185e[0x1] +
        '\x22/></linearGradient><radialGradient\x20id=\x22' +
        _0x31b030('glow') +
        '"><stop stop-color="#fff"/><stop offset=".16" stop-color="' +
        _0x156cf6.color +
        '"/><stop offset="1" stop-color="' +
        _0x156cf6.color +
        '" stop-opacity="0"/></radialGradient><clipPath id="' +
        _0x31b030('body') +
        '"><rect x="12" y="' +
        _0x113667 +
        '\x22\x20width=\x22330\x22\x20height=\x22635\x22/></clipPath></defs>';
    let _0x2cd103 =
      '<rect\x20x=\x2210\x22\x20y=\x22' +
      _0x113667 +
      '\x22\x20width=\x22330\x22\x20height=\x22635\x22\x20fill=\x22url(#' +
      _0x31b030('base') +
      ')"/>';
    const _0x3de23f = (_0x54fabc, _0x3da964, _0x34adbb = 0x3, _0xa0f29 = 0x1) =>
        '<ellipse\x20cx=\x22175\x22\x20cy=\x22' +
        _0x54fabc +
        '" rx="139" ry="15" fill="none" stroke="' +
        _0x3da964 +
        '" stroke-width="' +
        _0x34adbb +
        '" opacity="' +
        _0xa0f29 +
        '"/>',
      _0x975fae = (_0x572ee8, _0x3e96ea, _0x1bbf61, _0x4b77cc, _0xbcca94 = 0x1) =>
        '<circle cx="' +
        _0x572ee8 +
        '\x22\x20cy=\x22' +
        _0x3e96ea +
        '" r="' +
        _0x1bbf61 +
        '" fill="' +
        _0x4b77cc +
        '" opacity="' +
        _0xbcca94 +
        '"/>';
    let _0x5b0068 = '';
    if ('steel' === _0x43f3de) {
      for (let _0x48e712 = 0x104; _0x48e712 < 0x2d0; _0x48e712 += 0x50)
        _0x2cd103 += '<path\x20d=\x22M30\x20' + _0x48e712 + 'h290" stroke="#374b57" stroke-width="2" opacity=".55"/>';
      _0x2cd103 +=
        '<path d="M64 220v493m222-493v493" stroke="#effaff" stroke-width="3" opacity=".55"/><rect x="89" y="379" width="175" height="126" rx="13" fill="#253b43"/><text x="176" y="453" text-anchor="middle" font-family="monospace" font-size="46" fill="#c8f674">KZ</text>';
      for (let _0x18d247 = 0x0; _0x18d247 < 0x8; _0x18d247++)
        _0x2cd103 +=
          '<path d="m' +
          (0x28 + 0x24 * _0x18d247) +
          ' 615-22 46" stroke="' +
          (_0x18d247 % 0x2 ? '#24352d' : '#bfe960') +
          '" stroke-width="18"/>';
      for (const [_0x2d9a70, _0x1b994d] of [
        [0x3b, 0x104],
        [0x122, 0x104],
        [0x4b, 0x2a8],
        [0x113, 0x2a8],
      ])
        _0x2cd103 += _0x975fae(_0x2d9a70, _0x1b994d, 0x5, '#334b58');
    }
    if ('toxic' === _0x43f3de) {
      _0x2cd103 += '<path d="M12 310q38-40 80 0t85 0t85 0t85 0v470H12Z" fill="#6bff1d" opacity=".6"/>';
      for (let _0x3301ed = 0x0; _0x3301ed < 0x14; _0x3301ed++)
        _0x2cd103 += _0x975fae(
          0x32 + ((0x43 * _0x3301ed) % 0xf0),
          0xf0 + ((0x59 * _0x3301ed) % 0x1c2),
          0x5 + (_0x3301ed % 0x5) * 0x3,
          '#d6ff8c',
          0.25 + (_0x3301ed % 0x3) * 0.17,
        );
      _0x2cd103 +=
        '<path d="m111 405 33 51-20 53 49 41m66-219-28 70 30 30" fill="none" stroke="#f2ffc7" stroke-width="5" opacity=".75"/>' +
        _0x3de23f(0x2bc, '#e7ff97', 0x4, 0.6);
    }
    if ('crystal' === _0x43f3de) {
      const _0x565112 = [
        ['28,175 178,250 60,399', '#b8ffff'],
        ['178,250 324,170 296,411', '#78c6ff'],
        ['60,399\x20178,250\x20219,480', '#32a6f0'],
        ['60,399\x20219,480\x2088,690', '#cdfaff'],
        ['219,480\x20296,411\x20273,690', '#198bd8'],
        ['88,690 219,480 175,767', '#5bd9ff'],
        ['219,480 273,690 175,767', '#ccffff'],
      ];
      for (const [_0x1593c7, _0x207373] of _0x565112)
        _0x2cd103 +=
          '<polygon\x20points=\x22' +
          _0x1593c7 +
          '" fill="' +
          _0x207373 +
          '\x22\x20opacity=\x22.65\x22\x20stroke=\x22#eaffff\x22\x20stroke-opacity=\x22.38\x22\x20stroke-width=\x222\x22/>';
      _0x2cd103 +=
        '<path\x20d=\x22m72\x20244\x2096\x2080-60\x20145m76-149\x2075\x20137-52\x20183\x22\x20fill=\x22none\x22\x20stroke=\x22#efffff\x22\x20stroke-width=\x224\x22\x20opacity=\x22.8\x22/>';
    }
    if ('reactor' === _0x43f3de) {
      _0x2cd103 +=
        '<rect x="111" y="208" width="128" height="513" rx="35" fill="#090e12"/><rect x="139" y="228" width="72" height="474" rx="25" fill="url(#' +
        _0x31b030('glow') +
        ')"/>';
      for (let _0x51516f = 0xfa; _0x51516f <= 0x2b2; _0x51516f += 0x3e)
        _0x2cd103 +=
          _0x3de23f(_0x51516f, _0x156cf6.color, 0x9, 0.9) +
          '<rect x="31" y="' +
          (_0x51516f - 0x9) +
          '\x22\x20width=\x2265\x22\x20height=\x2218\x22\x20rx=\x224\x22\x20fill=\x22#485b64\x22/><rect\x20x=\x22254\x22\x20y=\x22' +
          (_0x51516f - 0x9) +
          '\x22\x20width=\x2265\x22\x20height=\x2218\x22\x20rx=\x224\x22\x20fill=\x22#485b64\x22/>';
      _0x2cd103 += '<path d="M75 196v540m201-540v540" stroke="#79919b" stroke-width="15"/>';
    }
    if ('plasma' === _0x43f3de) {
      _0x2cd103 +=
        '<ellipse\x20cx=\x22175\x22\x20cy=\x22455\x22\x20rx=\x22133\x22\x20ry=\x22275\x22\x20fill=\x22url(#' +
        _0x31b030('glow') +
        ')"/>';
      for (let _0x4f3c7c = 0x0; _0x4f3c7c < 0x9; _0x4f3c7c++)
        _0x2cd103 +=
          '<path d="M' +
          (0x37 + 0x1b * _0x4f3c7c) +
          '\x20227q-40\x20115\x2018\x20200t-5\x20230\x22\x20fill=\x22none\x22\x20stroke=\x22' +
          (_0x4f3c7c % 0x2 ? '#ffb9ff' : '#f6efff') +
          '" stroke-width="' +
          (_0x4f3c7c % 0x2 ? 0x3 : 0x5) +
          '" opacity=".6"/>';
      _0x5b0068 =
        '<ellipse cx="175" cy="482" rx="187" ry="27" fill="none" stroke="#e0bbff" stroke-width="4" opacity=".65"/>';
    }
    if ('nebula' === _0x43f3de) {
      _0x2cd103 +=
        '<ellipse cx="115" cy="440" rx="125" ry="225" fill="#752dc9" opacity=".6"/><ellipse cx="230" cy="546" rx="122" ry="191" fill="#2e9ec7" opacity=".45"/>';
      for (let _0x110fb4 = 0x0; _0x110fb4 < 0x46; _0x110fb4++)
        _0x2cd103 += _0x975fae(
          0x23 + ((0x61 * _0x110fb4) % 0x10e),
          0xb9 + ((0x71 * _0x110fb4) % 0x226),
          0x1 + (_0x110fb4 % 0x3),
          '#dcefff',
          0.4 + (_0x110fb4 % 0x3) * 0.2,
        );
      _0x2cd103 +=
        '<path d="m82 343 57 47 92-61-25 124-84 69 66 75" fill="none" stroke="#a4e5ff" stroke-width="2" opacity=".7"/>';
      for (const [_0x160a5a, _0x5593b1] of [
        [0x52, 0x157],
        [0x8b, 0x186],
        [0xe7, 0x149],
        [0xce, 0x1c5],
        [0x7a, 0x20a],
        [0xbc, 0x255],
      ])
        _0x2cd103 += _0x975fae(_0x160a5a, _0x5593b1, 0x5, '#fff3ca');
    }
    if (
      ('void' === _0x43f3de &&
        ((_0x2cd103 +=
          '<ellipse cx="175" cy="460" rx="134" ry="208" fill="url(#' +
          _0x31b030('glow') +
          ')\x22/><ellipse\x20cx=\x22175\x22\x20cy=\x22460\x22\x20rx=\x2287\x22\x20ry=\x22129\x22\x20fill=\x22#04060b\x22\x20stroke=\x22#ffe0a3\x22\x20stroke-width=\x225\x22/>'),
        (_0x5b0068 =
          '<ellipse\x20cx=\x22175\x22\x20cy=\x22460\x22\x20rx=\x22196\x22\x20ry=\x2236\x22\x20fill=\x22none\x22\x20stroke=\x22#ffcb75\x22\x20stroke-width=\x228\x22\x20transform=\x22rotate(-17\x20175\x20460)\x22/><ellipse\x20cx=\x22175\x22\x20cy=\x22460\x22\x20rx=\x22199\x22\x20ry=\x2240\x22\x20fill=\x22none\x22\x20stroke=\x22#fff1c8\x22\x20stroke-width=\x222\x22\x20transform=\x22rotate(-17\x20175\x20460)\x22/>'),
        (_0x2cd103 += _0x3de23f(0xdc, '#735e47', 0x3, 0.8) + _0x3de23f(0x2cd, '#735e47', 0x3, 0.8))),
      'chrono' === _0x43f3de)
    ) {
      _0x2cd103 += '<ellipse cx="175" cy="460" rx="90" ry="193" fill="#08292b" stroke="#c2fff3" stroke-width="4"/>';
      for (let _0x54e06c = 0x0; _0x54e06c < 0xc; _0x54e06c++) {
        const _0x411bca = (_0x54e06c * Math.PI) / 0x6;
        _0x2cd103 +=
          '<path d="M' +
          (0xaf + 0x4a * Math.cos(_0x411bca)) +
          '\x20' +
          (0x1cc + 0x99 * Math.sin(_0x411bca)) +
          'l' +
          0xc * -Math.cos(_0x411bca) +
          '\x20' +
          0x12 * -Math.sin(_0x411bca) +
          '" stroke="#c3fff2" stroke-width="4"/>';
      }
      _0x2cd103 += '<path d="M175 343v117l48 69" fill="none" stroke="#e9fff6" stroke-width="7"/>';
      for (let _0x58e2c6 = 0x0; _0x58e2c6 < 0x6; _0x58e2c6++)
        _0x2cd103 += _0x3de23f(0xfa + 0x55 * _0x58e2c6, '#75e7d4', 0x3, 0.6);
      _0x5b0068 =
        '<ellipse cx="175" cy="456" rx="184" ry="45" fill="none" stroke="#bdfff2" stroke-width="3" transform="rotate(22 175 456)"/>';
    }
    if ('absolute' === _0x43f3de) {
      _0x2cd103 +=
        '<ellipse cx="175" cy="460" rx="100" ry="250" fill="url(#' +
        _0x31b030('glow') +
        ')\x22/><path\x20d=\x22M63\x20222q112\x2055\x20223\x200M58\x20706q117-55\x20234\x200\x22\x20fill=\x22none\x22\x20stroke=\x22#8c591a\x22\x20stroke-width=\x2212\x22/>';
      for (let _0x931567 = 0x0; _0x931567 < 0x7; _0x931567++)
        _0x2cd103 +=
          '<path\x20d=\x22m' +
          (0x43 + 0x23 * _0x931567) +
          '\x20280\x2014\x2080-14\x2080\x2014\x2080-14\x2080\x22\x20fill=\x22none\x22\x20stroke=\x22#fff6c5\x22\x20stroke-width=\x223\x22\x20opacity=\x22.7\x22/>';
      ((_0x2cd103 +=
        '<path d="m175 310 24 107 59 43-59 43-24 107-24-107-59-43 59-43Z" fill="#fffce8" stroke="#eac36c" stroke-width="4"/>'),
        (_0x5b0068 =
          '<path d="m82 49 20-61 48 38 25-52 27 52 48-38 20 61Z" fill="#ffe9a7" stroke="#ac7a2b" stroke-width="4"/>' +
          _0x3de23f(0x9a, '#ffebaf', 0x7, 0.95) +
          '<ellipse\x20cx=\x22175\x22\x20cy=\x22483\x22\x20rx=\x22196\x22\x20ry=\x2231\x22\x20fill=\x22none\x22\x20stroke=\x22#fff1bc\x22\x20stroke-width=\x225\x22/>'));
    }
    return (
      (_0x2cd103 +=
        '<path\x20d=\x22M64\x20' +
        (_0x113667 + 0x14) +
        'v490\x22\x20stroke=\x22#fff\x22\x20stroke-width=\x2210\x22\x20opacity=\x22.14\x22/>'),
      {
        body: _0x2627ce + '<g clip-path="url(#' + _0x31b030('body') + ')\x22>' + _0x2cd103 + '</g>',
        extra: _0x5b0068,
      }
    );
  }
  let _0x1d18ab = '';
  const _0x161f73 = _0x376ea8.restore;
  _0x376ea8.restore = function (_0x253754, _0x588eac) {
    const _0x133413 = _0x161f73(_0x253754, _0x588eac);
    let _0x4e2f29;
    try {
      _0x4e2f29 = 'string' == typeof _0x253754 ? JSON.parse(_0x253754) : _0x253754;
    } catch (_0x3ec8d8) {}
    return (
      (_0x133413.state.skin =
        _0x4e2f29 && ('auto' === _0x4e2f29.skin || _0x49f749.some((_0x50a8b4) => _0x50a8b4.id === _0x4e2f29.skin))
          ? _0x4e2f29.skin
          : 'auto'),
      _0x133413
    );
  };
  const _0x32f022 = {
    SKINS: _0x49f749,
    level: _0x3018af,
    unlocked: _0x7dc85c,
    active: _0x218051,
    select: function (_0x4ddaa1, _0x4044d4) {
      return !(('auto' !== _0x4044d4 && !_0x7dc85c(_0x4ddaa1, _0x4044d4)) || ((_0x4ddaa1.skin = _0x4044d4), 0x0));
    },
    art: _0x595dcb,
    thumbnail: function (_0x1249c7) {
      const _0x4d9a51 = 'thumb-' + _0x1249c7,
        _0x4d6a28 = _0x49f749.find((_0x656485) => _0x656485.id === _0x1249c7) || _0x49f749[0x0],
        _0x5b7289 =
          'M24 40Q26 11 175 12Q309 12 322 38L329 128Q330 149 322 158L318 283L297 694Q287 747 241 760Q182 782 124 763Q66 746 55 691L23 178Q20 165 24 151Z',
        _0x37237b = _0x595dcb(_0x1249c7, _0x4d9a51);
      return (
        '<svg class="skin-preview" viewBox="-35 -35 420 850" aria-hidden="true"><defs><clipPath id="' +
        _0x4d9a51 +
        '-clip\x22><path\x20d=\x22' +
        _0x5b7289 +
        '"/></clipPath></defs><g clip-path="url(#' +
        _0x4d9a51 +
        '-clip)\x22><image\x20href=\x22kizyac-original-2.jpg\x22\x20x=\x22-257\x22\x20y=\x22-350\x22\x20width=\x22865\x22\x20height=\x221536\x22\x20preserveAspectRatio=\x22none\x22/>' +
        _0x37237b.body +
        '</g>' +
        _0x37237b.extra +
        '<path\x20d=\x22' +
        _0x5b7289 +
        '\x22\x20fill=\x22none\x22\x20stroke=\x22' +
        _0x4d6a28.color +
        '" stroke-opacity=".35" stroke-width="3"/></svg>'
      );
    },
    apply: function (_0xd414e8) {
      const _0x1c4514 = _0x218051(_0xd414e8),
        _0x3010e5 = _0x1c4514.id + '-' + _0xd414e8.photo,
        _0x391fa3 = 'undefined' == typeof document ? null : document.getElementById('jar-art');
      if (!_0x391fa3) return _0x1c4514;
      let _0x19bfdb = document.getElementById('skin-layer'),
        _0x307690 = document.getElementById('skin-extra');
      if (
        (_0x19bfdb ||
          ((_0x19bfdb = document.createElementNS('http://www.w3.org/2000/svg', 'g')),
          (_0x19bfdb.id = 'skin-layer'),
          document.getElementById('jar-photo').after(_0x19bfdb),
          (_0x307690 = document.createElementNS('http://www.w3.org/2000/svg', 'g')),
          (_0x307690.id = 'skin-extra'),
          _0x391fa3.appendChild(_0x307690)),
        _0x3010e5 !== _0x1d18ab)
      ) {
        const _0x2abf58 = _0x595dcb(_0x1c4514.id, 'main-skin', 0x1 === _0xd414e8.photo ? 0xd2 : 0x9f);
        ((_0x19bfdb.innerHTML = _0x2abf58.body), (_0x307690.innerHTML = _0x2abf58.extra), (_0x1d18ab = _0x3010e5));
      }
      return (
        (document.getElementById('liquid-tint').style.display = 'original' === _0x1c4514.id ? '' : 'none'),
        (document.getElementById('mutation-marks').style.display = 'original' === _0x1c4514.id ? '' : 'none'),
        _0x1c4514
      );
    },
  };
  ((_0x537cf6.KizyacSkins = _0x32f022), 'undefined' != typeof module && module.exports && (module.exports = _0x32f022));
})('undefined' != typeof globalThis ? globalThis : this);
