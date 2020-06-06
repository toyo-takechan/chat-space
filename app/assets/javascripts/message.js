$(function () {
  function buildHTML(message) {
    if (message.image) {
      var html =`
        <div class="message">
          <div class="message__line">
            <div class="message__line__name">
              ${message.user_name}
            </div>
            <div class="message__line__date">
              ${message.created_at}
            </div>
          </div>
          <div class="message__review">
            <p class="message__review__content">
              ${message.content}
            </p>
            <img src=${message.image} >
          </div>
        </div>`
      return html;
    } else {
      var html =`
        <div class="message">
          <div class="message__line">
            <div class="message__line__name">
              ${message.user_name}
            </div>
            <div class="message__line__date">
              ${message.created_at}
            </div>
          </div>
          <div class="message__review">
            <p class="message.__review__content">
              ${message.content}
              </p>
          </div>
        </div>`
      return html;
    };
  }
  $('#new_message').on('submit', function (e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function (data) {
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight });
    })
    .fail(function () {
      alert("メッセージ送信に失敗しました");
    })
    .always(function () {
      $('form')[0].reset();
      $('.submit-btn').prop('disabled', false);
    })
  })
});