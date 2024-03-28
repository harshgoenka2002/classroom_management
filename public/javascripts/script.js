
document.addEventListener("DOMContentLoaded", function () {
  // Assuming 'brnch' is an array containing branch information
  const branchDropdown = document.getElementById("class");
  const attendanceTableBody = document.querySelector("#attendance-table tbody");

  branchDropdown.addEventListener("change", function () {
    const selectedBranchId = branchDropdown.value;

    // Assuming 'stu' is an array containing student information
    const filteredStudents = stuData.filter(student => student.branch === selectedBranchId);

    // Clear existing rows in the attendance table
    attendanceTableBody.innerHTML = "";

    // Populate the attendance table with filtered students
    filteredStudents.forEach(student => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${student.rollno}</td>
        <td>${student.name}</td>
        <td><input type="checkbox" class="attendance-checkbox" checked ></td>
      `;
      attendanceTableBody.appendChild(row);
    });

    var totalAttendanceInput = document.getElementById('total-attendance');
    var totalAttendance = document.getElementById('out-of');
    let checkboxes = document.querySelectorAll('.attendance-checkbox');
    let total_strength = checkboxes.length;
    let totalPresent = total_strength;
    totalAttendanceInput.value = totalPresent;
    
    let variable = 0;
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener("change", (e) => {
        checkboxes.forEach(cbox => {
          if (cbox.checked) {
            variable++;
          }
        })
        totalAttendanceInput.value = variable;
        variable = 0;
      })
      
    })
    
    totalAttendance.value = total_strength;
    
    // Other logic or updates can be added here as needed
    
  });
  
  var totalAttendanceInput = document.getElementById('total-attendance');
  var totalAttendance = document.getElementById('out-of');

    const generateReportBtn = document.getElementById("share-options");

    generateReportBtn.addEventListener("click", function () {
      const selectedBranchId = branchDropdown.value;
      const selecteddepartment = document.getElementById("branch").options[document.getElementById("branch").selectedIndex].text;
      const selectedBranchName = branchDropdown.options[branchDropdown.selectedIndex].text;
      const selectedSubjectName = document.getElementById("subject").options[document.getElementById("subject").selectedIndex].text;
      const selectedFacultyName = document.getElementById("faculty").options[document.getElementById("faculty").selectedIndex].text;
  
      // Assuming 'stuData' is an array containing student information
      const students = stuData.filter(student => student.branch === selectedBranchId);
  
      // Create a new jsPDF instance
      const { jsPDF } = window.jspdf;
      const pdf = new jsPDF();
  
      const addPageIfNecessary = (currentY, spaceNeeded) => {
        const pageHeight = pdf.internal.pageSize.height;
        if (currentY + spaceNeeded > pageHeight) {
          pdf.addPage();
          return 20; // Reset Y position to 20 (adjust as needed)
        }
        return currentY;
      };
  
      let currentY = 20; // Initial Y position
      const lineHeight = 10; // Height of each line
  
      // Add content to the PDF
      pdf.setFont("bold");
      pdf.setFontSize(20);
      pdf.text("Attendance Report", 75, currentY);
      pdf.setFont("normal");
  
      currentY += lineHeight;
      pdf.text(`Date: ${new Date().toLocaleDateString()}`, 20, currentY);
      currentY += lineHeight;
      pdf.text(`Department: ${selecteddepartment}`, 20, currentY);
      currentY += lineHeight;
      pdf.text(`Branch: ${selectedBranchName}`, 20, currentY);
      currentY += lineHeight;
      pdf.text(`Subject: ${selectedSubjectName}`, 20, currentY);
      currentY += lineHeight;
      pdf.text(`Faculty: ${selectedFacultyName}`, 20, currentY);
      currentY += lineHeight;
      pdf.text(`Total:${totalAttendanceInput.value} / ${totalAttendance.value}`, 20, currentY);
      currentY += lineHeight;
      pdf.text("Absent Students:", 20, currentY ); 
      currentY += lineHeight;
      const selectedStudents = [];
  
      const checkboxes = document.querySelectorAll('.attendance-checkbox');
      checkboxes.forEach((checkbox, index) => {
        if (!checkbox.checked) {
          selectedStudents.push(students[index]);
        }
      });
  
      // Add the names of absent students to the PDF
      selectedStudents.forEach((student, index) => {
        currentY = addPageIfNecessary(currentY, lineHeight);
        pdf.text(`${index + 1}. ${student.rollno}`, 20, currentY);
        currentY += lineHeight;
      });
  
      // Save or open the PDF
      const blob = pdf.output("blob");
      const blobURL = URL.createObjectURL(blob);
      window.open(blobURL, "_blank");
    });
    // ... rest of your existing code ...
  });

  let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}