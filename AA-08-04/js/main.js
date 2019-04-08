$(document).ready(function(){

  $("#test-circle").circliful({
    animation: 1,
    animationStep: 5,
    foregroundBorderWidth: 15,
    backgroundBorderWidth: 15,
    percent: 90,
    textSize: 28,
    textStyle: 'font-size: 24px;',
    textColor: '#666',
});
$("#test-circle1").circliful({
  animation: 1,
  animationStep: 5,
  foregroundBorderWidth: 15,
  backgroundBorderWidth: 15,
  percent: 35,
  textSize: 28,
  textStyle: 'font-size: 24px;',
  textColor: '#666',
});
$("#talentpro-circle").circliful({
  animation: 1,
  animationStep: 5,
  foregroundBorderWidth: 15,
  backgroundBorderWidth: 15,
  percent: 25,
  textSize: 28,
  textStyle: 'font-size: 24px;',
  textColor: '#666',
});
$(".notifyapps-mob").click(function(){
  $(".me-section").slideToggle("slow");
});

$(".moreapps").click(function(){
  $(".more-apps-section").slideToggle("slow");
});
$(".mail-person").click(function(){
  $(".employee-detail").toggle();
});
  $(".manage-nom-edit-save").click(function(){
    $('.manage-nom-edit').fadeToggle("fast");
  });
  $(".manage-nom-edit-btn").click(function(){
    $('.manage-nom-edit').fadeToggle("slow");
  });

  $(".settings-expan").click(function(){
    $('.settings-expanded').toggle("slow");
  });

  // $('.search-group').click(function() {
  //   $('.search-group').animate({width: '220px'}, 200)
  //   }, function() {
  //   $('.search-group').animate({width: '32px'}, 200)
  //   });

  $('.dashboard-search-btn').click(function() { 
    
    $('#searchGroup').toggle("slow");
  });


  $('[data-toggle="popover"]').popover();   
    /* data model js ends*/

    $('[data-toggle="tooltip"]').tooltip();  
    
    
 


/* bar chaart js start*/
    function abbreviateNumber(arr) {
      var newArr = [];            
      return newArr;
  }

  var labels = ["Filled", "Approved", "Revenue"];
  var values = [150, 120, 100];
  var outputValues = abbreviateNumber(values);

  $('.column-chart').simpleChart({
     
      type: 'column',
      layout: {
          width: '250px',
          height: '94px'
      },
      item: {
          label: labels,
          value: values,
          outputValue: outputValues,
          color: ['#00aeef'],
          prefix: '',
          suffix: ' Hrs',
          render: {
              margin: 2,
              size: 'relative'
          }
      }
  });
/* bar chaart js start*/

/* slider start*/

$('.me-slider').flumen({
  'arrows': false,
  'events':{
      'init': function(event, o) {
         
      }
  }
  });

$('.me-l').on('click', function(){
    $('.me-slider').trigger('flumen.left');
});

$('.me-r').on('click', function(){
    $('.me-slider').trigger('flumen.right');
});

$('.my-team-slider').flumen({
  'arrows': false,
  'margin': 5,
  'events':{
      'init': function(event, o) {
       
      }
  }
  });

$('.team-l').on('click', function(){
    $('.my-team-slider').trigger('flumen.left');
});

$('.team-r').on('click', function(){
    $('.my-team-slider').trigger('flumen.right');
});

$('.business-unit-slider').flumen({
  'arrows': false,
  'margin': 5,
  'events':{
      'init': function(event, o) {         
      }
  }
  });

$('.bu-l').on('click', function(){
    $('.business-unit-slider').trigger('flumen.left');
});

$('.bu-r').on('click', function(){
    $('.business-unit-slider').trigger('flumen.right');
});
/* slider   end*/




/* Whishes   Starts*/
var thehours = new Date().getHours();
	var themessage;
	var morning = ('Good Morning');
	var afternoon = ('Good Afternoon');
	var evening = ('Good Evening');

	if (thehours >= 0 && thehours < 12) {
		themessage = morning; 

	} else if (thehours >= 12 && thehours < 17) {
		themessage = afternoon;

	} else if (thehours >= 17 && thehours < 24) {
		themessage = evening;
	}
	$('.whishing').append(themessage);
/* Whishes   ends*/



/* dexter-typing   Starts*/

  $("#typed2").typing({
    strings: ['I am Dexter ', 'How may i help you ...'],
    eraseDelay: 100,
    typeDelay: 70,
    stringStartDelay: 100,
    loopCount: 1,
    cursorBlink: false,
    cursorChar: '<small>_</small>',
    fade: true,
    onTyping: function () {
        console.log('onTyping');
    },
    onFinishedTyping: function () {
        console.log('onFinishedTyping');
    },
    onErasing: function () {
        console.log('onErasing');
    },
    onFinishedErasing: function () {
        console.log('onFinishedErasing');
    },
    onAllTypingCompleted: function () {
        console.log('onAllTypingCompleted');
    },
    onFinishedFadeErasing: function () {
        console.log('onFinishedFadeErasing');
    }
});
/* dexter-typing   ends*/


});

$(document).ready(function(){ 
  
  $(".me-apps-section").scrollLeft(1);
  
  setTimeout(function(){$('.initial-dexter').hide(); }, 1000);
  // setTimeout(function(){$('.hello').animate({width: '0px'}, 500) }, 6000);
 
  // $('.dexter').mouseover(function() { 
  //   $('.hello').animate({width: '360px'}, 500);
  //   // $('.hello').show("fast");
  // });
  // $('.dexter').mouseout(function() { 
  //   $('.hello').animate({width: '0px'});
  //   // $('.hello').hide("fast");
  // });
  

});
