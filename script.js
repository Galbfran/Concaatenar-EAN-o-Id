

const input = document.querySelector('input[type="file"]');
input.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const csv = XLSX.utils.sheet_to_csv(worksheet).replace(/\n/g, ",");
        console.log(csv);
        let parrafo = document.createElement('p')
        for (ean of csv){
            let texteParrafo = document.createTextNode(ean)
            parrafo.appendChild(texteParrafo)
            document.getElementsByTagName('section')[0].appendChild(parrafo)
        }
    };
    reader.readAsBinaryString(file);
});