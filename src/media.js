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
