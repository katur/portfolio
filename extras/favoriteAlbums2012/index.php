<?php
  // // H E A D // //
  $title = 'Michael P. Geraci - My Favorite Albums of 2011';

  // gets the location of the page and assigns it to $location
  // format is /page.php
  $location = $_SERVER['PHP_SELF'];

  include("../../includes/head.php");
?>
  <body>
    <div id="menuWrapper" class="wrapOut">
      <div class="wrapIn">
        <?php
          // // M E N U // //
          include("../../includes/menu.php");
        ?>
      </div>
    </div>
    <div id="contentWrapper" class="wrapOut">
      <div class="wrapIn">
        <h2>I know you don't care, but here are</h2>
        <h1>My Favorite Albums of 2012</h1>
        <?php
          $albums = array(
            // artist, title, image, rambling, link, song name
            array('alt-J', 'An Awesome Wave', "altj", "This is some of the greatest weird pop I've heard recently. The production is clean and tight, and the voices are just odd enough to be interesting. The album has great flow and doesn't shy away from interesting interludes and experimentation.", '#', "Tesselate"),
            array('Anaïs Mitchell', 'Young Man in America', "anaismitchell", "Anaïs has the most amazing voice, and her folk music is sparse and beautifully arranged. Stories about love, loss, and forgiveness.", '#', 'Dyin Day'),
            array('Beach House', 'Bloom', "beachhouse", "Synthesizers, high voices, electronic drums. Beach House is a dream, a slowly moving, cloud-filled haze. The album is beautiful, and captivating as it brings you into its own world.", '#', "Other People"),
            array('Bear in Heaven', "I Love You, It's Cool", "bearinheaven", "This is self referential electronic pop. It's filled with an enviable and almost overwhelming sense of cool. This was a great show; the singer has exudes a boyish charm as he seems to sing about you and him, in the present tense.", '#', "Kiss Me Crazy"),
            array("Dinosaur Feathers", "Whistle Tips", "dinosaurfeathers", "Dinosaur Feathers is intricate, upbeat pop. It's complex, well arranged, well performed, and full of edgy guitars and time changes. They had me at the Bubb Rubb reference.", '#', "Young Bucks"),
            array("Grace Woodroofe", "Always Want", "gracewoodroofe", "Grace Woodroofe has a beautiful voice, and her record is filled with a pervasive melancholy that is very affecting. She's a great storyteller and some songs draw from very personal experiences. Hers was maybe the best live show of the year; her backing band is fantastic.", '#', "I've Handled Myself Wrong"),
            array("Here We Go Magic", "A Different Ship", "herewegomagic", "Quiet, contemplative pop. Drenched in reverb and echoing guitars, the songs are meticulously assembled, which plays in nice contrast to the nature of the lyrics; they often deal in uncertainty.", '#', "Over the Ocean"),
            array("Lemolo", "The Kaleidoscope", "lemolo", "Two female singers in close harmony, and lots of pianos and spacious guitars give this dream pop a longing, deliberate feel.", '#', "On Again, Off Again"),
            array("Lower Dens", "Nootropics", "lowerdens", "Lana Hunter's beautifully androgenous voice floats above beguilingly simple guitars. The songs strike me more as compositions or art music; the record is very well layed out, with a few longer songs and a musique concrète piece punctuating the catchy but surreal pop.", '#', "Brains"),
            array("Opossum", "Electric Hawaii", "opossum", "Description", '#', "Tesselate"),
            array("WhoMadeWho", "Brighter", "whomadewho", "Description", '#', "Tesselate"),
            array("Winterpills", "All My Lovely Goners", "winterpills", "Description", '#', "Tesselate")
          );
        ?>
        <ul id='albums'>
          <?php
            $i = 1;

            foreach($albums as $album) {
              $artist = $album[0];
              $title = $album[1];
              $image = $album[2];
              $text = $album[3];
              $link = $album[4];
              $song = $album[5];
              $root = preg_replace('/\/index.php\/?/', '', $_SERVER['PHP_SELF']);

              echo "
                <li>
                  <span class='count count$i'>$i</span>
                  <img src='$root/images/$image.jpg'>
                  <div class='content'>
                    <h1>$title</h1>
                    <h2>by <span>$artist</span></h2>
                    <div class='text'>$text</div>
                    <div class='song'>$song</div>
                    <div class='audio-wrapper'>
                      <audio controls>
                        <source src='$root/music/$image.ogg'></source>
                        <source src='$root/music/$image.mp3'></source>
                        <p>Your browser does not support html5 audio, <a href='$root/music/$artist.mp3'>download the file</a>.</p>
                      </audio>
                      <a class='play' href='#'>play</a>
                    </div>
                    <a class='link' href='$link' target='_blank'>buy it</a>
                  </div>
                </li>
              ";

              $i += 1;
            }
          ?>
        </ul>
        <div id='thanks'>
          that's it. thanks for reading.
          <br>complain via <a href='mailto:mgeraci@gmail.com'>email</a> or <a href='http://twitter.com/mgeraci' target='_blank'>twitter</a>.
        </div>
      </div>
    </div>
    <?php include('../../includes/googleAnalytics.php'); ?>
  </body>
</html>
