const usernameId = $('#usernameId');
const passwordId = $('#passwordId');
const modalWindowButtonId = $('#modalWindowButtonId');
const userId = $('#userId');



modalWindowButtonId.click(() => {
    if (users.hasOwnProperty(usernameId.val()) && users[usernameId.val()].password == passwordId.val()) {
        userId.html(`
        <div class="top-bar__user">
            <div class="top-bar__user-image-wrapper">
                <img class="top-bar__user-image" src="https://nztcdn.com/files/f1ad270beb08c5191d155505232034c6b8d515ea2399f0338eb03b62fac94385.webp" alt="">
            </div>
            <p class="login">tesst</p>
            <p class="balance">4000</p>                        
        </div>
        `);
        modalWindowId.css('display', 'none');
        currentUser = usernameId.val();
        console.log(currentUser);
        buttonDisabled = false;
    }else{
        window.alert('Неправильный логин или пароль!!!');
    }
})