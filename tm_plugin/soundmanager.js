tinymce.PluginManager.add('soundmanager', function(editor) {

	var tags = [
		// Bar UI
		['[smplayer tag=replace_me type=bar-ui color=00C8C3]',                'Bar UI: Custom Color'],
		['[smplayer tag=replace_me type=bar-ui extra=true color=00C8C3]',     'Bar UI: Extra Controls'],
		['[smplayer tag=replace_me type=bar-ui bar-ui=playlist-open]',        'Bar UI: Playlist Open'],
		['[smplayer tag=replace_me type=bar-ui bar-ui=compact]',              'Bar UI: Compact'],
		['[smplayer tag=replace_me type=bar-ui bar-ui=dark-text]',            'Bar UI: Dark Text'],
		['[smplayer tag=replace_me type=bar-ui bar-ui=full-width]',           'Bar UI: Full Width'],
		['[smplayer tag=replace_me type=bar-ui bar-ui=fixed]',               'Bar UI: Fixed'],
		// Other players
		['[smplayer tag=replace_me type=mp3-links]',                          'Basic Links'],
		['[smplayer tag=replace_me type=page-player]',                        'Page Player'],
		// MP3 Button
		['[smplayer tag=replace_me type=mp3-button]',                         'MP3 Button'],
		['[smplayer tag=replace_me type=mp3-button color=00C8C3]',            'MP3 Button: Custom Color'],
		// 360
		['[smplayer tag=replace_me type=360-player]',                         '360 Player'],
		['[smplayer tag=replace_me type=360-vis]',                            '360 Visual (large)'],
		// Cassette
		['[smplayer tag=replace_me type=cassette cassette=ma-r90]',           'Cassette: TDK MA-R90'],
		['[smplayer tag=replace_me type=cassette cassette=cutout]',           'Cassette: Default'],
		['[smplayer tag=replace_me type=cassette cassette=black-micro_dark]', 'Cassette: Black Micro'],
		['[smplayer tag=replace_me type=cassette cassette=blue_color]',       'Cassette: Blue'],
		['[smplayer tag=replace_me type=cassette cassette=green_color]',      'Cassette: Green']
	];

	editor.ui.registry.addMenuButton('soundmanager', {
		text: 'SM2',
		tooltip: 'Insert Soundmanager2 Player',
		fetch: function(callback) {
			callback(tags.map(function(tag) {
				return {
					type: 'menuitem',
					text: tag[1],
					onAction: function() {
						editor.insertContent(tag[0]);
					}
				};
			}));
		}
	});

	return {
		getMetadata: function() {
			return { name: 'Soundmanager2', url: 'https://processwire.com' };
		}
	};

});
