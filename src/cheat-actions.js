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
