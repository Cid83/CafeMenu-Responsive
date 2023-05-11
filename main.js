import menu from "./app.js"

// console.log(menu)

// html elemanlarını alma
const menuContainer = document.getElementById("menu-container")
// console.log(menuContainer)
// sayfa yüklendiği anda elemanları gösteren Fonk.ları çalıştır
document.addEventListener("DOMContentLoaded",()=>{
    displayMenuItems(menu)
})

function displayMenuItems(menuItems) {
    console.log(menuItems);
    let displayMenu = menuItems.map(
      (item) => `
          <div id='card' class="d-flex gap-3 flex-column flex-md-row align-items-center" >
            <img src="${item.img}" class="shadow rounded"  />
            <div>
              <div class="d-flex justify-content-between my-2">
                <h5>${item.title}</h5>
                <p>$ ${item.price}</p>
              </div>
              <p class="lead">
               ${item.desc}
              </p>
            </div>
          </div>
    `
    );

     // aralardaki vigülü silme
  displayMenu = displayMenu.join('');

  // oluşturduğumuz divleri htmle gönderme
  menuContainer.innerHTML = displayMenu;
}

// filtreleme kısmı
const filterBtns = document.querySelectorAll('.filter-btn');

// console.log(filterBtns)

// dizideki her bir elemanın tıklanma olayını izleme
filterBtns.forEach((btn) => {
    // console.log(btn)

  //  butonların tıklanma olayını izleme
  btn.addEventListener('click', searchCategory);
});

function searchCategory(e) {
  // tıklanılan butonun kategori değerini alma
  const category = e.target.dataset.id;

  // elemanları kategori değerine göre filtreleme
  const filtredItems = menu.filter((menuItem) => {
    if (category === menuItem.category) return menuItem;
  });

  //  hepsi seçildiyse tamamını göster değilse filtrlenmiş diziyi
  if (category === 'all') {
    displayMenuItems(menu);
  } else {
    displayMenuItems(filtredItems);
  }
  
}



