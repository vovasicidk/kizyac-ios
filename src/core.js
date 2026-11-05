(function (_0x43871a) {
  'use strict';

  const _0x4e18b0 = _0x43871a.KN || ('function' == typeof require ? require('./num.js') : null),
    _0x16743e = _0x4e18b0.Z,
    _0x52f184 = {
      firstDecayAt: 0x40,
      decayAt: 0x50,
      singAM: 0xf0,
      singIso: 0x8,
      singDecays: 0x8,
      singRanks: 0xc,
      realityMass: 0x6,
      realityIso: 0x26,
      realitySings: 0x8,
      realityRanks: 0x12,
      baseChain: 0.13,
      baseFirst: 0.7,
      boostPower: 0.4,
      resPower: 0.85,
      tickPower: 0.028,
    },
    _0x513272 = [
      {
        name: 'Капля',
        desc: 'Производит\x20кизяк',
        cost: 0x1,
        growth: 0.3,
        icon: 'drop',
      },
      {
        name: 'Колония',
        desc: 'Производит капли',
        cost: 0x2,
        growth: 0.36,
        icon: 'cells',
      },
      {
        name: 'Культура',
        desc: 'Производит колонии',
        cost: 0x4,
        growth: 0.42,
        icon: 'flask',
      },
      {
        name: 'Ферментатор',
        desc: 'Производит\x20культуры',
        cost: 0x6,
        growth: 0.48,
        icon: 'mix',
      },
      {
        name: 'Мутатор',
        desc: 'Производит ферментаторы',
        cost: 0x9,
        growth: 0.54,
        icon: 'dna',
      },
      {
        name: 'Реактор',
        desc: 'Производит мутаторы',
        cost: 0xd,
        growth: 0.6,
        icon: 'rad',
      },
      {
        name: 'Коллайдер',
        desc: 'Производит реакторы',
        cost: 0x12,
        growth: 0.66,
        icon: 'atom',
      },
      {
        name: 'Кизячное\x20измерение',
        desc: 'Производит\x20коллайдеры',
        cost: 0x18,
        growth: 0.72,
        icon: 'portal',
      },
    ],
    _0x76093b = [
      {
        id: 'power',
        name: 'Изотопный катализ',
        desc: 'Вся цепочка ×2 за уровень',
        cost: 0.30103,
        growth: 0.6,
        max: 0x3c,
      },
      {
        id: 'chain',
        name: 'Рекурсивное брожение',
        desc: 'Измерения II–VIII ×2 за уровень',
        cost: 0x1,
        growth: 0.85,
        max: 0x28,
      },
      {
        id: 'memory',
        name: 'Память\x20банки',
        desc: 'Дополнительное стартовое усиление; максимум 4',
        cost: 0.7,
        growth: 0x1,
        max: 0x4,
      },
      {
        id: 'yield',
        name: 'Разделение\x20изотопов',
        desc: 'Изотопы за распад ×2 за уровень',
        cost: 1.2,
        growth: 0.9,
        max: 0x28,
      },
      {
        id: 'buy',
        name: 'Автосинхронизация',
        desc: 'Автопокупка\x20общего\x20ускорения\x20цепочки',
        cost: 0.4,
        growth: 0x0,
        max: 0x1,
      },
      {
        id: 'boost',
        name: 'Автоусиление',
        desc: 'Автоматические усиления и резонансы',
        cost: 1.7,
        growth: 0x0,
        max: 0x1,
      },
      {
        id: 'decay',
        name: 'Автораспад',
        desc: 'Автоматический распад по выбранной награде; нужно 4 ранга протоколов',
        cost: 0x3,
        growth: 0x0,
        max: 0x1,
      },
      {
        id: 'starter',
        name: 'Питательная\x20среда',
        desc: 'Начальный\x20запас\x20кизяка\x20×100\x20за\x20уровень',
        cost: 0.9,
        growth: 0.9,
        max: 0xc,
      },
    ],
    _0x28e1c3 = [
      {
        id: 0x0,
        name: 'Руки\x20за\x20спину',
        desc: 'Нажатия\x20не\x20дают\x20добычу.',
        goal: 0x50,
        step: 0x2d,
        reward: 'Измерение\x20I\x20×1,5\x20за\x20ранг',
      },
      {
        id: 0x1,
        name: 'Малая\x20банка',
        desc: 'Работают только 4 измерения. Усиления разрешены.',
        goal: 0x32,
        step: 0x23,
        reward: 'Измерения\x20I–IV\x20×1,6\x20за\x20ранг',
      },
      {
        id: 0x2,
        name: 'Три ингредиента',
        desc: 'Работают только 3 измерения; усиление доступно по III.',
        goal: 0x28,
        step: 0x1e,
        reward: 'Изотопы\x20×1,5\x20за\x20ранг',
      },
      {
        id: 0x3,
        name: 'Без права на сброс',
        desc: 'Нет\x20усилений\x20и\x20резонансов.\x20Сразу\x20доступны\x208\x20измерений.',
        goal: 0x50,
        step: 0x32,
        reward: 'Вся цепочка ×1,4 за ранг',
      },
      {
        id: 0x4,
        name: 'Вязкое время',
        desc: 'Синхронизация\x20отключена.',
        goal: 0x50,
        step: 0x2d,
        reward: 'Синхронизация\x20на\x203%\x20сильнее\x20за\x20ранг',
      },
      {
        id: 0x5,
        name: 'Дорогие привычки',
        desc: 'Рост\x20цен\x20измерений\x20в\x201,35\x20раза\x20быстрее.',
        goal: 0x46,
        step: 0x28,
        reward: 'Цены ниже на 0,15 порядка за ранг',
      },
      {
        id: 0x6,
        name: 'Без резонанса',
        desc: 'Резонансы недоступны.',
        goal: 0x5a,
        step: 0x32,
        reward: 'Усиления на 5% сильнее за ранг',
      },
      {
        id: 0x7,
        name: 'Тяжёлая среда',
        desc: 'Каждый шаг производственной цепи в 30 раз медленнее.',
        goal: 0x46,
        step: 0x32,
        reward: 'Вся цепочка ×1,5 за ранг',
      },
    ],
    _0x18e96f = [
      {
        id: 'r0',
        name: 'Память формы',
        desc: 'Вся цепочка ×10',
        cost: 0x0,
        requires: [],
      },
      {
        id: 'r1',
        name: 'Чистый\x20распад',
        desc: 'Изотопы ×3',
        cost: 0.47712,
        requires: ['r0'],
      },
      {
        id: 'r2',
        name: 'Ранний запуск',
        desc: 'Старт с 2 усилениями и 6 синхронизациями',
        cost: 0.77815,
        requires: ['r1'],
      },
      {
        id: 'a1',
        path: 'active',
        name: 'Импульс',
        desc: 'Нажатие\x20даёт\x2012%\x20текущей\x20добычи/сек',
        cost: 0x1,
        requires: ['r2'],
      },
      {
        id: 'a2',
        path: 'active',
        name: 'Ручной\x20резонанс',
        desc: 'Комбо\x20до\x20×5;\x20сила\x20нажатий\x20×1,6',
        cost: 1.7,
        requires: ['a1'],
      },
      {
        id: 'a3',
        path: 'active',
        name: 'Управляемый выброс',
        desc: 'Вся цепочка ×30 в режиме «Импульс»',
        cost: 2.3,
        requires: ['a2'],
      },
      {
        id: 'i1',
        path: 'idle',
        name: 'Глубокое брожение',
        desc: 'Вся\x20цепочка\x20×12\x20в\x20режиме\x20«Покой»',
        cost: 0x1,
        requires: ['r2'],
      },
      {
        id: 'i2',
        path: 'idle',
        name: 'Автономная среда',
        desc: 'Офлайн 100% вместо 85%; предел 72 часа',
        cost: 1.7,
        requires: ['i1'],
      },
      {
        id: 'i3',
        path: 'idle',
        name: 'Долгая реакция',
        desc: 'Изотопы\x20×8\x20в\x20режиме\x20«Покой»',
        cost: 2.3,
        requires: ['i2'],
      },
      {
        id: 'c1',
        path: 'chain',
        name: 'Обратная связь',
        desc: 'Измерения\x20V–VIII\x20×100',
        cost: 0x1,
        requires: ['r2'],
      },
      {
        id: 'c2',
        path: 'chain',
        name: 'Удвоение каскада',
        desc: 'Бонус каждых 10 покупок ×2,4 вместо ×2',
        cost: 1.7,
        requires: ['c1'],
      },
      {
        id: 'c3',
        path: 'chain',
        name: 'Гиперколония',
        desc: 'Резонансы\x20в\x201,5\x20раза\x20сильнее',
        cost: 2.3,
        requires: ['c2'],
      },
      {
        id: 'r3',
        name: 'Сходимость',
        desc: 'Вся цепочка ×1 000',
        cost: 0x3,
        any: ['a3', 'i3', 'c3'],
      },
      {
        id: 'r4',
        name: 'Разделение\x20ядра',
        desc: 'Изотопы ×30',
        cost: 3.5,
        requires: ['r3'],
      },
      {
        id: 'r5',
        name: 'Тихая\x20автоматика',
        desc: 'Автораспад и автосингулярность без покупки модулей',
        cost: 0x4,
        requires: ['r4'],
      },
      {
        id: 'r6',
        name: 'Сила протоколов',
        desc: 'Цепочка\x20×1,12\x20за\x20каждый\x20ранг\x20протоколов',
        cost: 4.7,
        requires: ['r5'],
      },
      {
        id: 'r7',
        name: 'Гиперреактор',
        desc: 'Измерения\x20V–VIII\x20×10\x20000',
        cost: 5.2,
        requires: ['r6'],
      },
      {
        id: 'r8',
        name: 'Сжатая\x20масса',
        desc: 'Масса\x20за\x20сингулярность\x20×10',
        cost: 0x6,
        requires: ['r7'],
      },
      {
        id: 'r9',
        name: 'Несгораемая память',
        desc: 'Минимум 4 стартовых усиления',
        cost: 6.7,
        requires: ['r8'],
      },
      {
        id: 'r10',
        name: 'Тройное деление',
        desc: 'Бонус\x20каждых\x2010\x20покупок\x20×3',
        cost: 7.4,
        requires: ['r9'],
      },
      {
        id: 'r11',
        name: 'Тонкая стенка',
        desc: 'Рост цен измерений на 8% медленнее',
        cost: 8.1,
        requires: ['r10'],
      },
      {
        id: 'r12',
        name: 'Гравитационная линза',
        desc: 'Масса\x20за\x20сингулярность\x20×5',
        cost: 0x9,
        requires: ['r11'],
      },
      {
        id: 'r13',
        name: 'Вечная\x20реакция',
        desc: 'Синхронизация в 1,5 раза сильнее',
        cost: 0xa,
        requires: ['r12'],
      },
      {
        id: 'r14',
        name: 'Крышка\x20мироздания',
        desc: 'Вся цепочка ×100 000 000',
        cost: 0xc,
        requires: ['r13'],
      },
    ],
    _0x20945c = [
      {
        id: 'legacy',
        name: 'Наследие\x20образца',
        desc: 'Цепочка ×5 за уровень',
        cost: 0x0,
        growth: 0.5,
        max: 0x1e,
      },
      {
        id: 'echo',
        name: 'Эхо\x20распада',
        desc: 'Изотопы ×3 за уровень',
        cost: 0x0,
        growth: 0.65,
        max: 0x1e,
      },
      {
        id: 'memory',
        name: 'Несгораемые записи',
        desc: 'Сохраняет первые 1/2/3 исследования после реальности',
        cost: 0x0,
        growth: 0.7,
        max: 0x3,
      },
      {
        id: 'gravity',
        name: 'Гравитационная память',
        desc: 'Масса\x20×3\x20за\x20уровень',
        cost: 0x0,
        growth: 0.65,
        max: 0x19,
      },
    ],
    _0x5ed71e = [
      {
        name: 'Первый\x20образец',
        short: 'Обычная\x20физика',
        rule: 'Освой каскад, распад и сингулярность.',
        penalty: 0x0,
      },
      {
        name: 'Тихая комната',
        short: 'Только автоматика',
        rule: 'Нажатия не дают добычу. Цепочка вдвое медленнее.',
        penalty: 0.30103,
        noTap: true,
      },
      {
        name: 'Глухой резонанс',
        short: 'Без резонансов',
        rule: 'Резонансы недоступны. Усиления слабее на 20%.',
        penalty: 0x0,
        noRes: true,
      },
      {
        name: 'Зеркальная среда',
        short: 'Другие цены',
        rule: 'Цены нечётных измерений растут на 25% быстрее.',
        penalty: 0.3,
        expensive: true,
      },
      {
        name: 'Вакуум банки',
        short: 'Медленная цепь',
        rule: 'Цепочка в 10 раз медленнее. Изотопы ×0,1.',
        penalty: 0x1,
        decayPenalty: 0x1,
      },
      {
        name: 'Последняя крышка',
        short: 'Нестабильная физика',
        rule: 'Цепочка в 30 раз медленнее; ускорен рост цен; изотопы ×0,1.',
        penalty: 1.47712,
        expensive: true,
        decayPenalty: 0x1,
      },
      {
        name: 'Тихий\x20вакуум',
        short: 'Без\x20ручной\x20добычи',
        rule: 'Нажатия не дают добычу. Цепочка в 40 раз медленнее.',
        penalty: Math.log10(0x28),
        noTap: true,
        decayPenalty: 0x1,
        massPower: 0x3,
        coreMultiplier: 0x18,
      },
      {
        name: 'Разрыв связи',
        short: 'Слабые усиления',
        rule: 'Резонансы недоступны. Усиления слабее на 20%, изотопы ×0,1.',
        penalty: 0x1,
        noRes: true,
        decayPenalty: 0x1,
        massPower: 0x5,
        coreMultiplier: 0x30,
      },
      {
        name: 'Тяжёлая\x20оболочка',
        short: 'Дорогие помощники',
        rule: 'Цепочка в 60 раз медленнее. Нечётные помощники дорожают быстрее, изотопы ×0,03.',
        penalty: Math.log10(0x3c),
        expensive: true,
        decayPenalty: 1.5,
        massPower: 0x7,
        coreMultiplier: 0x50,
      },
      {
        name: 'Закрытый контур',
        short: 'Предельный\x20опыт',
        rule: 'Цепочка\x20в\x20100\x20раз\x20медленнее.\x20Нечётные\x20помощники\x20дорожают\x20быстрее,\x20изотопы\x20×0,01.',
        penalty: 0x2,
        expensive: true,
        decayPenalty: 0x2,
        massPower: 0x9,
        coreMultiplier: 0x80,
      },
    ],
    _0x1ef4c0 = [
      {
        id: 'power',
        name: 'Руна\x20реактора',
        desc: 'Цепочка ×10 за силу руны',
        color: '#c2f36a',
      },
      {
        id: 'isotope',
        name: 'Руна распада',
        desc: 'Изотопы ×5 за силу руны',
        color: '#70d7e4',
      },
      {
        id: 'mass',
        name: 'Руна тяжести',
        desc: 'Масса\x20×4\x20за\x20силу\x20руны',
        color: '#c0a2fa',
      },
    ];
  function _0x5550d2(_0x37fac9 = Date.now()) {
    return {
      version: 0x2,
      am: 0x1,
      run: _0x16743e,
      total: _0x16743e,
      best: 0x1,
      epochBest: 0x1,
      dims: _0x513272.map(() => ({
        q: _0x16743e,
        b: 0x0,
      })),
      boosts: 0x0,
      resonance: 0x0,
      ticks: 0x0,
      tapLevel: 0x0,
      iso: _0x16743e,
      isoTotal: _0x16743e,
      isoEpoch: _0x16743e,
      decays: 0x0,
      decaysHere: 0x0,
      isoUp: {},
      mass: _0x16743e,
      massTotal: _0x16743e,
      massCycle: _0x16743e,
      sings: 0x0,
      singsHere: 0x0,
      research: [],
      cores: _0x16743e,
      coreTotal: _0x16743e,
      realities: 0x0,
      coreUp: {},
      protocols: Array(0x8).fill(0x0),
      challenge: null,
      glyphs: [],
      equipped: null,
      pendingGlyph: false,
      bestStage: 0x0,
      clicks: 0x0,
      anomalies: 0x0,
      combo: 0x1,
      comboCount: 0x0,
      charge: 0x0,
      overload: 0x0,
      overloadCooldown: 0x0,
      anomalyBoost: 0x0,
      mode: 'balanced',
      photo: 0x2,
      missions: [],
      awards: [],
      activeSeconds: 0x0,
      simSeconds: 0x0,
      cycleSeconds: 0x0,
      epochSeconds: 0x0,
      realitySeconds: 0x0,
      bestDecayTime: null,
      lastSeen: _0x37fac9,
      completed: false,
      legacy: null,
      notices: [],
      auto: {
        dims: false,
        helperMask: Array(0x8).fill(true),
        ticks: false,
        isos: false,
        boost: false,
        resonance: false,
        decay: false,
        sing: false,
        decayAt: 0x0,
        singAt: 0x0,
        boostLimit: 0x14,
        resLimit: 0x5,
        buyMode: 'balanced',
        clock: 0x0,
      },
      tapBoosts: {
        version: 0x1,
        active: 0x0,
        activeUntil: 0x0,
        ready3: 0x0,
        ready10: 0x0,
        clock: _0x37fac9,
      },
      settings: {
        sound: false,
        haptic: true,
        motion: true,
        notation: 'mixed',
      },
      history: [],
      materials: {
        version: 0x1,
        levels: {},
        active: [],
        fragments: 0x0,
        forged: 0x0,
        mods: Array(0x8).fill(0x0),
      },
    };
  }
  const _0x52ecef = (_0x3cc3f4, _0x50e59f) => _0x3cc3f4.research.includes(_0x50e59f),
    _0x3530a5 = (_0x2c2cc5) => _0x5ed71e[Math.min(_0x5ed71e.length - 0x1, _0x2c2cc5.realities)],
    _0x43d58a = (_0x4f56c3) => _0x4f56c3.protocols.reduce((_0x25f75f, _0xe65e8c) => _0x25f75f + _0xe65e8c, 0x0),
    _0x55e60a = (_0x2a5a21, _0x4feb11) => _0x2a5a21.isoUp[_0x4feb11] || 0x0,
    _0x19cb9 = (_0x220a42, _0x5d591f) => _0x220a42.coreUp[_0x5d591f] || 0x0,
    _0x8a577 = (_0x46f714) => _0x46f714.glyphs.find((_0x6dbdce) => _0x6dbdce.key === _0x46f714.equipped) || null;
  function _0x4a7ff9(_0x443843, _0x360c99) {
    const _0x1e2a72 = _0x8a577(_0x443843);
    return _0x1e2a72 && _0x1e2a72.id === _0x360c99 ? _0x1e2a72.power : 0x0;
  }
  function _0x1c8349(_0x1e237e) {
    return _0x1e237e.challenge && 0x1 === _0x1e237e.challenge.id
      ? 0x4
      : _0x1e237e.challenge && 0x2 === _0x1e237e.challenge.id
        ? 0x3
        : _0x1e237e.challenge && 0x3 === _0x1e237e.challenge.id
          ? 0x8
          : Math.min(0x8, 0x4 + _0x1e237e.boosts);
  }
  function _0xcb47ec(_0x2f0f89, _0x305d0d, _0x10cdd1 = _0x2f0f89.dims[_0x305d0d].b) {
    const _0x4a21db = _0x513272[_0x305d0d],
      _0x475b7e = _0x2f0f89.challenge && 0x5 === _0x2f0f89.challenge.id ? 1.35 : 0x1,
      _0x2479bb = _0x3530a5(_0x2f0f89).expensive && _0x305d0d % 0x2 == 0x0 ? 1.25 : 0x1;
    return (
      _0x4a21db.cost +
      (_0x4a21db.growth * _0x10cdd1 + 0.0002 * Math.pow(Math.max(0x0, _0x10cdd1 - 0xfa), 0x2)) *
        _0x475b7e *
        _0x2479bb *
        (_0x52ecef(_0x2f0f89, 'r11') ? 0.92 : 0x1) -
      0.15 * _0x2f0f89.protocols[0x5] +
      (_0x43871a.KizyacMaterials ? _0x43871a.KizyacMaterials.helperPrice(_0x2f0f89, _0x305d0d) : 0x0)
    );
  }
  const _0xd20ed4 = (_0x152753) =>
    0x3 + 0.42 * _0x152753.ticks + 0.0004 * Math.pow(Math.max(0x0, _0x152753.ticks - 0x12c), 0x2);
  function _0x46d78d(_0xf495ad) {
    return 0x0 === _0xf495ad.decays && _0xf495ad.tapLevel < 0x2
      ? _0x4e18b0.from(0x0 === _0xf495ad.tapLevel ? 0xf : 0x1e)
      : 1.4 + 0.52 * _0xf495ad.tapLevel;
  }
  const _0x445e6d = (_0x459948) =>
    !(
      !_0x459948.cheats ||
      true !== _0x459948.cheats.unlocked ||
      true !== _0x459948.cheats.used ||
      true !== _0x459948.cheats.infiniteAM
    );
  function _0x277277(_0x8b4f55, _0x5b187b) {
    return _0x445e6d(_0x8b4f55)
      ? ((_0x8b4f55.am = _0x4e18b0.MAX), true)
      : !(_0x8b4f55.am + 1e-12 < _0x5b187b || ((_0x8b4f55.am = _0x4e18b0.sub(_0x8b4f55.am, _0x5b187b)), 0x0));
  }
  function _0x329490(_0x50b49d, _0xcff421) {
    _0x4e18b0.valid(_0xcff421) &&
      ((_0xcff421 = Math.min(_0x4e18b0.MAX, _0xcff421)),
      (_0x50b49d.am = _0x445e6d(_0x50b49d) ? _0x4e18b0.MAX : _0x4e18b0.add(_0x50b49d.am, _0xcff421)),
      (_0x50b49d.run = _0x4e18b0.add(_0x50b49d.run, _0xcff421)),
      (_0x50b49d.total = _0x4e18b0.add(_0x50b49d.total, _0xcff421)),
      (_0x50b49d.best = Math.max(_0x50b49d.best, _0x50b49d.run)),
      (_0x50b49d.epochBest = Math.max(_0x50b49d.epochBest, _0x50b49d.run)));
  }
  function _0x3e4e4e(_0x33bb54) {
    let _0x33be82 =
      _0x55e60a(_0x33bb54, 'power') * Math.log10(0x2) +
      _0x19cb9(_0x33bb54, 'legacy') * Math.log10(0x5) +
      _0x4a7ff9(_0x33bb54, 'power') +
      _0x33bb54.boosts *
        _0x52f184.boostPower *
        (0x1 + 0.05 * _0x33bb54.protocols[0x6]) *
        (_0x3530a5(_0x33bb54).noRes ? 0.8 : 0x1) +
      _0x33bb54.resonance * _0x52f184.resPower * (_0x52ecef(_0x33bb54, 'c3') ? 1.5 : 0x1) +
      _0x33bb54.protocols[0x3] * Math.log10(1.4) +
      _0x33bb54.protocols[0x7] * Math.log10(1.5);
    return (
      _0x4e18b0.valid(_0x33bb54.coreTotal) && (_0x33be82 += 0.6 * Math.max(0x0, _0x33bb54.coreTotal + 0x1)),
      _0x52ecef(_0x33bb54, 'r0') && (_0x33be82 += 0x1),
      _0x52ecef(_0x33bb54, 'a3') && 'active' === _0x33bb54.mode && (_0x33be82 += Math.log10(0x1e)),
      _0x52ecef(_0x33bb54, 'i1') && 'idle' === _0x33bb54.mode && (_0x33be82 += Math.log10(0xc)),
      _0x52ecef(_0x33bb54, 'r3') && (_0x33be82 += 0x3),
      _0x52ecef(_0x33bb54, 'r6') && (_0x33be82 += _0x43d58a(_0x33bb54) * Math.log10(1.12)),
      _0x52ecef(_0x33bb54, 'r14') && (_0x33be82 += 0x8),
      (_0x33be82 -= _0x3530a5(_0x33bb54).penalty),
      _0x33bb54.challenge && 0x7 === _0x33bb54.challenge.id && (_0x33be82 -= Math.log10(0x1e)),
      _0x33be82
    );
  }
  function _0x8d5ba5(_0x530a4e) {
    const _0x5ce534 = _0x1c8349(_0x530a4e),
      _0x182421 = _0x3e4e4e(_0x530a4e),
      _0x5eb188 = _0x52ecef(_0x530a4e, 'r10') ? 0x3 : _0x52ecef(_0x530a4e, 'c2') ? 2.4 : 0x2,
      _0x2c0b2c =
        _0x530a4e.challenge && 0x4 === _0x530a4e.challenge.id
          ? 0x0
          : _0x530a4e.ticks *
            _0x52f184.tickPower *
            (0x1 + 0.03 * _0x530a4e.protocols[0x4]) *
            (_0x52ecef(_0x530a4e, 'r13') ? 1.5 : 0x1);
    return _0x513272.map((_0x34687b, _0xa266d) => {
      if (_0xa266d >= _0x5ce534) return _0x16743e;
      let _0x27af9e =
        _0x182421 +
        _0x2c0b2c +
        (_0x43871a.KizyacMaterials ? _0x43871a.KizyacMaterials.helperRate(_0x530a4e, _0xa266d) : 0x0) +
        Math.floor(_0x530a4e.dims[_0xa266d].b / 0xa) * Math.log10(_0x5eb188) +
        (0x0 === _0xa266d ? Math.log10(_0x52f184.baseFirst) : Math.log10(_0x52f184.baseChain));
      return (
        _0xa266d > 0x0 && (_0x27af9e += _0x55e60a(_0x530a4e, 'chain') * Math.log10(0x2)),
        0x0 === _0xa266d && (_0x27af9e += _0x530a4e.protocols[0x0] * Math.log10(1.5)),
        _0xa266d < 0x4 && (_0x27af9e += _0x530a4e.protocols[0x1] * Math.log10(1.6)),
        _0xa266d >= 0x4 && _0x52ecef(_0x530a4e, 'c1') && (_0x27af9e += 0x2),
        _0xa266d >= 0x4 && _0x52ecef(_0x530a4e, 'r7') && (_0x27af9e += 0x4),
        'active' === _0x530a4e.mode && (_0x27af9e -= 0.1),
        'chain' === _0x530a4e.mode && (_0x27af9e += 0x0 === _0xa266d ? -0.3 : 0.18),
        _0x27af9e
      );
    });
  }
  function _0x1f8865(_0x4cfe9f) {
    const _0x5499c1 = _0x8d5ba5(_0x4cfe9f);
    return _0x4e18b0.valid(_0x4cfe9f.dims[0x0].q) ? _0x4cfe9f.dims[0x0].q + _0x5499c1[0x0] : _0x16743e;
  }
  const _0x4d91d2 = {
    0x3: {
      duration: 0x1d4c0,
      cooldown: 0x124f80,
    },
    0xa: {
      duration: 0xea60,
      cooldown: 0x36ee80,
    },
  };
  function _0x5e9a4b(_0x27ede7) {
    return (
      !!_0x27ede7 &&
      0x1 === _0x27ede7.version &&
      [0x0, 0x3, 0xa].includes(_0x27ede7.active) &&
      ['activeUntil', 'ready3', 'ready10', 'clock'].every(
        (_0x2b29f2) =>
          Number.isSafeInteger(_0x27ede7[_0x2b29f2]) &&
          _0x27ede7[_0x2b29f2] >= 0x0 &&
          _0x27ede7[_0x2b29f2] <= 0x1c6bf526340000,
      ) &&
      (!_0x27ede7.active || _0x27ede7.activeUntil <= _0x27ede7.clock + _0x4d91d2[_0x27ede7.active].duration) &&
      _0x27ede7.ready3 <= _0x27ede7.clock + _0x4d91d2[0x3].cooldown &&
      _0x27ede7.ready10 <= _0x27ede7.clock + _0x4d91d2[0xa].cooldown
    );
  }
  function _0x5d374e(_0x5ed3b9, _0x1f9f1c = Date.now()) {
    _0x5e9a4b(_0x5ed3b9.tapBoosts) ||
      (_0x5ed3b9.tapBoosts = {
        version: 0x1,
        active: 0x0,
        activeUntil: 0x0,
        ready3: 0x0,
        ready10: 0x0,
        clock: Math.max(0x0, Math.floor(_0x1f9f1c)),
      });
    const _0x748fcd = _0x5ed3b9.tapBoosts;
    ((_0x748fcd.clock = Math.max(_0x748fcd.clock, Math.max(0x0, Math.floor(_0x1f9f1c)))),
      _0x748fcd.activeUntil <= _0x748fcd.clock && ((_0x748fcd.active = 0x0), (_0x748fcd.activeUntil = 0x0)));
    const _0x322714 = !!(_0x3530a5(_0x5ed3b9).noTap || (_0x5ed3b9.challenge && 0x0 === _0x5ed3b9.challenge.id)),
      _0x5cfc99 = Math.max(0x0, _0x748fcd.ready3 - _0x748fcd.clock),
      _0x84a86d = Math.max(0x0, _0x748fcd.ready10 - _0x748fcd.clock);
    return {
      active: _0x748fcd.active,
      remaining: Math.max(0x0, _0x748fcd.activeUntil - _0x748fcd.clock),
      left3: _0x5cfc99,
      left10: _0x84a86d,
      blocked: _0x322714,
      can3: !_0x322714 && !_0x748fcd.active && !_0x5cfc99,
      can10: !_0x322714 && !_0x748fcd.active && !_0x84a86d,
    };
  }
  function _0x4e6e74(_0x151883, _0x55fae1 = Date.now()) {
    if (_0x3530a5(_0x151883).noTap || (_0x151883.challenge && 0x0 === _0x151883.challenge.id)) return _0x16743e;
    const _0x4ec6a1 = Math.log10(0x1 + 0x2 * _0x151883.tapLevel) + _0x3e4e4e(_0x151883),
      _0x286dc1 = _0x52ecef(_0x151883, 'a1') ? 0.12 : 'active' === _0x151883.mode ? 0.055 : 0.022;
    return (
      _0x4e18b0.add(_0x4ec6a1, _0x4e18b0.scale(_0x1f8865(_0x151883), _0x286dc1)) +
      Math.log10(_0x151883.combo) +
      (_0x52ecef(_0x151883, 'a2') ? Math.log10(1.6) : 0x0) +
      (_0x43871a.KizyacMaterials ? _0x43871a.KizyacMaterials.effect(_0x151883, 'tap') : 0x0) +
      Math.log10(_0x5d374e(_0x151883, _0x55fae1).active || 0x1)
    );
  }
  function _0x54a93a(_0xfbdde2, _0x5b94fd, _0x10a1f2 = 0x1) {
    if (!Number.isInteger(_0x5b94fd) || _0x5b94fd < 0x0 || _0x5b94fd >= _0x1c8349(_0xfbdde2)) return 0x0;
    _0x10a1f2 = Math.min(0x2710, Math.max(0x1, Math.floor(_0x10a1f2)));
    let _0x3c43f8 = 0x0;
    for (
      ;
      _0x3c43f8 < _0x10a1f2 &&
      _0xfbdde2.dims[_0x5b94fd].b < 0x4e20 &&
      _0x277277(_0xfbdde2, _0xcb47ec(_0xfbdde2, _0x5b94fd));
    )
      (_0xfbdde2.dims[_0x5b94fd].b++,
        (_0xfbdde2.dims[_0x5b94fd].q = _0x4e18b0.add(_0xfbdde2.dims[_0x5b94fd].q, 0x0)),
        _0x3c43f8++);
    return (_0x3c43f8 && _0x3c08ff.Lab && _0x3c08ff.Lab.rememberHelpers(_0xfbdde2), _0x3c43f8);
  }
  function _0x342e9d(_0x508082, _0xc2f49 = 0x1) {
    if (_0x508082.challenge && 0x4 === _0x508082.challenge.id) return 0x0;
    let _0x22ba1f = 0x0;
    for (
      ;
      _0x22ba1f < Math.min(0x2710, _0xc2f49) && _0x508082.ticks < 0x4e20 && _0x277277(_0x508082, _0xd20ed4(_0x508082));
    )
      (_0x508082.ticks++, _0x22ba1f++);
    return _0x22ba1f;
  }
  function _0x58fe5f(_0x2ad49a) {
    const _0x295412 =
      _0x2ad49a.boosts < 0x4
        ? 0x0 === _0x2ad49a.decays
          ? 0x6 + _0x2ad49a.boosts
          : 0xa
        : 0xa + 0x5 * (_0x2ad49a.boosts - 0x2);
    return {
      tier: _0x1c8349(_0x2ad49a) - 0x1,
      count: _0x295412,
    };
  }
  function _0x18f839(_0x3b420e) {
    if (_0x3b420e.challenge && 0x3 === _0x3b420e.challenge.id) return false;
    const _0x1cf984 = _0x58fe5f(_0x3b420e);
    return _0x3b420e.dims[_0x1cf984.tier].b >= _0x1cf984.count;
  }
  const _0x457a51 = (_0x1d9e8e) =>
    Math.max(_0x55e60a(_0x1d9e8e, 'memory'), _0x52ecef(_0x1d9e8e, 'r9') ? 0x4 : _0x52ecef(_0x1d9e8e, 'r2') ? 0x2 : 0x0);
  function _0x4ab6ae(_0x137399, _0x1bbf0b = 'decay') {
    ((_0x137399.am = _0x445e6d(_0x137399) ? _0x4e18b0.MAX : Math.max(0x1, 0x1 + 0x2 * _0x55e60a(_0x137399, 'starter'))),
      (_0x137399.run = _0x16743e),
      (_0x137399.dims = _0x513272.map(() => ({
        q: _0x16743e,
        b: 0x0,
      }))),
      (_0x137399.ticks = _0x52ecef(_0x137399, 'r2') ? 0x6 : 0x0),
      (_0x137399.tapLevel = 0x0),
      (_0x137399.comboCount = 0x0),
      (_0x137399.combo = 0x1),
      (_0x137399.charge = 0x0),
      (_0x137399.overload = 0x0),
      (_0x137399.overloadCooldown = 0x0),
      (_0x137399.anomalyBoost = 0x0),
      (_0x137399.cycleSeconds = 0x0),
      ('decay' !== _0x1bbf0b && 'challenge' !== _0x1bbf0b) ||
        ((_0x137399.boosts = _0x457a51(_0x137399)), (_0x137399.resonance = 0x0)),
      (_0x137399.boosts > 0x0 ||
        _0x137399.resonance > 0x0 ||
        _0x137399.decays > 0x0 ||
        _0x137399.sings > 0x0 ||
        _0x137399.realities > 0x0) &&
        (_0x137399.dims[0x0] = {
          q: 0x0,
          b: 0x1,
        }),
      _0x3c08ff.Lab && _0x3c08ff.Lab.capture(_0x137399));
  }
  function _0x4686dd(_0xf0653f, _0x41331d) {
    return (
      !!_0x18f839(_0xf0653f) &&
      (_0x3c08ff.Lab && _0x3c08ff.Lab.reset(_0xf0653f, 'boost', _0x16743e, _0x41331d),
      _0xf0653f.boosts++,
      _0x4ab6ae(_0xf0653f, 'boost'),
      true)
    );
  }
  const _0x302f10 = (_0x3faaca) => 0x32 + 0x19 * _0x3faaca.resonance;
  function _0x5c280e(_0x128d22) {
    return (
      !_0x3530a5(_0x128d22).noRes &&
      !(_0x128d22.challenge && [0x3, 0x6].includes(_0x128d22.challenge.id)) &&
      0x8 === _0x1c8349(_0x128d22) &&
      _0x128d22.dims[0x7].b >= _0x302f10(_0x128d22)
    );
  }
  function _0x437d5b(_0x543ff7, _0x5972f5) {
    return (
      !!_0x5c280e(_0x543ff7) &&
      (_0x3c08ff.Lab && _0x3c08ff.Lab.reset(_0x543ff7, 'resonance', _0x16743e, _0x5972f5),
      _0x543ff7.resonance++,
      (_0x543ff7.boosts = _0x457a51(_0x543ff7)),
      _0x4ab6ae(_0x543ff7, 'resonance'),
      true)
    );
  }
  const _0x49b008 = (_0x2a9abb) => (0x0 === _0x2a9abb.decays ? _0x52f184.firstDecayAt : _0x52f184.decayAt);
  function _0x26bbe2(_0x56b2c1) {
    const _0x1781e0 = _0x49b008(_0x56b2c1);
    if (_0x56b2c1.run < _0x1781e0) return _0x16743e;
    let _0x378a6a =
      (_0x56b2c1.run - _0x1781e0) / 0x14 +
      _0x55e60a(_0x56b2c1, 'yield') * Math.log10(0x2) +
      _0x56b2c1.protocols[0x2] * Math.log10(1.5) +
      _0x19cb9(_0x56b2c1, 'echo') * Math.log10(0x3) +
      _0x4a7ff9(_0x56b2c1, 'isotope') * Math.log10(0x5) -
      (_0x3530a5(_0x56b2c1).decayPenalty || 0x0);
    return (
      _0x52ecef(_0x56b2c1, 'r1') && (_0x378a6a += Math.log10(0x3)),
      _0x52ecef(_0x56b2c1, 'r4') && (_0x378a6a += Math.log10(0x1e)),
      _0x52ecef(_0x56b2c1, 'i3') && 'idle' === _0x56b2c1.mode && (_0x378a6a += Math.log10(0x8)),
      _0x43871a.KizyacMaterials && (_0x378a6a += _0x43871a.KizyacMaterials.effect(_0x56b2c1, 'isotope')),
      _0x4e18b0.floor(Math.max(0x0, _0x378a6a))
    );
  }
  function _0xb42464(_0x31707f, _0x927e3d) {
    _0x4e18b0.valid(_0x927e3d) &&
      ((_0x31707f.iso = _0x4e18b0.add(_0x31707f.iso, _0x927e3d)),
      (_0x31707f.isoTotal = _0x4e18b0.add(_0x31707f.isoTotal, _0x927e3d)),
      (_0x31707f.isoEpoch = _0x4e18b0.add(_0x31707f.isoEpoch, _0x927e3d)));
  }
  function _0x11ba7f(_0x450e7c, _0x27e085) {
    if (_0x450e7c.challenge) return false;
    const _0x39623b = _0x26bbe2(_0x450e7c);
    return (
      !!_0x4e18b0.valid(_0x39623b) &&
      (_0x3c08ff.Lab && _0x3c08ff.Lab.reset(_0x450e7c, 'decay', _0x39623b, _0x27e085),
      _0xb42464(_0x450e7c, _0x39623b),
      _0x450e7c.decays++,
      _0x450e7c.decaysHere++,
      (_0x450e7c.bestDecayTime =
        null === _0x450e7c.bestDecayTime
          ? _0x450e7c.cycleSeconds
          : Math.min(_0x450e7c.bestDecayTime, _0x450e7c.cycleSeconds)),
      _0x450e7c.history.unshift({
        type: 'decay',
        gain: _0x39623b,
        time: _0x450e7c.cycleSeconds,
      }),
      (_0x450e7c.history = _0x450e7c.history.slice(0x0, 0xc)),
      _0x4ab6ae(_0x450e7c),
      _0x39623b)
    );
  }
  function _0x379bf5(_0x1d2a38, _0x57b0d8) {
    const _0x31244c = _0x76093b.find((_0x347fcd) => _0x347fcd.id === _0x57b0d8);
    return _0x31244c ? _0x31244c.cost + _0x55e60a(_0x1d2a38, _0x57b0d8) * _0x31244c.growth : 0x1 / 0x0;
  }
  function _0x31f376(_0x23c083, _0x12dd49) {
    const _0x211ec1 = _0x76093b.find((_0x46e3cb) => _0x46e3cb.id === _0x12dd49);
    return !(
      !_0x211ec1 ||
      _0x55e60a(_0x23c083, _0x12dd49) >= _0x211ec1.max ||
      _0x23c083.iso < _0x379bf5(_0x23c083, _0x12dd49) ||
      ('decay' === _0x12dd49 && _0x43d58a(_0x23c083) < 0x4) ||
      ((_0x23c083.iso = _0x4e18b0.sub(_0x23c083.iso, _0x379bf5(_0x23c083, _0x12dd49))),
      (_0x23c083.isoUp[_0x12dd49] = _0x55e60a(_0x23c083, _0x12dd49) + 0x1),
      0x0)
    );
  }
  const _0x15a6e6 = (_0x4479d8, _0x4c17ba) =>
    _0x28e1c3[_0x4c17ba].goal + _0x4479d8.protocols[_0x4c17ba] * _0x28e1c3[_0x4c17ba].step;
  function _0x45e26c(_0x4cbdbb) {
    if (!_0x4cbdbb.challenge || _0x4cbdbb.run < _0x15a6e6(_0x4cbdbb, _0x4cbdbb.challenge.id)) return false;
    const _0x477caf = _0x4cbdbb.challenge.id,
      _0x472f10 = Math.max(0x0, _0x26bbe2(_0x4cbdbb));
    return (
      _0x3c08ff.Lab && _0x3c08ff.Lab.reset(_0x4cbdbb, 'protocol', _0x16743e, 'auto'),
      _0x4cbdbb.protocols[_0x477caf]++,
      (_0x4cbdbb.challenge = null),
      _0xb42464(_0x4cbdbb, _0x472f10),
      _0x4cbdbb.decays++,
      _0x4cbdbb.decaysHere++,
      _0x4ab6ae(_0x4cbdbb),
      _0x4cbdbb.notices.push({
        type: 'protocol',
        id: _0x477caf,
        rank: _0x4cbdbb.protocols[_0x477caf],
      }),
      true
    );
  }
  const _0x182581 = (_0x3f9bb9) => Math.max(0x0, Math.min(_0x3f9bb9.realities, 0x9) - 0x2);
  function _0x223994(_0xb3f3bf) {
    const _0x314813 = _0x182581(_0xb3f3bf);
    return {
      am: _0x52f184.singAM + 0x50 * _0xb3f3bf.realities + 0x6 * _0x314813 * _0x314813,
      iso: _0x52f184.singIso + 0x6 * _0xb3f3bf.realities + _0x314813,
      decays: _0x52f184.singDecays + Math.floor(_0x314813 / 0x2),
      ranks: _0x52f184.singRanks,
    };
  }
  function _0x2a2f5a(_0x139d2c) {
    const _0x579fc0 = _0x223994(_0x139d2c);
    return (
      !_0x139d2c.challenge &&
      _0x139d2c.run >= _0x579fc0.am &&
      _0x139d2c.isoEpoch >= _0x579fc0.iso &&
      _0x139d2c.decaysHere >= _0x579fc0.decays &&
      _0x43d58a(_0x139d2c) >= _0x579fc0.ranks
    );
  }
  function _0x370a62(_0x39702e) {
    return (
      _0x19cb9(_0x39702e, 'gravity') * Math.log10(0x3) +
      _0x4a7ff9(_0x39702e, 'mass') * Math.log10(0x4) +
      (_0x52ecef(_0x39702e, 'r8') ? 0x1 : 0x0) +
      (_0x52ecef(_0x39702e, 'r12') ? Math.log10(0x5) : 0x0) +
      (_0x3530a5(_0x39702e).massPower || 0x0)
    );
  }
  function _0xe8bdd1(_0x4ef29f) {
    return _0x2a2f5a(_0x4ef29f)
      ? _0x4e18b0.floor(Math.max(0x0, (_0x4ef29f.isoEpoch - _0x223994(_0x4ef29f).iso) / 0x5 + _0x370a62(_0x4ef29f)))
      : _0x16743e;
  }
  function _0x32bb16(_0x1ae72c, _0x3fc6fb) {
    const _0x3d7f45 = _0xe8bdd1(_0x1ae72c);
    return (
      !!_0x4e18b0.valid(_0x3d7f45) &&
      (_0x3c08ff.Lab && _0x3c08ff.Lab.reset(_0x1ae72c, 'singularity', _0x3d7f45, _0x3fc6fb),
      (_0x1ae72c.mass = _0x4e18b0.add(_0x1ae72c.mass, _0x3d7f45)),
      (_0x1ae72c.massTotal = _0x4e18b0.add(_0x1ae72c.massTotal, _0x3d7f45)),
      (_0x1ae72c.massCycle = _0x4e18b0.add(_0x1ae72c.massCycle, _0x3d7f45)),
      _0x1ae72c.sings++,
      _0x1ae72c.singsHere++,
      _0x1ae72c.history.unshift({
        type: 'singularity',
        gain: _0x3d7f45,
        time: _0x1ae72c.epochSeconds,
      }),
      (_0x1ae72c.history = _0x1ae72c.history.slice(0x0, 0xc)),
      (_0x1ae72c.iso = _0x16743e),
      (_0x1ae72c.isoEpoch = _0x16743e),
      (_0x1ae72c.isoUp = {}),
      (_0x1ae72c.decaysHere = 0x0),
      (_0x1ae72c.epochBest = 0x1),
      (_0x1ae72c.epochSeconds = 0x0),
      _0x4ab6ae(_0x1ae72c),
      _0x3d7f45)
    );
  }
  function _0x2eee09(_0x5e0e77) {
    const _0x2d78d5 = _0x18e96f.find((_0x206d34) => _0x206d34.path && _0x5e0e77.research.includes(_0x206d34.id));
    return _0x2d78d5 ? _0x2d78d5.path : null;
  }
  function _0x5e946e(_0x155f6b, _0xf66a1f) {
    const _0x48f34e = _0x18e96f.find((_0x494fc3) => _0x494fc3.id === _0xf66a1f);
    return (
      !(!_0x48f34e || _0x155f6b.research.includes(_0xf66a1f) || _0x155f6b.mass < _0x48f34e.cost) &&
      (!_0x48f34e.path || !_0x2eee09(_0x155f6b) || _0x48f34e.path === _0x2eee09(_0x155f6b)) &&
      (_0x48f34e.requires || []).every((_0x17b210) => _0x52ecef(_0x155f6b, _0x17b210)) &&
      (!_0x48f34e.any || _0x48f34e.any.some((_0xd0e3c5) => _0x52ecef(_0x155f6b, _0xd0e3c5)))
    );
  }
  function _0x169664(_0x23f58a) {
    const _0x267144 = _0x182581(_0x23f58a);
    return {
      mass: _0x52f184.realityMass + 0x3 * _0x23f58a.realities + Math.floor(_0x267144 / 0x2),
      iso: _0x52f184.realityIso + 0xa * _0x23f58a.realities + 0x2 * _0x267144,
      sings: _0x52f184.realitySings + _0x23f58a.realities + Math.floor(_0x267144 / 0x2),
      ranks: _0x23f58a.realities >= 0x6 ? 0x18 : _0x52f184.realityRanks,
    };
  }
  function _0x391e47(_0x28148b) {
    const _0x4a2bed = _0x169664(_0x28148b);
    return (
      !_0x28148b.challenge &&
      !_0x28148b.pendingGlyph &&
      _0x28148b.massCycle >= _0x4a2bed.mass &&
      _0x28148b.isoEpoch >= _0x4a2bed.iso &&
      _0x28148b.singsHere >= _0x4a2bed.sings &&
      _0x43d58a(_0x28148b) >= _0x4a2bed.ranks
    );
  }
  function _0x561137(_0x167b58) {
    if (!_0x391e47(_0x167b58)) return _0x16743e;
    const _0x537e89 = Math.log10(_0x3530a5(_0x167b58).coreMultiplier || 0x1);
    return _0x4e18b0.floor(Math.max(0x0, (_0x167b58.massCycle - _0x169664(_0x167b58).mass) / 0x4) + _0x537e89);
  }
  function _0x1bbe5a(_0xb37204, _0x52549b) {
    const _0x17defb = _0x20945c.find((_0x568914) => _0x568914.id === _0x52549b);
    return _0x17defb ? _0x17defb.cost + _0x19cb9(_0xb37204, _0x52549b) * _0x17defb.growth : 0x1 / 0x0;
  }
  function _0x105cef(_0x5c024d, _0x5d5002) {
    return 'isos' === _0x5d5002
      ? _0x5c024d.sings >= 0x2 || _0x5c024d.realities > 0x0
      : 'dims' === _0x5d5002
        ? _0x5c024d.boosts > 0x0 ||
          _0x5c024d.resonance > 0x0 ||
          _0x5c024d.decays > 0x0 ||
          _0x5c024d.sings > 0x0 ||
          _0x5c024d.realities > 0x0
        : 'ticks' === _0x5d5002
          ? _0x55e60a(_0x5c024d, 'buy') > 0x0 || _0x5c024d.sings >= 0x1
          : 'boost' === _0x5d5002 || 'resonance' === _0x5d5002
            ? _0x55e60a(_0x5c024d, 'boost') > 0x0 || _0x5c024d.sings >= 0x3
            : 'decay' === _0x5d5002
              ? _0x55e60a(_0x5c024d, 'decay') > 0x0 || _0x52ecef(_0x5c024d, 'r5') || _0x5c024d.realities > 0x0
              : 'sing' === _0x5d5002 && (_0x52ecef(_0x5c024d, 'r5') || _0x5c024d.realities > 0x0);
  }
  function _0x565785(_0x1bbc33) {
    if (_0x1bbc33.auto.isos && _0x105cef(_0x1bbc33, 'isos')) {
      for (const _0x24ae27 of ['buy', 'memory', 'boost', 'decay', 'starter', 'power', 'chain', 'yield'])
        _0x31f376(_0x1bbc33, _0x24ae27);
    }
    if (_0x1bbc33.auto.sing && _0x105cef(_0x1bbc33, 'sing') && _0xe8bdd1(_0x1bbc33) >= _0x1bbc33.auto.singAt)
      _0x32bb16(_0x1bbc33, 'auto');
    else {
      if (
        _0x1bbc33.auto.decay &&
        _0x105cef(_0x1bbc33, 'decay') &&
        !_0x1bbc33.challenge &&
        _0x26bbe2(_0x1bbc33) >= _0x1bbc33.auto.decayAt
      )
        _0x11ba7f(_0x1bbc33, 'auto');
      else {
        if (_0x1bbc33.auto.dims && _0x105cef(_0x1bbc33, 'dims')) {
          if ('reserve' !== _0x1bbc33.auto.buyMode || _0x445e6d(_0x1bbc33)) {
            for (let _0x1b3ec6 = _0x1c8349(_0x1bbc33) - 0x1; _0x1b3ec6 >= 0x0; _0x1b3ec6--)
              (_0x1bbc33.auto.helperMask && !_0x1bbc33.auto.helperMask[_0x1b3ec6]) ||
                _0x54a93a(_0x1bbc33, _0x1b3ec6, 'balanced' === _0x1bbc33.auto.buyMode ? 0xa : 0x2710);
          } else {
            const _0x1acc54 = _0x1bbc33.am;
            _0x1bbc33.am = _0x4e18b0.scale(_0x1bbc33.am, 0.8);
            for (let _0x33460e = _0x1c8349(_0x1bbc33) - 0x1; _0x33460e >= 0x0; _0x33460e--)
              (_0x1bbc33.auto.helperMask && !_0x1bbc33.auto.helperMask[_0x33460e]) ||
                _0x54a93a(_0x1bbc33, _0x33460e, 0x2710);
            _0x1bbc33.am = _0x4e18b0.add(_0x1bbc33.am, _0x4e18b0.scale(_0x1acc54, 0.2));
          }
        }
        (_0x1bbc33.auto.ticks &&
          _0x105cef(_0x1bbc33, 'ticks') &&
          _0x342e9d(_0x1bbc33, 'balanced' === _0x1bbc33.auto.buyMode ? 0xa : 0x2710),
          _0x1bbc33.auto.resonance &&
          _0x105cef(_0x1bbc33, 'resonance') &&
          _0x1bbc33.resonance < _0x1bbc33.auto.resLimit &&
          _0x5c280e(_0x1bbc33)
            ? _0x437d5b(_0x1bbc33, 'auto')
            : _0x1bbc33.auto.boost &&
              _0x105cef(_0x1bbc33, 'boost') &&
              _0x1bbc33.boosts < _0x1bbc33.auto.boostLimit &&
              _0x18f839(_0x1bbc33) &&
              _0x4686dd(_0x1bbc33, 'auto'));
      }
    }
  }
  const _0x4a2afc = [0x0];
  for (let _0x38b264 = 0x1; _0x38b264 <= 0x8; _0x38b264++)
    _0x4a2afc[_0x38b264] = _0x4a2afc[_0x38b264 - 0x1] + Math.log10(_0x38b264);
  function _0x30d452(_0x20a84c, _0x394170) {
    const _0x26d4d8 = Math.max(0x0, Math.min(0x12c, _0x394170));
    if (!_0x26d4d8) return;
    const _0x327a24 = _0x8d5ba5(_0x20a84c),
      _0x15d11b = _0x20a84c.dims.map((_0x1ff428) => _0x1ff428.q),
      _0x4e5bef = _0x1c8349(_0x20a84c),
      _0x21e590 = Math.log10(_0x26d4d8),
      _0x1043e7 = _0x15d11b.slice();
    let _0x51ffb6 = _0x16743e;
    for (let _0x28fd8c = 0x0; _0x28fd8c < _0x4e5bef; _0x28fd8c++)
      if (_0x4e18b0.valid(_0x15d11b[_0x28fd8c])) {
        let _0xe51382 = 0x0;
        for (let _0x37391d = _0x28fd8c; _0x37391d >= 0x0; _0x37391d--) {
          _0xe51382 += _0x327a24[_0x37391d];
          const _0x2f8cb9 = _0x28fd8c - _0x37391d + 0x1,
            _0x3242e5 = _0x15d11b[_0x28fd8c] + _0xe51382 + _0x2f8cb9 * _0x21e590 - _0x4a2afc[_0x2f8cb9];
          0x0 === _0x37391d
            ? (_0x51ffb6 = _0x4e18b0.add(_0x51ffb6, _0x3242e5))
            : (_0x1043e7[_0x37391d - 0x1] = _0x4e18b0.add(_0x1043e7[_0x37391d - 0x1], _0x3242e5));
        }
      }
    (_0x329490(_0x20a84c, _0x51ffb6),
      _0x20a84c.dims.forEach((_0x5b0a58, _0x6285aa) => (_0x5b0a58.q = _0x1043e7[_0x6285aa])),
      (_0x20a84c.simSeconds += _0x26d4d8),
      (_0x20a84c.cycleSeconds += _0x26d4d8),
      (_0x20a84c.epochSeconds += _0x26d4d8),
      (_0x20a84c.realitySeconds += _0x26d4d8),
      _0x3c08ff.Lab && _0x3c08ff.Lab.advance(_0x20a84c, _0x26d4d8),
      (_0x20a84c.overload = Math.max(0x0, _0x20a84c.overload - _0x26d4d8)),
      (_0x20a84c.overloadCooldown = Math.max(0x0, _0x20a84c.overloadCooldown - _0x26d4d8)),
      (_0x20a84c.anomalyBoost = Math.max(0x0, _0x20a84c.anomalyBoost - _0x26d4d8)),
      _0x20a84c.challenge && ((_0x20a84c.challenge.elapsed += _0x26d4d8), _0x45e26c(_0x20a84c)),
      (_0x20a84c.auto.clock += _0x26d4d8),
      _0x20a84c.auto.clock >= 0x1 && ((_0x20a84c.auto.clock = 0x0), _0x565785(_0x20a84c)),
      (_0x20a84c.bestStage = Math.max(_0x20a84c.bestStage, _0x319f91(_0x20a84c))),
      _0x3c08ff.Lab && _0x3c08ff.Lab.capture(_0x20a84c));
  }
  function _0x319f91(_0x58f234) {
    if (_0x58f234.realities > 0x0) return Math.min(0x27, 0x1e + Math.floor(1.5 * _0x58f234.realities));
    if (_0x58f234.sings > 0x0)
      return Math.min(0x1d, 0x14 + Math.floor(Math.max(0x0, _0x58f234.massTotal) + _0x58f234.sings / 0x3));
    if (_0x58f234.decays > 0x0)
      return Math.min(0x13, 0xa + Math.floor(Math.max(0x0, _0x58f234.isoTotal) + _0x58f234.decays / 0x5));
    const _0x3576cc = [0x0, 1.7, 0x3, 0x5, 0x8, 0xc, 0x12, 0x18, 0x23, 0x3c];
    let _0x1fde56 = 0x0;
    for (; _0x1fde56 < 0x9 && _0x58f234.best >= _0x3576cc[_0x1fde56 + 0x1];) _0x1fde56++;
    return _0x1fde56;
  }
  const _0x64451b = [],
    _0x24550e = [
      ...[0x1, 0x64, 0x3e8, 0x2710].map((_0x1a2f0b, _0x31f03d) => ({
        id: 'click' + _0x31f03d,
        name: ['Первый контакт', 'Разогрев', 'Палец реактора', 'Ручной коллайдер'][_0x31f03d],
        desc: _0x1a2f0b + ' нажатий',
        test: (_0x1a20a3) => _0x1a20a3.clicks >= _0x1a2f0b,
      })),
      ...[0x4, 0x8].map((_0x32b160) => ({
        id: 'dims' + _0x32b160,
        name: 0x4 === _0x32b160 ? 'Малая\x20лаборатория' : 'Полный каскад',
        desc: 'Купить\x20измерение\x20' + _0x32b160,
        test: (_0x35cb20) => _0x35cb20.dims[_0x32b160 - 0x1].b > 0x0,
      })),
      ...[0x1, 0xa, 0x64].map((_0x61f2e1) => ({
        id: 'decay' + _0x61f2e1,
        name: 0x1 === _0x61f2e1 ? 'Не конец, а начало' : 0xa === _0x61f2e1 ? 'Изотопный опыт' : 'Вечный распад',
        desc: _0x61f2e1 + ' распадов',
        test: (_0xaac862) => _0xaac862.decays >= _0x61f2e1,
      })),
      ...[0x4, 0xc, 0x18].map((_0x40549e) => ({
        id: 'protocol' + _0x40549e,
        name: 0x18 === _0x40549e ? 'Все\x20ограничения\x20сняты' : 'Протокол ' + _0x40549e,
        desc: _0x40549e + ' рангов протоколов',
        test: (_0x5aa89e) => _0x43d58a(_0x5aa89e) >= _0x40549e,
      })),
      {
        id: 'sing1',
        name: 'Не влезает в банку',
        desc: 'Создать сингулярность',
        test: (_0x112ff0) => _0x112ff0.sings >= 0x1,
      },
      {
        id: 'sings10',
        name: 'Пространство\x20сжалось',
        desc: 'Создать 10 сингулярностей',
        test: (_0x421d81) => _0x421d81.sings >= 0xa,
      },
      {
        id: 'research12',
        name: 'Совсем другой кизяк',
        desc: 'Купить\x2012\x20исследований\x20одновременно',
        test: (_0x26c294) => _0x26c294.research.length >= 0xc,
      },
      {
        id: 'huge',
        name: 'За пределами калькулятора',
        desc: 'Добыть\x201e308',
        test: (_0x4e6c51) => _0x4e6c51.total >= 0x134,
      },
      {
        id: 'beyond',
        name: 'Калькулятор уволился',
        desc: 'Добыть\x201e1000',
        test: (_0x4f3058) => _0x4f3058.total >= 0x3e8,
      },
      {
        id: 'reality1',
        name: 'Другая банка',
        desc: 'Создать реальность',
        test: (_0x3e7d38) => _0x3e7d38.realities >= 0x1,
      },
      {
        id: 'glyph',
        name: 'Осколок невозможного',
        desc: 'Выбрать руну',
        test: (_0x5e7a8f) => _0x5e7a8f.glyphs.length > 0x0,
      },
      {
        id: 'realities3',
        name: 'Межмировая\x20коллекция',
        desc: 'Завершить\x203\x20сектора',
        test: (_0x97067a) => _0x97067a.realities >= 0x3,
      },
      {
        id: 'finale',
        name: 'Абсолютный кизяк',
        desc: 'Завершить\x206\x20секторов',
        test: (_0x1217ee) => _0x1217ee.completed,
      },
      {
        id: 'legacy',
        name: 'Та самая первая банка',
        desc: 'Перенести сохранение версии 1',
        test: (_0x8c8f12) => !!_0x8c8f12.legacy,
      },
      {
        id: 'idle',
        name: 'Лаборатория не спит',
        desc: '24 часа работы симуляции',
        test: (_0x10734f) => _0x10734f.simSeconds >= 0x15180,
      },
    ];
  function _0x312334(_0x1d29e2, _0x2cfc91) {
    const _0x4062e3 = _0x5550d2(_0x2cfc91);
    ((_0x4062e3.photo = 0x1 === _0x1d29e2.photo ? 0x1 : 0x2),
      (_0x4062e3.clicks = Number.isFinite(_0x1d29e2.clicks) ? Math.max(0x0, _0x1d29e2.clicks) : 0x0));
    for (const _0x48ae1e of ['sound', 'motion', 'haptic'])
      _0x1d29e2.settings &&
        'boolean' == typeof _0x1d29e2.settings[_0x48ae1e] &&
        (_0x4062e3.settings[_0x48ae1e] = _0x1d29e2.settings[_0x48ae1e]);
    return (
      (_0x4062e3.legacy = {
        version: 0x1,
        lifetime: Number.isFinite(_0x1d29e2.lifetime) ? Math.max(0x0, _0x1d29e2.lifetime) : 0x0,
        balance: Number.isFinite(_0x1d29e2.balance) ? Math.max(0x0, _0x1d29e2.balance) : 0x0,
        prestiges: Number.isFinite(_0x1d29e2.prestiges) ? Math.max(0x0, _0x1d29e2.prestiges) : 0x0,
        bestStage: Math.min(0x9, Math.max(0x0, _0x1d29e2.bestStage || 0x0)),
        clicks: _0x4062e3.clicks,
      }),
      (_0x4062e3.am = 0x2),
      (_0x4062e3.dims[0x0] = {
        q: 0x0,
        b: 0x1,
      }),
      _0x4062e3.notices.push({
        type: 'migration',
      }),
      _0x4062e3
    );
  }
  const _0x3c08ff = {
    N: _0x4e18b0,
    CFG: _0x52f184,
    DIMENSIONS: _0x513272,
    ISO_UPGRADES: _0x76093b,
    PROTOCOLS: _0x28e1c3,
    RESEARCH: _0x18e96f,
    CORE_UPGRADES: _0x20945c,
    SECTORS: _0x5ed71e,
    GLYPHS: _0x1ef4c0,
    STAGE_NAMES: [
      'Свежий кизяк',
      'Подозрительный',
      'Ферментированный',
      'Тёплый образец',
      'Светящийся',
      'Активная культура',
      'Кизяк-мутант',
      'Реакторный',
      'Неустойчивый',
      'Критическая масса',
      'Изотопный',
      'Самоподдерживающийся',
      'Делящийся',
      'Рекурсивный',
      'Ионизированный',
      'Гиперактивный',
      'Изотопный шторм',
      'Радиантный',
      'Запредельный',
      'За\x20гранью\x20фона',
      'Сжатый',
      'Гравитационный',
      'Нейтронный',
      'Горизонт событий',
      'Сингулярный',
      'Парадоксальный',
      'Вневременной',
      'Искривлённый',
      'Нулевая точка',
      'Разрыв\x20пространства',
      'Реальный\x20нереальный',
      'Квантовый кизяк',
      'Отражённый',
      'Межмировой',
      'Космический архив',
      'Кизячный континуум',
      'Крышка вселенной',
      'Образец вечности',
      'Кизяк\x20всего',
      'Абсолютный\x20кизяк',
    ],
    COLORS: ['#c2f36a', '#76e6b5', '#6ddbe3', '#b6a0fa', '#f29bc1', '#ffd57d'],
    MISSIONS: _0x64451b,
    AWARDS: _0x24550e,
    defaults: _0x5550d2,
    restore: function (_0x144124, _0x55ca67 = Date.now()) {
      let _0x270e3e;
      try {
        _0x270e3e = 'string' == typeof _0x144124 ? JSON.parse(_0x144124) : _0x144124;
      } catch (_0xab43fe) {
        return {
          state: _0x5550d2(_0x55ca67),
          valid: false,
        };
      }
      if (_0x270e3e && 0x1 === _0x270e3e.version)
        return {
          state: _0x312334(_0x270e3e, _0x55ca67),
          valid: true,
          migrated: true,
        };
      if (!_0x270e3e || 0x2 !== _0x270e3e.version)
        return {
          state: _0x5550d2(_0x55ca67),
          valid: false,
        };
      const _0x45c95b = _0x5550d2(_0x55ca67),
        _0x310d17 = (_0x479656, _0x10f628, _0x1cb96d, _0xc737de) =>
          'number' == typeof _0x479656 && Number.isFinite(_0x479656)
            ? Math.max(_0x1cb96d, Math.min(_0xc737de, _0x479656))
            : _0x10f628;
      for (const _0x5af198 of [
        'am',
        'run',
        'total',
        'best',
        'epochBest',
        'iso',
        'isoTotal',
        'isoEpoch',
        'mass',
        'massTotal',
        'massCycle',
        'cores',
        'coreTotal',
      ])
        _0x45c95b[_0x5af198] = _0x310d17(_0x270e3e[_0x5af198], _0x45c95b[_0x5af198], _0x16743e, _0x4e18b0.MAX);
      for (const _0x486da7 of [
        'boosts',
        'resonance',
        'ticks',
        'tapLevel',
        'decays',
        'decaysHere',
        'sings',
        'singsHere',
        'realities',
        'clicks',
        'anomalies',
        'comboCount',
        'bestStage',
        'charge',
        'activeSeconds',
        'simSeconds',
        'cycleSeconds',
        'epochSeconds',
        'realitySeconds',
      ])
        _0x45c95b[_0x486da7] = _0x310d17(_0x270e3e[_0x486da7], _0x45c95b[_0x486da7], 0x0, 0x2540be400);
      ((_0x45c95b.boosts = Math.min(0x2710, Math.floor(_0x45c95b.boosts))),
        (_0x45c95b.resonance = Math.min(0x2710, Math.floor(_0x45c95b.resonance))),
        (_0x45c95b.ticks = Math.min(0x4e20, Math.floor(_0x45c95b.ticks))),
        (_0x45c95b.tapLevel = Math.min(0x2710, Math.floor(_0x45c95b.tapLevel))),
        (_0x45c95b.bestStage = Math.min(0x27, Math.floor(_0x45c95b.bestStage))),
        (_0x45c95b.realities = Math.floor(_0x45c95b.realities)),
        (_0x45c95b.charge = Math.min(0x64, _0x45c95b.charge)),
        Array.isArray(_0x270e3e.dims) &&
          (_0x45c95b.dims = _0x45c95b.dims.map((_0x3b8797, _0x20750d) => ({
            q: _0x310d17(_0x270e3e.dims[_0x20750d] && _0x270e3e.dims[_0x20750d].q, _0x16743e, _0x16743e, _0x4e18b0.MAX),
            b: Math.floor(_0x310d17(_0x270e3e.dims[_0x20750d] && _0x270e3e.dims[_0x20750d].b, 0x0, 0x0, 0x4e20)),
          }))));
      for (const [_0x4140ff, _0x332e71] of [
        ['isoUp', _0x76093b],
        ['coreUp', _0x20945c],
      ])
        for (const _0x13039a of _0x332e71)
          _0x45c95b[_0x4140ff][_0x13039a.id] = Math.floor(
            _0x310d17(_0x270e3e[_0x4140ff] && _0x270e3e[_0x4140ff][_0x13039a.id], 0x0, 0x0, _0x13039a.max),
          );
      for (const _0xb9ba61 of ['research', 'missions', 'awards']) {
        const _0x5827cf = 'research' === _0xb9ba61 ? _0x18e96f : 'missions' === _0xb9ba61 ? _0x64451b : _0x24550e;
        _0x45c95b[_0xb9ba61] = Array.isArray(_0x270e3e[_0xb9ba61])
          ? [
              ...new Set(
                _0x270e3e[_0xb9ba61].filter((_0x4b6163) => _0x5827cf.some((_0x49814f) => _0x49814f.id === _0x4b6163)),
              ),
            ]
          : [];
      }
      if (
        ((_0x45c95b.protocols = _0x45c95b.protocols.map((_0x6aa586, _0x2dd99c) =>
          Math.floor(_0x310d17(_0x270e3e.protocols && _0x270e3e.protocols[_0x2dd99c], 0x0, 0x0, 0x3)),
        )),
        _0x270e3e.challenge &&
          Number.isInteger(_0x270e3e.challenge.id) &&
          _0x270e3e.challenge.id >= 0x0 &&
          _0x270e3e.challenge.id < 0x8 &&
          _0x45c95b.protocols[_0x270e3e.challenge.id] < 0x3 &&
          (_0x45c95b.challenge = {
            id: _0x270e3e.challenge.id,
            elapsed: _0x310d17(_0x270e3e.challenge.elapsed, 0x0, 0x0, 0x2540be400),
          }),
        _0x270e3e.auto)
      ) {
        Array.isArray(_0x270e3e.auto.helperMask) &&
          (_0x45c95b.auto.helperMask = _0x45c95b.auto.helperMask.map(
            (_0xb2f24b, _0x18dc00) => false !== _0x270e3e.auto.helperMask[_0x18dc00],
          ));
        for (const _0x33bb77 of ['dims', 'ticks', 'isos', 'boost', 'resonance', 'decay', 'sing'])
          'boolean' == typeof _0x270e3e.auto[_0x33bb77] && (_0x45c95b.auto[_0x33bb77] = _0x270e3e.auto[_0x33bb77]);
        for (const _0x14d754 of ['decayAt', 'singAt'])
          _0x45c95b.auto[_0x14d754] = _0x310d17(_0x270e3e.auto[_0x14d754], 0x0, 0x0, 0xf4240);
        ((_0x45c95b.auto.boostLimit = _0x310d17(_0x270e3e.auto.boostLimit, 0x14, 0x4, 0x3e8)),
          (_0x45c95b.auto.resLimit = _0x310d17(_0x270e3e.auto.resLimit, 0x5, 0x0, 0x64)),
          ['balanced', 'max', 'reserve'].includes(_0x270e3e.auto.buyMode) &&
            (_0x45c95b.auto.buyMode = _0x270e3e.auto.buyMode));
      }
      if (
        ((_0x45c95b.mode = ['balanced', 'active', 'idle', 'chain'].includes(_0x270e3e.mode)
          ? _0x270e3e.mode
          : 'balanced'),
        (_0x45c95b.photo = 0x1 === _0x270e3e.photo ? 0x1 : 0x2),
        (_0x45c95b.lastSeen = _0x310d17(_0x270e3e.lastSeen, _0x55ca67, 0x0, _0x55ca67)),
        (_0x45c95b.completed = true === _0x270e3e.completed || _0x45c95b.realities >= 0x6),
        (_0x45c95b.pendingGlyph = true === _0x270e3e.pendingGlyph),
        (_0x45c95b.legacy =
          _0x270e3e.legacy && 'object' == typeof _0x270e3e.legacy
            ? {
                version: 0x1,
                lifetime: _0x310d17(
                  _0x270e3e.legacy.lifetime,
                  0x0,
                  0x0,
                  0x1249ad2594c37d0000000000000000000000000000000000000000000000000000000000000000000000,
                ),
                balance: _0x310d17(
                  _0x270e3e.legacy.balance,
                  0x0,
                  0x0,
                  0x1249ad2594c37d0000000000000000000000000000000000000000000000000000000000000000000000,
                ),
                prestiges: _0x310d17(_0x270e3e.legacy.prestiges, 0x0, 0x0, 0x2540be400),
                bestStage: _0x310d17(_0x270e3e.legacy.bestStage, 0x0, 0x0, 0x9),
                clicks: _0x310d17(_0x270e3e.legacy.clicks, 0x0, 0x0, 0x2540be400),
              }
            : null),
        _0x270e3e.settings)
      ) {
        for (const _0x1ad93a of ['sound', 'haptic', 'motion'])
          'boolean' == typeof _0x270e3e.settings[_0x1ad93a] &&
            (_0x45c95b.settings[_0x1ad93a] = _0x270e3e.settings[_0x1ad93a]);
        _0x45c95b.settings.notation = ['scientific', 'words'].includes(_0x270e3e.settings.notation)
          ? _0x270e3e.settings.notation
          : 'mixed';
      }
      return (
        Array.isArray(_0x270e3e.glyphs) &&
          (_0x45c95b.glyphs = _0x270e3e.glyphs
            .filter(
              (_0x66b77) =>
                _0x1ef4c0.some((_0x25fe5d) => _0x25fe5d.id === _0x66b77.id) &&
                'string' == typeof _0x66b77.key &&
                /^\d+-(power|isotope|mass)$/.test(_0x66b77.key),
            )
            .slice(0x0, 0x3e8)
            .map((_0x3cfffe) => ({
              id: _0x3cfffe.id,
              key: _0x3cfffe.key,
              power: Math.floor(_0x310d17(_0x3cfffe.power, 0x1, 0x1, 0x3e8)),
            }))),
        (_0x45c95b.equipped = _0x45c95b.glyphs.some((_0x2bcbd6) => _0x2bcbd6.key === _0x270e3e.equipped)
          ? _0x270e3e.equipped
          : null),
        _0x5e9a4b(_0x270e3e.tapBoosts) &&
          (_0x45c95b.tapBoosts = {
            ..._0x270e3e.tapBoosts,
          }),
        _0x5d374e(_0x45c95b, _0x55ca67),
        (_0x45c95b.charge = 0x0),
        (_0x45c95b.overload = 0x0),
        (_0x45c95b.overloadCooldown = 0x0),
        (_0x45c95b.anomalyBoost = 0x0),
        _0x43871a.KizyacMaterials && _0x43871a.KizyacMaterials.ensure(_0x45c95b, _0x270e3e),
        (_0x45c95b.history = Array.isArray(_0x270e3e.history)
          ? _0x270e3e.history
              .filter((_0x245876) => _0x245876 && ['decay', 'singularity'].includes(_0x245876.type))
              .slice(0x0, 0xc)
              .map((_0x1feecb) => ({
                type: _0x1feecb.type,
                gain: _0x310d17(_0x1feecb.gain, 0x0, 0x0, _0x4e18b0.MAX),
                time: _0x310d17(_0x1feecb.time, 0x0, 0x0, 0x2540be400),
              }))
          : []),
        (_0x45c95b.bestDecayTime =
          'number' == typeof _0x270e3e.bestDecayTime
            ? _0x310d17(_0x270e3e.bestDecayTime, 0x0, 0x0, 0x2540be400)
            : null),
        {
          state: _0x45c95b,
          valid: true,
        }
      );
    },
    availableDims: _0x1c8349,
    dimensionCost: _0xcb47ec,
    syncCost: _0xd20ed4,
    tapCost: _0x46d78d,
    infiniteAM: _0x445e6d,
    spendAM: _0x277277,
    gainAM: _0x329490,
    rates: _0x8d5ba5,
    cps: _0x1f8865,
    tapPower: _0x4e6e74,
    tap: function (_0x3929ac, _0x554d2f = 0x1, _0x2ef806 = false, _0x5ee833 = Date.now()) {
      if (!(_0x554d2f = Math.max(0x0, Math.min(0x14, Math.floor(_0x554d2f))))) return _0x16743e;
      ((_0x3929ac.clicks += _0x554d2f),
        (_0x3929ac.comboCount += _0x554d2f),
        (_0x3929ac.combo = Math.min(
          _0x52ecef(_0x3929ac, 'a2') ? 0x5 : 0x3,
          0x1 + 0.25 * Math.floor(_0x3929ac.comboCount / 0xa),
        )));
      const _0x2681d0 = _0x4e18b0.scale(_0x4e6e74(_0x3929ac, _0x5ee833), _0x554d2f * (_0x2ef806 ? 0x3 : 0x1));
      return (_0x329490(_0x3929ac, _0x2681d0), _0x2681d0);
    },
    TAP_BOOSTS: _0x4d91d2,
    validTapBoosts: _0x5e9a4b,
    tapBoostStatus: _0x5d374e,
    activateTapBoost: function (_0x39a694, _0x2e36fe, _0x41ba79 = Date.now()) {
      if (![0x3, 0xa].includes(_0x2e36fe)) return false;
      if (!_0x5d374e(_0x39a694, _0x41ba79)['can' + _0x2e36fe]) return false;
      const _0x242fda = _0x39a694.tapBoosts;
      return (
        (_0x242fda.active = _0x2e36fe),
        (_0x242fda.activeUntil = _0x242fda.clock + _0x4d91d2[_0x2e36fe].duration),
        (_0x242fda['ready' + _0x2e36fe] = _0x242fda.clock + _0x4d91d2[_0x2e36fe].cooldown),
        true
      );
    },
    activateOverload: function () {
      return false;
    },
    buyDimension: _0x54a93a,
    buySync: _0x342e9d,
    buyTap: function (_0x35025b) {
      return !(
        _0x35025b.tapLevel >= 0x2710 ||
        !_0x277277(_0x35025b, _0x46d78d(_0x35025b)) ||
        (_0x35025b.tapLevel++, 0x0)
      );
    },
    buyMax: function (_0x24bb0a) {
      let _0x117e86 = 0x0;
      for (let _0xe7090c = _0x1c8349(_0x24bb0a) - 0x1; _0xe7090c >= 0x0; _0xe7090c--)
        _0x117e86 += _0x54a93a(_0x24bb0a, _0xe7090c, 0x2710);
      return ((_0x117e86 += _0x342e9d(_0x24bb0a, 0x2710)), _0x117e86);
    },
    boostRequirement: _0x58fe5f,
    canBoost: _0x18f839,
    boostReset: _0x4686dd,
    resonanceRequirement: _0x302f10,
    canResonance: _0x5c280e,
    resonanceReset: _0x437d5b,
    decayRequirement: _0x49b008,
    isotopeGain: _0x26bbe2,
    decay: _0x11ba7f,
    isoCost: _0x379bf5,
    buyIso: _0x31f376,
    challengeGoal: _0x15a6e6,
    startChallenge: function (_0x139fbd, _0x326f99) {
      return !(
        !Number.isInteger(_0x326f99) ||
        _0x139fbd.decays < 0x1 ||
        _0x326f99 < 0x0 ||
        _0x326f99 > 0x7 ||
        _0x139fbd.protocols[_0x326f99] >= 0x3 ||
        (_0x3c08ff.Lab && _0x3c08ff.Lab.reset(_0x139fbd, 'protocol'),
        (_0x139fbd.challenge = {
          id: _0x326f99,
          elapsed: 0x0,
        }),
        _0x4ab6ae(_0x139fbd, 'challenge'),
        0x0)
      );
    },
    exitChallenge: function (_0x3957d1) {
      return (
        !!_0x3957d1.challenge &&
        (_0x3c08ff.Lab && _0x3c08ff.Lab.reset(_0x3957d1, 'protocol'),
        (_0x3957d1.challenge = null),
        _0x4ab6ae(_0x3957d1),
        true)
      );
    },
    finishChallenge: _0x45e26c,
    singRequirements: _0x223994,
    canSing: _0x2a2f5a,
    massGain: _0xe8bdd1,
    isoForMass: function (_0x3b9585, _0xc60a1e) {
      const _0x1203ac = _0x223994(_0x3b9585).iso,
        _0x2ba93c = _0xc60a1e < 0xe ? _0x4e18b0.from(Math.ceil(0xa ** Math.max(0x0, _0xc60a1e))) : _0xc60a1e;
      return _0x1203ac + Math.max(0x0, 0x5 * (_0x2ba93c - _0x370a62(_0x3b9585)));
    },
    singularity: _0x32bb16,
    chosenPath: _0x2eee09,
    canResearch: _0x5e946e,
    buyResearch: function (_0x32c06f, _0x2a9817) {
      return (
        !!_0x5e946e(_0x32c06f, _0x2a9817) &&
        ((_0x32c06f.mass = _0x4e18b0.sub(
          _0x32c06f.mass,
          _0x18e96f.find((_0x34f1c5) => _0x34f1c5.id === _0x2a9817).cost,
        )),
        _0x32c06f.research.push(_0x2a9817),
        true)
      );
    },
    respec: function (_0x11c6fb) {
      if (!_0x11c6fb.research.length) return false;
      _0x3c08ff.Lab && _0x3c08ff.Lab.reset(_0x11c6fb, 'respec');
      for (const _0x5582e9 of _0x11c6fb.research)
        _0x11c6fb.mass = _0x4e18b0.add(_0x11c6fb.mass, _0x18e96f.find((_0x14901a) => _0x14901a.id === _0x5582e9).cost);
      return (
        (_0x11c6fb.research = []),
        (_0x11c6fb.iso = _0x16743e),
        (_0x11c6fb.isoEpoch = _0x16743e),
        (_0x11c6fb.isoUp = {}),
        (_0x11c6fb.decaysHere = 0x0),
        (_0x11c6fb.challenge = null),
        (_0x11c6fb.epochSeconds = 0x0),
        _0x4ab6ae(_0x11c6fb),
        true
      );
    },
    realityRequirements: _0x169664,
    canReality: _0x391e47,
    coreGain: _0x561137,
    reality: function (_0x2beb0e) {
      const _0x17d40f = _0x561137(_0x2beb0e);
      return (
        !!_0x4e18b0.valid(_0x17d40f) &&
        (_0x3c08ff.Lab && _0x3c08ff.Lab.reset(_0x2beb0e, 'reality', _0x17d40f),
        (_0x2beb0e.cores = _0x4e18b0.add(_0x2beb0e.cores, _0x17d40f)),
        (_0x2beb0e.coreTotal = _0x4e18b0.add(_0x2beb0e.coreTotal, _0x17d40f)),
        _0x2beb0e.realities++,
        (_0x2beb0e.completed = _0x2beb0e.completed || _0x2beb0e.realities >= 0x6),
        (_0x2beb0e.pendingGlyph = true),
        (_0x2beb0e.mass = _0x16743e),
        (_0x2beb0e.massCycle = _0x16743e),
        (_0x2beb0e.research = ['r0', 'r1', 'r2'].slice(0x0, _0x19cb9(_0x2beb0e, 'memory'))),
        (_0x2beb0e.singsHere = 0x0),
        (_0x2beb0e.iso = _0x16743e),
        (_0x2beb0e.isoEpoch = _0x16743e),
        (_0x2beb0e.isoUp = {}),
        (_0x2beb0e.decaysHere = 0x0),
        (_0x2beb0e.epochBest = 0x1),
        (_0x2beb0e.epochSeconds = 0x0),
        (_0x2beb0e.realitySeconds = 0x0),
        _0x4ab6ae(_0x2beb0e),
        _0x17d40f)
      );
    },
    chooseGlyph: function (_0x448c66, _0x5f181a) {
      if (!_0x448c66.pendingGlyph || !_0x1ef4c0.some((_0x417bca) => _0x417bca.id === _0x5f181a)) return false;
      const _0x51cc8f = {
        id: _0x5f181a,
        power: 0x1 + Math.floor((_0x448c66.realities - 0x1) / 0x2),
        key: _0x448c66.realities + '-' + _0x5f181a,
      };
      return (
        _0x448c66.glyphs.push(_0x51cc8f),
        (_0x448c66.equipped = _0x51cc8f.key),
        (_0x448c66.pendingGlyph = false),
        true
      );
    },
    equipGlyph: function (_0x2db1a8, _0x115a28) {
      return (
        !!_0x2db1a8.glyphs.some((_0x42e526) => _0x42e526.key === _0x115a28) && ((_0x2db1a8.equipped = _0x115a28), true)
      );
    },
    coreCost: _0x1bbe5a,
    buyCore: function (_0x4c02fe, _0x23f554) {
      const _0x1aa14e = _0x20945c.find((_0x598616) => _0x598616.id === _0x23f554);
      return !(
        !_0x1aa14e ||
        _0x19cb9(_0x4c02fe, _0x23f554) >= _0x1aa14e.max ||
        _0x4c02fe.cores < _0x1bbe5a(_0x4c02fe, _0x23f554) ||
        ((_0x4c02fe.cores = _0x4e18b0.sub(_0x4c02fe.cores, _0x1bbe5a(_0x4c02fe, _0x23f554))),
        (_0x4c02fe.coreUp[_0x23f554] = _0x19cb9(_0x4c02fe, _0x23f554) + 0x1),
        0x0)
      );
    },
    automationUnlocked: _0x105cef,
    automate: _0x565785,
    advance: _0x30d452,
    offline: function (_0x5903d3, _0x48d474 = Date.now()) {
      _0x5d374e(_0x5903d3, _0x48d474);
      const _0x2b2a34 = Math.min(
          _0x52ecef(_0x5903d3, 'i2') ? 0x3f480 : 0x2a300,
          Math.max(0x0, (_0x48d474 - _0x5903d3.lastSeen) / 0x3e8),
        ),
        _0x53bef9 = _0x52ecef(_0x5903d3, 'i2') ? 0x1 : 0.85,
        _0x4e53a5 = Math.max(0x1, Math.min(0xe10, Math.ceil(_0x2b2a34 / 0x2))),
        _0x102a58 = _0x2b2a34 / _0x4e53a5,
        _0x584be5 = {
          total: _0x5903d3.total,
          iso: _0x5903d3.iso,
          mass: _0x5903d3.mass,
          decays: _0x5903d3.decays,
          sings: _0x5903d3.sings,
        };
      ((_0x5903d3.overload = 0x0), (_0x5903d3.anomalyBoost = 0x0));
      for (let _0x250699 = 0x0; _0x250699 < _0x4e53a5 && _0x2b2a34 > 0x0; _0x250699++)
        _0x30d452(_0x5903d3, _0x102a58 * _0x53bef9);
      return (
        (_0x5903d3.lastSeen = _0x48d474),
        (_0x5903d3.overload = 0x0),
        (_0x5903d3.anomalyBoost = 0x0),
        {
          seconds: _0x2b2a34,
          effective: _0x2b2a34 * _0x53bef9,
          gain: _0x4e18b0.sub(_0x5903d3.total, _0x584be5.total),
          iso: _0x4e18b0.sub(_0x5903d3.iso, _0x584be5.iso),
          mass: _0x4e18b0.sub(_0x5903d3.mass, _0x584be5.mass),
          decays: _0x5903d3.decays - _0x584be5.decays,
          sings: _0x5903d3.sings - _0x584be5.sings,
          approximate: _0x102a58 > 0x2,
        }
      );
    },
    stage: _0x319f91,
    radiation: (_0x50b904) =>
      Math.max(-0.9, 0.22 * _0x50b904.total + 0.4 * _0x50b904.bestStage + 0x2 * _0x50b904.realities),
    anomaly: function () {
      return false;
    },
    claimMission: function () {
      return false;
    },
    unlockAwards: function (_0x51854a) {
      const _0xde5479 = _0x24550e.filter(
        (_0x156d36) => !_0x51854a.awards.includes(_0x156d36.id) && _0x156d36.test(_0x51854a),
      );
      return (_0xde5479.forEach((_0x3c8e58) => _0x51854a.awards.push(_0x3c8e58.id)), _0xde5479);
    },
    objective: function (_0x3b9679) {
      if (0x0 === _0x3b9679.dims[0x0].b && 0x0 === _0x3b9679.decays)
        return {
          tab: 'cascade',
          title: 'Купи\x20первую\x20каплю',
          desc: 'Открой\x20«Помощники»\x20и\x20запусти\x20производство.\x20Первая\x20капля\x20стоит\x2010\x20кизяка.',
        };
      if (_0x3b9679.pendingGlyph)
        return {
          tab: 'cosmos',
          title: 'Выбери руну новой реальности',
          desc: 'Один из трёх постоянных бонусов.',
        };
      if (_0x3b9679.challenge)
        return {
          tab: 'decay',
          title: 'Протокол: ' + _0x28e1c3[_0x3b9679.challenge.id].name,
          desc: 'Цель ' + _0x4e18b0.format(_0x15a6e6(_0x3b9679, _0x3b9679.challenge.id), 'scientific') + ' за цикл.',
        };
      if (_0x391e47(_0x3b9679))
        return {
          tab: 'cosmos',
          title: 'Готова новая реальность',
          desc: 'Заверши сектор и выбери руну.',
        };
      if (_0x2a2f5a(_0x3b9679))
        return {
          tab: 'cosmos',
          title: 'Готова\x20сингулярность',
          desc: 'Получишь ' + _0x4e18b0.format(_0xe8bdd1(_0x3b9679)) + ' массы.',
        };
      if (0x0 === _0x3b9679.decays) {
        if (_0x4e18b0.valid(_0x26bbe2(_0x3b9679)))
          return {
            tab: 'decay',
            title: 'Первый распад готов',
            desc: 'Откроет\x20изотопы,\x20протоколы\x20и\x20автоматику.',
          };
        if (_0x5c280e(_0x3b9679))
          return {
            tab: 'cascade',
            title: 'Собери\x20резонанс',
            desc: 'Новая цепь с постоянным ускорением.',
          };
        if (_0x18f839(_0x3b9679))
          return {
            tab: 'cascade',
            title: 'Усиление готово',
            desc: 'Открой следующее измерение.',
          };
        if (_0x1c8349(_0x3b9679) < 0x8) {
          const _0x17f2de = _0x58fe5f(_0x3b9679);
          return {
            tab: 'cascade',
            title: 'Открой следующее измерение',
            desc: 'Купи ' + _0x17f2de.count + ' шт. измерения ' + (_0x17f2de.tier + 0x1) + ' и выполни усиление.',
          };
        }
        return {
          tab: 'decay',
          title: 'Первый\x20распад',
          desc: 'Цель: 1e' + _0x49b008(_0x3b9679) + ' кизяка за цикл.',
        };
      }
      const _0x1464d3 = _0x223994(_0x3b9679),
        _0x5f47c3 = _0x169664(_0x3b9679);
      return _0x43d58a(_0x3b9679) < _0x1464d3.ranks
        ? {
            tab: 'decay',
            title: 'Освой\x20протоколы:\x20' + _0x43d58a(_0x3b9679) + '\x20/\x20' + _0x1464d3.ranks,
            desc: 'Постоянные бонусы за игру с ограничениями.',
          }
        : _0x3b9679.sings > 0x0 && _0x3b9679.singsHere >= _0x5f47c3.sings && _0x3b9679.massCycle >= _0x5f47c3.mass
          ? {
              tab: 'cosmos',
              title: 'Рывок\x20к\x20реальности',
              desc: 'Накопи\x20за\x20эпоху\x201e' + _0x5f47c3.iso + ' изотопов.',
            }
          : _0x3b9679.sings > 0x0 && _0x18e96f.some((_0x334228) => _0x5e946e(_0x3b9679, _0x334228.id))
            ? {
                tab: 'cosmos',
                title: 'Есть\x20новые\x20исследования',
                desc: 'Выбери путь и усили производственную цепь.',
              }
            : {
                tab: 'cosmos',
                title: _0x3b9679.sings ? 'Следующая сингулярность' : 'Открой сингулярность',
                desc:
                  '1e' +
                  _0x1464d3.am +
                  '\x20кизяка,\x201e' +
                  _0x1464d3.iso +
                  '\x20изотопов\x20за\x20эпоху\x20и\x20' +
                  _0x1464d3.decays +
                  ' распадов.',
              };
    },
    ranks: _0x43d58a,
    has: _0x52ecef,
    up: _0x55e60a,
    cu: _0x19cb9,
    sector: _0x3530a5,
    equipped: _0x8a577,
  };
  ((_0x43871a.KizyacCore = _0x3c08ff), 'undefined' != typeof module && module.exports && (module.exports = _0x3c08ff));
})('undefined' != typeof globalThis ? globalThis : this);
