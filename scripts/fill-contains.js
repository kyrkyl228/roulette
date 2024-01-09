const containsListId = $('#containsListId');
const containerId = $('#containerId');

for (let i = 0; i < containsItems.length; i++) {
    containsListId.append(`
    <div class="contains__item-wrapper" style="border-top: 2px solid `+ containsItems[i].rarityColor + `; background: linear-gradient(` + containsItems[i].rarityColor.replace(')', ', 0.3)').replace('rgb', 'rgba') + ` 0%, rgba(0, 0, 0, 0.1) 50%);">
        <div class="contains__item">
            <p class="item__percent">`+ containsItems[i].chance + `%</p>
            <img class="item__image" style="background: radial-gradient(`+ containsItems[i].rarityColor + ` 30%,rgba(255, 255, 76, 0) 70%);" src="` + containsItems[i].image + `">
            <p class="item__name" style="color: `+ containsItems[i].rarityColor + `;">` + containsItems[i].head + `</p>
            <p class="item__price">Цена: `+ containsItems[i].price + ` у.е.</p>
        </div>
    </div>
    `);
}

function random(max) {
    return Math.floor(Math.random() * max)
}

function fillRoulette(num) {
    for (let i = 0; i < num; i++) {
        intermediateElement = random(containsItems.length);
        if (random(100) <= containsItems[intermediateElement].chance) {
            rouletteFillIdMass.push(intermediateElement);
        } else {
            i--;
        }
    }
}

function renderRoulette() {
    for (let i = 0; i < rouletteFillIdMass.length; i++) {
        containerId.append(`
            <img l="`+ i + `" class="window__item" style="background: radial-gradient(` + containsItems[rouletteFillIdMass[i]].rarityColor + ` 30%,rgba(255, 255, 76, 0) 70%);" src="` + containsItems[rouletteFillIdMass[i]].image + `" alt="">
        `);
    }
}

let rouletteFillIdMass = [];
let intermediateElement;
let buttonDisabled = true;
fillRoulette(200);
renderRoulette();

function spin() {
    if (buttonDisabled === true) {
        return;
    }
    buttonDisabled = true;
    containerId.css('margin-left', - (150 * 200 - 150 * 11) + 'px');
    setTimeout(() => {
        containerId.css('transition', 'margin-left 0s');
        containerId.css('margin-left', '0px');
        rouletteFillIdMass.splice(0, 189);
        containerId.empty();
        fillRoulette(189);
        renderRoulette();
        setTimeout(() => {
            containerId.css('transition', 'margin-left 5s ease-out');
            buttonDisabled = false;
        }, 0)
    }, 5000)
}