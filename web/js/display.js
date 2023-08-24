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

    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.arc(dice_radius * position['last_move'] * 2 + dice_radius, dice_radius, dice_radius-5, 0, 2*Math.PI, false);
	ctx.strokeStyle = 'red';
    ctx.fillStyle = 'white';
    ctx.fill();
	ctx.lineWidth = 1;
	ctx.stroke();

}
