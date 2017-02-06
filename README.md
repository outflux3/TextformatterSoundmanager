# Soundmanager2 Audio for Processwire

This module provides most of the free audio player interfaces for Soundmanager2 by Scott Schiller:

* Bar UI
* 360 UI
* 360+ spectrum UI
* mp3 buttons
* mp3 links
* Page Player, muxtape-style UI

The players may be placed anywhere in the content (ck editor or other text field) using the shortcode, for example:

[smplayer tag=audio1]

The output will be a default single player (as specificed in the module settings), or if multiple audio files have the same tag, and you don't specify a type (UI), it will default to the Bar UI for the playlist. You may also specify page-player for the type as it also supports playlists.

Here is a more complex tag:

[smplayer tag=audio1 type=bar-ui color=2288CC]

the tags available on shortcodes are:
*   tag - required to find the audio file on the page
* 	type (the type of player)
* 	limit (limit the number of files to load when using a playlist)

**Player specific tags for Bar UI:**
* 	bar-ui (options for the bar-ui player)
* 	skin (applies to a bar-ui skin to load)
* 	extra (when set to true, it will display the extra controls)
* 	color (hex value for color - applies to bar-ui and mp3 buttons)

**Player specific tags for Cassette:**
* 	cassette (options for the cassette player)


More Documentation coming soon!