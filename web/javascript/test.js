$(function () {
    $('#nb_tickets_NbBillets').attr('readonly', 'readonly');

    $('#nb_tickets_choiceNb'). click(function () {
       if ($('#nb_tickets_choiceNb_0').checked)
       {
           $('#nb_tickets_NbBillets').attr('readonly', 'readonly');
       }else if ($('#nb_tickets_choiceNb_1').checked)
       {
           $('#nb_tickets_NbBillets').removeAttr('readonly');
       }
    });
});



    $('#nb_tickets_NbBillets').attr('hidden', 'hidden');

   $('#nb_tickets_choiceNb_0').click(function () {
       $('#nb_tickets_NbBillets').attr('hidden', 'hidden');
   });

   $('#nb_tickets_choiceNb_1').click(function () {
       $('#nb_tickets_NbBillets').removeAttr('hidden');
   });

$('#nb_tickets_NbBillets').hide();

$('#nb_tickets_choiceNb_0').click(function () {
    $('#nb_tickets_NbBillets').hide();
});

$('#nb_tickets_choiceNb_1').click(function () {
    $('#nb_tickets_NbBillets').show();
});