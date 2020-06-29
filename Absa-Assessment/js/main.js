$(function () {
      //Date Picker set to current disable past dates
      $("#departure , #return, #check-in, #check-out").datepicker({
        minDate: 0
      });

      //Auto complete flight search  .replace(/ *\([^)]*\) */g, "")
      //Simple Ajax returning an array of Json objects: City + Airport Code
      //Autocomplete jquery UI min length of 2
      //Check if the character entered in a field matches the airportlist then build the combobox
      var airportsList;
      $.ajax({
        url: "json/airports.json",
        success: function (data) {
          airportsList = data;
        }

      });
      $('#to').autocomplete({
        minLength: 2,
        source: function (request, response) {
          response($.map(airportsList, function (val) {
            if (val.city.indexOf(request.term) > -1 || val.code.indexOf(request.term) > -1) {
              return {
                label: val.city,
                value: val.code
              };
            }
          }));
        },
        select: function (event, ui) {
          $('#to').val(ui.item.value + " " + ui.item.label.replace(/ *\([^)]*\) */g, ""));
          return false;
        }
      });
      $('#from').autocomplete({
        minLength: 2,
        source: function (request, response) {
          response($.map(airportsList, function (val) {
            if (val.city.indexOf(request.term) > -1 || val.code.indexOf(request.term) > -1) {
              return {
                label: val.city,
                value: val.code
              };
            }
          }));
        },
        select: function (event, ui) {
          $('#from').val(ui.item.value + " " + ui.item.label.replace(/ *\([^)]*\) */g, ""));
          return false;
        }
      });
      $('#fromflightHotels').autocomplete({
        minLength: 2,
        source: function (request, response) {
          response($.map(airportsList, function (val) {
            if (val.city.indexOf(request.term) > -1 || val.code.indexOf(request.term) > -1) {
              return {
                label: val.city,
                value: val.code
              };
            }
          }));
        },
        select: function (event, ui) {
          $('#fromflightHotels').val(ui.item.value + " " + ui.item.label.replace(/ *\([^)]*\) */g, ""));
          return false;
        }
      });
      $('#toflightHotels').autocomplete({
        minLength: 2,
        source: function (request, response) {
          response($.map(airportsList, function (val) {
            if (val.city.indexOf(request.term) > -1 || val.code.indexOf(request.term) > -1) {
              return {
                label: val.city,
                value: val.code
              };
            }
          }));
        },
        select: function (event, ui) {
          $('#toflightHotels').val(ui.item.value + " " + ui.item.label.replace(/ *\([^)]*\) */g, ""));
          return false;
        }
    });
});