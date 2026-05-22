CKEDITOR.plugins.add('soundmanager', {
	requires: ['richcombo'],
	init: function(editor) {
		var config = editor.config;

		// Each entry: [shortcode to insert, dropdown label, voice label]
		var tags = [
			// Bar UI
			['[smplayer tag=replace type=bar-ui color=00C8C3]',              'Bar UI: Custom Color',     'Bar UI Custom Color'],
			['[smplayer tag=replace type=bar-ui extra=true color=00C8C3]',   'Bar UI: Extra Controls',   'Bar UI Extra Controls'],
			['[smplayer tag=replace type=bar-ui bar-ui=playlist-open]',      'Bar UI: Playlist Open',    'Bar UI Playlist Open'],
			['[smplayer tag=replace type=bar-ui bar-ui=compact]',            'Bar UI: Compact',          'Bar UI Compact'],
			['[smplayer tag=replace type=bar-ui bar-ui=dark-text]',          'Bar UI: Dark Text',        'Bar UI Dark Text'],
			['[smplayer tag=replace type=bar-ui bar-ui=full-width]',         'Bar UI: Full Width',       'Bar UI Full Width'],
			['[smplayer tag=replace type=bar-ui bar-ui=fixed]',              'Bar UI: Fixed',            'Bar UI Fixed'],
			// Other players
			['[smplayer tag=replace type=mp3-links]',                        'Basic Links',              'Basic Links'],
			['[smplayer tag=replace type=page-player]',                      'Page Player',              'Page Player'],
			// MP3 button
			['[smplayer tag=replace type=mp3-button]',                       'MP3 Button',               'MP3 Button'],
			['[smplayer tag=replace type=mp3-button color=00C8C3]',          'MP3 Button: Custom Color', 'MP3 Button (custom color)'],
			// 360
			['[smplayer tag=replace type=360-player]',                       '360 Player',               '360 Player'],
			['[smplayer tag=replace type=360-vis]',                          '360 Visual (large)',       '360 Visual (large)'],
			// Cassette
			['[smplayer tag=replace type=cassette cassette=ma-r90]',         'Cassette: TDK MA-R90',     'Cassette: TDK MA-R90'],
			['[smplayer tag=replace type=cassette cassette=cutout]',         'Cassette: Default',        'Cassette: Default'],
			['[smplayer tag=replace type=cassette cassette=black-micro_dark]','Cassette: Black Micro',   'Cassette: Black Micro'],
			['[smplayer tag=replace type=cassette cassette=blue_color]',     'Cassette: Blue',           'Cassette: Blue'],
			['[smplayer tag=replace type=cassette cassette=green_color]',    'Cassette: Green',          'Cassette: Green']
		];

		editor.ui.addRichCombo('soundmanager', {
			label: 'SM2',
			title: 'Soundmanager',
			voiceLabel: 'Soundmanager',
			className: 'cke_format',
			multiSelect: false,

			panel: {
				css: [CKEDITOR.getUrl(this.path + 'css/soundmanager.css')],
				voiceLabel: 'Soundmanager'
			},

			init: function() {
				this.startGroup('Soundmanager');
				for (var i = 0; i < tags.length; i++) {
					// Use a numeric string key — avoids CKEditor mishandling [ ] in values
					this.add(String(i), tags[i][1], tags[i][2]);
				}
			},

			onClick: function(value) {
				editor.focus();
				editor.fire('saveSnapshot');
				var idx = parseInt(value, 10);
				if (!isNaN(idx) && tags[idx]) {
					editor.insertHtml(tags[idx][0]);
				}
				editor.fire('saveSnapshot');
			}
		});
	}
});

/*
Setup instructions:

1) Enable the plugin from the CKEditor field settings.
2) Add 'soundmanager' to a toolbar group.
*/
