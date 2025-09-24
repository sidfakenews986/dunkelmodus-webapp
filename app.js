document.getElementById('applyStyles').addEventListener('click', function() {
    const bgColor = document.getElementById('bgColor').value;
    const textColor = document.getElementById('textColor').value;
    document.body.style.backgroundColor = bgColor;
    document.body.style.color = textColor;
});