document.getElementById('btn-parallelogram').addEventListener
    ('click', function () {
        const parallelogram1 = document.getElementById('base');
        const parallelogram1String = parallelogram1.innerText;
        const parallelogram1Field = parseFloat(parallelogram1String)
        
        const parallelogram2 = document.getElementById('height');
        const parallelogram2String = parallelogram2.innerText;
        const parallelogram2Field = parseFloat(parallelogram2String)

        const parallelogramInput1 = document.getElementById('para-input1');
        const parallelogramInput1String = parallelogramInput1.value;
        const parallelogramInput1field = parseFloat(parallelogramInput1String);

        parallelogramInput1.value = '';

        parallelogram1.innerText = parallelogramInput1field
        
        const parallelogramInput2 = document.getElementById('para-input2');
        const parallelogramInput2String = parallelogramInput2.value;
        const parallelogramInput2field = parseFloat(parallelogramInput2String);

        parallelogramInput2.value = '';

        parallelogram2.innerText = parallelogramInput2field;

        const parallelogramAreaTotal = document.getElementById('total-parallelogram-area');
        const totalParallelogramAreaString = parallelogramAreaTotal.innerText;
        const parallelogramAreaTotalField = parseFloat(totalParallelogramAreaString);

        const totalParallelogramArea = parallelogramInput1field * parallelogramInput2field;
        parallelogramAreaTotal.innerText = totalParallelogramArea.toFixed(2);

        

})