const printButton = document.getElementById('printbtn');

const printPage = () => {
    const printFrame = document.createElement('iframe');
    printFrame.style.display = 'none';
    printFrame.src = 'index.html';
    document.body.appendChild(printframe);
    printFrame.contentWindow.focus();
    printFrame.contentWindow.print();
};

printButton.addEventListener('click', () => {
    printPage();
}); 