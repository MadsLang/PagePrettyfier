document.addEventListener('keydown', (event) => {
    if (event.shiftKey && event.code === "KeyJ") {
        document.querySelectorAll('[role=paragraph],p').forEach(function(node) {
            node.style.textAlign = "justify"
        });
    }
});