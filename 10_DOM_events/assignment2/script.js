let h2 = document.querySelector('h2');
let inputBox = document.querySelector('#user');

inputBox.addEventListener('input', function (e) {
    if ((e.data >= 'a' && e.data <= 'z') || (e.data >= 'A' && e.data <= 'Z')) {
        h2.textContent = inputBox.value;
    }
})