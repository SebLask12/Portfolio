const link = document.querySelectorAll('.navigation__link');
const link_array = [...link];
const checkbox = document.getElementById('navi-toggle');

checkbox.addEventListener('click', function (e) {
    if (checkbox.checked == true) {
        link_array.forEach(navigation__link => {
            navigation__link.classList.remove('u-pointerEvent');
        });
    }
    else {
        link_array.forEach(navigation__link => {
            navigation__link.classList.add('u-pointerEvent');
        });
    }
})


