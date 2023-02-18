document.getElementById('rectangle-btn').addEventListener('click', function(){
    const width = document.getElementById('width');
    const widthString = width.innerText;
    const widthField = parseFloat(width);

    const length = document.getElementById('length');
    const lengthString = length.innerText;
    const lengthField = parseFloat(lengthString)

    const rectInput1 = document.getElementById('rect-input1');
    const rectInput1String = rectInput1.value;
    const rectInput1Field = parseFloat(rectInput1String);

    rectInput1.value = '';

    width.innerText = rectInput1Field
    
    const rectInput2 = document.getElementById('rect-input2');
    const rectInput2String = rectInput2.value;
    const rectInput2Field = parseFloat(rectInput2String);

    rectInput2.value = '';

    length.innerText = rectInput2Field

    const totalRectangleArea = document.getElementById('total-rectangle-area');
    const totalRectangleAreaString = totalRectangleArea.innerText;
    const totalRectangleAreaField = parseFloat(totalRectangleAreaString);

    const rectangleAreaTotal = rectInput1Field *  rectInput2Field;
    totalRectangleArea.innerText = rectangleAreaTotal.toFixed(2);
})