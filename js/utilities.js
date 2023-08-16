function getInputFliedValueId(inputId) {
    const inputFlied = document.getElementById(inputId)
    const inputFliedStringValue = inputFlied.value;
    const newInputFliedValue = parseFloat(inputFliedStringValue)
    inputFlied.value = '';
    return newInputFliedValue;
}

function getElementValueId(elementId) {
    const elementFlied = document.getElementById(elementId)
    const elementFliedStaingValue = elementFlied.innerText;
    const previousElementFliedValue = parseFloat(elementFliedStaingValue)
    return previousElementFliedValue;
}

function setElementValue(newElementId, newValue) {
    const newElementFlied = document.getElementById(newElementId)
    newElementFlied.innerText = newValue;

}
