CKEDITOR.plugins.add( 'soundmanager',
{   
   requires : ['richcombo'],
   init : function( editor )
   {
      var config = editor.config,
         lang = editor.lang.format;

      var tags = [];
      // Bar UI
      tags[0]=["[smplayer tag=replace type=bar-ui color=00C8C3]", "Bar UI: Custom Color", "Bar UI Custom Color"];
      tags[1]=["[smplayer tag=replace type=bar-ui extra=true color=00C8C3]", "Bar UI: Extra Controls", "Bar UI Extra Controls"];
      tags[2]=["[smplayer tag=replace type=bar-ui bar-ui=playlist-open]", "Bar UI: Playlist Open", "Bar UI Playlist Open"];
      tags[3]=["[smplayer tag=replace type=bar-ui bar-ui=compact]", "Bar UI: Compact", "Bar UI Compact"];
      tags[4]=["[smplayer tag=replace type=bar-ui bar-ui=dark-text]", "Bar UI: Dark Text", "Bar UI Dark Text"];
      tags[5]=["[smplayer tag=replace type=bar-ui bar-ui=full-width]", "Bar UI: Full Width", "Bar UI Full Width"];
      tags[6]=["[smplayer tag=replace type=bar-ui bar-ui=fixed]", "Bar UI: Fixed", "Bar UI Fixed"];

      tags[7]=["[smplayer tag=replace type=mp3-links]", "Basic Links", "Basic Links"];

      tags[8]=["[smplayer tag=replace type=page-player]", "Page Player", "Page Player"];

      //MP3 button
      tags[9]=["[smplayer tag=replace type=mp3-button]", "MP3 Button", "MP3 Button"];
      tags[10]=["[smplayer tag=replace type=mp3-button color=00C8C3]", "MP3 Button (custom color)", "MP3 Button (custom color)"];

      // 360 (no options)
      tags[11]=["[smplayer tag=replace type=360-player]", "360 Player", "360 Player"];
      tags[12]=["[smplayer tag=replace type=360-vis]", "360 Visual (large)", "360 Visual (large)"];

      // Cassette
      tags[13]=["[smplayer tag=replace type=cassette cassette=ma-r90]", "Cassette: TDK MA-R90", "Cassette: TDK MA-R90"];
      tags[14]=["[smplayer tag=replace type=cassette cassette=cutout]", "Cassette: Default", "Cassette: Default"];
      tags[15]=["[smplayer tag=replace type=cassette cassette=black-micro_dark]", "Cassette: Black Micro", "Cassette: Black Micro"];
      tags[16]=["[smplayer tag=replace type=cassette cassette=blue_color]", "Cassette: Blue", "Cassette: Blue"];
      tags[17]=["[smplayer tag=replace type=cassette cassette=green_color]", "Cassette: Green", "Cassette: Green"];

      editor.ui.addRichCombo( 'soundmanager',
         {
            label : "SM2",
            title :"Soundmanager",
            voiceLabel : "Soundmanager",
            className : 'cke_format',
            multiSelect : false,

            panel :
            {
               //css : [ config.contentsCss, CKEDITOR.getUrl( editor.skinPath + 'editor.css' ) ],
               css : [ config.contentsCss, CKEDITOR.getUrl( this.path + 'css/soundmanager.css' ) ],
               voiceLabel : lang.panelVoiceLabel
            },

            init : function()
            {
               this.startGroup( "Soundmanager" );
               for (var this_tag in tags){
                  this.add(tags[this_tag][0], tags[this_tag][1], tags[this_tag][2]);
               }
            },

            onClick : function( value )
            {
               editor.focus();
               editor.fire( 'saveSnapshot' );
               editor.insertHtml(unescape(value));
               editor.fire( 'saveSnapshot' );
            }
         });
   }
});

/*

1) select to enable the plugin from the field settings, ckeditor

2) add 'soundmanager' to a toolbar

*/