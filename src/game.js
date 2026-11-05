(function () {
  'use strict';

  const _0x27c69e = window.KizyacCore,
    _0x595465 = _0x27c69e.N,
    _0x59ba98 = (_0x2d3eef) => document.getElementById(_0x2d3eef),
    _0x462fac = (_0x36bc19) => '<svg><use href="#i-' + _0x36bc19 + '"/></svg>',
    _0x23802e = 'kizyac-save-v2',
    _0x32d371 = !!(window.Native && Native.isProtectedStorage && Native.isProtectedStorage());
  let _0x3c67d8 = null;
  try {
    _0x3c67d8 = _0x32d371
      ? Native.load()
      : (window.Native ? Native.load() : null) ||
        localStorage.getItem(_0x23802e) ||
        localStorage.getItem('kizyac-save-v1');
  } catch (_0xb8abbc) {
    _0x3c67d8 = 'KIZYAC_SAVE_ERROR';
  }
  let _0x3a91cd = 'KIZYAC_SAVE_ERROR' === _0x3c67d8,
    _0x268cfb = '';
  if (_0x32d371 && _0x3c67d8 && !_0x3a91cd)
    try {
      const _0x1fc11a = JSON.parse(_0x3c67d8);
      if (0x2 === _0x1fc11a.version) {
        const _0x6d7719 = _0x27c69e.validateProgress(_0x1fc11a);
        _0x6d7719.valid || ((_0x3a91cd = true), (_0x268cfb = _0x6d7719.reason));
      }
    } catch (_0x3455b0) {
      _0x3a91cd = true;
    }
  const _0x20801e = _0x27c69e.restore(_0x3c67d8);
  _0x20801e.valid || (_0x20801e.state.settings.sound = true);
  let _0x4ac0a1 = _0x20801e.state,
    _0x8fffdd = 'reactor',
    _0x13a05e = {
      cascade: 'dimensions',
      decay: 'isotopes',
      cosmos: 'singularity',
      journal: 'awards',
    },
    _0x21bb59 = 0x1,
    _0x15386d = 'chain',
    _0x534d2f = false,
    _0x25ca5f = performance.now(),
    _0x409d92 = 0x0,
    _0x2cef40 = 0x0,
    _0x2e641f = 0x0,
    _0x55e852 = 0x0,
    _0x6963f1 = 0x0,
    _0x50b6a6 = '',
    _0x523d87 = {
      decays: _0x4ac0a1.decays,
      sings: _0x4ac0a1.sings,
      realities: _0x4ac0a1.realities,
    },
    _0x4f54bb = KizyacSkins.SKINS.filter((_0x515f6d) => KizyacSkins.unlocked(_0x4ac0a1, _0x515f6d.id)).slice(-0x1)[0x0]
      .at,
    _0x1ebffc = null,
    _0xc57a64 = 'all',
    _0x41c347 = 0x0,
    _0xdae9af = null,
    _0xa75cfa = null,
    _0x290669 = null,
    _0x2fe0e9 = null,
    _0x526457 = null,
    _0x590207 = 0x0,
    _0x4c1f18 = '',
    _0x55394b = -0x1;
  const _0x2abdce = matchMedia('(prefers-reduced-motion:\x20reduce)').matches,
    _0x46b8ca = (_0x29e381) => _0x595465.format(_0x29e381, _0x4ac0a1.settings.notation),
    _0x149c7b = (_0x13496d) => _0x595465.format(_0x13496d, 'scientific'),
    _0x4818d3 = (_0x1b2f04) => Math.floor(_0x1b2f04).toLocaleString('ru-RU'),
    _0x649767 = (_0x4f84ee) =>
      _0x4f84ee < 0xe10
        ? Math.floor(_0x4f84ee / 0x3c) + ' мин'
        : _0x4f84ee < 0x15180
          ? (_0x4f84ee / 0xe10).toLocaleString('ru-RU', {
              maximumFractionDigits: 0x1,
            }) + '\x20ч'
          : (_0x4f84ee / 0x15180).toLocaleString('ru-RU', {
              maximumFractionDigits: 0x1,
            }) + '\x20д';
  function _0x3e7a4a(_0x23ced7) {
    (clearTimeout(_0x6963f1),
      (_0x59ba98('toast').textContent = _0x23ced7),
      _0x59ba98('toast').classList.add('show'),
      (_0x6963f1 = setTimeout(() => _0x59ba98('toast').classList.remove('show'), 0xc1c)));
  }
  function _0x218d2b() {
    if (_0x4ac0a1.settings.haptic)
      try {
        window.Native && Native.hapticLevel
          ? Native.hapticLevel(_0x4ac0a1.settings.vibrationLevel || 0x0)
          : window.Native
            ? Native.haptic()
            : navigator.vibrate && navigator.vibrate([0x7, 0x12, 0x1c, 0x28][_0x4ac0a1.settings.vibrationLevel || 0x0]);
      } catch (_0x3bfb51) {}
  }
  function _0x3a73bb(_0x31eb7f = false, _0x5a8dbe = false, _0x2818d3 = null) {
    KizyacMedia.sound(_0x4ac0a1, _0x2818d3 || (_0x31eb7f ? 'upgrade' : 'tap'), _0x5a8dbe);
  }
  function _0x236698() {
    if (_0x3a91cd) return false;
    if ((_0x526457 && _0x526457.snapshot(), (_0x4ac0a1.lastSeen = Date.now()), _0x32d371)) {
      const _0x25e9af = _0x27c69e.validateProgress(_0x4ac0a1);
      if (!_0x25e9af.valid) return (_0x3e7a4a('Сохранение не обновлено: ' + _0x25e9af.reason), false);
    }
    const _0x58962d = JSON.stringify(_0x4ac0a1);
    try {
      if (_0x32d371) {
        if (false === Native.save(_0x58962d))
          return (
            _0x3e7a4a(
              'Android\x20отклонил\x20изменение\x20сохранения.\x20Введи\x20код\x20чит-меню\x20для\x20действий\x20редактора.',
            ),
            false
          );
        for (const _0x2c3737 of [_0x23802e, 'kizyac-save-v1', 'kizyac-before-import'])
          localStorage.removeItem(_0x2c3737);
      } else (localStorage.setItem(_0x23802e, _0x58962d), window.Native && Native.save(_0x58962d));
    } catch (_0x2bb2a7) {
      return (_0x3e7a4a('Не удалось записать прогресс'), false);
    }
    return ((_0x409d92 = Date.now()), true);
  }
  function _0x332e9c(_0x232e5d) {
    (_0x59ba98('modal').classList.remove('player-dialog'),
      (_0x59ba98('modal-body').innerHTML = _0x232e5d),
      _0x59ba98('modal').open
        ? (_0x3a73bb(false, false, 'subtab'), _0x526457 && _0x526457.animate(_0x59ba98('modal-body')))
        : (_0x59ba98('modal').showModal(),
          _0x3a73bb(false, false, 'open'),
          _0x526457 && _0x526457.animate(_0x59ba98('modal').querySelector('.modal-inner'))));
  }
  function _0x92cb67() {
    (_0x526457 && _0x526457.close(),
      _0x59ba98('modal').open && (_0x3a73bb(false, false, 'close'), _0x59ba98('modal').close()));
  }
  function _0x187c63(_0x20b164) {
    return '<div class="modal-icon">' + _0x462fac(_0x20b164) + '</div>';
  }
  function _0x5628b1(_0x41b308, _0x25ae76, _0x3cfa10, _0x2b9da1 = 'Продолжить') {
    (_0x332e9c(
      _0x187c63('loop') +
        '<span\x20class=\x22eyebrow\x22>НОВЫЙ\x20ЭКСПЕРИМЕНТ</span><h2>' +
        _0x41b308 +
        '</h2>' +
        _0x25ae76 +
        '<div class="modal-actions"><button class="secondary" data-act="close">Отмена</button><button class="primary" id="confirm-action">' +
        _0x2b9da1 +
        '</button></div>',
    ),
      (_0x59ba98('confirm-action').onclick = () => {
        (_0x3cfa10(),
          _0x218d2b(),
          _0x3a73bb(true, false, 'reset'),
          _0x92cb67(),
          _0x2ea47b(),
          _0x236698(),
          (_0x50b6a6 = ''),
          _0x516d4c(true));
      }));
  }
  function _0x5d1792(_0x29af16, _0x4f6433, _0x4f84ce = true) {
    const _0x1978fb = _0x8fffdd,
      _0x1da3b2 =
        ['reactor', 'cascade', 'decay', 'cosmos', 'journal'].indexOf(_0x29af16) >=
        ['reactor', 'cascade', 'decay', 'cosmos', 'journal'].indexOf(_0x8fffdd)
          ? 0x1
          : -0x1;
    if (!_0x5aa503(_0x29af16))
      return (_0x3e7a4a('Эта\x20возможность\x20появится\x20позже.\x20Следуй\x20текущей\x20подсказке.'), false);
    (_0x4f6433 && _0x3c2e10(_0x29af16, _0x4f6433) && (_0x13a05e[_0x29af16] = _0x4f6433),
      'reactor' === _0x29af16 ||
        _0x3c2e10(_0x29af16, _0x13a05e[_0x29af16]) ||
        (_0x13a05e[_0x29af16] =
          'cascade' === _0x29af16
            ? 'dimensions'
            : 'decay' === _0x29af16
              ? 'isotopes'
              : 'cosmos' === _0x29af16
                ? 'singularity'
                : 'awards'),
      (_0x8fffdd = _0x29af16));
    let _0x540327 = false;
    return (
      _0x4ac0a1.cosmetics.visited.includes(_0x29af16) ||
        (_0x4ac0a1.cosmetics.visited.push(_0x29af16), (_0x540327 = true)),
      'journal' === _0x29af16 &&
        'awards' === _0x13a05e.journal &&
        ((_0x4ac0a1.cosmetics.unread = 0x0), (_0x540327 = true)),
      _0x540327 && _0x236698(),
      _0x29af16 !== _0x1978fb && _0x3a73bb(false, false, 'transition'),
      document
        .querySelectorAll('.page')
        .forEach((_0x52c0f5) => _0x52c0f5.classList.toggle('active', _0x52c0f5.id === 'page-' + _0x29af16)),
      document
        .querySelectorAll('.nav\x20[data-page]')
        .forEach((_0x20ea42) => _0x20ea42.classList.toggle('selected', _0x20ea42.dataset.page === _0x29af16)),
      (_0x50b6a6 = ''),
      _0x516d4c(true),
      window.scrollTo(0x0, 0x0),
      _0x526457 && _0x526457.animate(_0x59ba98('page-' + _0x29af16), false, _0x1da3b2),
      _0x4f84ce && _0xce0256(),
      true
    );
  }
  const _0x912dd8 = [
    [
      'Помощники',
      [
        [
          'cascade',
          'dimensions',
          'Помощники',
          'Покупки,\x20усиление\x20и\x20резонанс',
          'Откроется\x20по\x20мере\x20улучшения\x20клика',
          'каскад измерения усиление резонанс',
        ],
        [
          'cascade',
          'dimensions',
          'Усиление',
          'Новый помощник и ускорение цепи',
          'После открытия усилений',
          'сброс',
          'boost',
        ],
        ['cascade', 'dimensions', 'Резонанс', 'Ускорение всей цепи', 'После открытия резонанса', 'сброс', 'resonance'],
        [
          'cascade',
          'elements',
          'Элементы',
          'Состав\x20банки\x20и\x20реакции',
          'После первого усиления',
          'состав\x20материалы\x20реакции',
        ],
        [
          'cascade',
          'automation',
          'Автоматика',
          'Автопокупки\x20и\x20автоматические\x20сбросы',
          'После первого усиления',
          'авто помощники',
        ],
        [
          'cascade',
          'production',
          'Производство',
          'Скорость каждого помощника',
          'После\x20открытия\x20помощников',
          'статистика\x20добыча',
        ],
        ['cascade', 'modes', 'Режим игры', 'Выбор способа добычи', 'После двух распадов', 'баланс\x20импульс'],
      ],
    ],
    [
      'Развитие',
      [
        [
          'decay',
          'isotopes',
          'Распад\x20и\x20изотопы',
          'Новый цикл и постоянные улучшения',
          'Накопи 1e' + _0x27c69e.CFG.firstDecayAt + ' кизяка за цикл',
          'сброс',
        ],
        [
          'decay',
          'protocols',
          'Протоколы',
          'Испытания\x20с\x20особыми\x20условиями',
          'После двух распадов',
          'испытания',
        ],
        [
          'decay',
          'roadmap',
          'Этапы игры',
          'Условия\x20следующего\x20этапа',
          'После\x20первой\x20сингулярности',
          'цели путь',
        ],
        [
          'cosmos',
          'singularity',
          'Сингулярность',
          'Обмен прогресса на массу',
          'После пяти распадов и восьми рангов протоколов, либо при готовности сингулярности',
          'космос масса',
        ],
        ['cosmos', 'research', 'Исследования', 'Улучшения за массу', 'После\x20первой\x20сингулярности', 'ветки'],
        [
          'cosmos',
          'realities',
          'Реальности и руны',
          'Секторы, ядра и постоянные бонусы',
          'После\x20трёх\x20сингулярностей',
          'ядра\x20руны',
        ],
        [
          'cosmos',
          'fragments',
          'Фрагменты',
          'Модификации\x20помощников',
          'После\x20первой\x20реальности',
          'модификации',
        ],
        [
          'cosmos',
          'finale',
          'Финал',
          'Последний\x20опыт\x20и\x20концовка',
          'После\x20шести\x20секторов',
          'конец\x20стабилизатор',
        ],
      ],
    ],
    [
      'Коллекция',
      [
        [
          'journal',
          'skins',
          'Скины',
          'Внешний\x20вид\x20банки',
          'После знакомства с общим ускорением или первого распада',
          'оформление\x20досье',
        ],
        [
          'journal',
          'awards',
          'Достижения',
          'Полученные и доступные достижения',
          'После\x20знакомства\x20с\x20общим\x20ускорением\x20или\x20первого\x20распада',
          'награды',
        ],
        [
          'journal',
          'records',
          'Рекорды',
          'Лучшие\x20циклы\x20и\x20скорость\x20добычи',
          'После знакомства с общим ускорением или первого распада',
          'статистика',
        ],
        [
          'journal',
          'chronicle',
          'История',
          'Записи лаборатории',
          'После знакомства с общим ускорением или первого распада',
          'сюжет',
        ],
        [
          'journal',
          'archive',
          'Общая статистика',
          'Сбросы,\x20нажатия\x20и\x20фотографии',
          'После\x20знакомства\x20с\x20общим\x20ускорением\x20или\x20первого\x20распада',
          'архив фотографии',
        ],
      ],
    ],
  ];
  function _0x5aa503(_0xf59621) {
    const _0x44b5de = _0x27c69e.learnFeatures(_0x4ac0a1);
    return (
      'reactor' === _0xf59621 ||
      ('cascade' === _0xf59621 && _0x44b5de.cascade) ||
      ('decay' === _0xf59621 && _0x44b5de.decay) ||
      ('cosmos' === _0xf59621 && _0x44b5de.cosmos) ||
      ('journal' === _0xf59621 && _0x44b5de.journal)
    );
  }
  function _0x3c2e10(_0x1586e9, _0x53e0dd) {
    const _0x3a6496 = _0x27c69e.learnFeatures(_0x4ac0a1),
      _0x2d91ea = {
        cascade: {
          dimensions: _0x3a6496.cascade,
          elements: _0x27c69e.Materials.available(_0x4ac0a1),
          production: _0x3a6496.cascade,
          automation: _0x3a6496.automation,
          modes: _0x3a6496.modes,
        },
        decay: {
          isotopes: _0x3a6496.decay,
          protocols: _0x3a6496.protocols,
          roadmap: _0x3a6496.roadmap,
        },
        cosmos: {
          singularity: _0x3a6496.cosmos,
          research: _0x3a6496.research,
          realities: _0x3a6496.realities,
          fragments: _0x4ac0a1.realities > 0x0,
          finale: _0x4ac0a1.realities >= _0x27c69e.Finale.RULES.openAt,
        },
        journal: {
          awards: _0x3a6496.journal,
          skins: _0x3a6496.journal,
          archive: _0x3a6496.journal,
          chronicle: _0x3a6496.journal,
          records: _0x3a6496.journal,
          help: _0x3a6496.journal,
        },
      };
    return !(!_0x2d91ea[_0x1586e9] || !_0x2d91ea[_0x1586e9][_0x53e0dd]);
  }
  function _0xce0256() {
    if (_0x59ba98('modal').open) return;
    const _0x566af3 = _0x27c69e.learnExplanation(_0x4ac0a1, _0x8fffdd, _0x13a05e[_0x8fffdd]);
    _0x566af3 &&
      (_0x27c69e.learnAcknowledge(_0x4ac0a1, _0x566af3.id),
      _0x236698(),
      _0x332e9c(
        '<span class="eyebrow">НОВАЯ ВОЗМОЖНОСТЬ</span><h2>' +
          _0x566af3.title +
          '</h2><p>' +
          _0x566af3.text +
          '</p><button\x20class=\x22primary\x20wide\x22\x20data-act=\x22lesson-ack\x22>Понятно,\x20пробую</button>',
      ));
  }
  function _0x3bd701(_0x2541a6) {
    const _0x4f39b0 = _0x59ba98('page-' + _0x2541a6.page),
      _0x3503b1 = _0x2541a6.selector
        ? _0x4f39b0.querySelector(_0x2541a6.selector)
        : _0x4f39b0.querySelector('.page-heading');
    return _0x3503b1?.['closest']('[hidden]') ? null : _0x3503b1;
  }
  function _0x3c43cc() {
    const _0x29cc4a = _0x27c69e.learnStep(_0x4ac0a1, _0x15386d);
    if (
      (_0x8fffdd !== _0x29cc4a.page || (_0x29cc4a.sub && _0x13a05e[_0x8fffdd] !== _0x29cc4a.sub)) &&
      !_0x5d1792(_0x29cc4a.page, _0x29cc4a.sub, false)
    )
      return;
    const _0x225880 = _0x3bd701(_0x29cc4a);
    if (!_0x225880) return;
    const _0x2f893f = _0x225880.disabled ? _0x225880.closest('.card') : _0x225880;
    (_0x2f893f?.['scrollIntoView']({
      behavior: 'auto',
      block: 'center',
    }),
      _0x225880.disabled ||
        _0x225880.focus({
          preventScroll: true,
        }));
  }
  function _0x1199dc() {
    const _0xebb12f = 0x1 === _0x4ac0a1.photo,
      _0x22bd9e = _0xebb12f
        ? 'M16 48Q16 17 65 12Q176 -8 295 10Q337 16 344 46L341 176Q341 199 333 204L300 680Q296 720 272 735Q230 756 178 752Q95 752 74 704L28 226Q23 210 25 196L14 171Z'
        : 'M24\x2040Q26\x2011\x20175\x2012Q309\x2012\x20322\x2038L329\x20128Q330\x20149\x20322\x20158L318\x20283L297\x20694Q287\x20747\x20241\x20760Q182\x20782\x20124\x20763Q66\x20746\x2055\x20691L23\x20178Q20\x20165\x2024\x20151Z';
    (_0x59ba98('jar-path').setAttribute('d', _0x22bd9e),
      _0x59ba98('jar-outline').setAttribute('d', _0x22bd9e),
      _0x59ba98('jar-photo').setAttribute('href', 'kizyac-original-' + _0x4ac0a1.photo + '.jpg'),
      _0x59ba98('jar-photo').setAttribute('x', _0xebb12f ? '-192' : '-257'),
      _0x59ba98('jar-photo').setAttribute('y', _0xebb12f ? '-250' : '-350'),
      _0x59ba98('jar-photo').setAttribute('width', _0xebb12f ? '735' : '865'),
      _0x59ba98('jar-photo').setAttribute('height', _0xebb12f ? '1306' : '1536'),
      _0x59ba98('liquid-tint').setAttribute('y', _0xebb12f ? '210' : '159'));
  }
  function _0x21f6eb(_0x417f8b, _0x139d76) {
    _0x417f8b.disabled = !_0x139d76;
  }
  document.addEventListener('input', (_0x158b64) => {
    if ('directory-search' !== _0x158b64.target.id) return;
    const _0x4c1ff4 = _0x158b64.target.value.trim().toLocaleLowerCase('ru-RU');
    (document
      .querySelectorAll('[data-search]')
      .forEach(
        (_0x54f58e) => (_0x54f58e.hidden = !_0x54f58e.dataset.search.toLocaleLowerCase('ru-RU').includes(_0x4c1ff4)),
      ),
      document
        .querySelectorAll('.directory-group')
        .forEach((_0x33d860) => (_0x33d860.hidden = !_0x33d860.querySelector('[data-search]:not([hidden])'))),
      (_0x59ba98('directory-empty').hidden = !!document.querySelector('[data-search]:not([hidden])')));
  });
  const _0x4dd49f = (_0x8db67a, _0x210cc4) =>
      '<div class="requirement" data-req="' + _0x8db67a + '"><i></i><span>' + _0x210cc4 + '\x20<b></b></span></div>',
    _0x3311f7 = (_0x10db85, _0x4dd68f = '') =>
      '<div\x20class=\x22section-title\x22><span>' + _0x10db85 + '</span><span>' + _0x4dd68f + '</span></div>',
    _0x3ca6a1 = (_0x1f950d, _0x2d8a81, _0xfe1b65 = '') =>
      '<button class="buy" data-act="' +
      _0x1f950d +
      '\x22\x20data-id=\x22' +
      _0x2d8a81 +
      '\x22\x20' +
      _0xfe1b65 +
      '><b>—</b><small>КУПИТЬ</small></button>';
  function _0x574697() {
    return (
      '<div class="controls"><button class="primary" data-act="max">МАКСИМУМ ВСЁ</button><button class="secondary" data-act="buy-mode" id="buy-mode">ПОКУПКА ×' +
      (0x2710 === _0x21bb59 ? 'МАКС' : _0x21bb59) +
      '</button></div><div\x20id=\x22dimension-list\x22>' +
      _0x27c69e.DIMENSIONS.map(
        (_0x103bf8, _0xa844ba) =>
          '<div class="card dim-card" data-dim="' +
          _0xa844ba +
          '"><div class="dim-symbol">' +
          _0x462fac(_0x103bf8.icon) +
          '</div><div\x20class=\x22dim-main\x22><h3>' +
          ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'][_0xa844ba] +
          '\x20·\x20' +
          _0x103bf8.name +
          '</h3><div\x20class=\x22dim-amount\x22><b\x20data-quantity=\x22' +
          _0xa844ba +
          '\x22>0</b>\x20<span>куплено\x20<b\x20data-bought=\x22' +
          _0xa844ba +
          '">0</b></span></div><div class="dim-rate" data-production="' +
          _0xa844ba +
          '\x22>' +
          _0x103bf8.desc +
          '</div><div class="batch-track"><i data-batch="' +
          _0xa844ba +
          '\x22></i></div></div>' +
          _0x3ca6a1('dim', _0xa844ba) +
          '<div class="helper-foot"><span data-mod-caption="' +
          _0xa844ba +
          '"></span><button class="helper-auto" data-act="helper-auto" data-id="' +
          _0xa844ba +
          '\x22\x20aria-pressed=\x22false\x22></button></div></div>',
      ).join('') +
      '</div><div class="card upgrade-card"><div><h3>Синхронизация <span class="level" id="sync-level"></span></h3><p>Каждый уровень ускоряет все ступени цепи. Позднее рост цены усиливается.</p></div>' +
      _0x3ca6a1('sync', 'sync') +
      '</div>' +
      _0x3311f7('МУТАЦИИ ЛАБОРАТОРИИ') +
      '<div\x20class=\x22reset-grid\x22><div\x20class=\x22card\x22><span\x20class=\x22eyebrow\x22>МАЛЫЙ\x20СБРОС</span><h3>Усиление\x20<span\x20id=\x22boost-count\x22></span></h3><p\x20id=\x22boost-requirement\x22></p><button\x20class=\x22primary\x20wide\x22\x20data-act=\x22boost\x22>Усилить</button></div><div\x20class=\x22card\x22><span\x20class=\x22eyebrow\x22>РЕЗОНАНС</span><h3>Резонанс\x20<span\x20id=\x22res-count\x22></span></h3><p\x20id=\x22res-requirement\x22></p><button\x20class=\x22primary\x20wide\x22\x20data-act=\x22resonance\x22>Создать</button></div></div><div\x20class=\x22info\x22>Усиление\x20сбрасывает\x20измерения,\x20синхронизации\x20и\x20силу\x20тапа.\x20Оно\x20открывает\x20новые\x20измерения\x20и\x20усиливает\x20каждую\x20ступень\x20цепи.\x20Резонанс\x20также\x20сбрасывает\x20усиления.\x20Изотопы\x20и\x20старшие\x20системы\x20остаются.</div>'
    );
  }
  function _0x3040a1() {
    return (
      '<div class="info">Автоматика открывается за прогресс и работает офлайн. Протоколы, исследования и реальности выбираешь ты.</div><button class="secondary wide" data-act="helpers-auto-all">Включить авто для всех помощников</button><div class="card">' +
      [
        [
          'dims',
          'Автоулучшение помощников',
          'После первого усиления. Покупает только помощников с включённым «Авто» в списке измерений.',
        ],
        [
          'ticks',
          'Автосинхронизация',
          'После\x20изотопного\x20модуля\x20«Автосинхронизация»\x20или\x20первой\x20сингулярности.',
        ],
        [
          'isos',
          'Автопокупка изотопных улучшений',
          'После\x202\x20сингулярностей\x20или\x20первой\x20реальности.\x20Покупает\x20по\x20уровню\x20каждого\x20доступного\x20улучшения\x20за\x20шаг.',
        ],
        ['boost', 'Автоусиление', 'После модуля «Автоусиление» или 3 сингулярностей.'],
        ['resonance', 'Авторезонанс', 'Соблюдает\x20заданный\x20предел.'],
        ['decay', 'Автораспад', 'Нужен модуль, исследование «Тихая автоматика» или реальность.'],
        ['sing', 'Автосингулярность', 'После «Тихой автоматики» или реальности.'],
      ]
        .map(
          (_0x13424f) =>
            '<div\x20class=\x22toggle-row\x22><div><b>' +
            _0x13424f[0x1] +
            '</b><small>' +
            _0x13424f[0x2] +
            '</small></div><button class="switch" data-act="auto" data-id="' +
            _0x13424f[0x0] +
            '" role="switch" aria-label="' +
            _0x13424f[0x1] +
            '" aria-checked="false"><i></i></button></div>',
        )
        .join('') +
      '</div><div\x20class=\x22card\x22><h3>Правила\x20автоматизации</h3><div\x20class=\x22input-row\x22><label\x20for=\x22decay-threshold\x22>Распад\x20при\x20награде\x20от<br><small>Например:\x201,\x20100,\x201e12</small></label><input\x20id=\x22decay-threshold\x22\x20data-field=\x22decayAt\x22\x20value=\x22' +
      _0x149c7b(_0x4ac0a1.auto.decayAt) +
      '\x22\x20inputmode=\x22text\x22></div><div\x20class=\x22input-row\x22><label\x20for=\x22sing-threshold\x22>Сингулярность\x20при\x20награде\x20от</label><input\x20id=\x22sing-threshold\x22\x20data-field=\x22singAt\x22\x20value=\x22' +
      _0x149c7b(_0x4ac0a1.auto.singAt) +
      '\x22\x20inputmode=\x22text\x22></div><div\x20class=\x22input-row\x22><label\x20for=\x22boost-limit\x22>Предел\x20усилений</label><input\x20id=\x22boost-limit\x22\x20data-field=\x22boostLimit\x22\x20type=\x22number\x22\x20min=\x224\x22\x20max=\x221000\x22\x20value=\x22' +
      _0x4ac0a1.auto.boostLimit +
      '\x22></div><div\x20class=\x22input-row\x22><label\x20for=\x22res-limit\x22>Предел\x20резонансов</label><input\x20id=\x22res-limit\x22\x20data-field=\x22resLimit\x22\x20type=\x22number\x22\x20min=\x220\x22\x20max=\x22100\x22\x20value=\x22' +
      _0x4ac0a1.auto.resLimit +
      '"></div><div class="input-row"><label for="auto-policy">Покупки</label><select id="auto-policy" data-field="buyMode"><option value="balanced">По 10 за шаг</option><option value="max">Максимум</option><option value="reserve">С запасом 20%</option></select></div><p class="fineprint">Для долгого рывка подними порог автораспада. Иначе автомат будет снова и снова обнулять почти готовую большую награду.</p></div>'
    );
  }
  function _0x220283() {
    return (
      [
        ['balanced', 'Баланс', 'Обычные нажатия и скорость всей цепи.'],
        [
          'active',
          'Импульс',
          'Каждое нажатие даёт 5,5% добычи/сек вместо 2,2%. Каждая ступень цепи немного медленнее.',
        ],
        ['idle', 'Покой', 'Нормальная скорость. Исследования ветки «Покой» усиливают производство, распад и офлайн.'],
        [
          'chain',
          'Каскад',
          'Измерения II–VIII быстрее в 1,5 раза, первое — вдвое медленнее. Выгодно для длинных цепей.',
        ],
      ]
        .map(
          (_0x3008a9, _0x2ab2a3) =>
            '<div\x20class=\x22card\x20mode-card\x20' +
            (_0x4ac0a1.mode === _0x3008a9[0x0] ? 'selected' : '') +
            '\x22><span\x20class=\x22round-mark\x22>' +
            _0x462fac(['flask', 'bolt', 'clock', 'cells'][_0x2ab2a3]) +
            '</span><div><h3>' +
            _0x3008a9[0x1] +
            '</h3><p>' +
            _0x3008a9[0x2] +
            '</p></div><button\x20class=\x22' +
            (_0x4ac0a1.mode === _0x3008a9[0x0] ? 'primary' : 'secondary') +
            '" data-act="mode" data-id="' +
            _0x3008a9[0x0] +
            '\x22>' +
            (_0x4ac0a1.mode === _0x3008a9[0x0] ? 'ВЫБРАН' : 'ВЫБРАТЬ') +
            '</button></div>',
        )
        .join('') +
      '<div class="info">Режим можно менять свободно. Ветки исследований взаимоисключающие: «Импульс», «Покой» или «Помощники». Перестройка исследований возвращает всю потраченную массу, но перезапускает текущую эпоху.</div>'
    );
  }
  function _0x4bed26() {
    return (
      '<div class="card prestige-card"><div class="big-symbol">' +
      _0x462fac('rad') +
      '</div><span class="eyebrow">ПЕРВЫЙ СЛОЙ ПРЕСТИЖА</span><h3>Распад образца</h3><p>Порог — 1e' +
      _0x27c69e.decayRequirement(_0x4ac0a1) +
      '\x20кизяка\x20за\x20текущий\x20цикл.</p><div\x20class=\x22gain-value\x22>+<b\x20data-live=\x22isoGain\x22>0</b></div><p\x20class=\x22subtle\x22>ИЗОТОПОВ\x20ЗА\x20СБРОС</p><div\x20class=\x22progress\x22><i\x20data-progress=\x22decay\x22></i></div><div\x20class=\x22progress-caption\x22><span\x20data-live=\x22run\x22>0</span><span>ЦЕЛЬ\x201e' +
      _0x27c69e.CFG.decayAt +
      '</span></div><button class="primary wide" data-act="decay">Выполнить распад</button><p class="fineprint">Сбросятся измерения, усиления, резонансы и синхронизации. Изотопные улучшения, протоколы и старшие системы сохранятся.</p></div>' +
      _0x3311f7('ИЗОТОПНАЯ ЛАБОРАТОРИЯ', 'ДО СИНГУЛЯРНОСТИ') +
      '<div\x20class=\x22controls\x22><button\x20class=\x22secondary\x22\x20data-act=\x22iso-max\x22>КУПИТЬ\x20МАКСИМУМ\x20ДОСТУПНОГО</button></div>' +
      _0x27c69e.ISO_UPGRADES.map(
        (_0x4e4d1c) =>
          '<div\x20class=\x22card\x20upgrade-card\x22><div><h3>' +
          _0x4e4d1c.name +
          '</h3><p>' +
          _0x4e4d1c.desc +
          '</p><span class="level" data-iso-level="' +
          _0x4e4d1c.id +
          '"></span></div>' +
          _0x3ca6a1('iso', _0x4e4d1c.id) +
          '</div>',
      ).join('')
    );
  }
  function _0x4b6628() {
    return (
      '<div\x20class=\x22info\x22>8\x20протоколов\x20×\x203\x20ранга.\x20Новый\x20ранг\x20сложнее\x20и\x20даёт\x20ещё\x20один\x20постоянный\x20бонус.\x20Начало\x20и\x20выход\x20перезапускают\x20текущую\x20банку.\x20Завершение\x20засчитывается\x20как\x20распад\x20и\x20даёт\x20минимум\x201\x20изотоп.</div>' +
      (_0x4ac0a1.challenge
        ? '<div class="card protocol active"><span class="eyebrow">АКТИВНЫЙ ПРОТОКОЛ</span><h3>' +
          _0x27c69e.PROTOCOLS[_0x4ac0a1.challenge.id].name +
          '</h3><p>' +
          _0x27c69e.PROTOCOLS[_0x4ac0a1.challenge.id].desc +
          '</p><div\x20class=\x22progress\x22><i\x20data-progress=\x22protocol\x22></i></div><div\x20class=\x22progress-caption\x22><span\x20data-live=\x22run\x22>0</span><span>' +
          _0x149c7b(_0x27c69e.challengeGoal(_0x4ac0a1, _0x4ac0a1.challenge.id)) +
          '</span></div><button class="secondary wide" data-act="exit-protocol">Выйти без награды</button></div>'
        : '') +
      _0x27c69e.PROTOCOLS.map(
        (_0x5e85f2) =>
          '<div class="card protocol ' +
          (_0x4ac0a1.challenge && _0x4ac0a1.challenge.id === _0x5e85f2.id ? 'active' : '') +
          '\x22><div\x20class=\x22protocol-header\x22><h3>' +
          String(_0x5e85f2.id + 0x1).padStart(0x2, '0') +
          ' · ' +
          _0x5e85f2.name +
          '</h3><div class="rank-boxes">' +
          [0x1, 0x2, 0x3]
            .map((_0x33b099) => '<i class="' + (_0x4ac0a1.protocols[_0x5e85f2.id] >= _0x33b099 ? 'on' : '') + '"></i>')
            .join('') +
          '</div></div><p>' +
          _0x5e85f2.desc +
          '</p><div\x20class=\x22reward\x22>' +
          _0x5e85f2.reward +
          '</div><div class="protocol-footer"><span>' +
          (_0x4ac0a1.protocols[_0x5e85f2.id] >= 0x3
            ? 'ВСЕ РАНГИ ПРОЙДЕНЫ'
            : 'ЦЕЛЬ\x20' + _0x149c7b(_0x27c69e.challengeGoal(_0x4ac0a1, _0x5e85f2.id))) +
          '</span><button class="secondary" data-act="protocol" data-id="' +
          _0x5e85f2.id +
          '\x22\x20' +
          (_0x4ac0a1.decays < 0x1 || _0x4ac0a1.protocols[_0x5e85f2.id] >= 0x3 ? 'disabled' : '') +
          '>' +
          (_0x4ac0a1.protocols[_0x5e85f2.id] >= 0x3 ? 'Готово' : 'Ранг ' + (_0x4ac0a1.protocols[_0x5e85f2.id] + 0x1)) +
          '</button></div></div>',
      ).join('')
    );
  }
  function _0x27d3cf() {
    return (
      '<div class="info">Производство, протоколы и исследования открывают следующие этапы. У заключительного опыта есть отдельные условия во вкладке «Финал».</div>' +
      [
        [
          'I',
          'КАСКАД',
          '8 производящих друг друга измерений, усиления, резонансы и синхронизация.',
          'Распад при 1e' + _0x27c69e.CFG.decayAt,
        ],
        [
          'II',
          'РАСПАД',
          'Изотопные улучшения, 8 протоколов по 3 ранга, первые автоматы.',
          'Сингулярность: ' +
            _0x27c69e.CFG.singRanks +
            ' рангов и ' +
            _0x27c69e.CFG.singDecays +
            '\x20распадов\x20за\x20эпоху',
        ],
        [
          'III',
          'СИНГУЛЯРНОСТЬ',
          'Масса\x20и\x2024\x20исследования.\x20Выбери\x20ветку:\x20Импульс,\x20Покой\x20или\x20Каскад.',
          'Реальности:\x20масса,\x20большая\x20изотопная\x20эпоха\x20и\x20серия\x20сингулярностей',
        ],
        [
          'IV',
          'РЕАЛЬНОСТИ',
          'Руны,\x20ядра\x20и\x206\x20секторов\x20с\x20разной\x20физикой.',
          'Финал\x20после\x20сектора\x20«Последняя\x20крышка»',
        ],
      ]
        .map(
          (_0xe36441, _0x10706d) =>
            '<div\x20class=\x22card\x22><span\x20class=\x22eyebrow\x22>ФАЗА\x20' +
            _0xe36441[0x0] +
            '</span><h3>' +
            _0xe36441[0x1] +
            '</h3><p>' +
            _0xe36441[0x2] +
            '</p><p class="fineprint">' +
            _0xe36441[0x3] +
            '</p></div>',
        )
        .join('')
    );
  }
  function _0x31ddbf() {
    return (
      _0x27c69e.singRequirements(_0x4ac0a1),
      '<div class="card prestige-card mass"><div class="big-symbol">' +
        _0x462fac('atom') +
        '</div><span class="eyebrow">ВТОРОЙ СЛОЙ ПРЕСТИЖА</span><h3>Сингулярность</h3><p>Сожми целую эпоху в массу для исследований.</p><div class="gain-value">+<b data-live="massGain">0</b></div><span class="eyebrow">МАССЫ ЗА СБРОС</span><div class="requirements">' +
        _0x4dd49f('sing-am', 'Кизяк за цикл:') +
        _0x4dd49f('sing-iso', 'Изотопы, добытые за эпоху:') +
        _0x4dd49f('sing-decays', 'Распады за эпоху:') +
        _0x4dd49f('sing-ranks', 'Ранги протоколов:') +
        '</div><button class="primary wide" data-act="singularity">Создать сингулярность</button><p class="fineprint">Сбросятся изотопы и их улучшения, распады текущей эпохи и вся банка. Масса, исследования, пройденные протоколы и ядра сохранятся.</p></div><div class="stat-grid"><div class="stat"><small>Изотопы за эпоху</small><b data-live="isoEpoch">0</b></div><div class="stat"><small>Распады за эпоху</small><b data-live="decaysHere">0</b></div><div class="stat"><small>Сингулярности в реальности</small><b data-live="singsHere">0</b></div><div class="stat"><small>Масса в этой реальности</small><b data-live="massCycle">0</b></div></div><div class="info">Чтобы получить больше массы, сначала добудь больше изотопов за одну эпоху. Порог новой реальности потребует более длинных рывков, чем обычная ферма сингулярностей.</div>'
    );
  }
  function _0x47d82e(_0x1d8ac1) {
    const _0x14f859 = _0x27c69e.has(_0x4ac0a1, _0x1d8ac1.id);
    return (
      '<div class="card upgrade-card research-card ' +
      (_0x14f859 ? 'purchased' : '') +
      '"><div><h3>' +
      _0x1d8ac1.name +
      '</h3><p>' +
      _0x1d8ac1.desc +
      '</p><span class="level">' +
      (_0x14f859
        ? 'ИССЛЕДОВАНО'
        : _0x1d8ac1.requires && _0x1d8ac1.requires.length
          ? 'После: ' +
            _0x1d8ac1.requires
              .map((_0x364e08) => _0x27c69e.RESEARCH.find((_0xd8ca63) => _0xd8ca63.id === _0x364e08).name)
              .join(',\x20')
          : _0x1d8ac1.any
            ? 'После завершения выбранной ветки'
            : 'НАЧАЛО ДЕРЕВА') +
      '</span></div>' +
      _0x3ca6a1('research', _0x1d8ac1.id) +
      '</div>'
    );
  }
  function _0xc0622d() {
    if (!_0x4ac0a1.sings)
      return (
        '<div class="card unlock-card">' +
        _0x187c63('atom') +
        '<h3>Исследования\x20ещё\x20закрыты</h3><p>Создай\x20первую\x20сингулярность.\x20Откроются\x20масса,\x20дерево\x20исследований\x20и\x20выбор\x20из\x20трёх\x20путей.</p><button\x20class=\x22secondary\x20wide\x22\x20data-act=\x22jump\x22\x20data-page=\x22cosmos\x22\x20data-sub=\x22singularity\x22>Посмотреть\x20требования</button></div>'
      );
    const _0x2052bb = _0x27c69e.chosenPath(_0x4ac0a1);
    return (
      _0x2052bb && (_0x15386d = _0x2052bb),
      '<div\x20class=\x22controls\x22><span\x20class=\x22eyebrow\x22\x20style=\x22flex:1\x22>ДОСТУПНО\x20МАССЫ:\x20<b\x20data-live=\x22mass\x22>0</b></span><button\x20class=\x22secondary\x22\x20data-act=\x22respec\x22>ПЕРЕСТРОИТЬ</button></div>' +
        _0x27c69e.RESEARCH.slice(0x0, 0x3).map(_0x47d82e).join('') +
        '<div class="branch-line"></div><div class="research-paths">' +
        [
          ['active', 'Импульс', 'Активная игра'],
          ['idle', 'Покой', 'Офлайн и ожидание'],
          ['chain', 'Каскад', 'Старшие измерения'],
        ]
          .map(
            (_0x1d80c0) =>
              '<button\x20data-act=\x22path\x22\x20data-id=\x22' +
              _0x1d80c0[0x0] +
              '" class="' +
              (_0x15386d === _0x1d80c0[0x0] ? 'selected' : '') +
              '\x22><b>' +
              _0x1d80c0[0x1] +
              '</b><small>' +
              _0x1d80c0[0x2] +
              '</small></button>',
          )
          .join('') +
        '</div><p\x20class=\x22path-tip\x22>' +
        (_0x2052bb
          ? 'Выбран путь «' +
            {
              active: 'Импульс',
              idle: 'Покой',
              chain: 'Каскад',
            }[_0x2052bb] +
            '». Для смены нужна перестройка.'
          : 'Покупка первого исследования ветки закрепляет выбор. Остальные две ветки станут недоступны до перестройки.') +
        '</p>' +
        _0x27c69e.RESEARCH.filter((_0x43e71a) => _0x43e71a.path === _0x15386d)
          .map(_0x47d82e)
          .join('') +
        '<div class="branch-line"></div>' +
        _0x3311f7('СХОДИМОСТЬ\x20И\x20ПРЕДЕЛЫ') +
        _0x27c69e.RESEARCH.slice(0xc).map(_0x47d82e).join('')
    );
  }
  function _0x4ae25c() {
    _0x27c69e.realityRequirements(_0x4ac0a1);
    let _0x50e444 =
      '<div\x20class=\x22card\x20prestige-card\x20reality\x22><div\x20class=\x22big-symbol\x22>' +
      _0x462fac('portal') +
      '</div><span class="eyebrow">ТРЕТИЙ СЛОЙ ПРЕСТИЖА</span><h3>Новая реальность</h3><p>Заверши сектор «' +
      _0x27c69e.sector(_0x4ac0a1).name +
      '»\x20и\x20возьми\x20его\x20руну.</p><div\x20class=\x22gain-value\x22>+<b\x20data-live=\x22coreGain\x22>0</b></div><span\x20class=\x22eyebrow\x22>ЯДЕР\x20РЕАЛЬНОСТИ</span><div\x20class=\x22requirements\x22>' +
      _0x4dd49f('reality-mass', 'Масса, добытая за реальность:') +
      _0x4dd49f('reality-iso', 'Изотопы, добытые за эпоху:') +
      _0x4dd49f('reality-sings', 'Сингулярности за реальность:') +
      _0x4dd49f('reality-ranks', 'Ранги\x20протоколов:') +
      '</div><button class="primary wide" data-act="reality">Создать реальность</button><p class="fineprint">Обнулится всё до массы и исследований включительно. Протоколы, достижения, ядра и руны остаются. Перейдёшь в следующий сектор с новыми правилами.</p></div>';
    _0x4ac0a1.pendingGlyph &&
      (_0x50e444 += '<button class="primary wide" data-act="choose-glyph">Выбрать руну завершённого сектора</button>');
    const _0x4352a6 =
      _0x4ac0a1.realities < _0x27c69e.Finale.RULES.openAt
        ? _0x27c69e.SECTORS.slice(0x0, _0x27c69e.Finale.RULES.openAt)
        : _0x27c69e.SECTORS;
    return (
      (_0x50e444 +=
        _0x3311f7('СЕКТОРЫ', _0x4818d3(Math.min(_0x4352a6.length, _0x4ac0a1.realities)) + ' / ' + _0x4352a6.length) +
        _0x4352a6
          .map(
            (_0x21e8f2, _0x388d2f) =>
              '<div class="card sector-card ' +
              (_0x388d2f < _0x4ac0a1.realities ? 'done' : _0x388d2f === _0x4ac0a1.realities ? 'current' : '') +
              '"><span class="sector-index">' +
              String(_0x388d2f + 0x1).padStart(0x2, '0') +
              '</span><div><h3>' +
              _0x21e8f2.name +
              '</h3><p>' +
              _0x21e8f2.rule +
              '</p>' +
              (_0x21e8f2.coreMultiplier
                ? '<p>За\x20сингулярность\x20больше\x20массы.\x20Ядра\x20за\x20сектор\x20×' +
                  _0x21e8f2.coreMultiplier +
                  '.</p>'
                : '') +
              '</div><small>' +
              (_0x388d2f < _0x4ac0a1.realities ? 'ГОТОВО' : _0x388d2f === _0x4ac0a1.realities ? 'СЕЙЧАС' : 'ЗАКРЫТО') +
              '</small></div>',
          )
          .join('')),
      _0x4ac0a1.realities &&
        ((_0x50e444 +=
          _0x3311f7('НАСЛЕДИЕ РЕАЛЬНОСТЕЙ', 'ДОСТУПНО: ' + _0x46b8ca(_0x4ac0a1.cores)) +
          _0x27c69e.CORE_UPGRADES.map(
            (_0x23d5ea) =>
              '<div class="card upgrade-card"><div><h3>' +
              _0x23d5ea.name +
              '</h3><p>' +
              _0x23d5ea.desc +
              '</p><span class="level" data-core-level="' +
              _0x23d5ea.id +
              '"></span></div>' +
              _0x3ca6a1('core', _0x23d5ea.id) +
              '</div>',
          ).join('') +
          _0x3311f7('КОЛЛЕКЦИЯ РУН', 'АКТИВНА ОДНА')),
        (_0x50e444 += _0x4ac0a1.glyphs
          .map((_0x38093a) => {
            const _0x2af602 = _0x27c69e.GLYPHS.find((_0x21a84c) => _0x21a84c.id === _0x38093a.id);
            return (
              '<div\x20class=\x22card\x20glyph-card\x20' +
              (_0x4ac0a1.equipped === _0x38093a.key ? 'selected' : '') +
              '\x22><span\x20class=\x22eyebrow\x22>ИЗ\x20РЕАЛЬНОСТИ\x20' +
              _0x38093a.key.split('-')[0x0] +
              '\x20·\x20СИЛА\x20' +
              _0x38093a.power +
              '</span><h3>' +
              _0x2af602.name +
              '</h3><p>' +
              _0x2af602.desc +
              '</p><button class="secondary wide" data-act="equip" data-id="' +
              _0x38093a.key +
              '\x22>' +
              (_0x4ac0a1.equipped === _0x38093a.key ? 'ЭТА РУНА АКТИВНА' : 'Активировать') +
              '</button></div>'
            );
          })
          .join(''))),
      _0x4ac0a1.realities >= _0x27c69e.Finale.RULES.openAt &&
        (_0x50e444 =
          '<div\x20class=\x22card\x20reality\x22><h3>Последний\x20опыт</h3><p>Открыта\x20финальная\x20глава.</p><button\x20class=\x22secondary\x20wide\x22\x20data-act=\x22jump\x22\x20data-page=\x22cosmos\x22\x20data-sub=\x22finale\x22>Открыть\x20финал</button></div>' +
          _0x50e444),
      _0x50e444
    );
  }
  function _0xc24523() {
    return (
      '<section\x20id=\x22finale-plan\x22\x20tabindex=\x22-1\x22><div\x20class=\x22card\x20finale-overview\x22><h3\x20id=\x22finale-title\x22>Закрытие\x20лаборатории</h3><p\x20id=\x22finale-summary\x22></p><div\x20class=\x22requirements\x22>' +
      _0x4dd49f('final-time', 'Время\x20работы\x20лаборатории') +
      '</div><p class="fineprint">Нужно 30 зачтённых суток с начала сохранения. Офлайн-работа засчитывается по обычным правилам.</p></div><div class="card finale-stage"><h3>1. Допуск</h3><div class="requirements">' +
      _0x4dd49f('final-ranks', 'Ранги протоколов') +
      _0x4dd49f('final-runes', 'Разные\x20типы\x20рун') +
      '</div></div><div\x20class=\x22card\x20finale-stage\x22><h3>2.\x20Стабилизатор</h3><div\x20class=\x22requirements\x22>' +
      _0x4dd49f('final-reactions', 'Открытые реакции') +
      _0x4dd49f('final-mods', 'Помощники с модификацией III ранга') +
      '</div></div><div\x20class=\x22card\x20finale-stage\x22><h3>3.\x20Финальный\x20опыт</h3><div\x20class=\x22requirements\x22>' +
      _0x4dd49f('final-realities', 'Завершённые реальности') +
      _0x4dd49f('final-research', 'Исследование «Крышка мироздания»') +
      _0x4dd49f('final-run', 'Кизяк за один цикл') +
      '</div><p class="fineprint" id="finale-test-note"></p><button class="primary wide" data-act="record-finale">Зафиксировать опыт</button></div><button class="primary wide" data-act="finish-game">Закрыть лабораторию</button><button class="secondary wide" data-act="ending-review" hidden>Прочитать концовку</button></section>'
    );
  }
  function _0x271030() {
    const _0x423d72 = _0x27c69e.Finale.progress(_0x4ac0a1);
    null !== _0x423d72.endedAt &&
      _0x332e9c(
        '<div class="ending"><span class="eyebrow">ПОСЛЕДНЯЯ ЗАПИСЬ</span><h2>Эксперимент завершён</h2><p>В десятом секторе стрелка дозиметра наконец остановилась. Ты сверил показания и дописал в журнале: «Образец стабилен».</p><p>Утром банку вернули на полку в первой лаборатории. На этикетке по-прежнему было одно слово. Кизяк.</p><div class="stat-grid"><div class="stat"><small>Финальный образец</small><b>' +
          _0x46b8ca(_0x423d72.testRun) +
          '</b></div><div class="stat"><small>Работа лаборатории</small><b>' +
          _0x649767(_0x423d72.endedAt) +
          '</b></div></div><button class="primary wide" data-act="ending-return">Вернуться к банке</button></div>',
      );
  }
  function _0x1b9ef9() {
    const _0x36732a = KizyacSkins.active(_0x4ac0a1);
    return (
      KizyacSkins.level(_0x4ac0a1),
      '<div class="skin-summary"><span class="eyebrow">ОФОРМЛЕНИЕ БАНКИ</span><h3>' +
        _0x36732a.name +
        '</h3><p>Чем выше мутация, тем круче скины. Открытые варианты остаются с тобой после сбросов.</p><button class="' +
        ('auto' === _0x4ac0a1.skin ? 'primary' : 'secondary') +
        '\x20wide\x22\x20data-act=\x22skin\x22\x20data-id=\x22auto\x22>' +
        ('auto' === _0x4ac0a1.skin
          ? 'Автовыбор самого крутого включён'
          : 'Автоматически\x20выбирать\x20самый\x20крутой') +
        '</button></div><div\x20class=\x22skin-grid\x22>' +
        KizyacSkins.SKINS.map((_0x2bd9c5) => {
          const _0x209fb1 = KizyacSkins.unlocked(_0x4ac0a1, _0x2bd9c5.id),
            _0x44566a = _0x36732a.id === _0x2bd9c5.id;
          return (
            '<div class="skin-card ' +
            (_0x209fb1 ? '' : 'locked') +
            '\x20' +
            (_0x44566a ? 'selected' : '') +
            '\x22\x20style=\x22--skin-color:' +
            _0x2bd9c5.color +
            '"><div class="skin-art">' +
            KizyacSkins.thumbnail(_0x2bd9c5.id) +
            '</div><span class="eyebrow">' +
            (_0x209fb1 ? 'ОТКРЫТ' : 'МУТАЦИЯ\x20' + (_0x2bd9c5.at + 0x1)) +
            '</span><h3>' +
            _0x2bd9c5.name +
            '</h3><p>' +
            _0x2bd9c5.desc +
            '</p><button class="' +
            (_0x44566a ? 'primary' : 'secondary') +
            ' wide" data-act="skin" data-id="' +
            _0x2bd9c5.id +
            '\x22\x20' +
            (_0x209fb1 ? '' : 'disabled') +
            '>' +
            (_0x44566a ? 'СЕЙЧАС\x20НА\x20БАНКЕ' : _0x209fb1 ? 'Выбрать' : 'Откроется\x20позже') +
            '</button></div>'
          );
        }).join('') +
        '</div><p class="fineprint">Обычный скин использует твою фотографию. Поменять фотографию можно в «Архиве».</p>'
    );
  }
  function _0x26ad7e() {
    const _0x33f521 = KizyacAchievements.groups,
      _0x37dcee = _0x27c69e.AWARDS.filter((_0x21bebe) => 'all' === _0xc57a64 || _0x21bebe.group === _0xc57a64);
    return (
      '<div class="achievement-summary"><strong id="award-summary">' +
      _0x4ac0a1.awards.length +
      '\x20/\x20' +
      _0x27c69e.AWARDS.length +
      '</strong><div><small>ДОСТИЖЕНИЯ</small><p>Памятные отметки прогресса. Валюта и добыча за них не начисляются.</p></div></div><div class="achievement-filters">' +
      Object.entries(_0x33f521)
        .map(
          ([_0x156407, _0x55a6e3]) =>
            '<button\x20data-act=\x22award-filter\x22\x20data-id=\x22' +
            _0x156407 +
            '" class="' +
            (_0xc57a64 === _0x156407 ? 'selected' : '') +
            '\x22>' +
            _0x55a6e3 +
            '</button>',
        )
        .join('') +
      '</div>' +
      _0x37dcee
        .map(
          (_0x3adbaa) =>
            '<div\x20class=\x22award\x20' +
            (_0x4ac0a1.awards.includes(_0x3adbaa.id) ? '' : 'locked') +
            '" data-award="' +
            _0x3adbaa.id +
            '"><div class="award-icon">' +
            _0x462fac(_0x3adbaa.icon || 'award') +
            '</div><div class="achievement-copy"><h3>' +
            _0x3adbaa.name +
            '</h3><p>' +
            _0x3adbaa.desc +
            '</p><div\x20class=\x22progress\x22><i></i></div><span\x20class=\x22achievement-status\x22></span></div><span\x20class=\x22achievement-total\x22></span></div>',
        )
        .join('')
    );
  }
  function _0x31a1d6() {
    return (
      '<div\x20class=\x22stat-grid\x22>' +
      [
        ['Добыто\x20всего', 'total'],
        ['Лучший цикл', 'best'],
        ['Нажатий', 'clicks'],
        ['Распадов', 'decays'],
        ['Сингулярностей', 'sings'],
        ['Реальностей', 'realities'],
        ['Работа\x20симуляции', 'simSeconds'],
        ['Ранги\x20протоколов', 'ranks'],
      ]
        .map(
          (_0x5c40a5) =>
            '<div class="stat"><small>' +
            _0x5c40a5[0x0] +
            '</small><b data-live="' +
            _0x5c40a5[0x1] +
            '\x22>0</b></div>',
        )
        .join('') +
      '</div>' +
      (_0x4ac0a1.legacy
        ? '<div class="card legacy"><span class="eyebrow">АРХИВ ВЕРСИИ 1.0</span><h3>Та самая первая банка</h3><p>Твой старый прогресс сохранён отдельно от новой кампании.</p><div class="history-row"><span>Было добыто</span><b>' +
          _0x595465.format(_0x595465.from(_0x4ac0a1.legacy.lifetime)) +
          '</b></div><div\x20class=\x22history-row\x22><span>Старых\x20перерождений</span><b>' +
          _0x4818d3(_0x4ac0a1.legacy.prestiges) +
          '</b></div><div class="history-row"><span>Старая мутация</span><b>' +
          (_0x4ac0a1.legacy.bestStage + 0x1) +
          ' / 10</b></div></div>'
        : '') +
      _0x3311f7('ОРИГИНАЛЬНЫЕ\x20ФОТОГРАФИИ') +
      '<p\x20class=\x22subtle\x22>Обе\x20твои\x20фотографии\x20внутри\x20APK.\x20Выбери\x20банку\x20для\x20главного\x20экрана.</p><div\x20class=\x22photo-grid\x22>' +
      [0x1, 0x2]
        .map(
          (_0x4c0f26) =>
            '<button\x20class=\x22photo-card\x20' +
            (_0x4ac0a1.photo === _0x4c0f26 ? 'selected' : '') +
            '\x22\x20data-act=\x22photo\x22\x20data-id=\x22' +
            _0x4c0f26 +
            '"><img src="kizyac-original-' +
            _0x4c0f26 +
            '.jpg" alt="Твоя банка кизяка, фото ' +
            _0x4c0f26 +
            '"><span>ОБРАЗЕЦ 0' +
            _0x4c0f26 +
            (_0x4ac0a1.photo === _0x4c0f26 ? ' · ВЫБРАН' : ' · ВЫБРАТЬ') +
            '</span></button>',
        )
        .join('') +
      '</div>' +
      _0x3311f7('ПОСЛЕДНИЕ СБРОСЫ') +
      '<div\x20id=\x22history\x22>' +
      (_0x4ac0a1.history.length
        ? _0x4ac0a1.history
            .map(
              (_0x493e1d) =>
                '<div class="history-row"><span>' +
                ('decay' === _0x493e1d.type ? 'Распад' : 'Сингулярность') +
                '\x20·\x20' +
                _0x649767(_0x493e1d.time) +
                '</span><b>+' +
                _0x46b8ca(_0x493e1d.gain) +
                '</b></div>',
            )
            .join('')
        : '<p\x20class=\x22fineprint\x22>Пока\x20ни\x20одного.\x20Первая\x20большая\x20цель\x20—\x20распад.</p>') +
      '</div><p class="fineprint">КИЗЯК: ИЗМЕРЕНИЯ 3.2.0<br>Радиация — игровая, приложение не является дозиметром.</p>'
    );
  }
  const _0x1b5a46 = [
    [
      'С чего начать?',
      'Нажимай на банку и покупай «Улучшить клик». Следуй подсказке с подсвеченной кнопкой. Позже появятся помощники: сначала один, затем следующие.',
    ],
    [
      'Зачем\x20покупать\x20по\x2010?',
      'Каждые 10 купленных единиц удваивают скорость соответствующего измерения. Произведённые старшими измерениями единицы добавляют количество, но не счётчик покупок. Кнопка «Максимум всё» быстро распределяет накопленное.',
    ],
    [
      'Что сбрасывает усиление?',
      'Измерения, синхронизации и силу тапа. Оно открывает V, VI, VII и VIII измерения и усиливает все ступени цепи. Резонанс сбрасывает ещё и усиления, зато даёт дополнительное ускорение. Изотопы не теряются.',
    ],
    [
      'Почему числа вида 1e80?',
      'Это научная запись: <code>1e80 = 10⁸⁰</code>. Показатель после e — количество нулей у единицы. Игра считает числа значительно больше 1e308. Индикатор до большого порога показывает пройденные порядки, а не долю монет.',
    ],
    [
      'Когда делать распад?',
      'Сначала дойди до 1e' +
        _0x27c69e.CFG.decayAt +
        ' за цикл. Дальше сравни награду с текущими изотопами: короткие циклы полезны для числа распадов, длинные — для большой награды. Не обязательно сбрасываться сразу, как загорелась кнопка.',
    ],
    [
      'Как пройти протоколы?',
      'Читай ограничение и цель. Они не одинаковы: где-то нет тапов, где-то разрешены только 3–4 измерения, где-то запрещён сброс. Учитывай изотопные улучшения и выбирай посильные ранги. Если застрял, выйди, усиль лабораторию и вернись позже.',
    ],
    [
      'Что нужно сингулярности?',
      'Все\x20четыре\x20условия\x20одновременно:\x20кизяк\x20текущего\x20цикла,\x20добытые\x20за\x20эпоху\x20изотопы,\x20число\x20распадов\x20и\x20ранги\x20протоколов.\x20Потраченные\x20на\x20улучшения\x20изотопы\x20учитываются.\x20Сингулярность\x20даёт\x20массу,\x20за\x20которую\x20покупаются\x20исследования.',
    ],
    [
      'Какая\x20ветка\x20исследований\x20лучше?',
      '«Импульс» усиливает нажатия; «Покой» — производство в своём режиме и офлайн; «Помощники» — старшие измерения, бонусы за покупки и резонансы. После выбора первой ветки остальные две закрываются. Перестройка возвращает всю потраченную массу и перезапускает эпоху.',
    ],
    [
      'Не могу накопить большую награду с автоматами',
      'Подними порог автораспада или временно выключи его. Для реальности нужны длинная изотопная эпоха и накопленная масса. Автосингулярность тоже нужно отключить перед финальным рывком к изотопному требованию реальности.',
    ],
    [
      'Как\x20работает\x20офлайн?',
      'Цепочка и открытая автоматика симулируются при возвращении. Базовая эффективность 85%, максимум 48 часов. Исследование «Автономная среда» даёт 100% и 72 часа. Большой интервал считается укрупнёнными шагами, поэтому результат с частыми сбросами приблизительный.',
    ],
    [
      'Как не потерять прогресс?',
      'Игра сохраняется каждые 5 секунд и при сворачивании. В настройках можно экспортировать защищённую копию и позже импортировать её. Обновляй APK поверх старого: удаление приложения может удалить локальные данные.',
    ],
    [
      'Что происходит после 1.0?',
      'Старое\x20сохранение\x20не\x20разгоняет\x20новую\x20экономику.\x20Его\x20статистика\x20и\x20стадия\x20хранятся\x20в\x20архиве.\x20Новая\x20кампания\x20стартует\x20с\x20первой\x20каплей\x20и\x20100\x20кизяка.\x20Выбранное\x20фото,\x20нажатия\x20и\x20настройки\x20переносятся.',
    ],
    [
      'Откуда идеи?',
      'Структура\x20многоуровневого\x20престижа,\x20производящих\x20друг\x20друга\x20измерений,\x20испытаний\x20и\x20автоматизации\x20вдохновлена\x20Antimatter\x20Dimensions.\x20Исследованы\x20описание\x20разработчиков\x20в\x20Steam,\x20открытое\x20описание\x20механик\x20и\x20выдача\x20YouTube\x20по\x20обзорам.\x20Баланс,\x20правила\x20секторов,\x20код\x20и\x20оформление\x20Кизяка\x20созданы\x20отдельно.',
    ],
  ];
  function _0x30c364() {
    const _0xea349 = _0x27c69e.learnFeatures(_0x4ac0a1),
      _0x27313e = [
        true,
        _0xea349.bulk,
        _0xea349.boost,
        _0xea349.numbers,
        _0xea349.decay,
        _0xea349.protocols,
        _0xea349.cosmos,
        _0xea349.research,
        _0xea349.automation,
        _0xea349.cascade,
        true,
        !!_0x4ac0a1.legacy,
        _0xea349.cosmos,
      ];
    return (
      '<div\x20class=\x22help\x22>' +
      _0x1b5a46
        .filter((_0x29406f, _0x538247) => _0x27313e[_0x538247])
        .map((_0x2c9ebe) => '<details><summary>' + _0x2c9ebe[0x0] + '</summary><p>' + _0x2c9ebe[0x1] + '</p></details>')
        .join('') +
      '</div>'
    );
  }
  function _0x27806c(_0x3632b4, _0x3017db, _0x725be2) {
    document.querySelectorAll('[data-req="' + _0x3632b4 + '\x22]').forEach((_0x3ec083) => {
      (_0x3ec083.classList.toggle('ok', _0x3017db), (_0x3ec083.querySelector('b').textContent = _0x725be2));
    });
  }
  function _0x516d4c(_0x54f526 = false) {
    const _0x4922ff = Math.max(_0x4ac0a1.bestStage, _0x27c69e.stage(_0x4ac0a1)),
      _0x10eaf5 = _0x4ac0a1.realities ? 0x3 : _0x4ac0a1.sings ? 0x2 : _0x4ac0a1.decays ? 0x1 : 0x0,
      _0x14e520 = KizyacSkins.active(_0x4ac0a1).color;
    (document.documentElement.style.setProperty('--accent', _0x14e520),
      document.body.classList.toggle('no-motion', _0x2abdce || !_0x4ac0a1.settings.motion),
      _0x526457
        ? _0x526457.amount(_0x4ac0a1.am, _0x54f526 || Date.now() - _0x2e641f < 0x64 || 'reactor' !== _0x8fffdd)
        : (_0x59ba98('amount').textContent = _0x27c69e.infiniteAM(_0x4ac0a1) ? '∞' : _0x46b8ca(_0x4ac0a1.am)),
      (_0x59ba98('sample-num').textContent = String(_0x4ac0a1.realities + 0x1).padStart(0x3, '0')),
      (_0x59ba98('mutation').textContent = _0x27c69e.STAGE_NAMES[_0x4922ff]),
      (_0x59ba98('evolution-level').textContent =
        'МУТАЦИЯ ' + String(_0x4922ff + 0x1).padStart(0x2, '0') + '\x20/\x2040'),
      (_0x59ba98('combo').textContent = _0x4ac0a1.challenge
        ? 'ПРОТОКОЛ\x20' + (_0x4ac0a1.challenge.id + 0x1)
        : 'КОМБО\x20×' + _0x4ac0a1.combo.toLocaleString('ru-RU')),
      _0x59ba98('combo').classList.toggle('hot', _0x4ac0a1.combo >= 0x2),
      (_0x59ba98('spec-left').textContent = [
        'ФАЗА\x20I\x20·\x20КАСКАД',
        'ФАЗА II · РАСПАД',
        'ФАЗА III · СИНГУЛЯРНОСТЬ',
        'ФАЗА IV · РЕАЛЬНОСТЬ',
      ][_0x10eaf5]),
      (_0x59ba98('spec-right').textContent = _0x4ac0a1.realities
        ? _0x27c69e.sector(_0x4ac0a1).short
        : _0x4ac0a1.sings
          ? 'ПРОСТРАНСТВО\x20ИСКРИВЛЕНО'
          : _0x4ac0a1.decays
            ? 'РАСПАД\x20АКТИВЕН'
            : 'СТАБИЛЬНАЯ СРЕДА'),
      (_0x59ba98('chamber').querySelector('.halo').style.opacity = 0.1 + 0.007 * _0x4922ff),
      _0x59ba98('liquid-tint').setAttribute('opacity', String(Math.min(0.8, _0x4922ff / 0x28))),
      _0x59ba98('mutation-marks').setAttribute(
        'opacity',
        String(_0x4922ff < 0x8 ? 0x0 : Math.min(0.85, (_0x4922ff - 0x7) / 0x23)),
      ),
      (_0x59ba98('jar-art').style.filter =
        _0x4922ff >= 0x5
          ? 'drop-shadow(0 0 ' + Math.min(0xc, 0.45 * _0x4922ff) + 'px\x20' + _0x14e520 + '70)'
          : 'drop-shadow(0\x208px\x2010px\x20#0009)'),
      _0x55394b !== _0x10eaf5 &&
        ((_0x55394b = _0x10eaf5),
        (_0x59ba98('chapter-track').innerHTML = [0x0, 0x1, 0x2, 0x3]
          .map((_0x90c199) => '<span class="' + (_0x90c199 <= _0x10eaf5 ? 'on' : '') + '\x22></span>')
          .join(''))));
    const _0x5eae67 = _0x27c69e.objective(_0x4ac0a1);
    ((_0x59ba98('goal-title').textContent = _0x5eae67.title),
      (_0x59ba98('goal-desc').textContent = _0x5eae67.desc),
      document
        .querySelectorAll('#pipeline\x20button')
        .forEach((_0x320cd4, _0x51400a) =>
          _0x320cd4.classList.toggle('on', _0x595465.valid(_0x4ac0a1.dims[_0x51400a].q)),
        ),
      (_0x59ba98('decay-dot').hidden = !_0x595465.valid(_0x27c69e.isotopeGain(_0x4ac0a1)) || !!_0x4ac0a1.challenge),
      (_0x59ba98('journal-dot').hidden = !_0x4ac0a1.cosmetics.unread));
    const _0x28834f =
      _0x8fffdd +
      '|' +
      _0x13a05e[_0x8fffdd] +
      '|' +
      !!_0x4ac0a1.decays +
      '|' +
      !!_0x4ac0a1.sings +
      '|' +
      _0x4ac0a1.realities +
      '|' +
      _0x27c69e.availableDims(_0x4ac0a1) +
      '|' +
      (_0x4ac0a1.challenge ? _0x4ac0a1.challenge.id : '-') +
      '|' +
      _0x4ac0a1.protocols.join(',');
    ((_0x54f526 || _0x28834f !== _0x50b6a6) &&
      ((_0x50b6a6 = _0x28834f),
      (_0x4c1f18 = ''),
      (function () {
        if ('reactor' === _0x8fffdd) return;
        document
          .querySelectorAll('#page-' + _0x8fffdd + ' .tabs button')
          .forEach((_0x3ac55) => _0x3ac55.classList.toggle('selected', _0x3ac55.dataset.sub === _0x13a05e[_0x8fffdd]));
        const _0x3ce7d8 = {
          cascade: {
            dimensions: _0x574697,
            elements: () => _0x290669.elements(),
            production: () => _0x2fe0e9.productionPage(),
            automation: _0x3040a1,
            modes: _0x220283,
          },
          decay: {
            isotopes: _0x4bed26,
            protocols: _0x4b6628,
            roadmap: _0x27d3cf,
          },
          cosmos: {
            singularity: _0x31ddbf,
            research: _0xc0622d,
            realities: _0x4ae25c,
            fragments: () => _0x290669.fragments(),
            finale: _0xc24523,
          },
          journal: {
            skins: _0x1b9ef9,
            awards: _0x26ad7e,
            archive: _0x31a1d6,
            chronicle: () => _0x2fe0e9.storyPage(),
            records: () => _0x2fe0e9.recordsPage(),
            help: _0x30c364,
          },
        };
        ((_0x59ba98(_0x8fffdd + '-content').innerHTML = _0x3ce7d8[_0x8fffdd][_0x13a05e[_0x8fffdd]]()),
          _0x59ba98('auto-policy') && (_0x59ba98('auto-policy').value = _0x4ac0a1.auto.buyMode));
      })()),
      (function () {
        !(function () {
          const _0x4196eb = _0x27c69e.tapBoostStatus(_0x4ac0a1),
            _0x189642 = (_0xabf34f) => {
              const _0x5bac4d = Math.ceil(_0xabf34f / 0x3e8);
              return Math.floor(_0x5bac4d / 0x3c) + ':' + String(_0x5bac4d % 0x3c).padStart(0x2, '0');
            };
          document.body.classList.toggle('word-numbers', 'words' === _0x4ac0a1.settings.notation);
          const _0x406f4b = _0x59ba98('tap-boost-status'),
            _0x3e3eb9 = _0x4196eb.blocked
              ? 'Нажатия отключены правилом'
              : _0x4196eb.active
                ? 'Нажатия ×' + _0x4196eb.active + ' · ' + _0x189642(_0x4196eb.remaining)
                : 'Усиль нажатия';
          _0x406f4b.textContent !== _0x3e3eb9 && (_0x406f4b.textContent = _0x3e3eb9);
          for (const _0x22a4eb of [0x3, 0xa]) {
            const _0x3a3651 = _0x59ba98('tap-boost-' + _0x22a4eb),
              _0x516b5f = _0x59ba98('tap-boost-time-' + _0x22a4eb),
              _0x519e60 = _0x4196eb['left' + _0x22a4eb],
              _0x7aad16 = _0x4196eb.active === _0x22a4eb;
            ((_0x3a3651.disabled = !_0x4196eb['can' + _0x22a4eb]), _0x3a3651.classList.toggle('active', _0x7aad16));
            const _0xa7460c = _0x7aad16
              ? 'Действует · ' + _0x189642(_0x4196eb.remaining)
              : _0x519e60
                ? 'Через\x20' + _0x189642(_0x519e60)
                : _0x4196eb.blocked
                  ? 'Недоступен'
                  : _0x4196eb.active
                    ? 'После буста'
                    : 'Активировать';
            (_0x516b5f.textContent !== _0xa7460c && (_0x516b5f.textContent = _0xa7460c),
              _0x3a3651.setAttribute(
                'aria-label',
                'Буст ×' +
                  _0x22a4eb +
                  (0x3 === _0x22a4eb ? ' на 2 минуты, раз в 20 минут. ' : ' на 1 минуту, раз в час. ') +
                  _0xa7460c,
              ));
          }
        })();
        const _0x4b533c = _0x59ba98('page-' + _0x8fffdd),
          _0x183f31 = (_0x21bc47) => _0x4b533c.querySelectorAll(_0x21bc47);
        if (
          (document.querySelectorAll('.resource-strip [data-live],.page.active [data-live]').forEach((_0x51c9c4) => {
            const _0x4c0ea5 = (function (_0x4dd8dc) {
              const _0x49972f = {
                am: () => (_0x27c69e.infiniteAM(_0x4ac0a1) ? '∞' : _0x46b8ca(_0x4ac0a1.am)),
                iso: () => (_0x4ac0a1.decays ? _0x46b8ca(_0x4ac0a1.iso) : '—'),
                mass: () => (_0x4ac0a1.sings ? _0x46b8ca(_0x4ac0a1.mass) : '—'),
                cores: () => (_0x4ac0a1.realities ? _0x46b8ca(_0x4ac0a1.cores) : '—'),
                cps: () => _0x46b8ca(_0x27c69e.cps(_0x4ac0a1)),
                tap: () => _0x46b8ca(_0x27c69e.tapPower(_0x4ac0a1)),
                radiation: () => _0x46b8ca(_0x27c69e.radiation(_0x4ac0a1)),
                run: () => _0x46b8ca(_0x4ac0a1.run),
                isoGain: () => _0x46b8ca(_0x27c69e.isotopeGain(_0x4ac0a1)),
                massGain: () => _0x46b8ca(_0x27c69e.massGain(_0x4ac0a1)),
                coreGain: () => _0x46b8ca(_0x27c69e.coreGain(_0x4ac0a1)),
                isoEpoch: () => _0x46b8ca(_0x4ac0a1.isoEpoch),
                massCycle: () => _0x46b8ca(_0x4ac0a1.massCycle),
                decaysHere: () => _0x4818d3(_0x4ac0a1.decaysHere),
                singsHere: () => _0x4818d3(_0x4ac0a1.singsHere),
                total: () => _0x46b8ca(_0x4ac0a1.total),
                best: () => _0x46b8ca(_0x4ac0a1.best),
                clicks: () => _0x4818d3(_0x4ac0a1.clicks),
                decays: () => _0x4818d3(_0x4ac0a1.decays),
                sings: () => _0x4818d3(_0x4ac0a1.sings),
                realities: () => _0x4818d3(_0x4ac0a1.realities),
                simSeconds: () => _0x649767(_0x4ac0a1.simSeconds),
                ranks: () => _0x27c69e.ranks(_0x4ac0a1) + ' / 24',
              };
              return _0x49972f[_0x4dd8dc] ? _0x49972f[_0x4dd8dc]() : '—';
            })(_0x51c9c4.dataset.live);
            _0x51c9c4.textContent !== _0x4c0ea5 && (_0x51c9c4.textContent = _0x4c0ea5);
          }),
          'cascade' === _0x8fffdd && 'dimensions' === _0x13a05e.cascade)
        ) {
          const _0x3c2606 = _0x27c69e.rates(_0x4ac0a1),
            _0xb71f67 = _0x27c69e.availableDims(_0x4ac0a1);
          document.querySelectorAll('[data-dim]').forEach((_0x48e2b0) => {
            const _0x31d3eb = +_0x48e2b0.dataset.dim,
              _0x39ac50 = _0x31d3eb >= _0xb71f67;
            (_0x48e2b0.classList.toggle('locked', _0x39ac50),
              (_0x48e2b0.querySelector('[data-quantity]').textContent = _0x46b8ca(_0x4ac0a1.dims[_0x31d3eb].q)),
              (_0x48e2b0.querySelector('[data-bought]').textContent = _0x4818d3(_0x4ac0a1.dims[_0x31d3eb].b)),
              (_0x48e2b0.querySelector('[data-production]').textContent = _0x39ac50
                ? 'Нужно усиление'
                : _0x595465.valid(_0x4ac0a1.dims[_0x31d3eb].q)
                  ? _0x46b8ca(_0x4ac0a1.dims[_0x31d3eb].q + _0x3c2606[_0x31d3eb]) +
                    ' / сек → ' +
                    (0x0 === _0x31d3eb ? 'кизяк' : _0x27c69e.DIMENSIONS[_0x31d3eb - 0x1].name.toLowerCase())
                  : _0x27c69e.DIMENSIONS[_0x31d3eb].desc),
              (_0x48e2b0.querySelector('[data-batch]').style.transform =
                'scaleX(' + (_0x4ac0a1.dims[_0x31d3eb].b % 0xa) / 0xa + ')'));
            const _0x37a148 = _0x48e2b0.querySelector('.buy');
            (_0x21f6eb(_0x37a148, !_0x39ac50 && _0x4ac0a1.am >= _0x27c69e.dimensionCost(_0x4ac0a1, _0x31d3eb)),
              (_0x37a148.querySelector('b').textContent = _0x39ac50
                ? 'ЗАКРЫТО'
                : _0x46b8ca(_0x27c69e.dimensionCost(_0x4ac0a1, _0x31d3eb))),
              (_0x37a148.querySelector('small').textContent = _0x39ac50
                ? 'ПОСЛЕ УСИЛЕНИЯ'
                : 'ЗА 1 · ' + (0x2710 === _0x21bb59 ? 'МАКС' : 'ДО ×' + _0x21bb59)));
          });
          const _0x2f237b = document.querySelector('[data-act=\x22sync\x22]');
          ((_0x2f237b.querySelector('b').textContent = _0x46b8ca(_0x27c69e.syncCost(_0x4ac0a1))),
            _0x21f6eb(
              _0x2f237b,
              _0x4ac0a1.am >= _0x27c69e.syncCost(_0x4ac0a1) && !(_0x4ac0a1.challenge && 0x4 === _0x4ac0a1.challenge.id),
            ),
            (_0x59ba98('sync-level').textContent = 'УРОВЕНЬ ' + _0x4ac0a1.ticks));
          const _0x373302 = _0x27c69e.boostRequirement(_0x4ac0a1);
          ((_0x59ba98('boost-count').textContent = '×' + _0x4ac0a1.boosts),
            (_0x59ba98('boost-requirement').textContent =
              _0x4ac0a1.challenge && 0x3 === _0x4ac0a1.challenge.id
                ? 'Запрещено протоколом'
                : 'Нужно ' +
                  _0x373302.count +
                  '\x20покупок\x20измерения\x20' +
                  (_0x373302.tier + 0x1) +
                  '.\x20Каждая\x20ступень\x20быстрее.'),
            (_0x59ba98('res-count').textContent = '×' + _0x4ac0a1.resonance),
            (_0x59ba98('res-requirement').textContent = _0x27c69e.sector(_0x4ac0a1).noRes
              ? 'Запрещено сектором'
              : 'Нужно ' + _0x27c69e.resonanceRequirement(_0x4ac0a1) + ' покупок измерения VIII.'),
            _0x21f6eb(document.querySelector('[data-act="boost"]'), _0x27c69e.canBoost(_0x4ac0a1)),
            _0x21f6eb(document.querySelector('[data-act="resonance"]'), _0x27c69e.canResonance(_0x4ac0a1)));
        }
        (_0x183f31('[data-act="iso"]').forEach((_0xbf8376) => {
          const _0x46b9fd = _0x27c69e.ISO_UPGRADES.find((_0x12ff4d) => _0x12ff4d.id === _0xbf8376.dataset.id),
            _0x1558a2 = _0x27c69e.up(_0x4ac0a1, _0x46b9fd.id),
            _0x340d47 = _0x1558a2 >= _0x46b9fd.max;
          ((_0xbf8376.querySelector('b').textContent = _0x340d47
            ? 'МАКС'
            : _0x46b8ca(_0x27c69e.isoCost(_0x4ac0a1, _0x46b9fd.id))),
            (_0xbf8376.querySelector('small').textContent = 'ИЗОТОПЫ'),
            _0x21f6eb(
              _0xbf8376,
              !_0x340d47 &&
                _0x4ac0a1.iso >= _0x27c69e.isoCost(_0x4ac0a1, _0x46b9fd.id) &&
                !('decay' === _0x46b9fd.id && _0x27c69e.ranks(_0x4ac0a1) < 0x4),
            ),
            (document.querySelector('[data-iso-level="' + _0x46b9fd.id + '\x22]').textContent =
              'УРОВЕНЬ ' + _0x1558a2 + ' / ' + _0x46b9fd.max));
        }),
          _0x183f31('[data-act="research"]').forEach((_0x11a7e3) => {
            const _0x57db1d = _0x27c69e.RESEARCH.find((_0x553211) => _0x553211.id === _0x11a7e3.dataset.id),
              _0x52c92c = _0x27c69e.has(_0x4ac0a1, _0x57db1d.id);
            ((_0x11a7e3.querySelector('b').textContent = _0x52c92c ? 'ГОТОВО' : _0x46b8ca(_0x57db1d.cost)),
              (_0x11a7e3.querySelector('small').textContent = 'МАССА'),
              _0x21f6eb(_0x11a7e3, _0x27c69e.canResearch(_0x4ac0a1, _0x57db1d.id)));
          }),
          _0x183f31('[data-act="core"]').forEach((_0x4919bd) => {
            const _0x26f375 = _0x27c69e.CORE_UPGRADES.find((_0x4e1fac) => _0x4e1fac.id === _0x4919bd.dataset.id),
              _0x3cfc26 = _0x27c69e.cu(_0x4ac0a1, _0x26f375.id);
            ((_0x4919bd.querySelector('b').textContent =
              _0x3cfc26 >= _0x26f375.max ? 'МАКС' : _0x46b8ca(_0x27c69e.coreCost(_0x4ac0a1, _0x26f375.id))),
              (_0x4919bd.querySelector('small').textContent = 'ЯДРА'),
              _0x21f6eb(
                _0x4919bd,
                _0x3cfc26 < _0x26f375.max && _0x4ac0a1.cores >= _0x27c69e.coreCost(_0x4ac0a1, _0x26f375.id),
              ),
              (document.querySelector('[data-core-level="' + _0x26f375.id + '\x22]').textContent =
                'УРОВЕНЬ ' + _0x3cfc26 + ' / ' + _0x26f375.max));
          }),
          _0x183f31('[data-act="auto"]').forEach((_0x58c8d6) => {
            (_0x58c8d6.classList.toggle('on', _0x4ac0a1.auto[_0x58c8d6.dataset.id]),
              _0x58c8d6.setAttribute('aria-checked', String(_0x4ac0a1.auto[_0x58c8d6.dataset.id])),
              _0x21f6eb(_0x58c8d6, _0x27c69e.automationUnlocked(_0x4ac0a1, _0x58c8d6.dataset.id)));
          }),
          _0x183f31('[data-act="decay"]').forEach((_0x583bf2) =>
            _0x21f6eb(_0x583bf2, _0x595465.valid(_0x27c69e.isotopeGain(_0x4ac0a1)) && !_0x4ac0a1.challenge),
          ),
          _0x183f31('[data-act="singularity"]').forEach((_0x2d6959) =>
            _0x21f6eb(_0x2d6959, _0x27c69e.canSing(_0x4ac0a1)),
          ),
          _0x183f31('[data-act="reality"]').forEach((_0x20e576) =>
            _0x21f6eb(_0x20e576, _0x27c69e.canReality(_0x4ac0a1)),
          ),
          _0x183f31('[data-progress]').forEach((_0x24e2b8) => {
            const _0x4339a4 =
              'decay' === _0x24e2b8.dataset.progress
                ? _0x27c69e.decayRequirement(_0x4ac0a1)
                : _0x4ac0a1.challenge
                  ? _0x27c69e.challengeGoal(_0x4ac0a1, _0x4ac0a1.challenge.id)
                  : 0x1;
            _0x24e2b8.style.transform = 'scaleX(' + Math.max(0x0, Math.min(0x1, _0x4ac0a1.run / _0x4339a4)) + ')';
          }));
        const _0x1b314a = _0x27c69e.singRequirements(_0x4ac0a1),
          _0x24eea9 = _0x27c69e.realityRequirements(_0x4ac0a1);
        (_0x27806c('sing-am', _0x4ac0a1.run >= _0x1b314a.am, _0x46b8ca(_0x4ac0a1.run) + ' / 1e' + _0x1b314a.am),
          _0x27806c(
            'sing-iso',
            _0x4ac0a1.isoEpoch >= _0x1b314a.iso,
            _0x46b8ca(_0x4ac0a1.isoEpoch) + ' / 1e' + _0x1b314a.iso,
          ),
          _0x27806c(
            'sing-decays',
            _0x4ac0a1.decaysHere >= _0x1b314a.decays,
            _0x4ac0a1.decaysHere + '\x20/\x20' + _0x1b314a.decays,
          ),
          _0x27806c(
            'sing-ranks',
            _0x27c69e.ranks(_0x4ac0a1) >= _0x1b314a.ranks,
            _0x27c69e.ranks(_0x4ac0a1) + ' / ' + _0x1b314a.ranks,
          ),
          _0x27806c(
            'reality-mass',
            _0x4ac0a1.massCycle >= _0x24eea9.mass,
            _0x46b8ca(_0x4ac0a1.massCycle) + '\x20/\x201e' + _0x24eea9.mass,
          ),
          _0x27806c(
            'reality-iso',
            _0x4ac0a1.isoEpoch >= _0x24eea9.iso,
            _0x46b8ca(_0x4ac0a1.isoEpoch) + ' / 1e' + _0x24eea9.iso,
          ),
          _0x27806c(
            'reality-sings',
            _0x4ac0a1.singsHere >= _0x24eea9.sings,
            _0x4ac0a1.singsHere + ' / ' + _0x24eea9.sings,
          ),
          _0x27806c(
            'reality-ranks',
            _0x27c69e.ranks(_0x4ac0a1) >= _0x24eea9.ranks,
            _0x27c69e.ranks(_0x4ac0a1) + ' / ' + _0x24eea9.ranks,
          ),
          _0x183f31('[data-award]').forEach((_0x44b9a2) => {
            const _0xce1402 = _0x27c69e.AWARDS.find((_0x1c80ae) => _0x1c80ae.id === _0x44b9a2.dataset.award),
              _0x490fba = _0x4ac0a1.awards.includes(_0xce1402.id),
              _0x47fcd5 = _0x490fba ? 0x1 : Math.max(0x0, Math.min(0x1, _0xce1402.val(_0x4ac0a1) / _0xce1402.goal));
            (_0x44b9a2.classList.toggle('locked', !_0x490fba),
              (_0x44b9a2.querySelector('.progress i').style.transform = 'scaleX(' + _0x47fcd5 + ')'),
              (_0x44b9a2.querySelector('.achievement-total').textContent = (function (_0x46c5f1) {
                if (_0x4ac0a1.awards.includes(_0x46c5f1.id) && _0x46c5f1.val(_0x4ac0a1) < _0x46c5f1.goal)
                  return 'ВЫДАНО В ЧИТ-МЕНЮ';
                const _0x192755 = Math.max(0x0, _0x46c5f1.val(_0x4ac0a1)),
                  _0x11827d = _0x46c5f1.goal;
                return 'huge' === _0x46c5f1.id || 'beyond' === _0x46c5f1.id
                  ? '1e' + Math.floor(_0x192755) + ' / 1e' + _0x11827d
                  : 'idle' === _0x46c5f1.id
                    ? Math.floor(_0x192755 / 0xe10) + ' / 24 ч'
                    : _0x46c5f1.id.startsWith('listen')
                      ? Math.floor(_0x192755 / 0x3c) + ' / ' + _0x11827d / 0x3c + ' мин'
                      : _0x4818d3(Math.min(_0x192755, _0x11827d)) + ' / ' + _0x4818d3(_0x11827d);
              })(_0xce1402)),
              (_0x44b9a2.querySelector('.achievement-status').textContent = _0x490fba ? 'ПОЛУЧЕНО' : 'В ПРОЦЕССЕ'));
          }),
          _0x59ba98('award-summary') &&
            (_0x59ba98('award-summary').textContent = _0x4ac0a1.awards.length + ' / ' + _0x27c69e.AWARDS.length));
      })(),
      (function () {
        if (!_0x59ba98('finale-plan')) return;
        const _0x223403 = _0x27c69e.Finale.progress(_0x4ac0a1),
          _0x2b61f3 = _0x27c69e.Finale.RULES,
          _0x4b88d3 = null !== _0x223403.endedAt,
          _0x153881 = Math.min(_0x2b61f3.seconds, _0x4ac0a1.simSeconds),
          _0xad18ca = Math.floor(_0x153881 / 0x15180),
          _0x1df57f = Math.floor((_0x153881 % 0x15180) / 0xe10),
          _0x4615f0 = _0x223403.tested ? _0x223403.testRun : _0x4ac0a1.run,
          _0x11fa1a = _0x223403.tested || _0x27c69e.has(_0x4ac0a1, _0x2b61f3.research);
        ((_0x59ba98('finale-title').textContent = _0x4b88d3 ? 'Эксперимент\x20завершён' : 'Закрытие лаборатории'),
          (_0x59ba98('finale-summary').textContent = _0x4b88d3
            ? 'Итоговая запись сохранена.'
            : _0x223403.tested
              ? 'Финальный\x20опыт\x20записан.\x20Осталось\x20закрыть\x20лабораторию.'
              : 'Подготовь\x20стабилизатор,\x20собери\x20образец\x20и\x20запиши\x20результат.'),
          _0x27806c('final-time', _0x153881 >= _0x2b61f3.seconds, _0xad18ca + ' д ' + _0x1df57f + ' ч / 30 д'),
          _0x27806c('final-ranks', _0x223403.ranks >= _0x2b61f3.ranks, _0x223403.ranks + ' / ' + _0x2b61f3.ranks),
          _0x27806c(
            'final-runes',
            _0x223403.runeKinds.size >= _0x2b61f3.runes,
            _0x223403.runeKinds.size + '\x20/\x20' + _0x2b61f3.runes,
          ),
          _0x27806c(
            'final-reactions',
            _0x223403.reactions >= _0x2b61f3.reactions,
            _0x223403.reactions + '\x20/\x20' + _0x2b61f3.reactions,
          ),
          _0x27806c(
            'final-mods',
            _0x223403.modified >= _0x2b61f3.modified,
            _0x223403.modified + ' / ' + _0x2b61f3.modified,
          ),
          _0x27806c(
            'final-realities',
            _0x4ac0a1.realities >= _0x2b61f3.realities,
            _0x4ac0a1.realities + ' / ' + _0x2b61f3.realities,
          ),
          _0x27806c('final-research', _0x11fa1a, _0x11fa1a ? 'Готово' : 'Требуется'),
          _0x27806c('final-run', _0x4615f0 >= _0x2b61f3.run, _0x46b8ca(_0x4615f0) + ' / ' + _0x149c7b(_0x2b61f3.run)),
          (_0x59ba98('finale-test-note').textContent = _0x223403.tested
            ? 'Опыт записан. Его результат сохранится при сбросах.'
            : 'Запиши результат до следующего сброса. Все три этапа должны быть готовы.'));
        const _0x1cdf8d = document.querySelector('[data-act=\x22record-finale\x22]'),
          _0x45f081 = document.querySelector('[data-act="finish-game"]');
        ((_0x1cdf8d.hidden = _0x223403.tested),
          _0x21f6eb(_0x1cdf8d, _0x223403.canTest),
          (_0x45f081.hidden = _0x4b88d3),
          _0x21f6eb(_0x45f081, _0x223403.canFinish),
          (document.querySelector('[data-act=\x22ending-review\x22]').hidden = !_0x4b88d3));
      })(),
      (function () {
        const _0x52a9ba = _0x27c69e.learning(_0x4ac0a1),
          _0x59302e = _0x27c69e.learnFeatures(_0x4ac0a1),
          _0x2f01c9 = _0x27c69e.learnStep(_0x4ac0a1, _0x15386d);
        (document.body.classList.toggle('simple-start', _0x59302e.simple),
          (document.querySelector('.brand\x20small').textContent = _0x59302e.simple
            ? 'НАЖИМАЙ\x20·\x20УЛУЧШАЙ\x20·\x20ПРОКАЧИВАЙ'
            : 'ИЗМЕРЕНИЯ\x20·\x20ЗАКРЫТАЯ\x20ЛАБОРАТОРИЯ'),
          document.body.classList.toggle('offer-start', _0x59302e.offer),
          document.body.classList.toggle('learner-start', !_0x52a9ba.seen.includes('boost')),
          document
            .querySelectorAll('.nav [data-page]')
            .forEach((_0x270c2b) => (_0x270c2b.hidden = !_0x5aa503(_0x270c2b.dataset.page))));
        const _0x4a0295 = Array.from(document.querySelectorAll('.nav [data-page]')).filter(
          (_0x1cf6b8) => !_0x1cf6b8.hidden,
        ).length;
        ((document.querySelector('.nav').hidden = _0x4a0295 <= 0x1),
          document.body.classList.toggle('no-nav', _0x4a0295 <= 0x1),
          (document.querySelector('.nav [data-page="cascade"] span').textContent = _0x52a9ba.seen.includes('boost')
            ? 'Помощники'
            : 'Улучшения'),
          (document.body.dataset.page = _0x8fffdd),
          (document.querySelector('.resource-strip>div:first-child').hidden = 'reactor' === _0x8fffdd),
          (document.querySelector('.resource-strip').hidden = !_0x59302e.resources),
          (document.querySelector('.iso-res').hidden = 0x0 === _0x4ac0a1.decays),
          (document.querySelector('.mass-res').hidden = 0x0 === _0x4ac0a1.sings),
          (document.querySelector('.core-res').hidden = 0x0 === _0x4ac0a1.realities));
        const _0x11d8e5 = Array.from(document.querySelectorAll('.resource-strip>div')).filter(
          (_0x521400) => !_0x521400.hidden,
        ).length;
        if (
          ((document.querySelector('.resource-strip').style.gridTemplateColumns =
            'repeat(' + _0x11d8e5 + ',minmax(0,1fr))'),
          (_0x59ba98('combo').hidden = !_0x59302e.combo),
          (document.querySelector('.sample-line').hidden = _0x59302e.simple),
          (document.querySelector('.hero-rates>span:first-child').hidden = !_0x59302e.cascade),
          (document.querySelector('.hero-rates>i').hidden = !_0x59302e.cascade),
          (_0x59ba98('spec-left').hidden = !_0x52a9ba.seen.includes('boost')),
          (_0x59ba98('spec-right').hidden = _0x59302e.simple),
          (document.querySelector('.specimen-card').hidden = !_0x59302e.cascade),
          (_0x59ba98('chapter-track').hidden = 0x0 === _0x4ac0a1.decays),
          (document.querySelector('.goal-card').hidden = true),
          (document.querySelector('.begin-controls').hidden = false),
          (_0x59ba98('begin-upgrade-price').textContent = _0x46b8ca(_0x27c69e.tapCost(_0x4ac0a1))),
          (_0x59ba98('begin-upgrade-detail').textContent =
            'Уровень ' +
            _0x4ac0a1.tapLevel +
            '\x20·\x20базовая\x20сила\x20' +
            (0x1 + 0x2 * _0x4ac0a1.tapLevel) +
            '\x20→\x20' +
            (0x3 + 0x2 * _0x4ac0a1.tapLevel)),
          (_0x59ba98('begin-upgrade-need').textContent =
            _0x4ac0a1.am + 1e-12 >= _0x27c69e.tapCost(_0x4ac0a1)
              ? 'Можно\x20купить\x20улучшение'
              : 'Кликай по банке и копи на следующее улучшение'),
          (_0x59ba98('first-helper').hidden = !_0x59302e.offer),
          _0x21f6eb(_0x59ba98('first-helper-buy'), _0x4ac0a1.am + 1e-12 >= _0x27c69e.dimensionCost(_0x4ac0a1, 0x0)),
          (_0x59ba98('first-helper-buy').textContent =
            'Купить Каплю · ' + _0x46b8ca(_0x27c69e.dimensionCost(_0x4ac0a1, 0x0))),
          document
            .querySelectorAll('[data-act="tap-up"]')
            .forEach((_0xd5160f) => _0x21f6eb(_0xd5160f, _0x4ac0a1.am + 1e-12 >= _0x27c69e.tapCost(_0x4ac0a1))),
          (_0x59ba98('pipeline').hidden = !_0x52a9ba.seen.includes('boost')),
          document.querySelectorAll('#pipeline\x20button').forEach((_0x191da9, _0x2bc458) => {
            ((_0x191da9.hidden = _0x2bc458 >= _0x59302e.dimensions),
              _0x191da9.previousElementSibling &&
                'I' === _0x191da9.previousElementSibling.tagName &&
                (_0x191da9.previousElementSibling.hidden = _0x2bc458 >= _0x59302e.dimensions));
          }),
          (_0x59ba98('ticker').hidden = true),
          (_0x59ba98('coach').hidden = !_0x52a9ba.hints),
          (_0x59ba98('coach-label').textContent = _0x59302e.simple
            ? 'СНАЧАЛА ТОЛЬКО КЛИКИ И УЛУЧШЕНИЯ'
            : 'ОДИН\x20ШАГ\x20ЗА\x20РАЗ'),
          _0x59ba98('coach-title').textContent !== _0x2f01c9.title &&
            (_0x59ba98('coach-title').textContent = _0x2f01c9.title),
          _0x59ba98('coach-text').textContent !== _0x2f01c9.text &&
            (_0x59ba98('coach-text').textContent = _0x2f01c9.text),
          'reactor' !== _0x8fffdd)
        ) {
          const _0x4a7c6d = document.querySelector('#page-' + _0x8fffdd + '\x20.tabs');
          _0x4a7c6d
            .querySelectorAll('[data-sub]')
            .forEach((_0x138d29) => (_0x138d29.hidden = !_0x3c2e10(_0x8fffdd, _0x138d29.dataset.sub)));
          const _0x55838e = Array.from(_0x4a7c6d.querySelectorAll('button')).filter(
            (_0x1af439) => !_0x1af439.hidden,
          ).length;
          ((_0x4a7c6d.hidden = _0x55838e <= 0x1),
            _0x4a7c6d.style.setProperty('--tab-columns', String(Math.min(0x3, Math.max(0x1, _0x55838e)))));
        }
        if ('cascade' === _0x8fffdd && 'dimensions' === _0x13a05e.cascade) {
          const _0x1c935a = _0x59ba98('page-cascade').querySelector('.page-heading');
          ((_0x1c935a.querySelector('h2').textContent = _0x52a9ba.seen.includes('boost') ? 'Помощники' : 'Улучшения'),
            (_0x1c935a.querySelector('.eyebrow').textContent = _0x52a9ba.seen.includes('boost')
              ? 'ПРОИЗВОДСТВО ПРОИЗВОДСТВА'
              : 'ТВОИ\x20ПОМОЩНИКИ'),
            (_0x1c935a.querySelector('p').textContent =
              _0x59302e.dimensions < 0x2
                ? 'Капля добывает кизяк сама. Покупай больше Капель, чтобы ускорить добычу.'
                : _0x59302e.dimensions < 0x4
                  ? 'Новые помощники создают предыдущих. Покупай их по одному и смотри, как растёт добыча.'
                  : 'Старшие\x20помощники\x20производят\x20младших.\x20Каждые\x2010\x20покупок\x20усиливают\x20свою\x20ступень.'),
            document.querySelectorAll('[data-dim]').forEach((_0x4c0672) => {
              const _0x2a4dc9 = +_0x4c0672.dataset.dim;
              ((_0x4c0672.hidden = _0x2a4dc9 >= _0x59302e.dimensions),
                _0x52a9ba.seen.includes('boost') ||
                  (_0x4c0672.querySelector('h3').textContent = _0x27c69e.DIMENSIONS[_0x2a4dc9].name),
                (_0x4c0672.querySelector('.batch-track').hidden = !_0x52a9ba.seen.includes('colony')));
            }));
          const _0xc0f320 = document.querySelector('[data-act="max"]'),
            _0x31aca9 = _0x59ba98('buy-mode');
          ((_0xc0f320.hidden = !_0x59302e.max),
            (_0x31aca9.hidden = !_0x59302e.bulk),
            (_0xc0f320.parentElement.hidden = !_0x59302e.max && !_0x59302e.bulk),
            (document.querySelector('[data-act=\x22sync\x22]').closest('.card').hidden = !_0x59302e.sync),
            (document
              .querySelector('[data-act="sync"]')
              .closest('.card')
              .querySelector('h3').childNodes[0x0].textContent = 'Общее\x20ускорение\x20'));
          const _0x3dbdb6 = document.querySelector('[data-act="boost"]').closest('.card'),
            _0x6147ef = document.querySelector('[data-act="resonance"]').closest('.card');
          ((_0x3dbdb6.hidden = !_0x59302e.boost),
            (_0x6147ef.hidden = !_0x59302e.resonance),
            (_0x3dbdb6.parentElement.hidden = !_0x59302e.boost && !_0x59302e.resonance),
            (_0x3dbdb6.parentElement.style.gridTemplateColumns =
              _0x59302e.boost && _0x59302e.resonance ? '1fr 1fr' : '1fr'),
            (_0x3dbdb6.parentElement.previousElementSibling.hidden = !_0x59302e.boost && !_0x59302e.resonance));
          const _0x2f39d1 = _0x59ba98('cascade-content').querySelector('.info');
          _0x2f39d1 && (_0x2f39d1.hidden = !_0x59302e.boost);
        }
        let _0x49135a;
        _0x49135a =
          _0x8fffdd !== _0x2f01c9.page
            ? document.querySelector('.nav\x20[data-page=\x22' + _0x2f01c9.page + '\x22]')
            : _0x2f01c9.sub && _0x13a05e[_0x8fffdd] !== _0x2f01c9.sub
              ? _0x59ba98('page-' + _0x8fffdd).querySelector('[data-sub=\x22' + _0x2f01c9.sub + '\x22]')
              : _0x3bd701(_0x2f01c9);
        const _0x10e204 = [
          _0x8fffdd,
          _0x13a05e[_0x8fffdd],
          _0x2f01c9.id,
          _0x2f01c9.selector,
          _0x52a9ba.hints,
          _0x59ba98('modal').open,
          _0x50b6a6,
          _0x49135a && _0x49135a.disabled,
          _0x49135a && _0x49135a.hidden,
        ].join('|');
        _0x10e204 !== _0x4c1f18 &&
          ((_0x4c1f18 = _0x10e204),
          document.querySelectorAll('.coach-target').forEach((_0x50a806) => {
            (_0x50a806.classList.remove('coach-target'), _0x50a806.removeAttribute('data-coach'));
          }),
          !_0x52a9ba.hints ||
            _0x59ba98('modal').open ||
            !_0x49135a ||
            _0x49135a.closest('[hidden]') ||
            _0x49135a.disabled ||
            (_0x49135a.classList.add('coach-target'),
            _0x49135a.setAttribute('data-coach', 'jar-button' === _0x49135a.id ? 'НАЖМИ' : 'СЮДА')));
      })(),
      KizyacSkins.apply(_0x4ac0a1),
      _0x290669 && _0x290669.refresh(),
      _0x2fe0e9 && _0x2fe0e9.refresh(),
      _0x526457 && _0x526457.refresh(),
      _0x1ebffc && _0x1ebffc.refresh());
    const _0x2fabcc = _0x27c69e.mutationProgress(_0x4ac0a1);
    ((_0x59ba98('mutation-fill').style.transform = 'scaleX(' + _0x2fabcc.fraction + ')'),
      (_0x59ba98('mutation-percent').textContent =
        null === _0x2fabcc.next ? 'MAX' : Math.floor(0x64 * _0x2fabcc.fraction) + '%'),
      _0x59ba98('mutation-progress').setAttribute('aria-valuenow', String(Math.floor(0x64 * _0x2fabcc.fraction))),
      (_0x59ba98('mutation-next').textContent = _0x2fabcc.detail),
      document.body.classList.toggle('cheat-active', !!_0x4ac0a1.cheats.used));
  }
  function _0x2ea47b() {
    ((_0x4ac0a1.bestStage = Math.max(_0x4ac0a1.bestStage, _0x27c69e.stage(_0x4ac0a1))), KizyacSkins.active(_0x4ac0a1));
    const _0x24d637 = KizyacSkins.SKINS.filter((_0x3692d6) => KizyacSkins.unlocked(_0x4ac0a1, _0x3692d6.id)).slice(
      -0x1,
    )[0x0];
    for (
      void 0x0 !== _0x4f54bb &&
      _0x24d637.at > _0x4f54bb &&
      ((_0x4f54bb = _0x24d637.at),
      _0x27c69e.learnFeatures(_0x4ac0a1).journal && _0x3e7a4a('Открыт скин: ' + _0x24d637.name));
      _0x4ac0a1.notices.length;
    ) {
      const _0x5c87e7 = _0x4ac0a1.notices.shift();
      'protocol' === _0x5c87e7.type &&
        (_0x3a73bb(true, false, 'protocol'),
        _0x3e7a4a(
          'Протокол\x20пройден:\x20' + _0x27c69e.PROTOCOLS[_0x5c87e7.id].name + '\x20·\x20ранг\x20' + _0x5c87e7.rank,
        ),
        (_0x50b6a6 = ''));
    }
    (_0x4ac0a1.decays > _0x523d87.decays &&
      0x0 === _0x523d87.decays &&
      (_0x3e7a4a('Распад!\x20Открыты\x20изотопные\x20улучшения.'), (_0x50b6a6 = '')),
      _0x4ac0a1.sings > _0x523d87.sings &&
        (_0x3e7a4a('Сингулярность\x20создана.\x20Масса\x20готова\x20к\x20исследованиям.'), (_0x50b6a6 = '')),
      (_0x523d87 = {
        decays: _0x4ac0a1.decays,
        sings: _0x4ac0a1.sings,
        realities: _0x4ac0a1.realities,
      }));
    const _0x2078cd = _0x27c69e.unlockAwards(_0x4ac0a1);
    _0x2078cd.length &&
      ((_0x4ac0a1.cosmetics.unread += _0x2078cd.length),
      'journal' === _0x8fffdd && 'awards' === _0x13a05e.journal && (_0x4ac0a1.cosmetics.unread = 0x0),
      _0x27c69e.learnFeatures(_0x4ac0a1).journal &&
        Date.now() - _0x41c347 > 0x708 &&
        ((_0x41c347 = Date.now()),
        _0x3a73bb(false, false, 'achievement'),
        _0x3e7a4a(
          'Достижение: ' + _0x2078cd[0x0].name + (_0x2078cd.length > 0x1 ? ' · ещё ' + (_0x2078cd.length - 0x1) : ''),
        )));
  }
  function _0x3c21c0() {
    const _0xa23aa7 = Date.now();
    if (_0x534d2f || _0x59ba98('modal').open || _0xa23aa7 - _0x2e641f < 0x28) return;
    (_0xa23aa7 - _0x2e641f > 0x3e8 && ((_0x4ac0a1.comboCount = 0x0), (_0x4ac0a1.combo = 0x1)),
      (_0x2e641f = _0xa23aa7),
      KizyacMotion.tap(_0x59ba98('jar-button'), _0x4ac0a1));
    const _0x2a3042 = _0x27c69e.learnFeatures(_0x4ac0a1).combo && Math.random() < 0.035,
      _0x3c8faf = _0x27c69e.tap(_0x4ac0a1, 0x1, _0x2a3042);
    (_0x218d2b(),
      _0x3a73bb(false, false, _0x2a3042 ? 'critical' : 'tap'),
      (_0x59ba98('feedback').textContent = _0x595465.valid(_0x3c8faf)
        ? (_0x2a3042 ? 'КРИТ! +' : '+') + _0x46b8ca(_0x3c8faf)
        : 'НАЖАТИЯ\x20ОТКЛЮЧЕНЫ\x20ПРАВИЛОМ'),
      _0x59ba98('feedback').classList.add('reward'),
      _0x595465.valid(_0x3c8faf) &&
        KizyacMotion.tapGain(_0x59ba98('chamber'), _0x4ac0a1, (_0x2a3042 ? '×3\x20+' : '+') + _0x46b8ca(_0x3c8faf)),
      (_0x55e852 = _0xa23aa7 + 0x28a),
      _0x2a3042 && _0x526457 && _0x526457.reward(true),
      _0x5ab177());
  }
  function _0x5ab177() {
    _0x590207 ||
      (_0x590207 = requestAnimationFrame(() => {
        ((_0x590207 = 0x0), _0x516d4c());
      }));
  }
  function _0xa5b927(_0x54effc, _0x1de2c9 = 'upgrade') {
    const _0x3b2d39 = _0xdae9af?.['dataset']['act'],
      _0x65757 = _0xdae9af?.['dataset']['id'];
    (_0x218d2b(),
      _0x3a73bb(true, false, _0x1de2c9),
      _0x526457 && _0x526457.reward(),
      _0x54effc && _0x3e7a4a(_0x54effc),
      _0x2ea47b(),
      _0x236698(),
      _0x516d4c(true));
    const _0x30a6d8 = Array.from(document.querySelectorAll('.page.active [data-act]')).find(
      (_0x25883e) => _0x25883e.dataset.act === _0x3b2d39 && _0x25883e.dataset.id === _0x65757,
    );
    _0x30a6d8 && KizyacMotion.purchase(_0x30a6d8.closest('.card') || _0x30a6d8, _0x4ac0a1);
  }
  function _0x4ebcb5() {
    _0x4ac0a1.pendingGlyph &&
      _0x332e9c(
        _0x187c63('portal') +
          '<span class="eyebrow">СЕКТОР ЗАВЕРШЁН</span><h2>Выбери руну реальности</h2><p>В коллекцию попадёт одна руна. Её можно менять на другие собранные руны в разделе «Реальности».</p><div class="glyph-choices">' +
          _0x27c69e.GLYPHS.map(
            (_0x1b07fb) =>
              '<button class="glyph-choice" data-act="glyph" data-id="' +
              _0x1b07fb.id +
              '\x22><b\x20style=\x22color:' +
              _0x1b07fb.color +
              '\x22>' +
              _0x1b07fb.name +
              '</b><small>' +
              _0x1b07fb.desc +
              ' · Сила ' +
              (0x1 + Math.floor((_0x4ac0a1.realities - 0x1) / 0x2)) +
              '</small></button>',
          ).join('') +
          '</div>',
      );
  }
  function _0x292909() {
    (_0x332e9c(
      '<span\x20class=\x22eyebrow\x22>ПАРАМЕТРЫ\x20ЛАБОРАТОРИИ</span><h2\x20data-act=\x22secret-tap\x22\x20class=\x22secret-heading\x22\x20role=\x22button\x22\x20tabindex=\x220\x22\x20aria-label=\x22Настройки\x22>Настройки</h2>' +
        [
          ['sound', 'Звуки', 'Разные клики и звуки событий'],
          ['haptic', 'Виброотклик', 'Лёгкий отклик на нажатия'],
          ['motion', 'Плавность', 'Переходы\x20интерфейса'],
          ['hints', 'Пошаговые\x20подсказки', 'Подсвечивать\x20следующую\x20нужную\x20кнопку'],
        ]
          .map(
            (_0x5b10c9) =>
              '<div class="toggle-row"><div><b>' +
              _0x5b10c9[0x1] +
              '</b><small>' +
              _0x5b10c9[0x2] +
              '</small></div><button role="switch" aria-label="' +
              _0x5b10c9[0x1] +
              '" aria-checked="' +
              ('hints' === _0x5b10c9[0x0] ? _0x27c69e.learning(_0x4ac0a1).hints : _0x4ac0a1.settings[_0x5b10c9[0x0]]) +
              '" data-act="setting" data-id="' +
              _0x5b10c9[0x0] +
              '\x22\x20class=\x22switch\x20' +
              (('hints' === _0x5b10c9[0x0] ? _0x27c69e.learning(_0x4ac0a1).hints : _0x4ac0a1.settings[_0x5b10c9[0x0]])
                ? 'on'
                : '') +
              '\x22><i></i></button></div>',
          )
          .join('') +
        '<button class="secondary wide" data-act="sound-test">Проверить звук</button>' +
        (_0x526457 ? _0x526457.settings() : '') +
        '<button class="secondary wide" data-act="open-skins" ' +
        (_0x27c69e.learnFeatures(_0x4ac0a1).journal ? '' : 'hidden') +
        '>Скины банки</button><div class="input-row"><label for="notation">Запись больших чисел</label><select id="notation" data-field="notation"><option value="mixed">Смешанная</option><option value="scientific">Научная (1e80)</option><option value="words">Словами (1 триллион)</option></select></div><div class="modal-actions"><button class="secondary" data-act="export">Экспорт копии</button><button class="secondary" data-act="import">Импорт копии</button></div><button class="secondary wide" data-act="help">Открыть справку</button><p class="save-status">Прогресс в приложении — каждые 5 секунд, после покупок и при сворачивании. Копия в выбранную папку — автоматически, без паролей.<br>Офлайн: ' +
        (_0x27c69e.has(_0x4ac0a1, 'i2') ? '100%\x20·\x20до\x2072\x20часов' : '85%\x20·\x20до\x2048\x20часов') +
        '. Без рекламы и покупок.</p>' +
        (_0xa75cfa ? _0xa75cfa.settings() : '') +
        '<div class="author-credit"><img src="enderstal.jpg" width="40" height="40" alt=""><strong>EnderStal</strong></div>',
    ),
      (_0x59ba98('notation').value = _0x4ac0a1.settings.notation));
  }
  function _0x4e77b7(_0x4fd012, _0x5d20a8 = false) {
    if (window.Native && Native.allowStateImport && false === Native.allowStateImport(JSON.stringify(_0x4fd012)))
      return (
        _0x3e7a4a('Для\x20восстановления\x20читерского\x20прогресса\x20сначала\x20введи\x20код\x20чит-меню.'),
        false
      );
    if (_0x32d371) {
      const _0x3cbf37 = _0x27c69e.validateProgress(_0x4fd012);
      if (!_0x3cbf37.valid) return (_0x3e7a4a('Файл не принят: ' + _0x3cbf37.reason), false);
    }
    ((_0x3a91cd = false), _0x526457 && (_0x526457.pause(), _0x526457.prepareReplace()));
    try {
      _0x32d371 || localStorage.setItem('kizyac-before-import', JSON.stringify(_0x4ac0a1));
    } catch (_0x44ae05) {}
    const _0x303e25 = _0x4ac0a1;
    _0x4ac0a1 = _0x4fd012;
    const _0x26eecc = _0x5d20a8 ? _0x27c69e.offline(_0x4ac0a1) : null;
    if (
      ((_0x4ac0a1.lastSeen = Date.now()),
      (_0x523d87 = {
        decays: _0x4ac0a1.decays,
        sings: _0x4ac0a1.sings,
        realities: _0x4ac0a1.realities,
      }),
      (_0x4f54bb = KizyacSkins.SKINS.filter((_0x369e38) => KizyacSkins.unlocked(_0x4ac0a1, _0x369e38.id)).slice(
        -0x1,
      )[0x0].at),
      _0x1199dc(),
      !_0x236698())
    )
      return (
        (_0x4ac0a1 = _0x303e25),
        _0x1199dc(),
        (_0x523d87 = {
          decays: _0x4ac0a1.decays,
          sings: _0x4ac0a1.sings,
          realities: _0x4ac0a1.realities,
        }),
        _0x526457 && _0x526457.configure(),
        false
      );
    (_0x526457 && _0x526457.configure(),
      (_0x50b6a6 = ''),
      (_0x4c1f18 = ''),
      _0x5d1792('reactor'),
      _0x26eecc && _0x26eecc.seconds >= 0x1e && _0x3e7a4a('Прогресс восстановлен, офлайн-добыча начислена'));
  }
  function _0x575018(_0x15d5c1) {
    if (_0x32d371)
      try {
        const _0x392399 = _0x27c69e.validateProgress(JSON.parse(_0x15d5c1));
        if (!_0x392399.valid) return void _0x3e7a4a('Файл\x20не\x20принят:\x20' + _0x392399.reason);
      } catch (_0x555a06) {
        return void _0x3e7a4a('Файл\x20не\x20принят:\x20повреждённые\x20данные');
      }
    if ('string' != typeof _0x15d5c1 || _0x15d5c1.length > 0x40000)
      return void _0x3e7a4a('Некорректный\x20или\x20слишком\x20большой\x20файл');
    const _0x35a7f8 = _0x27c69e.restore(_0x15d5c1);
    if (!_0x35a7f8.valid) return void _0x3e7a4a('Это не сохранение Кизяка');
    const _0x53bc39 = _0x35a7f8.state;
    _0x5628b1(
      'Загрузить этот эксперимент?',
      '<p>Добыто: <b>' +
        _0x46b8ca(_0x53bc39.total) +
        '</b><br>Распадов: ' +
        _0x4818d3(_0x53bc39.decays) +
        '<br>Реальностей: ' +
        _0x4818d3(_0x53bc39.realities) +
        '</p><p class="reset-warning">Текущее сохранение будет заменено. Его копия останется в локальном резерве приложения. Для отдельного файла сначала используй экспорт.</p>',
      () => {
        (_0x4e77b7(_0x53bc39, true), _0x3e7a4a('Эксперимент загружен'));
      },
      'Загрузить',
    );
  }
  function _0x2fa048(_0x268865) {
    _0x268865.seconds < 0x1e ||
      (_0x59ba98('modal').open
        ? _0x3e7a4a('Офлайн-прогресс начислен: +' + _0x46b8ca(_0x268865.gain) + ' кизяка')
        : _0x332e9c(
            _0x187c63('clock') +
              '<span class="eyebrow">ЛАБОРАТОРИЯ НЕ СПАЛА</span><h2>Пока тебя не было</h2><p>Учтено ' +
              _0x649767(_0x268865.seconds) +
              ' отсутствия при эффективности ' +
              Math.round((_0x268865.effective / _0x268865.seconds) * 0x64) +
              '%.</p><div\x20class=\x22gain-value\x22>+' +
              _0x46b8ca(_0x268865.gain) +
              '</div><p>КИЗЯКА\x20ЗА\x20ВСЁ\x20ВРЕМЯ</p>' +
              (_0x268865.decays || _0x268865.sings
                ? '<p>Автоматических\x20распадов:\x20' +
                  _0x268865.decays +
                  '<br>Сингулярностей: ' +
                  _0x268865.sings +
                  '</p>'
                : '') +
              '<p class="fineprint">' +
              (_0x268865.approximate
                ? 'Длинный интервал рассчитан укрупнёнными шагами. При частых сбросах результат приблизительный.'
                : 'Прогресс уже начислен.') +
              '</p><button class="primary wide" data-act="close">Продолжить эксперимент</button>',
          ));
  }
  function _0x26916f() {
    if (!_0x534d2f) {
      (_0x1da25b(performance.now()),
        (_0x534d2f = true),
        cancelAnimationFrame(_0x590207),
        (_0x590207 = 0x0),
        _0x526457 && _0x526457.pause(),
        _0x236698());
      try {
        window.Native && Native.flushBackup && Native.flushBackup();
      } catch (_0x35209c) {}
    }
  }
  function _0x42febd() {
    if (!_0x534d2f) return;
    _0x27c69e.Lab.clearEffects(_0x4ac0a1);
    const _0x2079a4 = _0x27c69e.offline(_0x4ac0a1);
    ((_0x534d2f = false),
      (_0x25ca5f = performance.now()),
      (_0x4ac0a1.combo = 0x1),
      (_0x4ac0a1.comboCount = 0x0),
      _0x2ea47b(),
      _0x236698(),
      _0x516d4c(true),
      _0x2fa048(_0x2079a4));
  }
  function _0x1da25b(_0x1103ca) {
    if (_0x534d2f) return;
    const _0x5e8570 = Math.max(0x0, Math.min(0x2, (_0x1103ca - _0x25ca5f) / 0x3e8));
    ((_0x25ca5f = _0x1103ca), _0x27c69e.advance(_0x4ac0a1, _0x5e8570), (_0x4ac0a1.activeSeconds += _0x5e8570));
    const _0x301e0e = Date.now();
    (_0x301e0e - _0x2e641f > 0x3e8 && ((_0x4ac0a1.combo = 0x1), (_0x4ac0a1.comboCount = 0x0)),
      _0x55e852 &&
        _0x301e0e > _0x55e852 &&
        ((_0x55e852 = 0x0),
        (_0x59ba98('feedback').textContent = 'ТАПАЙ ПО БАНКЕ'),
        _0x59ba98('feedback').classList.remove('reward')),
      _0x1103ca - _0x2cef40 > 0xc8 && (_0x2ea47b(), _0x5ab177(), (_0x2cef40 = _0x1103ca)),
      _0x301e0e - _0x409d92 > 0x1388 && _0x236698());
  }
  (document.querySelector('[data-act=\x22coach-info\x22]').addEventListener('keydown', (_0x14200c) => {
    ('Enter' !== _0x14200c.key && '\x20' !== _0x14200c.key) ||
      (_0x14200c.preventDefault(), _0x14200c.currentTarget.click());
  }),
    _0x59ba98('jar-button').addEventListener('pointerdown', (_0x65e428) => {
      (_0x65e428.preventDefault(), _0x3c21c0());
    }),
    _0x59ba98('jar-button').addEventListener('keydown', (_0x40ad31) => {
      ('Enter' !== _0x40ad31.key && '\x20' !== _0x40ad31.key) ||
        _0x40ad31.repeat ||
        (_0x40ad31.preventDefault(), _0x3c21c0());
    }),
    document.addEventListener('click', (_0x1c6022) => {
      const _0x271aac = _0x1c6022.target.closest('[data-act]');
      if (!_0x271aac || _0x271aac.disabled) return;
      const _0x1a4ab5 = _0x271aac.dataset.act,
        _0x2f1ff9 = _0x271aac.dataset.id;
      if (((_0xdae9af = _0x271aac), 'directory' !== _0x1a4ab5)) {
        if ('directory-go' !== _0x1a4ab5) {
          if ('directory-tool' === _0x1a4ab5)
            return (
              _0x92cb67(),
              'player' === _0x2f1ff9
                ? void _0x526457.action('player')
                : 'help' === _0x2f1ff9
                  ? void (_0x27c69e.learnFeatures(_0x4ac0a1).journal
                      ? _0x5d1792('journal', 'help')
                      : _0x332e9c(
                          '<h2>Как играть</h2><p>Нажимай на банку и покупай улучшения клика. Затем откроются помощники, которые добывают кизяк автоматически.</p><p>Кнопка «Разделы» показывает все возможности и условия их открытия.</p>',
                        ))
                  : (_0x292909(),
                    void (
                      'saves' === _0x2f1ff9 &&
                      requestAnimationFrame(() =>
                        document.querySelector('.backup-card')?.['scrollIntoView']({
                          block: 'start',
                        }),
                      )
                    ))
            );
          if ('record-finale' === _0x1a4ab5 || 'finish-game' === _0x1a4ab5) {
            const _0x5422a2 = _0x4ac0a1.finale,
              _0x34f372 = 'finish-game' === _0x1a4ab5;
            return void (
              (_0x34f372 ? _0x27c69e.Finale.finish(_0x4ac0a1) : _0x27c69e.Finale.record(_0x4ac0a1)) &&
              (_0x236698()
                ? (_0x516d4c(true), _0x34f372 ? _0x271030() : _0x3e7a4a('Финальный опыт записан'))
                : void 0x0 === _0x5422a2
                  ? delete _0x4ac0a1.finale
                  : (_0x4ac0a1.finale = _0x5422a2))
            );
          }
          if ('ending-review' !== _0x1a4ab5) {
            if ('ending-return' === _0x1a4ab5) return (_0x92cb67(), void _0x5d1792('reactor'));
            if (!(
              (_0x2fe0e9 && _0x2fe0e9.action(_0x1a4ab5, _0x2f1ff9)) ||
              (_0x290669 && _0x290669.action(_0x1a4ab5, _0x2f1ff9)) ||
              (_0xa75cfa && _0xa75cfa.action(_0x1a4ab5, _0x2f1ff9)) ||
              (_0x526457 && _0x526457.action(_0x1a4ab5, _0x2f1ff9))
            )) {
              if ('mutation-info' === _0x1a4ab5) {
                const _0x49400b = _0x27c69e.mutationProgress(_0x4ac0a1);
                return void _0x332e9c(
                  '<span\x20class=\x22eyebrow\x22>ЭВОЛЮЦИЯ\x20БАНКИ</span><h2>' +
                    _0x49400b.name +
                    '</h2><p>' +
                    _0x49400b.caption +
                    '</p><p>' +
                    _0x49400b.detail +
                    '</p><p class="fineprint">Мутация сохраняется после сбросов. На больших этапах полоса показывает прогресс к следующей форме по условиям текущей системы.</p><button class="primary wide" data-act="close">Понятно</button>',
                );
              }
              if ('coach-info' === _0x1a4ab5) {
                const _0x34c433 = _0x27c69e.learnStep(_0x4ac0a1, _0x15386d);
                return void _0x332e9c(
                  '<span\x20class=\x22eyebrow\x22>ПОДСКАЗКА</span><h2>' +
                    _0x34c433.title +
                    '</h2><p>' +
                    _0x34c433.text +
                    '</p><button class="primary wide" data-act="coach-follow">Показать нужную кнопку</button>',
                );
              }
              if ('coach-follow' === _0x1a4ab5) return (_0x92cb67(), void _0x3c43cc());
              if ('tap-boost' !== _0x1a4ab5) {
                if ('new-save' !== _0x1a4ab5) {
                  if ('award-filter' !== _0x1a4ab5) {
                    if ('nav' !== _0x1a4ab5) {
                      if ('sub' !== _0x1a4ab5) {
                        if ('jump' !== _0x1a4ab5) {
                          if ('close' === _0x1a4ab5) return (_0x92cb67(), void _0x516d4c());
                          if ('sound-test' === _0x1a4ab5)
                            return (
                              _0x3a73bb(false, true, 'unlock'),
                              void _0x3e7a4a('Тестовый звук. Громкость регулируется кнопками телефона.')
                            );
                          if ('open-skins' === _0x1a4ab5) return (_0x92cb67(), void _0x5d1792('journal', 'skins'));
                          if ('skin' !== _0x1a4ab5) {
                            if ('settings' !== _0x1a4ab5) {
                              if ('goal' !== _0x1a4ab5) {
                                if ('hint-jump' !== _0x1a4ab5) {
                                  if ('lesson-ack' === _0x1a4ab5) return (_0x92cb67(), void _0x516d4c());
                                  if ('helper-buy' !== _0x1a4ab5) {
                                    if ('buy-mode' === _0x1a4ab5) {
                                      if (!_0x27c69e.learnFeatures(_0x4ac0a1).bulk) return;
                                      return (
                                        _0x3a73bb(false, false, 'toggle'),
                                        _0x27c69e.learnAcknowledge(_0x4ac0a1, 'batch'),
                                        _0x236698(),
                                        (_0x21bb59 = 0x1 === _0x21bb59 ? 0xa : 0xa === _0x21bb59 ? 0x2710 : 0x1),
                                        void _0x516d4c(true)
                                      );
                                    }
                                    if ('dim' !== _0x1a4ab5) {
                                      if ('sync' !== _0x1a4ab5) {
                                        if ('max' === _0x1a4ab5) {
                                          const _0x5cccc8 = _0x27c69e.learnFeatures(_0x4ac0a1);
                                          if (!_0x5cccc8.max) return;
                                          let _0x38f05f = 0x0;
                                          for (
                                            let _0x3b3578 = _0x5cccc8.dimensions - 0x1;
                                            _0x3b3578 >= 0x0;
                                            _0x3b3578--
                                          )
                                            _0x38f05f += _0x27c69e.buyDimension(_0x4ac0a1, _0x3b3578, 0x2710);
                                          return (
                                            _0x5cccc8.sync && (_0x38f05f += _0x27c69e.buySync(_0x4ac0a1, 0x2710)),
                                            void (_0x38f05f && _0xa5b927(null, 'dimension'))
                                          );
                                        }
                                        if ('tap-up' !== _0x1a4ab5) {
                                          if ('boost' === _0x1a4ab5) {
                                            if (!_0x27c69e.canBoost(_0x4ac0a1)) return;
                                            return void (_0x27c69e.learning(_0x4ac0a1).seen.includes('boost')
                                              ? _0x27c69e.boostReset(_0x4ac0a1) &&
                                                _0xa5b927('Усиление:\x20' + _0x4ac0a1.boosts, 'boost')
                                              : _0x5628b1(
                                                  'Первое\x20усиление',
                                                  '<p>Текущие\x20помощники,\x20ускорения\x20и\x20сила\x20клика\x20начнутся\x20заново.\x20Взамен\x20вся\x20цепочка\x20станет\x20быстрее\x20и\x20откроется\x20новый\x20помощник.</p><p>Накопленные\x20знания\x20и\x20подсказки\x20останутся.\x20Следующая\x20банка\x20пройдёт\x20знакомые\x20шаги\x20быстрее.</p>',
                                                  () => {
                                                    (_0x27c69e.boostReset(_0x4ac0a1),
                                                      _0x27c69e.learnAcknowledge(_0x4ac0a1, 'boost'),
                                                      _0x3e7a4a('Усиление готово. Открыт новый помощник.'));
                                                  },
                                                  'Усилить\x20банку',
                                                ));
                                          }
                                          if ('resonance' !== _0x1a4ab5) {
                                            if ('iso-max' === _0x1a4ab5) {
                                              let _0x2c7077 = 0x0;
                                              for (let _0x4ef63d = 0x0; _0x4ef63d < 0xa0; _0x4ef63d++) {
                                                let _0x5a24df = false;
                                                for (const _0x53c0a9 of _0x27c69e.ISO_UPGRADES)
                                                  _0x27c69e.buyIso(_0x4ac0a1, _0x53c0a9.id) &&
                                                    ((_0x5a24df = true), _0x2c7077++);
                                                if (!_0x5a24df) break;
                                              }
                                              return void (_0x2c7077 && _0xa5b927('Куплено уровней: ' + _0x2c7077));
                                            }
                                            if ('iso' !== _0x1a4ab5) {
                                              if ('core' !== _0x1a4ab5) {
                                                if ('research' !== _0x1a4ab5) {
                                                  if ('decay' !== _0x1a4ab5) {
                                                    if ('singularity' !== _0x1a4ab5) {
                                                      if ('reality' !== _0x1a4ab5) {
                                                        if ('protocol' === _0x1a4ab5) {
                                                          const _0xf28919 = _0x27c69e.PROTOCOLS[+_0x2f1ff9];
                                                          return void _0x5628b1(
                                                            _0xf28919.name +
                                                              '\x20·\x20ранг\x20' +
                                                              (_0x4ac0a1.protocols[_0xf28919.id] + 0x1),
                                                            '<p>' +
                                                              _0xf28919.desc +
                                                              '</p><p>Цель: <b>' +
                                                              _0x149c7b(
                                                                _0x27c69e.challengeGoal(_0x4ac0a1, _0xf28919.id),
                                                              ) +
                                                              '</b>\x20кизяка\x20за\x20цикл.<br>Награда:\x20' +
                                                              _0xf28919.reward +
                                                              '.</p><p class="reset-warning">Текущая банка перезапустится без обычной награды за распад. Изотопы и их улучшения сохранятся.</p>',
                                                            () => {
                                                              (_0x27c69e.startChallenge(_0x4ac0a1, +_0x2f1ff9),
                                                                _0x5d1792('cascade', 'dimensions'),
                                                                _0x3e7a4a('Протокол\x20начат'));
                                                            },
                                                            'Начать',
                                                          );
                                                        }
                                                        if ('exit-protocol' !== _0x1a4ab5) {
                                                          if ('path' === _0x1a4ab5) {
                                                            _0x3a73bb(false, false, 'subtab');
                                                            const _0x8af70a = _0x27c69e.chosenPath(_0x4ac0a1);
                                                            return _0x8af70a && _0x8af70a !== _0x2f1ff9
                                                              ? void _0x3e7a4a('Для смены ветки нужна перестройка')
                                                              : ((_0x15386d = _0x2f1ff9), void _0x516d4c(true));
                                                          }
                                                          if ('respec' !== _0x1a4ab5) {
                                                            if ('mode' === _0x1a4ab5)
                                                              return (
                                                                (_0x4ac0a1.mode = _0x2f1ff9),
                                                                void _0xa5b927('Режим изменён')
                                                              );
                                                            if ('auto' !== _0x1a4ab5) {
                                                              if ('glyph' !== _0x1a4ab5) {
                                                                if ('choose-glyph' !== _0x1a4ab5) {
                                                                  if ('equip' !== _0x1a4ab5) {
                                                                    if ('photo' === _0x1a4ab5)
                                                                      return (
                                                                        (_0x4ac0a1.photo = +_0x2f1ff9),
                                                                        _0x1199dc(),
                                                                        void _0xa5b927(
                                                                          'Выбран\x20образец\x200' + _0x4ac0a1.photo,
                                                                        )
                                                                      );
                                                                    if (
                                                                      'setting' === _0x1a4ab5 &&
                                                                      'hints' === _0x2f1ff9
                                                                    ) {
                                                                      const _0x2d1fba = _0x27c69e.learning(_0x4ac0a1);
                                                                      return (
                                                                        (_0x2d1fba.hints = !_0x2d1fba.hints),
                                                                        _0x271aac.classList.toggle(
                                                                          'on',
                                                                          _0x2d1fba.hints,
                                                                        ),
                                                                        _0x271aac.setAttribute(
                                                                          'aria-checked',
                                                                          String(_0x2d1fba.hints),
                                                                        ),
                                                                        _0x236698(),
                                                                        void _0x516d4c()
                                                                      );
                                                                    }
                                                                    return 'setting' === _0x1a4ab5
                                                                      ? ((_0x4ac0a1.settings[_0x2f1ff9] =
                                                                          !_0x4ac0a1.settings[_0x2f1ff9]),
                                                                        'sound' !== _0x2f1ff9 &&
                                                                          _0x3a73bb(false, false, 'toggle'),
                                                                        _0x271aac.classList.toggle(
                                                                          'on',
                                                                          _0x4ac0a1.settings[_0x2f1ff9],
                                                                        ),
                                                                        _0x271aac.setAttribute(
                                                                          'aria-checked',
                                                                          String(_0x4ac0a1.settings[_0x2f1ff9]),
                                                                        ),
                                                                        _0x236698(),
                                                                        _0x516d4c(),
                                                                        void (
                                                                          'sound' === _0x2f1ff9 &&
                                                                          _0x3a73bb(false, false, 'toggle')
                                                                        ))
                                                                      : 'help' === _0x1a4ab5
                                                                        ? (_0x92cb67(),
                                                                          void (_0x27c69e.learnFeatures(_0x4ac0a1)
                                                                            .journal
                                                                            ? _0x5d1792('journal', 'help')
                                                                            : _0x332e9c(
                                                                                '<span\x20class=\x22eyebrow\x22>СНАЧАЛА\x20ПРОСТОЕ</span><h2>Кликай\x20и\x20улучшай</h2><p>Нажимай\x20на\x20банку,\x20копи\x20кизяк\x20и\x20покупай\x20«Улучшить\x20клик».\x20Подсказка\x20на\x20экране\x20покажет\x20следующую\x20кнопку.</p><p>Остальные\x20возможности\x20будут\x20появляться\x20постепенно.</p><button\x20class=\x22primary\x20wide\x22\x20data-act=\x22close\x22>Понятно</button>',
                                                                              )))
                                                                        : void ('export' !== _0x1a4ab5
                                                                            ? 'import' !== _0x1a4ab5 ||
                                                                              (window.Native && Native.importSave
                                                                                ? Native.importSave()
                                                                                : _0x59ba98('import-file').click())
                                                                            : (function () {
                                                                                if (!_0x236698()) return;
                                                                                const _0x10269e = JSON.stringify(
                                                                                  _0x4ac0a1,
                                                                                  null,
                                                                                  0x2,
                                                                                );
                                                                                if (window.Native && Native.exportSave)
                                                                                  return void Native.exportSave(
                                                                                    _0x10269e,
                                                                                  );
                                                                                const _0x4da7c1 = new Blob(
                                                                                    [_0x10269e],
                                                                                    {
                                                                                      type: 'application/json',
                                                                                    },
                                                                                  ),
                                                                                  _0x4033bd =
                                                                                    URL.createObjectURL(_0x4da7c1),
                                                                                  _0x2bcdf8 =
                                                                                    document.createElement('a');
                                                                                ((_0x2bcdf8.href = _0x4033bd),
                                                                                  (_0x2bcdf8.download =
                                                                                    'Kizyac-save.json'),
                                                                                  _0x2bcdf8.click(),
                                                                                  setTimeout(
                                                                                    () =>
                                                                                      URL.revokeObjectURL(_0x4033bd),
                                                                                    0x3e8,
                                                                                  ),
                                                                                  _0x3e7a4a(
                                                                                    'Сохранение\x20экспортировано',
                                                                                  ));
                                                                              })());
                                                                  }
                                                                  _0x27c69e.equipGlyph(_0x4ac0a1, _0x2f1ff9) &&
                                                                    _0xa5b927('Руна активирована', 'equip');
                                                                } else _0x4ebcb5();
                                                              } else
                                                                _0x27c69e.chooseGlyph(_0x4ac0a1, _0x2f1ff9) &&
                                                                  (_0x92cb67(),
                                                                  _0xa5b927('Руна добавлена в коллекцию'));
                                                            } else
                                                              _0x27c69e.automationUnlocked(_0x4ac0a1, _0x2f1ff9) &&
                                                                ((_0x4ac0a1.auto[_0x2f1ff9] =
                                                                  !_0x4ac0a1.auto[_0x2f1ff9]),
                                                                'dims' === _0x2f1ff9 &&
                                                                  _0x4ac0a1.auto.dims &&
                                                                  !_0x4ac0a1.auto.helperMask.some(Boolean) &&
                                                                  _0x4ac0a1.auto.helperMask.fill(true),
                                                                _0xa5b927());
                                                          } else
                                                            _0x5628b1(
                                                              'Перестроить исследования?',
                                                              '<p>Вся\x20потраченная\x20на\x20исследования\x20масса\x20вернётся.\x20Текущая\x20изотопная\x20эпоха\x20и\x20банка\x20обнулятся.\x20Можно\x20будет\x20выбрать\x20другую\x20ветку.</p>',
                                                              () => {
                                                                (_0x27c69e.respec(_0x4ac0a1), _0x516d4c(true));
                                                              },
                                                              'Перестроить',
                                                            );
                                                        } else
                                                          _0x5628b1(
                                                            'Прервать\x20протокол?',
                                                            '<p>Текущая банка обнулится без награды. Изотопы и улучшения сохранятся.</p>',
                                                            () => {
                                                              (_0x27c69e.exitChallenge(_0x4ac0a1),
                                                                _0x5d1792('decay', 'protocols'));
                                                            },
                                                            'Выйти',
                                                          );
                                                      } else {
                                                        if (!_0x27c69e.canReality(_0x4ac0a1)) return;
                                                        _0x5628b1(
                                                          'Создать другую реальность?',
                                                          '<p>Сектор\x20«' +
                                                            _0x27c69e.sector(_0x4ac0a1).name +
                                                            '» завершится. Ты получишь <b>' +
                                                            _0x46b8ca(_0x27c69e.coreGain(_0x4ac0a1)) +
                                                            ' ядер</b> и выберешь руну.</p><p class="reset-warning">Масса, исследования и все младшие системы обнулятся. Пройденные протоколы, ядра, руны и достижения останутся. В следующем секторе изменятся правила.</p>',
                                                          () => {
                                                            (_0x27c69e.reality(_0x4ac0a1),
                                                              _0x5d1792('cosmos', 'realities'),
                                                              setTimeout(_0x4ebcb5, 0x1e));
                                                          },
                                                          'Новая реальность',
                                                        );
                                                      }
                                                    } else {
                                                      if (!_0x27c69e.canSing(_0x4ac0a1)) return;
                                                      _0x5628b1(
                                                        'Создать\x20сингулярность?',
                                                        '<p>Получишь\x20<b>' +
                                                          _0x46b8ca(_0x27c69e.massGain(_0x4ac0a1)) +
                                                          ' массы</b> для исследований.</p><p class="reset-warning">Сбросятся банка, изотопы и их улучшения. Масса, исследования, завершённые протоколы, ядра и руны сохранятся.</p>',
                                                        () => {
                                                          (_0x27c69e.singularity(_0x4ac0a1),
                                                            _0x5d1792('cosmos', 'research'));
                                                        },
                                                        'Сжать\x20эпоху',
                                                      );
                                                    }
                                                  } else {
                                                    if (
                                                      !_0x595465.valid(_0x27c69e.isotopeGain(_0x4ac0a1)) ||
                                                      _0x4ac0a1.challenge
                                                    )
                                                      return;
                                                    _0x5628b1(
                                                      'Расщепить\x20образец?',
                                                      '<p>Получишь <b>' +
                                                        _0x46b8ca(_0x27c69e.isotopeGain(_0x4ac0a1)) +
                                                        ' изотопов</b>.</p><p class="reset-warning">Банка, измерения, усиления, резонансы и синхронизации обнулятся. Изотопные улучшения и старшие системы останутся.</p>',
                                                      () => {
                                                        (_0x27c69e.decay(_0x4ac0a1),
                                                          _0x5d1792('decay', 'isotopes'),
                                                          _0x3e7a4a('Изотопы получены'));
                                                      },
                                                      'Распад',
                                                    );
                                                  }
                                                } else
                                                  _0x27c69e.buyResearch(_0x4ac0a1, _0x2f1ff9) &&
                                                    _0xa5b927('Исследование завершено', 'research');
                                              } else _0x27c69e.buyCore(_0x4ac0a1, _0x2f1ff9) && _0xa5b927();
                                            } else _0x27c69e.buyIso(_0x4ac0a1, _0x2f1ff9) && _0xa5b927();
                                          } else
                                            _0x27c69e.resonanceReset(_0x4ac0a1) &&
                                              _0xa5b927('Резонанс:\x20' + _0x4ac0a1.resonance, 'resonance');
                                        } else _0x27c69e.buyTap(_0x4ac0a1) && _0xa5b927('Сила нажатия увеличена');
                                      } else {
                                        if (!_0x27c69e.learnFeatures(_0x4ac0a1).sync) return;
                                        _0x27c69e.buySync(_0x4ac0a1, _0x21bb59) && _0xa5b927(null, 'sync');
                                      }
                                    } else {
                                      if (+_0x2f1ff9 >= _0x27c69e.learnFeatures(_0x4ac0a1).dimensions) return;
                                      _0x27c69e.buyDimension(_0x4ac0a1, +_0x2f1ff9, _0x21bb59) &&
                                        _0xa5b927(null, 'dimension');
                                    }
                                  } else
                                    _0x27c69e.learnFeatures(_0x4ac0a1).offer &&
                                      _0x27c69e.buyDimension(_0x4ac0a1, 0x0, 0x1) &&
                                      _0xa5b927('Помощник работает: кизяк добывается сам', 'dimension');
                                } else _0x3c43cc();
                              } else _0x3c43cc();
                            } else _0x292909();
                          } else
                            KizyacSkins.select(_0x4ac0a1, _0x2f1ff9) &&
                              _0xa5b927('Выбран скин: ' + KizyacSkins.active(_0x4ac0a1).name, 'skin');
                        } else _0x5d1792(_0x271aac.dataset.page, _0x271aac.dataset.sub);
                      } else
                        _0x3c2e10(_0x8fffdd, _0x271aac.dataset.sub) &&
                          (_0x3a73bb(false, false, 'subtab'),
                          (_0x13a05e[_0x8fffdd] = _0x271aac.dataset.sub),
                          'journal' === _0x8fffdd &&
                            'awards' === _0x13a05e.journal &&
                            ((_0x4ac0a1.cosmetics.unread = 0x0), _0x236698()),
                          _0x516d4c(true),
                          _0x526457 && _0x526457.animate(_0x59ba98(_0x8fffdd + '-content')),
                          _0xce0256());
                    } else _0x5d1792(_0x271aac.dataset.page);
                  } else
                    KizyacAchievements.groups[_0x2f1ff9] &&
                      ((_0xc57a64 = _0x2f1ff9),
                      _0x516d4c(true),
                      _0x3a73bb(false, false, 'subtab'),
                      _0x526457 && _0x526457.animate(_0x59ba98('journal-content')));
                } else
                  _0x5628b1(
                    'Начать\x20заново?',
                    '<p>Начнётся\x20новая\x20игра.\x20Локальное\x20сохранение\x20и\x20автокопии\x20в\x20подключённой\x20папке\x20будут\x20заменяться\x20новым\x20прогрессом.</p>',
                    () => {
                      _0x4e77b7(_0x27c69e.restore(null).state);
                    },
                    'Начать',
                  );
              } else
                _0x27c69e.activateTapBoost(_0x4ac0a1, Number(_0x2f1ff9)) &&
                  (_0x236698(),
                  _0x3a73bb(false, false, 'unlock'),
                  _0x218d2b(),
                  _0x3e7a4a('Нажатия ×' + _0x2f1ff9 + ' на ' + ('3' === _0x2f1ff9 ? '2 минуты' : '1 минуту')),
                  _0x516d4c());
            }
          } else _0x271030();
        } else {
          if (!(
            'reactor' === _0x271aac.dataset.page ||
            (_0x5aa503(_0x271aac.dataset.page) && _0x3c2e10(_0x271aac.dataset.page, _0x271aac.dataset.sub))
          ))
            return;
          if ((_0x92cb67(), _0x5d1792(_0x271aac.dataset.page, _0x271aac.dataset.sub), _0x271aac.dataset.focus)) {
            const _0x522beb = document.querySelector('.page.active [data-act="' + _0x271aac.dataset.focus + '\x22]');
            _0x522beb?.['closest']('.card')?.['scrollIntoView']({
              block: 'center',
            });
          }
        }
      } else
        _0x332e9c(
          '<h2>Разделы</h2><label class="directory-search">Найти раздел<input id="directory-search" type="search" placeholder="Название или действие" autocomplete="off"></label><div id="directory-list"><section class="directory-group"><button class="directory-item" data-act="directory-go" data-page="reactor" data-search="банка образец клик главная"><span><b>Банка</b><small>Нажатия, мутация и улучшение клика</small></span><span>→</span></button></section>' +
            _0x912dd8
              .map(
                ([_0x529cf1, _0x258329]) =>
                  '<section class="directory-group"><h3>' +
                  _0x529cf1 +
                  '</h3>' +
                  _0x258329
                    .map(([_0x4deba4, _0x3eaad9, _0x3504df, _0x54d4df, _0x59bcbc, _0x5d3c24, _0x2015b1]) => {
                      const _0x359a01 =
                          _0x5aa503(_0x4deba4) &&
                          _0x3c2e10(_0x4deba4, _0x3eaad9) &&
                          (!_0x2015b1 || _0x27c69e.learnFeatures(_0x4ac0a1)[_0x2015b1]),
                        _0x5207fc = !_0x2015b1 && _0x4deba4 === _0x8fffdd && _0x13a05e[_0x8fffdd] === _0x3eaad9;
                      return (
                        '<button\x20class=\x22directory-item\x22\x20data-act=\x22directory-go\x22\x20data-page=\x22' +
                        _0x4deba4 +
                        '\x22\x20data-sub=\x22' +
                        _0x3eaad9 +
                        '\x22\x20data-focus=\x22' +
                        (_0x2015b1 || '') +
                        '" data-search="' +
                        _0x3504df +
                        '\x20' +
                        _0x54d4df +
                        '\x20' +
                        _0x5d3c24 +
                        '\x22\x20' +
                        (_0x359a01 ? '' : 'disabled') +
                        (_0x5207fc ? ' aria-current="page"' : '') +
                        '><span><b>' +
                        _0x3504df +
                        '</b><small>' +
                        (_0x359a01 ? _0x54d4df : _0x59bcbc) +
                        '</small></span><span\x20class=\x22directory-status\x22>' +
                        (_0x5207fc ? 'Здесь' : _0x359a01 ? '→' : 'Закрыто') +
                        '</span></button>'
                      );
                    })
                    .join('') +
                  '</section>',
              )
              .join('') +
            '<section class="directory-group"><h3>Игра</h3>' +
            [
              ['player', 'Музыка', 'Плеер\x20и\x20свои\x20треки'],
              ['settings', 'Настройки', 'Звук, вибрация и анимации'],
              ['saves', 'Сохранения', 'Копии, экспорт и восстановление'],
              ['help', 'Как\x20играть', 'Объяснение механик'],
            ]
              .map(
                ([_0x468f93, _0x3bef0b, _0x12b1dc]) =>
                  '<button\x20class=\x22directory-item\x22\x20data-act=\x22directory-tool\x22\x20data-id=\x22' +
                  _0x468f93 +
                  '" data-search="' +
                  _0x3bef0b +
                  '\x20' +
                  _0x12b1dc +
                  '"><span><b>' +
                  _0x3bef0b +
                  '</b><small>' +
                  _0x12b1dc +
                  '</small></span><span>→</span></button>',
              )
              .join('') +
            '</section></div><p id="directory-empty" hidden>Раздел не найден. Попробуй «скины» или «авто».</p>',
        );
    }),
    document.addEventListener('change', (_0x29828c) => {
      const _0x50a43e = _0x29828c.target,
        _0x283f6c = _0x50a43e.dataset.field;
      if (_0x283f6c) {
        if ('notation' === _0x283f6c)
          return ((_0x4ac0a1.settings.notation = _0x50a43e.value), _0x236698(), void _0x516d4c(true));
        if ('buyMode' === _0x283f6c) return ((_0x4ac0a1.auto.buyMode = _0x50a43e.value), void _0x236698());
        if ('decayAt' === _0x283f6c || 'singAt' === _0x283f6c) {
          const _0x1d42e9 = _0x595465.parse(_0x50a43e.value);
          if (null === _0x1d42e9)
            return (
              _0x3e7a4a('Введи число: например 100 или 1e12'),
              void (_0x50a43e.value = _0x149c7b(_0x4ac0a1.auto[_0x283f6c]))
            );
          _0x4ac0a1.auto[_0x283f6c] = _0x1d42e9;
        } else {
          if ('boostLimit' === _0x283f6c || 'resLimit' === _0x283f6c) {
            const _0xe5438b = Number(_0x50a43e.value),
              _0x5d6aa6 = 'boostLimit' === _0x283f6c ? 0x4 : 0x0,
              _0x1a224e = 'boostLimit' === _0x283f6c ? 0x3e8 : 0x64;
            ((_0x4ac0a1.auto[_0x283f6c] = Number.isFinite(_0xe5438b)
              ? Math.max(_0x5d6aa6, Math.min(_0x1a224e, Math.floor(_0xe5438b)))
              : _0x5d6aa6),
              (_0x50a43e.value = _0x4ac0a1.auto[_0x283f6c]));
          }
        }
        _0x236698();
      }
    }),
    _0x59ba98('import-file').addEventListener('change', async (_0x2685f7) => {
      const _0x10f4b9 = _0x2685f7.target.files[0x0];
      (_0x10f4b9 && _0x575018(await _0x10f4b9.text()), (_0x2685f7.target.value = ''));
    }),
    _0x59ba98('modal').addEventListener('cancel', (_0xd5209f) => {
      (_0xd5209f.preventDefault(), _0x92cb67(), _0x516d4c());
    }),
    _0x59ba98('modal').addEventListener('click', (_0x4aa9a1) => {
      if (_0x4aa9a1.target === _0x59ba98('modal')) {
        const _0xd23706 = _0x59ba98('modal').getBoundingClientRect();
        (_0x4aa9a1.clientX < _0xd23706.left ||
          _0x4aa9a1.clientX > _0xd23706.right ||
          _0x4aa9a1.clientY < _0xd23706.top ||
          _0x4aa9a1.clientY > _0xd23706.bottom) &&
          _0x92cb67();
      }
    }));
  const _0x44d005 = [
    'Крышка держится исключительно на уважении.',
    'Лаборант\x20попросил\x20не\x20называть\x20это\x20йогуртом.',
    'Кизяк требует отдельный кабинет.',
    'Дозиметр\x20написал\x20заявление\x20на\x20отпуск.',
    'Восьмое измерение тоже удивлено.',
    'Колония производит капли. Капли производят проблемы.',
    'Не торопи сингулярность. Она и так всё сожмёт.',
    'Новая партия: тот же кизяк, другие законы физики.',
    'Сегодня\x20без\x20происшествий.\x20Вчерашние\x20ещё\x20не\x20закончились.',
    'Банка маленькая. Научные амбиции — нет.',
  ];
  (setInterval(() => {
    _0x59ba98('ticker').textContent = _0x44d005[Math.floor(Math.random() * _0x44d005.length)];
  }, 0x6590),
    (window.Kizyac = {
      onCheatAuth: KizyacCheats.onAuthResult,
      pause: _0x26916f,
      resume: _0x42febd,
      back: () =>
        _0x59ba98('modal').open
          ? (_0x92cb67(), true)
          : 'reactor' !== _0x8fffdd
            ? (_0x5d1792('reactor'), true)
            : (_0x236698(), false),
      getState: () => JSON.parse(JSON.stringify(_0x4ac0a1)),
      message: _0x3e7a4a,
      receiveImport: _0x575018,
    }),
    (_0x526457 = KizyacExtras.init({
      state: () => _0x4ac0a1,
      save: _0x236698,
      modal: _0x332e9c,
      close: _0x92cb67,
      render: _0x516d4c,
      notify: _0x3e7a4a,
      settings: _0x292909,
      replace: _0x4e77b7,
      haptic: _0x218d2b,
    })),
    Object.assign(window.Kizyac, {
      onMusicState: _0x526457.onMusicState,
      onTracksImported: _0x526457.onTracksImported,
      onMusicImporting: _0x526457.onMusicImporting,
      onBackupStatus: _0x526457.onBackupStatus,
      backupFound: _0x526457.backupFound,
    }),
    (_0x1ebffc = KizyacAtmosphere.init({
      state: () => _0x4ac0a1,
      sound: _0x3a73bb,
    })),
    (_0xa75cfa = KizyacCheatUI.init({
      state: () => _0x4ac0a1,
      save: _0x236698,
      modal: _0x332e9c,
      close: _0x92cb67,
      replace: _0x4e77b7,
      sound: _0x3a73bb,
      notify: _0x3e7a4a,
      render: _0x516d4c,
    })),
    (_0x290669 = KizyacMaterialsUI.init({
      state: () => _0x4ac0a1,
      changed: _0xa5b927,
      go: _0x5d1792,
      confirm: _0x5628b1,
      notify: _0x3e7a4a,
      combinations: () => _0x2fe0e9.combinations(),
    })),
    (_0x2fe0e9 = KizyacLabUI.init({
      state: () => _0x4ac0a1,
      modal: _0x332e9c,
      close: _0x92cb67,
      confirm: _0x5628b1,
      go: _0x5d1792,
      save: _0x236698,
      notify: _0x3e7a4a,
      showGlyphs: _0x4ebcb5,
    })),
    document.addEventListener('visibilitychange', () => (document.hidden ? _0x26916f() : _0x42febd())),
    window.addEventListener('pagehide', _0x236698),
    window.addEventListener('beforeunload', _0x236698),
    (_0x59ba98('pipeline').innerHTML = _0x27c69e.DIMENSIONS.map(
      (_0x5d8ee6, _0x29f7e6) =>
        (_0x29f7e6 ? '<i>←</i>' : '') +
        '<button\x20data-act=\x22jump\x22\x20data-page=\x22cascade\x22\x20data-sub=\x22dimensions\x22\x20aria-label=\x22Измерение\x20' +
        (_0x29f7e6 + 0x1) +
        '\x22>' +
        ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'][_0x29f7e6] +
        '</button>',
    ).join('')),
    _0x1199dc());
  const _0x1238af = _0x20801e.migrated ? null : _0x27c69e.offline(_0x4ac0a1);
  (_0x2ea47b(),
    _0x516d4c(true),
    _0x236698(),
    setInterval(() => _0x1da25b(performance.now()), 0x32),
    _0x3a91cd
      ? _0x332e9c(
          '<span class="eyebrow">ПРОВЕРКА СОХРАНЕНИЯ</span><h2>Нужна целая копия</h2><p>Сохранение повреждено или содержит несовместимый прогресс. ' +
            _0x268cfb +
            '</p><p>Выбери\x20резервную\x20папку\x20или\x20импортируй\x20защищённую\x20копию.\x20Старые\x20данные\x20пока\x20не\x20перезаписаны.</p><button\x20class=\x22primary\x20wide\x22\x20data-act=\x22backup-folder\x22>Открыть\x20резервную\x20папку</button><button\x20class=\x22secondary\x20wide\x22\x20data-act=\x22import\x22>Импорт\x20копии</button><button\x20class=\x22text-button\x22\x20data-act=\x22new-save\x22>Начать\x20новую\x20игру…</button>',
        )
      : _0x20801e.migrated
        ? _0x332e9c(
            _0x187c63('loop') +
              '<span class="eyebrow">ОБНОВЛЕНИЕ 2.0</span><h2>Банка стала целой вселенной.</h2><p>Старые добыча, перерождения и стадия сохранены в архиве. Фото, нажатия и настройки перенесены.</p><p>Новая кампания стартует с 100 кизяка и первой каплей. Впереди — каскад, распад, сингулярности и шесть реальностей.</p><button class="primary wide" data-act="close">Начать новую кампанию</button>',
          )
        : _0x4ac0a1.pendingGlyph
          ? _0x4ebcb5()
          : _0x1238af && _0x2fa048(_0x1238af));
})();
