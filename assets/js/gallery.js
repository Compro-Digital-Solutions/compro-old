var magnificPopup = $.magnificPopup.instance;

$('.gallery-carousel').magnificPopup({
    delegate: 'a',
    type:'image',
        gallery: {
            enabled: true,
        }
});