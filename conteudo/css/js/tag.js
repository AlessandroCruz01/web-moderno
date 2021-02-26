document.querySelectorAll('.tag').forEach(box => {
    const tagName = elemento.tagName.toLocaleLowerCase()

    elemento.style.borderColor = '#616161'

    if (!elemento.classList.contains('nolabel')) {
        const label = document.createElement('label') //criar uma nova tag diretamente do js

        label.style.backgroundColor = "#616161"
        label.innerHTML = tagName
        elemento.insertBefore(label, elemento.childNodes[0])
    }
})