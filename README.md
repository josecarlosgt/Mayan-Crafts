# Web Application Development: Functional Programming
In this example, we will work on updating our web application's content dynamically and adding live search functionality.

We will use the [Shop Homepage](https://startbootstrap.com/template/shop-homepage) template from the [Start Bootstrap website](https://startbootstrap.com/). Download the workshop materials from [here](https://github.com/josecarlosgt/Mayan-Crafts/raw/demo-functional-programming/base.zip).

## Web Application Overview

While Central America is well-known for its tropical landscapes, travelers often overlook cultural crafts made by the indigenous people of the region, the Mayans. The purpose of this web application is to promote Mayan handmade crafts as products available for purchase online.  

## Task 1: Add jQuery

In the index.html file, add the latest version of jQuery to your application using Google's CDN: 

```html
<!-- jQuery -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
```

We will write our JavaScript code in this file: 

```html
<!-- My JS -->
<script src="js/scripts.js"></script>
```

## Task 2: Display the products dynamically

Before adding cart functionality, display the product dynamically on the application so your code does not depend on the number of products or any product in specific.

To simplify our implementation and avoid inserting HTML in our JavaScript code, we will follow a clone-find-update approach to generate the HTML that displays each product: 

1. Use the [.clone()](https://api.jquery.com/clone/) method to copy an HTML element designed as template
2. Use the [.find()](https://api.jquery.com/find/) method to select the elements to be customized
3. Use diverse methods such as .text() and .on() to customize the template

This function generates the HTML for displaying one product given its ID in the
PRODUCTS object using the clone-find-update approach.

```javascript
/**
    Generates the HTML for displaying one product given its ID in the
    PRODUCTS object. This function follows a clone-find-update approach:
    1. CLONE an HTML element to use as a template
    2. FIND the elements using selectors
    3. UPDATE the elements to customize their content

    @param    {number} productId An identifier in the PRODUCTS object to display

    @returns  {string} A string with the HTML of the product.
*/
    function getProductHTML(productId) {
        // Obtain product data from the PRODUCTS object
        const product = PRODUCTS.find(product => product.id == productId);

        // CLONE an HTML element to use as a template
        const productHTML = $("#product-template").clone();

        // Delete ID to avoid duplicates
        productHTML.prop('id', '');

        // FIND and UPDATE the product's name
        /* Since we are updating the same object several times, 
        we can use jQuery's chaining feature. */
        productHTML
            .find(".product-name")
            .text(product.name);

        // FIND and UPDATE the product's price
        productHTML
            .find(".product-price")
            .text(product.price.toFixed(2));

        // FIND and UPDATE the product's image properties
        productHTML
            .find("img")
            .prop("src", product.image)
            .prop("alt", product.name);

        // Remove .d-none to make the product visible
        productHTML.removeClass("d-none");

        return productHTML;
    }
```

Create a function that generates the HTML for displaying each product by calling `.getProductHTML()`:

```javascript
/**
    Show all products on the application's homepage.

    @param    {array} products An array of objects containing all the products to be displayed
    @returns  No value.
*/
function showProducts(products) {
    // Sort products by the number of stars in descending order
    // Array.prototype.sort()
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    products.sort((product1, product2) => product2.stars - product1.stars);

    // Traverse the product array
    for (let product of products) {
        const productHTML = getProductHTML(product.id);

        /* Finally, append the cutomized HTML for each product to the products
            container on the webpage */
        $('#products').append(productHTML);
    }
}
```

Call `.showProducts()`:

```javascript
/* .ready(): https://api.jquery.com/ready/
    The .ready() method allows us to run JavaScript code as soon as the page's Document Object Model (DOM)
    becomes SAFE to manipulate. 
*/
$(document).ready(function(){
    showProducts(PRODUCTS);});
```

> The [.ready()](https://api.jquery.com/ready/) method to run JavaScript code safely as soon as the page's Document Object Model (DOM) becomes available.

## Task 3: Immediately Invvoked Function Expressions (IIFE)

Avoid polluting the global scope with [Immediately Invvoked Function Expressions](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)

```javascript
((window) => {
    ...

    $(document).ready(function () {        
        showProducts(PRODUCTS);
    });
})(window);
```

## Task 4: Implement a live search bar

Create a live search bar allowing users to search products on the site. You may find the following functions helpful in completing this task:

- [jQuery val method](https://api.jquery.com/val/)
- [String method includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)
- [jQuery empty method](https://api.jquery.com/empty/)
