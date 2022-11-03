
/**
* Listen for clicks on the buttons, and send the appropriate message to
* the content script in the page.
*/
function listenForClicks() {
    document.addEventListener("click", (e) => {


    /**
    * Insert the page-hiding CSS into the active tab,
    * then get the beast URL and
    * send a "justify" message to the content script in the active tab.
    */
    function justify(tabs) {
    browser.tabs.sendMessage(tabs[0].id, {
    command: "justify"
    });
    }

    function fontify(tabs) {
        browser.tabs.sendMessage(tabs[0].id, {
        command: "fontify"
        });
    }

    function cats(tabs) {
        browser.tabs.sendMessage(tabs[0].id, {
        command: "cats"
        });
    }

    /** 
     * send a "reset" message to the content script in the active tab.
     * But is does not do anything right now
    */
    function reset(tabs) {
    browser.tabs.sendMessage(tabs[0].id, {
    command: "reset",
    });
    }

    /**
    * Just log the error to the console.
    */
    function reportError(error) {
    console.error(`Could not prettify: ${error}`);
    }

    /**
    * Get the active tab,
    * then call "justify()" or "reset()" as appropriate.
    * Add more messages in the if-else for more functions
    */
    if (e.target.classList.contains("justify")) {
    browser.tabs
    .query({ active: true, currentWindow: true })
    .then(justify)
    .catch(reportError);
    } else if (e.target.classList.contains("fontify")) {
    browser.tabs
    .query({ active: true, currentWindow: true })
    .then(fontify)
    .catch(reportError);
    } else if (e.target.classList.contains("cats")) {
        browser.tabs
        .query({ active: true, currentWindow: true })
        .then(cats)
        .catch(reportError);
    } else if (e.target.classList.contains("reset")) {
    browser.tabs
    .query({ active: true, currentWindow: true })
    .then(reset)
    .catch(reportError);
    } 
    });
}

/**
* There was an error executing the script.
* Display the popup's error message, and hide the normal UI.
*/
function reportExecuteScriptError(error) {
document.querySelector("#popup-content").classList.add("hidden");
document.querySelector("#error-content").classList.remove("hidden");
console.error(`Failed to execute content script: ${error.message}`);
}

/**
* When the popup loads, inject a content script into the active tab,
* and add a click handler.
* If we couldn't inject the script, handle the error.
*/
browser.tabs
.executeScript({ file: "/content_scripts/execute_scripts.js" })
.then(listenForClicks)
.catch(reportExecuteScriptError);

