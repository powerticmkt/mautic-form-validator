/*!
 * powertic-mautic-form-validator
 * Author: Powertic
 * Website: powertic.com
 * Contact: opensource@powertic.com
 *
 * Copyright 2016-2017 powertic
 * Licensed under GPL3 (https://raw.githubusercontent.com/powerticmkt/mautic-form-validator/master/LICENSE)
 */

var MauticFormCallback = {}

jQuery(document).ready(function () {
  //
  var formname = (jQuery('form[id^="mauticform"]').data('mautic-form'))

  window.score = 0
  var retorno

  MauticFormCallback[formname] = {
    onValidate: function (formValid) {
      window.score = 0
      window.validMX = false
      // before form submit
      var user_email = jQuery('form[id^="mauticform"] input[type=email]').val()
      jQuery.getJSON('https://validator.powertic.net', {
        email: user_email
      })
        .done(function (json) {
          if (json.valid_format) {
            window.score += 2
            console.log('valid_format: ' + json.valid_format)
          } // if valid_format
          if (json.valid_host) {
            window.score += 2
            console.log('valid_host: ' + json.valid_host)

            if (json.valid_mx_records) {
              window.score += 2
            } // if valid_format
            console.log('valid_mx_records: ' + json.valid_mx_records)

            if (!(json.disposable_email_provider)) {
              window.score += 2
            } // if valid_format
            console.log('disposable_email_provider: ' + json.disposable_email_provider)
            //
            if (!(json.free_email_provider)) {
              window.score += 2
            } // if valid_format
            console.log('free_email_provider: ' + json.free_email_provider)
          //
          } // if valid_format
          console.log('score final: ' + window.score)

          if (window.score > 5) {
            window.validMX = true
            return true
          } else {
            window.validMX = false
            return false
          }
        }) // done
      return true
    }
  }

  jQuery('input[name*="cep"]').mask('00000-000')
  jQuery('input[type=tel]').mask(BRMaskBehavior, spOptions)
  jQuery('input[name*="cnpj"]').mask('00.000.000/0000-00', {
    reverse: true
  })
  jQuery('input[name*="cpf"]').mask('000.000.000-00', {
    reverse: true
  })
})

var BRMaskBehavior = function (val) {
    return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009'
  },
  spOptions = {
    onKeyPress: function (val, e, field, options) {
      field.mask(BRMaskBehavior.apply({}, arguments), options)
    }
}
