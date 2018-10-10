// Using the data below, create an object constructor that will take in a 
// customer's first name, last name, gender & address as well as an array of 
// products they have ordered and will generate a confirmation email that reads:
// ===================================
// Dear {Ms./Mr.} {last name}:
 
// Thank you for your order! The following items will be sent out to you today and 
// you should expect them in to arrive in 5 days. Your order will be sent to: 
// {street}, {city}, {state} {zip}.
 
// Your Order:
// {quantity} {item name} - {item description} {price}
// ... repeat for all items
 
// If you have any concerns, please contact customer service.
 
// Sincerely,
// Joe Business-Guy
// ===================================
 
// Use the following order info arrays:
 
// order 1: 
//  5 pairs of socks. These socks will hug your feet in a way that will make you feel 
//  like your grandmother knitted them herself. $5.00 each.
//  3 shirts. Helping people feel cool in India’s intense heat made the fabric famous – 
//  so imagine how good our Madras Shirt will feel where you live. But we weren’t content 
//  to simply recreate the fabric. Although ours is woven in India like the original, we’ve 
//  improved it – with single-ply yarns that are ring­spun for strength and improved comfort. $25 each
     
     
// order 2:
//  1 Toddler Girls Jacquard Twirl Dress. This gathered waist twirl dress is perfect for 
//  dress-up days and special occasions, and she’ll absolutely adore the pretty prints & 
//  patterns. $22.00
//  1 ClassMate Medium Backpack - Print. ClassMate® Medium Backpack’s kid-friendly features 
//  go beyond carrying capacity. For one thing, it’s made from durable, 600-denier polyester 
//  with a water-repellent finish. The no-tip base is 1200-denier pack cloth and the padded 
//  shoulder straps are securely stitched, so this bookbag can take all the dropping, dragging 
//  and tugging their school day has in store. In fact, we recommend making sure this is the pack 
//  they really want — it’s going to be with them a long time! $39.00
//  1 School Uniform Women's Scallop Ballet Flats. Feminine, traditional, and versatile, with a 
//  touch of scalloped detailing to set them apart from your typical ballets. Foam footbeds cushion 
//  you every step of the way, making them perfect for running errands in style, dressing up your 
//  jeans and tees, or walking around your office. $48.00

//  Make up your own customer information

function Order (products) {
    this.products = products;
    this.print = function () {

        // IF PRODUCTS ARE NULL, USE AN IF LOOP TO RETURN AND CANCEL IT
        for (i = 0; i < products.length; i++) {
            console.log(products[i].quantity + " " + products[i].itemName + " – " + products[i].description + " " + products[i].price + ".00");
        }
    }
}

function Product (quantity, itemName, description, price) {
    this.quantity = quantity;
    this.itemName = itemName;
    this.description = description;
    this.price = price;
}

function Customer (firstName, lastName, gender, address, city, state, zipCode, order) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zipCode = zipCode;
    this.order = order;
	this.genderTitle = function () {
        if (this.gender === 'female') {
            return "Ms. ";
        } else {
            return "Mr. ";
        }
    }
}

var sallyOrder = new Order([
    new Product (5, "socks", "These socks will hug your feet in a way that will make you feel like your grandmother knitted them herself.", 5.00),
    new Product (2, "shirts", "Helping people feel cool in India’s intense heat made the fabric famous – so imagine how good our Madras Shirt will feel where you live. But we weren’t content to simply recreate the fabric. Although ours is woven in India like the original, we’ve improved it – with single-ply yarns that are ring­spun for strength and improved comfort.", 25.00)
]);

var sally = new Customer('Sally', 'Smith', 'female', '1000 Hidden River Ct', 'Raleigh', 'NC', '27614', sallyOrder);

var bobOrder = new Order([
    new Product (1, "Toddler Girls Jacquard Twirl Dress", "This gathered waist twirl dress is perfect for dress-up days and special occasions, and she’ll absolutely adore the pretty prints & patterns.", 22),
    new Product (1, "ClassMate Medium Backpack - Print", "ClassMate® Medium Backpack’s kid-friendly features go beyond carrying capacity. For one thing, it’s made from durable, 600-denier polyester with a water-repellent finish. The no-tip base is 1200-denier pack cloth and the padded shoulder straps are securely stitched, so this bookbag can take all the dropping, dragging and tugging their school day has in store. In fact, we recommend making sure this is the pack they really want — it’s going to be with them a long time!", 39),
    new Product (1, "School Uniform Women's Scallop Ballet Flats", "Feminine, traditional, and versatile, with a touch of scalloped detailing to set them apart from your typical ballets. Foam footbeds cushion you every step of the way, making them perfect for running errands in style, dressing up your jeans and tees, or walking around your office.", 48)
])

var bob = new Customer('Bob', 'Barker', 'male', '7703 Cape Charles Dr', 'Raleigh', 'NC', '27617', bobOrder)

Customer.prototype.email = function () {
    console.log("Dear " + this.genderTitle() + this.lastName + ":") 
    console.log("Thank you for your order! The following items will be sent out to you today and you should expect them in to arrive in 5 days. Your order will be sent to: ");
    console.log(this.address + ", " + this.city + ", " + this.state + ", " + this.zipCode + ".");
    console.log("Your order:");
    this.order.print();
    console.log("If you have any concerns, please contact customer service.");
    console.log("Sincerely,");
    console.log("Joe Business-Guy");
}

sally.email();

bob.email();