function changetab(idb) {
  let length = document.querySelectorAll(".tab").length
  for (i = 0; i < length; i++) {
      document.querySelectorAll(".tab")[i].classList.remove("active_tab");
  }
  selected = document.getElementById(idb)
  selected.classList.add("active_tab")

}


function generateCalendar(year) {
  const calendarContainer = document.getElementById("calendar-container");

  const events = [
    { date: "2024-01-23", description: "Flashmob" },
    { date: "2024-01-24", description: "Flashmob" },
    { date: "2024-02-05", description: "Sports" },
    { date: "2024-03-08", description: "FEST" },
    { date: "2024-03-09", description: "FEST" },
    { date: "2024-05-15", description: "HACKATHON" },
    { date: "2024-04-25", description: "AU Foundation" },
    { date: "2024-06-17", description: "Tech Fest" },
    { date: "2024-07-19", description: "Ethnic Day" },
    { date: "2024-08-21", description: "Sports Event" },
    { date: "2024-09-14", description: "YOGA Event" },
    { date: "2024-10-15", description: "Indoor sports" },
    // Add more events as needed
  ];

  for (let month = 0; month < 12; month++) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();

    const calendarTable = document.createElement("div");
    calendarTable.classList.add("calendar");

    const headerRow = document.createElement("div");
    headerRow.classList.add("calendar-header");
    const monthName = new Date(year, month, 1).toLocaleString('default', { month: 'long' });
    const monthHeader = document.createElement("div");
    monthHeader.classList.add("calendar-cell");
    monthHeader.colSpan = 7;
    monthHeader.textContent = monthName + " " + year;
    headerRow.appendChild(monthHeader);
    calendarTable.appendChild(headerRow);

    const daysRow = document.createElement("div");
    daysRow.classList.add("calendar-header");
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    for (const dayOfWeek of daysOfWeek) {
      const dayCell = document.createElement("div");
      dayCell.classList.add("calendar-cell");
      dayCell.textContent = dayOfWeek;
      daysRow.appendChild(dayCell);
    }
    calendarTable.appendChild(daysRow);

    let currentDay = 1;
    for (let i = 0; i < 6; i++) {
      const calendarRow = document.createElement("div");
      calendarRow.classList.add("calendar-row");

      for (let j = 0; j < 7; j++) {
        const calendarCell = document.createElement("div");
        calendarCell.classList.add("calendar-cell");

        if ((i === 0 && j < firstDay) || currentDay > daysInMonth) {
          calendarCell.textContent = "";
        } else {
          calendarCell.innerHTML = `<div class="date">${currentDay}</div>`;

          // Check if the current cell date has an event
          const cellDate = new Date(year, month, currentDay).toISOString().split('T')[0];
          const event = events.find(event => event.date === cellDate);

          if (event) {
            calendarCell.classList.add("event");
            const eventName = document.createElement("div");
            eventName.classList.add("event-name");
            eventName.textContent = event.description;
            calendarCell.appendChild(eventName);
          }

          currentDay++;
        }

        calendarRow.appendChild(calendarCell);
      }

      calendarTable.appendChild(calendarRow);
    }

    calendarContainer.appendChild(calendarTable);
  }
}

generateCalendar(2024);


//attendance
function calculateTotalAttendance() {
  const checkboxes = document.querySelectorAll('.attendance-checkbox');
  const totalAttendanceInput = document.getElementById('total-attendance');

  let totalPresent = 0;
  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      totalPresent++;
    }
  });

  totalAttendanceInput.value = totalPresent;
}

function shareAttendance() {
  // Implement sharing logic based on the selected option (faculty or students)
  const shareOption = document.getElementById('share-option').value;
  alert(`Attendance shared with ${shareOption}`);
}

// Add an event listener to each checkbox to update total attendance on change
const checkboxes = document.querySelectorAll('.attendance-checkbox');
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', calculateTotalAttendance);
});


