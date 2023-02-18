document.getElementById('btn-pentagon').addEventListener('click', function () {
    const pentagonArea = document.getElementById('pentagon-area');
    const pentagonAreaString = pentagonArea.innerText;
    const pentagonAreaField = parseFloat(pentagonAreaString);

    const pentagonP = document.getElementById('pentagon-p');
    const pentagonPString = pentagonP.innerText;
    const pentagonPField = parseFloat(pentagonPString);

    const pentagonB = document.getElementById('pentagon-b');
    const pentagonBString = pentagonB.innerText;
    const pentagonBField = parseFloat(pentagonBString);

    const pCm = document.getElementById('p-Cm');
    const pCmString = pCm.innerText;
    const pCmField = parseFloat(pCmString);

    const bCm = document.getElementById('b-Cm');
    const bCmString = bCm.innerText;
    const bCmField = parseFloat(bCmString);

    const totalPentagon = document.getElementById('total-pentagon-area');
    const totalPentagonString = totalPentagon.innerText;
    const totalPentagonField = parseFloat(totalPentagonString);


    const totalPentagonArea = pentagonAreaField * pCmField * bCmField;
    totalPentagon.innerText = totalPentagonArea.toFixed(2);

})