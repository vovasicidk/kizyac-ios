(function (_0xecd2f1) {
  'use strict';

  const _0x5b4eaf = _0xecd2f1.KizyacCore || ('function' == typeof require ? require('./core.js') : null),
    _0x5f244f = _0x5b4eaf.N,
    _0x46a959 = 0.000001;
  function _0x5e9d83(_0x27b547) {
    const _0x253d72 = (_0x5b7766) => ({
      valid: false,
      reason: _0x5b7766,
    });
    try {
      if (!(
        _0x27b547 &&
        0x2 === _0x27b547.version &&
        _0x27b547.settings &&
        _0x27b547.auto &&
        Array.isArray(_0x27b547.dims) &&
        0x8 === _0x27b547.dims.length &&
        Array.isArray(_0x27b547.protocols) &&
        0x8 === _0x27b547.protocols.length
      ))
        return _0x253d72('Неполная структура сохранения');
      if (
        void 0x0 !== _0x27b547.auto.helperMask &&
        (!Array.isArray(_0x27b547.auto.helperMask) ||
          0x8 !== _0x27b547.auto.helperMask.length ||
          _0x27b547.auto.helperMask.some((_0x2e41ed) => 'boolean' != typeof _0x2e41ed))
      )
        return _0x253d72('Некорректный\x20выбор\x20автопомощников');
      if (void 0x0 !== _0x27b547.tapBoosts && !_0x5b4eaf.validTapBoosts(_0x27b547.tapBoosts))
        return _0x253d72('Некорректные\x20таймеры\x20бустов');
      const _0x98ad39 = [
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
      ];
      for (const _0x3fb6ec of _0x98ad39)
        if (
          'number' != typeof _0x27b547[_0x3fb6ec] ||
          !Number.isFinite(_0x27b547[_0x3fb6ec]) ||
          _0x27b547[_0x3fb6ec] < _0x5f244f.Z ||
          _0x27b547[_0x3fb6ec] > _0x5f244f.MAX
        )
          return _0x253d72('Некорректная валюта: ' + _0x3fb6ec);
      for (const _0x5afc31 of [
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
        'bestStage',
      ])
        if (
          !Number.isSafeInteger(_0x27b547[_0x5afc31]) ||
          _0x27b547[_0x5afc31] < 0x0 ||
          _0x27b547[_0x5afc31] > 0x2540be400
        )
          return _0x253d72('Некорректный счётчик: ' + _0x5afc31);
      if (_0x27b547.bestStage > 0x27) return _0x253d72('Некорректная\x20мутация');
      for (const _0x122868 of ['activeSeconds', 'simSeconds', 'cycleSeconds', 'epochSeconds', 'realitySeconds'])
        if (
          'number' != typeof _0x27b547[_0x122868] ||
          !Number.isFinite(_0x27b547[_0x122868]) ||
          _0x27b547[_0x122868] < 0x0 ||
          _0x27b547[_0x122868] > 0xe8d4a51000
        )
          return _0x253d72('Некорректное время');
      if (_0xecd2f1.KizyacMaterials) {
        const _0x29d2bc = _0xecd2f1.KizyacMaterials.validate(_0x27b547);
        if (!_0x29d2bc.valid) return _0x29d2bc;
      }
      if (_0x5b4eaf.Lab) {
        const _0x5e8a53 = _0x5b4eaf.Lab.validate(_0x27b547);
        if (!_0x5e8a53.valid) return _0x5e8a53;
      }
      if (_0x5b4eaf.Finale) {
        const _0xd916e8 = _0x5b4eaf.Finale.validate(_0x27b547);
        if (!_0xd916e8.valid) return _0xd916e8;
      }
      if (
        _0x27b547.cheats &&
        true === _0x27b547.cheats.unlocked &&
        true === _0x27b547.cheats.used &&
        _0xecd2f1.KizyacCheats
      )
        return _0xecd2f1.KizyacCheats.shape(_0x27b547);
      if (_0x27b547.decaysHere > _0x27b547.decays || _0x27b547.singsHere > _0x27b547.sings)
        return _0x253d72('Несогласованные\x20этапы\x20прогресса');
      if (
        _0x27b547.run > _0x27b547.total + _0x46a959 ||
        _0x27b547.run > _0x27b547.best + _0x46a959 ||
        _0x27b547.epochBest > _0x27b547.best + _0x46a959 ||
        _0x27b547.best > Math.max(0x1, _0x27b547.total) + _0x46a959
      )
        return _0x253d72('Добыча превышает общий прогресс');
      const _0x5a057f = Math.max(0x1, 0x1 + 0x2 * _0x5b4eaf.up(_0x27b547, 'starter'), _0x27b547.legacy ? 0x2 : 0x1);
      if (_0x27b547.am > _0x5f244f.add(_0x5a057f, _0x27b547.total) + _0x46a959)
        return _0x253d72('Баланс\x20превышает\x20добычу');
      for (const [_0x3aa295, _0x32f91f] of [
        ['iso', 'isoTotal'],
        ['isoEpoch', 'isoTotal'],
        ['mass', 'massTotal'],
        ['massCycle', 'massTotal'],
        ['cores', 'coreTotal'],
      ])
        if (_0x27b547[_0x3aa295] > _0x27b547[_0x32f91f] + _0x46a959)
          return _0x253d72('Баланс превышает полученную валюту');
      if (
        (!_0x27b547.decays && _0x5f244f.valid(_0x27b547.isoTotal)) ||
        (!_0x27b547.sings && _0x5f244f.valid(_0x27b547.massTotal)) ||
        (!_0x27b547.realities && _0x5f244f.valid(_0x27b547.coreTotal))
      )
        return _0x253d72('Валюта\x20открыта\x20раньше\x20нужного\x20этапа');
      if (
        _0x27b547.protocols.some((_0x265f38) => !Number.isInteger(_0x265f38) || _0x265f38 < 0x0 || _0x265f38 > 0x3) ||
        (_0x5b4eaf.ranks(_0x27b547) > 0x0 && !_0x27b547.decays)
      )
        return _0x253d72('Некорректные\x20протоколы');
      if (!Array.isArray(_0x27b547.research) || new Set(_0x27b547.research).size !== _0x27b547.research.length)
        return _0x253d72('Повторные\x20исследования');
      let _0x18f637 = _0x5f244f.Z;
      const _0x235737 = new Set();
      for (const _0x580b53 of _0x27b547.research) {
        const _0x351fa2 = _0x5b4eaf.RESEARCH.find((_0x4dead6) => _0x4dead6.id === _0x580b53);
        if (
          !_0x351fa2 ||
          (_0x351fa2.requires || []).some((_0x3bd76f) => !_0x27b547.research.includes(_0x3bd76f)) ||
          (_0x351fa2.any && !_0x351fa2.any.some((_0x377bbe) => _0x27b547.research.includes(_0x377bbe)))
        )
          return _0x253d72('Нарушен порядок исследований');
        (_0x351fa2.path && _0x235737.add(_0x351fa2.path), (_0x18f637 = _0x5f244f.add(_0x18f637, _0x351fa2.cost)));
      }
      if (_0x235737.size > 0x1 || _0x18f637 > _0x27b547.massTotal + _0x46a959)
        return _0x253d72('Несовместимые или неоплаченные исследования');
      for (const [_0x10eb11, _0xd6d49d, _0x295f4a] of [
        ['isoUp', _0x5b4eaf.ISO_UPGRADES, 'isoTotal'],
        ['coreUp', _0x5b4eaf.CORE_UPGRADES, 'coreTotal'],
      ]) {
        if (!_0x27b547[_0x10eb11] || 'object' != typeof _0x27b547[_0x10eb11])
          return _0x253d72('Некорректные\x20улучшения');
        let _0x929048 = _0x5f244f.Z;
        for (const [_0x25ba72, _0x2f7fe4] of Object.entries(_0x27b547[_0x10eb11])) {
          const _0x2e3c03 = _0xd6d49d.find((_0x42e18e) => _0x42e18e.id === _0x25ba72);
          if (!_0x2e3c03 || !Number.isInteger(_0x2f7fe4) || _0x2f7fe4 < 0x0 || _0x2f7fe4 > _0x2e3c03.max)
            return _0x253d72('Недопустимый уровень улучшения');
          for (let _0xcd3f75 = 0x0; _0xcd3f75 < _0x2f7fe4; _0xcd3f75++)
            _0x929048 = _0x5f244f.add(_0x929048, _0x2e3c03.cost + _0xcd3f75 * _0x2e3c03.growth);
        }
        if (_0x929048 > _0x27b547[_0x295f4a] + _0x46a959) return _0x253d72('Неоплаченные\x20улучшения');
      }
      for (let _0x3e871c = 0x0; _0x3e871c < 0x8; _0x3e871c++) {
        const _0x3bd676 = _0x27b547.dims[_0x3e871c];
        if (
          !_0x3bd676 ||
          !Number.isSafeInteger(_0x3bd676.b) ||
          _0x3bd676.b < 0x0 ||
          _0x3bd676.b > 0x989680 ||
          'number' != typeof _0x3bd676.q ||
          !Number.isFinite(_0x3bd676.q) ||
          _0x3bd676.q < _0x5f244f.Z ||
          _0x3bd676.q > _0x5f244f.MAX ||
          (_0x3bd676.b > 0x0 && _0x3bd676.q + _0x46a959 < _0x5f244f.from(_0x3bd676.b))
        )
          return _0x253d72('Некорректные помощники');
        if (_0x3e871c >= _0x5b4eaf.availableDims(_0x27b547) && (_0x3bd676.b > 0x0 || _0x5f244f.valid(_0x3bd676.q)))
          return _0x253d72('Помощник открыт раньше срока');
      }
      if (
        !Array.isArray(_0x27b547.glyphs) ||
        _0x27b547.glyphs.length > _0x27b547.realities ||
        new Set(_0x27b547.glyphs.map((_0x15989e) => _0x15989e.key)).size !== _0x27b547.glyphs.length
      )
        return _0x253d72('Некорректная\x20коллекция\x20рун');
      for (const _0xca1a18 of _0x27b547.glyphs) {
        const _0x194df3 = /^(\d+)-(power|isotope|mass)$/.exec(_0xca1a18.key);
        if (
          !_0x194df3 ||
          _0xca1a18.id !== _0x194df3[0x2] ||
          +_0x194df3[0x1] < 0x1 ||
          +_0x194df3[0x1] > _0x27b547.realities ||
          !Number.isInteger(_0xca1a18.power) ||
          _0xca1a18.power < 0x1 ||
          _0xca1a18.power > 0x1 + Math.floor((+_0x194df3[0x1] - 0x1) / 0x2)
        )
          return _0x253d72('Некорректная сила руны');
      }
      if (null !== _0x27b547.equipped && !_0x27b547.glyphs.some((_0x5decf8) => _0x5decf8.key === _0x27b547.equipped))
        return _0x253d72('Выбрана недоступная руна');
      if (_0x27b547.music) {
        const _0x49a0ce = _0x27b547.music;
        if (void 0x0 !== _0x49a0ce.unlockPrice && ![0x1dcd6500, 0xe8d4a51000].includes(_0x49a0ce.unlockPrice))
          return _0x253d72('Некорректная цена разблокировки');
        if (void 0x0 !== _0x49a0ce.tracks) {
          if (!Array.isArray(_0x49a0ce.tracks) || _0x49a0ce.tracks.length > 0x32)
            return _0x253d72('Некорректная библиотека');
          const _0x279645 = [];
          for (const _0x514063 of _0x49a0ce.tracks) {
            if (
              !_0x514063 ||
              'string' != typeof _0x514063.id ||
              !/^user_[a-f0-9]{32}$/.test(_0x514063.id) ||
              _0x279645.includes(_0x514063.id) ||
              'string' != typeof _0x514063.name ||
              _0x514063.name.length > 0x50 ||
              !Number.isFinite(_0x514063.duration) ||
              _0x514063.duration < 0x1 ||
              _0x514063.duration > 0x5265c00 ||
              !Number.isFinite(_0x514063.bytes) ||
              _0x514063.bytes < 0x1 ||
              _0x514063.bytes > 0x6400000
            )
              return _0x253d72('Некорректная\x20мелодия');
            _0x279645.push(_0x514063.id);
          }
          if (
            void 0x0 !== _0x49a0ce.activeId &&
            !['builtin-v2', 'builtin-v3', ..._0x279645].includes(_0x49a0ce.activeId)
          )
            return _0x253d72('Трек\x20недоступен');
        }
      }
      return _0x27b547.music &&
        _0x27b547.music.unlocked &&
        _0x27b547.total + _0x46a959 <
          _0x5f244f.from(0xe8d4a51000 === _0x27b547.music.unlockPrice ? 0xe8d4a51000 : 0x1dcd6500)
        ? _0x253d72('Плеер открыт без достаточного прогресса')
        : _0x27b547.music &&
            _0x27b547.music.customUnlocked &&
            (!_0x27b547.music.unlocked || _0x27b547.total + _0x46a959 < _0x5f244f.from(0x5f5e100))
          ? _0x253d72('Импорт открыт без достаточного прогресса')
          : {
              valid: true,
            };
    } catch (_0x411e3b) {
      return _0x253d72('Повреждена\x20структура\x20прогресса');
    }
  }
  ((_0x5b4eaf.validateProgress = _0x5e9d83),
    (_0xecd2f1.KizyacGuard = {
      validate: _0x5e9d83,
    }),
    'object' == typeof module &&
      module.exports &&
      (module.exports = {
        validate: _0x5e9d83,
      }));
})('undefined' != typeof window ? window : globalThis);
