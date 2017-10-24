/*!
 * powertic-mautic-form-validator
 * Author: Powertic
 * Website: powertic.com
 * Contact: opensource@powertic.com
 *
 * Copyright 2016-2017 powertic
 * Licensed under GPL3 (https://raw.githubusercontent.com/powerticmkt/mautic-form-validator/master/LICENSE)
 */

$(document).ready(function () {
  //

  $('form[id^="mauticform"] input[type=email]').on('focusout', function (evento) {
    var form = $(this).parents('form:first')
    var user_email = $(this)

    $.getJSON('https://validator.powertic.net', {
      email: $(this).val()
    })
      .done(function (json) {
        var score = 0

        if (json.valid_format) {
          score += 1
          console.log('valid_format: ' + json.valid_format)
        } else {
          $.alert({
            theme: 'supervan',
            title: 'E-mail inválido!',
            content: 'Verifique o e-mail digitado!'
          })
          user_email.focus()
        }
        if (json.valid_host) {
          score += 2
          console.log('valid_host: ' + json.valid_host)

          if (json.valid_mx_records) {
            score += 2
          } // if valid_format
          console.log('valid_mx_records: ' + json.valid_mx_records)

          if (!(json.disposable_email_provider)) {
            score += 2
          } // if valid_format
          console.log('disposable_email_provider: ' + json.disposable_email_provider)
          //
          if (!(json.free_email_provider)) {
            score += 2
          } // if valid_format
          console.log('free_email_provider: ' + json.free_email_provider)
        //
        } // if valid_format
        console.log('score final: ' + score)
      }) // done
  }) // input change
})
