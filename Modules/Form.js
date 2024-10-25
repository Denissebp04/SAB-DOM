// Export the form variable
export let form;

// Function to open the form window
export function validForm() {
    // Check if the form window is already open
    if (!form || form.closed) {
        form = window.open(
            "form.html",
            "Nos fuimos ;)",
            "width=800,height=400,resizable=yes,scrollbars=yes,location=yes"
        );
    } else {
        // If the window is already open, focus on it
        form.focus();
    }
}

