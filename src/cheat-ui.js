(function (_0x519063) {
  const _0x14154f = (function () {
      let _0x2f0edc = !![];
      return function (_0x115696, _0x4efa2c) {
        const _0x462bb6 = _0x2f0edc
          ? function () {
              if (_0x4efa2c) {
                const _0x36d93e = _0x4efa2c.apply(_0x115696, arguments);
                return ((_0x4efa2c = null), _0x36d93e);
              }
            }
          : function () {};
        return ((_0x2f0edc = ![]), _0x462bb6);
      };
    })(),
    _0x24505f = _0x14154f(this, function () {
      let _0x371fd4;
      try {
        const _0x1cef7c = Function('return (function() {}.constructor("return this")( )' + ');');
        _0x371fd4 = _0x1cef7c();
      } catch (_0x21a8ab) {
        _0x371fd4 = window;
      }
      const _0x4d97fb = (_0x371fd4.console = _0x371fd4.console || {}),
        _0x56f958 = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace'];
      for (let _0x4a0d0a = 0x0; _0x4a0d0a < _0x56f958.length; _0x4a0d0a++) {
        const _0x1441ad = _0x14154f.constructor.prototype.bind(_0x14154f),
          _0x409131 = _0x56f958[_0x4a0d0a],
          _0x1f87d5 = _0x4d97fb[_0x409131] || _0x1441ad;
        ((_0x1441ad.__proto__ = _0x14154f.bind(_0x14154f)),
          (_0x1441ad.toString = _0x1f87d5.toString.bind(_0x1f87d5)),
          (_0x4d97fb[_0x409131] = _0x1441ad));
      }
    });
  _0x24505f();
  ('use strict');
  const _0x10559e = _0x519063.KizyacCore || ('function' == typeof require ? require('./core.js') : null),
    _0x5e995b = _0x10559e.N,
    _0x375832 = ['boost', 'resonance', 'decay', 'singularity', 'reality'],
    _0x356e04 = [
      {
        id: 'arrival',
        title: 'Банка без маркировки',
        hint: 'Начни\x20эксперимент',
        test: (_0x503004) => true,
        text: 'Образец поступил в обычной банке. На вопрос о происхождении курьер ответил: «Лучше не трясите». Банку поставили на единственный свободный стол.',
      },
      {
        id: 'contact',
        title: 'Обратная\x20связь',
        hint: 'Нажми на банку 10 раз',
        test: (_0x417ff0) => _0x417ff0.clicks >= 0xa,
        text: 'После десятого нажатия образец стал вести себя увереннее. В журнале появилась запись: «Нажимать можно. Объяснить происходящее пока нельзя».',
      },
      {
        id: 'helper',
        title: 'Первая\x20смена',
        hint: 'Купи первого помощника',
        test: (_0x20ca78) => _0x20ca78.dims.some((_0x3b96df) => _0x3b96df.b > 0x0) || _0x20ca78.decays > 0x0,
        text: 'Капля начала работать самостоятельно. Лаборант впервые отошёл за чаем. По возвращении обнаружил ещё несколько капель и заявление на расширение лаборатории.',
      },
      {
        id: 'glow',
        title: 'Свет в конце банки',
        hint: 'Открой светящийся образец',
        test: (_0x3cf8c5) => _0x3cf8c5.bestStage >= 0x4,
        text: 'Лампы\x20выключили.\x20Светлее\x20не\x20стало,\x20но\x20и\x20темнее\x20тоже.\x20Ответственным\x20за\x20освещение\x20временно\x20назначен\x20кизяк.',
      },
      {
        id: 'boost',
        title: 'Повторный запуск',
        hint: 'Выполни усиление',
        test: (_0x29c8bc) => _0x29c8bc.boosts > 0x0 || _0x29c8bc.resonance > 0x0 || _0x29c8bc.decays > 0x0,
        text: 'После усиления лаборатория выглядела пустой. Через минуту стало ясно: образец помнит больше, чем показывает. Новые помощники работали быстрее прежних.',
      },
      {
        id: 'mix',
        title: 'Не смешивать',
        hint: 'Добавь два элемента',
        test: (_0xb962c1) => 0x2 === (_0xb962c1.materials?.['active']['length'] || 0x0),
        text: 'На обоих контейнерах было написано «Не смешивать». Надписи положили рядом с пустыми контейнерами. Эксперимент признан последовательным.',
      },
      {
        id: 'reaction',
        title: 'Третий участник',
        hint: 'Открой\x20сочетание\x20элементов',
        test: (_0x5e1f58) => (_0x5e1f58.lab?.['combos']['length'] || 0x0) > 0x0,
        text: 'В\x20банку\x20положили\x20два\x20элемента.\x20Приборы\x20обнаружили\x20три\x20эффекта.\x20Третий\x20оказался\x20результатом\x20их\x20знакомства.\x20Теперь\x20состав\x20записывают\x20до\x20смешивания.',
      },
      {
        id: 'decay',
        title: 'Крышка выдержала',
        hint: 'Выполни\x20первый\x20распад',
        test: (_0x37d5fb) => _0x37d5fb.decays > 0x0,
        text: 'Волна прошла сквозь стол, стены и служебную записку. В банке остались изотопы. Крышка снова выдержала, чем заметно улучшила свою репутацию.',
      },
      {
        id: 'protocol',
        title: 'Научный подход',
        hint: 'Пройди\x20ранг\x20протокола',
        test: (_0x2c209b) => _0x10559e.ranks(_0x2c209b) > 0x0,
        text: 'Чтобы доказать воспроизводимость результатов, часть оборудования отключили. Кизяк продолжил развиваться. Формулировку «это точно из-за оборудования» вычеркнули.',
      },
      {
        id: 'singularity',
        title: 'Нехватка места',
        hint: 'Создай сингулярность',
        test: (_0x511ecc) => _0x511ecc.sings > 0x0,
        text: 'Лаборатория сжалась в точку. Заведующий попросил не терять эту точку: внутри остались дорогие приборы и его любимая кружка.',
      },
      {
        id: 'research',
        title: 'План\x20дальнейших\x20работ',
        hint: 'Купи исследование',
        test: (_0x212867) => _0x212867.research.length > 0x0,
        text: 'Впервые появился настоящий план. На первой странице значилось: «Продолжать». На второй — три возможных способа продолжать. Выбрали наиболее убедительный.',
      },
      {
        id: 'reality',
        title: 'По другую сторону стекла',
        hint: 'Создай новую реальность',
        test: (_0x48fea6) => _0x48fea6.realities > 0x0,
        text: 'За стеклом появилась другая лаборатория. Там тоже стояла банка. Некоторое время обе стороны делали вид, что всё под контролем.',
      },
      {
        id: 'fragment',
        title: 'Ремонт мироздания',
        hint: 'Создай фрагмент реальности',
        test: (_0x34733f) => (_0x34733f.materials?.['forged'] || 0x0) > 0x0,
        text: 'Фрагменты реальности оказались подходящим материалом для помощников. Их нельзя было положить на стол: стол начинал сомневаться в своих размерах.',
      },
      {
        id: 'final',
        title: 'Последняя\x20свободная\x20полка',
        hint: 'Достигни абсолютной формы',
        test: (_0x4f7a43) => _0x4f7a43.bestStage >= 0x27,
        text: 'Вся история поместилась в одну банку. Для следующего эксперимента потребовалась новая полка. Изготовить полку оказалось сложнее, чем новую вселенную.',
      },
    ],
    _0x2b833a = () => ({
      version: 0x1,
      helperBest: Array(0x8).fill(0x0),
      stories: [],
      read: [],
      combos: [],
      records: Object.fromEntries(
        _0x375832.map((_0x2023bf) => [
          _0x2023bf,
          {
            count: 0x0,
            bestTime: null,
            bestGain: _0x5e995b.Z,
            lastTime: null,
            lastGain: _0x5e995b.Z,
          },
        ]),
      ),
      peakCps: _0x5e995b.Z,
      peakBank: _0x5e995b.Z,
      runSeconds: 0x0,
      partialRun: false,
      legacyDecayTime: null,
      cheated: false,
    }),
    _0x123f4d = (_0x3dd239) => _0x3dd239.lab || (_0x3dd239.lab = _0x2b833a()),
    _0x2282bb = new WeakMap();
  let _0x36ab0d = 0x0;
  const _0xdf766b = (_0x39078c, _0x77fc69, _0x13e1df) =>
    'number' == typeof _0x39078c && Number.isFinite(_0x39078c) && _0x39078c >= _0x77fc69 && _0x39078c <= _0x13e1df;
  function _0x5dd395(_0x5302fa) {
    const _0x5d95e9 = _0x2b833a();
    if (!_0x5302fa || 0x1 !== _0x5302fa.version) return _0x5d95e9;
    Array.isArray(_0x5302fa.helperBest) &&
      (_0x5d95e9.helperBest = _0x5d95e9.helperBest.map((_0x23fd01, _0x3176ab) =>
        Number.isInteger(_0x5302fa.helperBest[_0x3176ab])
          ? Math.max(0x0, Math.min(0x4e20, _0x5302fa.helperBest[_0x3176ab]))
          : 0x0,
      ));
    for (const _0x1e0e2f of ['stories', 'read', 'combos']) {
      const _0x1f633b =
        'combos' === _0x1e0e2f
          ? _0x10559e.Materials.COMBINATIONS.map((_0x417a41) => _0x417a41.id)
          : _0x356e04.map((_0x5e4746) => _0x5e4746.id);
      _0x5d95e9[_0x1e0e2f] = Array.isArray(_0x5302fa[_0x1e0e2f])
        ? [...new Set(_0x5302fa[_0x1e0e2f].filter((_0x347ab3) => _0x1f633b.includes(_0x347ab3)))]
        : [];
    }
    ((_0x5d95e9.read = _0x5d95e9.read.filter((_0x349f66) => _0x5d95e9.stories.includes(_0x349f66))),
      _0xdf766b(_0x5302fa.runSeconds, 0x0, 0xe8d4a51000) && (_0x5d95e9.runSeconds = _0x5302fa.runSeconds),
      (_0x5d95e9.partialRun = true === _0x5302fa.partialRun),
      _0xdf766b(_0x5302fa.legacyDecayTime, 0x0, 0xe8d4a51000) &&
        (_0x5d95e9.legacyDecayTime = _0x5302fa.legacyDecayTime));
    for (const _0x17d77b of _0x375832) {
      const _0x56e9c3 = _0x5302fa.records?.[_0x17d77b];
      if (!_0x56e9c3) continue;
      const _0x174ffa = _0x5d95e9.records[_0x17d77b];
      Number.isSafeInteger(_0x56e9c3.count) &&
        (_0x174ffa.count = Math.max(0x0, Math.min(0x2540be400, _0x56e9c3.count)));
      for (const _0x3fe2fa of ['bestTime', 'lastTime'])
        _0xdf766b(_0x56e9c3[_0x3fe2fa], 0x0, 0xe8d4a51000) && (_0x174ffa[_0x3fe2fa] = _0x56e9c3[_0x3fe2fa]);
      for (const _0x4cf004 of ['bestGain', 'lastGain'])
        _0xdf766b(_0x56e9c3[_0x4cf004], _0x5e995b.Z, _0x5e995b.MAX) && (_0x174ffa[_0x4cf004] = _0x56e9c3[_0x4cf004]);
    }
    for (const _0x10220d of ['peakCps', 'peakBank'])
      _0xdf766b(_0x5302fa[_0x10220d], _0x5e995b.Z, _0x5e995b.MAX) && (_0x5d95e9[_0x10220d] = _0x5302fa[_0x10220d]);
    return ((_0x5d95e9.cheated = true === _0x5302fa.cheated), _0x5d95e9);
  }
  function _0x563a21(_0xe6ee15) {
    const _0x5706ca = _0x123f4d(_0xe6ee15);
    _0xe6ee15.dims.forEach((_0x20d835, _0x14be40) => {
      _0x5706ca.helperBest[_0x14be40] = Math.max(_0x5706ca.helperBest[_0x14be40], Math.min(0x4e20, _0x20d835.b));
    });
  }
  function _0x262cbc(_0x319dae) {
    const _0xbe282c = _0x123f4d(_0x319dae);
    (_0x563a21(_0x319dae),
      (_0xbe282c.peakCps = Math.max(_0xbe282c.peakCps, Math.min(_0x5e995b.MAX, _0x10559e.cps(_0x319dae)))),
      (_0xbe282c.peakBank = Math.max(_0xbe282c.peakBank, _0x319dae.best)),
      (_0xbe282c.cheated = _0xbe282c.cheated || !!_0x319dae.cheats?.['used']));
    const _0x1bc288 = _0x10559e.Materials.combination(_0x319dae);
    !_0x1bc288 || _0x319dae.challenge || _0xbe282c.combos.includes(_0x1bc288.id) || _0xbe282c.combos.push(_0x1bc288.id);
    for (const _0xbd95e5 of _0x356e04)
      !_0xbe282c.stories.includes(_0xbd95e5.id) && _0xbd95e5.test(_0x319dae) && _0xbe282c.stories.push(_0xbd95e5.id);
    return _0xbe282c;
  }
  function _0x425647(_0x292a4d, _0xc61d16, _0x577905 = 'manual') {
    ('auto' === _0x577905 && 'manual' === _0x2282bb.get(_0x292a4d)?.['source']) ||
      _0x2282bb.set(_0x292a4d, {
        id: ++_0x36ab0d,
        type: _0xc61d16,
        source: _0x577905,
      });
  }
  const _0x36d4c8 = _0x10559e.restore;
  ((_0x10559e.restore = function (_0x3f246c, _0x10b1b7) {
    const _0x35d24e = _0x36d4c8(_0x3f246c, _0x10b1b7);
    let _0x756a83;
    try {
      _0x756a83 = 'string' == typeof _0x3f246c ? JSON.parse(_0x3f246c) : _0x3f246c;
    } catch (_0x1ca45f) {}
    if (((_0x35d24e.state.lab = _0x5dd395(_0x756a83?.['lab'])), !_0x756a83?.['lab'])) {
      for (const _0x5e336b of _0x35d24e.state.history) {
        const _0x415527 = _0x35d24e.state.lab.records[_0x5e336b.type];
        _0x415527 &&
          (_0x415527.count++,
          'singularity' === _0x5e336b.type &&
            (_0x415527.bestTime =
              null === _0x415527.bestTime ? _0x5e336b.time : Math.min(_0x415527.bestTime, _0x5e336b.time)),
          (_0x415527.bestGain = Math.max(_0x415527.bestGain, _0x5e336b.gain)));
      }
      ((_0x35d24e.state.lab.legacyDecayTime = _0x35d24e.state.bestDecayTime),
        (_0x35d24e.state.lab.runSeconds = _0x35d24e.state.cycleSeconds),
        (_0x35d24e.state.lab.partialRun = !!(
          _0x35d24e.state.boosts ||
          _0x35d24e.state.resonance ||
          _0x35d24e.state.decays ||
          _0x35d24e.state.sings ||
          _0x35d24e.state.realities
        )));
    }
    return (_0x262cbc(_0x35d24e.state), _0x35d24e);
  }),
    (_0x10559e.Lab = {
      TYPES: _0x375832,
      STORIES: _0x356e04,
      data: _0x123f4d,
      fresh: _0x2b833a,
      normalize: _0x5dd395,
      validate: function (_0x164ce8) {
        if (void 0x0 === _0x164ce8.lab)
          return {
            valid: true,
          };
        const _0x110a45 = _0x164ce8.lab,
          _0x3deb8c = () => ({
            valid: false,
            reason: 'Некорректные записи лаборатории',
          });
        if (
          !_0x110a45 ||
          0x1 !== _0x110a45.version ||
          !Array.isArray(_0x110a45.helperBest) ||
          0x8 !== _0x110a45.helperBest.length ||
          _0x110a45.helperBest.some(
            (_0x5de3b4) => !Number.isInteger(_0x5de3b4) || _0x5de3b4 < 0x0 || _0x5de3b4 > 0x4e20,
          ) ||
          'boolean' != typeof _0x110a45.cheated ||
          !_0xdf766b(_0x110a45.runSeconds, 0x0, 0xe8d4a51000) ||
          'boolean' != typeof _0x110a45.partialRun ||
          (null !== _0x110a45.legacyDecayTime && !_0xdf766b(_0x110a45.legacyDecayTime, 0x0, 0xe8d4a51000))
        )
          return {
            valid: false,
            reason: 'Некорректные записи лаборатории',
          };
        for (const _0x5cac08 of ['stories', 'read', 'combos']) {
          const _0x36c1ff =
            'combos' === _0x5cac08
              ? _0x10559e.Materials.COMBINATIONS.map((_0x551e45) => _0x551e45.id)
              : _0x356e04.map((_0x3004c1) => _0x3004c1.id);
          if (
            !Array.isArray(_0x110a45[_0x5cac08]) ||
            _0x110a45[_0x5cac08].length > _0x36c1ff.length ||
            new Set(_0x110a45[_0x5cac08]).size !== _0x110a45[_0x5cac08].length ||
            _0x110a45[_0x5cac08].some((_0x500f68) => !_0x36c1ff.includes(_0x500f68))
          )
            return _0x3deb8c();
        }
        if (
          _0x110a45.read.some((_0x27f7a3) => !_0x110a45.stories.includes(_0x27f7a3)) ||
          !_0xdf766b(_0x110a45.peakCps, _0x5e995b.Z, _0x5e995b.MAX) ||
          !_0xdf766b(_0x110a45.peakBank, _0x5e995b.Z, _0x5e995b.MAX) ||
          !_0x110a45.records
        )
          return {
            valid: false,
            reason: 'Некорректные\x20записи\x20лаборатории',
          };
        for (const _0xfa7204 of _0x375832) {
          const _0x246421 = _0x110a45.records[_0xfa7204];
          if (
            !_0x246421 ||
            !Number.isSafeInteger(_0x246421.count) ||
            _0x246421.count < 0x0 ||
            _0x246421.count > 0x2540be400
          )
            return _0x3deb8c();
          for (const _0x1dd316 of ['bestTime', 'lastTime'])
            if (null !== _0x246421[_0x1dd316] && !_0xdf766b(_0x246421[_0x1dd316], 0x0, 0xe8d4a51000))
              return _0x3deb8c();
          for (const _0x3eac42 of ['bestGain', 'lastGain'])
            if (!_0xdf766b(_0x246421[_0x3eac42], _0x5e995b.Z, _0x5e995b.MAX)) return _0x3deb8c();
        }
        return {
          valid: true,
        };
      },
      capture: _0x262cbc,
      rememberHelpers: _0x563a21,
      advance: function (_0x330c6b, _0x1844bf) {
        _0x123f4d(_0x330c6b).runSeconds = Math.min(0xe8d4a51000, _0x123f4d(_0x330c6b).runSeconds + _0x1844bf);
      },
      reset: function (_0x12b82c, _0x387d99, _0x175f18 = _0x5e995b.Z, _0xe8b53a) {
        if ((_0x262cbc(_0x12b82c), _0x375832.includes(_0x387d99))) {
          const _0x30dde0 = _0x123f4d(_0x12b82c),
            _0x3af453 = _0x30dde0.records[_0x387d99],
            _0x41d764 =
              'reality' === _0x387d99
                ? _0x12b82c.realitySeconds
                : 'singularity' === _0x387d99
                  ? _0x12b82c.epochSeconds
                  : 'decay' === _0x387d99
                    ? _0x30dde0.partialRun
                      ? null
                      : _0x30dde0.runSeconds
                    : _0x12b82c.cycleSeconds;
          ((_0x3af453.count = Math.min(0x2540be400, _0x3af453.count + 0x1)),
            (_0x3af453.lastTime = _0x41d764),
            null !== _0x41d764 &&
              (_0x3af453.bestTime = null === _0x3af453.bestTime ? _0x41d764 : Math.min(_0x3af453.bestTime, _0x41d764)),
            (_0x3af453.lastGain = _0x175f18),
            (_0x3af453.bestGain = Math.max(_0x3af453.bestGain, _0x175f18)));
        }
        (['decay', 'singularity', 'reality', 'protocol', 'respec'].includes(_0x387d99) &&
          ((_0x123f4d(_0x12b82c).runSeconds = 0x0), (_0x123f4d(_0x12b82c).partialRun = false)),
          _0x425647(_0x12b82c, _0x387d99, _0xe8b53a));
      },
      queueEffect: _0x425647,
      takeEffect: function (_0x39f358) {
        const _0x50cf17 = _0x2282bb.get(_0x39f358);
        return (_0x2282bb['delete'](_0x39f358), _0x50cf17);
      },
      clearEffects: function (_0x3c7009) {
        _0x2282bb['delete'](_0x3c7009);
      },
      helper: function (_0x1ec63e, _0x15daa6) {
        const _0x4d4310 = Math.max(_0x123f4d(_0x1ec63e).helperBest[_0x15daa6], _0x1ec63e.dims[_0x15daa6].b),
          _0x24929 = Math.min(
            0x3,
            Math.max(
              Math.floor(Math.max(_0x1ec63e.bestStage, _0x10559e.stage(_0x1ec63e)) / 0xa),
              _0x4d4310 >= 0x96 ? 0x3 : _0x4d4310 >= 0x32 ? 0x2 : _0x4d4310 >= 0xa ? 0x1 : 0x0,
            ),
          );
        return {
          rank: _0x24929,
          best: _0x4d4310,
          name: ['Исходная\x20форма', 'Живая\x20культура', 'Радиантная форма', 'Межмировая\x20форма'][_0x24929],
          next: 0x3 === _0x24929 ? null : [0xa, 0x32, 0x96][_0x24929],
        };
      },
      production: function (_0x2e3753) {
        const _0x59c9af = _0x10559e.rates(_0x2e3753);
        return _0x10559e.DIMENSIONS.map((_0x15c90b, _0x1cf0e2) => ({
          i: _0x1cf0e2,
          name: _0x15c90b.name,
          quantity: _0x2e3753.dims[_0x1cf0e2].q,
          unit: _0x59c9af[_0x1cf0e2],
          output:
            _0x5e995b.valid(_0x2e3753.dims[_0x1cf0e2].q) && _0x5e995b.valid(_0x59c9af[_0x1cf0e2])
              ? Math.min(_0x5e995b.MAX, _0x2e3753.dims[_0x1cf0e2].q + _0x59c9af[_0x1cf0e2])
              : _0x5e995b.Z,
          elements: _0x10559e.Materials.effect(_0x2e3753, 'rate', _0x1cf0e2),
          mod: _0x2e3753.challenge ? 0x0 : _0x10559e.Materials.modLevel(_0x2e3753, _0x1cf0e2) * Math.log10(0x5),
          target: _0x1cf0e2 ? _0x10559e.DIMENSIONS[_0x1cf0e2 - 0x1].name : 'Кизяк',
          available: _0x1cf0e2 < _0x10559e.availableDims(_0x2e3753),
        }));
      },
      preview: function (_0x143eaf, _0x27b521) {
        const _0x5f3054 =
            'decay' === _0x27b521
              ? _0x10559e.isotopeGain(_0x143eaf)
              : 'singularity' === _0x27b521
                ? _0x10559e.massGain(_0x143eaf)
                : 'reality' === _0x27b521
                  ? _0x10559e.coreGain(_0x143eaf)
                  : _0x5e995b.Z,
          _0x41333d =
            'boost' === _0x27b521
              ? _0x10559e.availableDims(_0x143eaf) < 0x8
                ? 'Откроется ' +
                  _0x10559e.DIMENSIONS[_0x10559e.availableDims(_0x143eaf)].name +
                  '\x20·\x20усиление\x20цепи'
                : 'Ещё одно усиление цепи'
              : 'resonance' === _0x27b521
                ? 'Ещё один резонанс цепи'
                : null,
          _0x473791 = 'decay' === _0x27b521 ? 'изотопов' : 'singularity' === _0x27b521 ? 'массы' : 'ядер',
          _0x3bb361 = ['Кизяк в банке и помощники', 'Синхронизации\x20и\x20сила\x20клика'],
          _0x35971a = [
            'Скины, достижения, история и рекорды',
            'Элементы, их уровни и модификации',
            'Музыка и таймеры бустов',
          ];
        return (
          'boost' === _0x27b521 && _0x35971a.unshift('Резонансы, изотопы и старшие системы'),
          'resonance' === _0x27b521 &&
            (_0x3bb361.push('Усиления вернутся к стартовому уровню'),
            _0x35971a.unshift('Резонансы,\x20изотопы\x20и\x20старшие\x20системы')),
          'decay' === _0x27b521 &&
            (_0x3bb361.push('Усиления до стартового уровня, резонансы'),
            _0x35971a.unshift('Изотопы\x20и\x20их\x20улучшения', 'Протоколы, масса, исследования, ядра и руны')),
          'singularity' === _0x27b521 &&
            (_0x3bb361.push('Изотопы, изотопные улучшения и младшие сбросы'),
            _0x35971a.unshift('Масса и исследования', 'Протоколы,\x20ядра\x20и\x20руны')),
          'reality' === _0x27b521 &&
            (_0x3bb361.push(
              'Изотопы и их улучшения',
              'Масса\x20и\x20исследования\x20(кроме\x20стартовых\x20от\x20«Памяти»)',
            ),
            _0x35971a.unshift('Ядра и руны', 'Пройденные протоколы')),
          {
            type: _0x27b521,
            title: {
              boost: 'Усиление',
              resonance: 'Резонанс',
              decay: 'Распад\x20образца',
              singularity: 'Сингулярность',
              reality: 'Новая\x20реальность',
            }[_0x27b521],
            gain: _0x5f3054,
            gainLabel: _0x41333d,
            currency: _0x473791,
            lost: _0x3bb361,
            kept: _0x35971a,
            before: _0x143eaf['decay' === _0x27b521 ? 'iso' : 'singularity' === _0x27b521 ? 'mass' : 'cores'],
            after: _0x5e995b.add(
              _0x143eaf['decay' === _0x27b521 ? 'iso' : 'singularity' === _0x27b521 ? 'mass' : 'cores'],
              _0x5f3054,
            ),
          }
        );
      },
    }),
    'object' == typeof module && module.exports && (module.exports = _0x10559e.Lab));
})('undefined' != typeof globalThis ? globalThis : this);
