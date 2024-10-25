export let myWindow;

export function newWindow() {
    // Check if the window is already open
    if (!myWindow || myWindow.closed) {
        myWindow = window.open(
            "https://www.tripadvisor.com/Tourism-g294280-Brazil-Vacations.html",
            "Brazil",
            "width=800,height=400,resizable=yes,scrollbars=yes,location=yes"
        );
    } else {
        // If the window is already open, focus on it
        myWindow.focus();
    }
}
