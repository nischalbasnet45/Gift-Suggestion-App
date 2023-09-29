const suggestButton = document.getElementById('suggestButton');
const suggestionsDiv = document.getElementById('suggestions');

suggestButton.addEventListener('click', () => {
    const recipient = document.getElementById('recipient').value;
    const occasion = document.getElementById('occasion').value;
    const giftCategory = document.getElementById('giftCategory').value;

    // Generate gift suggestions based on user input
    const giftSuggestions = generateGiftSuggestions(recipient, occasion, giftCategory);

    // Display the gift suggestions to the user
    suggestionsDiv.innerHTML = giftSuggestions;
});

// Gift ideas categorized by type
const giftIdeasByCategory = {
    Electronics: [
        "JBL 510BT Headphones",
        "Apple iPhone 13",
        "Samsung 55-inch 4K Smart TV",
        "Sony PlayStation 5",
        "Bose QuietComfort 35 II Headphones",
        "Dell XPS 13 Laptop",
        "Amazon Echo Show 8",
        "Canon EOS Rebel T7 DSLR Camera",
        "Apple iPad Air",
        "Google Pixel 6 Pro",
        "Sony WF-1000XM4 Earbuds",
        "Samsung Galaxy Tab S7",
        "Xbox Series X",
        "LG 65-inch OLED 4K TV",
        "GoPro Hero 10 Black",
        "Fitbit Charge 5",
        "Microsoft Surface Laptop 4",
        "Sony WH-1000XM4 Headphones",
        "Bose SoundLink Revolve Bluetooth Speaker",
        "OnePlus 9 Pro",
        "DJI Mavic Air 2 Drone",
        "Garmin Fenix 6 Smartwatch",
        "ASUS ROG Zephyrus G14 Gaming Laptop",
        "Apple Watch Series 7",
        "LG CX 48-inch OLED 4K TV",
        "Nintendo Switch OLED Model",
        "Bose Sport Earbuds",
        "Sony A6400 Mirrorless Camera",
        "Samsung Galaxy Buds Pro",
        "Alienware m15 R6 Gaming Laptop",
        "Google Nest Hub (2nd Gen)",
        "Sony X950H 75-inch 4K TV",
        "Beats Powerbeats Pro Earbuds",
        "Apple MacBook Air M2",
        "Sony RX100 VII Compact Camera",
        "Xiaomi Mi TV 5 Pro 55-inch",
        "DJI Mini 2 Drone",
        "Samsung Galaxy Watch 4",
        "Microsoft Surface Pro 8",
        "Bose QuietComfort Earbuds",
        "Canon EOS R6 Mirrorless Camera",
        "HP Omen 15 Gaming Laptop",
        "Apple HomePod Mini",
        "LG 27-inch 4K UHD IPS Monitor",
        "Fitbit Versa 3",
        "Sony ZV-1 Compact Camera"
    ],
    Books: [
        "Becoming by Michelle Obama",
        "Educated: A Memoir by Tara Westover",
        "Where the Crawdads Sing by Delia Owens",
        "The Silent Patient by Alex Michaelides",
        "The Dutch House by Ann Patchett",
        "Circe by Madeline Miller",
        "The Testaments by Margaret Atwood",
        "Normal People by Sally Rooney",
        "The Water Dancer by Ta-Nehisi Coates",
        "The Night Circus by Erin Morgenstern",
        "The Giver of Stars by Jojo Moyes",
        "The Starless Sea by Erin Morgenstern",
        "The Nickel Boys by Colson Whitehead",
        "The Institute by Stephen King",
        "The Silent Wife by A.S.A. Harrison",
        "The Guest List by Lucy Foley",
        "The Midnight Library by Matt Haig",
        "Such a Fun Age by Kiley Reid",
        "The Book Thief by Markus Zusak",
        "The Nightingale by Kristin Hannah",
        "The Light We Lost by Jill Santopolo",
        "The Tattooist of Auschwitz by Heather Morris",
        "The Vanishing Half by Brit Bennett",
        "The Goldfinch by Donna Tartt",
        "The Girl with the Dragon Tattoo by Stieg Larsson",
        "Where the Forest Meets the Stars by Glendy Vanderah"
    ],
    Jewelry: [
        "Diamond Stud Earrings",
        "Pearl Necklace",
        "Gold Bracelet",
        "Sapphire Ring",
        "Silver Hoop Earrings",
        "Emerald Pendant",
        "Rose Gold Watch",
        "Opal Earrings",
        "Amethyst Necklace",
        "Ruby Bracelet",
        "White Gold Diamond Ring",
        "Cubic Zirconia Stud Earrings",
        "Tanzanite Pendant",
        "Silver Cuff Bracelet",
        "Turquoise Earrings",
        "Gold Bangle",
        "Sapphire and Diamond Ring",
        "Rose Quartz Necklace",
        "Pearl Drop Earrings",
        "Platinum Wedding Band",
        "Garnet Bracelet",
        "Black Onyx Cufflinks",
        "Silver Filigree Earrings",
        "Aquamarine Pendant",
        "Gold Locket",
        "Emerald and Diamond Bracelet",
        "Sapphire Stud Earrings",
        "Amber Necklace",
        "Citrine Ring",
        "Sterling Silver Anklet",
        "Pearl Bracelet",
        "Moonstone Earrings",
        "Rose Gold Heart Pendant",
        "Turquoise Bangle",
        "Diamond Tennis Bracelet",
        "Gold Cross Necklace",
        "Opal and Amethyst Ring",
        "Platinum Hoop Earrings",
        "Sapphire Tennis Bracelet",
        "Silver Locket",
        "Ruby and Diamond Necklace",
        "Emerald Drop Earrings",
        "Gold Pearl Ring",
        "Pearl Choker",
        "Aquamarine Stud Earrings",
        "Silver Heart Pendant",
        "Rose Gold Chain Bracelet",
        "Garnet and Diamond Ring"
    ],
};

function generateGiftSuggestions(recipient, occasion, giftCategory) {
    const categoryGiftIdeas = giftIdeasByCategory[giftCategory];

    if (!categoryGiftIdeas) {
        return "Please select a valid gift category.";
    }

    // Randomly select a gift idea from the category
    const randomIndex = Math.floor(Math.random() * categoryGiftIdeas.length);
    const selectedGift = categoryGiftIdeas[randomIndex];

    // Construct a suggestion message
    const suggestionMessage = `<br> <span style="color: Purple; font-weight: bold;">${recipient}</span> may like <span style="font-weight: bold; color: blue;"> ${selectedGift} </span> on ${occasion}.`;   

    const productName = selectedGift

    const searchLink = `https://www.amazon.com/s?k=${encodeURIComponent(productName)}`;

    // Return the suggestion message with the embedded search link
    return `${suggestionMessage}<br><button id="bestdeals"><a style="text-decoration:none; color: white;" href="${searchLink}" target="_blank">🤑 Find best deals on Internet</a></button>`;
}