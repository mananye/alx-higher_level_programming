$(document).ready(function () {
  $('#btn_translate').click(function () {
    const langCode = $('#language_code').val();
    if (langCode) {
      const url = `https://www.fourtonfish.com/hellosalut/hello/?lang=${langCode}`;
      $.get(url, function (data) {
        if (data && data.hello) {
          $('#hello').text(data.hello);
        } else {
          $('#hello').text('Translation not found.');
        }
      }).fail(function (error) {
        $('#hello').text('Translation failed.');
        console.error('Error:', error);
      });
    } else {
      $('#hello').text('Please enter a language code.');
    }
  });
});
