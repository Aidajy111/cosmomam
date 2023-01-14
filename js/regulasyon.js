$('.btn_link').on('click', function(e){
    e.preventDefault();
    $('.btn_link').removeClass('active');
    $(this).addClass('active');

    let clickButton = $(this).text();
    switch(clickButton){
        case 'Политика конфиденциальности': 
            $('.wrapper_wrapp_content').removeClass('active');
            $('.wrapper_wrapp_content_1').addClass('active');

            break;
        case 'Договор оферты':
            $('.wrapper_wrapp_content').removeClass('active');
            $('.wrapper_wrapp_content_2').addClass('active');
            break;
        case 'Пользовательское соглашение':
            $('.wrapper_wrapp_content').removeClass('active');
            $('.wrapper_wrapp_content_3').addClass('active');
            break;
        default:
            alert('No');
    }
})
$('.btn_mobile').on('click', function(){
    $('.btn_wrapper').toggleClass('hidde');
})