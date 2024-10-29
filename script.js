const printButton = document.getElementById('printbtn');

// const printPage = () => {
//     const printFrame = document.createElement('iframe');
//     printFrame.style.display = 'none';
//     printFrame.src = 'index.html';
//     document.body.appendChild(printframe);
//     printFrame.contentWindow.focus();
//     printFrame.contentWindow.print();
// };

// printButton.addEventListener('click', () => {
//     printPage();
// }); 
function printPage(){
    try{ 
        var oIframe = document.getElementById('ifrmPrint');
        var oContent = document.getElementById('divToPrint').innerHTML;
        var oDoc = (oIframe.contentWindow || oIframe.contentDocument);
        if (oDoc.document) oDoc = oDoc.document;
        oDoc.write("<html><head><title>title</title>");
        oDoc.write("</head><body onload='this.focus(); this.print();'>");
        oDoc.write(oContent + "</body></html>"); 
       
        oDoc.close(); 
       
        }
        catch(e){
        self.print();
        }
}
