(function() {
  var keys, newWindow, photoLoader, preloadHeadshot, programNotes, thumbnails, web, webKeys, webNext, webPreload, webPrev;

  preloadHeadshot = function() {
    return $(function() {
      var img;
      img = new Image();
      return $(img).load(function() {
        return $('#headshot').animate({
          opacity: 1
        }, 250);
      }).attr('src', '/images/headshot.png');
    });
  };

  newWindow = function() {
    return $('a.new-window').live('click', function() {
      window.open(this.href);
      return false;
    });
  };

  programNotes = function() {
    $('.programNotesOpen').click(function() {
      $(this).prevAll('.programNotes').slideDown('medium');
      $(this).html('').animate({
        marginBottom: "0px"
      }, 'medium');
      return false;
    });
    return $('.programNotesClose').click(function() {
      $(this).parent().slideUp('medium');
      $(this).parent().nextAll('.programNotesOpen').html('[+]&nbsp;Program Notes').animate({
        marginBottom: "30px"
      }, 'medium');
      return false;
    });
  };

  thumbnails = function() {
    var offOp;
    offOp = 0.4;
    return $('#galleryThumbs').find('img:not(img.on)').mouseover(function() {
      return $(this).animate({
        opacity: 1
      }, 200);
    }).mouseout(function() {
      return $(this).animate({
        opacity: offOp
      }, 200);
    });
  };

  photoLoader = function() {
    var height, id, img, section, siteSection, srcString, title, width;
    if ($('#photoLoaderInfo').length !== 0) {
      siteSection = $('#photoLoaderSiteSection').html();
      section = $('#photoLoaderSection').html();
      id = $('#photoLoaderID').html();
      width = $('#photoLoaderWidth').html();
      height = $('#photoLoaderHeight').html();
      title = $('#photoLoaderTitle').html();
      if (siteSection === 'photography') {
        srcString = '/media/' + siteSection + '/' + section + '/' + id + '.jpg';
      } else {
        srcString = '/media/' + siteSection + '/' + id + '.jpg';
      }
      img = document.createElement("img");
      return $(img).load(function() {
        $(this).hide();
        $('#pictureDiv').removeClass('loading').append(this);
        return $(this).fadeIn();
      }).attr('src', srcString).attr('width', width).attr('height', height).attr('alt', title);
    }
  };

  keys = function() {
    if (!($('#pageWeb').length > 0)) {
      if ($('a#previous').length !== 0) {
        $(document).bind('keydown', 'left', function() {
          return window.location = $('a#previous').attr('href');
        });
      }
      if ($('a#next').length !== 0) {
        return $(document).bind('keydown', 'right', function() {
          return window.location = $('a#next').attr('href');
        });
      }
    }
  };

  web = function() {
    var animationTime, containerSize;
    if ($('#pageWeb').length > 0) {
      containerSize = 330;
      if ($.browser.msie && $.browser.version.substr(0, 1) === '7' && $('#piece').html() !== '') {
        $('#pieceList ul').css('opacity', 0.1);
      }
      if ($('#piece').html() !== '') {
        webPreload("/media/web/" + ($('#piece').text()) + "/1.jpg", 1);
      }
      $('#pieceList a').click(function() {
        var url;
        url = $(this).attr('href');
        $('#pieceListContainer ul').stop().animate({
          opacity: 0.1
        }, animationTime);
        $('#pieceListContainer').stop().animate({
          width: 100
        }, animationTime);
        $('#webOverlay').animate({
          width: '100%'
        }, animationTime);
        $('#webFade').stop().animate({
          width: 20
        }, animationTime + 20, function() {
          return window.location = url;
        });
        return false;
      });
      animationTime = 200;
      $('#webToggle').hover(function() {
        return $(this).find('.inner').removeClass('off').addClass('on');
      }, function() {
        return $(this).find('.inner').removeClass('on').addClass('off');
      });
      $('#webToggle').click(function() {
        if ($('#pieceListContainer').attr('class').match(/collapsed/)) {
          $('#webOverlay').find('.inner').removeClass('expand').addClass('contract');
          $('#webOverlay').animate({
            width: 20,
            right: 20
          }, animationTime);
          $('#pieceListContainer').stop().animate({
            width: containerSize
          }, animationTime);
          $('#pieceListContainer ul').stop().animate({
            opacity: 1
          }, animationTime);
          $('#webFade').stop().animate({
            width: 40
          }, animationTime);
          $('#pieceListContainer').removeClass('collapsed');
        } else {
          $('#webFade').css('background', 'background: url(/images/webFade.png) 0 0 repeat-y;');
          $('#webOverlay').find('.inner').removeClass('contract').addClass('expand');
          $('#webOverlay').animate({
            width: '100%',
            right: 0
          }, animationTime);
          $('#pieceListContainer').stop().animate({
            width: 100
          }, animationTime);
          $('#pieceListContainer ul').stop().animate({
            opacity: 0.1
          }, animationTime);
          $('#webFade').stop().animate({
            width: 20
          }, animationTime);
          $('#pieceListContainer').addClass('collapsed');
        }
        return false;
      });
      $('#next').live('click', function() {
        webNext();
        return false;
      });
      return $('#previous').live('click', function() {
        webPrev();
        return false;
      });
    }
  };

  webKeys = function() {
    if ($('#pageWeb').length > 0) {
      if ($('a#next').length !== 0) {
        $(document).bind('keydown', 'right', function(evt) {
          webNext();
          return false;
        });
      }
      if ($('a#previous').length !== 0) {
        return $(document).bind('keydown', 'left', function(evt) {
          webPrev();
          return false;
        });
      }
    }
  };

  webNext = function() {
    var images, next, number, url;
    if ($('#pieceContent img').attr('src')) {
      number = parseInt($('#current').text(), 10);
      images = parseInt($('#images').text(), 10);
      next = number + 1 > images ? 1 : number + 1;
      url = $('#pieceContent img').attr('src').replace(/\d{1}.jpg/, next + ".jpg");
      webPreload(url, next);
      return $('#current').html(next);
    }
  };

  webPrev = function() {
    var images, next, number, url;
    if ($('#pieceContent img').attr('src')) {
      number = parseInt($('#current').text(), 10);
      images = parseInt($('#images').text(), 10);
      next = number - 1 === 0 ? images : number - 1;
      url = $('#pieceContent img').attr('src').replace(/\d{1}.jpg/, next + ".jpg");
      webPreload(url, next);
      return $('#current').html(next);
    }
  };

  webPreload = function(url, number) {
    var img;
    $('#webImage').html('').addClass('loading');
    img = new Image();
    return $(img).load(function() {
      $(this).hide();
      $('#webImage').removeClass('loading').append(this);
      return $(this).fadeIn();
    }).attr('src', url).attr('width', 750).attr('alt', ($('#name').html()) + " Screenshot " + number);
  };

  $(function() {
    preloadHeadshot();
    newWindow();
    programNotes();
    thumbnails();
    photoLoader();
    keys();
    web();
    return webKeys();
  });

}).call(this);
