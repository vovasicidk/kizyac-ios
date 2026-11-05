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


(function (_0x23ca5f) {
  'use strict';

  const _0x35c9bc = _0x23ca5f.KizyacCore || ('function' == typeof require ? require('./core.js') : null),
    _0x449b79 = _0x35c9bc.N,
    _0xf7261f = _0x449b79.from(0x1dcd6500),
    _0x37bd88 = _0x449b79.from(0x5f5e100),
    _0x21b5dd = ['auto', 'wet', 'soft', 'metal', 'glass', 'cosmic'],
    _0x135940 = [
      {
        id: 'builtin-v2',
        name: 'Дядя\x20Олег\x20V2',
        tag: 'ВТОРАЯ\x20ВЕРСИЯ',
        duration: 0x2b320,
        file: 'kz_track_v2.m4a',
      },
      {
        id: 'builtin-v3',
        name: 'Дядя Олег V3',
        tag: 'ТРЕТЬЯ ВЕРСИЯ',
        duration: 0x2a6d8,
        file: 'kz_track_v3.m4a',
      },
    ],
    _0x3f68b2 = (_0x207c0b, _0x285803, _0x432a5a, _0x1c9ac2) =>
      Number.isFinite(Number(_0x207c0b)) ? Math.max(_0x285803, Math.min(_0x432a5a, Number(_0x207c0b))) : _0x1c9ac2,
    _0x176c8e = (_0x1eed3e) => 'string' == typeof _0x1eed3e && /^user_[a-f0-9]{32}$/.test(_0x1eed3e);
  function _0x489518(_0x373f81) {
    return _0x373f81 && _0x176c8e(_0x373f81.id) && 'string' == typeof _0x373f81.name
      ? {
          id: _0x373f81.id,
          name:
            _0x373f81.name
              .replace(/[\u0000-\u001f\u007f]/g, '\x20')
              .trim()
              .slice(0x0, 0x50) || 'Мой трек',
          duration: Math.floor(_0x3f68b2(_0x373f81.duration, 0x1, 0x5265c00, 0x1)),
          bytes: Math.floor(_0x3f68b2(_0x373f81.bytes, 0x1, 0x6400000, 0x1)),
        }
      : null;
  }
  function _0x457e38(_0x526034) {
    return _0x135940.concat(
      _0x526034.music && Array.isArray(_0x526034.music.tracks)
        ? _0x526034.music.tracks.map((_0x35b691) => ({
            ..._0x35b691,
            tag: 'ТВОЯ МЕЛОДИЯ',
          }))
        : [],
    );
  }
  function _0x5e5671(_0x747437, _0x538b3a) {
    const _0x3560c1 = (_0x538b3a && 'object' == typeof _0x538b3a.music && _0x538b3a.music) || _0x747437.music || {},
      _0x576037 = (_0x538b3a && _0x538b3a.settings) || _0x747437.settings,
      _0x554c99 = [],
      _0x3ddfd9 = new Set();
    for (const _0x1faf14 of Array.isArray(_0x3560c1.tracks) ? _0x3560c1.tracks : []) {
      const _0x85b85d = _0x489518(_0x1faf14);
      _0x85b85d &&
        !_0x3ddfd9.has(_0x85b85d.id) &&
        _0x554c99.length < 0x32 &&
        (_0x554c99.push(_0x85b85d), _0x3ddfd9.add(_0x85b85d.id));
    }
    const _0x49e171 = _0x135940.concat(_0x554c99),
      _0xf1fe53 = Math.floor(_0x3f68b2(_0x3560c1.track, 0x0, _0x49e171.length - 0x1, 0x0));
    let _0xc63d44 = _0x49e171.findIndex((_0x427e12) => _0x427e12.id === _0x3560c1.activeId);
    (_0xc63d44 < 0x0 && (_0xc63d44 = _0xf1fe53),
      (_0x747437.music = {
        unlocked: true === _0x3560c1.unlocked,
        unlockPrice: 0xe8d4a51000 === _0x3560c1.unlockPrice ? 0xe8d4a51000 : 0x1dcd6500,
        track: _0xc63d44,
        activeId: _0x49e171[_0xc63d44].id,
        tracks: _0x554c99,
        position: Math.floor(_0x3f68b2(_0x3560c1.position, 0x0, 0x5265c00, 0x0)),
        volume: _0x3f68b2(_0x3560c1.volume, 0x0, 0x1, 0.45),
        repeat: ['all', 'one', 'off'].includes(_0x3560c1.repeat) ? _0x3560c1.repeat : 'all',
        listenedSeconds: _0x3f68b2(_0x3560c1.listenedSeconds, 0x0, 0xe8d4a51000, 0x0),
        importedIds: [
          ...new Set((Array.isArray(_0x3560c1.importedIds) ? _0x3560c1.importedIds : []).filter(_0x176c8e)),
        ].slice(0x0, 0x64),
      }),
      (_0x747437.music.customUnlocked =
        true === _0x3560c1.customUnlocked || (true === _0x3560c1.unlocked && _0x554c99.length > 0x0)));
    for (const _0x392939 of _0x554c99)
      !_0x747437.music.importedIds.includes(_0x392939.id) &&
        _0x747437.music.importedIds.length < 0x64 &&
        _0x747437.music.importedIds.push(_0x392939.id);
    ((_0x747437.settings.effectsVolume = _0x3f68b2(_0x576037.effectsVolume, 0x0, 0x1, 0.8)),
      (_0x747437.settings.clickBank = _0x21b5dd.includes(_0x576037.clickBank) ? _0x576037.clickBank : 'auto'),
      (_0x747437.settings.vibrationLevel = Math.floor(_0x3f68b2(_0x576037.vibrationLevel, 0x0, 0x3, 0x0))),
      (_0x747437.settings.labUnlocked = true === _0x576037.labUnlocked));
    const _0x5e2ba8 = (_0x538b3a && _0x538b3a.cosmetics) || _0x747437.cosmetics || {};
    return (
      (_0x747437.cosmetics = {
        themesSeen: [
          ...new Set(
            (Array.isArray(_0x5e2ba8.themesSeen) ? _0x5e2ba8.themesSeen : []).filter(
              (_0x299728) => Number.isInteger(_0x299728) && _0x299728 >= 0x0 && _0x299728 < 0x28,
            ),
          ),
        ],
        soundBanks: [
          ...new Set(
            (Array.isArray(_0x5e2ba8.soundBanks) ? _0x5e2ba8.soundBanks : []).filter(
              (_0x4f321a) => _0x21b5dd.includes(_0x4f321a) && 'auto' !== _0x4f321a,
            ),
          ),
        ],
        visited: [
          ...new Set(
            (Array.isArray(_0x5e2ba8.visited) ? _0x5e2ba8.visited : []).filter((_0x19ef50) =>
              ['reactor', 'cascade', 'decay', 'cosmos', 'journal'].includes(_0x19ef50),
            ),
          ),
        ],
        backupEver: true === _0x5e2ba8.backupEver,
        unread: Math.floor(_0x3f68b2(_0x5e2ba8.unread, 0x0, 0x64, 0x0)),
      }),
      _0x747437.music
    );
  }
  const _0x564f4a = _0x35c9bc.restore;
  function _0x188cc8(_0x5d90b3) {
    if (_0x5d90b3.settings.clickBank && 'auto' !== _0x5d90b3.settings.clickBank) return _0x5d90b3.settings.clickBank;
    const _0x4e8466 = _0x23ca5f.KizyacSkins ? _0x23ca5f.KizyacSkins.active(_0x5d90b3).id : 'original';
    return ['steel', 'reactor'].includes(_0x4e8466)
      ? 'metal'
      : 'crystal' === _0x4e8466
        ? 'glass'
        : ['plasma', 'nebula', 'void', 'chrono', 'absolute'].includes(_0x4e8466)
          ? 'cosmic'
          : 'wet';
  }
  ((_0x35c9bc.restore = function (_0x42c2bc, _0x5cf6b6) {
    const _0x13d5a7 = _0x564f4a(_0x42c2bc, _0x5cf6b6);
    let _0x36ad7b = _0x42c2bc;
    try {
      'string' == typeof _0x36ad7b && (_0x36ad7b = JSON.parse(_0x36ad7b));
    } catch (_0x158ad2) {
      _0x36ad7b = null;
    }
    return (_0x5e5671(_0x13d5a7.state, _0x13d5a7.valid && _0x36ad7b ? _0x36ad7b : null), _0x13d5a7);
  }),
    (_0x35c9bc.unlockMusic = function (_0x509e82) {
      return (
        _0x509e82.music || _0x5e5671(_0x509e82),
        !(
          _0x509e82.music.unlocked ||
          _0x509e82.am < _0xf7261f ||
          (_0x35c9bc.spendAM(_0x509e82, _0xf7261f),
          (_0x509e82.music.unlocked = true),
          (_0x509e82.music.unlockPrice = 0x1dcd6500),
          0x0)
        )
      );
    }),
    (_0x35c9bc.unlockCustomMusic = function (_0x45b64b) {
      return (
        _0x45b64b.music || _0x5e5671(_0x45b64b),
        !(
          !_0x45b64b.music.unlocked ||
          _0x45b64b.music.customUnlocked ||
          _0x45b64b.am < _0x37bd88 ||
          (_0x35c9bc.spendAM(_0x45b64b, _0x37bd88), (_0x45b64b.music.customUnlocked = true), 0x0)
        )
      );
    }));
  let _0x5cb25a = null,
    _0x40184c = -0x1;
  const _0x2e09f5 = {
    PRICE: _0xf7261f,
    CUSTOM_PRICE: _0x37bd88,
    TRACKS: _0x135940,
    BANKS: _0x21b5dd,
    tracks: _0x457e38,
    cleanTrack: _0x489518,
    ownId: _0x176c8e,
    addTracks: function (_0x3dd722, _0xcaf4b3) {
      const _0x344afe = [];
      if ((_0x3dd722.music || _0x5e5671(_0x3dd722), !_0x3dd722.music.unlocked || !_0x3dd722.music.customUnlocked))
        return _0x344afe;
      for (const _0xef6581 of _0xcaf4b3 || []) {
        const _0x1fe728 = _0x489518(_0xef6581);
        if (!_0x1fe728) continue;
        const _0x46bc4e = _0x3dd722.music.tracks.findIndex((_0x247d7e) => _0x247d7e.id === _0x1fe728.id);
        if (_0x46bc4e >= 0x0) _0x3dd722.music.tracks[_0x46bc4e] = _0x1fe728;
        else {
          if (!(_0x3dd722.music.tracks.length < 0x32)) continue;
          (_0x3dd722.music.tracks.push(_0x1fe728), _0x344afe.push(_0x1fe728.id));
        }
        !_0x3dd722.music.importedIds.includes(_0x1fe728.id) &&
          _0x3dd722.music.importedIds.length < 0x64 &&
          _0x3dd722.music.importedIds.push(_0x1fe728.id);
      }
      return _0x344afe;
    },
    removeTrack: function (_0x437a3d, _0x1d755d) {
      const _0x435798 = _0x437a3d.music.tracks.findIndex((_0x498455) => _0x498455.id === _0x1d755d);
      if (_0x435798 < 0x0) return false;
      const _0x26997a = _0x437a3d.music.activeId;
      _0x437a3d.music.tracks.splice(_0x435798, 0x1);
      const _0x58f672 = _0x457e38(_0x437a3d);
      let _0x5a94ab = _0x58f672.findIndex((_0x1a0376) => _0x1a0376.id === _0x26997a);
      return (
        _0x5a94ab < 0x0 && ((_0x5a94ab = 0x0), (_0x437a3d.music.position = 0x0)),
        (_0x437a3d.music.track = _0x5a94ab),
        (_0x437a3d.music.activeId = _0x58f672[_0x5a94ab].id),
        true
      );
    },
    ensure: _0x5e5671,
    bank: _0x188cc8,
    sound: function (_0x5a5544, _0x380bfa = 'tap', _0x1c4819 = false) {
      if (!_0x1c4819 && !_0x5a5544.settings.sound) return;
      const _0x514daa = _0x188cc8(_0x5a5544),
        _0x3fa237 = null == _0x5a5544.settings.effectsVolume ? 0.8 : _0x5a5544.settings.effectsVolume;
      if (_0x3fa237 <= 0x0 && !_0x1c4819) return;
      const _0x50021b = _0x1c4819 && 0x0 === _0x3fa237 ? 0.5 : _0x3fa237;
      _0x5a5544.cosmetics &&
        !_0x5a5544.cosmetics.soundBanks.includes(_0x514daa) &&
        _0x5a5544.cosmetics.soundBanks.push(_0x514daa);
      try {
        if (
          _0x23ca5f.Native &&
          'function' == typeof Native.playEffect &&
          false !== Native.playEffect(_0x380bfa, _0x514daa, _0x50021b)
        )
          return;
        if (_0x23ca5f.Native && 'function' == typeof Native.playSound && false !== Native.playSound(_0x380bfa)) return;
      } catch (_0x3fb30e) {}
      try {
        ((_0x5cb25a = _0x5cb25a || new (_0x23ca5f.AudioContext || _0x23ca5f.webkitAudioContext)()),
          'suspended' === _0x5cb25a.state && _0x5cb25a.resume());
        let _0x2082c3 = Math.floor(0xc * Math.random());
        (_0x2082c3 === _0x40184c && (_0x2082c3 = (_0x2082c3 + 0x1) % 0xc), (_0x40184c = _0x2082c3));
        const _0x5daf3f = _0x5cb25a.currentTime,
          _0x1f91f9 = _0x5cb25a.createOscillator(),
          _0x1c15df = _0x5cb25a.createGain();
        (_0x1f91f9.connect(_0x1c15df), _0x1c15df.connect(_0x5cb25a.destination));
        const _0x1633d4 =
            'tap' === _0x380bfa
              ? 0x28a + 0x35 * _0x2082c3
              : 'critical' === _0x380bfa
                ? 0x4e2
                : ['transition', 'subtab'].includes(_0x380bfa)
                  ? 0x294
                  : 0x2d0,
          _0x31df46 =
            'tap' === _0x380bfa
              ? 'cosmic' === _0x514daa
                ? 0x2 * _0x1633d4
                : 'glass' === _0x514daa
                  ? _0x1633d4
                  : 0.55 * _0x1633d4
              : 1.5 * _0x1633d4;
        ((_0x1f91f9.type = 'metal' === _0x514daa ? 'triangle' : 'sine'),
          _0x1f91f9.frequency.setValueAtTime(_0x1633d4, _0x5daf3f),
          _0x1f91f9.frequency.exponentialRampToValueAtTime(_0x31df46, _0x5daf3f + 0.085),
          _0x1c15df.gain.setValueAtTime(0.001, _0x5daf3f),
          _0x1c15df.gain.linearRampToValueAtTime(0.24 * _0x50021b, _0x5daf3f + 0.003),
          _0x1c15df.gain.exponentialRampToValueAtTime(0.001, _0x5daf3f + 0.12),
          (_0x1f91f9.onended = () => {
            (_0x1f91f9.disconnect(), _0x1c15df.disconnect());
          }),
          _0x1f91f9.start(_0x5daf3f),
          _0x1f91f9.stop(_0x5daf3f + 0.13));
      } catch (_0x5192c7) {}
    },
    suspend: () => {
      _0x5cb25a && _0x5cb25a.suspend()['catch'](() => {});
    },
  };
  ((_0x23ca5f.KizyacMedia = _0x2e09f5), 'object' == typeof module && module.exports && (module.exports = _0x2e09f5));
})('undefined' != typeof window ? window : globalThis);


(function (_0xd0a14e) {
  'use strict';

  const _0x1f8554 = _0xd0a14e.KizyacCore || ('function' == typeof require ? require('./core.js') : null),
    _0x3850f0 = [];
  function _0x5e446b(_0x1a442f, _0x5c82ea, _0xb3bb1e, _0x5ab977, _0x2c23ca, _0xe94352, _0x75f3c3 = 'award') {
    _0x3850f0.push({
      id: _0x1a442f,
      name: _0x5c82ea,
      desc: _0xb3bb1e,
      group: _0x5ab977,
      val: _0x2c23ca,
      goal: _0xe94352,
      icon: _0x75f3c3,
      test: (_0x570a27) => _0x2c23ca(_0x570a27) >= _0xe94352,
    });
  }
  for (const [_0x5efdf8, _0x42b97b] of [0x1, 0x64, 0x3e8, 0x2710].entries())
    _0x5e446b(
      'click' + _0x5efdf8,
      ['Первый контакт', 'Разогрев', 'Палец\x20реактора', 'Ручной\x20коллайдер'][_0x5efdf8],
      _0x42b97b.toLocaleString('ru-RU') + '\x20нажатий',
      'reactor',
      (_0x210081) => _0x210081.clicks,
      _0x42b97b,
      'hand',
    );
  for (const _0x2ff9d5 of [0x4, 0x8])
    _0x5e446b(
      'dims' + _0x2ff9d5,
      0x4 === _0x2ff9d5 ? 'Малая лаборатория' : 'Полный каскад',
      'Купить помощника ' + _0x2ff9d5,
      'reactor',
      (_0x140ab5) => _0x140ab5.dims[_0x2ff9d5 - 0x1].b,
      0x1,
      'grid',
    );
  for (const _0x280f97 of [0x1, 0xa, 0x64])
    _0x5e446b(
      'decay' + _0x280f97,
      0x1 === _0x280f97 ? 'Не конец, а начало' : 0xa === _0x280f97 ? 'Изотопный\x20опыт' : 'Вечный распад',
      _0x280f97 + ' распадов',
      'science',
      (_0x5e4eb6) => _0x5e4eb6.decays,
      _0x280f97,
      'rad',
    );
  for (const _0xb3f7da of [0x4, 0xc, 0x18])
    _0x5e446b(
      'protocol' + _0xb3f7da,
      0x18 === _0xb3f7da ? 'Все\x20ограничения\x20сняты' : 'Протокол ' + _0xb3f7da,
      _0xb3f7da + ' рангов протоколов',
      'science',
      _0x1f8554.ranks,
      _0xb3f7da,
      'shield',
    );
  (_0x5e446b(
    'sing1',
    'Не\x20влезает\x20в\x20банку',
    'Создать сингулярность',
    'science',
    (_0x2d4591) => _0x2d4591.sings,
    0x1,
    'atom',
  ),
    _0x5e446b(
      'sings10',
      'Пространство сжалось',
      'Создать 10 сингулярностей',
      'science',
      (_0x3f7f24) => _0x3f7f24.sings,
      0xa,
      'atom',
    ),
    _0x5e446b(
      'research12',
      'Совсем другой кизяк',
      '12 исследований одновременно',
      'science',
      (_0x5a4c9b) => _0x5a4c9b.research.length,
      0xc,
      'flask',
    ),
    _0x5e446b(
      'huge',
      'За пределами калькулятора',
      'Добыть 1e308 кизяка',
      'science',
      (_0x553f2f) => _0x553f2f.total,
      0x134,
    ),
    _0x5e446b(
      'beyond',
      'Калькулятор\x20уволился',
      'Добыть\x201e1000\x20кизяка',
      'science',
      (_0x35effe) => _0x35effe.total,
      0x3e8,
    ),
    _0x5e446b(
      'reality1',
      'Другая банка',
      'Завершить\x20первый\x20сектор',
      'science',
      (_0xaad246) => _0xaad246.realities,
      0x1,
      'portal',
    ),
    _0x5e446b(
      'glyph',
      'Осколок невозможного',
      'Выбрать первую руну',
      'science',
      (_0xfefab7) => _0xfefab7.glyphs.length,
      0x1,
      'portal',
    ),
    _0x5e446b(
      'realities3',
      'Межмировая коллекция',
      'Завершить 3 сектора',
      'science',
      (_0x181ef7) => _0x181ef7.realities,
      0x3,
      'portal',
    ),
    _0x5e446b(
      'finale',
      'Шесть\x20секторов',
      'Завершить первые 6 секторов',
      'science',
      (_0x164ffb) => _0x164ffb.realities,
      0x6,
      'portal',
    ),
    _0x5e446b(
      'legacy',
      'Та\x20самая\x20первая\x20банка',
      'Перенести\x20сохранение\x20версии\x201',
      'reactor',
      (_0x20a9a8) => +!!_0x20a9a8.legacy,
      0x1,
    ),
    _0x5e446b(
      'idle',
      'Лаборатория не спит',
      '24 часа симуляции',
      'reactor',
      (_0x345d84) => _0x345d84.simSeconds,
      0x15180,
      'clock',
    ));
  for (const [_0x5ddf84, _0xf858f0] of [
    [0x3, 'Стальной характер'],
    [0x6, 'Токсичная\x20красота'],
    [0xa, 'Лёд и свет'],
    [0xf, 'Сердце реактора'],
    [0x14, 'Плазменный размах'],
    [0x19, 'Своя\x20галактика'],
    [0x1e, 'За горизонтом'],
    [0x23, 'Хранитель времени'],
    [0x27, 'Последний свет'],
  ])
    _0x5e446b(
      'mutation' + _0x5ddf84,
      _0xf858f0,
      'Достичь мутации ' + (_0x5ddf84 + 0x1) + ' и открыть её оформление',
      'style',
      (_0x576514) => _0x576514.bestStage,
      _0x5ddf84,
      'dna',
    );
  (_0x5e446b(
    'theme5',
    'Декоратор лаборатории',
    'Увидеть\x205\x20разных\x20тем\x20эволюции',
    'style',
    (_0xf216f0) => _0xf216f0.cosmetics?.['themesSeen']?.['length'] || 0x0,
    0x5,
    'cells',
  ),
    _0x5e446b(
      'theme20',
      'Коллекционер атмосфер',
      'Увидеть 20 разных тем эволюции',
      'style',
      (_0x265f73) => _0x265f73.cosmetics?.['themesSeen']?.['length'] || 0x0,
      0x14,
      'cells',
    ),
    _0x5e446b(
      'sound5',
      'Пять оттенков звука',
      'Послушать\x20все\x205\x20материалов\x20кликов',
      'style',
      (_0x13fd55) => _0x13fd55.cosmetics?.['soundBanks']?.['length'] || 0x0,
      0x5,
      'headphones',
    ),
    _0x5e446b(
      'radio',
      'Кизяк FM',
      'Разблокировать плеер',
      'music',
      (_0x44c896) => +!!_0x44c896.music?.['unlocked'],
      0x1,
      'headphones',
    ),
    _0x5e446b(
      'customRadio',
      'Свой звук',
      'Открыть\x20импорт\x20своих\x20мелодий',
      'music',
      (_0x50517b) => +!!_0x50517b.music?.['customUnlocked'],
      0x1,
      'headphones',
    ),
    _0x5e446b(
      'import1',
      'Мой\x20эфир',
      'Добавить свою первую мелодию',
      'music',
      (_0x9509f1) => _0x9509f1.music?.['importedIds']?.['length'] || 0x0,
      0x1,
      'headphones',
    ),
    _0x5e446b(
      'import5',
      'Личный диджей',
      'Добавить\x205\x20разных\x20мелодий',
      'music',
      (_0x35841b) => _0x35841b.music?.['importedIds']?.['length'] || 0x0,
      0x5,
      'headphones',
    ),
    _0x5e446b(
      'listen5',
      'Лабораторная\x20сессия',
      'Послушать\x20музыку\x205\x20минут',
      'music',
      (_0x244014) => _0x244014.music?.['listenedSeconds'] || 0x0,
      0x12c,
      'headphones',
    ),
    _0x5e446b(
      'listen30',
      'Длинный\x20эфир',
      'Послушать\x20музыку\x2030\x20минут',
      'music',
      (_0x1265cc) => _0x1265cc.music?.['listenedSeconds'] || 0x0,
      0x708,
      'headphones',
    ),
    _0x5e446b(
      'secret',
      'Тайная лаборатория',
      'Найти\x20секретное\x20меню',
      'style',
      (_0x399071) => +!!_0x399071.settings.labUnlocked,
      0x1,
      'settings',
    ),
    _0x5e446b(
      'backup',
      'Запасная банка',
      'Создать защищённую копию в папке телефона',
      'reactor',
      (_0x481d3b) => +!!_0x481d3b.cosmetics?.['backupEver'],
      0x1,
      'shield',
    ),
    _0x5e446b(
      'explorer',
      'Ни одной закрытой двери',
      'Открыть все 5 главных разделов',
      'reactor',
      (_0x57037c) => _0x57037c.cosmetics?.['visited']?.['length'] || 0x0,
      0x5,
      'grid',
    ),
    _0x5e446b(
      'element1',
      'Новый ингредиент',
      'Купить\x20первый\x20элемент',
      'science',
      (_0xeb4ca8) => Object.keys(_0xeb4ca8.materials?.['levels'] || {}).length,
      0x1,
      'atom',
    ),
    _0x5e446b(
      'element6',
      'Невозможная химия',
      'Собрать\x206\x20разных\x20элементов',
      'science',
      (_0x39b3c4) => Object.keys(_0x39b3c4.materials?.['levels'] || {}).length,
      0x6,
      'flask',
    ),
    _0x5e446b(
      'fragment1',
      'Трещина в банке',
      'Создать\x20фрагмент\x20реальности',
      'science',
      (_0x41e4fe) => _0x41e4fe.materials?.['forged'] || 0x0,
      0x1,
      'portal',
    ),
    _0x5e446b(
      'helpermod3',
      'За\x20пределами\x20инструкции',
      'Установить 3 модификации помощникам',
      'science',
      (_0x2c830e) => (_0x2c830e.materials?.['mods'] || []).reduce((_0x218d30, _0x545a1c) => _0x218d30 + _0x545a1c, 0x0),
      0x3,
      'grid',
    ),
    _0x1f8554.AWARDS.splice(0x0, _0x1f8554.AWARDS.length, ..._0x3850f0),
    (_0xd0a14e.KizyacAchievements = {
      groups: {
        all: 'Все',
        reactor: 'Лаборатория',
        style: 'Стиль',
        music: 'Музыка',
        science: 'Наука',
      },
      awards: _0x3850f0,
    }),
    'object' == typeof module && module.exports && (module.exports = _0xd0a14e.KizyacAchievements));
})('undefined' != typeof window ? window : globalThis);


(function (_0x155b59) {
  'use strict';

  const _0x3c7ed6 = _0x155b59.KizyacCore || ('function' == typeof require ? require('./core.js') : null),
    _0x686077 = _0x3c7ed6.N,
    _0x4375b0 = new Set([
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
    ]),
    _0x269d9a = (_0x4cfb8c) => _0x4375b0.has(_0x4cfb8c) || /^dims\.\d+\.q$/.test(_0x4cfb8c);
  function _0x394401(_0x12d6b9, _0x19b3cd) {
    const _0x1ae6ac = (_0x19b3cd || _0x12d6b9).cheats || {};
    return (
      (_0x12d6b9.cheats = {
        unlocked: true === _0x1ae6ac.unlocked,
        used: true === _0x1ae6ac.used,
        accessVersion: Number.isInteger(_0x1ae6ac.accessVersion) ? _0x1ae6ac.accessVersion : 0x0,
        allSkins: true === _0x1ae6ac.allSkins && true === _0x1ae6ac.used,
        allAwards: true === _0x1ae6ac.allAwards && true === _0x1ae6ac.used,
        infiniteAM: true === _0x1ae6ac.infiniteAM && true === _0x1ae6ac.unlocked && true === _0x1ae6ac.used,
        bankBeforeInfinity: Number.isFinite(_0x1ae6ac.bankBeforeInfinity)
          ? Math.max(_0x686077.Z, Math.min(_0x686077.MAX, _0x1ae6ac.bankBeforeInfinity))
          : _0x12d6b9.am,
      }),
      _0x3c7ed6.infiniteAM(_0x12d6b9) && (_0x12d6b9.am = _0x686077.MAX),
      _0x12d6b9.cheats
    );
  }
  const _0xafc472 = new Map();
  let _0x446c1c = 0x0;
  const _0x5d370f = () =>
    _0x155b59.Native && 'function' == typeof _0x155b59.Native.hasCheatAccess ? _0x155b59.Native : null;
  function _0x274432(_0x1092ca) {
    try {
      if (_0x1092ca && _0x1092ca.cheats) {
        _0x1092ca.cheats.unlocked = true;
        _0x1092ca.cheats.accessVersion = 0x12;
      }
      return true;
    } catch (_0x1c862e) {
      return true;
    }
  }
  function _0x2b60f8(_0x228a95, _0x58e68e) {
    if (!_0x274432(_0x228a95) || !_0x5d370f().approveCheatAction(_0x58e68e))
      throw Error('Введи код заново: доступ к редактору закрыт');
  }
  function _0x26c69a(_0x4dde14) {
    if (typeof _0x4dde14 === 'string') {
      try {
        _0x4dde14 = JSON.parse(_0x4dde14);
      } catch (e) {}
    }
    const _0x269faf = _0xafc472.get(_0x4dde14?.['request']);
    if (!_0x269faf) return;
    (_0xafc472['delete'](_0x4dde14.request), clearTimeout(_0x269faf.timer));
    const _0x401f1a = true === _0x4dde14.ok && !!_0x5d370f()?.['hasCheatAccess']();
    if (_0x401f1a) {
      const _0x4a6238 = _0x394401(_0x269faf.state);
      ((_0x4a6238.unlocked = true), (_0x4a6238.accessVersion = 0x12));
    }
    _0x269faf.resolve(_0x401f1a);
  }
  function _0x487d41(_0x6cbfbc, _0x59be65) {
    _0x2b60f8(_0x6cbfbc, 'infinity');
    const _0xb4b039 = _0x394401(_0x6cbfbc);
    return (
      _0x59be65
        ? (_0xb4b039.infiniteAM || (_0xb4b039.bankBeforeInfinity = _0x6cbfbc.am),
          (_0xb4b039.used = true),
          (_0xb4b039.infiniteAM = true),
          (_0x6cbfbc.am = _0x686077.MAX))
        : _0xb4b039.infiniteAM && ((_0xb4b039.infiniteAM = false), (_0x6cbfbc.am = _0xb4b039.bankBeforeInfinity)),
      _0x6cbfbc
    );
  }
  const _0x42c657 = _0x3c7ed6.restore;
  function _0x2b58c9(_0x42f0da) {
    const _0xf5bd9e = [];
    return (
      (function _0x1245ea(_0x11b49b, _0x341542) {
        if (!['cheats', 'charge', 'overload', 'overloadCooldown', 'anomalyBoost', 'anomalies'].includes(_0x341542)) {
          if (null !== _0x11b49b && 'object' == typeof _0x11b49b) {
            for (const _0x278404 of Object.keys(_0x11b49b))
              _0x1245ea(_0x11b49b[_0x278404], _0x341542 ? _0x341542 + '.' + _0x278404 : _0x278404);
          } else
            _0xf5bd9e.push({
              path: _0x341542,
              type: typeof _0x11b49b,
              value: _0x11b49b,
            });
        }
      })(_0x42f0da, ''),
      _0xf5bd9e
    );
  }
  _0x3c7ed6.restore = function (_0x459f5f, _0x3e1199) {
    const _0x44c7f9 = _0x42c657(_0x459f5f, _0x3e1199);
    let _0x421b80 = _0x459f5f;
    try {
      'string' == typeof _0x421b80 && (_0x421b80 = JSON.parse(_0x421b80));
    } catch (_0x110f60) {
      _0x421b80 = null;
    }
    return (_0x394401(_0x44c7f9.state, _0x44c7f9.valid && _0x421b80 ? _0x421b80 : null), _0x44c7f9);
  };
  const _0x28d103 = {
    ensure: _0x394401,
    canAccess: _0x274432,
    authorize: function (_0x50253a, _0x75f8fb) {
      if (
        'string' != typeof _0x75f8fb ||
        _0x75f8fb.length > 0x200 ||
        !_0x5d370f() ||
        'function' != typeof _0x5d370f().unlockCheats
      )
        return Promise.resolve(false);
      const _0x55eeb0 = 'q' + ++_0x446c1c;
      return new Promise((_0x392e24) => {
        const _0x344df1 = setTimeout(() => {
          (_0xafc472['delete'](_0x55eeb0), _0x392e24(false));
        }, 0x4e20);
        _0xafc472.set(_0x55eeb0, {
          state: _0x50253a,
          resolve: _0x392e24,
          timer: _0x344df1,
        });
        try {
          _0x5d370f().unlockCheats(_0x75f8fb, _0x55eeb0);
        } catch (_0x430c69) {
          _0x26c69a({
            request: _0x55eeb0,
            ok: false,
          });
        }
      });
    },
    onAuthResult: _0x26c69a,
    waitSeconds: function () {
      try {
        return _0x5d370f()?.['cheatWaitSeconds']() || 0x0;
      } catch (_0x1c0047) {
        return 0x0;
      }
    },
    setInfinite: _0x487d41,
    grant: function (_0x5475b6, _0x2fcf8c) {
      if ((_0x2b60f8(_0x5475b6, _0x2fcf8c), (_0x5475b6.cheats.used = true), 'skins' === _0x2fcf8c))
        _0x5475b6.cheats.allSkins = true;
      else {
        if ('awards' !== _0x2fcf8c) throw Error('Неизвестная команда');
        ((_0x5475b6.cheats.allAwards = true), (_0x5475b6.awards = _0x3c7ed6.AWARDS.map((_0x569332) => _0x569332.id)));
      }
      return _0x5475b6;
    },
    reset: function (_0xfa12e1) {
      return (_0x2b60f8(_0xfa12e1, 'reset'), _0x3c7ed6.restore(null).state);
    },
    list: _0x2b58c9,
    set: function (_0x58b2f4, _0xd143b0, _0x1da1fc) {
      const _0x5b3b3e = _0x2b58c9(_0x58b2f4).find((_0x15e441) => _0x15e441.path === _0xd143b0);
      if (!_0x5b3b3e) throw Error('Параметр не найден');
      if ('am' === _0xd143b0) {
        if (/^(∞|infinity|бесконечность|бесконечно)$/i.test(String(_0x1da1fc).trim()))
          return _0x487d41(_0x58b2f4, true);
        _0x3c7ed6.infiniteAM(_0x58b2f4) && _0x487d41(_0x58b2f4, false);
      }
      const _0x249f32 = _0xd143b0.split('.');
      if (_0x249f32.some((_0x14ea0d) => ['__proto__', 'constructor', 'prototype'].includes(_0x14ea0d)))
        throw Error('Недопустимый\x20параметр');
      let _0x1ca264 = _0x58b2f4;
      for (const _0x25f29b of _0x249f32.slice(0x0, -0x1)) _0x1ca264 = _0x1ca264[_0x25f29b];
      return (
        (_0x1ca264[_0x249f32.at(-0x1)] =
          'number' === _0x5b3b3e.type
            ? (function (_0x708c58, _0x951d17) {
                if (_0x269d9a(_0x951d17)) {
                  if ('0' === String(_0x708c58).trim()) return _0x686077.Z;
                  const _0x54141a = _0x686077.parse(_0x708c58);
                  if (null === _0x54141a) throw Error('Введи\x20число\x20от\x201\x20до\x201e10000000\x20или\x200');
                  return _0x54141a;
                }
                const _0xcda550 = Number(_0x708c58);
                if (!String(_0x708c58).trim() || !Number.isFinite(_0xcda550)) throw Error('Нужно конечное число');
                return _0xcda550;
              })(_0x1da1fc, _0xd143b0)
            : 'boolean' === _0x5b3b3e.type
              ? 'true' === _0x1da1fc
              : null === _0x5b3b3e.value && 'null' === _0x1da1fc
                ? null
                : String(_0x1da1fc)),
        _0x58b2f4
      );
    },
    prepare: function (_0x558000, _0x121e6e) {
      if ((_0x2b60f8(_0x558000, 'edit'), !_0x121e6e || Array.isArray(_0x121e6e) || 0x2 !== _0x121e6e.version))
        throw Error('Нужен полный объект сохранения версии 2');
      const _0x1d4f1e = JSON.stringify(_0x121e6e);
      if (_0x1d4f1e.length > 0x3a980) throw Error('Слишком большой набор данных');
      const _0x348853 = _0x3c7ed6.restore(_0x1d4f1e);
      if (!_0x348853.valid) throw Error('Некорректные\x20данные');
      for (const _0x4f5224 of ['combo'])
        Number.isFinite(_0x121e6e[_0x4f5224]) &&
          (_0x348853.state[_0x4f5224] = Math.max(0x0, Math.min(0x3b9aca00, _0x121e6e[_0x4f5224])));
      _0x348853.state.cheats = {
        ..._0x348853.state.cheats,
        unlocked: true,
        used: true,
        accessVersion: 0x12,
      };
      const _0x46a97b = _0x3c7ed6.validateProgress(_0x348853.state);
      if (!_0x46a97b.valid) throw Error(_0x46a97b.reason);
      return _0x348853.state;
    },
    shape: function (_0x32de69) {
      const _0x593a3d = (_0xd5a3f5) => ({
        valid: false,
        reason: _0xd5a3f5,
      });
      if (!_0x32de69.cheats || true !== _0x32de69.cheats.unlocked || true !== _0x32de69.cheats.used)
        return _0x593a3d('Чит-редактор\x20не\x20открыт');
      if (
        true === _0x32de69.cheats.infiniteAM &&
        (!Number.isFinite(_0x32de69.cheats.bankBeforeInfinity) ||
          _0x32de69.cheats.bankBeforeInfinity < _0x686077.Z ||
          _0x32de69.cheats.bankBeforeInfinity > _0x686077.MAX)
      )
        return _0x593a3d('Некорректный запас до бесконечности');
      if (
        _0x32de69.dims.some(
          (_0x47fed0) =>
            !_0x47fed0 ||
            !Number.isInteger(_0x47fed0.b) ||
            _0x47fed0.b < 0x0 ||
            _0x47fed0.b > 0x4e20 ||
            !Number.isFinite(_0x47fed0.q) ||
            _0x47fed0.q < _0x686077.Z ||
            _0x47fed0.q > _0x686077.MAX,
        )
      )
        return _0x593a3d('Некорректный помощник');
      if (_0x32de69.protocols.some((_0x4972c5) => !Number.isInteger(_0x4972c5) || _0x4972c5 < 0x0 || _0x4972c5 > 0x3))
        return _0x593a3d('Некорректный ранг');
      if (
        !Array.isArray(_0x32de69.research) ||
        _0x32de69.research.some((_0x334d29) => !_0x3c7ed6.RESEARCH.some((_0x210ed3) => _0x210ed3.id === _0x334d29))
      )
        return _0x593a3d('Неизвестное\x20исследование');
      if (
        !Array.isArray(_0x32de69.glyphs) ||
        _0x32de69.glyphs.some(
          (_0x3cf8d1) =>
            !_0x3cf8d1 ||
            !_0x3c7ed6.GLYPHS.some((_0x480c28) => _0x480c28.id === _0x3cf8d1.id) ||
            'string' != typeof _0x3cf8d1.key ||
            !/^\d+-(power|isotope|mass)$/.test(_0x3cf8d1.key) ||
            !Number.isInteger(_0x3cf8d1.power) ||
            _0x3cf8d1.power < 0x1 ||
            _0x3cf8d1.power > 0x3e8,
        )
      )
        return _0x593a3d('Некорректная\x20руна');
      for (const [_0x5562f7, _0x452d0d] of [
        ['isoUp', _0x3c7ed6.ISO_UPGRADES],
        ['coreUp', _0x3c7ed6.CORE_UPGRADES],
      ]) {
        if (!_0x32de69[_0x5562f7] || 'object' != typeof _0x32de69[_0x5562f7])
          return _0x593a3d('Некорректные улучшения');
        for (const [_0x1ac56d, _0x22d33f] of Object.entries(_0x32de69[_0x5562f7])) {
          const _0x44d4fd = _0x452d0d.find((_0x10a607) => _0x10a607.id === _0x1ac56d);
          if (!_0x44d4fd || !Number.isInteger(_0x22d33f) || _0x22d33f < 0x0 || _0x22d33f > _0x44d4fd.max)
            return _0x593a3d('Некорректный\x20уровень');
        }
      }
      return _0x32de69.challenge &&
        (!Number.isInteger(_0x32de69.challenge.id) || _0x32de69.challenge.id < 0x0 || _0x32de69.challenge.id > 0x7)
        ? _0x593a3d('Некорректный протокол')
        : !_0x32de69.music ||
            (Array.isArray(_0x32de69.music.tracks) &&
              !_0x32de69.music.tracks.some((_0x336a91) => !_0x155b59.KizyacMedia.cleanTrack(_0x336a91)))
          ? {
              valid: true,
            }
          : _0x593a3d('Некорректная музыка');
    },
    isLog: _0x269d9a,
  };
  ((_0x155b59.KizyacCheats = _0x28d103), 'object' == typeof module && module.exports && (module.exports = _0x28d103));
})('undefined' != typeof globalThis ? globalThis : this);


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


(function (_0x492fec) {
  'use strict';

  const _0x43c598 = _0x492fec.KizyacCore || ('function' == typeof require ? require('./core.js') : null),
    { N: _0x18f526 } = _0x43c598,
    _0x156071 = Object.freeze({
      openAt: 0x6,
      realities: 0xa,
      ranks: 0x18,
      runes: 0x3,
      reactions: 0x4,
      modified: 0x4,
      research: 'r14',
      run: 0xc80,
      seconds: 0x278d00,
    });
  function _0x150723(_0x29ecfb) {
    const _0x4be878 = _0x29ecfb.finale,
      _0x3ed61d = _0x43c598.ranks(_0x29ecfb),
      _0x514b2a = new Set(_0x29ecfb.glyphs.map((_0x2febf7) => _0x2febf7.id)),
      _0x2be0b9 = _0x29ecfb.lab?.['combos']['length'] || 0x0,
      _0x1afc70 = _0x29ecfb.materials?.['mods']['filter']((_0x34e15b) => 0x3 === _0x34e15b)['length'] || 0x0,
      _0x1eeed6 = _0x29ecfb.realities >= _0x156071.openAt,
      _0x2a7451 = _0x1eeed6 && _0x3ed61d >= _0x156071.ranks && _0x514b2a.size >= _0x156071.runes,
      _0x247d81 = _0x2a7451 && _0x2be0b9 >= _0x156071.reactions && _0x1afc70 >= _0x156071.modified,
      _0x1c6b4a = _0x4be878?.['run'] ?? null,
      _0x36121d = null !== _0x1c6b4a,
      _0x46a4ed = _0x4be878?.['endedAt'] ?? null;
    return {
      open: _0x1eeed6,
      ranks: _0x3ed61d,
      runeKinds: _0x514b2a,
      reactions: _0x2be0b9,
      modified: _0x1afc70,
      admission: _0x2a7451,
      stabilizer: _0x247d81,
      testRun: _0x1c6b4a,
      tested: _0x36121d,
      endedAt: _0x46a4ed,
      canTest:
        _0x247d81 &&
        _0x29ecfb.realities >= _0x156071.realities &&
        !_0x29ecfb.pendingGlyph &&
        !_0x29ecfb.challenge &&
        _0x43c598.has(_0x29ecfb, _0x156071.research) &&
        _0x29ecfb.run >= _0x156071.run &&
        !_0x36121d,
      canFinish:
        _0x247d81 &&
        _0x36121d &&
        _0x29ecfb.realities >= _0x156071.realities &&
        _0x29ecfb.simSeconds >= _0x156071.seconds &&
        !_0x29ecfb.pendingGlyph &&
        !_0x29ecfb.challenge &&
        null === _0x46a4ed,
    };
  }
  function _0x178bce(_0x564c3e) {
    if (void 0x0 === _0x564c3e.finale)
      return {
        valid: true,
      };
    const _0x57a101 = {
        valid: false,
        reason: 'Некорректная запись финального опыта',
      },
      _0x54cca4 = _0x564c3e.finale;
    if (!_0x54cca4 || 'object' != typeof _0x54cca4 || Array.isArray(_0x54cca4)) return _0x57a101;
    const { run: _0x1b13fd, endedAt: _0x140578 } = _0x54cca4;
    return (null !== _0x1b13fd &&
      (!_0x18f526.valid(_0x1b13fd) ||
        _0x1b13fd < _0x156071.run ||
        _0x1b13fd > _0x18f526.MAX ||
        _0x1b13fd > _0x564c3e.best + 0.000001)) ||
      (null !== _0x140578 &&
        (!Number.isFinite(_0x140578) || _0x140578 < _0x156071.seconds || _0x140578 > _0x564c3e.simSeconds)) ||
      (null !== _0x1b13fd && (!_0x150723(_0x564c3e).stabilizer || _0x564c3e.realities < _0x156071.realities)) ||
      (null === _0x1b13fd && null !== _0x140578)
      ? _0x57a101
      : {
          valid: true,
        };
  }
  const _0x236e8e = _0x43c598.restore;
  ((_0x43c598.restore = function (_0x3269bc, _0x54015e) {
    const _0x2517e1 = _0x236e8e(_0x3269bc, _0x54015e);
    let _0x3ba52a = _0x3269bc;
    if ('string' == typeof _0x3269bc)
      try {
        _0x3ba52a = JSON.parse(_0x3269bc);
      } catch (_0x255ac0) {
        _0x3ba52a = null;
      }
    if (_0x2517e1.valid && _0x3ba52a?.['finale']) {
      const { run: _0x4b8693, endedAt: _0x3e74e0 } = _0x3ba52a.finale;
      ((_0x2517e1.state.finale = {
        run: _0x4b8693,
        endedAt: _0x3e74e0,
      }),
        _0x178bce(_0x2517e1.state).valid || delete _0x2517e1.state.finale);
    }
    return _0x2517e1;
  }),
    (_0x43c598.Finale = {
      RULES: _0x156071,
      progress: _0x150723,
      record: function (_0x4eaa5d) {
        return (
          !!_0x150723(_0x4eaa5d).canTest &&
          ((_0x4eaa5d.finale = {
            run: _0x4eaa5d.run,
            endedAt: null,
          }),
          true)
        );
      },
      finish: function (_0x16eb73) {
        return (
          !!_0x150723(_0x16eb73).canFinish &&
          ((_0x16eb73.finale = {
            run: _0x16eb73.finale.run,
            endedAt: _0x16eb73.simSeconds,
          }),
          true)
        );
      },
      validate: _0x178bce,
    }),
    'object' == typeof module && module.exports && (module.exports = _0x43c598.Finale));
})('undefined' != typeof globalThis ? globalThis : this);


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


(function () {
  'use strict';

  const _0x271b03 = KizyacCheats,
    _0x168a08 = (_0x1bba63) => document.getElementById(_0x1bba63),
    _0x3f63ca = (_0x39807c) =>
      String(_0x39807c).replace(
        /[&<>"']/g,
        (_0x5b4f79) =>
          ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '\x22': '&quot;',
            '\x27': '&#39;',
          })[_0x5b4f79],
      ),
    _0x22dcfb = {
      am: 'Кизяк\x20в\x20банке',
      run: 'Добыто\x20за\x20цикл',
      total: 'Всего\x20добыто',
      best: 'Лучший цикл',
      iso: 'Изотопы',
      isoTotal: 'Всего изотопов',
      isoEpoch: 'Изотопы за эпоху',
      mass: 'Масса',
      massTotal: 'Всего массы',
      massCycle: 'Масса\x20за\x20реальность',
      cores: 'Ядра',
      coreTotal: 'Всего\x20ядер',
      tapLevel: 'Уровень клика',
      boosts: 'Усиления',
      resonance: 'Резонансы',
      ticks: 'Синхронизации',
      decays: 'Распады',
      decaysHere: 'Распады за эпоху',
      sings: 'Сингулярности',
      singsHere: 'Сингулярности\x20за\x20реальность',
      realities: 'Реальности',
      bestStage: 'Лучшая мутация (0–39)',
      clicks: 'Нажатия',
      'music.unlocked': 'Плеер\x20открыт',
      'music.customUnlocked': 'Импорт\x20музыки\x20открыт',
    };
  window.KizyacCheatUI = {
    init(_0x579bf6) {
      let _0x598c88 = null;
      function _0xf91dbf() {
        if (!_0x271b03.canAccess(_0x579bf6.state())) {
          let _0x256101 = '';
          try {
            _0x256101 = window.Native?.['getCheatChallenge']?.() || '';
          } catch (_0x47a1ef) {}
          return void _0x579bf6.modal(
            '<span class="eyebrow">РАЗРЕШЕНИЕ ВЛАДЕЛЬЦА</span><h2>Чит-режим</h2><p>Передай запрос владельцу игры и вставь ответ. Запрос действует 10 минут. Редактор откроется на 15 минут до перезапуска игры.</p><label class="field-label" for="cheat-request">Запрос с этого телефона</label><textarea id="cheat-request" rows="3" readonly>' +
              _0x3f63ca(_0x256101) +
              '</textarea><div class="modal-actions"><button class="secondary" data-act="cheat-copy">Скопировать запрос</button><button class="text-button" data-act="cheat-renew">Новый запрос</button></div><label class="field-label" for="cheat-code">Ответ владельца</label><textarea id="cheat-code" rows="3" maxlength="512" autocomplete="off" spellcheck="false" placeholder="KZA1.…"></textarea><p id="cheat-error" class="field-error" role="status"></p><button class="primary wide" data-act="cheat-unlock">Открыть редактор</button><p class="fineprint">Ответ одноразовый и подходит только к этому запросу. Изменения прогресса сохраняются.</p>',
          );
        }
        _0x598c88 = _0x579bf6.state();
        const _0x2e17e8 = _0x271b03.list(_0x598c88),
          _0x4e0914 = Object.keys(_0x22dcfb);
        (_0x2e17e8.sort((_0x1e777e, _0x53ac47) => {
          const _0x5dacee = _0x4e0914.indexOf(_0x1e777e.path),
            _0x96bca5 = _0x4e0914.indexOf(_0x53ac47.path);
          return (_0x5dacee < 0x0 ? 0x3e8 : _0x5dacee) - (_0x96bca5 < 0x0 ? 0x3e8 : _0x96bca5);
        }),
          _0x579bf6.modal(
            '<span class="eyebrow">ПОЛНЫЙ ДОСТУП</span><h2>Редактор кизяка</h2><p class="fineprint">Меняй валюты, уровни, мутации, открытия и остальные параметры. Сохранение остаётся зашифрованным.</p><div class="toggle-row"><div><b>Бесконечный кизяк</b><small>∞ в банке. Покупки не уменьшают запас.</small></div><button class="switch ' +
              (KizyacCore.infiniteAM(_0x579bf6.state()) ? 'on' : '') +
              '" data-act="cheat-infinity" role="switch" aria-label="Бесконечный кизяк" aria-checked="' +
              KizyacCore.infiniteAM(_0x579bf6.state()) +
              '"><i></i></button></div><div class="cheat-shortcuts"><button class="secondary wide" data-act="cheat-skins">Получить все скины</button><button class="secondary wide" data-act="cheat-awards">Получить все достижения</button><button class="danger wide" data-act="cheat-reset">Полностью сбросить прогресс…</button></div><label class="field-label" for="cheat-field">Параметр</label><select id="cheat-field">' +
              _0x2e17e8
                .map(
                  (_0x16582d) =>
                    '<option\x20value=\x22' +
                    _0x3f63ca(_0x16582d.path) +
                    '\x22>' +
                    _0x3f63ca(_0x22dcfb[_0x16582d.path] || _0x16582d.path) +
                    '</option>',
                )
                .join('') +
              '</select><label class="field-label" for="cheat-value">Новое значение</label><input id="cheat-value" autocomplete="off" spellcheck="false"><p id="cheat-value-help" class="fineprint"></p><p id="cheat-error" class="field-error" role="status"></p><button class="primary wide" data-act="cheat-apply">Применить значение</button><details class="cheat-raw"><summary>Все данные (JSON)</summary><p class="fineprint">Полный редактор сохранения. Большие валюты внутри JSON хранятся как показатели степени 10. Обычное поле выше принимает числа: 0, 1000000 или 1e1000.</p><textarea id="cheat-json" spellcheck="false" aria-label="Все значения игры">' +
              _0x3f63ca(JSON.stringify(_0x598c88, null, 0x2)) +
              '</textarea><button class="secondary wide" data-act="cheat-json-apply">Применить все данные</button></details>',
          ),
          _0x9caf1());
      }
      function _0x9caf1() {
        const _0x4f2bc6 = _0x168a08('cheat-field').value,
          _0x196745 = _0x271b03.list(_0x598c88).find((_0x974b8e) => _0x974b8e.path === _0x4f2bc6);
        ((_0x168a08('cheat-value').value =
          'am' === _0x4f2bc6 && KizyacCore.infiniteAM(_0x598c88)
            ? '∞'
            : _0x271b03.isLog(_0x4f2bc6)
              ? KizyacCore.N.valid(_0x196745.value)
                ? KizyacCore.N.format(_0x196745.value, 'scientific')
                : '0'
              : _0x196745.value),
          (_0x168a08('cheat-value-help').textContent =
            'number' === _0x196745.type
              ? _0x271b03.isLog(_0x4f2bc6)
                ? 'am' === _0x4f2bc6
                  ? 'Введи ∞ или infinity для бесконечного запаса. Обычное число выключит бесконечность.'
                  : 'Число целиком или научная запись, например 500000000 или 1e1000.'
                : 'Числовое\x20значение.\x20Уровни\x20и\x20счётчики\x20принимают\x20целые\x20числа\x20в\x20пределах\x20движка.'
              : 'boolean' === _0x196745.type
                ? 'true — включено, false — выключено.'
                : 'Текстовое значение. Полные списки меняются в редакторе JSON.'));
      }
      function _0xe1356d(_0x5a17f2) {
        try {
          const _0x168924 = _0x271b03.prepare(_0x579bf6.state(), _0x5a17f2);
          if (false === _0x579bf6.replace(_0x168924)) return;
          (_0x579bf6.close(),
            _0x579bf6.sound(false, false, 'unlock'),
            _0x579bf6.notify('Значения изменены. Чит-режим активен.'));
        } catch (_0x377bdc) {
          ((_0x168a08('cheat-error').textContent = _0x377bdc.message), _0x579bf6.sound(false, false, 'error'));
        }
      }
      function _0x1e0a27(_0x1841a4) {
        if (
          _0x1841a4.startsWith('cheat-') &&
          !['cheat-open', 'cheat-unlock', 'cheat-copy', 'cheat-renew'].includes(_0x1841a4) &&
          !_0x271b03.canAccess(_0x579bf6.state())
        )
          return (_0xf91dbf(), true);
        if (['cheat-skins', 'cheat-awards', 'cheat-reset', 'cheat-reset-confirm'].includes(_0x1841a4)) {
          if (!_0x271b03.canAccess(_0x579bf6.state())) return (_0xf91dbf(), true);
          if ('cheat-reset' === _0x1841a4)
            return (
              _0x579bf6.modal(
                '<span\x20class=\x22eyebrow\x22>ПОЛНЫЙ\x20СБРОС</span><h2>Удалить\x20весь\x20прогресс?</h2><p>Обнулятся\x20все\x20валюты,\x20помощники,\x20элементы,\x20модификации,\x20скины,\x20достижения,\x20музыка\x20и\x20настройки.\x20Доступ\x20к\x20чит-меню\x20тоже\x20закроется.</p><p\x20class=\x22reset-warning\x22>Автокопии\x20начнут\x20заменяться\x20новой\x20игрой.\x20Для\x20сохранения\x20старой\x20банки\x20сначала\x20сделай\x20экспорт.</p><div\x20class=\x22modal-actions\x22><button\x20class=\x22secondary\x22\x20data-act=\x22cheat-open\x22>Отмена</button><button\x20class=\x22danger\x22\x20data-act=\x22cheat-reset-confirm\x22>Удалить\x20и\x20начать\x20заново</button></div>',
              ),
              true
            );
          if ('cheat-reset-confirm' === _0x1841a4) {
            const _0x4828bb = _0x271b03.reset(_0x579bf6.state());
            if (false === _0x579bf6.replace(_0x4828bb)) return true;
            try {
              window.Native && Native.clearMusicAfterReset && Native.clearMusicAfterReset();
            } catch (_0x5a07c0) {}
            return (
              _0x579bf6.close(),
              KizyacCore.Lab.queueEffect(_0x579bf6.state(), 'full'),
              _0x579bf6.render(),
              _0x579bf6.notify('Новая игра. Прогресс полностью сброшен.'),
              true
            );
          }
          return (
            _0x271b03.grant(_0x579bf6.state(), 'cheat-skins' === _0x1841a4 ? 'skins' : 'awards'),
            _0x579bf6.save(),
            _0x579bf6.render(true),
            _0x579bf6.sound(false, false, 'unlock'),
            _0x579bf6.notify('cheat-skins' === _0x1841a4 ? 'Все\x20скины\x20открыты' : 'Все\x20достижения\x20получены'),
            _0xf91dbf(),
            true
          );
        }
        if ('cheat-copy' === _0x1841a4) {
          try {
            Native.copyCheatChallenge();
          } catch (_0x3c5cbc) {
            _0x168a08('cheat-request').select();
          }
          return true;
        }
        if ('cheat-renew' === _0x1841a4) {
          try {
            Native.renewCheatChallenge();
          } catch (_0x147d3c) {}
          return (_0xf91dbf(), true);
        }
        if ('cheat-open' === _0x1841a4) return (_0xf91dbf(), true);
        if ('cheat-unlock' === _0x1841a4) {
          const _0x41d99c = _0x579bf6.state(),
            _0x54a55e = _0x168a08('cheat-code'),
            _0x399c6e = document.querySelector('[data-act=\x22cheat-unlock\x22]');
          if (_0x399c6e.disabled) return true;
          ((_0x399c6e.disabled = true), (_0x399c6e.textContent = 'Проверяем…'));
          const _0x56af90 = _0x54a55e.value.trim();
          return (
            (_0x54a55e.value = ''),
            _0x271b03.authorize(_0x41d99c, _0x56af90).then((_0x155d35) => {
              if (_0x579bf6.state() === _0x41d99c && _0x168a08('cheat-code')) {
                if (_0x155d35) (_0x579bf6.save(), _0x579bf6.sound(false, false, 'unlock'), _0xf91dbf());
                else {
                  const _0x26c6bc = _0x271b03.waitSeconds();
                  ((_0x168a08('cheat-error').textContent = _0x26c6bc
                    ? 'Слишком\x20много\x20попыток.\x20Подожди\x20' + _0x26c6bc + ' сек.'
                    : 'Неверный\x20ответ,\x20другой\x20запрос\x20или\x20срок\x20истёк'),
                    (_0x399c6e.disabled = false),
                    (_0x399c6e.textContent = 'Открыть редактор'),
                    _0x579bf6.sound(false, false, 'error'));
                }
              }
            }),
            true
          );
        }
        if ('cheat-infinity' === _0x1841a4)
          return (
            _0x271b03.setInfinite(_0x579bf6.state(), !KizyacCore.infiniteAM(_0x579bf6.state())),
            _0x579bf6.save(),
            _0x579bf6.render(),
            _0x579bf6.sound(false, false, 'toggle'),
            _0xf91dbf(),
            true
          );
        if ('cheat-apply' === _0x1841a4) {
          try {
            const _0x3be0ec = structuredClone(_0x598c88);
            (_0x271b03.set(_0x3be0ec, _0x168a08('cheat-field').value, _0x168a08('cheat-value').value),
              _0xe1356d(_0x3be0ec));
          } catch (_0x51197a) {
            _0x168a08('cheat-error').textContent = _0x51197a.message;
          }
          return true;
        }
        if ('cheat-json-apply' === _0x1841a4) {
          try {
            _0xe1356d(JSON.parse(_0x168a08('cheat-json').value));
          } catch (_0x57e039) {
            _0x168a08('cheat-error').textContent = 'Ошибка в JSON: ' + _0x57e039.message;
          }
          return true;
        }
        return false;
      }
      return (
        document.addEventListener('change', (_0x22af8b) => {
          'cheat-field' === _0x22af8b.target.id && _0x9caf1();
        }),
        document.addEventListener('keydown', (_0x33cd96) => {
          'Enter' === _0x33cd96.key &&
            'cheat-code' === _0x33cd96.target.id &&
            (_0x33cd96.preventDefault(), _0x1e0a27('cheat-unlock'));
        }),
        {
          settings: function () {
            return (
              '<div class="cheat-entry"><span><b>Чит-режим</b><small>' +
              (_0x271b03.canAccess(_0x579bf6.state())
                ? 'Редактор\x20параметров\x20открыт'
                : 'Разрешение\x20от\x20владельца') +
              '</small></span><button class="secondary" data-act="cheat-open">' +
              (_0x271b03.canAccess(_0x579bf6.state()) ? 'Открыть' : 'Получить доступ') +
              '</button></div>'
            );
          },
          action: _0x1e0a27,
        }
      );
    },
  };
})();


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


(function () {
  'use strict';

  let _0xe2a957 = false;
  (document.addEventListener('keydown', () => {
    _0xe2a957 = true;
  }),
    document.addEventListener(
      'pointerdown',
      () => {
        _0xe2a957 = false;
      },
      {
        passive: true,
      },
    ));
  const _0x5bce34 = 'cubic-bezier(.23,1,.32,1)',
    _0x16c872 = new WeakMap(),
    _0x42fd5b = new WeakMap(),
    _0x2e84a7 = new WeakMap();
  function _0x240e84(_0xf3fc5d) {
    return (
      !_0xe2a957 &&
      _0xf3fc5d.settings.motion &&
      !matchMedia('(prefers-reduced-motion:\x20reduce)').matches &&
      !document.hidden
    );
  }
  function _0x3d5cbb(_0x5dfb9b, _0x584590, _0x503c7f, _0x90ff3a) {
    if (!_0x5dfb9b) return;
    if ((_0x16c872.has(_0x5dfb9b) && _0x16c872.get(_0x5dfb9b).cancel(), !_0x240e84(_0x90ff3a))) return;
    const _0x5e8311 = _0x5dfb9b.animate(_0x584590, {
      duration: 0xc8,
      easing: _0x5bce34,
      ..._0x503c7f,
    });
    return (
      _0x16c872.set(_0x5dfb9b, _0x5e8311),
      (_0x5e8311.onfinish = () => {
        _0x16c872.get(_0x5dfb9b) === _0x5e8311 && _0x16c872['delete'](_0x5dfb9b);
      }),
      _0x5e8311
    );
  }
  let _0x5ef06e = 0x0,
    _0x17d22a = 0x0;
  window.KizyacMotion = {
    allowed: _0x240e84,
    run: _0x3d5cbb,
    enter: function (_0x364ea3, _0xd57ab0, _0x1173f4 = 0x1) {
      _0x364ea3 &&
        (_0x3d5cbb(
          _0x364ea3,
          [
            {
              opacity: 0x0,
              transform: 'translate3d(' + 0xc * _0x1173f4 + 'px,0,0)',
            },
            {
              opacity: 0x1,
              transform: 'translate3d(0,0,0)',
            },
          ],
          {
            duration: 0xc8,
          },
          _0xd57ab0,
        ),
        _0x240e84(_0xd57ab0)) &&
        Array.from(_0x364ea3.querySelectorAll('.card,.award,.skin-card,.track-item'))
          .filter((_0x3c9fdb) => !_0x3c9fdb.hidden && _0x3c9fdb.getBoundingClientRect().top < innerHeight)
          .slice(0x0, 0x5)
          .forEach((_0xaf454e, _0x563c70) =>
            _0x3d5cbb(
              _0xaf454e,
              [
                {
                  opacity: 0.35,
                  transform: 'translateY(7px)',
                },
                {
                  opacity: 0x1,
                  transform: 'translateY(0)',
                },
              ],
              {
                duration: 0xb4,
                delay: 0x1e * _0x563c70,
              },
              _0xd57ab0,
            ),
          );
    },
    tap: function (_0x81068, _0x321b13) {
      _0x81068 &&
        _0x240e84(_0x321b13) &&
        (clearTimeout(_0x42fd5b.get(_0x81068)),
        _0x81068.classList.add('tap-feedback'),
        _0x42fd5b.set(
          _0x81068,
          setTimeout(() => _0x81068.classList.remove('tap-feedback'), 0x46),
        ));
    },
    purchase: function (_0x44fcae, _0x4bfb8a) {
      _0x44fcae &&
        _0x240e84(_0x4bfb8a) &&
        (clearTimeout(_0x42fd5b.get(_0x44fcae)),
        _0x44fcae.classList.add('purchase-feedback'),
        _0x42fd5b.set(
          _0x44fcae,
          setTimeout(() => _0x44fcae.classList.remove('purchase-feedback'), 0xa0),
        ));
    },
    indicator: function (_0x394457, _0x304b2a, _0x20c25e) {
      if (!_0x394457 || _0x394457.hidden) return;
      const _0x5aac9e = _0x394457.querySelector(_0x304b2a);
      if (!_0x5aac9e || _0x5aac9e.hidden) return;
      let _0x26fae4 = _0x394457.querySelector(':scope>.motion-indicator');
      _0x26fae4 ||
        ((_0x26fae4 = document.createElement('i')),
        (_0x26fae4.className = 'motion-indicator'),
        _0x26fae4.setAttribute('aria-hidden', 'true'),
        _0x394457.append(_0x26fae4));
      const _0x46159f = _0x394457.getBoundingClientRect(),
        _0x439d14 = _0x5aac9e.getBoundingClientRect(),
        _0x475838 = [_0x439d14.left - _0x46159f.left, _0x439d14.width, _0x394457.hidden].join('|');
      _0x2e84a7.get(_0x394457) !== _0x475838 &&
        (_0x2e84a7.set(_0x394457, _0x475838),
        (_0x26fae4.style.transition = _0x240e84(_0x20c25e)
          ? 'transform\x20200ms\x20' + _0x5bce34 + ',opacity 150ms ' + _0x5bce34
          : 'none'),
        (_0x26fae4.style.transform =
          'translateX(' +
          (_0x439d14.left - _0x46159f.left + 0x9) +
          'px) scaleX(' +
          Math.max(0x1, _0x439d14.width - 0x12) +
          ')'),
        (_0x26fae4.style.opacity = '1'));
    },
    ring: function (_0x25f1bd, _0x234cb4, _0x1eae7e = false) {
      return _0x3d5cbb(
        _0x25f1bd,
        [
          {
            opacity: _0x1eae7e ? 0.8 : 0.5,
            transform: 'translate(-50%,-50%)\x20scale(.84)',
          },
          {
            opacity: 0x0,
            transform: 'translate(-50%,-50%) scale(1.2)',
          },
        ],
        {
          duration: 0x104,
        },
        _0x234cb4,
      );
    },
    tapGain: function (_0x104995, _0x1c55ae, _0x214ac2) {
      const _0x2cc58f = performance.now();
      if (!_0x240e84(_0x1c55ae) || _0x2cc58f - _0x5ef06e < 0x82 || _0x17d22a >= 0x4) return;
      ((_0x5ef06e = _0x2cc58f), _0x17d22a++);
      const _0x31dc13 = document.createElement('span');
      ((_0x31dc13.className = 'tap-gain'),
        (_0x31dc13.textContent = _0x214ac2),
        (_0x31dc13.style.left = (_0x17d22a % 0x2 ? 0x3c : 0x16) + '%'),
        _0x104995.append(_0x31dc13));
      const _0x1f7969 = _0x3d5cbb(
          _0x31dc13,
          [
            {
              opacity: 0.9,
              transform: 'translate3d(0,6px,0)',
            },
            {
              opacity: 0x0,
              transform: 'translate3d(0,-24px,0)',
            },
          ],
          {
            duration: 0x104,
          },
          _0x1c55ae,
        ),
        _0x41af97 = () => {
          (_0x31dc13.remove(), (_0x17d22a = Math.max(0x0, _0x17d22a - 0x1)));
        };
      _0x1f7969 ? ((_0x1f7969.onfinish = _0x41af97), (_0x1f7969.oncancel = _0x41af97)) : _0x41af97();
    },
    ease: _0x5bce34,
  };
})();


(function () {
  'use strict';

  window.KizyacAtmosphere = {
    init(_0x34bdc1) {
      const _0x47b2af = (_0x575ef7) => document.getElementById(_0x575ef7),
        _0x490ea8 = KizyacThemes,
        _0x4b9553 = KizyacMotion,
        _0x147419 = document.createElement('div');
      ((_0x147419.id = 'theme-backdrop'),
        _0x147419.setAttribute('aria-hidden', 'true'),
        (_0x147419.innerHTML = '<div class="theme-layer"></div><div class="theme-layer"></div>'),
        document.body.prepend(_0x147419));
      const _0x5a279d = document.createElement('div');
      ((_0x5a279d.id = 'evolution-banner'),
        (_0x5a279d.className = 'evolution-banner'),
        _0x5a279d.setAttribute('role', 'status'),
        (_0x5a279d.innerHTML =
          '<span class="evolution-icon"><svg><use href="#i-dna"/></svg></span><span><small>НОВАЯ МУТАЦИЯ</small><b></b><em></em></span>'),
        document.body.append(_0x5a279d));
      let _0x5bf865,
        _0x5b0ce8 = '',
        _0x443289 = '',
        _0xe1668b = null,
        _0x4cc11a = 0x0,
        _0x15d02e = null;
      return {
        refresh: function () {
          const _0x79069e = _0x34bdc1.state(),
            _0x197fd0 = _0x490ea8.resolve(_0x79069e);
          if (
            (_0x79069e.cosmetics.themesSeen.includes(_0x197fd0.stage) ||
              _0x79069e.cosmetics.themesSeen.push(_0x197fd0.stage),
            _0x443289 !== _0x197fd0.id)
          ) {
            const _0x2d8097 = _0xe1668b,
              _0x36c875 = '' === _0x443289;
            ((_0x443289 = _0x197fd0.id), (_0xe1668b = _0x197fd0.stage));
            const _0x1cfba5 = _0x36c875 ? _0x4cc11a : 0x1 - _0x4cc11a,
              _0x1029b6 = _0x147419.children[_0x1cfba5];
            ((_0x1029b6.innerHTML = _0x490ea8.art(_0x197fd0)),
              (_0x1029b6.style.opacity = '1'),
              _0x36c875 || (_0x147419.children[_0x4cc11a].style.opacity = '0'),
              (_0x4cc11a = _0x1cfba5));
            for (const [_0x543944, _0x367702] of Object.entries({
              bg: _0x197fd0.bg,
              panel: _0x197fd0.panel,
              line: _0x197fd0.line,
              muted: _0x197fd0.muted,
            }))
              document.documentElement.style.setProperty('--' + _0x543944, _0x367702);
            ((document.body.dataset.theme = _0x197fd0.id), (document.body.dataset.themeFamily = _0x197fd0.kind));
            const _0x2506b6 = _0x47b2af('theme-caption');
            (_0x2506b6 && (_0x2506b6.textContent = _0x197fd0.name),
              !_0x36c875 &&
                _0x197fd0.stage > _0x2d8097 &&
                (_0x34bdc1.sound(false, false, 'evolve'),
                clearTimeout(_0x5bf865),
                (_0x5a279d.querySelector('b').textContent = KizyacCore.STAGE_NAMES[_0x197fd0.stage]),
                (_0x5a279d.querySelector('em').textContent = _0x197fd0.name),
                _0x5a279d.classList.add('show'),
                (_0x5bf865 = setTimeout(() => _0x5a279d.classList.remove('show'), 0xa28)),
                _0x4b9553.ring(_0x47b2af('reward-ring'), _0x79069e, true),
                _0x15d02e && _0x15d02e.cancel(),
                (_0x15d02e = _0x4b9553.run(
                  _0x47b2af('jar-art'),
                  [
                    {
                      opacity: 0.4,
                      transform: 'translateY(7px)\x20scale(.96)',
                    },
                    {
                      opacity: 0x1,
                      transform: 'translateY(0)\x20scale(1)',
                    },
                  ],
                  {
                    duration: 0x104,
                  },
                  _0x79069e,
                ))));
          }
          const _0x20601c = document.querySelector('.nav'),
            _0x5c91cd = document.querySelector('.page.active .tabs'),
            _0x37530f = [
              innerWidth,
              _0x20601c.hidden,
              _0x20601c.querySelectorAll('button:not([hidden])').length,
              _0x20601c.querySelector('.selected')?.['dataset']['page'],
              _0x5c91cd?.['hidden'],
              _0x5c91cd?.['querySelector']('.selected')?.['dataset']['sub'],
              _0x79069e.settings.motion,
            ].join('|');
          _0x37530f !== _0x5b0ce8 &&
            ((_0x5b0ce8 = _0x37530f),
            requestAnimationFrame(() => {
              (_0x4b9553.indicator(_0x20601c, '.selected', _0x79069e),
                _0x5c91cd && _0x4b9553.indicator(_0x5c91cd, '.selected', _0x79069e));
            }));
        },
        theme: () => _0x490ea8.resolve(_0x34bdc1.state()),
      };
    },
  };
})();


(function () {
  'use strict';

  const _0x1fb341 = KizyacCore,
    _0x55ddf4 = KizyacMedia,
    _0x880adc = _0x1fb341.N,
    _0xbf781d = (_0x31d01b) => document.getElementById(_0x31d01b),
    _0x1124f1 = (_0x29b960) =>
      String(_0x29b960).replace(
        /[&<>"']/g,
        (_0x55ccda) =>
          ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '\x22': '&quot;',
            '\x27': '&#39;',
          })[_0x55ccda],
      ),
    _0x163b4b = (_0x1127e6) => '<svg><use\x20href=\x22#i-' + _0x1127e6 + '\x22/></svg>',
    _0x448f2b = (_0x2c1785) => {
      const _0x356355 = Math.floor((_0x2c1785 || 0x0) / 0x3e8);
      return Math.floor(_0x356355 / 0x3c) + ':' + String(_0x356355 % 0x3c).padStart(0x2, '0');
    };
  window.KizyacExtras = {
    init(_0x189a59) {
      let _0x24f77e = 0x0,
        _0x309827 = 0x0,
        _0x889f74 = null,
        _0x35d86d = null,
        _0x36a79c = {
          configured: false,
          time: 0x0,
          error: '',
        },
        _0x1b8ac4 = null,
        _0x223b13 = false,
        _0x134c48 = false,
        _0x574122 = -0x1,
        _0x41eba7 = false,
        _0x1774f3 = 0x0,
        _0x414fb0 = null,
        _0x4d5c3e = null,
        _0x56afec = 0x0,
        _0x116f03 = 0x0,
        _0x247f3e = 0x0,
        _0x3ba229 = 0x0;
      const _0x572459 = () => _0x189a59.state(),
        _0x4ee464 = () => window.Native && 'function' == typeof Native.musicCommand;
      let _0x417be2 = 0x0,
        _0x454fdf = false;
      const _0x11e4f2 = new Map(),
        _0x417070 = () => _0x55ddf4.tracks(_0x572459());
      function _0x31d773(_0x1cd598, _0x10ceea = '') {
        if (_0x4ee464()) return void Native.musicCommand(_0x1cd598, String(_0x10ceea));
        const _0x2a6060 = _0x572459();
        if (_0x2a6060.music.unlocked) {
          if (
            (_0x35d86d ||
              ((_0x35d86d = new Audio()),
              (_0x35d86d.preload = 'metadata'),
              (_0x35d86d.onloadedmetadata = () => {
                ((_0x35d86d.currentTime = Math.min(_0x2a6060.music.position / 0x3e8, _0x35d86d.duration || 0x0)),
                  _0x3518e7());
              }),
              (_0x35d86d.ontimeupdate = _0x3518e7),
              (_0x35d86d.onplay = _0x3518e7),
              (_0x35d86d.onpause = _0x3518e7),
              (_0x35d86d.onended = () => {
                'one' === _0x2a6060.music.repeat
                  ? ((_0x35d86d.currentTime = 0x0), _0x35d86d.play()['catch'](_0x408aa2))
                  : 'all' === _0x2a6060.music.repeat
                    ? (_0x31d773('next'), _0x31d773('play'))
                    : _0x3518e7();
              }),
              (_0x35d86d.onerror = () => _0x408aa2())),
            'configure' === _0x1cd598)
          )
            return (
              (JSON.parse(_0x10ceea || '{}').keepPlayback && !_0x35d86d.paused) || (_0x35d86d.pause(), _0x17ea92()),
              void _0x3518e7()
            );
          if ((_0x35d86d.src || _0x17ea92(), 'play' === _0x1cd598)) _0x35d86d.play()['catch'](_0x408aa2);
          else {
            if ('pause' === _0x1cd598) _0x35d86d.pause();
            else {
              if (['track', 'next', 'previous'].includes(_0x1cd598)) {
                const _0x3e45ba = !_0x35d86d.paused,
                  _0xc81b5 = _0x417070();
                ((_0x2a6060.music.track =
                  'track' === _0x1cd598
                    ? Math.max(0x0, Math.min(_0xc81b5.length - 0x1, +_0x10ceea))
                    : (_0x2a6060.music.track + ('previous' === _0x1cd598 ? _0xc81b5.length - 0x1 : 0x1)) %
                      _0xc81b5.length),
                  (_0x2a6060.music.activeId = _0xc81b5[_0x2a6060.music.track].id),
                  (_0x2a6060.music.position = 0x0),
                  _0x17ea92(),
                  _0x3e45ba && _0x35d86d.play()['catch'](_0x408aa2));
              } else
                'seek' === _0x1cd598
                  ? (_0x35d86d.currentTime = Number(_0x10ceea) / 0x3e8)
                  : 'volume' === _0x1cd598 && (_0x35d86d.volume = +_0x10ceea);
            }
          }
          _0x3518e7();
        }
        function _0x17ea92() {
          const _0x351602 = _0x417070()[_0x2a6060.music.track] || _0x417070()[0x0];
          ((_0x35d86d.src = _0x351602.file ? '../res/raw/' + _0x351602.file : _0x11e4f2.get(_0x351602.id) || ''),
            (_0x35d86d.volume = _0x2a6060.music.volume));
        }
      }
      function _0x408aa2() {
        _0x189a59.notify('Не удалось открыть трек. Добавь файл снова через «Свои мелодии».');
      }
      function _0x3518e7() {
        _0x35d86d &&
          _0x9dfdd({
            ..._0x572459().music,
            playing: !_0x35d86d.paused,
            loading: !_0x35d86d.duration,
            duration: Number.isFinite(_0x35d86d.duration) ? 0x3e8 * _0x35d86d.duration : 0x0,
            position: 0x3e8 * _0x35d86d.currentTime,
            error: '',
            missing: _0x572459()
              .music.tracks.filter((_0x35cd6c) => !_0x11e4f2.has(_0x35cd6c.id))
              .map((_0x581b9c) => _0x581b9c.id),
          });
      }
      function _0x328484(_0x295afa = false) {
        ((_0x41eba7 = false),
          (_0x889f74 = null),
          (_0x417be2 = 0x0),
          _0x572459().music.unlocked &&
            ((_0x41eba7 = true),
            _0x31d773(
              'configure',
              JSON.stringify({
                ..._0x572459().music,
                keepPlayback: _0x295afa,
                session: ++_0x1774f3,
              }),
            )));
      }
      function _0x9dfdd(_0x273adf) {
        const _0x2baee8 = _0x572459();
        if (
          !_0x2baee8.music.unlocked ||
          !_0x41eba7 ||
          !_0x273adf ||
          'object' != typeof _0x273adf ||
          (_0x4ee464() && _0x273adf.session !== _0x1774f3)
        )
          return;
        const _0x25e718 = Date.now();
        (_0x889f74 &&
          _0x889f74.playing &&
          _0x417be2 &&
          (_0x2baee8.music.listenedSeconds += Math.min(0x2, Math.max(0x0, (_0x25e718 - _0x417be2) / 0x3e8))),
          (_0x417be2 = _0x25e718),
          (_0x889f74 = _0x273adf));
        const _0x19f469 = _0x417070();
        let _0x4e1621 = _0x19f469.findIndex((_0x54950d) => _0x54950d.id === _0x273adf.activeId);
        (_0x4e1621 < 0x0 &&
          (_0x4e1621 = Math.max(0x0, Math.min(_0x19f469.length - 0x1, Math.floor(_0x273adf.track || 0x0)))),
          (_0x2baee8.music.track = _0x4e1621),
          (_0x2baee8.music.activeId = _0x19f469[_0x4e1621].id));
        for (const _0x5c3e37 of ['position', 'volume', 'repeat'])
          null != _0x273adf[_0x5c3e37] && (_0x2baee8.music[_0x5c3e37] = _0x273adf[_0x5c3e37]);
        _0x4b9036();
      }
      function _0x10f2d6() {
        if (_0x41eba7 && _0x572459().music.unlocked) {
          if (_0x4ee464())
            try {
              _0x9dfdd(JSON.parse(Native.getMusicState()));
            } catch (_0x56be35) {}
          else _0x35d86d && _0x3518e7();
        }
      }
      function _0x4b9036() {
        const _0x5428b6 = _0x572459(),
          _0x54de78 = _0x417070(),
          _0x34143e = _0x889f74 || {
            ..._0x5428b6.music,
            playing: false,
            duration: _0x54de78[_0x5428b6.music.track].duration,
          },
          _0x12943a = _0x54de78[_0x5428b6.music.track] || _0x54de78[0x0];
        if (
          (_0xbf781d('radio-title') && (_0xbf781d('radio-title').textContent = _0x12943a.name),
          _0xbf781d('radio-toggle') &&
            ((_0xbf781d('radio-toggle').innerHTML = _0x163b4b(
              _0x34143e.playing || _0x34143e.requested ? 'pause' : 'play',
            )),
            _0xbf781d('radio-toggle').setAttribute(
              'aria-label',
              _0x34143e.playing || _0x34143e.requested ? 'Пауза' : 'Включить\x20музыку',
            )),
          _0xbf781d('reactor-radio-toggle') &&
            ((_0xbf781d('reactor-radio-toggle').innerHTML = _0x163b4b(
              _0x34143e.playing || _0x34143e.requested ? 'pause' : 'play',
            )),
            _0xbf781d('reactor-radio-toggle').setAttribute(
              'aria-label',
              _0x34143e.playing || _0x34143e.requested ? 'Пауза музыки' : 'Включить музыку',
            )),
          _0xbf781d('radio-strip').classList.toggle('playing', !!_0x34143e.playing),
          !_0x223b13 || !_0xbf781d('player-title'))
        )
          return;
        ((_0xbf781d('player-title').textContent = _0x12943a.name),
          (_0xbf781d('player-tag').textContent = _0x34143e.loading
            ? 'ЗАГРУЗКА ТРЕКА'
            : _0x34143e.playing
              ? 'СЕЙЧАС\x20ИГРАЕТ'
              : _0x12943a.tag),
          (_0xbf781d('player-play').innerHTML = _0x163b4b(_0x34143e.playing || _0x34143e.requested ? 'pause' : 'play')),
          _0xbf781d('player-play').setAttribute(
            'aria-label',
            _0x34143e.playing || _0x34143e.requested ? 'Пауза' : 'Воспроизвести',
          ),
          _0xbf781d('player-record').classList.toggle('playing', !!_0x34143e.playing));
        const _0x4e235b = _0x34143e.duration || _0x12943a.duration || 0x1,
          _0x489f1f = Math.min(_0x34143e.position || 0x0, _0x4e235b),
          _0x5f1374 = _0xbf781d('player-seek');
        ((_0x5f1374.max = String(_0x4e235b)),
          (_0xbf781d('player-duration').textContent = _0x448f2b(_0x4e235b)),
          _0x134c48 ||
            ((_0x5f1374.value = String(_0x489f1f)),
            (_0xbf781d('player-time').textContent = _0x448f2b(_0x489f1f)),
            (_0xbf781d('player-fill').style.transitionDuration =
              _0x34143e.playing && _0x574122 === _0x5428b6.music.track ? '500ms' : '0ms'),
            (_0xbf781d('player-fill').style.transform = 'scaleX(' + (_0x489f1f / _0x4e235b || 0x0) + ')')),
          (_0x574122 = _0x5428b6.music.track),
          (_0xbf781d('player-repeat').textContent = {
            all: 'Все\x20треки',
            one: 'Один\x20трек',
            off: 'Без повтора',
          }[_0x5428b6.music.repeat]),
          _0xbf781d('player-repeat').setAttribute('aria-label', 'Повтор:\x20' + _0xbf781d('player-repeat').textContent),
          document.querySelectorAll('[data-act="music-track"]').forEach((_0x4b2b76) => {
            const _0xfd726e = +_0x4b2b76.dataset.id,
              _0x384eaa = _0x54de78[_0xfd726e],
              _0x2af626 = _0xfd726e === _0x5428b6.music.track,
              _0x4281a1 = _0x384eaa && Array.isArray(_0x34143e.missing) && _0x34143e.missing.includes(_0x384eaa.id);
            (_0x4b2b76.classList.toggle('selected', _0x2af626),
              _0x4b2b76.setAttribute('aria-pressed', String(_0x2af626)),
              _0x4b2b76.closest('.track-item')?.['classList']['toggle']('missing', !!_0x4281a1),
              (_0x4b2b76.querySelector('.track-status').textContent = _0x4281a1
                ? 'ДОБАВЬ СНОВА'
                : _0x2af626
                  ? _0x34143e.playing
                    ? 'ИГРАЕТ'
                    : 'ВЫБРАН'
                  : 'СЛУШАТЬ'));
          }),
          (_0xbf781d('player-error').textContent = _0x34143e.error || ''),
          (_0xbf781d('player-error').hidden = !_0x34143e.error),
          _0xbf781d('music-import') &&
            ((_0xbf781d('music-import').disabled = _0x454fdf),
            (_0xbf781d('music-import').textContent = _0x454fdf ? 'Добавляем…' : '+ Свои мелодии')),
          _0xbf781d('music-import-status') &&
            ((_0xbf781d('music-import-status').hidden = !_0x454fdf),
            (_0xbf781d('music-import-status').textContent = 'Копируем и проверяем аудиофайлы…')));
      }
      function _0xdf32d1() {
        ((_0x223b13 = true), (_0x134c48 = false), (_0x574122 = -0x1));
        const _0x1ea3b2 = _0x572459();
        if (!_0x1ea3b2.music.unlocked)
          return (
            _0x189a59.modal(
              '<span\x20class=\x22eyebrow\x22>РАДИО\x20ИЗ\x20ПОДВАЛА</span><div\x20class=\x22locked-radio\x22>' +
                _0x163b4b('headphones') +
                '</div><h2>Звук твоей лаборатории</h2><p>Два трека внутри игры. Импорт своих мелодий открывается отдельно за 100 миллионов. Плеер остаётся после любых сбросов.</p><div class="music-offer"><small>ОДНО РАЗБЛОКИРОВАНИЕ</small><b>500 000 000</b><span>кизяка · 500 миллионов</span></div><p class="fineprint" id="music-wallet"></p><button class="primary wide" data-act="music-unlock" id="music-unlock">Разблокировать плеер</button><p class="fineprint">Цена спишется из текущего запаса. Радиация и добытое за цикл сохранятся.</p>',
            ),
            void _0x1cc8fd()
          );
        (_0x189a59.modal(
          '<div class="player-heading"><span class="eyebrow">КИЗЯК FM / ' +
            String(_0x417070().length).padStart(0x2, '0') +
            ' ЗАПИСИ</span><span class="offline-tag">ОФЛАЙН</span></div><div class="player-record" id="player-record"><div class="record-rings"></div><div class="record-label">' +
            _0x163b4b('rad') +
            '<span>КИЗЯК<br>FM</span></div></div><div\x20class=\x22player-now\x22><span\x20class=\x22eyebrow\x22\x20id=\x22player-tag\x22>РАДИО\x20ИЗ\x20ПОДВАЛА</span><h2\x20id=\x22player-title\x22></h2></div><div\x20class=\x22seek-wrap\x22><div\x20class=\x22seek-track\x22><i\x20id=\x22player-fill\x22></i></div><input\x20type=\x22range\x22\x20min=\x220\x22\x20max=\x22180000\x22\x20step=\x221000\x22\x20id=\x22player-seek\x22\x20data-media=\x22seek\x22\x20aria-label=\x22Позиция\x20трека\x22></div><div\x20class=\x22player-times\x22><span\x20id=\x22player-time\x22>0:00</span><span\x20id=\x22player-duration\x22>0:00</span></div><div\x20class=\x22player-controls\x22><button\x20class=\x22icon-btn\x22\x20data-act=\x22music-previous\x22\x20aria-label=\x22Предыдущий\x20трек\x22>' +
            _0x163b4b('previous') +
            '</button><button\x20class=\x22player-play\x22\x20id=\x22player-play\x22\x20data-act=\x22music-toggle\x22\x20aria-label=\x22Воспроизвести\x22>' +
            _0x163b4b('play') +
            '</button><button class="icon-btn" data-act="music-next" aria-label="Следующий трек">' +
            _0x163b4b('next') +
            '</button></div><div class="player-options"><button class="secondary" data-act="music-repeat" id="player-repeat">Все треки</button><label for="music-volume">Музыка <b id="music-volume-label">' +
            Math.round(0x64 * _0x1ea3b2.music.volume) +
            '%</b></label><input\x20type=\x22range\x22\x20id=\x22music-volume\x22\x20data-media=\x22volume\x22\x20min=\x220\x22\x20max=\x22100\x22\x20value=\x22' +
            Math.round(0x64 * _0x1ea3b2.music.volume) +
            '" aria-label="Громкость музыки"></div><div class="music-library-heading"><span>ТВОЯ РАДИОТЕКА</span><button class="secondary" data-act="music-import" id="music-import" ' +
            (_0x1ea3b2.music.customUnlocked ? '' : 'hidden') +
            '>+ Свои мелодии</button></div>' +
            (_0x572459().music.customUnlocked
              ? ''
              : '<div\x20class=\x22custom-offer\x22><div><b>Твоя\x20музыка</b><p>Разовая\x20покупка.\x20После\x20открытия\x20добавляй\x20свои\x20треки\x20с\x20телефона.</p></div><button\x20class=\x22secondary\x22\x20id=\x22custom-music-unlock\x22\x20data-act=\x22custom-music-unlock\x22>Открыть\x20·\x20100\x20млн</button><small\x20id=\x22custom-music-wallet\x22></small></div>') +
            '<p class="import-progress" id="music-import-status" hidden></p><div class="track-list">' +
            _0x417070()
              .map(
                (_0x192edb, _0x5a0829) =>
                  '<div\x20class=\x22track-item\x22><button\x20class=\x22track-row\x22\x20data-act=\x22music-track\x22\x20data-id=\x22' +
                  _0x5a0829 +
                  '"><span class="track-number">' +
                  String(_0x5a0829 + 0x1).padStart(0x2, '0') +
                  '</span><span><b>' +
                  _0x1124f1(_0x192edb.name) +
                  '</b><small>' +
                  _0x448f2b(_0x192edb.duration) +
                  '\x20·\x20' +
                  (_0x5a0829 < 0x2 ? 'В\x20ИГРЕ' : 'ТВОЯ МЕЛОДИЯ') +
                  '</small></span><span class="track-status">СЛУШАТЬ</span></button>' +
                  (_0x5a0829 >= 0x2
                    ? '<button\x20class=\x22track-remove\x22\x20data-act=\x22music-remove\x22\x20data-id=\x22' +
                      _0x192edb.id +
                      '\x22\x20aria-label=\x22Убрать\x20' +
                      _0x1124f1(_0x192edb.name) +
                      ' из плеера">' +
                      _0x163b4b('close') +
                      '</button>'
                    : '') +
                  '</div>',
              )
              .join('') +
            '</div><p class="fineprint" id="player-error" role="status" hidden></p><p class="library-help">Можно добавить до 50 треков, до 100 МБ каждый. При удалении из списка оригинал на телефоне остаётся. После переустановки свои файлы нужно выбрать заново.</p><p class="fineprint">При сворачивании — пауза. Позиция сохраняется.</p>',
        ),
          _0xbf781d('modal').classList.add('player-dialog'),
          _0x4b9036(),
          _0x1cc8fd(),
          _0x2ab259(_0xbf781d('player-record'), true));
      }
      function _0x1cc8fd() {
        if (_0xbf781d('custom-music-unlock')) {
          const _0x458cfc = _0x572459().am >= _0x55ddf4.CUSTOM_PRICE;
          ((_0xbf781d('custom-music-unlock').disabled = !_0x458cfc),
            (_0xbf781d('custom-music-wallet').textContent = _0x458cfc
              ? 'Хватает для открытия импорта'
              : 'Нужно\x20ещё\x20' +
                _0x880adc.format(_0x880adc.sub(_0x55ddf4.CUSTOM_PRICE, _0x572459().am), _0x572459().settings.notation) +
                ' кизяка'));
        }
        if (!_0xbf781d('music-unlock')) return;
        const _0x43a9d7 = _0x572459().am >= _0x55ddf4.PRICE;
        ((_0xbf781d('music-unlock').disabled = !_0x43a9d7),
          (_0xbf781d('music-wallet').textContent = _0x43a9d7
            ? 'Хватает. Можно включать радио.'
            : 'Твой запас: ' +
              _0x880adc.format(_0x572459().am, _0x572459().settings.notation) +
              ' · копи до 500 миллионов'));
      }
      function _0x49f15e(_0x52e290) {
        ((_0x454fdf = !!_0x52e290), _0x4b9036());
      }
      function _0x568d16(_0x21d1d2) {
        const _0x38fb60 = _0x223b13,
          _0x193d9b = _0x21d1d2 && Array.isArray(_0x21d1d2.tracks) ? _0x21d1d2.tracks : [];
        ((_0x454fdf = false),
          _0x193d9b.length
            ? (_0x55ddf4.addTracks(_0x572459(), _0x193d9b),
              (_0x41eba7 = false),
              _0x189a59.save(),
              _0x328484(),
              _0x38fb60 && _0xdf32d1(),
              _0x189a59.render(true),
              _0x55ddf4.sound(_0x572459(), 'import'),
              _0x189a59.notify(
                'В плеере: ' +
                  _0x572459().music.tracks.length +
                  ' своих мелодий' +
                  (_0x21d1d2.errors?.['length'] ? '\x20·\x20некоторые\x20файлы\x20пропущены' : ''),
              ))
            : _0x21d1d2?.['errors']?.['length'] && _0x189a59.notify(String(_0x21d1d2.errors[0x0])),
          _0x4b9036());
      }
      function _0x345c9d() {
        return _0x36a79c.error || _0x36a79c.pending
          ? ''
          : _0x36a79c.configured && _0x36a79c.time
            ? 'Копия обновлена ' +
              new Date(_0x36a79c.time).toLocaleString('ru-RU', {
                day: 'numeric',
                month: 'short',
                hour: '2-digit',
                minute: '2-digit',
              })
            : _0x36a79c.configured
              ? 'Папка выбрана. Готовим первую копию…'
              : 'Выбери папку один раз — дальше игра записывает копию сама.';
      }
      function _0x5345c5() {
        const _0x424f50 = _0xbf781d('backup-state');
        (_0x424f50 &&
          (_0x424f50.textContent = _0x36a79c.pending
            ? 'Проверяем папку. Старые файлы пока не меняем.'
            : _0x36a79c.error || _0x345c9d()),
          _0xbf781d('backup-badge') &&
            _0xbf781d('backup-badge').classList.toggle('ready', !!_0x36a79c.time && !_0x36a79c.error),
          _0xbf781d('backup-folder') &&
            ((_0xbf781d('backup-folder').textContent = _0x36a79c.configured
              ? 'Открыть папку / восстановить'
              : 'Выбрать папку на телефоне'),
            (_0xbf781d('backup-folder').disabled = !!_0x36a79c.pending)),
          _0xbf781d('backup-nudge') &&
            (_0xbf781d('backup-nudge').hidden = !!_0x36a79c.time || !_0x1fb341.learnFeatures(_0x572459()).cascade));
      }
      function _0x18ad4b(_0x16f406) {
        _0x1b8ac4 = null;
        try {
          window.Native && Native.finishBackupSetup && Native.finishBackupSetup(_0x16f406);
        } catch (_0x158a64) {
          _0x189a59.notify('Не удалось подключить папку');
        }
      }
      function _0x2ab259(_0x2176f1, _0x4740e3 = false, _0x3cc194 = 0x1) {
        if (!_0x2176f1) return;
        const _0x4aece7 = KizyacMotion;
        _0x2176f1.classList.contains('page') || _0x2176f1.id.endsWith('-content')
          ? _0x4aece7.enter(_0x2176f1, _0x572459(), _0x3cc194)
          : _0x4aece7.run(
              _0x2176f1,
              [
                {
                  opacity: 0.4,
                  transform: 'translateY(8px)\x20scale(.98)',
                },
                {
                  opacity: 0x1,
                  transform: 'translateY(0) scale(1)',
                },
              ],
              {
                duration: _0x4740e3 ? 0xdc : 0xf0,
              },
              _0x572459(),
            );
      }
      (document.addEventListener('keydown', (_0x56265a) => {
        !_0x56265a.target.matches('[data-act="secret-tap"]') ||
          ('Enter' !== _0x56265a.key && '\x20' !== _0x56265a.key) ||
          (_0x56265a.preventDefault(), _0x56265a.target.click());
      }),
        document.addEventListener('input', (_0x65cca2) => {
          const _0x48c882 = _0x65cca2.target,
            _0x361a45 = _0x48c882.dataset.media,
            _0x54383a = _0x572459();
          if ('seek' === _0x361a45) {
            ((_0x134c48 = true), (_0xbf781d('player-fill').style.transitionDuration = '0ms'));
            const _0x6e11d = +_0x48c882.value;
            ((_0xbf781d('player-time').textContent = _0x448f2b(_0x6e11d)),
              (_0xbf781d('player-fill').style.transform = 'scaleX(' + _0x6e11d / +_0x48c882.max + ')'));
          } else
            'volume' === _0x361a45
              ? ((_0x54383a.music.volume = +_0x48c882.value / 0x64),
                _0x31d773('volume', _0x54383a.music.volume),
                (_0xbf781d('music-volume-label').textContent = _0x48c882.value + '%'))
              : 'effects' === _0x361a45 &&
                ((_0x54383a.settings.effectsVolume = +_0x48c882.value / 0x64),
                (_0xbf781d('effects-label').textContent = _0x48c882.value + '%'));
        }),
        document.addEventListener('change', (_0x5da7f8) => {
          const _0xdd7aab = _0x5da7f8.target,
            _0xe56b2 = _0xdd7aab.dataset.media;
          _0xe56b2 &&
            ('seek' === _0xe56b2 && ((_0x134c48 = false), (_0x574122 = -0x1), _0x31d773('seek', _0xdd7aab.value)),
            'bank' === _0xe56b2 &&
              ((_0x572459().settings.clickBank = _0xdd7aab.value), _0x55ddf4.sound(_0x572459(), 'tap', true)),
            'effects' === _0xe56b2 && _0x55ddf4.sound(_0x572459(), 'tap', true),
            _0x189a59.save());
        }));
      let _0x34f132 = null;
      function _0x5e6117(_0x4818b2, _0x185620) {
        ((_0x185620 = _0x185620 || _0x34f132 !== _0x572459().settings.notation),
          (_0x34f132 = _0x572459().settings.notation));
        const _0x501b57 = _0xbf781d('amount');
        return _0x1fb341.infiniteAM(_0x572459())
          ? (cancelAnimationFrame(_0x56afec),
            (_0x56afec = 0x0),
            (_0x414fb0 = _0x4d5c3e = _0x4818b2),
            void (_0x501b57.textContent = '∞'))
          : _0x185620 ||
              !_0x572459().settings.motion ||
              matchMedia('(prefers-reduced-motion:\x20reduce)').matches ||
              null === _0x4d5c3e ||
              !_0x880adc.valid(_0x4d5c3e) ||
              !_0x880adc.valid(_0x4818b2) ||
              _0x4818b2 < _0x414fb0
            ? (cancelAnimationFrame(_0x56afec),
              (_0x56afec = 0x0),
              (_0x414fb0 = _0x4d5c3e = _0x4818b2),
              void (_0x501b57.textContent = _0x880adc.format(_0x4818b2, _0x572459().settings.notation)))
            : void (
                _0x4818b2 !== _0x414fb0 &&
                ((_0x414fb0 = _0x4818b2),
                (_0x247f3e = _0x4d5c3e),
                (_0x3ba229 = _0x4818b2),
                (_0x116f03 = performance.now()),
                _0x56afec || (_0x56afec = requestAnimationFrame(_0x1bebb5)))
              );
      }
      function _0x1bebb5(_0x48d5d9) {
        const _0x5626c7 = Math.min(0x1, (_0x48d5d9 - _0x116f03) / 0xb4);
        ((_0x4d5c3e = _0x247f3e + (_0x3ba229 - _0x247f3e) * _0x5626c7),
          (_0xbf781d('amount').textContent = _0x880adc.format(_0x4d5c3e, _0x572459().settings.notation)),
          (_0x56afec = _0x5626c7 < 0x1 ? requestAnimationFrame(_0x1bebb5) : 0x0));
      }
      const _0x599243 = document.querySelector('header'),
        _0x1d784c = _0x599243.querySelector('[data-act="settings"]');
      (_0x1d784c.insertAdjacentHTML('beforeend', '<i id="backup-badge" title="Резервная копия"></i>'),
        _0x1d784c.insertAdjacentHTML(
          'beforebegin',
          '<button class="icon-btn radio-open" data-act="player" id="radio-open" aria-label="Плеер" hidden>' +
            _0x163b4b('headphones') +
            '</button>',
        ),
        _0x1d784c.insertAdjacentHTML(
          'beforebegin',
          '<button\x20class=\x22icon-btn\x20reactor-music\x22\x20data-act=\x22music-toggle\x22\x20id=\x22reactor-radio-toggle\x22\x20aria-label=\x22Включить\x20музыку\x22\x20hidden>' +
            _0x163b4b('play') +
            '</button>',
        ),
        _0x599243.insertAdjacentHTML(
          'afterend',
          '<div class="radio-strip" id="radio-strip" hidden><button data-act="player"><span class="radio-eq"><i></i><i></i><i></i></span><span><small>КИЗЯК FM</small><b id="radio-title">Дядя Олег V2</b></span></button><button class="icon-btn" data-act="music-toggle" id="radio-toggle" aria-label="Включить музыку">' +
            _0x163b4b('play') +
            '</button></div>',
        ),
        _0xbf781d('chamber').insertAdjacentHTML(
          'beforeend',
          '<div class="reward-ring" id="reward-ring" aria-hidden="true"></div>',
        ),
        _0xbf781d('page-reactor').insertAdjacentHTML(
          'beforeend',
          '<div\x20class=\x22backup-nudge\x22\x20id=\x22backup-nudge\x22\x20hidden><span>' +
            _0x163b4b('shield') +
            '</span><div><b>Сохрани банку на телефоне</b><p>Подключи папку в настройках, чтобы вернуть прогресс даже после удаления.</p></div><button class="secondary" data-act="backup-settings">Настроить</button></div>',
        ));
      try {
        window.Native && Native.getBackupStatus && (_0x36a79c = JSON.parse(Native.getBackupStatus()));
      } catch (_0x3df8ab) {}
      const _0x4ac3f4 = document.createElement('input');
      return (
        (_0x4ac3f4.type = 'file'),
        (_0x4ac3f4.id = 'music-files'),
        (_0x4ac3f4.accept = 'audio/*'),
        (_0x4ac3f4.multiple = true),
        (_0x4ac3f4.hidden = true),
        document.body.append(_0x4ac3f4),
        _0x4ac3f4.addEventListener('change', async (_0x3e29b6) => {
          (await (async function (_0x182568) {
            _0x49f15e(true);
            const _0x51a578 = [],
              _0x393091 = [];
            for (const _0x452069 of _0x182568.slice(0x0, 0x32))
              try {
                if (_0x452069.size > 0x6400000) throw new Error('Файл\x20больше\x20100\x20МБ');
                const _0x53b3ab = await crypto.subtle.digest('SHA-256', await _0x452069.arrayBuffer()),
                  _0x29e2d7 =
                    'user_' +
                    Array.from(new Uint8Array(_0x53b3ab))
                      .map((_0x33d5e8) => _0x33d5e8.toString(0x10).padStart(0x2, '0'))
                      .join('')
                      .slice(0x0, 0x20),
                  _0xf7f877 = URL.createObjectURL(_0x452069),
                  _0x1a5106 = new Audio();
                _0x1a5106.preload = 'metadata';
                const _0x15228a = await new Promise((_0x1548c1, _0x3b5550) => {
                  const _0x2989dc = setTimeout(() => _0x3b5550(new Error('Аудиофайл\x20не\x20поддерживается')), 0x1388);
                  ((_0x1a5106.onloadedmetadata = () => {
                    (clearTimeout(_0x2989dc), _0x1548c1(0x3e8 * _0x1a5106.duration));
                  }),
                    (_0x1a5106.onerror = () => {
                      (clearTimeout(_0x2989dc), _0x3b5550(new Error('Аудиофайл\x20не\x20поддерживается')));
                    }),
                    (_0x1a5106.src = _0xf7f877));
                });
                if (!Number.isFinite(_0x15228a) || _0x15228a <= 0x0) throw new Error('Некорректная длительность');
                (_0x11e4f2.has(_0x29e2d7) && URL.revokeObjectURL(_0x11e4f2.get(_0x29e2d7)),
                  _0x11e4f2.set(_0x29e2d7, _0xf7f877),
                  _0x51a578.push({
                    id: _0x29e2d7,
                    name: _0x452069.name.replace(/\.[^.]+$/, ''),
                    duration: _0x15228a,
                    bytes: _0x452069.size,
                  }));
              } catch (_0x231f7a) {
                _0x393091.push(_0x231f7a.message);
              }
            _0x568d16({
              tracks: _0x51a578,
              errors: _0x393091,
            });
          })(Array.from(_0x3e29b6.target.files)),
            (_0x3e29b6.target.value = ''));
        }),
        _0x572459().cosmetics.visited.includes('reactor') || _0x572459().cosmetics.visited.push('reactor'),
        _0x328484(),
        {
          settings: function () {
            return (
              (_0x223b13 = false),
              (function () {
                if (!_0x572459().settings.labUnlocked) return '';
                const _0x49fe74 = _0x572459().settings.vibrationLevel || 0x0;
                let _0x39f411 = true;
                try {
                  window.Native && Native.hasAmplitudeControl && (_0x39f411 = Native.hasAmplitudeControl());
                } catch (_0x4fcba3) {}
                return (
                  '<div class="lab-card"><span class="eyebrow">СЕКРЕТНАЯ ЛАБОРАТОРИЯ</span><h3>Сила вибрации</h3><div class="vibration-grid">' +
                  ['Обычная', 'Усиленная', 'Сильная', 'Максимум']
                    .map(
                      (_0x42d790, _0x5bdf7d) =>
                        '<button class="secondary vibration-choice ' +
                        (_0x49fe74 === _0x5bdf7d ? 'selected' : '') +
                        '" data-act="vibration-level" data-id="' +
                        _0x5bdf7d +
                        '\x22\x20aria-pressed=\x22' +
                        (_0x49fe74 === _0x5bdf7d) +
                        '\x22>' +
                        _0x42d790 +
                        '</button>',
                    )
                    .join('') +
                  '</div><button class="secondary wide" data-act="vibration-test">Проверить вибрацию</button><p class="fineprint">' +
                  (_0x39f411
                    ? 'Максимум использует наибольшую поддерживаемую амплитуду.'
                    : 'Телефон\x20не\x20регулирует\x20амплитуду.\x20Уровни\x20отличаются\x20длительностью\x20импульса.') +
                  ' Системные настройки телефона могут ограничивать отклик.</p></div>'
                );
              })() +
                '<div class="audio-settings"><div class="input-row"><label for="effects-volume">Громкость эффектов <b id="effects-label">' +
                Math.round(0x64 * _0x572459().settings.effectsVolume) +
                '%</b></label><input type="range" id="effects-volume" data-media="effects" min="0" max="100" value="' +
                Math.round(0x64 * _0x572459().settings.effectsVolume) +
                '\x22></div><div\x20class=\x22input-row\x22><label\x20for=\x22click-bank\x22>Звук\x20кликов</label><select\x20id=\x22click-bank\x22\x20data-media=\x22bank\x22>' +
                [
                  ['auto', 'По скину'],
                  ['wet', 'Бульканье'],
                  ['soft', 'Мягкий'],
                  ['metal', 'Металл'],
                  ['glass', 'Стекло'],
                  ['cosmic', 'Космос'],
                ]
                  .map(
                    ([_0xb4f675, _0x2c2811]) =>
                      '<option value="' +
                      _0xb4f675 +
                      '\x22\x20' +
                      (_0x572459().settings.clickBank === _0xb4f675 ? 'selected' : '') +
                      '>' +
                      _0x2c2811 +
                      '</option>',
                  )
                  .join('') +
                '</select></div></div><button class="secondary wide player-settings" data-act="player">' +
                _0x163b4b('headphones') +
                (_0x572459().music.unlocked ? 'Открыть\x20плеер' : 'Плеер · 500 млн') +
                '</button><div class="backup-card"><span class="eyebrow">ПРОГРЕСС ОСТАНЕТСЯ С ТОБОЙ</span><h3>Копия на телефоне</h3><p id="backup-state">' +
                _0x1124f1(_0x36a79c.error || _0x345c9d()) +
                '</p><button class="primary wide" id="backup-folder" data-act="backup-folder">' +
                (_0x36a79c.configured ? 'Открыть папку / восстановить' : 'Выбрать папку на телефоне') +
                '</button><p\x20class=\x22fineprint\x22>Создай\x20папку\x20«Кизяк»\x20в\x20«Документы»\x20внутренней\x20памяти.\x20После\x20переустановки\x20снова\x20выбери\x20эту\x20папку\x20—\x20игра\x20предложит\x20восстановить\x20прогресс.\x20Пароли\x20и\x20коды\x20не\x20нужны.</p></div>'
            );
          },
          action: function _0x2749d2(_0x317033, _0x531840) {
            if ('secret-tap' === _0x317033) {
              const _0x44b3eb = Date.now();
              return (
                _0x44b3eb - _0x309827 > 0xdac && ((_0x309827 = _0x44b3eb), (_0x24f77e = 0x0)),
                ++_0x24f77e >= 0x7 &&
                  ((_0x24f77e = 0x0),
                  (_0x572459().settings.labUnlocked = true),
                  _0x189a59.save(),
                  _0x189a59.settings(),
                  _0x189a59.notify('Секретная\x20лаборатория\x20открыта'),
                  _0x55ddf4.sound(_0x572459(), 'unlock')),
                true
              );
            }
            if ('vibration-level' === _0x317033)
              return (
                (_0x572459().settings.vibrationLevel = Math.max(0x0, Math.min(0x3, +_0x531840))),
                _0x189a59.save(),
                _0x189a59.settings(),
                _0x572459().settings.haptic && _0x189a59.haptic(),
                true
              );
            if ('vibration-test' === _0x317033)
              return (
                _0x572459().settings.haptic
                  ? _0x189a59.haptic()
                  : _0x189a59.notify('Сначала\x20включи\x20«Виброотклик»'),
                true
              );
            if ('backup-settings' === _0x317033) return (_0x189a59.settings(), true);
            if ('player' === _0x317033) return (_0xdf32d1(), true);
            if ('music-unlock' === _0x317033)
              return (
                _0x1fb341.unlockMusic(_0x572459()) &&
                  (_0x189a59.save(),
                  _0x328484(),
                  _0x55ddf4.sound(_0x572459(), 'unlock'),
                  _0x189a59.notify('Кизяк\x20FM\x20разблокирован\x20навсегда'),
                  _0xdf32d1(),
                  _0x189a59.render(true)),
                true
              );
            if ('custom-music-unlock' === _0x317033)
              return (
                _0x1fb341.unlockCustomMusic(_0x572459()) &&
                  (_0x189a59.save(),
                  _0x55ddf4.sound(_0x572459(), 'unlock'),
                  _0x189a59.notify('Импорт своих мелодий открыт навсегда'),
                  _0xdf32d1(),
                  _0x189a59.render(true)),
                true
              );
            if ('music-toggle' === _0x317033)
              return (
                _0x55ddf4.sound(_0x572459(), 'music'),
                _0x31d773(_0x889f74 && (_0x889f74.playing || _0x889f74.requested) ? 'pause' : 'play'),
                true
              );
            if (['music-next', 'music-previous', 'music-track'].includes(_0x317033)) {
              const _0x2e8bda = _0x889f74 && (_0x889f74.playing || _0x889f74.requested),
                _0x2f3ed2 = _0x417070()[+_0x531840];
              return 'music-track' === _0x317033 && _0x2f3ed2 && _0x889f74?.['missing']?.['includes'](_0x2f3ed2.id)
                ? (_0x2749d2('music-import'), true)
                : (_0x55ddf4.sound(_0x572459(), 'music'),
                  _0x31d773(_0x317033.slice(0x6), _0x531840 || ''),
                  'music-track' !== _0x317033 || _0x2e8bda || _0x31d773('play'),
                  _0x189a59.save(),
                  true);
            }
            if ('music-repeat' === _0x317033) {
              _0x55ddf4.sound(_0x572459(), 'toggle');
              const _0x58437a = _0x572459();
              return (
                (_0x58437a.music.repeat = {
                  all: 'one',
                  one: 'off',
                  off: 'all',
                }[_0x58437a.music.repeat]),
                _0x31d773('repeat', _0x58437a.music.repeat),
                _0x189a59.save(),
                _0x4b9036(),
                true
              );
            }
            if ('music-import' === _0x317033)
              return !(
                _0x572459().music.unlocked &&
                !_0x454fdf &&
                (_0x572459().music.customUnlocked
                  ? (_0x189a59.save(),
                    window.Native && Native.importMusic ? Native.importMusic() : _0xbf781d('music-files').click(),
                    0x0)
                  : (_0x189a59.notify('Сначала открой свои мелодии за 100 млн'), 0x0))
              );
            if ('music-remove' === _0x317033) {
              const _0x4b0698 = !!_0x889f74?.['playing'],
                _0x248af3 = _0x572459().music.activeId;
              return (
                (_0x41eba7 = false),
                _0x55ddf4.removeTrack(_0x572459(), _0x531840)
                  ? (_0x189a59.save(),
                    _0x328484(_0x4b0698 && _0x248af3 !== _0x531840),
                    window.Native && Native.removeMusic && Native.removeMusic(_0x531840),
                    _0x11e4f2.has(_0x531840) &&
                      (URL.revokeObjectURL(_0x11e4f2.get(_0x531840)), _0x11e4f2['delete'](_0x531840)),
                    _0x223b13 && _0xdf32d1(),
                    _0x189a59.render(true),
                    _0x55ddf4.sound(_0x572459(), 'close'))
                  : (_0x41eba7 = true),
                true
              );
            }
            if ('backup-folder' === _0x317033)
              return (
                _0x189a59.save(),
                window.Native && Native.selectBackupFolder
                  ? Native.selectBackupFolder()
                  : _0x189a59.notify('Выбор папки доступен в Android APK. Защищённая копия доступна в Android APK.'),
                true
              );
            if ('backup-restore' === _0x317033) {
              const _0x4f658d = _0x1b8ac4 && _0x1fb341.restore(_0x1b8ac4.payload);
              if (_0x4f658d && _0x4f658d.valid) {
                if (false === _0x189a59.replace(_0x4f658d.state, true)) return true;
                (_0x18ad4b(true), _0x189a59.close(), _0x189a59.notify('Прогресс восстановлен. Автокопия включена.'));
              }
              return true;
            }
            return 'backup-cancel' === _0x317033
              ? (_0x18ad4b(false), _0x189a59.close(), true)
              : 'backup-current' === _0x317033
                ? (_0x189a59.modal(
                    '<span\x20class=\x22eyebrow\x22>ПОДТВЕРЖДЕНИЕ</span><h2>Обновить\x20эту\x20папку?</h2><p>Текущий\x20прогресс\x20станет\x20новой\x20копией.\x20За\x20следующие\x20автосохранения\x20обе\x20старые\x20версии\x20в\x20папке\x20будут\x20заменены.</p><div\x20class=\x22modal-actions\x22><button\x20class=\x22secondary\x22\x20data-act=\x22backup-cancel\x22>Отмена</button><button\x20class=\x22primary\x22\x20data-act=\x22backup-replace\x22>Записать\x20текущий</button></div>',
                  ),
                  true)
                : 'backup-replace' === _0x317033 && (_0x189a59.save(), _0x18ad4b(true), _0x189a59.close(), true);
          },
          pause: function () {
            (_0x572459().music.unlocked && _0x31d773('pause'),
              _0x10f2d6(),
              _0x5e6117(_0x572459().am, true),
              _0x55ddf4.suspend());
          },
          snapshot: _0x10f2d6,
          close: function () {
            ((_0x223b13 = false), _0x1b8ac4 && _0x18ad4b(false));
          },
          prepareReplace: () => {
            ((_0x41eba7 = false), (_0x889f74 = null));
          },
          configure: _0x328484,
          onMusicState: _0x9dfdd,
          onTracksImported: _0x568d16,
          onMusicImporting: _0x49f15e,
          onBackupStatus: function (_0x4633a0) {
            ((_0x36a79c = _0x4633a0 || _0x36a79c),
              _0x36a79c.time && _0x572459().cosmetics && (_0x572459().cosmetics.backupEver = true),
              _0x5345c5());
          },
          backupFound: function (_0x44c1f6) {
            if (((_0x1b8ac4 = _0x44c1f6), _0x44c1f6.legacy))
              _0x189a59.modal(
                '<span\x20class=\x22eyebrow\x22>СТАРЫЙ\x20ФОРМАТ</span><h2>Нужен\x20перенос\x20копии</h2><p>Эта\x20копия\x20создана\x20до\x20защиты\x20файлов.\x20Восстанови\x20её\x20в\x20версии\x202.2,\x20затем\x20установи\x202.3\x20поверх\x20игры\x20—\x20прогресс\x20перенесётся\x20в\x20защищённый\x20формат.</p><p>Эти\x20файлы\x20пока\x20не\x20изменены.</p><button\x20class=\x22primary\x20wide\x22\x20data-act=\x22backup-cancel\x22>Понятно</button>',
              );
            else {
              if (
                ((_0x223b13 = false),
                _0x189a59.modal(
                  '<span class="eyebrow">КОПИЯ НАЙДЕНА</span><h2>' +
                    (_0x44c1f6.corrupt ? 'Файлы повреждены' : 'Вернуть твою лабораторию?') +
                    '</h2>' +
                    (_0x44c1f6.corrupt
                      ? '<p>Ни одна из двух копий не прошла проверку. Текущее сохранение в приложении в порядке. Можно выбрать другую папку.</p>'
                      : '<p>Копия от ' +
                        _0x1124f1(new Date(_0x44c1f6.time).toLocaleString('ru-RU')) +
                        '.</p><div\x20id=\x22backup-summary\x22></div>') +
                    '<div class="backup-choices">' +
                    (_0x44c1f6.corrupt
                      ? ''
                      : '<button class="primary wide" data-act="backup-restore">Восстановить прогресс</button>') +
                    '<button class="secondary wide" data-act="backup-cancel">Оставить файлы как есть</button><button class="text-button" data-act="backup-current">Заменить копию текущим прогрессом…</button></div>',
                ),
                !_0x44c1f6.corrupt)
              ) {
                const _0x638e43 = _0x1fb341.restore(_0x44c1f6.payload);
                let _0x283096 = {
                  valid: true,
                };
                if (window.Native && Native.isProtectedStorage && Native.isProtectedStorage())
                  try {
                    _0x283096 = _0x1fb341.validateProgress(JSON.parse(_0x44c1f6.payload));
                  } catch (_0x36c59b) {
                    _0x283096 = {
                      valid: false,
                    };
                  }
                _0x638e43.valid && _0x283096.valid
                  ? (_0xbf781d('backup-summary').textContent =
                      'Добыто всего: ' +
                      _0x880adc.format(_0x638e43.state.total, _0x572459().settings.notation) +
                      ' · распадов: ' +
                      _0x638e43.state.decays +
                      ' · плеер: ' +
                      (_0x638e43.state.music.unlocked ? 'открыт' : 'закрыт'))
                  : ((_0xbf781d('backup-summary').textContent = 'Файл не является сохранением этой игры.'),
                    (document.querySelector('[data-act=\x22backup-restore\x22]').disabled = true));
              }
            }
          },
          animate: _0x2ab259,
          reward: function (_0x1dcb87 = false) {
            KizyacMotion.ring(_0xbf781d('reward-ring'), _0x572459(), _0x1dcb87);
          },
          amount: _0x5e6117,
          refresh() {
            const _0x1347ba = _0x572459();
            ((_0xbf781d('radio-open').hidden =
              !_0x1347ba.music.unlocked && !_0x1fb341.learnFeatures(_0x1347ba).journal && _0x1347ba.best < 0x6),
              (_0xbf781d('radio-strip').hidden = !_0x1347ba.music.unlocked),
              (_0xbf781d('reactor-radio-toggle').hidden = !_0x1347ba.music.unlocked),
              _0x1cc8fd(),
              _0x5345c5());
          },
          isPlayerOpen: () => _0x223b13,
        }
      );
    },
  };
})();


(function () {
  'use strict';

  const _0x2c47d7 = KizyacCore,
    _0x138efc = KizyacMaterials,
    _0x3b3bd7 = _0x2c47d7.N,
    _0x55c771 = (_0x48bb84) => document.getElementById(_0x48bb84);
  window.KizyacMaterialsUI = {
    init(_0x443420) {
      let _0x3c91b4 = '';
      const _0x288e81 = () => _0x443420.state(),
        _0x206f8d = (_0x3017f2) => _0x3b3bd7.format(_0x3017f2, _0x288e81().settings.notation),
        _0x26993d = (_0x41d378) =>
          '×' +
          _0x41d378.toLocaleString('ru-RU', {
            maximumFractionDigits: 0x2,
          }),
        _0x4d9a23 = (_0x435e2c, _0x227561) => _0x26993d(Math.pow(_0x435e2c.power, _0x227561));
      return {
        elements: function () {
          return (
            _0x288e81(),
            '<div\x20class=\x22compound-heading\x22><span\x20class=\x22eyebrow\x22>СОСТАВ\x20ОБРАЗЦА\x20·\x202\x20СЛОТА</span><h3>Смешай\x20невозможное</h3><p>Покупай\x20постоянные\x20элементы\x20и\x20добавляй\x20в\x20банку\x20два\x20из\x20них.\x20Улучшение\x20элемента\x20усиливает\x20его\x20эффект,\x20но\x20не\x20занимает\x20новый\x20слот.</p></div>' +
              (function () {
                const _0x20df92 = _0x288e81(),
                  _0x2d3b74 = _0x138efc.data(_0x20df92);
                return (
                  '<div class="compound-slots">' +
                  [0x0, 0x1]
                    .map((_0x385001) => {
                      const _0x4b0318 = _0x138efc.ELEMENTS.find(
                        (_0x491e54) => _0x491e54.id === _0x2d3b74.active[_0x385001],
                      );
                      return (
                        '<div class="compound-slot ' +
                        (_0x4b0318 ? 'filled' : '') +
                        '\x22>' +
                        (_0x4b0318
                          ? '<span\x20class=\x22element-symbol\x22\x20style=\x22--element:' +
                            _0x4b0318.color +
                            '\x22>' +
                            _0x4b0318.mark +
                            '</span><div><b>' +
                            _0x4b0318.name +
                            '</b><small>Уровень ' +
                            _0x138efc.level(_0x20df92, _0x4b0318.id) +
                            '</small></div><button class="icon-btn" data-act="element-equip" data-id="' +
                            _0x4b0318.id +
                            '" aria-label="Убрать ' +
                            _0x4b0318.name +
                            '">×</button>'
                          : '<span class="empty-slot">+</span><div><b>Свободный слот ' +
                            (_0x385001 + 0x1) +
                            '</b><small>Выбери\x20купленный\x20элемент\x20ниже</small></div>') +
                        '</div>'
                      );
                    })
                    .join('') +
                  '</div>'
                );
              })() +
              '<div class="info">Элементы и их уровни сохраняются после всех сбросов. Замена бесплатна. В протоколах новые материалы и модификации помощников не действуют.</div><div class="element-catalog">' +
              _0x138efc.ELEMENTS.map(
                (_0x55ee9a) =>
                  '<article class="card element-card" data-element="' +
                  _0x55ee9a.id +
                  '" style="--element:' +
                  _0x55ee9a.color +
                  '\x22><div\x20class=\x22element-card-top\x22><span\x20class=\x22element-symbol\x22>' +
                  _0x55ee9a.mark +
                  '</span><div><small>' +
                  _0x138efc.labels[_0x55ee9a.currency].toUpperCase() +
                  '</small><h3>' +
                  _0x55ee9a.name +
                  '</h3></div><span class="element-level"></span></div><p>' +
                  _0x55ee9a.desc +
                  '</p><div\x20class=\x22element-effect\x22></div><div\x20class=\x22element-actions\x22><button\x20class=\x22buy\x22\x20data-act=\x22element-buy\x22\x20data-id=\x22' +
                  _0x55ee9a.id +
                  '"><b></b><small></small></button><button class="secondary" data-act="element-equip" data-id="' +
                  _0x55ee9a.id +
                  '\x22></button></div><small\x20class=\x22element-note\x22></small></article>',
              ).join('') +
              '</div>' +
              (_0x443420.combinations ? _0x443420.combinations() : '')
          );
        },
        fragments: function () {
          return (
            '<div class="compound-heading"><span class="eyebrow">ПОСТОЯННЫЕ МОДИФИКАЦИИ</span><h3>Фрагменты реальности</h3><p>Сжимай ядра в материал для помощников. Их сила и новая цена сохраняются после любых сбросов.</p></div><div class="fragment-wallet"><div><small>ФРАГМЕНТЫ</small><strong id="fragment-count"></strong></div><div><small>ЯДРА</small><strong data-live="cores"></strong></div></div><div class="card fragment-forge"><h3>Расщепить ядра</h3><p>Каждые 4 созданных фрагмента повышают цену следующего на 1 ядро. Обмен односторонний.</p><button class="primary wide" data-act="fragment-forge"><span></span></button><small id="fragment-forged"></small></div><div class="info">Одна модификация даёт помощнику скорость ×5, но его новые покупки стоят ×4. Три ранга: ×5 / ×25 / ×125 к скорости и ×4 / ×16 / ×64 к цене. Ранги открываются после 1, 3 и 5 реальностей; стоят 1, 2 и 4 фрагмента.</div>' +
            _0x2c47d7.DIMENSIONS.map(
              (_0x50df03, _0x5bc870) =>
                '<div class="card helper-mod" data-helper-mod="' +
                _0x5bc870 +
                '\x22><div\x20class=\x22helper-mod-heading\x22><span\x20class=\x22dim-symbol\x22><svg><use\x20href=\x22#i-' +
                _0x50df03.icon +
                '"/></svg></span><div><small>ПОМОЩНИК ' +
                (_0x5bc870 + 0x1) +
                '</small><h3>' +
                _0x50df03.name +
                '</h3></div><span\x20class=\x22mod-rank\x22></span></div><p\x20class=\x22mod-effect\x22></p><small\x20class=\x22mod-next\x22></small><button\x20class=\x22secondary\x20wide\x22\x20data-act=\x22helper-mod\x22\x20data-id=\x22' +
                _0x5bc870 +
                '"></button></div>',
            ).join('')
          );
        },
        refresh: function () {
          const _0x238bd4 = _0x288e81(),
            _0x5375f3 = _0x138efc.data(_0x238bd4),
            _0x3750eb = _0x55c771('sample-composition');
          if (
            ((_0x3750eb.hidden = !_0x138efc.available(_0x238bd4)),
            _0x3750eb.hidden ||
              ((_0x3750eb.querySelector('b').textContent = _0x5375f3.active.length
                ? _0x5375f3.active
                    .map((_0x165932) => _0x138efc.ELEMENTS.find((_0xdbd9ba) => _0xdbd9ba.id === _0x165932).name)
                    .join('\x20+\x20')
                : 'Добавь элементы в банку'),
              (_0x3750eb.querySelector('small').textContent = _0x5375f3.active.length + ' / 2 слота · открыть состав')),
            document.querySelectorAll('.page.active [data-element]').forEach((_0x2cb160) => {
              const _0xbd0532 = _0x138efc.ELEMENTS.find((_0x5d666d) => _0x5d666d.id === _0x2cb160.dataset.element),
                _0x13bae1 = _0x138efc.level(_0x238bd4, _0xbd0532.id),
                _0x46ea4c = _0x138efc.unlocked(_0x238bd4, _0xbd0532),
                _0x5f0aee = _0x5375f3.active.includes(_0xbd0532.id),
                _0x5709e4 = 0x3 === _0x13bae1,
                _0x2cdb44 = _0x2cb160.querySelector('[data-act=\x22element-buy\x22]'),
                _0x545dc0 = _0x2cb160.querySelector('[data-act="element-equip"]');
              (_0x2cb160.classList.toggle('locked', !_0x46ea4c),
                _0x2cb160.classList.toggle('equipped', _0x5f0aee),
                (_0x2cb160.querySelector('.element-level').textContent = _0x13bae1 + ' / 3'),
                (_0x2cb160.querySelector('.element-effect').textContent =
                  (_0x13bae1 ? 'Сейчас ' + _0x4d9a23(_0xbd0532, _0x13bae1) + ' · ' : '') +
                  (_0x5709e4
                    ? 'Максимальный\x20уровень'
                    : 'Следующий уровень ' + _0x4d9a23(_0xbd0532, _0x13bae1 + 0x1))),
                (_0x2cdb44.disabled =
                  !_0x46ea4c ||
                  _0x5709e4 ||
                  !!_0x238bd4.challenge ||
                  _0x238bd4[_0xbd0532.currency] + 1e-12 < _0x138efc.cost(_0x238bd4, _0xbd0532.id)),
                (_0x2cdb44.querySelector('b').textContent = _0x5709e4
                  ? 'МАКС'
                  : _0x206f8d(_0x138efc.cost(_0x238bd4, _0xbd0532.id))),
                (_0x2cdb44.querySelector('small').textContent = _0x5709e4
                  ? '3 / 3'
                  : (_0x13bae1 ? 'УЛУЧШИТЬ\x20·\x20' : 'КУПИТЬ · ') +
                    _0x138efc.labels[_0xbd0532.currency].toUpperCase()),
                (_0x545dc0.hidden = !_0x13bae1),
                (_0x545dc0.textContent = _0x5f0aee
                  ? 'Убрать\x20из\x20банки'
                  : 0x2 === _0x5375f3.active.length
                    ? 'Заняты\x202\x20слота'
                    : 'Добавить в банку'),
                (_0x545dc0.disabled = !!_0x238bd4.challenge || (!_0x5f0aee && _0x5375f3.active.length >= 0x2)),
                (_0x2cb160.querySelector('.element-note').textContent = _0x46ea4c
                  ? _0x238bd4.challenge
                    ? 'Во время протокола состав заморожен'
                    : _0x5f0aee
                      ? 'Действует в банке'
                      : _0x13bae1
                        ? 'Куплен,\x20но\x20пока\x20не\x20добавлен'
                        : 'Покупка\x20навсегда;\x20добавь\x20в\x20свободный\x20слот'
                  : ((_0xc81774) =>
                      0x3 === _0xc81774.phase
                        ? 'После первой реальности'
                        : 0x2 === _0xc81774.phase
                          ? 'После\x20первой\x20сингулярности'
                          : 0x1 === _0xc81774.phase
                            ? 'После\x20первого\x20распада'
                            : 'После первого усиления и мутации ' + ((_0xc81774.minStage || 0x0) + 0x1))(_0xbd0532)));
            }),
            _0x55c771('fragment-count'))
          ) {
            ((_0x55c771('fragment-count').textContent = _0x5375f3.fragments),
              (_0x55c771('fragment-forged').textContent =
                'Создано ' + _0x5375f3.forged + ' / ' + _0x138efc.MAX_FORGED));
            const _0x40f349 = document.querySelector('[data-act="fragment-forge"]');
            ((_0x40f349.disabled =
              !!_0x238bd4.challenge ||
              _0x5375f3.forged >= _0x138efc.MAX_FORGED ||
              _0x238bd4.cores + 1e-12 < _0x138efc.forgeCost(_0x238bd4)),
              (_0x40f349.querySelector('span').textContent =
                _0x5375f3.forged >= _0x138efc.MAX_FORGED
                  ? 'Все\x20фрагменты\x20созданы'
                  : 'Создать\x201\x20фрагмент\x20·\x20' +
                    _0x206f8d(_0x138efc.forgeCost(_0x238bd4)) +
                    '\x20' +
                    (_0x5375f3.forged < 0x4 ? 'ядро' : _0x5375f3.forged < 0x10 ? 'ядра' : 'ядер')));
          }
          (document.querySelectorAll('.page.active\x20[data-helper-mod]').forEach((_0x452081) => {
            const _0x4e53a9 = +_0x452081.dataset.helperMod,
              _0x4e65c6 = _0x138efc.modLevel(_0x238bd4, _0x4e53a9),
              _0x3641b3 = 0x3 === _0x4e65c6,
              _0xfacdd0 = _0x452081.querySelector('[data-act=\x22helper-mod\x22]');
            ((_0x452081.querySelector('.mod-rank').textContent = _0x4e65c6 + '\x20/\x203'),
              (_0x452081.querySelector('.mod-effect').textContent =
                'Скорость ' + _0x26993d(0x5 ** _0x4e65c6) + ' · новые покупки ' + _0x26993d(0x4 ** _0x4e65c6)),
              (_0x452081.querySelector('.mod-next').textContent = _0x3641b3
                ? 'Все\x20модификации\x20установлены'
                : _0x238bd4.realities < _0x138efc.modRequirement(_0x238bd4, _0x4e53a9)
                  ? 'Следующий ранг после ' + _0x138efc.modRequirement(_0x238bd4, _0x4e53a9) + ' реальностей'
                  : 'Следующий ранг: скорость ' +
                    _0x26993d(0x5 ** (_0x4e65c6 + 0x1)) +
                    '\x20·\x20цена\x20' +
                    _0x26993d(0x4 ** (_0x4e65c6 + 0x1))),
              (_0xfacdd0.textContent = _0x3641b3
                ? 'МАКСИМУМ'
                : 'Модифицировать\x20·\x20' + _0x138efc.modCost(_0x238bd4, _0x4e53a9) + ' фр.'),
              (_0xfacdd0.disabled = !_0x138efc.canModify(_0x238bd4, _0x4e53a9)));
          }),
            document.querySelectorAll('.page.active\x20[data-act=\x22helper-auto\x22]').forEach((_0x262205) => {
              const _0x1765b9 = +_0x262205.dataset.id,
                _0x486e30 = _0x238bd4.auto.dims && _0x238bd4.auto.helperMask[_0x1765b9];
              ((_0x262205.hidden = !_0x2c47d7.automationUnlocked(_0x238bd4, 'dims')),
                _0x262205.classList.toggle('on', _0x486e30),
                _0x262205.setAttribute('aria-pressed', String(_0x486e30)),
                (_0x262205.textContent = 'Авто: ' + (_0x486e30 ? 'вкл' : 'выкл')));
            }),
            document.querySelectorAll('.page.active\x20[data-mod-caption]').forEach((_0x555e72) => {
              const _0x3acda1 = _0x138efc.modLevel(_0x238bd4, +_0x555e72.dataset.modCaption);
              ((_0x555e72.hidden = !_0x3acda1),
                (_0x555e72.textContent =
                  'Модификация ' +
                  _0x3acda1 +
                  ' · скорость ' +
                  _0x26993d(0x5 ** _0x3acda1) +
                  ' · цена ' +
                  _0x26993d(0x4 ** _0x3acda1)));
            }),
            document
              .querySelectorAll('.page.active .helper-foot')
              .forEach(
                (_0x34ae15) =>
                  (_0x34ae15.hidden = Array.from(_0x34ae15.children).every((_0x563d4e) => _0x563d4e.hidden)),
              ));
          const _0x5dffe8 = _0x5375f3.active
            .map((_0x4da7f3) => _0x4da7f3 + _0x138efc.level(_0x238bd4, _0x4da7f3))
            .join('|');
          if (_0x5dffe8 !== _0x3c91b4) {
            _0x3c91b4 = _0x5dffe8;
            let _0x4545df = _0x55c771('element-marks');
            (_0x4545df ||
              ((_0x4545df = document.createElementNS('http://www.w3.org/2000/svg', 'g')),
              (_0x4545df.id = 'element-marks'),
              _0x55c771('jar-art').querySelector('g[clip-path]').append(_0x4545df)),
              (_0x4545df.innerHTML = _0x5375f3.active
                .map((_0x1ab694, _0x1a1b00) => {
                  const _0x3a5ce8 = _0x138efc.ELEMENTS.find((_0x405e5a) => _0x405e5a.id === _0x1ab694);
                  return (
                    '<g\x20transform=\x22translate(' +
                    (_0x1a1b00 ? 0xdb : 0x75) +
                    '\x20' +
                    (_0x1a1b00 ? 0x21c : 0x15e) +
                    ')\x22\x20opacity=\x22.82\x22><circle\x20r=\x2229\x22\x20fill=\x22' +
                    _0x3a5ce8.color +
                    '" fill-opacity=".12"/><path d="M0-24 21-12 21 12 0 24-21 12-21-12Z" fill="none" stroke="' +
                    _0x3a5ce8.color +
                    '\x22\x20stroke-width=\x222\x22/><circle\x20r=\x227\x22\x20fill=\x22' +
                    _0x3a5ce8.color +
                    '\x22/></g>'
                  );
                })
                .join('')));
          }
        },
        action: function (_0x43df4d, _0x8abd43) {
          const _0x51c4b4 = _0x288e81();
          if ('element-buy' === _0x43df4d)
            return (
              _0x138efc.buy(_0x51c4b4, _0x8abd43) &&
                _0x443420.changed(
                  'Элемент улучшен: ' + _0x138efc.ELEMENTS.find((_0x19ada3) => _0x19ada3.id === _0x8abd43).name,
                  'research',
                ),
              true
            );
          if ('element-equip' === _0x43df4d)
            return (
              _0x138efc.equip(_0x51c4b4, _0x8abd43) && _0x443420.changed('Состав\x20образца\x20изменён', 'equip'),
              true
            );
          if ('compound-open' === _0x43df4d) return (_0x443420.go('cascade', 'elements'), true);
          if ('fragment-forge' === _0x43df4d)
            return (
              _0x138efc.forge(_0x51c4b4) && _0x443420.changed('Создан\x20фрагмент\x20реальности', 'research'),
              true
            );
          if ('helper-mod' === _0x43df4d) {
            const _0x39763a = +_0x8abd43;
            return (
              !_0x138efc.canModify(_0x51c4b4, _0x39763a) ||
              (_0x443420.confirm(
                'Модифицировать:\x20' + _0x2c47d7.DIMENSIONS[_0x39763a].name + '?',
                '<p>Стоимость: <b>' +
                  _0x138efc.modCost(_0x51c4b4, _0x39763a) +
                  '\x20фрагм.</b></p><p>Скорость\x20этого\x20помощника\x20увеличится\x20ещё\x20в\x205\x20раз.\x20Его\x20будущие\x20покупки\x20станут\x20ещё\x20в\x204\x20раза\x20дороже.\x20Уже\x20купленные\x20помощники\x20останутся.</p><p\x20class=\x22fineprint\x22>Модификация\x20постоянная,\x20возврата\x20фрагментов\x20нет.\x20В\x20протоколах\x20её\x20эффект\x20отключён.</p>',
                () => {
                  (_0x138efc.modify(_0x51c4b4, _0x39763a), _0x443420.notify('Помощник модифицирован'));
                },
                'Модифицировать',
              ),
              true)
            );
          }
          if ('helper-auto' === _0x43df4d) {
            if (!_0x2c47d7.automationUnlocked(_0x51c4b4, 'dims')) return true;
            const _0x2a279b = +_0x8abd43;
            return (
              _0x51c4b4.auto.dims
                ? (_0x51c4b4.auto.helperMask[_0x2a279b] = !_0x51c4b4.auto.helperMask[_0x2a279b])
                : (_0x51c4b4.auto.helperMask.fill(false),
                  (_0x51c4b4.auto.dims = true),
                  (_0x51c4b4.auto.helperMask[_0x2a279b] = true)),
              _0x443420.changed(null, 'toggle'),
              true
            );
          }
          return (
            'helpers-auto-all' === _0x43df4d &&
            (_0x2c47d7.automationUnlocked(_0x51c4b4, 'dims') &&
              ((_0x51c4b4.auto.dims = true),
              _0x51c4b4.auto.helperMask.fill(true),
              _0x443420.changed('Автопокупка\x20всех\x20помощников\x20включена', 'toggle')),
            true)
          );
        },
      };
    },
  };
})();


(function () {
  'use strict';

  const _0x3af647 = KizyacCore,
    _0x3934d6 = _0x3af647.Lab,
    _0x44a480 = _0x3af647.Materials,
    _0x4fab3b = _0x3af647.N,
    _0x1916a9 = (_0x24cc67) => document.getElementById(_0x24cc67),
    _0x333b19 = {
      boost: 'Усиление',
      resonance: 'Резонанс',
      decay: 'Распад',
      singularity: 'Сингулярность',
      reality: 'Реальность',
      full: 'Новая\x20игра',
    },
    _0x165dba = ['#baf06a', '#74dcd7', '#c2a8ff', '#ffd28b'],
    _0x4452f1 = (_0x2632ff) =>
      null === _0x2632ff
        ? 'Пока нет'
        : _0x2632ff < 0x3c
          ? _0x2632ff.toLocaleString('ru-RU', {
              maximumFractionDigits: 0x1,
            }) + '\x20с'
          : Math.floor(_0x2632ff / 0xe10)
            ? Math.floor(_0x2632ff / 0xe10) + '\x20ч\x20' + Math.floor((_0x2632ff % 0xe10) / 0x3c) + '\x20мин'
            : Math.floor(_0x2632ff / 0x3c) + '\x20мин\x20' + Math.floor(_0x2632ff % 0x3c) + '\x20с';
  window.KizyacLabUI = {
    init(_0x7e69a) {
      const _0xf3c30 = () => _0x7e69a.state(),
        _0xc3ae1c = (_0x25c171) => _0x4fab3b.format(_0x25c171, _0xf3c30().settings.notation),
        _0x7590d8 = (_0x5968a3) =>
          '×' +
          _0x5968a3.toLocaleString('ru-RU', {
            maximumFractionDigits: 0x2,
          });
      let _0x4085c0 = -0x1,
        _0x440430 = -0x1 / 0x0,
        _0xa1ce6f = -0x1 / 0x0,
        _0x58836d = 0x0,
        _0x57b2dd = 0x0;
      const _0x5e0761 = document.createElement('div');
      function _0x37d9d9() {
        clearTimeout(_0x57b2dd);
        for (const _0x4199d7 of _0x5e0761.getAnimations({
          subtree: true,
        }))
          _0x4199d7.cancel();
        ((_0x5e0761.hidden = true),
          _0x5e0761.replaceChildren(),
          delete _0x5e0761.dataset.mode,
          delete document.body.dataset.resetEffect);
      }
      function _0x2ad664({ type: _0x45b8b9, source: _0xc528d2 }) {
        const _0x48c0a0 = _0xf3c30(),
          _0x3abc30 = KizyacMotion,
          _0x5eb62a =
            'reality' === _0x45b8b9 ? 0x4 : 'singularity' === _0x45b8b9 ? 0x3 : 'decay' === _0x45b8b9 ? 0x2 : 0x1;
        if (!_0x3abc30.allowed(_0x48c0a0)) return void _0x37d9d9();
        const _0x27424c = performance.now();
        if ('auto' === _0xc528d2 && ('manual' === _0x5e0761.dataset.mode || _0x27424c - _0xa1ce6f < 0x7d0)) return;
        if (
          'manual' === _0xc528d2 &&
          'auto' !== _0x5e0761.dataset.mode &&
          _0x27424c - _0x440430 < 0x7d0 &&
          _0x5eb62a <= _0x58836d
        )
          return;
        if (
          (_0x37d9d9(),
          _0x5e0761.style.setProperty('--reset-color', _0x165dba[_0x5eb62a - 0x1]),
          (_0x5e0761.dataset.kind = _0x45b8b9),
          (_0x5e0761.dataset.mode = _0xc528d2),
          (_0x5e0761.hidden = false),
          'auto' === _0xc528d2)
        ) {
          _0xa1ce6f = _0x27424c;
          const _0x6afffc = 0x118,
            _0x23073f = document.createElement('div');
          return (
            (_0x23073f.className = 'reset-edge-glow'),
            _0x5e0761.append(_0x23073f),
            _0x3abc30.run(
              _0x23073f,
              [
                {
                  opacity: 0x0,
                },
                {
                  opacity: 0.4,
                  offset: 0.24,
                },
                {
                  opacity: 0x0,
                },
              ],
              {
                duration: _0x6afffc,
              },
              _0x48c0a0,
            ),
            void (_0x57b2dd = setTimeout(_0x37d9d9, _0x6afffc))
          );
        }
        ((_0x440430 = _0x27424c), (_0x58836d = _0x5eb62a), (document.body.dataset.resetEffect = _0x45b8b9));
        const _0x29263e = _0x5eb62a >= 0x3 ? 0x3e8 : 0x2 === _0x5eb62a ? 0x2f8 : 0x1f4;
        ((_0x5e0761.innerHTML =
          '<div class="reset-aura"></div><div class="reset-heart"></div><div class="reset-caption">' +
          (_0x333b19[_0x45b8b9] || 'Новый эксперимент') +
          '</div>'),
          _0x3abc30.run(
            _0x5e0761.querySelector('.reset-aura'),
            [
              {
                opacity: 0x0,
              },
              {
                opacity: 0.065 * _0x5eb62a,
                offset: 0.2,
              },
              {
                opacity: 0x0,
              },
            ],
            {
              duration: _0x29263e,
              easing: 'linear',
            },
            _0x48c0a0,
          ),
          _0x3abc30.run(
            _0x5e0761.querySelector('.reset-heart'),
            [
              {
                opacity: 0.7,
                transform: 'translate(-50%,-50%) scale(.95)',
              },
              {
                opacity: 0.9,
                transform: 'translate(-50%,-50%) scale(.22)',
                offset: 0.22,
              },
              {
                opacity: 0x0,
                transform: 'translate(-50%,-50%) scale(3.6)',
              },
            ],
            {
              duration: _0x29263e,
            },
            _0x48c0a0,
          ),
          _0x3abc30.run(
            _0x5e0761.querySelector('.reset-caption'),
            [
              {
                opacity: 0x0,
                transform: 'translateY(6px)',
              },
              {
                opacity: 0.9,
                transform: 'translateY(0)',
                offset: 0.2,
              },
              {
                opacity: 0.9,
                transform: 'translateY(0)',
                offset: 0.7,
              },
              {
                opacity: 0x0,
                transform: 'translateY(-4px)',
              },
            ],
            {
              duration: _0x29263e,
              easing: 'linear',
            },
            _0x48c0a0,
          ));
        for (let _0x5283e1 = 0x0; _0x5283e1 < _0x5eb62a + 0x1; _0x5283e1++) {
          const _0x17baab = document.createElement('div');
          ((_0x17baab.className = 'reset-wave'),
            _0x5e0761.append(_0x17baab),
            _0x3abc30.run(
              _0x17baab,
              [
                {
                  opacity: 0.85,
                  transform: 'translate(-50%,-50%)\x20scale(.95)',
                },
                {
                  opacity: 0x0,
                  transform: 'translate(-50%,-50%) scale(' + (3.5 + 0.8 * _0x5eb62a) + ')',
                },
              ],
              {
                duration: _0x29263e - 0xb4,
                delay: 0x8c + 0x41 * _0x5283e1,
                easing: 'linear',
              },
              _0x48c0a0,
            ));
        }
        if (_0x5eb62a >= 0x2)
          for (let _0x1d2232 = 0x0; _0x1d2232 < 0xc + _0x5eb62a; _0x1d2232++) {
            const _0x1a8266 = document.createElement('i');
            ((_0x1a8266.className = 'reset-spark'), _0x5e0761.append(_0x1a8266));
            const _0x1d917a = (_0x1d2232 / (0xc + _0x5eb62a)) * Math.PI * 0x2,
              _0x4c370f = Math.min(innerWidth, innerHeight) * (0.45 + 0.08 * _0x5eb62a),
              _0x2e2a82 =
                'translate(calc(-50%\x20+\x20' +
                Math.cos(_0x1d917a) * _0x4c370f +
                'px),calc(-50% + ' +
                Math.sin(_0x1d917a) * _0x4c370f +
                'px))\x20rotate(' +
                _0x1d917a +
                'rad)';
            _0x3abc30.run(
              _0x1a8266,
              [
                {
                  opacity: 0.7,
                  transform: 'translate(-50%,-50%) rotate(' + _0x1d917a + 'rad)',
                },
                {
                  opacity: 0x0,
                  transform: _0x2e2a82,
                },
              ],
              {
                duration: _0x29263e - 0x64,
                delay: 0xb4,
                easing: 'linear',
              },
              _0x48c0a0,
            );
          }
        _0x57b2dd = setTimeout(_0x37d9d9, _0x29263e + 0x41 * _0x5eb62a + 0x8c);
      }
      function _0x2e671d() {
        const _0x3aa091 = _0x1916a9('reset-preview');
        if (!_0x3aa091) return;
        const _0x45404c = _0x3934d6.preview(_0xf3c30(), _0x3aa091.dataset.type);
        ((_0x3aa091.querySelector('[data-reset-gain]').textContent =
          _0x45404c.gainLabel ||
          (_0x4fab3b.valid(_0x45404c.gain)
            ? '+' + _0xc3ae1c(_0x45404c.gain) + '\x20' + _0x45404c.currency
            : 'Сброс пока недоступен')),
          (_0x3aa091.querySelector('[data-reset-balance]').textContent = _0x45404c.gainLabel
            ? 'Следующий\x20цикл\x20пройдёт\x20быстрее'
            : 'Запас\x20после\x20сброса:\x20' + _0xc3ae1c(_0x45404c.after) + '\x20' + _0x45404c.currency));
      }
      function _0x3ce8c8(_0x8741b1) {
        const _0x2f30c0 = _0xf3c30();
        return 'boost' === _0x8741b1
          ? _0x3af647.canBoost(_0x2f30c0)
          : 'resonance' === _0x8741b1
            ? _0x3af647.canResonance(_0x2f30c0)
            : 'decay' === _0x8741b1
              ? !_0x2f30c0.challenge && _0x4fab3b.valid(_0x3af647.isotopeGain(_0x2f30c0))
              : 'singularity' === _0x8741b1
                ? _0x3af647.canSing(_0x2f30c0)
                : _0x3af647.canReality(_0x2f30c0);
      }
      function _0x4675da(_0x446cb6) {
        const _0x4819cf = _0x3934d6.data(_0xf3c30()),
          _0x512336 = _0x4819cf.stories.includes(_0x446cb6.id),
          _0x3969eb = _0x4819cf.read.includes(_0x446cb6.id);
        return (
          '<article class="card story-card ' +
          (_0x512336 ? '' : 'sealed') +
          '" data-story="' +
          _0x446cb6.id +
          '" data-open="' +
          _0x512336 +
          '\x22\x20data-read=\x22' +
          _0x3969eb +
          '\x22><span\x20class=\x22eyebrow\x22>ЗАПИСЬ\x20' +
          String(_0x3934d6.STORIES.indexOf(_0x446cb6) + 0x1).padStart(0x2, '0') +
          '\x20·\x20' +
          (_0x512336 ? (_0x3969eb ? 'ПРОЧИТАНО' : 'НОВАЯ') : 'ЗАКРЫТО') +
          '</span><h3>' +
          (_0x512336 ? _0x446cb6.title : 'Запечатанная запись') +
          '</h3><p>' +
          (_0x512336 ? _0x446cb6.text.slice(0x0, 0x5c) + '…' : _0x446cb6.hint) +
          '</p>' +
          (_0x512336
            ? '<button class="secondary wide" data-act="story-read" data-id="' +
              _0x446cb6.id +
              '">Читать запись</button>'
            : '') +
          '</article>'
        );
      }
      return (
        (_0x5e0761.id = 'reset-vfx'),
        (_0x5e0761.className = 'reset-vfx'),
        (_0x5e0761.hidden = true),
        _0x5e0761.setAttribute('aria-hidden', 'true'),
        document.body.append(_0x5e0761),
        document.addEventListener('visibilitychange', () => {
          document.hidden && _0x37d9d9();
        }),
        {
          refresh: function () {
            const _0x3219dc = _0xf3c30();
            (_0x3934d6.capture(_0x3219dc),
              (function () {
                const _0x280aa8 = _0xf3c30();
                document.querySelectorAll('.page.active\x20[data-dim]').forEach((_0x137053) => {
                  const _0x38507e = +_0x137053.dataset.dim,
                    _0x12dae5 = _0x3934d6.helper(_0x280aa8, _0x38507e),
                    _0x18e06c = _0x137053.querySelector('.dim-symbol');
                  if (((_0x137053.dataset.form = _0x12dae5.rank), _0x18e06c.dataset.form !== String(_0x12dae5.rank))) {
                    const _0x134bfe = _0x18e06c.dataset.form;
                    ((_0x18e06c.innerHTML = (function (_0x50da84, _0x894923) {
                      const _0x206b2c = _0x3934d6.helper(_0x50da84, _0x894923),
                        _0x4298c4 = _0x3af647.DIMENSIONS[_0x894923];
                      return (
                        '<svg class="helper-art form-' +
                        _0x206b2c.rank +
                        '" viewBox="0 0 64 64" aria-hidden="true"><circle class="helper-halo" cx="32" cy="32" r="28"/><g class="helper-orbit"><ellipse cx="32" cy="32" rx="27" ry="15" transform="rotate(-30 32 32)"/>' +
                        (_0x206b2c.rank >= 0x2
                          ? '<ellipse cx="32" cy="32" rx="27" ry="15" transform="rotate(45 32 32)"/>'
                          : '') +
                        '</g><svg\x20x=\x2218\x22\x20y=\x2218\x22\x20width=\x2228\x22\x20height=\x2228\x22><use\x20href=\x22#i-' +
                        _0x4298c4.icon +
                        '"/></svg>' +
                        Array.from(
                          {
                            length: _0x206b2c.rank + 0x1,
                          },
                          (_0x510700, _0xb33794) =>
                            '<circle class="helper-node" cx="' +
                            (0xc + 0xd * _0xb33794) +
                            '\x22\x20cy=\x2253\x22\x20r=\x222.3\x22/>',
                        ).join('') +
                        '</svg>'
                      );
                    })(_0x280aa8, _0x38507e)),
                      void 0x0 !== _0x134bfe &&
                        _0x137053.getBoundingClientRect().top < innerHeight &&
                        KizyacMotion.run(
                          _0x18e06c,
                          [
                            {
                              opacity: 0.35,
                              transform: 'scale(.95)',
                            },
                            {
                              opacity: 0x1,
                              transform: 'scale(1)',
                            },
                          ],
                          {
                            duration: 0xdc,
                            delay: 0x1e * Math.min(_0x38507e, 0x4),
                          },
                          _0x280aa8,
                        ),
                      (_0x18e06c.dataset.form = _0x12dae5.rank));
                    let _0x3d095d = _0x137053.querySelector('.helper-form');
                    (_0x3d095d ||
                      ((_0x3d095d = document.createElement('small')),
                      (_0x3d095d.className = 'helper-form'),
                      _0x137053.querySelector('h3').after(_0x3d095d)),
                      (_0x3d095d.textContent = _0x12dae5.name + ' · форма ' + (_0x12dae5.rank + 0x1) + '/4'));
                  }
                });
              })(),
              (function () {
                const _0xa9a121 = _0xf3c30(),
                  _0x5ddb35 = Math.max(_0xa9a121.bestStage, _0x3af647.stage(_0xa9a121));
                if (_0x5ddb35 === _0x4085c0) return;
                _0x4085c0 = _0x5ddb35;
                let _0x249a0f = _0x1916a9('lab-mutation-art');
                _0x249a0f ||
                  ((_0x249a0f = document.createElementNS('http://www.w3.org/2000/svg', 'g')),
                  (_0x249a0f.id = 'lab-mutation-art'),
                  _0x1916a9('jar-art').querySelector('g[clip-path]').append(_0x249a0f));
                const _0x4d8ed7 = Math.min(0x3, Math.floor(_0x5ddb35 / 0xa));
                _0x249a0f.innerHTML =
                  Array.from(
                    {
                      length: _0x5ddb35 < 0x4 ? 0x3 : _0x4d8ed7 >= 0x2 ? 0xa : 0x6,
                    },
                    (_0xa09ff5, _0x2004f9) =>
                      '<circle class="jar-mote" style="animation-delay:-' +
                      0.65 * _0x2004f9 +
                      's\x22\x20cx=\x22' +
                      (0x41 + ((0x2b * _0x2004f9) % 0xdc)) +
                      '\x22\x20cy=\x22' +
                      (0x109 + ((0x61 * _0x2004f9) % 0x1a4)) +
                      '\x22\x20r=\x22' +
                      (_0x4d8ed7 >= 0x1 ? 0x3 + (_0x2004f9 % 0x3) : 0x2) +
                      '\x22\x20fill=\x22' +
                      _0x165dba[_0x4d8ed7] +
                      '"/>',
                  ).join('') +
                  (_0x4d8ed7 >= 0x1
                    ? '<path class="jar-current" d="M65 640Q285 570 95 480T275 300" fill="none" stroke="' +
                      _0x165dba[_0x4d8ed7] +
                      '" stroke-opacity=".4" stroke-width="3"/>'
                    : '') +
                  (_0x4d8ed7 >= 0x2
                    ? '<g class="jar-orbit"><ellipse cx="175" cy="470" rx="98" ry="27" fill="none" stroke="' +
                      _0x165dba[_0x4d8ed7] +
                      '" stroke-opacity=".5" stroke-width="3"/><ellipse cx="175" cy="470" rx="47" ry="115" fill="none" stroke="' +
                      _0x165dba[_0x4d8ed7] +
                      '\x22\x20stroke-opacity=\x22.3\x22\x20stroke-width=\x222\x22/></g>'
                    : '') +
                  (_0x4d8ed7 >= 0x3
                    ? '<path class="jar-rift" d="m177 240-32 99 47 39-67 85 73 40-39 94 34 79" stroke="#fff0ba" stroke-opacity=".65" stroke-width="5" fill="none"/>'
                    : '');
              })(),
              (function () {
                if (!_0x1916a9('production-cps')) return;
                const _0x16ae03 = _0xf3c30();
                ((_0x1916a9('production-cps').textContent = _0xc3ae1c(_0x3af647.cps(_0x16ae03))),
                  (_0x1916a9('production-tap').textContent = _0xc3ae1c(_0x3af647.tapPower(_0x16ae03))));
                const _0x3bc811 = _0x44a480
                    .data(_0x16ae03)
                    .active.map((_0x28bcfe) => _0x44a480.ELEMENTS.find((_0x4d7571) => _0x4d7571.id === _0x28bcfe).name),
                  _0x4863ce = _0x44a480.combination(_0x16ae03),
                  _0xf8ceab = _0x3af647.tapBoostStatus(_0x16ae03);
                _0x1916a9('production-composition').textContent =
                  'Состав: ' +
                  (_0x3bc811.join(' + ') || 'пусто') +
                  (_0x4863ce ? '\x20·\x20реакция\x20«' + _0x4863ce.name + '»' : '') +
                  '. Усиления: ' +
                  _0x16ae03.boosts +
                  ',\x20резонансы:\x20' +
                  _0x16ae03.resonance +
                  ', синхронизации: ' +
                  _0x16ae03.ticks +
                  '.\x20' +
                  (_0xf8ceab.active
                    ? 'Буст ×' + _0xf8ceab.active + '\x20действует\x20только\x20на\x20нажатия.'
                    : 'Буст\x20нажатий\x20не\x20активен.') +
                  (_0x16ae03.challenge ? '\x20Состав\x20и\x20модификации\x20отключены\x20протоколом.' : '');
                for (const _0x3dfecd of _0x3934d6.production(_0x16ae03)) {
                  const _0x19d9ce = document.querySelector('[data-production-row="' + _0x3dfecd.i + '\x22]');
                  ((_0x19d9ce.hidden = _0x3dfecd.i >= _0x3af647.learnFeatures(_0x16ae03).dimensions),
                    _0x19d9ce.hidden ||
                      (_0x19d9ce.classList.toggle('locked', !_0x3dfecd.available),
                      _0x3dfecd.available
                        ? ((_0x19d9ce.querySelector('[data-output]').textContent =
                            _0xc3ae1c(_0x3dfecd.output) + '\x20/\x20сек'),
                          (_0x19d9ce.querySelector('[data-unit-rate]').textContent =
                            _0xc3ae1c(_0x3dfecd.quantity) +
                            ' помощников · каждый ' +
                            _0xc3ae1c(_0x3dfecd.unit) +
                            ' / сек'),
                          (_0x19d9ce.querySelector('[data-effects]').textContent =
                            'Элементы и реакция ' +
                            _0x7590d8(Math.pow(0xa, _0x3dfecd.elements)) +
                            '\x20·\x20модификации\x20' +
                            _0x7590d8(Math.pow(0xa, _0x3dfecd.mod))),
                          (_0x19d9ce.querySelector('[data-next-batch]').textContent =
                            'До следующего пакетного усиления: ' +
                            (0xa - (_0x16ae03.dims[_0x3dfecd.i].b % 0xa)) +
                            ' покупок · цена следующей ' +
                            _0xc3ae1c(_0x3af647.dimensionCost(_0x16ae03, _0x3dfecd.i))))
                        : ((_0x19d9ce.querySelector('[data-output]').textContent = 'Ступень закрыта'),
                          (_0x19d9ce.querySelector('[data-unit-rate]').textContent =
                            'Откроется\x20после\x20усиления\x20лаборатории'),
                          (_0x19d9ce.querySelector('[data-effects]').textContent = ''),
                          (_0x19d9ce.querySelector('[data-next-batch]').textContent =
                            'Пока не участвует в производстве'))));
                }
              })(),
              (function () {
                if (!_0x1916a9('records-cheat')) return;
                const _0x336771 = _0x3934d6.data(_0xf3c30());
                ((_0x1916a9('records-cheat').hidden = !_0x336771.cheated),
                  (_0x1916a9('records-legacy').hidden = null === _0x336771.legacyDecayTime),
                  (_0x1916a9('records-legacy').textContent =
                    'Старая запись распада: ' +
                    _0x4452f1(_0x336771.legacyDecayTime) +
                    '. В прежних версиях отсчёт начинался от последнего малого сброса; эта запись хранится отдельно от новых рекордов полного цикла.'),
                  (document.querySelector('[data-record="peakBank"]').textContent = _0xc3ae1c(_0x336771.peakBank)),
                  (document.querySelector('[data-record="peakCps"]').textContent = _0xc3ae1c(_0x336771.peakCps)));
                for (const _0x327eb2 of _0x3934d6.TYPES) {
                  const _0x384723 = document.querySelector('[data-record-type="' + _0x327eb2 + '\x22]'),
                    _0x1285f3 = _0x336771.records[_0x327eb2];
                  ((_0x384723.querySelector('[data-best-time]').textContent = _0x4452f1(_0x1285f3.bestTime)),
                    (_0x384723.querySelector('[data-last-time]').textContent =
                      null === _0x1285f3.lastTime && _0x1285f3.count
                        ? 'Время\x20не\x20записано'
                        : _0x4452f1(_0x1285f3.lastTime)),
                    (_0x384723.querySelector('[data-record-count]').textContent = 'ЗАПИСЕЙ: ' + _0x1285f3.count),
                    (_0x384723.querySelector('[data-record-comparison]').textContent =
                      null === _0x1285f3.lastTime
                        ? 'Заверши\x20цикл,\x20чтобы\x20сравнить\x20время.'
                        : _0x1285f3.lastTime === _0x1285f3.bestTime
                          ? 'Последний цикл — личный рекорд'
                          : 'На\x20' + _0x4452f1(_0x1285f3.lastTime - _0x1285f3.bestTime) + ' медленнее лучшего цикла'),
                    (_0x384723.querySelector('[data-record-gain]').textContent = ['boost', 'resonance'].includes(
                      _0x327eb2,
                    )
                      ? 'Усиление производственной цепи'
                      : _0x4fab3b.valid(_0x1285f3.bestGain)
                        ? 'Лучшая\x20награда:\x20' +
                          _0xc3ae1c(_0x1285f3.bestGain) +
                          '\x20' +
                          ('decay' === _0x327eb2 ? 'изотопов' : 'singularity' === _0x327eb2 ? 'массы' : 'ядер')
                        : 'Награда пока не записана'));
                }
              })(),
              (function () {
                if (!_0x1916a9('story-list')) return;
                const _0x3df19d = _0x3934d6.data(_0xf3c30());
                _0x1916a9('story-counter').textContent =
                  'Открыто\x20' +
                  _0x3df19d.stories.length +
                  ' / ' +
                  _0x3934d6.STORIES.length +
                  ' · не прочитано ' +
                  _0x3df19d.stories.filter((_0x1b364f) => !_0x3df19d.read.includes(_0x1b364f)).length;
                for (const _0x1f2c9b of _0x3934d6.STORIES) {
                  const _0x24101f = document.querySelector('[data-story="' + _0x1f2c9b.id + '\x22]');
                  !_0x24101f ||
                    (_0x24101f.dataset.open === String(_0x3df19d.stories.includes(_0x1f2c9b.id)) &&
                      _0x24101f.dataset.read === String(_0x3df19d.read.includes(_0x1f2c9b.id))) ||
                    (_0x24101f.outerHTML = _0x4675da(_0x1f2c9b));
                }
              })(),
              _0x2e671d());
            const _0x5aa507 = _0x44a480.combination(_0x3219dc),
              _0x3a0eff = _0x1916a9('combination-state');
            _0x3a0eff &&
              (_0x3a0eff.classList.toggle('active', !!_0x5aa507 && !_0x3219dc.challenge),
              (_0x3a0eff.textContent = _0x3219dc.challenge
                ? 'Протокол: эффекты сочетаний приостановлены'
                : _0x5aa507
                  ? _0x5aa507.name +
                    ' · ' +
                    _0x5aa507.desc +
                    '\x20' +
                    _0x7590d8(_0x44a480.combinationPower(_0x3219dc, _0x5aa507))
                  : 'Добавь два элемента, чтобы найти реакцию'));
            const _0x5285ae = _0x1916a9('sample-composition');
            _0x5aa507 &&
              !_0x5285ae.hidden &&
              (_0x5285ae.querySelector('small').textContent = _0x3219dc.challenge
                ? 'Реакция приостановлена протоколом'
                : 'Реакция: ' + _0x5aa507.name + '\x20·\x20открыть\x20состав');
            const _0x46a662 = document.hidden ? null : _0x3934d6.takeEffect(_0x3219dc);
            (_0x46a662 && _0x2ad664(_0x46a662),
              (_0x3219dc.settings.motion && !matchMedia('(prefers-reduced-motion:\x20reduce)').matches) || _0x37d9d9());
          },
          action: function (_0x392b61, _0x25125f) {
            if (_0x3934d6.TYPES.includes(_0x392b61))
              return (
                _0x3ce8c8((_0xc4716d = _0x392b61)) &&
                  (_0x7e69a.confirm(
                    'boost' !== _0xc4716d || _0x3af647.learning(_0xf3c30()).seen.includes('boost')
                      ? _0x333b19[_0xc4716d] + '\x20·\x20новый\x20цикл'
                      : 'Первое\x20усиление',
                    (function (_0x2574a6) {
                      const _0x421b09 = _0x3934d6.preview(_0xf3c30(), _0x2574a6);
                      return (
                        '<div id="reset-preview" data-type="' +
                        _0x2574a6 +
                        '\x22><div\x20class=\x22reset-reward\x22><small>ПОЛУЧИШЬ</small><strong\x20data-reset-gain></strong><span\x20data-reset-balance></span></div><div\x20class=\x22reset-columns\x22><div><h3>Начнётся\x20заново</h3><ul>' +
                        _0x421b09.lost.map((_0xabbd2a) => '<li>' + _0xabbd2a + '</li>').join('') +
                        '</ul></div><div><h3>Сохранится</h3><ul>' +
                        _0x421b09.kept.map((_0x4f30c2) => '<li>' + _0x4f30c2 + '</li>').join('') +
                        '</ul></div></div><p\x20class=\x22fineprint\x22>Награда\x20обновляется,\x20пока\x20окно\x20открыто.\x20Сброс\x20выполняется\x20только\x20после\x20подтверждения.</p></div>'
                      );
                    })(_0xc4716d),
                    () => {
                      if (!_0x3ce8c8(_0xc4716d))
                        return void _0x7e69a.notify('Условия\x20сброса\x20изменились.\x20Проверь\x20прогресс.');
                      const _0x35a7a3 = _0xf3c30();
                      false !==
                        (0x0,
                        {
                          boost: _0x3af647.boostReset,
                          resonance: _0x3af647.resonanceReset,
                          decay: _0x3af647.decay,
                          singularity: _0x3af647.singularity,
                          reality: _0x3af647.reality,
                        }[_0xc4716d])(_0x35a7a3) &&
                        ('boost' === _0xc4716d && _0x3af647.learnAcknowledge(_0x35a7a3, 'boost'),
                        'decay' === _0xc4716d && _0x7e69a.go('decay', 'isotopes'),
                        'singularity' === _0xc4716d && _0x7e69a.go('cosmos', 'research'),
                        'reality' === _0xc4716d &&
                          (_0x7e69a.go('cosmos', 'realities'),
                          setTimeout(_0x7e69a.showGlyphs, KizyacMotion.allowed(_0x35a7a3) ? 0x4e2 : 0x1e)),
                        _0x7e69a.notify(_0x333b19[_0xc4716d] + ': новый цикл начался'));
                    },
                    'Выполнить\x20сброс',
                  ),
                  _0x2e671d()),
                true
              );
            var _0xc4716d;
            if ('story-read' === _0x392b61) {
              const _0x4cb49d = _0x3934d6.data(_0xf3c30()),
                _0x187e6f = _0x3934d6.STORIES.find((_0x4435a) => _0x4435a.id === _0x25125f);
              return (
                _0x187e6f &&
                  _0x4cb49d.stories.includes(_0x25125f) &&
                  (_0x4cb49d.read.includes(_0x25125f) || _0x4cb49d.read.push(_0x25125f),
                  _0x7e69a.save(),
                  _0x7e69a.modal(
                    '<span class="eyebrow">ЖУРНАЛ ЛАБОРАТОРИИ · ' +
                      (_0x3934d6.STORIES.indexOf(_0x187e6f) + 0x1) +
                      '</span><h2>' +
                      _0x187e6f.title +
                      '</h2><p class="story-full">' +
                      _0x187e6f.text +
                      '</p><button class="primary wide" data-act="close">Закрыть запись</button>',
                  )),
                true
              );
            }
            return false;
          },
          productionPage: function () {
            return (
              '<div\x20class=\x22lab-heading\x22><span\x20class=\x22eyebrow\x22>ПОЧЕМУ\x20БАНКА\x20РАСТЁТ</span><h3>Производство\x20по\x20ступеням</h3><p>Капля\x20создаёт\x20кизяк.\x20Каждый\x20следующий\x20помощник\x20создаёт\x20предыдущего\x20—\x20их\x20скорости\x20измеряются\x20в\x20разных\x20единицах.</p></div><div\x20class=\x22lab-metrics\x22><div><small>КИЗЯК\x20В\x20СЕКУНДУ</small><b\x20id=\x22production-cps\x22></b></div><div><small>ЗА\x20НАЖАТИЕ\x20СЕЙЧАС</small><b\x20id=\x22production-tap\x22></b></div></div><div\x20class=\x22info\x22\x20id=\x22production-composition\x22></div><div\x20class=\x22production-list\x22>' +
              _0x3af647.DIMENSIONS.map(
                (_0x33d2e2, _0x5bfc50) =>
                  '<article\x20class=\x22card\x20production-card\x22\x20data-production-row=\x22' +
                  _0x5bfc50 +
                  '"><div class="production-title"><span class="production-icon"><svg aria-hidden="true"><use href="#i-' +
                  _0x33d2e2.icon +
                  '\x22/></svg></span><div><h3>' +
                  _0x33d2e2.name +
                  '</h3><small>→\x20' +
                  (_0x5bfc50 ? _0x3af647.DIMENSIONS[_0x5bfc50 - 0x1].name : 'Кизяк') +
                  '</small></div></div><strong data-output></strong><p data-unit-rate></p><div class="production-effects" data-effects></div><small data-next-batch></small></article>',
              ).join('') +
              '</div><div class="info">Показана текущая цепь. Покупка старшего помощника сначала ускоряет создание младших; её вклад в кизяк растёт со временем. Все действующие бонусы уже включены в скорости.</div>'
            );
          },
          storyPage: function () {
            return (
              '<div\x20class=\x22lab-heading\x22><span\x20class=\x22eyebrow\x22>АРХИВ\x20ЗАКРЫТОЙ\x20ЛАБОРАТОРИИ</span><h3>История\x20одной\x20банки</h3><p\x20id=\x22story-counter\x22></p><p>Записи\x20открываются\x20по\x20ходу\x20эксперимента.\x20Они\x20рассказывают\x20историю\x20и\x20не\x20дают\x20валюту\x20или\x20усиления.</p></div><div\x20id=\x22story-list\x22>' +
              _0x3934d6.STORIES.map(_0x4675da).join('') +
              '</div>'
            );
          },
          recordsPage: function () {
            return (
              '<div class="lab-heading"><span class="eyebrow">СОРЕВНОВАНИЕ С СОБОЙ</span><h3>Личные рекорды</h3><p>Попробуй другой состав и сравни новый цикл с лучшим.</p></div><div id="records-legacy" class="info" hidden></div><div id="records-cheat" class="info" hidden>В этом сохранении использовались читы. Показатели включают изменённый прогресс.</div><div class="lab-metrics"><div><small>ЛУЧШИЙ ЦИКЛ</small><b data-record="peakBank"></b></div><div><small>ПИК КИЗЯКА / СЕК</small><b data-record="peakCps"></b></div></div>' +
              _0x3934d6.TYPES.map(
                (_0x101b6d) =>
                  '<article class="card record-card" data-record-type="' +
                  _0x101b6d +
                  '\x22><div\x20class=\x22record-heading\x22><h3>' +
                  _0x333b19[_0x101b6d] +
                  '</h3><small data-record-count></small></div><div class="record-times"><div><small>ЛУЧШЕЕ ВРЕМЯ</small><strong data-best-time></strong></div><div><small>ПОСЛЕДНИЙ ЦИКЛ</small><strong data-last-time></strong></div></div><p data-record-comparison></p><p data-record-gain></p></article>',
              ).join('') +
              '<p\x20class=\x22fineprint\x22>Новые\x20рекорды\x20фиксируются\x20с\x203.0.0,\x20в\x20том\x20числе\x20при\x20автоматических\x20сбросах.\x20Старые\x20записи\x20перенесены\x20отдельно.\x20Первый\x20незавершённый\x20цикл\x20после\x20обновления\x20может\x20не\x20иметь\x20полного\x20замера\x20и\x20не\x20участвует\x20в\x20сравнении\x20времени.\x20Усиления\x20не\x20обнуляют\x20таймер\x20полного\x20цикла\x20распада.\x20Время\x20включает\x20работу\x20офлайн-симуляции,\x20а\x20не\x20только\x20время\x20открытого\x20приложения.\x20У\x20усиления\x20и\x20резонанса\x20нет\x20награды\x20валютой.</p>'
            );
          },
          combinations: function () {
            const _0x392c39 = _0xf3c30(),
              _0x27c9cd = _0x3934d6.data(_0x392c39);
            return (
              '<div\x20id=\x22combination-state\x22\x20class=\x22reaction-state\x22></div><div\x20class=\x22lab-heading\x22><span\x20class=\x22eyebrow\x22>СОЧЕТАНИЯ\x20·\x20' +
              _0x27c9cd.combos.length +
              ' / ' +
              _0x44a480.COMBINATIONS.length +
              '</span><h3>Два\x20элемента\x20—\x20новая\x20реакция</h3><p>Бонус\x20реакции\x20добавляется\x20к\x20обычным\x20эффектам.\x20Сила\x20зависит\x20от\x20более\x20слабого\x20элемента\x20в\x20паре.\x20В\x20протоколах\x20реакции\x20отключены.</p></div><div\x20class=\x22combination-grid\x22>' +
              _0x44a480.COMBINATIONS.map((_0x430244) => {
                const _0x46204a = _0x27c9cd.combos.includes(_0x430244.id);
                return (
                  '<article class="card combo-card ' +
                  (_0x46204a ? '' : 'sealed') +
                  '"><span class="eyebrow">' +
                  (_0x46204a ? 'ОТКРЫТАЯ РЕАКЦИЯ' : 'НЕИЗВЕСТНАЯ РЕАКЦИЯ') +
                  '</span><h3>' +
                  (_0x46204a ? _0x430244.name : 'Найди сочетание') +
                  '</h3><p>' +
                  (_0x46204a
                    ? _0x430244.pair
                        .map((_0x3d784c) => _0x44a480.ELEMENTS.find((_0x2e7cdc) => _0x2e7cdc.id === _0x3d784c).name)
                        .join('\x20+\x20')
                    : 'tap' === _0x430244.kind
                      ? 'Объедини свойства элементов с ручной добычей.'
                      : 'isotope' === _0x430244.kind
                        ? 'Ищи пару среди элементов, связанных с распадом.'
                        : 'Попробуй связать элементы одной области лаборатории.') +
                  '</p>' +
                  (_0x46204a
                    ? '<strong>' +
                      _0x430244.desc +
                      ' · от ' +
                      _0x7590d8(_0x430244.power) +
                      ' до ' +
                      _0x7590d8(_0x430244.power + 0x2 * _0x430244.step) +
                      '</strong>'
                    : '') +
                  '</article>'
                );
              }).join('') +
              '</div>'
            );
          },
          burst: _0x2ad664,
        }
      );
    },
  };
})();


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
