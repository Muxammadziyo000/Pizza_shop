const pizza = [
    {
        id: 1,
        img: 'https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg',
        title: 'Classic',
        prise: '453 рублей',
    },
    {
        id: 2,
        img: 'https://www.southernliving.com/thmb/3x3cJaiOvQ8-3YxtMQX0vvh1hQw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2652401_QFSSL_SupremePizza_00072-d910a935ba7d448e8c7545a963ed7101.jpg',
        title: 'Supreme',
        prise: '752 рублей',
    },
    {
        id: 3,
        img: 'https://www.foodandwine.com/thmb/3kzG4PWOAgZIIfZwMBLKqoTkaGQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/margherita-pizza-with-argula-and-prosciutto-FT-RECIPE0721-04368ec288a84d2e997573aca0001d98.jpg',
        title: 'Margaritte',
        prise: '533 рублей',
    },
    {
        id: 4,
        img: 'https://static.1000.menu/res/640/img/content-v2/85/ff/6190/pitstsa-pepperoni-_1612599986_22_max.jpg',
        title: 'Peperoni',
        prise: '783 рублей',
    },
    {
        id: 5,
        img: 'https://en.italy4.me/wp-content/uploads/2021/01/Italian-Pizza-in-the-oven.jpg',
        title: 'Italian',
        prise: '589 рублей',
    },
    {
        id: 6,
        img: 'https://burnhard-springlane-gmbh.stream.prepr.io/w_2304,format_jpg,q_70/https://burnhard-springlane-gmbh.stream.prepr.io/w_1080/4teessorvsqb-7balj02i50ez-pizza-marinara-titelbild.jpg',
        title: 'Marinara',
        prise: '423 рублей',
    },
    {
        id: 7,
        img: 'https://newgenbaker.com/wp-content/uploads/2019/01/PIZZA-VEGETARIANA.jpg',
        title: 'Vegetarian',
        prise: '699 рублей',
    },
    {
        id: 8,
        img: 'https://www.pizzaontheroad.eu/wp-content/uploads/2020/06/IMG_20200616_221343-scaled.jpg',
        title: 'Romana',
        prise: '623 рублей',
    },
    {
        id: 9,
        img: 'https://wips.plug.it/cips/buonissimo.org/cms/2019/04/pizza-capricciosa.jpg',
        title: 'Capricciosa',
        prise: '899 рублей',
    },
    {
        id: 10,
        img: 'https://cdn.tasteatlas.com/Images/Dishes/2bfdf993487d4995b8ed4ce3e99c5703.jpg',
        title: 'Call Zone',
        prise: '433 рублей',
    },

]
let korzina = {};

let elKorzina = document.querySelector('.korzina_wrapper');
let elCart = document.querySelector('.cart_wrapper');

function cartRender() {
    function addCart(item) {

        if (korzina[item.id]) {
            korzina[item.id].Количество++;
        } else {

            korzina[item.id] = {
                item: item,
                Количество: 1
            };
        }
        console.log(korzina);


        renderCart();
    }

    function renderCart() {

        elKorzina.innerHTML = '';


        for (let itemId in korzina) {
            let cartItem = korzina[itemId];
            let newCart = document.createElement("div");
            newCart.classList.add('korzinka_cart');
            newCart.innerHTML = `
                <img src=${cartItem.item.img} alt="" class="cart_image">
                <h4>${cartItem.item.title}</h4>
                <p>${cartItem.item.prise}</p>
                <p>количество: ${cartItem.Количество}</p>
            `;
            elKorzina.appendChild(newCart);
        }
    }

    pizza.map((item) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add('cart');
        newDiv.addEventListener("click", () => addCart(item));
        newDiv.innerHTML = `
            <img src=${item.img} alt="" class="cart_image">
            <h4>${item.title}</h4>
            <p>${item.prise}</p>
        `;
        elCart.appendChild(newDiv);
    });

}

cartRender();
