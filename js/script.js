//navbar
// select button and links
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav__menu");
// add event listener
navBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});


//Modal
class UI {
    //showModal
    showModal(e) {
        e.preventDefault();
        //console.log(e.target);on récupére l'icon met on souhaite avoir le parent <span> qui possède le data-id
        console.log(e.target.parentElement);//parenElement pour récup data-id dans <span>
        if (e.target.parentElement.classList.contains('gallery__img__icon')) {
            let id = e.target.parentElement.dataset.id;//equivalent en jquery -> data() qui répond aux attributs data HTML
            console.log(id);
            const modal = document.querySelector('.work-modal');
            const modalItem = document.querySelector('.work-modal__item');
            modal.classList.add('work-modal--show');//pour qu'il se montre
            modalItem.style.backgroundImage = `url(../images/tour-${id}.jpeg)`;
        }
    }

    //closeModal
    closeModal() {
        document.querySelector('.work-modal').classList.remove('work-modal--show');
    }
}

function eventListeners() {
    const ui = new UI(); //création instance de la class UI

    //display modal
    const links = document.querySelectorAll('.gallery__img__icon');//créé un array
    console.log(links);
    links.forEach(function (item) {
        item.addEventListener('click', function (e) {
            ui.showModal(e);
        })
    })
    //hide modal
    document.querySelector('.work-modal__close').addEventListener('click', function () {
        ui.closeModal();
    })
};
eventListeners(); //appel de la fonction


//Contact thanks
$(".contact__form__submit").on("click", function (e) {
    e.preventDefault();
    $(".contact__thanks").show();
    setTimeout(function(){
        $(".contact__thanks").hide();
    },3000);
    $(".contact__form__input").val("");
})
