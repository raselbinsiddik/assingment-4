document.getElementById('btn-rhombus').addEventListener('click', function () {
    const areaCm = document.getElementById('area-cm');
    const areaCmString = areaCm.innerText;
    const areaCmField = parseFloat(areaCmString);

    const d1AreaCm = document.getElementById('d1');
    const d1AreaCmString = d1AreaCm.innerText;
    const d1AreaCmField = parseFloat(d1AreaCmString);

    const d2AreaCm = document.getElementById('d2');
    const d2AreaCmString = d2AreaCm.innerText;
    const d2AreaCmField = parseFloat(d2AreaCmString);

    const d1Cm = document.getElementById('d1-cm');
    const d1CmString = d1Cm.innerText;
    const d1CmField = parseFloat(d1CmString);

    const d2Cm = document.getElementById('d2-cm');
    const d2CmString = d2Cm.innerText;
    const d2CmField = parseFloat(d2CmString);

    const totalRhombus = document.getElementById('total-rhombus-area');
    const totalRhombusString = totalRhombus.innerText;
    const totalRhombusField = parseFloat(totalRhombusString);


    const totalRhombusArea = areaCmField * d1CmField * d2CmField;
    totalRhombus.innerText = totalRhombusArea.toFixed(2);

})