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
