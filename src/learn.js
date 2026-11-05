(function (_0xece275) {
  'use strict';

  const _0x176608 = _0xece275.KizyacCore || ('function' == typeof require ? require('./core.js') : null),
    _0x5c0b89 = _0x176608.N,
    _0x4e52ce = {
      upgrades: 0x2,
      drops: 0x3,
      colonies: 0x2,
      cultures: 0x2,
    },
    _0x658a36 = [
      'helper',
      'five',
      'colony',
      'ten',
      'batch',
      'colonies3',
      'culture',
      'sync',
      'cultures3',
      'fermenter',
      'boost',
    ],
    _0x2e102f = [
      'helpers',
      'batch',
      'sync',
      'boost',
      'resonance',
      'decay',
      'protocols',
      'automation',
      'modes',
      'singularity',
      'research',
      'realities',
      'journal',
      'elements',
      'fragments',
    ];
  function _0x85b752(_0x13ca43) {
    const _0x43a612 = {
      version: 0x1,
      taps: 0x0,
      upgrades: 0x0,
      starter: false,
      dimensions: 0x0,
      sync: false,
      bulk: false,
      max: false,
      boost: false,
      resonance: false,
      overload: false,
      anomalies: false,
      hints: true,
      seen: [],
      explained: [],
    };
    if (!_0x13ca43 || 0x1 !== _0x13ca43.version) return _0x43a612;
    for (const _0x57f384 of ['taps', 'upgrades', 'dimensions'])
      Number.isFinite(_0x13ca43[_0x57f384]) &&
        (_0x43a612[_0x57f384] = Math.floor(
          Math.max(0x0, Math.min('dimensions' === _0x57f384 ? 0x8 : 0x3b9aca00, _0x13ca43[_0x57f384])),
        ));
    for (const _0x2c2668 of ['starter', 'sync', 'bulk', 'max', 'boost', 'resonance', 'overload', 'anomalies', 'hints'])
      'boolean' == typeof _0x13ca43[_0x2c2668] && (_0x43a612[_0x2c2668] = _0x13ca43[_0x2c2668]);
    return (
      (_0x43a612.seen = Array.isArray(_0x13ca43.seen)
        ? [...new Set(_0x13ca43.seen.filter((_0xedf9f1) => _0x658a36.includes(_0xedf9f1)))]
        : []),
      (_0x43a612.explained = Array.isArray(_0x13ca43.explained)
        ? [...new Set(_0x13ca43.explained.filter((_0x112fd0) => _0x2e102f.includes(_0x112fd0)))]
        : []),
      _0x43a612
    );
  }
  const _0x30b563 = (_0x38dfd4, _0x47bb17) => {
    _0x38dfd4.seen.includes(_0x47bb17) || _0x38dfd4.seen.push(_0x47bb17);
  };
  function _0x762107(_0x115b63) {
    (_0x115b63.learn && 0x1 === _0x115b63.learn.version) ||
      (_0x115b63.learn = {
        version: 0x1,
        taps: 0x0,
        upgrades: 0x0,
        starter: false,
        dimensions: 0x0,
        sync: false,
        bulk: false,
        max: false,
        boost: false,
        resonance: false,
        overload: false,
        anomalies: false,
        hints: true,
        seen: [],
        explained: [],
      });
    const _0x1bc3ca = _0x115b63.learn;
    if (_0x115b63.decays > 0x0 || _0x115b63.sings > 0x0 || _0x115b63.realities > 0x0)
      return (
        (_0x1bc3ca.starter = true),
        (_0x1bc3ca.dimensions = 0x8),
        (_0x1bc3ca.sync =
          _0x1bc3ca.bulk =
          _0x1bc3ca.max =
          _0x1bc3ca.boost =
          _0x1bc3ca.resonance =
          _0x1bc3ca.overload =
          _0x1bc3ca.anomalies =
            true),
        _0x658a36.forEach((_0x2ac22b) => _0x30b563(_0x1bc3ca, _0x2ac22b)),
        _0x1bc3ca
      );
    ((_0x1bc3ca.upgrades = Math.max(_0x1bc3ca.upgrades, _0x115b63.tapLevel)),
      _0x1bc3ca.upgrades >= _0x4e52ce.upgrades && (_0x1bc3ca.starter = true));
    let _0x572f7c = 0x0;
    for (let _0x51d5e3 = 0x0; _0x51d5e3 < 0x8; _0x51d5e3++)
      (_0x115b63.dims[_0x51d5e3].b > 0x0 || _0x5c0b89.valid(_0x115b63.dims[_0x51d5e3].q)) &&
        (_0x572f7c = _0x51d5e3 + 0x1);
    return (
      _0x572f7c &&
        ((_0x1bc3ca.starter = true),
        (_0x1bc3ca.dimensions = Math.max(_0x1bc3ca.dimensions, _0x572f7c)),
        _0x30b563(_0x1bc3ca, 'helper')),
      _0x1bc3ca.starter && (_0x1bc3ca.dimensions = Math.max(0x1, _0x1bc3ca.dimensions)),
      _0x115b63.dims[0x0].b >= _0x4e52ce.drops &&
        (_0x30b563(_0x1bc3ca, 'five'), (_0x1bc3ca.dimensions = Math.max(0x2, _0x1bc3ca.dimensions))),
      _0x115b63.dims[0x1].b >= 0x1 && _0x30b563(_0x1bc3ca, 'colony'),
      _0x115b63.dims[0x0].b >= 0xa && _0x30b563(_0x1bc3ca, 'ten'),
      _0x1bc3ca.seen.includes('colony') && _0x1bc3ca.seen.includes('ten') && (_0x1bc3ca.bulk = true),
      _0x115b63.dims[0x1].b >= _0x4e52ce.colonies && _0x30b563(_0x1bc3ca, 'colonies3'),
      _0x1bc3ca.seen.includes('colonies3') && (_0x1bc3ca.dimensions = Math.max(0x3, _0x1bc3ca.dimensions)),
      _0x115b63.dims[0x2].b >= 0x1 && (_0x30b563(_0x1bc3ca, 'culture'), (_0x1bc3ca.sync = true)),
      _0x115b63.ticks >= 0x1 && (_0x30b563(_0x1bc3ca, 'sync'), (_0x1bc3ca.sync = true)),
      _0x115b63.dims[0x2].b >= _0x4e52ce.cultures && _0x30b563(_0x1bc3ca, 'cultures3'),
      _0x1bc3ca.seen.includes('sync') &&
        _0x1bc3ca.seen.includes('cultures3') &&
        (_0x1bc3ca.dimensions = Math.max(0x4, _0x1bc3ca.dimensions)),
      _0x115b63.dims[0x3].b >= 0x1 && _0x30b563(_0x1bc3ca, 'fermenter'),
      _0x176608.canBoost(_0x115b63) && (_0x1bc3ca.boost = true),
      _0x115b63.boosts > 0x0 &&
        (_0x30b563(_0x1bc3ca, 'boost'),
        (_0x1bc3ca.boost = _0x1bc3ca.bulk = _0x1bc3ca.max = _0x1bc3ca.sync = true),
        (_0x1bc3ca.dimensions = Math.max(_0x1bc3ca.dimensions, _0x176608.availableDims(_0x115b63))),
        _0x658a36.forEach((_0x2fb1c5) => _0x30b563(_0x1bc3ca, _0x2fb1c5))),
      (_0x176608.canResonance(_0x115b63) || _0x115b63.resonance > 0x0) && (_0x1bc3ca.resonance = true),
      _0x115b63.boosts > 0x0 && _0x115b63.dims[0x4].b > 0x0 && (_0x1bc3ca.overload = true),
      (_0x115b63.boosts >= 0x2 || _0x115b63.resonance > 0x0) && (_0x1bc3ca.anomalies = true),
      _0x1bc3ca
    );
  }
  function _0x3cdb99(_0x3fb329) {
    const _0x33f122 = _0x762107(_0x3fb329),
      _0x2ba57b = (_0x5e0ea9) => _0x33f122.seen.includes(_0x5e0ea9);
    return {
      simple: !_0x33f122.starter,
      offer: _0x33f122.starter && !_0x2ba57b('helper'),
      cascade: _0x2ba57b('helper'),
      journal:
        _0x2ba57b('sync') ||
        _0x3fb329.decays > 0x0 ||
        !!_0x3fb329.legacy ||
        !(!_0x3fb329.cheats?.['used'] || (!_0x3fb329.cheats.allSkins && !_0x3fb329.cheats.allAwards)),
      dimensions: Math.min(_0x176608.availableDims(_0x3fb329), _0x33f122.dimensions),
      bulk: _0x33f122.bulk,
      max: _0x33f122.max,
      sync: _0x33f122.sync,
      boost: _0x33f122.boost,
      resonance: _0x33f122.resonance,
      combo: _0x2ba57b('sync') || _0x3fb329.decays > 0x0,
      overload: false,
      anomalies: false,
      decay: _0x3fb329.decays > 0x0 || _0x5c0b89.valid(_0x176608.isotopeGain(_0x3fb329)),
      protocols: _0x3fb329.decays >= 0x2 || _0x176608.ranks(_0x3fb329) > 0x0 || _0x3fb329.sings > 0x0,
      cosmos:
        _0x3fb329.sings > 0x0 ||
        _0x3fb329.realities > 0x0 ||
        _0x176608.canSing(_0x3fb329) ||
        (_0x3fb329.decays >= 0x5 && _0x176608.ranks(_0x3fb329) >= 0x8),
      research: _0x3fb329.sings > 0x0,
      realities: _0x3fb329.realities > 0x0 || _0x3fb329.sings >= 0x3,
      automation: ['dims', 'ticks', 'isos', 'boost', 'resonance', 'decay', 'sing'].some((_0x20abce) =>
        _0x176608.automationUnlocked(_0x3fb329, _0x20abce),
      ),
      modes: _0x3fb329.decays >= 0x2,
      roadmap: _0x3fb329.sings > 0x0,
      resources: _0x3fb329.decays > 0x0,
      numbers: _0x3fb329.best >= 0xc,
    };
  }
  function _0x30cef7(_0x470f2a, _0x3114c6) {
    const _0x1f7945 = _0x762107(_0x470f2a);
    (_0x658a36.includes(_0x3114c6) && _0x30b563(_0x1f7945, _0x3114c6),
      _0x2e102f.includes(_0x3114c6) && !_0x1f7945.explained.includes(_0x3114c6) && _0x1f7945.explained.push(_0x3114c6),
      _0x762107(_0x470f2a));
  }
  function _0x7bd0c9(_0x4939e1, _0x17f948 = 'chain') {
    const _0x455e9a = _0x762107(_0x4939e1),
      _0x56bf59 = _0x3cdb99(_0x4939e1),
      _0x29955a = (_0x1c7b6f) => _0x5c0b89.format(_0x1c7b6f, _0x4939e1.settings.notation),
      _0x1b321a = (_0x28ea05) => _0x5c0b89.format(_0x28ea05, 'scientific'),
      _0x5a93df = (_0x4ef823, _0xff1df0, _0x553170, _0x4e1a65, _0x273c74, _0x313584 = null) => ({
        id: _0x4ef823,
        title: _0xff1df0,
        text: _0x553170,
        page: _0x4e1a65,
        selector: _0x273c74,
        sub: _0x313584,
      }),
      _0x1f94c5 = (_0x2de4f5, _0x445e63) =>
        '[data-act=\x22' + _0x2de4f5 + '\x22]' + (void 0x0 === _0x445e63 ? '' : '[data-id="' + _0x445e63 + '\x22]'),
      _0x2e823e = (_0x152472, _0x1d7c92, _0x45992f, _0x45920f) =>
        _0x5a93df(_0x152472, _0x1d7c92, _0x45992f, 'cascade', _0x1f94c5('dim', _0x45920f), 'dimensions'),
      _0x3229bf = (_0x143a52) =>
        _0x4939e1.dims[_0x143a52].b < 0x4e20 &&
        (_0x176608.infiniteAM(_0x4939e1) || _0x4939e1.am + 1e-12 >= _0x176608.dimensionCost(_0x4939e1, _0x143a52));
    function _0x36e675(_0x4f5e14, _0xb5ca56, _0x8b01df, _0xd0e3bc) {
      if (_0x3229bf(_0xd0e3bc)) return _0x2e823e(_0x4f5e14, _0xb5ca56, _0x8b01df, _0xd0e3bc);
      const _0x1e5fb7 = _0x176608.dimensionCost(_0x4939e1, _0xd0e3bc);
      return _0x5a93df(
        _0x4f5e14 + '-earn',
        _0xb5ca56,
        _0x8b01df + ' Нужно ' + _0x29955a(_0x1e5fb7) + ', в банке ' + _0x29955a(_0x4939e1.am) + '.',
        _0x56bf59.cascade ? 'cascade' : 'reactor',
        _0x56bf59.cascade ? '[data-dim="' + _0xd0e3bc + '\x22]' : '#jar-button',
        _0x56bf59.cascade ? 'dimensions' : null,
      );
    }
    function _0x3a7cb1(_0x23d3c0, _0x3a0558, _0x2d256d, _0x1b22f8 = true) {
      if (
        _0x1b22f8 &&
        _0x176608.canBoost(_0x4939e1) &&
        !_0x4939e1.auto.boost &&
        (_0x176608.availableDims(_0x4939e1) < 0x8 || _0x4939e1.boosts < 0xc)
      )
        return _0x5a93df(
          _0x23d3c0 + '-boost',
          'Усиль цепочку',
          _0x2d256d + '\x20Сейчас\x20доступно\x20усиление.',
          'cascade',
          _0x1f94c5('boost'),
          'dimensions',
        );
      for (let _0x216955 = _0x56bf59.dimensions - 0x1; _0x216955 >= 0x0; _0x216955--)
        if (_0x3229bf(_0x216955) && (!_0x4939e1.auto.dims || !_0x4939e1.auto.helperMask[_0x216955]))
          return _0x2e823e(
            _0x23d3c0 + '-buy',
            _0x3a0558,
            _0x2d256d + ' Доступна покупка «' + _0x176608.DIMENSIONS[_0x216955].name + '».',
            _0x216955,
          );
      return _0x56bf59.sync &&
        0x4 !== _0x4939e1.challenge?.['id'] &&
        !_0x4939e1.auto.ticks &&
        _0x4939e1.am >= _0x176608.syncCost(_0x4939e1)
        ? _0x5a93df(
            _0x23d3c0 + '-sync',
            _0x3a0558,
            _0x2d256d + '\x20Можно\x20купить\x20общее\x20ускорение.',
            'cascade',
            _0x1f94c5('sync'),
            'dimensions',
          )
        : !_0x176608.automationUnlocked(_0x4939e1, 'dims') ||
            _0x4939e1.auto.dims ||
            _0x455e9a.explained.includes('automation')
          ? _0x5a93df(_0x23d3c0, _0x3a0558, _0x2d256d, 'cascade', '#dimension-list', 'dimensions')
          : _0x5a93df(
              _0x23d3c0 + '-auto',
              _0x3a0558,
              _0x2d256d + '\x20Автопокупки\x20продолжат\x20работу\x20и\x20офлайн.',
              'cascade',
              _0x1f94c5('auto', 'dims'),
              'automation',
            );
    }
    if (!_0x455e9a.starter) {
      const _0x3b87f5 = _0x4e52ce.upgrades - _0x455e9a.upgrades,
        _0x488979 = _0x176608.tapCost(_0x4939e1),
        _0x27dd82 =
          0x1 === _0x3b87f5
            ? 'После\x20покупки\x20откроется\x20первый\x20помощник.'
            : 'Первый\x20помощник\x20откроется\x20после\x20двух\x20улучшений.';
      return _0x4939e1.am + 1e-12 >= _0x488979
        ? _0x5a93df('upgrade', 'Улучши клик', _0x27dd82, 'reactor', '#begin-upgrade')
        : _0x5a93df(
            'earn',
            'Накопи\x20' + _0x29955a(_0x488979) + ' на улучшение',
            _0x27dd82 + '\x20В\x20банке\x20' + _0x29955a(_0x4939e1.am) + '.',
            'reactor',
            '#jar-button',
          );
    }
    if (!_0x455e9a.seen.includes('helper')) {
      const _0x14d0a8 = _0x176608.dimensionCost(_0x4939e1, 0x0);
      return _0x4939e1.am + 1e-12 < _0x14d0a8
        ? _0x5a93df(
            'helper-earn',
            'Накопи ' + _0x29955a(_0x14d0a8) + '\x20на\x20Каплю',
            'Капля будет добывать кизяк сама.',
            'reactor',
            '#jar-button',
          )
        : _0x5a93df(
            'helper',
            'Купи\x20первого\x20помощника',
            'Капля добывает кизяк, пока ты занят другими делами.',
            'reactor',
            '#first-helper-buy',
          );
    }
    if (!_0x455e9a.seen.includes('five'))
      return _0x36e675(
        'five',
        'Купи ' + _0x4e52ce.drops + '\x20Капли',
        'Колония откроется после ' +
          _0x4e52ce.drops +
          '\x20покупок.\x20Сейчас\x20' +
          _0x4939e1.dims[0x0].b +
          '/' +
          _0x4e52ce.drops +
          '.',
        0x0,
      );
    if (!_0x455e9a.seen.includes('colony'))
      return _0x36e675('colony', 'Купи\x20Колонию', 'Она создаёт Капли и ускоряет добычу.', 0x1);
    if (!_0x455e9a.seen.includes('colonies3'))
      return _0x36e675('colonies3', 'Купи вторую Колонию', 'После\x20двух\x20покупок\x20откроется\x20Культура.', 0x1);
    if (_0x56bf59.bulk && !_0x455e9a.seen.includes('batch') && !_0x455e9a.seen.includes('culture'))
      return _0x5a93df(
        'batch',
        'Покупка по 10',
        'Кнопка «Покупка» меняет размер партии. Десятая покупка удваивает скорость помощника.',
        'cascade',
        '#buy-mode',
        'dimensions',
      );
    if (!_0x455e9a.seen.includes('culture'))
      return _0x36e675(
        'culture',
        'Купи Культуру',
        'Она\x20создаёт\x20Колонии\x20и\x20открывает\x20общее\x20ускорение.',
        0x2,
      );
    if (!_0x455e9a.seen.includes('sync')) {
      const _0x1ee83d = _0x176608.syncCost(_0x4939e1);
      return _0x5a93df(
        'sync',
        _0x4939e1.am >= _0x1ee83d ? 'Ускорь всю цепочку' : 'Накопи\x20' + _0x29955a(_0x1ee83d) + ' на ускорение',
        'Один уровень нужен, чтобы открыть Ферментатор.',
        'cascade',
        _0x1f94c5('sync'),
        'dimensions',
      );
    }
    if (!_0x455e9a.seen.includes('cultures3'))
      return _0x36e675(
        'cultures3',
        'Купи\x20вторую\x20Культуру',
        'После\x20двух\x20покупок\x20и\x20общего\x20ускорения\x20откроется\x20Ферментатор.',
        0x2,
      );
    if (!_0x455e9a.seen.includes('fermenter'))
      return _0x36e675(
        'fermenter',
        'Купи Ферментатор',
        'Он создаёт Культуры. Несколько покупок подготовят первое усиление.',
        0x3,
      );
    if (!_0x455e9a.seen.includes('boost')) {
      const _0x5554b7 = _0x176608.boostRequirement(_0x4939e1);
      return _0x176608.canBoost(_0x4939e1)
        ? _0x5a93df(
            'boost',
            'Первое усиление готово',
            'После сброса цепочка станет быстрее, а в новой банке уже будет Капля.',
            'cascade',
            _0x1f94c5('boost'),
            'dimensions',
          )
        : _0x36e675(
            'fermenters',
            'Подготовь первое усиление',
            'Ферментаторы ' + _0x4939e1.dims[0x3].b + '/' + _0x5554b7.count + '.',
            0x3,
          );
    }
    const _0x1375b8 = _0x176608.Finale?.['progress'](_0x4939e1),
      _0x57d0c7 = _0x176608.Finale?.['RULES'],
      _0x53bc73 = (_0x432616, _0x897d6d, _0x1bf384, _0x9d77df = '#finale-plan') =>
        _0x5a93df(_0x432616, _0x897d6d, _0x1bf384, 'cosmos', _0x9d77df, 'finale');
    if (_0x4939e1.pendingGlyph) {
      const _0x5ceed9 = _0x176608.GLYPHS.find(
          (_0x238295) => !_0x4939e1.glyphs.some((_0x575647) => _0x575647.id === _0x238295.id),
        ),
        _0x46fdc5 = _0x5ceed9
          ? 'Для полной коллекции пригодится «' + _0x5ceed9.name + '».'
          : 'Выбери бонус для следующего сектора.';
      return _0x5a93df('glyph', 'Выбери\x20руну', _0x46fdc5, 'cosmos', _0x1f94c5('choose-glyph'), 'realities');
    }
    if (_0x4939e1.challenge) {
      const _0xeb0346 = _0x176608.PROTOCOLS[_0x4939e1.challenge.id],
        _0x3f703d = _0x176608.challengeGoal(_0x4939e1, _0xeb0346.id);
      return _0x3a7cb1(
        'protocol-active',
        _0xeb0346.name,
        _0x29955a(_0x4939e1.run) + ' / ' + _0x1b321a(_0x3f703d) + ' за цикл. ' + _0xeb0346.desc,
        false,
      );
    }
    if (_0x1375b8 && null !== _0x1375b8.endedAt)
      return _0x53bc73(
        'ending',
        'Эксперимент завершён',
        'Здесь можно перечитать концовку.',
        _0x1f94c5('ending-review'),
      );
    if (_0x1375b8?.['canFinish'])
      return _0x53bc73(
        'finish',
        'Финал готов',
        'Все\x20условия\x20выполнены.\x20Закрой\x20лабораторию,\x20чтобы\x20увидеть\x20концовку.',
        _0x1f94c5('finish-game'),
      );
    if (_0x1375b8?.['tested']) {
      const _0x18937a = Math.max(0x0, _0x57d0c7.seconds - _0x4939e1.simSeconds),
        _0x2ef055 = Math.ceil(_0x18937a / 0xe10);
      return _0x53bc73(
        'final-time',
        'До финала ' +
          (_0x2ef055 >= 0x18
            ? Math.floor(_0x2ef055 / 0x18) + ' д ' + (_0x2ef055 % 0x18) + '\x20ч'
            : _0x2ef055 + '\x20ч'),
        'Опыт\x20уже\x20записан.\x20Офлайн-работа\x20лаборатории\x20тоже\x20идёт\x20в\x20зачёт.',
      );
    }
    if (_0x1375b8?.['canTest'])
      return _0x53bc73(
        'record',
        'Финальный опыт готов',
        'Зафиксируй результат текущего цикла.',
        _0x1f94c5('record-finale'),
      );
    if (!_0x4939e1.decays) {
      if (_0x5c0b89.valid(_0x176608.isotopeGain(_0x4939e1)))
        return _0x5a93df(
          'decay',
          'Первый\x20распад\x20готов',
          'Получи изотопы для постоянных улучшений между распадами.',
          'decay',
          _0x1f94c5('decay'),
          'isotopes',
        );
      if (_0x176608.availableDims(_0x4939e1) < 0x8) {
        const _0x661cc3 = _0x176608.boostRequirement(_0x4939e1);
        return _0x176608.canBoost(_0x4939e1)
          ? _0x5a93df(
              'unlock-tier',
              'Открой\x20следующего\x20помощника',
              'Сделай\x20усиление.\x20В\x20новой\x20банке\x20уже\x20будет\x20Капля.',
              'cascade',
              _0x1f94c5('boost'),
              'dimensions',
            )
          : _0x36e675(
              'unlock-tier',
              'Подготовь\x20усиление',
              _0x176608.DIMENSIONS[_0x661cc3.tier].name +
                '\x20' +
                _0x4939e1.dims[_0x661cc3.tier].b +
                '/' +
                _0x661cc3.count +
                '.',
              _0x661cc3.tier,
            );
      }
      return _0x3a7cb1(
        'first-decay',
        'Накопи на первый распад',
        'За цикл ' + _0x29955a(_0x4939e1.run) + '\x20/\x20' + _0x1b321a(_0x176608.decayRequirement(_0x4939e1)) + '.',
      );
    }
    const _0x1e0266 = _0x176608.singRequirements(_0x4939e1),
      _0x5ef23f = _0x176608.realityRequirements(_0x4939e1),
      _0x1bffd0 = !!_0x1375b8?.['stabilizer'] && _0x4939e1.realities >= _0x57d0c7.realities,
      _0x13eac8 = _0x1375b8?.['open'] ? _0x57d0c7.ranks : _0x4939e1.sings >= 0x3 ? _0x5ef23f.ranks : _0x1e0266.ranks;
    if (_0x56bf59.protocols && _0x176608.ranks(_0x4939e1) < _0x13eac8) {
      const _0x31694e = _0x176608.PROTOCOLS.filter((_0x12e776) => _0x4939e1.protocols[_0x12e776.id] < 0x3);
      _0x31694e.sort(
        (_0x439a8a, _0x595ac9) =>
          _0x176608.challengeGoal(_0x4939e1, _0x439a8a.id) - _0x176608.challengeGoal(_0x4939e1, _0x595ac9.id),
      );
      const _0x3823fb = _0x31694e[0x0];
      if (
        _0x3823fb &&
        (_0x1375b8?.['open'] || _0x176608.challengeGoal(_0x4939e1, _0x3823fb.id) <= _0x4939e1.best + 0x14)
      )
        return _0x5a93df(
          'protocol-next',
          'Пройди\x20следующий\x20ранг',
          '«' +
            _0x3823fb.name +
            '», ранг ' +
            (_0x4939e1.protocols[_0x3823fb.id] + 0x1) +
            '.\x20Всего\x20' +
            _0x176608.ranks(_0x4939e1) +
            '/' +
            _0x13eac8 +
            '.',
          'decay',
          _0x1f94c5('protocol', _0x3823fb.id),
          'protocols',
        );
    }
    if (_0x1375b8?.['admission'] && !_0x1375b8.stabilizer) {
      const _0x50b86e = _0x176608.Materials,
        _0x17683a = _0x50b86e.data(_0x4939e1);
      if (_0x1375b8.reactions < _0x57d0c7.reactions) {
        const _0x315c8e = (_0x21bc6d) =>
            _0x21bc6d.pair.every((_0x55bb55) => {
              const _0x5bea0e = _0x50b86e.ELEMENTS.find((_0x563541) => _0x563541.id === _0x55bb55);
              return (
                _0x50b86e.level(_0x4939e1, _0x55bb55) ||
                _0x4939e1[_0x5bea0e.currency] >= _0x50b86e.cost(_0x4939e1, _0x55bb55)
              );
            }),
          _0x414590 = _0x50b86e.COMBINATIONS.filter(
            (_0x29e062) => !(_0x4939e1.lab?.['combos'] || []).includes(_0x29e062.id),
          ).find(_0x315c8e);
        if (_0x414590) {
          const _0x3c6e44 = _0x414590.pair.find((_0x4fd375) => !_0x50b86e.level(_0x4939e1, _0x4fd375)),
            _0x14cbcd = _0x17683a.active.find((_0x5efaea) => !_0x414590.pair.includes(_0x5efaea)),
            _0x298fc8 =
              _0x3c6e44 || _0x14cbcd || _0x414590.pair.find((_0x331f8b) => !_0x17683a.active.includes(_0x331f8b));
          if (_0x298fc8)
            return _0x5a93df(
              'reaction',
              (_0x3c6e44 ? 'Купи' : _0x14cbcd ? 'Убери\x20из\x20состава' : 'Добавь в состав') +
                '\x20«' +
                _0x50b86e.ELEMENTS.find((_0x12cf09) => _0x12cf09.id === _0x298fc8).name +
                '»',
              'Следующая реакция «' +
                _0x414590.name +
                '». Открыто ' +
                _0x1375b8.reactions +
                '/' +
                _0x57d0c7.reactions +
                '.',
              'cascade',
              _0x1f94c5(_0x3c6e44 ? 'element-buy' : 'element-equip', _0x298fc8),
              'elements',
            );
        }
      }
      if (_0x1375b8.modified < _0x57d0c7.modified) {
        const _0x1b7f2d = _0x17683a.mods
          .map((_0x234331, _0x4a22d2) => ({
            level: _0x234331,
            index: _0x4a22d2,
          }))
          .filter((_0xf9fd7d) => _0xf9fd7d.level < 0x3)
          .sort((_0x51d2e3, _0x9bf2ab) => _0x9bf2ab.level - _0x51d2e3.level || _0x9bf2ab.index - _0x51d2e3.index)[0x0];
        if (_0x50b86e.canModify(_0x4939e1, _0x1b7f2d.index))
          return _0x5a93df(
            'mod',
            'Модифицируй\x20«' + _0x176608.DIMENSIONS[_0x1b7f2d.index].name + '»',
            'Помощники III ранга ' + _0x1375b8.modified + '/' + _0x57d0c7.modified + '.',
            'cosmos',
            _0x1f94c5('helper-mod', _0x1b7f2d.index),
            'fragments',
          );
        if (_0x17683a.forged < _0x50b86e.MAX_FORGED && _0x4939e1.cores >= _0x50b86e.forgeCost(_0x4939e1))
          return _0x5a93df(
            'forge',
            'Сделай\x20фрагмент',
            'На следующий ранг нужно ' +
              _0x50b86e.modCost(_0x4939e1, _0x1b7f2d.index) +
              '\x20фрагментов,\x20есть\x20' +
              _0x17683a.fragments +
              '.',
            'cosmos',
            _0x1f94c5('fragment-forge'),
            'fragments',
          );
      }
    }
    if (!_0x1bffd0 && _0x176608.canReality(_0x4939e1)) {
      const _0x45b2b0 =
        _0x1375b8?.['open'] && _0x1375b8.runeKinds.size < _0x57d0c7.runes
          ? 'После\x20сброса\x20выбери\x20тип\x20руны,\x20которого\x20ещё\x20нет.'
          : 'Получишь ядра для постоянных улучшений и перейдёшь в следующий сектор.';
      return _0x5a93df('reality', 'Новая реальность готова', _0x45b2b0, 'cosmos', _0x1f94c5('reality'), 'realities');
    }
    const _0x59e5cf = _0x1bffd0 && _0x176608.has(_0x4939e1, _0x57d0c7.research),
      _0x4fe07e =
        _0x56bf59.realities &&
        !_0x1bffd0 &&
        _0x4939e1.singsHere >= _0x5ef23f.sings &&
        _0x4939e1.massCycle >= _0x5ef23f.mass &&
        _0x176608.ranks(_0x4939e1) >= _0x5ef23f.ranks;
    if (_0x59e5cf) {
      if (_0x4939e1.auto.sing && _0x176608.automationUnlocked(_0x4939e1, 'sing'))
        return _0x5a93df(
          'final-auto-sing',
          'Приостанови автосингулярность',
          'Для последнего опыта пригодятся изотопные улучшения. Сингулярность сбрасывает их.',
          'cascade',
          _0x1f94c5('auto', 'sing'),
          'automation',
        );
      const _0x101f7c = [
        ['power', 0x32],
        ['chain', 0x23],
      ].find(([_0x4da66c, _0x276fd6]) => _0x176608.up(_0x4939e1, _0x4da66c) < _0x276fd6);
      if (_0x101f7c && _0x4939e1.run < _0x57d0c7.run - 0x64) {
        const [_0x415ff2, _0x48be75] = _0x101f7c,
          _0x1c60a5 = _0x176608.ISO_UPGRADES.find((_0xd3ae3f) => _0xd3ae3f.id === _0x415ff2),
          _0x2a1fa7 = _0x176608.isoCost(_0x4939e1, _0x415ff2),
          _0xa56b2d =
            'Подготовь «' +
            _0x1c60a5.name +
            '»\x20до\x20уровня\x20' +
            _0x48be75 +
            '. Сейчас ' +
            _0x176608.up(_0x4939e1, _0x415ff2) +
            '.';
        return _0x4939e1.iso >= _0x2a1fa7
          ? _0x5a93df(
              'final-upgrade',
              'Усиль производство изотопами',
              _0xa56b2d,
              'decay',
              _0x1f94c5('iso', _0x415ff2),
              'isotopes',
            )
          : _0x176608.isotopeGain(_0x4939e1) >= _0x2a1fa7
            ? _0x5a93df(
                'final-decay',
                'Сделай распад для подготовки',
                _0xa56b2d + ' Исследование сохранится.',
                'decay',
                _0x1f94c5('decay'),
                'isotopes',
              )
            : _0x3a7cb1('final-upgrade-earn', 'Накопи изотопы для финала', _0xa56b2d);
      }
      const _0x5abc9f = _0x4939e1.glyphs
        .filter((_0x103dcb) => 'power' === _0x103dcb.id)
        .sort((_0x1de093, _0x536364) => _0x536364.power - _0x1de093.power)[0x0];
      if (_0x5abc9f && _0x4939e1.equipped !== _0x5abc9f.key && _0x4939e1.run < _0x57d0c7.run - 0x64)
        return _0x5a93df(
          'final-rune',
          'Выбери руну реактора',
          'Она ускоряет всю цепочку в последнем опыте.',
          'cosmos',
          _0x1f94c5('equip', _0x5abc9f.key),
          'realities',
        );
      if (
        _0x4939e1.resonance < 0x6 &&
        _0x4939e1.run < _0x57d0c7.run - 0x64 &&
        _0x176608.canResonance(_0x4939e1) &&
        !_0x4939e1.auto.resonance
      )
        return _0x5a93df(
          'final-resonance',
          'Подготовь\x20резонанс',
          'Он\x20усилит\x20цепочку.\x20После\x20него\x20снова\x20набери\x20усиления.',
          'cascade',
          _0x1f94c5('resonance'),
          'dimensions',
        );
      const _0xe653b4 = 0x9b;
      if (
        _0x4939e1.boosts < _0xe653b4 &&
        _0x4939e1.run < _0x57d0c7.run - 0x64 &&
        _0x176608.automationUnlocked(_0x4939e1, 'boost')
      )
        return _0x4939e1.auto.boostLimit < _0xe653b4
          ? _0x5a93df(
              'final-boost-limit',
              'Подготовь\x20цепочку\x20помощников',
              'Попробуй\x20поднять\x20предел\x20автоусилений\x20до\x20' + _0xe653b4 + '.',
              'cascade',
              '#boost-limit',
              'automation',
            )
          : _0x4939e1.auto.boost
            ? _0x4939e1.auto.dims
              ? _0x3a7cb1(
                  'final-boost-grow',
                  'Подготовка цепочки',
                  'Автоусиления ' +
                    _0x4939e1.boosts +
                    '/' +
                    _0xe653b4 +
                    '.\x20Следи\x20за\x20покупкой\x20старших\x20помощников.',
                )
              : _0x5a93df(
                  'final-auto-buy',
                  'Включи автопокупку помощников',
                  'Автоусилению нужны купленные помощники старшей ступени.',
                  'cascade',
                  _0x1f94c5('helpers-auto-all'),
                  'automation',
                )
            : _0x5a93df(
                'final-boost',
                'Усиль\x20цепочку\x20перед\x20опытом',
                'Автоусиление\x20доведёт\x20цепочку\x20до\x20выбранного\x20предела.',
                'cascade',
                _0x1f94c5('auto', 'boost'),
                'automation',
              );
      const _0x388e04 = ['decay', 'resonance', 'boost'].find(
        (_0x3a9082) =>
          !(!_0x4939e1.auto[_0x3a9082] || !_0x176608.automationUnlocked(_0x4939e1, _0x3a9082)) &&
          ('decay' === _0x3a9082
            ? _0x4939e1.auto.decayAt <
              _0x176608.isotopeGain({
                ..._0x4939e1,
                run: _0x57d0c7.run,
              })
            : 'resonance' === _0x3a9082
              ? !_0x176608.sector(_0x4939e1).noRes && _0x4939e1.resonance < _0x4939e1.auto.resLimit
              : _0x4939e1.boosts < _0x4939e1.auto.boostLimit),
      );
      return _0x388e04
        ? _0x5a93df(
            'final-auto',
            'Проверь ' +
              {
                decay: 'автораспад',
                resonance: 'авторезонанс',
                boost: 'автоусиление',
              }[_0x388e04],
            'Автоматический\x20сброс\x20может\x20прервать\x20финальный\x20цикл.\x20Отключи\x20его\x20на\x20время\x20опыта.',
            'cascade',
            _0x1f94c5('auto', _0x388e04),
            'automation',
          )
        : _0x3a7cb1(
            'final-run',
            'Собери\x20финальный\x20образец',
            'За\x20цикл\x20' +
              _0x29955a(_0x4939e1.run) +
              ' / ' +
              _0x1b321a(_0x57d0c7.run) +
              '. Сохраняй текущую банку до записи опыта.',
            false,
          );
    }
    if (_0x4fe07e && _0x4939e1.auto.sing && _0x176608.automationUnlocked(_0x4939e1, 'sing'))
      return _0x5a93df(
        'hold-epoch',
        'Приостанови автосингулярность',
        'Масса уже набрана. Для реальности осталось накопить ' + _0x1b321a(_0x5ef23f.iso) + ' изотопов за эпоху.',
        'cascade',
        _0x1f94c5('auto', 'sing'),
        'automation',
      );
    const _0x3e789b = _0x176608.chosenPath(_0x4939e1) || _0x17f948,
      _0x247d59 = _0x176608.RESEARCH.find(
        (_0x369fd1) =>
          (!_0x369fd1.path || _0x369fd1.path === _0x3e789b) &&
          !_0x176608.has(_0x4939e1, _0x369fd1.id) &&
          (!_0x369fd1.requires || _0x369fd1.requires.every((_0xada907) => _0x176608.has(_0x4939e1, _0xada907))) &&
          (!_0x369fd1.any || _0x369fd1.any.some((_0x398661) => _0x176608.has(_0x4939e1, _0x398661))),
      );
    if (_0x56bf59.research && _0x247d59 && _0x176608.canResearch(_0x4939e1, _0x247d59.id))
      return _0x5a93df(
        'research',
        'Изучи\x20«' + _0x247d59.name + '»',
        _0x247d59.desc + '. Цена ' + _0x29955a(_0x247d59.cost) + ' массы.',
        'cosmos',
        _0x1f94c5('research', _0x247d59.id),
        'research',
      );
    if (
      _0x4939e1.realities > 0x0 &&
      _0x4939e1.realities < _0x57d0c7?.['openAt'] &&
      _0x176608.cu(_0x4939e1, 'legacy') < _0x4939e1.realities &&
      _0x4939e1.cores >= _0x176608.coreCost(_0x4939e1, 'legacy')
    )
      return _0x5a93df(
        'core-upgrade',
        'Купи «Наследие образца»',
        'Каждый\x20уровень\x20ускоряет\x20цепочку\x20в\x20пять\x20раз.\x20Бонус\x20останется\x20после\x20сбросов.',
        'cosmos',
        _0x1f94c5('core', 'legacy'),
        'realities',
      );
    let _0x17c348 = _0x5c0b89.Z;
    if (_0x1bffd0 && _0x247d59) _0x17c348 = _0x5c0b89.sub(_0x247d59.cost, _0x4939e1.mass);
    else {
      if (_0x56bf59.realities && _0x4939e1.massCycle < _0x5ef23f.mass) {
        const _0x40a511 = _0x5c0b89.sub(_0x5ef23f.mass, _0x4939e1.massCycle),
          _0xf2b554 = _0x5c0b89.valid(_0x4939e1.massCycle) ? Math.max(0x0, _0x4939e1.massCycle + 0.45) : 0x0;
        _0x17c348 = Math.min(_0x40a511, _0xf2b554);
      }
    }
    const _0x4321cd = !_0x5c0b89.valid(_0x17c348) || _0x176608.massGain(_0x4939e1) >= _0x17c348;
    if (
      !_0x4321cd &&
      _0x4939e1.auto.sing &&
      _0x176608.automationUnlocked(_0x4939e1, 'sing') &&
      _0x4939e1.auto.singAt < _0x17c348
    )
      return _0x5a93df(
        'mass-threshold',
        'Подними порог автосингулярности',
        'Собери\x20хотя\x20бы\x20' + _0x29955a(_0x17c348) + '\x20массы\x20за\x20сброс.',
        'cascade',
        '#sing-threshold',
        'automation',
      );
    if (!_0x4fe07e && _0x176608.canSing(_0x4939e1) && _0x4321cd)
      return _0x5a93df(
        'singularity',
        'Сингулярность готова',
        'Получишь ' + _0x29955a(_0x176608.massGain(_0x4939e1)) + '\x20массы\x20для\x20исследований.',
        'cosmos',
        _0x1f94c5('singularity'),
        'singularity',
      );
    const _0x12e6dc = _0x4fe07e
        ? _0x5ef23f.iso
        : _0x5c0b89.valid(_0x17c348)
          ? _0x176608.isoForMass(_0x4939e1, _0x17c348)
          : _0x1e0266.iso,
      _0x35953a = !_0x4fe07e && _0x4939e1.decaysHere < _0x1e0266.decays,
      _0xdf6c1 = _0x4939e1.isoEpoch < _0x12e6dc,
      _0x2e83e8 = !_0x4fe07e && !_0x4321cd,
      _0x1712c0 = _0x176608.isotopeGain(_0x4939e1);
    if (
      _0x4fe07e &&
      _0xdf6c1 &&
      _0x4939e1.auto.decay &&
      _0x176608.automationUnlocked(_0x4939e1, 'decay') &&
      _0x4939e1.auto.decayAt < _0x12e6dc - 0x1
    )
      return _0x5a93df(
        'reality-threshold',
        'Увеличь\x20награду\x20за\x20автораспад',
        'Для\x20реальности\x20нужно\x20' +
          _0x1b321a(_0x12e6dc) +
          '\x20изотопов\x20за\x20эпоху.\x20Подними\x20порог\x20или\x20временно\x20отключи\x20автораспад.',
        'cascade',
        '#decay-threshold',
        'automation',
      );
    if (
      !_0x35953a &&
      _0x4939e1.run < _0x1e0266.am &&
      !_0x4fe07e &&
      _0x4939e1.auto.decay &&
      _0x176608.automationUnlocked(_0x4939e1, 'decay')
    ) {
      const _0x48c068 = _0x176608.isotopeGain({
        ..._0x4939e1,
        run: _0x1e0266.am,
      });
      if (_0x4939e1.auto.decayAt < _0x48c068)
        return _0x5a93df(
          'auto-threshold',
          'Подними порог автораспада',
          'Для сингулярности нужен цикл ' +
            _0x1b321a(_0x1e0266.am) +
            '. Поставь порог выше ' +
            _0x29955a(_0x48c068) +
            '\x20изотопов.',
          'cascade',
          '#decay-threshold',
          'automation',
        );
    }
    if (_0x5c0b89.valid(_0x1712c0) && (_0x35953a || _0xdf6c1 || _0x2e83e8)) {
      const _0x5bbe85 = _0x5c0b89.sub(_0x12e6dc, _0x4939e1.isoEpoch);
      if (_0x35953a || _0x1712c0 >= _0x5bbe85 || (_0x4939e1.run >= _0x1e0266.am && _0x1712c0 >= _0x4939e1.isoEpoch)) {
        const _0x3cc5b3 = _0x35953a ? 'Сделай распад' : 'Доведи изотопы до цели',
          _0x448898 = _0x35953a
            ? 'Распады\x20за\x20эпоху\x20' +
              _0x4939e1.decaysHere +
              '/' +
              _0x1e0266.decays +
              '. Награда ' +
              _0x29955a(_0x1712c0) +
              '\x20изотопов.'
            : _0x2e83e8
              ? 'Больше изотопов за эпоху даст больше массы. Сейчас распад даст ' + _0x29955a(_0x1712c0) + '.'
              : 'Распад даст ' + _0x29955a(_0x1712c0) + '. Цель эпохи ' + _0x1b321a(_0x12e6dc) + '.';
        return _0x5a93df('decay-next', _0x3cc5b3, _0x448898, 'decay', _0x1f94c5('decay'), 'isotopes');
      }
    }
    const _0x5c6671 = ['starter', 'power', 'chain', 'yield']
      .map((_0x3ffae8) => _0x176608.ISO_UPGRADES.find((_0x3fc405) => _0x3fc405.id === _0x3ffae8))
      .find(
        (_0xfdda10) =>
          _0x176608.up(_0x4939e1, _0xfdda10.id) < _0xfdda10.max &&
          _0x4939e1.iso >= _0x176608.isoCost(_0x4939e1, _0xfdda10.id),
      );
    return _0x5c6671
      ? _0x5a93df(
          'iso-upgrade',
          'Купи\x20«' + _0x5c6671.name + '»',
          _0x5c6671.desc + '.',
          'decay',
          _0x1f94c5('iso', _0x5c6671.id),
          'isotopes',
        )
      : _0x4fe07e || _0xdf6c1 || _0x2e83e8
        ? _0x3a7cb1(
            'grow-isotopes',
            'Подготовь\x20сильный\x20распад',
            _0x2e83e8
              ? 'Нужно ещё ' +
                  _0x29955a(_0x17c348) +
                  '\x20массы\x20' +
                  (_0x1bffd0 ? 'на исследование. ' : 'для реальности. ') +
                  'Изотопы за эпоху ' +
                  _0x29955a(_0x4939e1.isoEpoch) +
                  ' / ' +
                  _0x1b321a(_0x12e6dc) +
                  '.'
              : 'Изотопы за эпоху ' + _0x29955a(_0x4939e1.isoEpoch) + ' / ' + _0x1b321a(_0x12e6dc) + '.',
          )
        : _0x3a7cb1(
            'grow-bank',
            'Усиль\x20производство',
            'Кизяк за цикл ' + _0x29955a(_0x4939e1.run) + ' / ' + _0x1b321a(_0x1e0266.am) + ' для сингулярности.',
          );
  }
  const _0x4f9059 = {
    elements: [
      'Состав образца',
      'Покупай\x20постоянные\x20элементы\x20и\x20добавляй\x20два\x20из\x20них\x20в\x20банку.\x20Все\x20уровни\x20сохраняются.\x20Чтобы\x20сменить\x20состав,\x20сначала\x20убери\x20один\x20из\x20занятых\x20элементов.\x20В\x20протоколах\x20эффекты\x20состава\x20отключены.',
    ],
    fragments: [
      'Фрагменты реальности',
      'Обменивай ядра на фрагменты и выбирай помощника для постоянной модификации. Его скорость вырастет в 5 раз, но новые покупки подорожают в 4 раза.',
    ],
    helpers: [
      'Помощники',
      'Капля\x20сама\x20добывает\x20кизяк.\x20Покупай\x20больше\x20Капель,\x20чтобы\x20ускорить\x20добычу.\x20Новые\x20помощники\x20будут\x20появляться\x20по\x20одному.',
    ],
    sync: [
      'Общее\x20ускорение',
      'Эта покупка усиливает сразу всю цепочку помощников. Её уровни сохраняются до усиления или большого сброса.',
    ],
    boost: [
      'Первое усиление',
      'Текущие помощники и ускорения обнулятся. Взамен вся цепочка станет быстрее и откроется следующий помощник.',
    ],
    resonance: [
      'Резонанс',
      'Он сбрасывает помощников и усиления, но даёт ещё одно ускорение. Изотопы и более поздние улучшения сохранятся.',
    ],
    decay: [
      'Распад',
      'Обменяй текущую банку на изотопы. Изотопы покупают улучшения, которые сохраняются после следующих распадов.',
    ],
    protocols: [
      'Протоколы',
      'Это отдельные испытания со своими правилами. Начни с одного простого ранга; выполненный протокол навсегда усилит лабораторию.',
    ],
    automation: [
      'Автоматика',
      'Включай только нужные переключатели. Автопокупки работают без тебя. Автоматические сбросы появятся позже и настраиваются отдельно.',
    ],
    modes: [
      'Режимы',
      'Выбирай\x20способ\x20игры.\x20«Баланс»\x20подходит\x20для\x20начала;\x20другие\x20режимы\x20полезны\x20для\x20нажатий,\x20ожидания\x20или\x20длинной\x20цепочки\x20помощников.',
    ],
    singularity: [
      'Сингулярность',
      'После большой изотопной эпохи можно получить массу. Масса покупает исследования. Все необходимые условия показаны галочками на этой странице.',
    ],
    research: [
      'Исследования',
      'Начинай\x20сверху.\x20Позже\x20выбери\x20одну\x20из\x20трёх\x20веток.\x20Если\x20захочешь\x20попробовать\x20другую,\x20перестройка\x20вернёт\x20всю\x20потраченную\x20массу.',
    ],
    realities: [
      'Реальности',
      'Это следующий большой этап. Выполни условия, заверши сектор и выбери руну. Сохранённые ядра и руны помогут пройти следующий сектор.',
    ],
    journal: [
      'Досье',
      'Здесь\x20твои\x20достижения,\x20скины\x20и\x20архив.\x20Достижения\x20отмечаются\x20автоматически:\x20это\x20коллекция\x20успехов\x20без\x20валюты\x20и\x20усилений.',
    ],
  };
  function _0x65735(_0x3e7dc2, _0x15870f, _0x4f8e1a) {
    const _0x1f2f81 = _0x3cdb99(_0x3e7dc2),
      _0x4eb793 = _0x762107(_0x3e7dc2);
    let _0x2b8c31 = null;
    return (
      'cascade' === _0x15870f &&
        ('elements' === _0x4f8e1a
          ? (_0x2b8c31 = 'elements')
          : 'automation' === _0x4f8e1a && _0x1f2f81.automation
            ? (_0x2b8c31 = 'automation')
            : 'modes' === _0x4f8e1a && _0x1f2f81.modes
              ? (_0x2b8c31 = 'modes')
              : _0x1f2f81.cascade && (_0x2b8c31 = 'helpers')),
      'decay' === _0x15870f && (_0x2b8c31 = 'protocols' === _0x4f8e1a && _0x1f2f81.protocols ? 'protocols' : 'decay'),
      'cosmos' === _0x15870f &&
        'finale' !== _0x4f8e1a &&
        (_0x2b8c31 =
          'fragments' === _0x4f8e1a
            ? 'fragments'
            : 'research' === _0x4f8e1a && _0x1f2f81.research
              ? 'research'
              : 'realities' === _0x4f8e1a && _0x1f2f81.realities
                ? 'realities'
                : 'singularity'),
      'journal' === _0x15870f && (_0x2b8c31 = 'journal'),
      _0x4eb793.hints && _0x2b8c31 && !_0x4eb793.explained.includes(_0x2b8c31)
        ? {
            id: _0x2b8c31,
            title: _0x4f9059[_0x2b8c31][0x0],
            text: _0x4f9059[_0x2b8c31][0x1],
          }
        : null
    );
  }
  const _0x41fbac = _0x176608.restore;
  _0x176608.restore = function (_0x1b706c, _0x2e4aa6) {
    const _0x48b277 = _0x41fbac(_0x1b706c, _0x2e4aa6);
    let _0x309787;
    try {
      _0x309787 = 'string' == typeof _0x1b706c ? JSON.parse(_0x1b706c) : _0x1b706c;
    } catch (_0x4c4436) {}
    if (
      ((_0x48b277.state.learn = _0x85b752(_0x309787 && _0x309787.learn)),
      _0x48b277.valid && _0x309787 && 0x2 === _0x309787.version && !_0x309787.learn)
    ) {
      const _0x248d50 = _0x48b277.state.learn;
      ((_0x248d50.upgrades = _0x48b277.state.tapLevel),
        (_0x248d50.taps = Math.min(0x32, _0x48b277.state.clicks)),
        _0x48b277.state.dims.slice(0x2).some((_0x1ca0bc) => _0x1ca0bc.b > 0x0) && _0x30b563(_0x248d50, 'batch'));
    }
    return (_0x762107(_0x48b277.state), _0x48b277);
  };
  const _0x4a8919 = _0x176608.tap;
  _0x176608.tap = function (_0x25bb56, _0x45ac93 = 0x1, _0x38c4cd = false) {
    const _0x387847 = _0x762107(_0x25bb56);
    if (
      ((_0x45ac93 = Math.max(0x0, Math.min(0x14, Math.floor(_0x45ac93)))),
      (_0x387847.taps += _0x45ac93),
      !_0x387847.starter)
    ) {
      ((_0x25bb56.clicks += _0x45ac93),
        (_0x25bb56.combo = 0x1),
        (_0x25bb56.comboCount = 0x0),
        (_0x25bb56.charge = 0x0));
      const _0x511b38 = _0x5c0b89.scale(_0x176608.tapPower(_0x25bb56), _0x45ac93);
      return (_0x176608.gainAM(_0x25bb56, _0x511b38), _0x762107(_0x25bb56), _0x511b38);
    }
    _0x3cdb99(_0x25bb56).combo || ((_0x25bb56.comboCount = -_0x45ac93), (_0x25bb56.combo = 0x1), (_0x38c4cd = false));
    const _0x3679e9 = _0x4a8919(_0x25bb56, _0x45ac93, _0x38c4cd);
    return (_0x762107(_0x25bb56), _0x3679e9);
  };
  const _0x43fabc = _0x176608.buyTap;
  _0x176608.buyTap = function (_0x3d81d6) {
    const _0x5302d9 = _0x762107(_0x3d81d6),
      _0x1987cf = _0x43fabc(_0x3d81d6);
    return (_0x1987cf && _0x5302d9.upgrades++, _0x762107(_0x3d81d6), _0x1987cf);
  };
  const _0x174c6b = _0x176608.buyDimension;
  ((_0x176608.buyDimension = function (_0x4fd6dc, _0x1eac68, _0x41414f = 0x1) {
    const _0x3013cc = _0x174c6b(_0x4fd6dc, _0x1eac68, _0x41414f);
    return (_0x762107(_0x4fd6dc), _0x3013cc);
  }),
    (_0x176608.learning = _0x762107),
    (_0x176608.learnFeatures = _0x3cdb99),
    (_0x176608.learnStep = _0x7bd0c9),
    (_0x176608.learnAcknowledge = _0x30cef7),
    (_0x176608.learnExplanation = _0x65735));
  const _0x3bd5be = {
    START: _0x4e52ce,
    fresh: () => ({
      version: 0x1,
      taps: 0x0,
      upgrades: 0x0,
      starter: false,
      dimensions: 0x0,
      sync: false,
      bulk: false,
      max: false,
      boost: false,
      resonance: false,
      overload: false,
      anomalies: false,
      hints: true,
      seen: [],
      explained: [],
    }),
    normalize: _0x85b752,
    status: _0x762107,
    features: _0x3cdb99,
    step: _0x7bd0c9,
    acknowledge: _0x30cef7,
    explanation: _0x65735,
  };
  ((_0xece275.KizyacLearn = _0x3bd5be), 'undefined' != typeof module && module.exports && (module.exports = _0x3bd5be));
})('undefined' != typeof globalThis ? globalThis : this);
