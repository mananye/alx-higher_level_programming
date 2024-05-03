$(document).ready(function () {
  function fetchTranslation () {
    const langCode = $('#language_code').val();
    const apiUrl = `https://www.fourtonfish.com/hellosalut/hello/?lang=${langCode}`;

    $.get(apiUrl, function (data) {
      if (data && data.hello) {
        $('#hello').text(data.hello);
      } else {
        $('#hello').text('Translation not found.');
      }
    }).fail(function () {
      $('#hello').text('Translation failed.');
    });
  }

  $('#btn_translate').click(fetchTranslation);

  $('#language_code').keypress(function (e) {
    if (e.which === 13) {
      fetchTranslation();
    }
  });
});
