// Custom JavaScript for Student Assistant System with SweetAlert

// Helper function to show an alert
function showAlert(type, title, message) {
    Swal.fire({
        icon: type,
        title: title,
        text: message,
        confirmButtonColor: '#007bff',
    });
}

// Grade Calculator Logic
document.getElementById("gradeForm")?.addEventListener("submit", function (event) {
    event.preventDefault();

    const examScore = document.getElementById("examScore").value.trim();
    const assignmentScore = document.getElementById("assignmentScore").value.trim();
    const projectScore = document.getElementById("projectScore").value.trim();

    if (!examScore || !assignmentScore || !projectScore) {
        showAlert('error', 'Incomplete Fields', 'Please fill up all required fields!');
        return;
    }

    const finalGrade = (parseFloat(examScore) + parseFloat(assignmentScore) + parseFloat(projectScore)) / 3;

    document.getElementById("finalGrade").textContent = finalGrade.toFixed(2);
    document.getElementById("gradeResult").style.display = "block";

    showAlert('success', 'Grade Calculated', 'Your final grade has been calculated successfully!');
});

// Event Tracker Logic
const eventForm = document.getElementById("eventForm");
const eventItems = document.getElementById("eventItems");

eventForm?.addEventListener("submit", function (event) {
    event.preventDefault();

    const eventName = document.getElementById("eventName").value.trim();
    const eventDate = document.getElementById("eventDate").value.trim();

    if (!eventName || !eventDate) {
        showAlert('error', 'Incomplete Fields', 'Please fill up all required fields!');
        return;
    }

    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
        ${eventName} - ${eventDate}
        <button class="btn btn-danger btn-sm delete-event">Delete</button>
    `;

    eventItems.appendChild(li);

    eventForm.reset();
    showAlert('success', 'Event Added', 'Your event has been added successfully!');
});

eventItems?.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-event")) {
        e.target.parentElement.remove();
        showAlert('success', 'Event Deleted', 'The event has been deleted successfully!');
    }
});

// Task Tracker Logic
const taskForm = document.getElementById("taskForm");
const taskItems = document.getElementById("taskItems");

taskForm?.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskName = document.getElementById("taskName").value.trim();
    const taskDueDate = document.getElementById("taskDueDate").value.trim();

    if (!taskName || !taskDueDate) {
        showAlert('error', 'Incomplete Fields', 'Please fill up all required fields!');
        return;
    }

    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
        ${taskName} - ${taskDueDate}
        <button class="btn btn-danger btn-sm delete-task">Delete</button>
    `;

    taskItems.appendChild(li);

    taskForm.reset();
    showAlert('success', 'Task Added', 'Your task has been added successfully!');
});

taskItems?.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-task")) {
        e.target.parentElement.remove();
        showAlert('success', 'Task Deleted', 'The task has been deleted successfully!');
    }
});
