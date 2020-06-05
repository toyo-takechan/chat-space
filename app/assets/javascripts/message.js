$(function () {
  function buildHTML(message) {
    if (message.image) {
      var html =
            `<div class="chat-main__message__line">
              <div class="chat-main__message__line__name">
                ${message.user_name}
              </div>
              <div class="chat-main__message__line__date">
                ${message.created_at}
              </div>
            </div>
            <div class="chat-main__message__review">
              <p class="chat-main__message__review__content">
                ${message.content}
              </p>
            </div>`
            <img src=${message.image} >
      return html;
    } else {
      var html =
            `<div class="chat-main__message__line">
              <div class="chat-main__message__line__name">
                ${message.user_name}
              </div>
              <div class="chat-main__message__line__date">
                ${message.created_at}
              </div>
            </div>
            <div class="chat-main__message__review">
              <p class="chat-main__message.__review__content">
                ${message.content}
              </p>
            </div>`
      return html;
    };
  }
  $('#new_message').on('submit', function (e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
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
        // $(".chat-main__header__current-group__member-list__member").append("yogo")
        $('.chat-main__message').append(html);
        $('form')[0].reset();
        $('.chat-main__message').animate({ scrollTop: $('.chat-main__message')[0].scrollHeight });
        console.log($('.submit-btn'))
        $('.submit-btn').prop('disabled', false);
      })
      .fail(function () {
        alert("メッセージ送信に失敗しました");
      });
  })
});