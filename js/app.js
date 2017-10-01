/*!
 * powertic-mautic-form-validator
 * Author: Powertic
 * Website: powertic.com
 * Contact: opensource@powertic.com
 *
 * Copyright 2016-2017 powertic
 * Licensed under GPL3 (https://raw.githubusercontent.com/powerticmkt/mautic-form-validator/master/LICENSE)
 */

jQuery(document).ready(function () {
  jQuery('input[name*="cep"]').mask('00000-000')
  jQuery('input[type=tel]').mask(BRMaskBehavior, spOptions)
  jQuery('input[name*="cnpj"]').mask('00.000.000/0000-00', {reverse: true})
  jQuery('input[name*="cpf"]').mask('000.000.000-00', {reverse: true})
  jQuery('input[type=email]').on('blur', function () {
    jQuery(this).mailcheck({
      suggested: function (element, suggestion) {
        jQuery.confirm({
          theme: 'supervan',
          title: 'O e-mail ' + jQuery('input[type=email]').val() + ' é válido?',
          content: 'Parece que você digitou um e-mail que não existe. Posso alterar para ' + suggestion.full + '?',
          buttons: {
            confirm: {
              text: 'Sim',
              action: function () {
                jQuery('input[type=email]').val(suggestion.full).focus()
              }
            },
            cancel: {
              text: 'Não',
              action: function () {}
            }
          }
        })
      },
      empty: function (element) {
        // callback code
      }
    })
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
