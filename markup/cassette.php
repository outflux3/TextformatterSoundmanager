<?php

$options = 'tape texture clear ' . $options;

if(strpos($options, '_') !== false) {
	$options = str_replace('_', ' ', $options);
}

// the cutout option initiates the mask
$reelMask = '';

if(strpos($options, 'cutout')) {
	$reelMask = '
    <div class="left reel-mask"></div>
		<div class="right reel-mask"></div>';
}

// style="border:none;background-color:transparent"
$railMiddle = '
	   <div class="rail-middle">
    <div class="rail-middle-outline">
     <div class="hole-1"></div>
     <div class="hole-2"></div>
     <div class="hole-3"></div>
     <div class="hole-4"></div>
     <div class="tape-pad-holder">
      <div class="tape-pad"></div>
      <div class="tape-pad-line"></div>
     </div>
    </div>
    <div class="screw-bm"></div>
   </div>
   <div class="screw-tl"></div>
   <div class="screw-tr"></div>
   <div class="screw-bl"></div>
   <div class="screw-br"></div>
   <div class="screw-tm"></div>';

// MA-R90 uses a png for the middle rail..
if(strpos($options, 'ma-r90')) {
	$railMiddle = '
	<div class="rail-middle">
		<div class="rail-middle-outline"></div>
		</div>';
	}

?>

  <div class="<?=$options?>">
   <div class="rail-left"></div>
   <div class="rail-right"></div>
   	<?=$railMiddle?>
   	<?=$reelMask?>
   	<canvas class="connecting-tape"></canvas>
   <div class="left reel"></div>
   <div class="left spokes"></div>
   <div class="right reel"></div>
   <div class="right spokes"></div>
   <div class="progress-notches">
    <div class="n1"></div>
    <div class="n2"></div>
    <div class="n3"></div>
    <div class="n4"></div>
    <div class="n5"></div>
    <div class="n6"></div>
    <div class="n7"></div>
    <div class="n8"></div>
    <div class="n9"></div>
   </div>
   <div class="label">{{title}}</div>
   <div class="controls">
    <div class="bd">
     <ul>
      <li><a href="#" title="play/pause" class="play">&#9668;</a></li>
      <li><a href="#" title="rewind" class="rew">&#171;</a></li>
      <li><a href="#" title="fast-forward" class="ffwd">&#187;</a></li>
      <li><a href="#" title="stop" class="stop">&#9632;</a></li>
     </ul>
    </div>
   </div>
  </div>


