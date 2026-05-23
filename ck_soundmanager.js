
var sm_config = ProcessWire.config.soundmanager;

if(typeof CKEDITOR !== 'undefined') {
	CKEDITOR.plugins.addExternal('soundmanager', sm_config.plugin_url  + 'smdropdown/');
}
