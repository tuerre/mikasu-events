const menuFlotanteCard = document.getElementById('menuFlotanteCard');
const bocinaMenuOpenIMG = document.getElementById('bocinaMenuOpenIMG');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const menuContentBento = document.getElementById('menuContentBento');

const jetSetMenuOpenIMG = document.getElementById('jetSetMenuOpenIMG');

bocinaMenuOpenIMG.addEventListener('click' , () => {
    menuFlotanteCard.style.display = 'flex';

    menuContentBento.innerHTML = `
  <div class="grid">
                        <div class="item1">
                            <img src="/src/bocina1.jpg" alt="Imagen de una Bocina">
                        </div>
                        <div class="item2">
                            <img src="/src/bocina2.jpg" alt="Imagen de una Bocina">
                        </div>
                        <div class="item3">
                            <img src="/src/bocina3.jpg" alt="Imagen de una Bocina">
                        </div>
                        <div class="item4">
                            <img src="/src/bocina4.jpg" alt="Imagen de una Bocina">
                        </div>
                    </div>
`;

});

jetSetMenuOpenIMG.addEventListener('click' , () => {
    menuFlotanteCard.style.display = 'flex';

    menuContentBento.innerHTML = `
  <div class="grid">
                        <div class="item1">
                            <img src="/src/jetset1.jpg" alt="Imagen de una Bocina">
                        </div>
                        <div class="item2">
                            <img src="/src/jetset2.jpg" alt="Imagen de una Bocina">
                        </div>
                        <div class="item3">
                            <img src="/src/jetset3.jpg" alt="Imagen de una Bocina">
                        </div>
                        <div class="item4">
                            <img src="/src/bocina4.jpg" alt="Imagen de una Bocina">
                        </div>
                    </div>
`;

});

closeMenuBtn.addEventListener('click', () => {
    menuFlotanteCard.style.display = 'none';
});