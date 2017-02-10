# Soundmanager2 Audio for Processwire

This module provides most of the free audio player interfaces for Soundmanager2 by Scott Schiller:

* Bar UI
* 360 UI
* 360+ spectrum UI
* mp3 buttons
* mp3 links
* Page Player, muxtape.com-style UI
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

###Bar UI Skins

The Bar UI player can be used with the default skin, and set to any color. You can use the graident or flat to further configure the player.
In addition, the module comes with 4 skins that can be used, which make the player more flexible and possibly fit better into certain websites.

*  Gradient Fat (gradient-fat) - this is a taller/fatter version of the Bar-UI, and uses a graident for the background, and a css3 inset for the progress track.
*  Gradient Slim (gradient-slim) - same as above but smaller player with no text.
*  Osvaldas (osvaldas) - Based on https://osvaldas.info/examples/audio-player-responsive-and-touch-friendly/
*  One Designs (onedesigns) - Based on http://demo.onedesigns.com/mediaelement/index.html

Beyond that, you can create unlimited skins by copying the skins folder to your templates directory and adding more files there. See one of the other skins for how to setup the heading so that the module can read the name of the skin.

###Multiple Audio Formats

SM2 supports many formats, and those can be enabled/disabled in the module config if you want to prevent any from being loaded.
So far this module was tested with MP3 and AAC (.m4a).

###GetID3 Support

When enabled, ID3 tags from every audio file that pass through the Textformatter are read and cached as arrays using WireCache.
Therefore the first load of a page with new audio files may be slow while the tags are read and stored. The tags are indexed by the filename of the audio, so as long as you don't upload multiple files with the same filename, or change the tags, the system will store the metadata permanently. To remove any metadata, you would need to use Soma's Cache Admin module, or clear it from the database.

###Schema Support

When enabled, some schema tags relating to audio files will be added to the markup.

###CK editor Plugin

Very basic dropdown that inserts some pre-configured player codes into the editor. Copy the plugin into your CK editor plugins folder, enable and add a button for 'soundmanager'.


##Instructions

###Before you install:

1) You will need a files field that accepts audio files, so set the extensions you want to use, such as mp3, m4a, mp4, wav etc.

2) Also make sure that you enable tags on the files field because the module references the tags for any audio file in the shortcode.

3) Add the files field to your template.

###Installation and Setup

1) Install the module and adjust your settings from the module configuration screen.

2) Add the TextformatterSoundmanager textformatter to the field where you want to insert audio (e.g. 'body').

3) Optionally install the CK editor plugin to enable quick access to preconfigured shortcodes.

4) Add a shortcode into the textarea field that has the textformatter applied to.

5) You must reference the tag you entered in the audio file's tag field in the shortcode, and that will create a player for that audio file.

5a) To create a playlist, put the same tag in multiple audio files.

###Output

1) In order for the module to output the necessary styles and scripts, you need to echo the $config->styles and $config->scripts arrays into your site's header.
Here is an example:

```

	//In Header
	foreach($config->styles as $style) echo "<link rel='stylesheet' type='text/css' href='{$style}' />\n";

	// In Footer
	foreach($config->scripts as $script) echo "<script type='text/javascript' src='{$script}'></script>\n";

```


###API Usage

To access the module's ***player*** method directly, you would first init the module in your _init.php file:

```

	$sm2 = $modules->get('TextformatterSoundmanager');


```

then anywhere in your templates, you can output any audio file with any player, in an configuration like this:

```

	$options = [
		'type' => 'bar-ui',
		'skin' => 'gradient-fat',
		//'tag' => 'audio1', // tag is not required when outputting in API
		//'bar-ui' => 'playlist-open' //all of the classes to apply to the bar ui.
	];

	foreach($page->audio as $track) {
		$content .= $sm2->player($track, $options);
	}

	// you could also do this:
	$content .= $sm2->player($page->audio, $options);
	// this would output all of the audio files in single player.

```

###Advanced Features

*  Using other pages for storing music as playlists.
You can create a field to hold a tag for a ***page** and then refer to that tag in your shortcode.
The shortcode word would be smplaylist instead of smplayer. The module will search the site for pages with that tag in that field.
Then it will output all of the audio files in that page's audio field using the player and settings you specify.
See the module configuration to select the tag field and adjust your shortcode words.

###Caveats

Some player will not work well on the same page as other players.
- Bar UI and Page Player
- 360 Player and 360 Visual (large) players

Also note that the cassette player can only occur once on a page. You can have multiple cassettes output, but they will all play the same audio file.
The file that the cassette player uses is set in the script tag. In the future the setup may be modified to allow for cassette players to have their own audio files.


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

