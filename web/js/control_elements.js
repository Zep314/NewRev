const newGameButton = document.getElementById('newGameButton');
const resultWindow = document.getElementById('resultWindow');
const closeButtonResultWindow = document.getElementById('closeButtonResultWindow');
const resetGameButton = document.getElementById('resetGameButton');
const statusText = document.getElementById('status_text');
const chb_hints = document.getElementById('chb_hints');

newGameButton.addEventListener('click', function() {
    gameOver();
});

closeButtonResultWindow.addEventListener('click', function() {
    statusText.textContent = 'Game in progress...';
    resultWindow.style.display = 'none';
    enableElements();
});

function gameOver() {
    statusText.textContent = 'Game over!';
    resultWindow.style.display = 'grid';
    disableElements();
    to_log('Game over!');
}

function disableElements() {
    newGameButtonEnable(false);
    resetGameButtonEnable(false);
    showHintEnable(false);
    firstMoveEnable(false);
    computerPlayRadioEnable(false);
    algorithmRadioEnable(false);
}

function enableElements() {
    newGameButtonEnable(true);
    resetGameButtonEnable(true);
    showHintEnable(true);
    firstMoveEnable(true);
    computerPlayRadioEnable(true);
    algorithmRadioEnable(true);
}

function newGameButtonEnable(enable) {
    if (enable) {
        newGameButton.disabled = false;
        newGameButton.className = 'button1';
    } else {
        newGameButton.disabled = true;
        newGameButton.className = 'button1disabled';
    }
}

function resetGameButtonEnable(enable) {
    if (enable) {
        resetGameButton.disabled = false;
        resetGameButton.className = 'button1';
    } else {
        resetGameButton.disabled = true;
        resetGameButton.className = 'button1disabled';
    }
}

function showHintEnable(enable) {
    if (enable) {
        document.getElementById("chb_hints").disabled = false;
        document.getElementById("label_checkbox_hints").style.color = '#000';
        document.getElementById("game_hints").style.borderColor = '#000';
    } else {
        document.getElementById("chb_hints").disabled =true;
        document.getElementById("label_checkbox_hints").style.color = '#aaa';
        document.getElementById("game_hints").style.borderColor = '#aaa';
    }
}

function firstMoveEnable(enable) {
    if (enable) {
        document.getElementById("first_move").style.borderColor = '#000';
        document.getElementById("label_first_move").style.color = '#000';
        document.getElementById("label_white_first_move").style.color = '#000';
        document.getElementById("label_black_first_move").style.color = '#000';
        document.getElementById("white_first_move").disabled = false;
        document.getElementById("black_first_move").disabled = false;
    } else {
        document.getElementById("first_move").style.borderColor = '#aaa';
        document.getElementById("label_first_move").style.color = '#aaa';
        document.getElementById("label_white_first_move").style.color = '#aaa';
        document.getElementById("label_black_first_move").style.color = '#aaa';
        document.getElementById("white_first_move").disabled = true;
        document.getElementById("black_first_move").disabled = true;
    }
}

function computerPlayRadioEnable(enable) {
    if (enable) {
        document.getElementById("radio_head").style.borderColor = '#000';
        document.getElementById("label_radio_head").style.color = '#000';
        document.getElementById("label_computer_plays_white").style.color = '#000';
        document.getElementById("label_computer_plays_black").style.color = '#000';
        document.getElementById("computer_plays_white").disabled = false;
        document.getElementById("computer_plays_black").disabled = false;
    } else {
        document.getElementById("radio_head").style.borderColor = '#aaa';
        document.getElementById("label_radio_head").style.color = '#aaa';
        document.getElementById("label_computer_plays_white").style.color = '#aaa';
        document.getElementById("label_computer_plays_black").style.color = '#aaa';
        document.getElementById("computer_plays_white").disabled = true;
        document.getElementById("computer_plays_black").disabled = true;
    }
}

function algorithmRadioEnable(enable) {
    if (enable) {
        document.getElementById("algorithm_radio").style.borderColor = '#000';
        document.getElementById("label_algorithm_radio").style.color = '#000';
        document.getElementById("label_algorithm_rnd").style.color = '#000';
        document.getElementById("label_algorithm_masked").style.color = '#000';
        document.getElementById("label_algorithm_deep_ml").style.color = '#000';
        document.getElementById("algorithm_rnd").disabled = false;
        document.getElementById("algorithm_masked").disabled = false;
        document.getElementById("algorithm_deep_ml").disabled = false;
    } else {
        document.getElementById("algorithm_radio").style.borderColor = '#aaa';
        document.getElementById("label_algorithm_radio").style.color = '#aaa';
        document.getElementById("label_algorithm_rnd").style.color = '#aaa';
        document.getElementById("label_algorithm_masked").style.color = '#aaa';
        document.getElementById("label_algorithm_deep_ml").style.color = '#aaa';
        document.getElementById("algorithm_rnd").disabled = true;
        document.getElementById("algorithm_masked").disabled = true;
        document.getElementById("algorithm_deep_ml").disabled = true;
    }
}

document.getElementById('test_hide').addEventListener('click', function() {
    hideDiceTest();
});
function hideDiceTest() {
    hideDice(document.getElementById('dice_number').value);
}

document.getElementById('test_hint').addEventListener('click', function() {
    hintDiceTest();
});
function hintDiceTest() {
    hintDice(document.getElementById('dice_number').value);
}

document.getElementById('test_show_white').addEventListener('click', function() {
    showDiceTest(true);
});
function showDiceTest(isWhite) {
    showDice(document.getElementById('dice_number').value,isWhite);
}
document.getElementById('test_show_black').addEventListener('click', function() {
    showDiceTest(false);
});

function hideDice(num) {
    document.getElementById('dice'+num.toString().padStart(2, '0')).style.display = 'none';
    document.getElementById('dice'+num.toString().padStart(2, '0')).style.cursor = '';
}
function showDice(num, isWhite) {
    diceStyle = document.getElementById('dice'+num.toString().padStart(2, '0')).style;

    diceStyle.display = 'block';
    diceStyle.borderRadius = '50%';
    diceStyle.webkitAnimationName = 'showing';
    diceStyle.webkitAnimationDuration = '1s';
    if (isWhite) {
        diceStyle.backgroundColor = '#fff';
        diceStyle.borderColor = '#000';
    } else {
        diceStyle.backgroundColor = '#000';
        diceStyle.borderColor = '#fff';
    }
    diceStyle.transform = '';
    diceStyle.cursor = 'pointer';
    // make sure to reset the name after 1 seconds, otherwise another call to colorchange wont have any effect
    setTimeout(function() {
        diceStyle.webkitAnimationName = '';
    }, 1000);
}
function hintDice(num) {
    diceStyle = document.getElementById('dice'+num.toString().padStart(2, '0')).style;

    diceStyle.display = 'block';
    diceStyle.borderRadius = '50%';
    diceStyle.backgroundColor = '#ff0';
    diceStyle.borderColor = '#ff0';
    diceStyle.transform = 'scale(0.1, 0.1)';
    diceStyle.cursor = 'pointer';
}