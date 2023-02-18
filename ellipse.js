document.getElementById('btn-ellipse').addEventListener('click', function () {
    const pi = document.getElementById('pi');
    const piString = pi.innerText;
    const piField = parseFloat(piString);
    

    const piAArea = document.getElementById('pi-a-area');
    const piAAreaString = piAArea.innerText;
    const piAAreaField = parseFloat(piAAreaString);

    const piBArea = document.getElementById('pi-b-area');
    const piBAreaString = piBArea.innerText;
    const piBAreaField = parseFloat(piBAreaString);

    const piA = document.getElementById('pi-a');
    const piAString = piA.innerText
    const piAField = parseFloat(piAString);
    
    const piB = document.getElementById('pi-b');
    const piBString = piB.innerText
    const piBField = parseFloat(piBString);

    const totalEllipse = document.getElementById('total-ellipse-area');
    const totalEllipseString = totalEllipse.innerText;
    const totalEllipseField = parseFloat(totalEllipseString);


    const totalPiArea = 3.14 * piAField * piBField;
    totalEllipse.innerText = totalPiArea.toFixed(2);



    
})
   