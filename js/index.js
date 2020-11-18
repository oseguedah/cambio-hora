var date = new Date();
var sv    = moment.tz(new Date(), "America/El_Salvador");

var mx   = sv.clone().tz("America/Mexico_City");

var gt   = sv.clone().tz("America/Guatemala");
var hn   = sv.clone().tz("America/Tegucigalpa");
var ni   = sv.clone().tz("America/Managua");
var cr   = sv.clone().tz("America/Costa_Rica");
var pam   = sv.clone().tz("America/Panama");

var pu   = sv.clone().tz("America/Lima");
var co   = sv.clone().tz("America/Bogota");
var bl   = sv.clone().tz("America/La_Paz");
var py   = sv.clone().tz("America/Asuncion");
var ec   = sv.clone().tz("America/Guayaquil");

var arg   = sv.clone().tz("America/Argentina/Buenos_Aires");

$(document).ready(function(){

  $('#timepicker').mdtimepicker();

  $('#timepicker').mdtimepicker().on('timechanged', function(e){    
    date.setHours(
      e.time.split(":")[0],
      e.time.split(":")[1],
      0
    );

    setDate(date.getTime());
  });

  showTime();

  $("#resetDate").click(function(){
    setDate(new Date());
    $('#timepicker').val("");
  });

});

function setDate(newDate){
  console.log(newDate);
  sv   = moment.tz(newDate, "America/El_Salvador");

  mx   = sv.clone().tz("America/Mexico_City");

  gt   = sv.clone().tz("America/Guatemala");
  hn   = sv.clone().tz("America/Tegucigalpa");
  ni   = sv.clone().tz("America/Managua");
  cr   = sv.clone().tz("America/Costa_Rica");
  pam  = sv.clone().tz("America/Panama");

  pu   = sv.clone().tz("America/Lima");
  co   = sv.clone().tz("America/Bogota");
  bl   = sv.clone().tz("America/La_Paz");
  py   = sv.clone().tz("America/Asuncion");
  ec   = sv.clone().tz("America/Guayaquil");

  arg  = sv.clone().tz("America/Argentina/Buenos_Aires");
};

function showTime(){
    sv.add(1,"s"); // add 1 secod
    gt.add(1,"s");
    hn.add(1,"s");
    ni.add(1,"s");
    cr.add(1,"s");
    pam.add(1,"s");

    mx.add(1,"s");

    pu.add(1,"s");
    co.add(1,"s");
    bl.add(1,"s");
    py.add(1,"s");
    ec.add(1,"s");
    arg.add(1,"s");
    
    //putting time in our div
    $('#clock_sv').html(sv.format('hh:mm:ss a'));
    $('#clock_gt').html(gt.format('hh:mm:ss a'));
    $('#clock_hn').html(hn.format('hh:mm:ss a'));
    $('#clock_ni').html(ni.format('hh:mm:ss a'));
    $('#clock_cr').html(cr.format('hh:mm:ss a'));
    $('#clock_pam').html(pam.format('hh:mm:ss a'));

    $('#clock_mx').html(mx.format('hh:mm:ss a'));

    $('#clock_pu').html(pu.format('hh:mm:ss a'));
    $('#clock_co').html(co.format('hh:mm:ss a'));
    $('#clock_bl').html(bl.format('hh:mm:ss a'));
    $('#clock_py').html(py.format('hh:mm:ss a'));
    $('#clock_ec').html(ec.format('hh:mm:ss a'));
    $('#clock_arg').html(arg.format('hh:mm:ss a'));

    //to change time in every seconds
    setTimeout( showTime, 1000 );
  };

  function changeDate(){
    setDate(date.getTime());
  }
