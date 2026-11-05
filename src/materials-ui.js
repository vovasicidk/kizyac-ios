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
