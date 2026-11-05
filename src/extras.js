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
