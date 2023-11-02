/** List of Data **/
let DataList = [];
let filterTimeOut;

/** Get references from HTML elements **/
const uploadFileInput = document.getElementById("uploadFile");
let filterInput = document.getElementById("filterInput");
let col = document.getElementById("col-style");
let resultList = document.getElementById("results");
let content = document.getElementById("filter-content");
let load_indicator = document.getElementById("load-indicator");
filterInput.style.visibility = "hidden";
content.style.backgroundColor = "007BFF";


/** Show The filter input and file content after uploading the file **/
uploadFileInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
        load_indicator.style.display = "block";
        const reader = new FileReader();

        reader.onload = (e) => {
            const fileContent = e.target.result;

            filterInput.style.visibility = "visible";
            content.style.backgroundColor = "white";
            resultList.style.height = "450px";
            resultList.style.width = "800px";
            resultList.style.overflowX = "hidden";
            col.style.height = "550px";

            DataList = fileContent.split("\n");
            updateVisibleITems(DataList);
            load_indicator.style.display = "none";
        }

        reader.readAsText(file);
    }
})

/** Filter the list of data while searching  **/
filterInput.addEventListener("input", () => {
    clearTimeout(filterTimeOut);

    filterTimeOut = setTimeout(() => {
        let searchText = filterInput.value;
        let filterData = DataList.filter((record) =>
            record.toLowerCase().includes(searchText.toLowerCase())
        );
        updateVisibleITems(filterData);

    }, 300);
})



/** Show record filtering data **/
function updateVisibleITems(dataList) {
    resultList.innerHTML = "";
    if (dataList.length === 0) {
        resultList.innerHTML = "<li> No Data Found </li>"
    } else {
        for (let i = 0; i < dataList.length; i++) { 
            let formatedRecord = formatFilteredData(dataList[i], i + 1);
            let listItem = document.createElement("li");
            listItem.textContent = formatedRecord;
            resultList.appendChild(listItem);
        }
    }
}

/** Format the filtered data **/
const formatFilteredData = (data, index) => {
    const [firstName, lastName, street, city, postCode, eMail, telephone] = data.split(",");
    return `${index}) ${firstName} ${lastName} | ${street} , ${city} , ${postCode} | ${eMail} | ${telephone}`;
}