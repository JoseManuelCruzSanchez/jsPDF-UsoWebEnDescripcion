// Code goes here

function myFunction()
{

    var doc = new jsPDF('p', 'mm', "a4");

    var tbl = $('#cost-matrix-table').clone();
    //var tbl2 = $('#cost-matrix-table').clone();

    //tbl.find('tr:nth-child(1)').remove();
    //tbl.find('tr:nth-child(1)').remove();
    //tbl.find('tr:nth-child(2)').remove();


    var res = doc.autoTableHtmlToJson(tbl.get(0));
    doc.autoTable(res.columns, res.data, {
        startY: 60,
        margin: { top: 40 },
        addPageContent: function(data) {
            doc.setFontSize(28);
            doc.setTextColor(0);
            doc.setFontStyle('bold');
            doc.text("Losani Homes Cost Matrix " + $("#dropdown").val(), 700, 30);
        },
        drawHeaderRow: function (row, data) {
            row.height = 60;
        },
        drawHeaderCell: function (cell, data) {

            if (cell.index != 0) {
                cell.width = 200;/**************************************************************************************Ancho de cada celda de la cabecera*/
            }
            /*doc.rect(cell.x, cell.y, cell.width, cell.height, cell.styles.fillStyle);
            doc.setTextColor(100);
            doc.rect(cell.x, cell.y + (cell.height / 3), cell.width, cell.height / 3, cell.styles.fillStyle);

            doc.autoTableText("aaa", cell.textPos.x, cell.textPos.y, {
                halign: cell.styles.halign,
                valign: cell.styles.valign
            });

            doc.rect(cell.x, cell.y, cell.width, cell.height, cell.styles.fillStyle);
            doc.setTextColor(100);
            doc.rect(cell.x, cell.y + (cell.height / 3), cell.width, cell.height / 3, cell.styles.fillStyle);

            doc.autoTableText("bbb", cell.textPos.x, cell.textPos.y + 20, {
                halign: cell.styles.halign,
                valign: cell.styles.valign
            });*/

            doc.setTextColor(100);
            doc.autoTableText(cell.text, cell.textPos.x, cell.textPos.y + (cell.height / 3) + 20, {
                halign: cell.styles.halign,
                valign: cell.styles.valign
            });
            return false;
        },
        drawRow: function(row, data) {
            // Don't print secondary header normally
            if (row.index === 0) return false;
        },
        styles: {
            fontSize: 8,
            columnWidth: 25,/******************************************************************************************Ancho de cada columna del cuerpo de la tabla*/
        },
        theme: 'grid'
    });

    doc.save("Report.pdf");
}