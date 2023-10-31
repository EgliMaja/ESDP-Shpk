/** List of Data **/
const DataList = [
    "Ruth,Griffiths,Smith dam,Lake Janiceland,S0A 3JW,moorefrancesca@example.net,+44191 4960637",
    "Joan,White,Sam square,Cookberg,N11 1QQ,samuel78@example.org,0141 496 0184",
    "Teresa,Hurst,Mellor squares,North Irenebury,BT3 6LT,ben55@example.org,(029) 2018 0419",
    "Heather,Thompson,Ben mountain,Dixonside,N03 5RL,kellykirsty@example.net,+441214960376",
    "Carly,Hale,Davidson summit,Fionachester,S5D 8UD,taylorcarl@example.net,(0116) 4960691",
    "Emma,Palmer,Hill plaza,Lake Geoffreyside,TD5 4SG,uharper@example.net,+44118 4960828",
    "Kenneth,Taylor,Gray parkways,East Karen,B95 0EQ,shane03@example.net,+441144960171",
    "Stacey,Miller,Katy mountains,West Debra,S3J 4RQ,clyons@example.org,(0118) 496 0315",
    "Michael,Fox,Joan forges,North Lindseyton,E05 8JL,istevens@example.net,+44(0)909 879 0997",
    "Ruth,Griffiths,Smith dam,Lake Janiceland,S0A 3JW,moorefrancesca@example.net,+44191 4960637",
    "Joan,White,Sam square,Cookberg,N11 1QQ,samuel78@example.org,0141 496 0184",
    "Teresa,Hurst,Mellor squares,North Irenebury,BT3 6LT,ben55@example.org,(029) 2018 0419",
    "Heather,Thompson,Ben mountain,Dixonside,N03 5RL,kellykirsty@example.net,+441214960376",
    "Carly,Hale,Davidson summit,Fionachester,S5D 8UD,taylorcarl@example.net,(0116) 4960691",
    "Emma,Palmer,Hill plaza,Lake Geoffreyside,TD5 4SG,uharper@example.net,+44118 4960828",
    "Kenneth,Taylor,Gray parkways,East Karen,B95 0EQ,shane03@example.net,+441144960171",
    "Stacey,Miller,Katy mountains,West Debra,S3J 4RQ,clyons@example.org,(0118) 496 0315",
    "Michael,Fox,Joan forges,North Lindseyton,E05 8JL,istevens@example.net,+44(0)909 879 0997",
    "Kenneth,Taylor,Gray parkways,East Karen,B95 0EQ,shane03@example.net,+441144960171",
    "Stacey,Miller,Katy mountains,West Debra,S3J 4RQ,clyons@example.org,(0118) 496 0315",
    "Michael,Fox,Joan forges,North Lindseyton,E05 8JL,istevens@example.net,+44(0)909 879 0997",
    "Ruth,Griffiths,Smith dam,Lake Janiceland,S0A 3JW,moorefrancesca@example.net,+44191 4960637",
    "Joan,White,Sam square,Cookberg,N11 1QQ,samuel78@example.org,0141 496 0184",
    "Teresa,Hurst,Mellor squares,North Irenebury,BT3 6LT,ben55@example.org,(029) 2018 0419",
    "Heather,Thompson,Ben mountain,Dixonside,N03 5RL,kellykirsty@example.net,+441214960376",
    "Carly,Hale,Davidson summit,Fionachester,S5D 8UD,taylorcarl@example.net,(0116) 4960691",
    "Emma,Palmer,Hill plaza,Lake Geoffreyside,TD5 4SG,uharper@example.net,+44118 4960828",
    "Kenneth,Taylor,Gray parkways,East Karen,B95 0EQ,shane03@example.net,+441144960171",
    "Stacey,Miller,Katy mountains,West Debra,S3J 4RQ,clyons@example.org,(0118) 496 0315",
    "Michael,Fox,Joan forges,North Lindseyton,E05 8JL,istevens@example.net,+44(0)909 879 0997",
]

/** Get references from HTML elements **/
const  uploadFileInput = document.getElementById("uploadFile" );
let  filterInput = document.getElementById("filterInput" );
let  col = document.getElementById("col-style" );
let  resultList = document.getElementById("results" );
let  content = document.getElementById("filter-content" );
filterInput.style.visibility = "hidden";
content.style.backgroundColor = "007BFF";


/** Show The filter input after upload the file **/
uploadFileInput.addEventListener("change" ,  () => {
    if ( uploadFileInput.files.length > 0 ){
        console.log(uploadFileInput.files , "Length")
        filterInput.style.visibility = "visible";
        content.style.backgroundColor = "white";
        displayFilteredData(DataList);
        resultList.style.height = "450px";
        resultList.style.width = "800px";
        resultList.style.overflowX = "hidden";
        col.style.height = "550px";
    }
})

/** Filter the list of data while searching  **/
filterInput.addEventListener("input" , () => {
    const searchText = filterInput.value.toLowerCase();
    const filterData = DataList.filter( record => {
        return String(record.replace(","," | "))?.toLowerCase()?.includes(searchText);
    });
    displayFilteredData(filterData);
})


/** Show record filtering data **/
const displayFilteredData = (filterData) => {
    resultList.innerHTML = "";
    if (filterData.length === 0) {
        resultList.innerHTML = "<li> No Data Found </li>"
    } else  {
        filterData.forEach((record , index) => {
            const formatedRecord = formatFilteredData(record , index + 1);
            const listItem = document.createElement("li");
            listItem.textContent =  formatedRecord;
            resultList.appendChild(listItem)
        })
    }
}

/** Format the filtered data **/
const  formatFilteredData = (data , index) => {
    const [firstName,lastName,street,city,postCode,eMail,telephone] = data.split(",");
    return `${index}) ${firstName} ${lastName} | ${street} , ${city} , ${postCode} | ${eMail} | ${telephone}`;
}

const uploadFile  = () => {
    
}