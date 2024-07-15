// Function to display local time
function displayLocalTime() {
    var now = new Date();
    var localTimeElement = document.getElementById('localTime');
    localTimeElement.textContent = 'Local Time: ' + now.toLocaleTimeString();
}

// Function to display selected timezone time
function displaySelectedTime() {
    var timezoneSelect = document.getElementById('timezoneSelect');
    var selectedTimezone = parseFloat(timezoneSelect.value); // Convert to float for precise UTC offset
    
    if (selectedTimezone === 0) {
        var selectedTimeElement = document.getElementById('selectedTime');
        selectedTimeElement.textContent = 'Please select a timezone.';
        return;
    }
    
    var now = new Date();
    var utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    var selectedTime = new Date(utc + (selectedTimezone * 3600000));
    
    var selectedTimeElement = document.getElementById('selectedTime');
    selectedTimeElement.textContent = 'Selected Time (' + timezoneSelect.options[timezoneSelect.selectedIndex].text + '): ' + selectedTime.toLocaleTimeString();
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    displayLocalTime();
    document.getElementById('timezoneSelect').addEventListener('change', displaySelectedTime);
});

// Update last modified date/time in footer
var lastModifiedElement = document.getElementById('lastModified');
var lastModifiedDate = document.lastModified;
lastModifiedElement.textContent = lastModifiedDate;
