let products = [
    {
        id: 1,
        name: 'The Winter Of The Witch',
        price: 10,
        imgURL: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1517001188l/36621586._SY475_.jpg',
        about: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dicta iusto voluptate?.'
    },
    {
        id: 2,
        name: 'Magic&Myth',
        price: 12,
        imgURL: 'https://images.randomhouse.com/cover/9780593381717',
        about: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dicta iusto voluptate?.'
    },
    {
        id: 3,
        name: 'Greek Mythology',
        price: 30,
        imgURL: 'https://d1pwnu15mzvjms.cloudfront.net/210x320/9781633538979.jpg',
        about: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dicta iusto voluptate?.'
    },
    {
        id: 4,
        name: 'The Vampire Diaries',
        price: 25,
        imgURL: 'https://store.goodreads.lk/wp-content/uploads/2021/05/9780340945049.jpg',
        about: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dicta iusto voluptate?.'
    },
    {
        id: 5,
        name: 'Thrones&Bones Frostborn',
        price: 15,
        imgURL: 'https://imaginationsoup.net/wp-content/uploads/2015/10/Frostborn.jpg',
        about: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dicta iusto voluptate?.'
    },
    {
        id: 6,
        name: 'Sherlock Holmes',
        price: 25,
        imgURL: 'https://i.ebayimg.com/images/g/530AAOSwuC5f~0Yx/s-l500.jpg',
        about: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dicta iusto voluptate?.'
    },
    {
        id: 7,
        name: 'Shadowhunters',
        price: 20,
        imgURL: 'https://cdn.shopify.com/s/files/1/0427/9412/3414/products/9781406307627.jpg?v=1612014113',
        about: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dicta iusto voluptate?.'
    },
    {
        id: 8,
        name: 'The Da Vinci Code',
        price: 30,
        imgURL: 'https://prodimage.images-bn.com/pimages/9780307277671_p0_v7_s1200x630.jpg',
        about: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dicta iusto voluptate?.'
    },
    {
        id: 9,
        name: 'Harry Potter',
        price: 30,
        imgURL: 'https://m.media-amazon.com/images/I/710ESoXqVPL._AC_UF1000,1000_QL80_.jpg',
        about: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dicta iusto voluptate?.'
    }
];

let productsWrapper = document.querySelector(".products-wrapper")
let buttons = []

document.addEventListener("DOMContentLoaded", () => {
    products.forEach((product) => {
        productsWrapper.innerHTML += `<div class="col-3">
        <div class="card" data-id="${product.id}" style="width: 18rem;">
            <img src="${product.imgURL}"
                class="card-img-top" alt="${product.name}">
            <div class="card-body">
                <h5 class="card-title"><span>Book's name:</span><br><span id="name" class="fw-bold">${product.name}</span></h5>
                <p class="card-text"><span>Price: </span><span id="price">${product.price}</span><span>$</span></p>
                <p><span>About: </span> <span>${product.about}</span></p>
                <a href="#" class="btn btn-primary add-to-card">Add to Basket</a>
            </div>
        </div>
    </div>`
    })

    Array.from(productsWrapper.children).forEach((card) => {
        buttons.push(card.children[0].children[1].children[3])
    });
    buttons.forEach((btn) => {
        btn.addEventListener("click", function () {
            let previousBasket = JSON.parse(localStorage.getItem("basket"));
            let id = this.parentElement.parentElement.getAttribute("data-id");
            let name = this.previousElementSibling.previousElementSibling.previousElementSibling.children[2].textContent;
            let existing = previousBasket.find((item) => item.id == id);

            if (existing) {
                existing.count++;
            }
            else {
                const obj = {
                    id: id,
                    name: name,
                    price: this.previousElementSibling.previousElementSibling.children[1].textContent,
                    imgURL: this.parentElement.previousElementSibling.src,
                    about: this.previousElementSibling.children[1].textContent,
                    count: 1
                };
                previousBasket.push(obj);
            }

            localStorage.setItem("basket", JSON.stringify(previousBasket));
            Swal.fire({
                position: 'bottom-right',
                icon: 'success',
                title: `${name} added to basket successfully!`,
                showConfirmButton: false,
                timer: 1500
            })
        })
    });

})


let increase = document.querySelectorAll(".increase")
let decrease = document.querySelectorAll(".decrease")

increase.forEach((item) => {
    item.addEventListener('click', () => {
        const productId = item.dataset.productId;
        const countId = item.parentElement.previousElementSibling;
        let count = parseInt(countId.textContent);
        count++;
        countId.textContent = count;
        const price = parseInt(item.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.
            previousElementSibling.textContent)
    })
    decrease.forEach((item) => {
        item.addEventListener('click', () => {
            const productId = item.dataset.productId;
            const countId = item.parentElement.previousElementSibling;
            let count = parseInt(countId.textContent);
            if (count > 1)
                count--;
            countId.textContent = count;
            const price = parseInt(item.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.
                previousElementSibling.textContent)
        })
    })
})