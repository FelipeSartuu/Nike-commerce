const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "assets/images/air.png",
        },
        {
          code: "darkblue",
          img: "assets/images/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "white",
          img: "assets/images/jordan.png",
        },
        {
          code: "green",
          img: "assets/images/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "assets/images/blazer.png",
        },
        {
          code: "green",
          img: "assets/images/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "assets/images/crater.png",
        },
        {
          code: "lightgray",
          img: "assets/images/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "assets/images/hippie.png",
        },
        {
          code: "black",
          img: "assets/images/hippie2.png",
        },
      ],
    },
];

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {

        //trocando slide atual
        wrapper.style.transform = `translateX(${-100 * index}vw)`

        //mudar para o produto escolhido
        choosenProduct = products[index]

        //mudando os textos do produto atual
        currentProductTitle.innerHTML = choosenProduct.title
        currentProductPrice.innerHTML = `$${choosenProduct.price}`
        currentProductImg.src = choosenProduct.colors[0].img

        //atribuindo novas cores
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code
        })
    })
})

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img
    })
})

currentProductSizes.forEach((sizes, index) => {
    sizes.addEventListener("click", () => {
        currentProductSizes.forEach(sizes => {
            sizes.style.backgroundColor = "white"
            sizes.style.color = "black"
        })
            sizes.style.backgroundColor = "black"
            sizes.style.color = "white"
        
    })
})

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const closeButton = document.querySelector(".close");
const backdrop = document.querySelector(".product")

function closeModal() {
    payment.style.display = "none"
}

function openModal() {
    payment.style.display = "flex"
}

productButton.addEventListener("click", openModal)
closeButton.addEventListener("click",closeModal)


