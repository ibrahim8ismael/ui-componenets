function focusNextInput(el, prevId, nextId) {
    if (el.value.length === 0) {
        document.getElementById(prevId).focus();
    } else {
        document.getElementById(nextId).focus();
    }
}