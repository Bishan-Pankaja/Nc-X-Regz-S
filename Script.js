function loadPage() {
    var ip = document.getElementById("ip").value;

    // Validate if the input is not empty
    if (ip) {
        var url = "http://" + ip + ":1000";
        
        // Store the URL in local storage
        localStorage.setItem('webUrl', url);
        
        // Redirect to Webopen.html
        window.location.href = "Webopen.html";
    } else {
        alert("Please enter a valid IP address.");
    }
}

// Load the URL in the iframe when the Webopen.html page loads
window.onload = function() {
    var url = localStorage.getItem('webUrl');
    if (url) {
        // Open the URL in the iframe
        document.getElementById('webFrame').src = url;
        
        // Optionally, you can use window.open to open in a new tab
        // window.open(url, '_blank');
    }
};

