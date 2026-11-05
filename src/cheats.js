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
      return (
        true === _0x1092ca.cheats?.['unlocked'] &&
        0x12 === _0x1092ca.cheats.accessVersion &&
        !!_0x5d370f()?.['hasCheatAccess']()
      );
    } catch (_0x1c862e) {
      return false;
    }
  }
  function _0x2b60f8(_0x228a95, _0x58e68e) {
    if (!_0x274432(_0x228a95) || !_0x5d370f().approveCheatAction(_0x58e68e))
      throw Error('Введи код заново: доступ к редактору закрыт');
  }
  function _0x26c69a(_0x4dde14) {
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
