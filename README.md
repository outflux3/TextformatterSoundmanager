# Soundmanager2 Audio for Processwire

This module provides most of the free audio player interfaces for Soundmanager2 by Scott Schiller:

* Bar UI
* 360 UI
* 360+ spectrum UI
* mp3 buttons
* mp3 links
* Page Player, muxtape-style UI
* Cassette Player 

The players may be placed anywhere in the content (ck editor or other text field) using the shortcode, for example:

[smplayer tag=audio1]

The output will be a default single player (as specificed in the module settings), or if multiple audio files have the same tag, and you don't specify a type (UI), it will default to the Bar UI for the playlist. You may also specify page-player for the type as it also supports playlists.

Here is a more complex tag:

[smplayer tag=audio1 type=bar-ui color=2288CC]

the tags available on shortcodes are:
*   tag - *required to find the audio file on the page
* 	type (the type of player)
* 	limit (limit the number of files to load when using a playlist)

**Player specific tags for Bar UI:**
* 	bar-ui (options for the bar-ui player)
* 	skin (applies to a bar-ui skin to load)
* 	extra (when set to true, it will display the extra controls)
* 	color (hex value for color - applies to bar-ui and mp3 buttons)
*   compact (makes the player very narrow)
*   playlist-open (make the playlist drawer open instead of needing to click the playlist button to open it.)
*   dark-text (instead of white)
*   flat (remove the faux 3d effect)

When using the shortcode, you can chain the tags using underscore, for exmaple:

[smplayer type=bar-ui bar-ui=flat_playlist-open_dark_text]

**Player specific tags for Cassette:**
* 	cassette (options for the cassette player)


##Features

###Multiple Audio Formats

SM2 supports many formats, and those can be enabled/disabled in the module config if you want to prevent any from being loaded.
So far this module was tested with MP3 and AAC (.m4a).

###GetID3 Support

When enabled, ID3 tags from every audio file that pass through the Textformatter are read and cached as arrays using WireCache.
Therefore the first load of a page with new audio files may be slow while the tags are read and stored. The tags are indexed by the filename of the audio, so as long as you don't uplaod multiple files with the same filename, or change the tags, the system will store the metadata permanently. To remove any metadata, you would need to use Soma's Cache Admin module, or clear it from the database.

###Schema Support

When enabled, some schema tags relating to audio files will be added to the markup.

###CK editor Plugin

Very basic dropdown that inserts some pre-configured player codes into the editor. Copy the plugin into your CK editor plugins folder, enable and add a button for 'soundmanager'.



##About Soundmanager2

http://www.schillmania.com/projects/soundmanager2/

###Speak and be heard

####More sound, in more places

Despite being one of the senses, sound has largely been missing from the web due to inconsistent technology support. SoundManager 2 bridges this gap, making it easier to use audio across a growing variety of devices and platforms, both desktop and mobile.

###HTML5 + flash hybrid
####Complexity, reduced

Supporting HTML5 audio can be tedious in modern browsers, let alone legacy ones. With real-world visitors using browsers ranging from mobile Safari to IE 6 across a wide range of devices, there can be many support cases to consider.

SoundManager 2 gives you a single, powerful API that supports both new and old, using HTML5 audio where supported and optional Flash-based fallback where needed. Ideally when using SoundManager 2, audio "just works."

###The ginsu knife: 12 KB
####Big features, small footprint

Performance is an important metric, too. SoundManager 2 packs a comprehensive, feature-rich API into as little as 12 KB over the wire when optimized; that's less than 8% of the original, uncompressed file size.

SM2 is self-contained, having no external dependencies, and is compatible with popular JavaScript frameworks.

The source code is BSD-licensed and is provided in fully-commented, non-debug and compiler-optimized "minified" versions appropriate for development and production use.

