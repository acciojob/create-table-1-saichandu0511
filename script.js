function insert_Row() {
	
let table = document.getElementById("sampleTable");

	let row = (table.insertRow(0));

	let cell1 = row.insertRow(0);
    let cell2 = row.insertRow(1);

	cell1.innerText="New Cell1";
	cell2.innerText="New Cell2";
}
