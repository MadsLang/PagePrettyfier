(() => {
    /**
     * Check and set a global guard variable.
     * If this content script is injected into the same page again,
     * it will do nothing next time.
     */
    if (window.hasRun) {
      return;
    }
    window.hasRun = true;
  
    /**
     * Function 1: Justify all paragraphs. 
     */
    function doStuff() {
      document.querySelectorAll('[role=paragraph],p').forEach(function(node) {
        node.style.textAlign = "justify"
    });
    }

    /**
     * Add functions similar to doStuff here for more functions
     */

    function doStuff2() {
      document.querySelectorAll('[role=paragraph],p').forEach(function(node) {
        node.style.fontFamily = "serif"
    });
    }
  
    /**
     * Does not do anything. Refresh the page instead to rm edits
     */
    function removeStuff() {

    }
  
    /**
     * Listen for messages from the background script.
     * If receiving "justify", it calls doStuff function.
     * Add other messages and corresponding function to add more functions
     */
    browser.runtime.onMessage.addListener((message) => {
      if (message.command === "justify") {
        doStuff();
      } else if (message.command === "fontify") {
        doStuff2();
      } else if (message.command === "reset") {
        removeStuff();
      }
    });
  })();
  




