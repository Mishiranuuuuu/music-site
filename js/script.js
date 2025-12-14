document.addEventListener('keydown', (event) => {
    if (event.key === 'F12' || ((event.ctrlKey || event.metaKey) && (event.shiftKey || event.metaKey) && event.key === 'I') || ((event.ctrlKey || event.metaKey) && event.key.toLocaleUpperCase() === 'U')) {
        event.preventDefault();
        alert('Why are you eager to know?');
    }
});

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    alert('Why are you eager to know?');
});