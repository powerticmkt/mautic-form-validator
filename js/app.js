jQuery(document).ready(function () {
  alert('teste')
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
