let menu_content = document.querySelector('.menu-content');
let product_content = document.querySelector('.product-content');
let review_content = document.querySelector('.review-content');
let blogs_content = document.querySelector('.blogs-content');
let searchBtn = document.querySelector('.searchBtn');
let search = document.querySelector('.search');
let openBtn= document.querySelector('.openBtn');
let middle_head = document.querySelector('.middle-head');
let card = document.querySelector('.cards');
let shopCard = document.querySelector('.shopCard');
let upBtn = document.querySelector(".upBtn");

let preloader = document.querySelector(".preloader");
window.addEventListener('load', () => {
	preloader.style.display = "none";
})

window.addEventListener('scroll',()=>{
	if (window.scrollY > 300) {
		upBtn.style.display = "block";
	}
	else {
		upBtn.style.display = "none";
	}
})

let show = false;
searchBtn.onclick = () =>{
	if(show == false){
		search.style.display = 'block';
		show = true;
	}
	else{
		show = false;
		search.style.display = 'none';
	}
}

let shopItems = ['images/cart-item-1.png','images/cart-item-2.png',
'images/cart-item-3.png',
'images/cart-item-4.png']
for(let a = 0;a < shopItems.length;a++){
	card.innerHTML += `
		<div class='card-items'>
			<img src = '${shopItems[a]}'>
			<div class='card-content'>
				<h2>card item ${a}</h2>
				<h5>$15.6</h5>
			</div>
			<button><i class="fa fa-times"></i></button>
		</div>`
}
let cardShow = false;
shopCard.addEventListener('click',() =>{
	if(cardShow == false){
		card.style.display = 'block';
		cardShow = true;
	}
	else{
		cardShow = false;
		card.style.display = 'none';
	}
})

openBtn.addEventListener('click',() =>{
	if(openBtn.innerHTML == '<i class="fa fa-bars"></i>'){
		middle_head.style.right = '0';
		openBtn.innerHTML = '<i class="fa fa-times"></i>';
	}
	else{
		middle_head.style.right = '-100%';
		openBtn.innerHTML = '<i class="fa fa-bars"></i>';

	}
})
let open = document.querySelector('.open');
console.log(open)


const menuItems = [
{
	image : 'images/menu-1.png',
	title : 'tasty and helthy',
	btn : 'add to card'
},
{
	image : 'images/menu-2.png',
	title : 'tasty and helthy',
	btn : 'add to card'
},
{
	image : 'images/menu-3.png',
	title : 'tasty and helthy',
	btn : 'add to card'
},
{
	image : 'images/menu-4.png',
	title : 'tasty and helthy',
	btn : 'add to card'
},
{
	image : 'images/menu-5.png',
	title : 'tasty and helthy',
	btn : 'add to card'
},
{
	image : 'images/menu-6.png',
	title : 'tasty and helthy',
	btn : 'add to card'
}];

for(let i = 0;i < menuItems.length;i++){
	menu_content.innerHTML += `
	<div class = 'menu-items'>
		<img src = '${menuItems[i].image}'>
		<h2>${menuItems[i].title}</h2>
		<h3>$15  <del>$20</del></h3>
		<button>${menuItems[i].btn}</button>
	</div>`

}

const productItems = [
	'images/product-1.png',
	'images/product-2.png',
	'images/product-3.png'
];
for(let j = 0;j < productItems.length;j++){
	product_content.innerHTML += `
		<div class = 'product-items'>
			<div class = 'product-btns'>
				<button></button>
				<button></button>
				<button></button>
			</div>
			<img src = '${productItems[j]}'>
			<h2>fresh cofffee</h2>
			<p>*******</p>
			<h3>$15.99 <del>20</del></h3>
		</div>`
}
const reviewItems = [
	'images/pic-1.png',
	'images/pic-2.png',
	'images/pic-3.png'
];

for(let k = 0;k < reviewItems.length;k++){
	review_content.innerHTML += `
		<div class='review-items'>
			<img src = 'images/quote.png'>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				   tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
				  </p>
			<img class='pic' src  = '${reviewItems[k]}'>
			<h2>jhon deo</h2>
			<h3>*****</h3>
		</div>`
};

const blogsItems = ['images/blog-1.jpeg','images/blog-2.jpeg','images/blog-3.jpeg'];

for(let l = 0;l < blogsItems.length;l++){
	blogs_content.innerHTML += `
		<div class='blogs-items'>
			<img src='${blogsItems[l]}'>
			<h3>tasty and refreshing coffee</h3>
			<h4>by admin / 22 oct 16</h4>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
				</p>
			<button>read more</button
		</div>`
}