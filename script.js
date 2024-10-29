const printButton = document.getElementById('printbtn');

const printPage = () => {
    const printFrame = document.createElement('iframe');
    printFrame.style.display = 'none';
    printFrame.src = 'index.html';
    document.body.appendChild(printframe);

    var printWindow = window.open('', '_blank', 'height=8in,width=5.5in');
    printWindow.document.write(printFrame.document.documentElement.outerHTML);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
};

printButton.addEventListener('click', () => {
    printPage();
}); 
