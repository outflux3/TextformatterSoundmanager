<?php

// if underscore separated options were passed to this, replace with space:
if(strpos($options['bar-ui'], '_') !== false) {
	$options['bar-ui'] = str_replace('_', ' ', $options['bar-ui']);
}

$opts = $options['bar-ui'];

?>

<div class="sm2-bar-ui <?=$opts?>">
  <div class="bd sm2-main-controls">

    <div class="sm2-inline-texture"></div>
    <div class="sm2-inline-gradient"></div>

    <!-- Play Button ========================== -->
    <div class="sm2-inline-element sm2-button-element">
     <div class="sm2-button-bd">
      <a href="#play" class="sm2-inline-button play-pause"></a>
     </div>
    </div>

    <!-- Progress ========================== -->
    <div class="sm2-inline-element sm2-inline-status">

     <div class="sm2-playlist">
      <div class="sm2-playlist-target">
       <noscript><p>JavaScript is required.</p></noscript>
      </div>
     </div>

     <div class="sm2-progress">
      <div class="sm2-row">
      <div class="sm2-inline-time">0:00</div>
       <div class="sm2-progress-bd">
        <div class="sm2-progress-track">
         <div class="sm2-progress-bar"></div>
         <div class="sm2-progress-ball"><div class="icon-overlay"></div></div>
        </div>
       </div>
       <div class="sm2-inline-duration">0:00</div>
      </div>
     </div>

    </div>

    <!-- Volume ========================== -->
    <div class="sm2-inline-element sm2-button-element sm2-volume">
     <div class="sm2-button-bd">
      <span class="sm2-inline-button sm2-volume-control volume-shade"></span>
      <a href="#volume" class="sm2-inline-button sm2-volume-control"></a>
     </div>
    </div>

<?php
if($options['extra'] == true) {
?>
	  <!-- extra controls -->
	  <div class="sm2-inline-element sm2-button-element sm2-nav">
	   <div class="sm2-button-bd">
	    <a href="#prev" title="Previous" class="sm2-inline-button previous"></a>
	   </div>
	  </div>

	  <div class="sm2-inline-element sm2-button-element sm2-nav">
	   <div class="sm2-button-bd">
	    <a href="#next" title="Next" class="sm2-inline-button next"></a>
	   </div>
	  </div>

	  <div class="sm2-inline-element sm2-button-element sm2-menu">
	   <div class="sm2-button-bd">
	     <a href="#menu" class="sm2-inline-button menu"></a>
	   </div>
	  </div>

<?php } ?>

</div> <!-- end main controls -->

 <div class="bd sm2-playlist-drawer sm2-element">

    <div class="sm2-inline-texture">
     <div class="sm2-box-shadow"></div>
    </div>

    <div class="sm2-playlist-wrapper">
      <ul itemscope itemtype="http://schema.org/MusicPlaylist" class="sm2-playlist-bd">
        {{audio}}
      </ul>
    </div><!-- /playlist -->

 </div><!-- /main-controls-->

</div>