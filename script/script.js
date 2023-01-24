const link = document.querySelectorAll('.navigation__link');
const link_array = [...link];
const checkbox = document.getElementById('navi-toggle');

document.querySelectorAll('.navigation__link').forEach(function (el) {
    el.addEventListener('click', function (e) {
        e.preventDefault();
        checkbox.checked = false;
        const id = this.getAttribute('href');
        document.querySelector(id).scrollIntoView({
            behaviour: 'smooth'
        })
    })
});

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


