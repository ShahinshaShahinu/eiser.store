
var swal = require('sweetalert');

$('button#orderButtonId').on('click', function(){

 swal({
   title: "Are you sure?",
   text: "Die Bestellung wird aufgegeben und es können keine weiteren Artikel hinzugefügt werden!", type: "warning",
   showCancelButton: true,
   confirmButtonColor: "#DD6B55",
   confirmButtonText: "Ja, Bestellung aufgeben!",
   closeOnConfirm: false
 },
      function(){
   $("#orderFormId").submit();
 });
})


swal("Here's the title!", "...and here's the text!");


