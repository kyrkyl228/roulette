const modalWindowId = $('#modalWindowId');
const signInId = $('#signInId');

modalWindowId.click(() =>{
    modalWindowId.css('display', 'none');
}).children().click((e) =>{
    e.stopPropagation();
})

signInId.click(() =>{
    modalWindowId.css('display', 'flex');
});