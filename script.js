// Initializing the URL
let url = "https://my-json-server.typicode.com/LearnAtExperience/fakeserver/db";

// Fetching JSON data from the URL
fetch(url)
  .then(Response => Response.json())
  .then(json => {
    // Selecting a particular array from the whole JSON data
    let a = json.Products;
    for (i = 0; i < a.length; i++) {
      // To display the retrieved data
      document.querySelector('.myString').innerHTML +=
        '<div class="myItem">' +
        '<img src="Images/' + a[i].imageName + '.png" alt="Product" class="product-img" />' +
        '<span class="new" id="new' + i + '">NEW</span>' +
        '<h2>' + a[i].name + '</h2>' +
        '<h3>Rs. ' + a[i].priceAfterDiscount + '/- <del class="actPrice">Rs. ' + a[i].price + '/-</del></h3>' +
        '<div class="ratings" id="rating' + i + '">' +
        '</div>' +
        '<button class="btn-viewPro"><span><i class="fas fa-eye"></i></span>View Product</button>' +
        '<button class="btn-addCart"><span><i class="fas fa-cart-plus"></i></span>Add to Cart</button>' +
        '<button class="btn-addWish"><span><i class="fas fa-heart"></i></span>Add to Wishlist</button>' +
        '</div>';

      // To display the NEW tag on the new products according to its category
      if (a[i].isNew == "TRUE") {
        document.getElementById('new' + i).style.display = "inline-block";
      } else {
        document.getElementById('new' + i).style.display = "none";
      }

      // To display the ratings of each and every product 
      for (j = 1; j <= a[i].ratings; j++) {
        document.getElementById('rating' + i).innerHTML += '<i class="fas fa-star"></i>';
      }

    }
  });

//To hide preloader onload
window.onload = () => {
  document.querySelector('.loader-anim').classList.add('hide');
}