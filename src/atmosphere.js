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
