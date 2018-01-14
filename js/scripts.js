$(function() {

  var url = 'https://restcountries.eu/rest/v2/name/';
  var countriesList = $('#countries');

  $('#form-search').submit(searchCountries);

  function searchCountries(e) {
    var countryName = $('#country-name').val();
    if(!countryName.length) countryName = 'Poland';
    $.ajax({
      url: url + countryName,
      method: 'GET',
      success: showCountriesList
    });
    e.preventDefault();
  }

  function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function(item) {
      var newCountry = $('<li>').appendTo(countriesList);
      $('<img>').attr('src', item.flag).appendTo(newCountry);
      $('<p>').text('Country: ' + item.name).appendTo(newCountry);
      $('<p>').text('Capital: ' + item.capital).appendTo(newCountry);
      $('<p>').text('Currency: ' + item.currencies[0].name).appendTo(newCountry);
      $('<p>').text('Language: ' + item.languages[0].name).appendTo(newCountry);
      $('<p>').text('Region: ' + item.region).appendTo(newCountry);
      $('<p>').text('Population: ' + item.population + ' people').appendTo(newCountry);
      $('<p>').text('Area: ' + item.area + ' sq. km').appendTo(newCountry);
    });
  }

})