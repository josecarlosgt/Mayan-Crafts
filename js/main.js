/*********************************************************************
 *                          Fine Crafts Site                   *
 * CIS 5620: Authoring Websites                                      *
 *********************************************************************/

/* 
  Avoid creating global variables by implementing all the application
  inside an Immediately Invoked Function Expression (IIFE).
*/

((window) => {
    /**
       Generates the HTML for displaying one product given its id in the
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

        // Delete id to avoid duplicates
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

        // Customize the product's reviews    
        const starHTML = productHTML.find(".product-reviews").find("div");
        for (let starsCounter = 2; starsCounter <= product.stars; starsCounter++) {
            const newStartHTML = starHTML.clone();
            productHTML
                .find(".product-reviews")
                .append(newStartHTML);
        }

        // Customize the product's "Add to cart" button
        productHTML
            .find(".product-action")
            .text("Add to cart");

        // Remove .d-none to make the product visible
        productHTML.removeClass("d-none");

        return productHTML;
    }

    /**
        Show all products in the application's homepage
    
        @param    {array} products An array of objects containing all the products to be displayed
        @returns  No value.
    */
    window.showProducts = function (products) {
        // Sort products by the number of stars in descending order
        // Array.prototype.sort()
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
        products.sort((product1, product2) => product2.stars - product1.stars);

        // Traverse the products array
        for (let product of products) {
            const productHTML = getProductHTML(product.id);

           /* Finally, append the cutomized HTML for each product to the products
               container on the webpage */
            $('#products').append(productHTML);
        }
    }
     
    /**
        Filters the products displayed on the main web page according to the user-entered query on
        the search bar
    
        @returns  No value.
    */
    function search() {
        $("#products").empty();

        const query = $("#searchQuery").val().toLowerCase().trim();
        let results = [];

        if (query.length > 0) {
            for (const product of PRODUCTS) {
                if (product.name.toLowerCase().includes(query)
                    || product.description.toLowerCase().includes(query)) {

                    results.push(product);
                }
            }
        } else {
            results = PRODUCTS;
        }
        showProducts(results);
    }

    /* .ready(): https://api.jquery.com/ready/
        The .ready() method allow us to run JavaScript code as soon as the page's Document Object Model (DOM)
        becomes SAFE to manipulate. 
    */
    $(document).ready(function () {        
        // Register event handler for live search when the user types something on the "search" input
        $("#searchQuery").on("keyup", search);
    });
})(window);
