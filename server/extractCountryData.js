module.exports = function(csvString) {
    let csvArray = csvString.split('\n');

    // Remove the column names from csvArray
    let headings = csvArray.shift().split(',');
    // Initialize an object to organize csv data by country
    let countries = {}
    csvArray.forEach(function(csvRowString) {
        // Split each row by comma
        var csvRow = csvRowString.split(",");
        let name = csvRow[0].replace('\r', '');
        // Turn each row into an object with headings as keys
        let rowData = {}
        csvRow.forEach((row, index) => {
            let heading = headings[index].replace('\r', '');
            if (rowData[name] === undefined) {
                rowData[name] = { [heading]: row.replace('\r', '') }
            } else {
                rowData[name][heading] = row.replace('\r', '');
            }
        })
        countries[name] = Object.values(rowData)[0];
    });
    return Object.values(countries);
};