
const yearSelect = document.getElementById("year");
const monthSelect = document.getElementById("month");
const dateSelect = document.getElementById("date");
const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task");
const taskDisplay = document.getElementById("task-display");


const currentYear = new Date().getFullYear();
for (let year = currentYear - 10; year <= currentYear + 10; year++) {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    yearSelect.appendChild(option);
}
yearSelect.value = currentYear;

function populateDates() {
    const selectedYear = parseInt(yearSelect.value);
    const selectedMonth = parseInt(monthSelect.value);

    const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
    dateSelect.innerHTML = ""; 

    for (let day = 1; day <= daysInMonth; day++) {
        const option = document.createElement("option");
        option.value = day;
        option.textContent = day;
        dateSelect.appendChild(option);
    }
}


populateDates();
yearSelect.addEventListener("change", populateDates);
monthSelect.addEventListener("change", populateDates);


function addTaskToTable() {
    const selectedYear = yearSelect.value;
    const selectedMonth = monthSelect.options[monthSelect.selectedIndex].text;
    const selectedDate = dateSelect.value;
    const taskText = taskInput.value.trim();

    if (!taskText) {
        alert("Please write a task before adding!");
        return;
    }
    const taskRow = document.createElement("tr");
    const dateCell = document.createElement("td");
    dateCell.textContent = `${selectedDate} ${selectedMonth} ${selectedYear}`;
    dateCell.style.padding = "10px";
    taskRow.appendChild(dateCell);

    const taskCell = document.createElement("td");
    taskCell.textContent = taskText;
    taskCell.style.padding = "10px";
    taskRow.appendChild(taskCell);

    const deleteCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.padding = "5px 10px";
    deleteButton.style.color = "white";
    deleteButton.style.backgroundColor = "red";
    deleteButton.style.border = "none";
    deleteButton.style.borderRadius = "5px";

    deleteButton.onclick = () => {
        taskDisplay.removeChild(taskRow);
    };

    deleteCell.appendChild(deleteButton);
    taskRow.appendChild(deleteCell);

    taskDisplay.appendChild(taskRow);
    taskInput.value = "";
}

addTaskButton.addEventListener("click", addTaskToTable);
