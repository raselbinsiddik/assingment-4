   

document.getElementById('btn-triangle').addEventListener('click', function () {
    const area1 = document.getElementById('area-1');
    const areaString = area1.innerText;
    const areaField = parseFloat(areaString);
     
    const triangle1 = document.getElementById('triangle-1');
    const triangle1String = triangle1.innerText;
    const triangle1Field = parseFloat(triangle1String);

    const triangle2 = document.getElementById('triangle-2');
    const triangle2String = triangle2.innerText;
    const triangle2Field = parseFloat(triangle2String);

    const triangle3 = document.getElementById('triangle-3');
    const triangle3String = triangle3.innerText;
    const triangle3Field = parseFloat(triangle3String);

    const input1 = document.getElementById('inputField-1');
    const input1String = input1.value;
    const input1Field = parseFloat(input1String);

    input1.value = '';

    triangle2.innerText = input1Field;

    const input2 = document.getElementById('inputField-2');
    const input2String = input2.value;
    const input2Field = parseFloat(input2String);
    
    input2.value = ''

    triangle3.innerText = input2Field;

    const totalArea = document.getElementById('total-area');
    const totalAreaString = totalArea.innerText;
    const totalAreaField = parseFloat(totalAreaString);

    const totalTriangleArea = triangle1Field * input1Field * input2Field;
    totalArea.innerText = totalTriangleArea;

    
})