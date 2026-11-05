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
