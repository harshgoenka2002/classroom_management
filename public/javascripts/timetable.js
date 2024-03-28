// Inside timetable.js

function changeImage() {
    var classSelect = document.getElementById("classSelect");
    var classImage = document.getElementById("classImage");

    // Get the selected class value
    var selectedClass = classSelect.value;

    // Set the corresponding image source based on the selected class
    switch (selectedClass) {
        case "onebyfourIT":
            classImage.src = "/images/onebyfourIT.jpeg";
            break;
        case "twobyfourIT":
            classImage.src = "/images/twobyfourIT.jpeg";
            break;
        case "threebyfourIT":
            classImage.src = "/images/threebyfourIT.jpeg";
            break;
        case "fourbyfourIT":
            classImage.src = "/images/fourbyfourIT.jpeg";
            break;
        case "onebytwoMSC":
            classImage.src = "/images/onebytwoMSC.jpeg";
            break;
        case "onebyoneMCA":
            classImage.src = "/images/onebyoneMCA.jpeg";
            break;
        // Add more cases as needed
        default:
            // Set a default image if the selected class is not recognized
            classImage.src = "/images/campus.jpeg";
    }
}
