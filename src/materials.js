(function (_0x14a621) {
  'use strict';

  const _0x491725 = _0x14a621.KizyacCore || ('function' == typeof require ? require('./core.js') : null),
    _0x536564 = _0x491725.N,
    _0x3d5519 = [
      {
        id: 'spore',
        name: 'Урановая спора',
        mark: 'U*',
        color: '#baf06a',
        currency: 'am',
        cost: 0x8,
        growth: 0x4,
        phase: 0x0,
        minStage: 0x4,
        kind: 'rate',
        tiers: [0x0, 0x1],
        power: 1.25,
        desc: 'Капля и Колония работают быстрее.',
      },
      {
        id: 'moon',
        name: 'Лунный\x20фермент',
        mark: 'Lu',
        color: '#b9dff7',
        currency: 'am',
        cost: 0xc,
        growth: 0x5,
        phase: 0x0,
        minStage: 0x5,
        kind: 'rate',
        tiers: [0x2, 0x3],
        power: 1.3,
        desc: 'Усиливает\x20Культуру\x20и\x20Ферментатор.',
      },
      {
        id: 'antidrop',
        name: 'Обратная капля',
        mark: '−K',
        color: '#e5b9e6',
        currency: 'am',
        cost: 0x12,
        growth: 0x6,
        phase: 0x0,
        minStage: 0x6,
        kind: 'tap',
        power: 1.6,
        desc: 'Усиливает нажатия на банку.',
      },
      {
        id: 'neutron',
        name: 'Нейтронная\x20крошка',
        mark: 'n⁰',
        color: '#71d6df',
        currency: 'iso',
        cost: 0x1,
        growth: 1.3,
        phase: 0x1,
        kind: 'rate',
        tiers: [0x0, 0x1, 0x2],
        power: 1.3,
        desc: 'Ускоряет\x20первых\x20трёх\x20помощников.',
      },
      {
        id: 'jelly',
        name: 'Плазменное\x20желе',
        mark: 'Pl',
        color: '#ffbd75',
        currency: 'iso',
        cost: 2.5,
        growth: 1.5,
        phase: 0x1,
        kind: 'rate',
        tiers: [0x3, 0x4, 0x5],
        power: 1.25,
        desc: 'Ускоряет\x20Ферментатор,\x20Мутатор\x20и\x20Реактор.',
      },
      {
        id: 'decaydust',
        name: 'Пыль несбывшегося',
        mark: 'Δ',
        color: '#aed9ee',
        currency: 'iso',
        cost: 0x4,
        growth: 1.8,
        phase: 0x1,
        kind: 'isotope',
        power: 1.15,
        desc: 'Увеличивает изотопы за распад.',
      },
      {
        id: 'horizon',
        name: 'Кусок\x20чёрной\x20дыры',
        mark: '●',
        color: '#c5a8ff',
        currency: 'mass',
        cost: 1.3,
        growth: 1.5,
        phase: 0x2,
        kind: 'rate',
        tiers: [0x6, 0x7],
        power: 1.35,
        desc: 'Ускоряет\x20Коллайдер\x20и\x20Кизячное\x20измерение.',
      },
      {
        id: 'time',
        name: 'Петля вчерашнего дня',
        mark: '∞',
        color: '#8bf1d9',
        currency: 'mass',
        cost: 0x2,
        growth: 1.7,
        phase: 0x2,
        kind: 'rate',
        tiers: [0x0, 0x7],
        power: 1.5,
        desc: 'Связывает начало и конец каскада: помощники I и VIII быстрее.',
      },
      {
        id: 'pulsar',
        name: 'Слеза пульсара',
        mark: 'Ps',
        color: '#f1a7c9',
        currency: 'mass',
        cost: 0x3,
        growth: 0x2,
        phase: 0x2,
        kind: 'tap',
        power: 0x2,
        desc: 'Сильно усиливает ручную добычу.',
      },
      {
        id: 'reality',
        name: 'Мятая\x20реальность',
        mark: 'R₀',
        color: '#f5d78f',
        currency: 'cores',
        cost: 0x0,
        growth: 0.5,
        phase: 0x3,
        kind: 'rate',
        tiers: [0x0, 0x1, 0x2, 0x3],
        power: 1.2,
        desc: 'Поддерживает первую половину каскада.',
      },
      {
        id: 'paradox',
        name: 'Ошибка\x20причинности',
        mark: '!?',
        color: '#d2b4fc',
        currency: 'cores',
        cost: 0.4771212547,
        growth: 0.6,
        phase: 0x3,
        kind: 'rate',
        tiers: [0x4, 0x5, 0x6, 0x7],
        power: 1.2,
        desc: 'Поддерживает старшую половину каскада.',
      },
      {
        id: 'void',
        name: 'Эхо\x20до\x20Большого\x20взрыва',
        mark: '∅',
        color: '#b2c8ff',
        currency: 'cores',
        cost: 0.6989700044,
        growth: 0.7,
        phase: 0x3,
        kind: 'isotope',
        power: 1.25,
        desc: 'Усиливает\x20выход\x20изотопов.',
      },
    ],
    _0x445185 = [
      {
        id: 'moon-culture',
        pair: ['spore', 'moon'],
        name: 'Лунная культура',
        kind: 'rate',
        tiers: [0x0, 0x1],
        power: 1.12,
        step: 0.06,
        desc: 'Капля\x20и\x20Колония\x20быстрее',
      },
      {
        id: 'hand-catalyst',
        pair: ['moon', 'antidrop'],
        name: 'Ручной\x20катализатор',
        kind: 'tap',
        power: 1.35,
        step: 0.15,
        desc: 'Сильнее\x20нажатия',
      },
      {
        id: 'plasma-chain',
        pair: ['neutron', 'jelly'],
        name: 'Плазменная цепь',
        kind: 'rate',
        tiers: [0x2, 0x3],
        power: 1.15,
        step: 0.075,
        desc: 'Культура и Ферментатор быстрее',
      },
      {
        id: 'isotope-trace',
        pair: ['neutron', 'decaydust'],
        name: 'Изотопный след',
        kind: 'isotope',
        power: 1.08,
        step: 0.04,
        desc: 'Больше\x20изотопов\x20за\x20распад',
      },
      {
        id: 'closed-horizon',
        pair: ['horizon', 'time'],
        name: 'Замкнутый горизонт',
        kind: 'rate',
        tiers: [0x7],
        power: 1.22,
        step: 0.115,
        desc: 'Быстрее\x20VIII\x20помощник',
      },
      {
        id: 'jar-pulse',
        pair: ['antidrop', 'pulsar'],
        name: 'Пульс банки',
        kind: 'tap',
        power: 1.6,
        step: 0.2,
        desc: 'Сильнее ручная добыча',
      },
      {
        id: 'reality-seam',
        pair: ['reality', 'paradox'],
        name: 'Шов\x20реальности',
        kind: 'rate',
        tiers: [0x3, 0x4],
        power: 1.18,
        step: 0.1,
        desc: 'Ферментатор и Мутатор быстрее',
      },
      {
        id: 'decay-echo',
        pair: ['decaydust', 'void'],
        name: 'Эхо распада',
        kind: 'isotope',
        power: 1.12,
        step: 0.06,
        desc: 'Больше изотопов за распад',
      },
    ],
    _0x2c0f20 = (_0x29bb06) =>
      _0x445185.find((_0x26c2b9) =>
        _0x26c2b9.pair.every((_0x3d5ad4) => _0x1368ce(_0x29bb06).active.includes(_0x3d5ad4)),
      ) || null,
    _0x5931ea = (_0x2704e4, _0x5d9f98 = _0x2c0f20(_0x2704e4)) =>
      _0x5d9f98
        ? _0x5d9f98.power +
          _0x5d9f98.step * (Math.min(..._0x5d9f98.pair.map((_0x40de5e) => _0x2fcfda(_0x2704e4, _0x40de5e))) - 0x1)
        : 0x1,
    _0x2f1278 = () => ({
      version: 0x1,
      levels: {},
      active: [],
      fragments: 0x0,
      forged: 0x0,
      mods: Array(0x8).fill(0x0),
    }),
    _0x1368ce = (_0x25f876) => _0x25f876.materials || (_0x25f876.materials = _0x2f1278()),
    _0x14bd9e = (_0x45c7fc) => (_0x45c7fc.realities ? 0x3 : _0x45c7fc.sings ? 0x2 : _0x45c7fc.decays ? 0x1 : 0x0),
    _0xf919ad = (_0x79c3f8) =>
      _0x79c3f8.boosts > 0x0 ||
      _0x79c3f8.resonance > 0x0 ||
      _0x79c3f8.decays > 0x0 ||
      _0x79c3f8.sings > 0x0 ||
      _0x79c3f8.realities > 0x0,
    _0x2fcfda = (_0x56f3bc, _0x8784bc) => _0x1368ce(_0x56f3bc).levels[_0x8784bc] || 0x0;
  function _0x5d04f4(_0x2f189b, _0x1c6009) {
    return (
      _0xf919ad(_0x2f189b) &&
      _0x14bd9e(_0x2f189b) >= _0x1c6009.phase &&
      Math.max(_0x2f189b.bestStage, _0x491725.stage(_0x2f189b)) >= (_0x1c6009.minStage || 0x0)
    );
  }
  const _0x3fcaaa = (_0x2556fd, _0x28a542) => {
    const _0x426f43 = _0x3d5519.find((_0x5a305c) => _0x5a305c.id === _0x28a542);
    return _0x426f43 ? _0x426f43.cost + _0x2fcfda(_0x2556fd, _0x28a542) * _0x426f43.growth : 0x1 / 0x0;
  };
  function _0x2879cd(_0x18e379, _0x49d0aa, _0x220c1b) {
    if (_0x18e379.challenge) return 0x0;
    const _0x1482fd = _0x2c0f20(_0x18e379);
    return (
      (_0x1482fd && _0x1482fd.kind === _0x49d0aa && ('rate' !== _0x49d0aa || _0x1482fd.tiers.includes(_0x220c1b))
        ? Math.log10(_0x5931ea(_0x18e379, _0x1482fd))
        : 0x0) +
      _0x1368ce(_0x18e379).active.reduce((_0x33e050, _0x5aef26) => {
        const _0x2f7bf5 = _0x3d5519.find((_0x5f1615) => _0x5f1615.id === _0x5aef26);
        return (
          _0x33e050 +
          (_0x2f7bf5 && _0x2f7bf5.kind === _0x49d0aa && ('rate' !== _0x49d0aa || _0x2f7bf5.tiers.includes(_0x220c1b))
            ? Math.log10(_0x2f7bf5.power) * _0x2fcfda(_0x18e379, _0x5aef26)
            : 0x0)
        );
      }, 0x0)
    );
  }
  const _0x5700d0 = (_0x29b38e, _0x1ba7cf) => _0x1368ce(_0x29b38e).mods[_0x1ba7cf] || 0x0,
    _0x11af74 = (_0x1cbbe8) => _0x536564.from(0x1 + Math.floor(_0x1368ce(_0x1cbbe8).forged / 0x4)),
    _0x4d26ea = (_0x5f5d6f, _0x156dc1) => Math.pow(0x2, _0x5700d0(_0x5f5d6f, _0x156dc1)),
    _0x5af0e1 = (_0x182a84, _0x2be358) => 0x1 + 0x2 * _0x5700d0(_0x182a84, _0x2be358);
  function _0x14593d(_0x4b6797, _0x2e4d7c) {
    return (
      Number.isInteger(_0x2e4d7c) &&
      _0x2e4d7c >= 0x0 &&
      _0x2e4d7c < 0x8 &&
      !_0x4b6797.challenge &&
      _0x5700d0(_0x4b6797, _0x2e4d7c) < 0x3 &&
      _0x4b6797.realities >= _0x5af0e1(_0x4b6797, _0x2e4d7c) &&
      _0x1368ce(_0x4b6797).fragments >= _0x4d26ea(_0x4b6797, _0x2e4d7c)
    );
  }
  const _0x49f341 = {
    COMBINATIONS: _0x445185,
    combination: _0x2c0f20,
    combinationPower: _0x5931ea,
    ELEMENTS: _0x3d5519,
    MAX_LEVEL: 0x3,
    SLOTS: 0x2,
    MAX_FORGED: 0x38,
    labels: {
      am: 'кизяка',
      iso: 'изотопов',
      mass: 'массы',
      cores: 'ядер',
    },
    fresh: _0x2f1278,
    ensure: function (_0x30b16d, _0x987aa8 = _0x30b16d) {
      const _0x22cc37 = _0x987aa8.materials || {},
        _0x5bd35 = _0x2f1278();
      for (const _0x569a85 of _0x3d5519) {
        const _0x3c621c = _0x22cc37.levels && _0x22cc37.levels[_0x569a85.id];
        Number.isInteger(_0x3c621c) &&
          _0x3c621c > 0x0 &&
          _0x3c621c <= 0x3 &&
          (_0x5bd35.levels[_0x569a85.id] = _0x3c621c);
      }
      _0x5bd35.active = Array.isArray(_0x22cc37.active)
        ? [...new Set(_0x22cc37.active.filter((_0x45f82d) => _0x5bd35.levels[_0x45f82d]))].slice(0x0, 0x2)
        : [];
      for (const _0x5f2101 of ['fragments', 'forged'])
        Number.isInteger(_0x22cc37[_0x5f2101]) &&
          _0x22cc37[_0x5f2101] >= 0x0 &&
          _0x22cc37[_0x5f2101] <= 0x38 &&
          (_0x5bd35[_0x5f2101] = _0x22cc37[_0x5f2101]);
      return (
        Array.isArray(_0x22cc37.mods) &&
          (_0x5bd35.mods = _0x5bd35.mods.map((_0xd12328, _0x2890e0) =>
            Number.isInteger(_0x22cc37.mods[_0x2890e0]) ? Math.max(0x0, Math.min(0x3, _0x22cc37.mods[_0x2890e0])) : 0x0,
          )),
        (_0x30b16d.materials = _0x5bd35),
        _0x5bd35
      );
    },
    data: _0x1368ce,
    phase: _0x14bd9e,
    available: _0xf919ad,
    level: _0x2fcfda,
    unlocked: _0x5d04f4,
    cost: _0x3fcaaa,
    buy: function (_0xceba1c, _0x4edb60) {
      const _0x2def92 = _0x3d5519.find((_0x23c716) => _0x23c716.id === _0x4edb60);
      if (
        !_0x2def92 ||
        _0xceba1c.challenge ||
        !_0x5d04f4(_0xceba1c, _0x2def92) ||
        _0x2fcfda(_0xceba1c, _0x4edb60) >= 0x3
      )
        return false;
      const _0xe32fea = _0x3fcaaa(_0xceba1c, _0x4edb60);
      if ('am' === _0x2def92.currency) {
        if (!_0x491725.spendAM(_0xceba1c, _0xe32fea)) return false;
      } else {
        if (_0xceba1c[_0x2def92.currency] + 1e-12 < _0xe32fea) return false;
        _0xceba1c[_0x2def92.currency] = _0x536564.sub(_0xceba1c[_0x2def92.currency], _0xe32fea);
      }
      return ((_0x1368ce(_0xceba1c).levels[_0x4edb60] = _0x2fcfda(_0xceba1c, _0x4edb60) + 0x1), true);
    },
    equip: function (_0x2d7d9f, _0x3548e7) {
      const _0x40b1a9 = _0x1368ce(_0x2d7d9f);
      return !(
        _0x2d7d9f.challenge ||
        !_0x2fcfda(_0x2d7d9f, _0x3548e7) ||
        (_0x40b1a9.active.includes(_0x3548e7)
          ? ((_0x40b1a9.active = _0x40b1a9.active.filter((_0x55b548) => _0x55b548 !== _0x3548e7)), 0x0)
          : _0x40b1a9.active.length >= 0x2 ||
            (_0x40b1a9.active.push(_0x3548e7), _0x491725.Lab && _0x491725.Lab.capture(_0x2d7d9f), 0x0))
      );
    },
    effect: _0x2879cd,
    helperRate: (_0x538f9e, _0x1b38b4) =>
      _0x538f9e.challenge
        ? 0x0
        : _0x2879cd(_0x538f9e, 'rate', _0x1b38b4) + _0x5700d0(_0x538f9e, _0x1b38b4) * Math.log10(0x5),
    helperPrice: (_0x41c642, _0x35ec74) =>
      _0x41c642.challenge ? 0x0 : _0x5700d0(_0x41c642, _0x35ec74) * Math.log10(0x4),
    modLevel: _0x5700d0,
    forgeCost: _0x11af74,
    forge: function (_0x4c5b8f) {
      const _0x21561f = _0x1368ce(_0x4c5b8f),
        _0x563b01 = _0x11af74(_0x4c5b8f);
      return !(
        !_0x4c5b8f.realities ||
        _0x4c5b8f.challenge ||
        _0x21561f.forged >= 0x38 ||
        _0x4c5b8f.cores + 1e-12 < _0x563b01 ||
        ((_0x4c5b8f.cores = _0x536564.sub(_0x4c5b8f.cores, _0x563b01)), _0x21561f.fragments++, _0x21561f.forged++, 0x0)
      );
    },
    modCost: _0x4d26ea,
    modRequirement: _0x5af0e1,
    canModify: _0x14593d,
    modify: function (_0x4473cd, _0x463377) {
      if (!_0x14593d(_0x4473cd, _0x463377)) return false;
      const _0x540608 = _0x1368ce(_0x4473cd);
      return ((_0x540608.fragments -= _0x4d26ea(_0x4473cd, _0x463377)), _0x540608.mods[_0x463377]++, true);
    },
    validate: function (_0xe8878d) {
      const _0x435b82 = _0xe8878d.materials;
      if (void 0x0 === _0x435b82)
        return {
          valid: true,
        };
      const _0x79eed0 = (_0x37e5c) => ({
        valid: false,
        reason: _0x37e5c,
      });
      if (
        !_0x435b82 ||
        0x1 !== _0x435b82.version ||
        !_0x435b82.levels ||
        Array.isArray(_0x435b82.levels) ||
        !Array.isArray(_0x435b82.active) ||
        _0x435b82.active.length > 0x2 ||
        new Set(_0x435b82.active).size !== _0x435b82.active.length ||
        !Array.isArray(_0x435b82.mods) ||
        0x8 !== _0x435b82.mods.length
      )
        return _0x79eed0('Некорректный состав образца');
      for (const [_0x1350a9, _0x4ce514] of Object.entries(_0x435b82.levels))
        if (
          !_0x3d5519.some((_0x51d98d) => _0x51d98d.id === _0x1350a9) ||
          !Number.isInteger(_0x4ce514) ||
          _0x4ce514 < 0x1 ||
          _0x4ce514 > 0x3
        )
          return _0x79eed0('Неизвестный\x20элемент\x20или\x20уровень');
      if (_0x435b82.active.some((_0x28ef01) => !_0x435b82.levels[_0x28ef01]))
        return _0x79eed0('Добавлен\x20некупленный\x20элемент');
      if (_0x435b82.mods.some((_0xd8daae) => !Number.isInteger(_0xd8daae) || _0xd8daae < 0x0 || _0xd8daae > 0x3))
        return _0x79eed0('Некорректная\x20модификация\x20помощника');
      for (const _0x2914cd of ['fragments', 'forged'])
        if (!Number.isInteger(_0x435b82[_0x2914cd]) || _0x435b82[_0x2914cd] < 0x0 || _0x435b82[_0x2914cd] > 0x38)
          return _0x79eed0('Некорректные фрагменты реальности');
      if (_0xe8878d.cheats?.['used'] && _0xe8878d.cheats.unlocked)
        return {
          valid: true,
        };
      const _0x9e97aa = _0x435b82.mods.reduce(
        (_0x134e65, _0x407917) => _0x134e65 + Math.pow(0x2, _0x407917) - 0x1,
        0x0,
      );
      if (_0x435b82.fragments + _0x9e97aa !== _0x435b82.forged) return _0x79eed0('Неоплаченные модификации помощников');
      if (
        (_0x435b82.forged && !_0xe8878d.realities) ||
        _0x435b82.mods.some((_0x3b9cd9) => _0x3b9cd9 > 0x0 && _0xe8878d.realities < 0x2 * _0x3b9cd9 - 0x1)
      )
        return _0x79eed0('Модификации\x20открыты\x20раньше\x20нужной\x20реальности');
      const _0xaafa69 = {
        am: _0x536564.Z,
        iso: _0x536564.Z,
        mass: _0x536564.Z,
        cores: _0x536564.Z,
      };
      for (const _0x3542c5 of _0x3d5519) {
        const _0x570a86 = _0x435b82.levels[_0x3542c5.id] || 0x0;
        if (_0x570a86 && !_0x5d04f4(_0xe8878d, _0x3542c5)) return _0x79eed0('Элемент открыт раньше нужного этапа');
        for (let _0x4b6189 = 0x0; _0x4b6189 < _0x570a86; _0x4b6189++)
          _0xaafa69[_0x3542c5.currency] = _0x536564.add(
            _0xaafa69[_0x3542c5.currency],
            _0x3542c5.cost + _0x4b6189 * _0x3542c5.growth,
          );
      }
      for (let _0x386a90 = 0x0; _0x386a90 < _0x435b82.forged; _0x386a90++)
        _0xaafa69.cores = _0x536564.add(_0xaafa69.cores, _0x536564.from(0x1 + Math.floor(_0x386a90 / 0x4)));
      for (const _0x313623 of _0x491725.CORE_UPGRADES)
        for (let _0x4bec00 = 0x0; _0x4bec00 < _0x491725.cu(_0xe8878d, _0x313623.id); _0x4bec00++)
          _0xaafa69.cores = _0x536564.add(_0xaafa69.cores, _0x313623.cost + _0x4bec00 * _0x313623.growth);
      for (const [_0x274bdf, _0x3a5ded] of [
        ['am', 'total'],
        ['iso', 'isoTotal'],
        ['mass', 'massTotal'],
        ['cores', 'coreTotal'],
      ])
        if (_0xaafa69[_0x274bdf] > _0xe8878d[_0x3a5ded] + 0.000001)
          return _0x79eed0('Элементы или фрагменты не оплачены');
      return _0x536564.add(_0xe8878d.cores, _0xaafa69.cores) > _0xe8878d.coreTotal + 0.000001
        ? _0x79eed0('Ядра потрачены повторно')
        : {
            valid: true,
          };
    },
  };
  ((_0x14a621.KizyacMaterials = _0x49f341),
    (_0x491725.Materials = _0x49f341),
    'object' == typeof module && module.exports && (module.exports = _0x49f341));
})('undefined' != typeof globalThis ? globalThis : this);
