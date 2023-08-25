function display(position) {
    canvas = document.getElementById("game_field");
    canvas.width = canvas.getBoundingClientRect().width;
    canvas.height = canvas.getBoundingClientRect().height;

    dice_radius = canvas.width / 16;

    ctx = canvas.getContext("2d");

    ctx.beginPath();
    for(let i=0; i<9; i++) {
        ctx.moveTo(i * canvas.width / 8, 0);
        ctx.lineTo(i * canvas.width / 8, canvas.height);

        ctx.moveTo(0, i * canvas.height / 8);
        ctx.lineTo(canvas.width, i * canvas.height / 8, );
    }
    ctx.lineWidth = 1;
    ctx.setLineDash([7,3]);
    ctx.strokeStyle = '#000';
    ctx.stroke();

}

function initDice() {
    canvas = document.getElementById("game cell");
    cellWidth = Math.round(canvas.getBoundingClientRect().width / 8);
    to_log(cellWidth.toString());
    to_log('Width: '+ canvas.getBoundingClientRect().width.toString());
    to_log('Height: '+ canvas.getBoundingClientRect().height.toString());
    for (let i=0; i<64; i++) {
        iDiv = document.createElement('div');
        iDiv.id = 'dice' + i.toString().padStart(2, '0');
        iDiv.className = 'dice';
        iDiv.style.borderColor = '#000';
        iDiv.style.backgroundColor = '#00f';
        iDiv.style.marginLeft = ((i % 8) * cellWidth).toString() + "px";
        iDiv.style.marginTop = (Math.floor(i / 8) * cellWidth ).toString() + "px"
        iDiv.style.position = 'absolute';

        document.getElementById("game cell").appendChild(iDiv);
    }
}