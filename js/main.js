/**
 * Archana Caterers - Main Application JavaScript
 * Proprietary Menu Data, Interactive Cost Calculator, Dynamic Filters,
 * Photo Gallery Lightbox, and Direct WhatsApp Quotation Engine.
 */

// ==========================================================================
// 1. OFFICIAL MENU DATA (From PDF Menus & Brochure)
// ==========================================================================
const MENU_DATABASE = [
  // --- Welcome Drinks ---
  {
    name: "Hot Badam Milk in Clay Pots",
    category: "drinks",
    diet: "veg",
    desc: "Rich saffron & cardamom infused almond milk served warm in traditional earthen kulhads.",
    tag: "Signature Welcome",
    specialty: "Pure Ghee & Nuts"
  },
  {
    name: "Royal Fresh Fruit Punch",
    category: "drinks",
    diet: "veg",
    desc: "Refreshing mocktail of blended tropical fruits with crushed mint and citrus splash.",
    tag: "Chilled Refresher",
    specialty: "100% Fresh Pulp"
  },
  {
    name: "Fresh Pineapple Juice",
    category: "drinks",
    diet: "veg",
    desc: "Chilled sweet pineapple extract with a hint of black salt and roasted cumin.",
    tag: "Fruit Bar",
    specialty: "Seasonal Favorite"
  },
  {
    name: "Watermelon Cooler",
    category: "drinks",
    diet: "veg",
    desc: "Hydrating summer favorite with freshly blended sweet watermelon and lime.",
    tag: "Cooler",
    specialty: "Light & Crisp"
  },
  {
    name: "Litchi Cream Milkshake",
    category: "drinks",
    diet: "veg",
    desc: "Velvety smooth chilled milk shake blended with luscious litchi fruit pulp.",
    tag: "Dessert Drink",
    specialty: "Kids Favorite"
  },
  {
    name: "Sweet Lime (Mosambi) Juice",
    category: "drinks",
    diet: "veg",
    desc: "Freshly squeezed citrus sweet lime juice seasoned with rock salt.",
    tag: "Natural",
    specialty: "Vitamin C Rich"
  },
  {
    name: "Seasonal Mango Juice",
    category: "drinks",
    diet: "veg",
    desc: "Pure thick pulp of Banganapalli / Alphonso mangoes chilled to perfection.",
    tag: "Seasonal King",
    specialty: "Summertime Royal"
  },

  // --- Veg Starters ---
  {
    name: "Veg Bullet",
    category: "starters-veg",
    diet: "veg",
    desc: "Spiced mashed vegetable cylinders crumbed and fried golden crisp, served with green chutney.",
    tag: "Chef's Special",
    specialty: "Crispy Crunch"
  },
  {
    name: "Corn Sweet Samosa",
    category: "starters-veg",
    diet: "veg",
    desc: "Flaky triangle pastries stuffed with savory butter sweet corn and bell peppers.",
    tag: "Hot Starter",
    specialty: "Tea Time Favorite"
  },
  {
    name: "Veg Lollipop",
    category: "starters-veg",
    diet: "veg",
    desc: "Crispy coated vegetable lollipops tossed with scallions and mild Asian spices.",
    tag: "Finger Food",
    specialty: "Appetizer"
  },
  {
    name: "Crispy Veg Spring Roll",
    category: "starters-veg",
    diet: "veg",
    desc: "Thin pastry wraps filled with seasoned wok-tossed cabbage, carrots and spring onions.",
    tag: "Indo-Chinese",
    specialty: "Classic Crunch"
  },
  {
    name: "Spinach Cheese Roll",
    category: "starters-veg",
    diet: "veg",
    desc: "Melted mozzarella cheese folded with sautéed spiced spinach in a golden crust.",
    tag: "Gourmet Starter",
    specialty: "Cheesy Delight"
  },
  {
    name: "Crispy Gold Coin",
    category: "starters-veg",
    diet: "veg",
    desc: "Fried mini bread coins topped with seasoned minced vegetables and toasted white sesame.",
    tag: "Traditional",
    specialty: "Aromatic Sesame"
  },
  {
    name: "Chilly Paneer Wok",
    category: "starters-veg",
    diet: "veg",
    desc: "Fresh cottage cheese cubes tossed in spicy soy-chili reduction with bell peppers & garlic.",
    tag: "Hot & Spicy",
    specialty: "Spicy 🌶️"
  },
  {
    name: "Tandoori Paneer Tikka",
    category: "starters-veg",
    diet: "veg",
    desc: "Malai paneer marinated in spiced hung yogurt and mustard oil, charred in the tandoor.",
    tag: "Clay Oven",
    specialty: "Chef's Special"
  },
  {
    name: "Crispy Baby Corn Manchurian",
    category: "starters-veg",
    diet: "veg",
    desc: "Tender baby corn spears fried crisp and glazed in a savory coriander garlic sauce.",
    tag: "Hot Starter",
    specialty: "Popular Pick"
  },

  // --- Non-Veg Starters ---
  {
    name: "Hyderabadi Chicken 65",
    category: "starters-nv",
    diet: "non-veg",
    desc: "Authentic spicy deep-fried boneless chicken tossed with roasted garlic, red chillies and curry leaves.",
    tag: "Hyderabad Classic",
    specialty: "Spicy 🌶️🌶️"
  },
  {
    name: "Apollo Fish",
    category: "starters-nv",
    diet: "non-veg",
    desc: "Crispy battered fish fillets tossed in spicy yogurt, green chillies and curry leaf tempering.",
    tag: "Twin Cities Legend",
    specialty: "Chef's Special"
  },
  {
    name: "Chicken Majestic",
    category: "starters-nv",
    diet: "non-veg",
    desc: "Tender boneless chicken strips marinated in buttermilk, mint, and spices, pan-fried dry.",
    tag: "Signature Dish",
    specialty: "Melt In Mouth"
  },
  {
    name: "Black Pepper Chicken",
    category: "starters-nv",
    diet: "non-veg",
    desc: "Juicy chicken morsels wok-tossed with freshly crushed Tellicherry black peppercorns.",
    tag: "Spicy Pepper",
    specialty: "Spicy 🌶️"
  },
  {
    name: "Indo-Chinese Chilly Chicken",
    category: "starters-nv",
    diet: "non-veg",
    desc: "Classic Indo-Chinese diced chicken tossed with red peppers, onions and chili soy reduction.",
    tag: "Wok Tossed",
    specialty: "Popular"
  },
  {
    name: "Crispy Chicken Fingers",
    category: "starters-nv",
    diet: "non-veg",
    desc: "Herb-marinated chicken breast fillets coated in breadcrumbs and fried golden brown.",
    tag: "Finger Food",
    specialty: "Crispy Dip"
  },
  {
    name: "Crispy Masala Fish Fry",
    category: "starters-nv",
    diet: "non-veg",
    desc: "Fresh water fish steaks marinated in traditional coastal red spice rub and tava fried.",
    tag: "Coastal Special",
    specialty: "Traditional"
  },
  {
    name: "Telangana Loose Prawns",
    category: "starters-nv",
    diet: "non-veg",
    desc: "Crunchy batter-fried tiger prawns seasoned with crushed green chilies and coriander.",
    tag: "Seafood Treat",
    specialty: "Chef's Special"
  },
  {
    name: "Spicy Masala Prawns Fry",
    category: "starters-nv",
    diet: "non-veg",
    desc: "Succulent prawns roasted dry with caramalized onions, ginger-garlic and fiery masala.",
    tag: "Coastal Andhra",
    specialty: "Spicy 🌶️🌶️"
  },

  // --- Biryanis & Rice ---
  {
    name: "Hyderabadi Dum Mutton Biryani",
    category: "biryani",
    diet: "non-veg",
    desc: "The crown jewel! Aged long-grain Basmati rice slow-cooked on charcoal dum with tender marinated lamb.",
    tag: "Royal Heritage",
    specialty: "Chef's Masterpiece"
  },
  {
    name: "Chicken Dum Biryani",
    category: "biryani",
    diet: "non-veg",
    desc: "Authentic Hyderabadi chicken biryani layered with aromatic herbs, saffron milk, and fried onions.",
    tag: "Wedding Essential",
    specialty: "Best Seller"
  },
  {
    name: "Mutton Kheema Biryani",
    category: "biryani",
    diet: "non-veg",
    desc: "Fragrant spiced Basmati rice layered with rich, slow-cooked minced mutton masala.",
    tag: "Royal Feast",
    specialty: "Rich Flavor"
  },
  {
    name: "Hyderabadi Veg Dum Biryani",
    category: "biryani",
    diet: "veg",
    desc: "Assorted vegetables, paneer and mint cooked on slow dum with premium aged Basmati rice.",
    tag: "Pure Veg Feast",
    specialty: "Dum Cooked"
  },
  {
    name: "Traditional Telangana Bagara Rice",
    category: "biryani",
    diet: "veg",
    desc: "Aromatic Basmati rice seasoned with whole spices, caramelized onions, mint and pure cow ghee.",
    tag: "Telangana Special",
    specialty: "Traditional"
  },
  {
    name: "Royal Cashew (Kaju) Pulao",
    category: "biryani",
    diet: "veg",
    desc: "Rich ghee-scented pulao generously loaded with golden roasted cashews and aromatic spices.",
    tag: "Rich Pulao",
    specialty: "Pure Ghee"
  },
  {
    name: "Temple Style Pulihora (Tamarind Rice)",
    category: "biryani",
    diet: "veg",
    desc: "Traditional Telugu prasadam rice seasoned with sour tamarind pulp, roasted peanuts, mustard & curry leaves.",
    tag: "Sacred Ceremonies",
    specialty: "Traditional"
  },
  {
    name: "Fragrant Zeera Ghee Rice",
    category: "biryani",
    diet: "veg",
    desc: "Long grain Basmati tempered with whole royal cumin seeds and slow-clarified desi ghee.",
    tag: "Mild & Fragrant",
    specialty: "Pure Ghee"
  },

  // --- North Indian Curries ---
  {
    name: "Paneer Butter Masala",
    category: "curries-north",
    diet: "veg",
    desc: "Soft cottage cheese simmered in a velvety tomato-cashew satin gravy with fresh dairy butter.",
    tag: "Crowd Favorite",
    specialty: "Rich Creamy"
  },
  {
    name: "Kadai Paneer Masala",
    category: "curries-north",
    diet: "veg",
    desc: "Paneer and bell peppers tossed in an aromatic gravy scented with freshly pounded coriander seeds.",
    tag: "Spiced Gravy",
    specialty: "Spicy 🌶️"
  },
  {
    name: "Shahi Malai Kofta",
    category: "curries-north",
    diet: "veg",
    desc: "Melt-in-mouth paneer & khoya dumplings soaked in an imperial white cashew nut and saffron sauce.",
    tag: "Royal Cuisine",
    specialty: "Chef's Special"
  },
  {
    name: "Amritsari Chole Masala",
    category: "curries-north",
    diet: "veg",
    desc: "Kabuli chickpeas simmered overnight with tea leaves and dark roasted Punjabi spices.",
    tag: "Authentic North",
    specialty: "Slow Cooked"
  },
  {
    name: "Baby Corn & Mushroom Masala",
    category: "curries-north",
    diet: "veg",
    desc: "Fresh button mushrooms and tender baby corn cooked in a roasted onion-tomato gravy.",
    tag: "Special Veg",
    specialty: "Popular"
  },
  {
    name: "Hyderabadi Mirchi Ka Salan",
    category: "curries-north",
    diet: "veg",
    desc: "Green chillies cooked in a nutty roasted peanut, sesame seed, coconut and tamarind gravy.",
    tag: "Biryani Companion",
    specialty: "Spicy 🌶️"
  },
  {
    name: "Royal Bagara Baigan",
    category: "curries-north",
    diet: "veg",
    desc: "Small brinjals cooked in traditional Hyderabadi spiced sesame and tamarind reduction.",
    tag: "Hyderabadi Classic",
    specialty: "Traditional"
  },
  {
    name: "Dum Ka Chicken Curry",
    category: "curries-north",
    diet: "non-veg",
    desc: "Chicken slow-cooked on dum in a sealed pot with rich almond paste, poppy seeds and saffron.",
    tag: "Nawabi Dish",
    specialty: "Chef's Special"
  },
  {
    name: "Classic Butter Chicken",
    category: "curries-north",
    diet: "non-veg",
    desc: "Charcoal grilled tandoori chicken simmered in a luscious buttery tomato gravy.",
    tag: "Delhi Classic",
    specialty: "Rich Creamy"
  },
  {
    name: "Andhra Gongura Mutton",
    category: "curries-north",
    diet: "non-veg",
    desc: "Tender goat meat slow-braised with sour red sorrel (gongura) leaves and fiery Guntur chillies.",
    tag: "Andhra Legend",
    specialty: "Spicy 🌶️🌶️"
  },
  {
    name: "Homestyle Andhra Mutton Curry",
    category: "curries-north",
    diet: "non-veg",
    desc: "Traditional robust meat curry cooked with freshly ground coriander, ginger and shallots.",
    tag: "Homestyle Gravy",
    specialty: "Spicy 🌶️"
  },

  // --- South Indian Traditional Curries ---
  {
    name: "Gutthi Vankaya Kura",
    category: "curries-south",
    diet: "veg",
    desc: "Tender baby eggplants slit and stuffed with a hand-ground spicy peanut, sesame & coconut masala.",
    tag: "Andhra Heritage",
    specialty: "Chef's Special"
  },
  {
    name: "Crispy Bendakaya Fry",
    category: "curries-south",
    diet: "veg",
    desc: "Fresh okra fried to a crisp crunch with roasted groundnuts, crushed garlic pods and red chilli powder.",
    tag: "Telugu Wedding Special",
    specialty: "Crunchy Fry"
  },
  {
    name: "Dondakaya Kobbari Fry",
    category: "curries-south",
    diet: "veg",
    desc: "Finely sliced ivy gourd pan-roasted golden brown and finished with grated fresh coconut.",
    tag: "Traditional Roast",
    specialty: "Homestyle"
  },
  {
    name: "Andhra Masala Aloo Fry",
    category: "curries-south",
    diet: "veg",
    desc: "Crispy diced potatoes tossed with roasted urad dal, curry leaves, and spicy podi.",
    tag: "Classic Fry",
    specialty: "Crispy"
  },
  {
    name: "Cabbage Kobbari Thalimpu",
    category: "curries-south",
    diet: "veg",
    desc: "Fresh cabbage delicately tempered with mustard, cumin, green chillies and sweet fresh coconut.",
    tag: "Satvik Feast",
    specialty: "Mild & Sweet"
  },
  {
    name: "Mulakkada Tomato Curry",
    category: "curries-south",
    diet: "veg",
    desc: "Tender drumsticks simmered with juicy country tomatoes and authentic village spices.",
    tag: "Homestyle Gravy",
    specialty: "Traditional"
  },
  {
    name: "Crispy Chama Gadda Fry",
    category: "curries-south",
    diet: "veg",
    desc: "Steamed taro root slices pan-roasted with spicy red masala until delightfully crisp.",
    tag: "Festive Special",
    specialty: "Crispy"
  },
  {
    name: "Panasapottu Kura (Raw Jackfruit)",
    category: "curries-south",
    diet: "veg",
    desc: "Traditional Andhra delicacy made from shredded tender raw jackfruit tempered with mustard & spices.",
    tag: "Rare Royal Dish",
    specialty: "Traditional"
  },

  // --- Dals & Liquids ---
  {
    name: "Country Tomato Pappu",
    category: "dals",
    diet: "veg",
    desc: "Creamy toor dal simmered with country tomatoes, crushed garlic and aromatic ghee tadka.",
    tag: "Andhra Comfort",
    specialty: "Homestyle"
  },
  {
    name: "Palak (Spinach) Dal",
    category: "dals",
    diet: "veg",
    desc: "Wholesome toor dal stewed with farm-fresh spinach leaves and mild green chilli tempering.",
    tag: "Healthy & Green",
    specialty: "Mild"
  },
  {
    name: "Seasonal Mango (Mamdikaya) Pappu",
    category: "dals",
    diet: "veg",
    desc: "Tangy raw green mango slices cooked into yellow lentils with mustard seed tadka.",
    tag: "Seasonal Favorite",
    specialty: "Tangy & Savory"
  },
  {
    name: "Fiery Gongura Pappu",
    category: "dals",
    diet: "veg",
    desc: "Sour sorrel leaves mashed into thick toor dal with crushed garlic and red chillies.",
    tag: "Andhra Pride",
    specialty: "Spicy 🌶️"
  },
  {
    name: "Traditional Wedding Sambar",
    category: "dals",
    diet: "veg",
    desc: "Slow-simmered lentil stew loaded with drumsticks, baby shallots, pumpkin and aromatic sambar podi.",
    tag: "Banquet Must-Have",
    specialty: "Authentic Blend"
  },
  {
    name: "Hyderabadi Dalcha",
    category: "dals",
    diet: "veg",
    desc: "Traditional Hyderabadi chana dal stew cooked with tender bottle gourd and fragrant spices.",
    tag: "Biryani Pairing",
    specialty: "Royal Recipe"
  },
  {
    name: "Traditional Pappu Charu",
    category: "dals",
    diet: "veg",
    desc: "Clear lentil broth seasoned with tamarind, jaggery, curry leaves and roasted cumin.",
    tag: "Telugu Classic",
    specialty: "Soul Food"
  },
  {
    name: "Ulavacharu with Fresh Cream",
    category: "dals",
    diet: "veg",
    desc: "Slow-boiled brown horse-gram extract reduced to perfection, served with dollop of fresh cream.",
    tag: "Gourmet Andhra",
    specialty: "Chef's Special"
  },

  // --- Rotis & Breads ---
  {
    name: "Roomali Roti",
    category: "rotis",
    diet: "veg",
    desc: "Handkerchief-thin, ultra-soft bread hand-stretched and baked over a blazing dome tava.",
    tag: "Live Counter",
    specialty: "Soft & Fresh"
  },
  {
    name: "Butter Naan",
    category: "rotis",
    diet: "veg",
    desc: "Tandoor-baked leavened clay oven flatbread brushed generously with pure dairy butter.",
    tag: "Clay Oven",
    specialty: "Classic"
  },
  {
    name: "Masala Kulcha",
    category: "rotis",
    diet: "veg",
    desc: "Soft bread stuffed with spiced potato and fresh herbs, baked crisp in the tandoor.",
    tag: "Stuffed Bread",
    specialty: "Aromatic"
  },
  {
    name: "Dry Fruit Naan",
    category: "rotis",
    diet: "veg",
    desc: "Royal sweet naan studded with crushed almonds, pistachios, cashews and glazed with honey.",
    tag: "Royal Mega Feast",
    specialty: "Chef's Special"
  },
  {
    name: "Crispy Poori",
    category: "rotis",
    diet: "veg",
    desc: "Golden puffed whole-wheat pooris fried hot and fresh on the serving counter.",
    tag: "Hot & Puffed",
    specialty: "Freshly Fried"
  },
  {
    name: "Fluffy Soft Phulka",
    category: "rotis",
    diet: "veg",
    desc: "100% whole-wheat puffed oil-free flatbreads prepared live at the buffet.",
    tag: "Healthy & Light",
    specialty: "Zero Oil"
  },
  {
    name: "Malabar Tawa Parota",
    category: "rotis",
    diet: "veg",
    desc: "Flaky, multi-layered golden parota grilled with butter on the tawa.",
    tag: "Multi-layered",
    specialty: "Flaky"
  },

  // --- Sweets Mela ---
  {
    name: "Hyderabadi Double Ka Meetha",
    category: "sweets",
    diet: "veg",
    desc: "Crispy fried bread triangles soaked in rich saffron cardamom milk, topped with khoya and silver varq.",
    tag: "Nawabi Heritage",
    specialty: "Chef's Masterpiece"
  },
  {
    name: "Authentic Qubani Ka Meetha",
    category: "sweets",
    diet: "veg",
    desc: "Stewed Turkish dried apricots slow-cooked with apricot kernels, served with rich cream.",
    tag: "Hyderabadi Signature",
    specialty: "Royal Classic"
  },
  {
    name: "Live Hot Bobbatlu (Puran Poli)",
    category: "sweets",
    diet: "veg",
    desc: "Sweet chana dal and organic jaggery puran filled into soft flatbreads, roasted hot with pure cow ghee.",
    tag: "Live Sweet Counter",
    specialty: "Pure Cow Ghee"
  },
  {
    name: "Royal Rasmalai",
    category: "sweets",
    diet: "veg",
    desc: "Delicate cottage cheese patties floating in thick saffron, cardamom and pistachio infused milk.",
    tag: "Chilled Sweet",
    specialty: "Rich Cream"
  },
  {
    name: "Live Bellam Jalebi",
    category: "sweets",
    diet: "veg",
    desc: "Crispy spirals fried hot on the counter and dipped into warm organic jaggery syrup.",
    tag: "Live Frying Stall",
    specialty: "Jaggery Goodness"
  },
  {
    name: "Special Paneer Jalebi",
    category: "sweets",
    diet: "veg",
    desc: "Melt-in-mouth chhena jalebi soaked in rose and saffron scented sugar syrup.",
    tag: "Rich Sweet",
    specialty: "Chef's Special"
  },
  {
    name: "Desi Ghee Gulab Jamun",
    category: "sweets",
    diet: "veg",
    desc: "Khoya dumplings fried in pure cow ghee and soaked in warm green cardamom syrup.",
    tag: "Universal Favorite",
    specialty: "Pure Ghee"
  },
  {
    name: "Live Tavva Sweet",
    category: "sweets",
    diet: "veg",
    desc: "Sizzling hot sweet prepared live on iron tawa with mawa, roasted dry fruits and aromatic spices.",
    tag: "Live Counter",
    specialty: "Hot Specialty"
  },
  {
    name: "Kaju Roll & Dry Fruit Burfi",
    category: "sweets",
    diet: "veg",
    desc: "Pure cashew fudge rolled with chopped pistachios, figs and almonds.",
    tag: "Dry Fruit Mela",
    specialty: "100% Cashew"
  },
  {
    name: "Gajar Ka Halwa",
    category: "sweets",
    diet: "veg",
    desc: "Slow-cooked red Delhi carrots with full-cream milk, pure ghee, and roasted cashews.",
    tag: "Winter Classic",
    specialty: "Desi Ghee"
  },
  {
    name: "Kaddu Ka Halwa",
    category: "sweets",
    diet: "veg",
    desc: "Delicate bottle gourd halwa slow-cooked with mawa, ghee, green cardamom and nuts.",
    tag: "Hyderabad Specialty",
    specialty: "Rich & Mild"
  },
  {
    name: "Traditional Burelu (Poornalu)",
    category: "sweets",
    diet: "veg",
    desc: "Sweet jaggery dal balls dipped in rice-black gram batter and deep fried golden crisp.",
    tag: "Andhra Festival Sweet",
    specialty: "Traditional"
  },

  // --- Live Stalls & Chaat ---
  {
    name: "Live Pani Puri Counter",
    category: "live-counters",
    diet: "veg",
    desc: "Crisp puris filled with spiced ragada and served with chilled spicy mint and sweet tamarind water.",
    tag: "Live Stall",
    specialty: "Unlimited Fun"
  },
  {
    name: "Sizzling Ragada Cutlet",
    category: "live-counters",
    diet: "veg",
    desc: "Pan-fried crisp potato tikki smothered in piping hot white-pea curry, topped with chutneys and sev.",
    tag: "Live Stall",
    specialty: "Hot Sizzler"
  },
  {
    name: "Mumbai Pav Bhaji Counter",
    category: "live-counters",
    diet: "veg",
    desc: "Spiced mashed seasonal vegetables cooked on a giant iron tawa with butter-toasted ladi pav.",
    tag: "Tawa Live",
    specialty: "Butter Loaded"
  },
  {
    name: "Dahi Papdi Chaat & Sev Puri",
    category: "live-counters",
    diet: "veg",
    desc: "Crispy papdis layered with boiled potatoes, chilled sweetened yogurt, pomegranate and fine sev.",
    tag: "Cold Chaat",
    specialty: "Sweet & Tangy"
  },
  {
    name: "Live Dosa Variety Counter",
    category: "live-counters",
    diet: "veg",
    desc: "Made-to-order paper thin dosas: Butter Masala, Karam Podi, Paneer, Cheese and Tomato Dosas.",
    tag: "Live Tiffin Stall",
    specialty: "Hot off Tawa"
  },
  {
    name: "Indo-Chinese Live Wok Station",
    category: "live-counters",
    diet: "veg",
    desc: "Chefs tossing Veg Manchurian, Hakka Noodles and fried rice with fiery flame theatrics.",
    tag: "Live Wok",
    specialty: "Flambé Action"
  },

  // --- Desserts & Ice Creams ---
  {
    name: "Artisan Ice Cream Counter",
    category: "desserts",
    diet: "veg",
    desc: "Assorted premium scoops: Vanilla, Butterscotch, Pista, Chocolate, and Strawberry.",
    tag: "Dessert Bar",
    specialty: "Creamy Delights"
  },
  {
    name: "Tropical Fruit Salad with Custard",
    category: "desserts",
    diet: "veg",
    desc: "Crisp diced apples, pomegranate, grapes and pineapples swimming in chilled vanilla custard.",
    tag: "Fresh Fruits",
    specialty: "Refreshing"
  },
  {
    name: "Traditional Matka Kulfi",
    category: "desserts",
    diet: "veg",
    desc: "Dense, creamy condensed milk kulfi infused with saffron and pistachios, served in mini pots.",
    tag: "Royal Kulfi",
    specialty: "Traditional"
  },
  {
    name: "Live Mocktail Mixology Lounge",
    category: "desserts",
    diet: "veg",
    desc: "Artisanal mocktail station serving Virgin Mojitos, Blue Lagoons and Spicy Guava Marys.",
    tag: "Cocktail Bar Look",
    specialty: "Chilled Drinks"
  },
  {
    name: "Cold-Stone Ice Cream Rollers",
    category: "desserts",
    diet: "veg",
    desc: "Liquid ice cream rolled live on freezing plates with fresh fruits and Oreo toppings.",
    tag: "Live Ice Cream",
    specialty: "Interactive"
  },
  {
    name: "Old-School Ice Gola & Candy Floss",
    category: "desserts",
    diet: "veg",
    desc: "Nostalgic crushed ice golas flavored with Kala Khatta, Khas & Rose syrups, plus pink cotton candy.",
    tag: "Fun Food",
    specialty: "Kids Love It"
  },

  // --- Breakfast Tiffins & Snacks ---
  {
    name: "Ghee Sambar Idly & Medu Wada",
    category: "breakfast",
    diet: "veg",
    desc: "Steaming hot feather-light idlis and crisp golden medu wadas served with drumstick sambar & 3 chutneys.",
    tag: "Morning Glory",
    specialty: "Pure Ghee"
  },
  {
    name: "Piping Hot Ven Pongal",
    category: "breakfast",
    diet: "veg",
    desc: "Melt-in-mouth rice and moong dal mash cooked with crushed peppercorns, ginger and roasted cashews in ghee.",
    tag: "Temple Recipe",
    specialty: "Desi Ghee"
  },
  {
    name: "MLA Pesarattu with Upma",
    category: "breakfast",
    diet: "veg",
    desc: "Nutritious green gram crepe roasted crisp with ghee, stuffed with warm rava upma and ginger chutney.",
    tag: "Andhra Classic",
    specialty: "High Protein"
  },
  {
    name: "Fluffy Mysore Bajji",
    category: "breakfast",
    diet: "veg",
    desc: "Golden crisp on the outside, fluffy inside, served with fiery allam (ginger) chutney.",
    tag: "Evening Snack",
    specialty: "Crowd Favorite"
  },
  {
    name: "Hyderabadi Mirchi Bajji Platter",
    category: "breakfast",
    diet: "veg",
    desc: "Plump green chillies stuffed with carom seeds and tamarind, double batter-fried and cut with onions.",
    tag: "Cut Mirchi",
    specialty: "Spicy 🌶️"
  },
  {
    name: "Authentic Filter Coffee & Masala Chai",
    category: "breakfast",
    diet: "veg",
    desc: "Freshly brewed chicory-infused South Indian filter coffee frothed hot with full-cream milk.",
    tag: "Piping Hot",
    specialty: "Traditional Brew"
  }
];

// ==========================================================================
// 2. DOM INITIALIZATION & STATE
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  hidePreloader();
  initNavbar();
  initMenuExplorer();
  initCostCalculator();
  initGalleryAndLightbox();
  initEnquiryForm();
  initPdfDropdown();
  initBackToTop();
  initScrollReveal();
  initTestimonialCarousel();
  initScrollProgress();
});

// ==========================================================================
// 3. NAVIGATION & MOBILE MENU
// ==========================================================================
function initNavbar() {
  const header = document.getElementById("navbar");
  const mobileToggle = document.getElementById("mobile-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Sticky header shadow
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.12)";
    } else {
      header.style.boxShadow = "var(--shadow-sm)";
    }
  });

  // Mobile drawer toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
      mobileToggle.classList.toggle("active");
    });

    // Close when clicking nav link
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        mobileToggle.classList.remove("active");
      });
    });

    // Close when clicking outside
    document.addEventListener("click", (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove("open");
        mobileToggle.classList.remove("active");
      }
    });
  }

  // Active section spy on scroll
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");
      const targetNavLink = document.querySelector(`.nav-menu a[href*='${sectionId}']`);

      if (targetNavLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          targetNavLink.classList.add("active");
        } else {
          targetNavLink.classList.remove("active");
        }
      }
    });
  });
}

// ==========================================================================
// 4. INTERACTIVE MENU EXPLORER
// ==========================================================================
function initMenuExplorer() {
  const grid = document.getElementById("menuItemsGrid");
  const searchInput = document.getElementById("menuSearchInput");
  const clearBtn = document.getElementById("clearSearchBtn");
  const dietButtons = document.querySelectorAll(".diet-btn");
  const categoryTabs = document.querySelectorAll(".cat-tab");

  let activeDiet = "all";
  let activeCategory = "all";
  let searchQuery = "";

  function renderMenu() {
    grid.innerHTML = "";

    const filtered = MENU_DATABASE.filter((item) => {
      // Diet filter
      if (activeDiet !== "all" && item.diet !== activeDiet) {
        return false;
      }
      // Category filter
      if (activeCategory !== "all" && item.category !== activeCategory) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesDesc = item.desc.toLowerCase().includes(q);
        const matchesSpecialty = item.specialty.toLowerCase().includes(q);
        if (!matchesName && !matchesDesc && !matchesSpecialty) {
          return false;
        }
      }
      return true;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px 20px; background: #FFF; border-radius: var(--radius-md); border: 1px dashed var(--border-color);">
          <i class="fa-solid fa-utensils" style="font-size: 2.5rem; color: var(--secondary); margin-bottom: 12px; display: block;"></i>
          <h3 style="font-family: var(--font-heading); color: var(--primary-dark); margin-bottom: 6px;">No Dishes Found</h3>
          <p style="color: var(--text-muted); font-size: 0.95rem;">Try adjusting your search query or selecting a different category tab.</p>
        </div>
      `;
      return;
    }

    filtered.forEach((dish) => {
      const isVeg = dish.diet === "veg";
      const dietDot = isVeg
        ? `<span class="veg-dot" title="Pure Vegetarian"></span>`
        : `<span class="non-veg-dot" title="Non-Vegetarian"></span>`;

      const card = document.createElement("div");
      card.className = "dish-card";
      card.innerHTML = `
        <div>
          <div class="dish-header">
            <h4 class="dish-title">${dietDot} ${dish.name}</h4>
          </div>
          <p class="dish-desc">${dish.desc}</p>
        </div>
        <div class="dish-footer">
          <span class="dish-tag">${dish.tag}</span>
          <span class="dish-specialty"><i class="fa-solid fa-certificate text-gold"></i> ${dish.specialty}</span>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  // Diet toggles
  dietButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      dietButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeDiet = btn.dataset.diet;
      renderMenu();
    });
  });

  // Category tabs
  categoryTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      categoryTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      activeCategory = tab.dataset.category;
      renderMenu();
    });
  });

  // Search input with debounce
  let debounceTimeout;
  searchInput.addEventListener("input", (e) => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      searchQuery = e.target.value.trim();
      if (searchQuery.length > 0) {
        clearBtn.style.display = "block";
      } else {
        clearBtn.style.display = "none";
      }
      renderMenu();
    }, 200);
  });

  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    clearBtn.style.display = "none";
    renderMenu();
  });

  // Initial render
  renderMenu();
}

// ==========================================================================
// 5. INTERACTIVE EVENT COST ESTIMATOR (CALCULATOR)
// ==========================================================================
function initCostCalculator() {
  const slider = document.getElementById("guestSlider");
  const guestDisplay = document.getElementById("guestCountVal");
  const pkgRadios = document.querySelectorAll("input[name='calcPackage']");
  const dietRadios = document.querySelectorAll("input[name='calcDiet']");
  const addonBoxes = [
    document.getElementById("addonChaat"),
    document.getElementById("addonIcecream"),
    document.getElementById("addonBadamMilk"),
    document.getElementById("addonLed")
  ];

  const summaryPkgName = document.getElementById("summaryPkgName");
  const summaryGuests = document.getElementById("summaryGuests");
  const summaryDiet = document.getElementById("summaryDiet");
  const summaryAddons = document.getElementById("summaryAddons");
  const calcPerPlateRate = document.getElementById("calcPerPlateRate");
  const calcTotalRange = document.getElementById("calcTotalRange");
  const sendCalcToWhatsappBtn = document.getElementById("sendCalcToWhatsappBtn");
  const prefillEnquiryBtn = document.getElementById("prefillEnquiryBtn");

  // Package base pricing table (Indicative market rate per plate in Hyderabad)
  const RATES = {
    regular: { name: "Regular Feast (100+ Pax)", veg: 380, mixed: 490 },
    special: { name: "Special Deluxe (300+ Pax)", veg: 580, mixed: 750 },
    grand: { name: "Grand Sweets Mela (500+ Pax)", veg: 880, mixed: 1150 },
    royal: { name: "Royal Mega Feast (1,000+ Pax)", veg: 1250, mixed: 1550 },
    breakfast: { name: "Breakfast Tiffin Buffet", veg: 180, mixed: 220 }
  };

  // Map 0-100 slider position to guest count matching tick labels
  function sliderPosToGuests(pos) {
    pos = parseFloat(pos);
    if (isNaN(pos) || pos <= 0) return 50;
    if (pos >= 100) return 2000;

    if (pos <= 25) {
      // 0% to 25% maps to 50 - 300 guests (10 guests per step)
      return Math.round((50 + (pos / 25) * 250) / 10) * 10;
    } else if (pos <= 50) {
      // 25% to 50% maps to 300 - 500 guests
      const raw = 300 + ((pos - 25) / 25) * 200;
      return Math.round(raw / 10) * 10;
    } else if (pos <= 75) {
      // 50% to 75% maps to 500 - 1,000 guests
      const raw = 500 + ((pos - 50) / 25) * 500;
      return Math.round(raw / 25) * 25;
    } else {
      // 75% to 100% maps to 1,000 - 2,000+ guests
      const raw = 1000 + ((pos - 75) / 25) * 1000;
      return Math.round(raw / 50) * 50;
    }
  }

  function updateCalculation() {
    const pos = parseFloat(slider.value);
    const guests = sliderPosToGuests(pos);
    const isMax = pos >= 100;
    const displayText = isMax ? "2,000+" : guests.toLocaleString("en-IN");

    guestDisplay.textContent = displayText;
    summaryGuests.textContent = `${displayText} Guests`;

    // Dynamic filled progress track
    slider.style.background = `linear-gradient(to right, #8B1A1E 0%, #8B1A1E ${pos}%, #E2E8F0 ${pos}%, #E2E8F0 100%)`;

    // Active package
    let selectedPkg = "special";
    pkgRadios.forEach((r) => {
      if (r.checked) selectedPkg = r.value;
      const card = r.closest(".radio-card");
      if (card) {
        if (r.checked) card.classList.add("selected");
        else card.classList.remove("selected");
      }
    });

    // Active diet
    let selectedDiet = "mixed";
    dietRadios.forEach((r) => {
      if (r.checked) selectedDiet = r.value;
      const segBtn = r.closest(".segment-btn");
      if (segBtn) {
        if (r.checked) segBtn.classList.add("active");
        else segBtn.classList.remove("active");
      }
    });

    // Calculate base rate
    const pkgInfo = RATES[selectedPkg] || RATES.special;
    summaryPkgName.textContent = pkgInfo.name;
    summaryDiet.textContent = selectedDiet === "veg" ? "100% Pure Vegetarian" : "Veg + Non-Veg Spread";

    let perPlate = selectedDiet === "veg" ? pkgInfo.veg : pkgInfo.mixed;

    // Addons
    let addonsTotal = 0;
    const activeAddonNames = [];
    addonBoxes.forEach((chk) => {
      if (chk && chk.checked) {
        addonsTotal += parseInt(chk.value, 10);
        if (chk.id === "addonChaat") activeAddonNames.push("Live Chaat");
        if (chk.id === "addonIcecream") activeAddonNames.push("Ice Cream/Mocktails");
        if (chk.id === "addonBadamMilk") activeAddonNames.push("Pot Badam Milk");
        if (chk.id === "addonLed") activeAddonNames.push("LED Counters");
      }
    });

    perPlate += addonsTotal;
    summaryAddons.textContent = activeAddonNames.length > 0 ? activeAddonNames.join(", ") : "None";

    // Update Plate Rate
    calcPerPlateRate.textContent = perPlate.toLocaleString("en-IN");

    // Total Range (estimate range -5% to +10%)
    const baseTotal = guests * perPlate;
    const minTotal = Math.round((baseTotal * 0.95) / 1000) * 1000;
    const maxTotal = Math.round((baseTotal * 1.08) / 1000) * 1000;

    calcTotalRange.textContent = `${minTotal.toLocaleString("en-IN")} - ₹${maxTotal.toLocaleString("en-IN")}`;
  }

  // Slider change
  slider.addEventListener("input", updateCalculation);

  // Clickable ticks to snap slider
  const tickSpans = document.querySelectorAll(".slider-ticks span");
  tickSpans.forEach((span) => {
    span.addEventListener("click", () => {
      const val = span.dataset.val;
      if (val !== undefined) {
        slider.value = val;
        updateCalculation();
      }
    });
  });

  // Radio button events
  pkgRadios.forEach((r) => r.addEventListener("change", updateCalculation));
  dietRadios.forEach((r) => r.addEventListener("change", updateCalculation));
  addonBoxes.forEach((b) => {
    if (b) b.addEventListener("change", updateCalculation);
  });

  // Package card quick-selection buttons from packages grid
  const externalSelectBtns = document.querySelectorAll(".select-pkg-btn");
  const pkgToSliderPos = {
    regular: 5,     // 100 guests
    special: 25,    // 300 guests
    grand: 50,      // 500 guests
    royal: 75,      // 1,000 guests
    breakfast: 5    // 100 guests
  };

  externalSelectBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetPkg = btn.dataset.pkg;
      const targetRadio = document.querySelector(`input[name='calcPackage'][value='${targetPkg}']`);
      if (targetRadio) {
        targetRadio.checked = true;
        if (pkgToSliderPos[targetPkg] !== undefined) {
          slider.value = pkgToSliderPos[targetPkg];
        }
        updateCalculation();
        // Scroll smoothly to calculator
        document.getElementById("calculator").scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Send calculated quote to WhatsApp
  sendCalcToWhatsappBtn.addEventListener("click", () => {
    const pos = parseFloat(slider.value);
    const guests = sliderPosToGuests(pos);
    const guestText = pos >= 100 ? "2,000+" : `${guests.toLocaleString("en-IN")}`;
    const pkgName = summaryPkgName.textContent;
    const diet = summaryDiet.textContent;
    const addons = summaryAddons.textContent;
    const rate = calcPerPlateRate.textContent;
    const total = calcTotalRange.textContent;

    const message = `Hello Ajith Kumar Keetha garu (Archana Caterers),%0A%0AI would like to book a catering quotation based on the website calculator:%0A%0A• *Package:* ${pkgName}%0A• *Guest Count:* ${guestText} Guests%0A• *Dietary Type:* ${diet}%0A• *Add-ons:* ${addons}%0A• *Estimated Rate:* ₹${rate} per plate%0A• *Total Estimate:* ₹${total}%0A%0APlease let me know your availability and customized dish options. Thank you!`;

    const whatsappUrl = `https://wa.me/919849027131?text=${message}`;
    window.open(whatsappUrl, "_blank");
  });

  // Prefill detailed enquiry form
  prefillEnquiryBtn.addEventListener("click", () => {
    const guests = sliderPosToGuests(slider.value);
    const guestInput = document.getElementById("formGuests");
    if (guestInput) guestInput.value = guests;

    const formDiet = document.getElementById("formDiet");
    if (formDiet) {
      formDiet.value = summaryDiet.textContent.includes("Pure Vegetarian")
        ? "Pure Vegetarian"
        : "Veg + Non-Veg Combination";
    }
  });

  // Run calculation once initially
  updateCalculation();
}

// ==========================================================================
// 6. AUTHENTIC PHOTO GALLERY & LIGHTBOX MODAL
// ==========================================================================
function initGalleryAndLightbox() {
  const tabs = document.querySelectorAll(".gallery-tab");
  const items = document.querySelectorAll(".gallery-item");
  const modal = document.getElementById("lightboxModal");
  const modalImg = document.getElementById("lightboxImg");
  const modalCaption = document.getElementById("lightboxCaption");
  const closeBtn = document.getElementById("lightboxClose");
  const prevBtn = document.getElementById("lightboxPrev");
  const nextBtn = document.getElementById("lightboxNext");

  let currentIndex = 0;
  let visibleItems = Array.from(items);

  // Category filter
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      const filter = tab.dataset.filter;

      items.forEach((item) => {
        if (filter === "all" || item.dataset.category === filter) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });

      // Update current visible items for lightbox navigation
      visibleItems = Array.from(items).filter((i) => i.style.display !== "none");
    });
  });

  // Open Lightbox
  function openLightbox(index) {
    if (visibleItems.length === 0) return;
    currentIndex = (index + visibleItems.length) % visibleItems.length;
    const targetItem = visibleItems[currentIndex];
    const img = targetItem.querySelector("img");
    const caption = targetItem.dataset.caption || "";

    modalImg.src = img.src;
    modalImg.alt = img.alt;
    modalCaption.textContent = caption;
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  items.forEach((item) => {
    item.addEventListener("click", () => {
      const idx = visibleItems.indexOf(item);
      openLightbox(idx);
    });
  });

  closeBtn.addEventListener("click", closeLightbox);

  prevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    openLightbox(currentIndex - 1);
  });

  nextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    openLightbox(currentIndex + 1);
  });

  // Close on backdrop click
  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.classList.contains("lightbox-content")) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") openLightbox(currentIndex - 1);
    if (e.key === "ArrowRight") openLightbox(currentIndex + 1);
  });
}

// ==========================================================================
// 7. INTERACTIVE ENQUIRY FORM & WHATSAPP SUBMIT
// ==========================================================================
function initEnquiryForm() {
  const form = document.getElementById("cateringEnquiryForm");
  const directWhatsappBtn = document.getElementById("submitWhatsappDirectBtn");
  const modal = document.getElementById("successModal");
  const modalCloseBtn = document.getElementById("modalCloseBtn");

  function getFormData() {
    const name = document.getElementById("formName").value.trim();
    const phone = document.getElementById("formPhone").value.trim();
    const email = document.getElementById("formEmail").value.trim();
    const eventType = document.getElementById("formEventType").value;
    const date = document.getElementById("formDate").value;
    const guests = document.getElementById("formGuests").value.trim();
    const pkg = document.getElementById("formPackage").value;
    const diet = document.getElementById("formDiet").value;
    const venue = document.getElementById("formVenue").value.trim();
    const notes = document.getElementById("formNotes").value.trim();

    return { name, phone, email, eventType, date, guests, pkg, diet, venue, notes };
  }

  function validateBasic(data) {
    if (!data.name) {
      alert("Please enter your name.");
      document.getElementById("formName").focus();
      return false;
    }
    if (!data.phone || data.phone.length < 9) {
      alert("Please enter a valid phone number.");
      document.getElementById("formPhone").focus();
      return false;
    }
    if (!data.eventType) {
      alert("Please select an event type.");
      document.getElementById("formEventType").focus();
      return false;
    }
    if (!data.date) {
      alert("Please select the event date.");
      document.getElementById("formDate").focus();
      return false;
    }
    if (!data.guests || parseInt(data.guests, 10) < 20) {
      alert("Please provide the approximate guest count (minimum 20).");
      document.getElementById("formGuests").focus();
      return false;
    }
    return true;
  }

  function buildWhatsappMessage(data) {
    let msg = `*NEW CATERING ENQUIRY - ARCHANA CATERERS*%0A%0A`;
    msg += `• *Name:* ${data.name}%0A`;
    msg += `• *Phone:* ${data.phone}%0A`;
    if (data.email) msg += `• *Email:* ${data.email}%0A`;
    msg += `• *Occasion:* ${data.eventType}%0A`;
    msg += `• *Date:* ${data.date}%0A`;
    msg += `• *Guest Count:* ${data.guests} Guests%0A`;
    msg += `• *Package Choice:* ${data.pkg}%0A`;
    msg += `• *Dietary Preference:* ${data.diet}%0A`;
    if (data.venue) msg += `• *Venue/Location:* ${data.venue}%0A`;
    if (data.notes) msg += `• *Special Notes:* ${data.notes}%0A`;
    msg += `%0APlease share your detailed menu options and availability. Thank you!`;
    return msg;
  }

  // Direct WhatsApp Button
  if (directWhatsappBtn) {
    directWhatsappBtn.addEventListener("click", () => {
      const data = getFormData();
      if (!validateBasic(data)) return;

      const message = buildWhatsappMessage(data);
      const url = `https://wa.me/919849027131?text=${message}`;
      window.open(url, "_blank");
    });
  }

  // Form Submit (Standard submit with modal feedback)
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = getFormData();
      if (!validateBasic(data)) return;

      // Show friendly confirmation modal
      if (modal) {
        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");
      }

      // Automatically prepare WhatsApp dispatch
      const message = buildWhatsappMessage(data);
      const url = `https://wa.me/919849027131?text=${message}`;

      // Open WhatsApp on modal OK
      modalCloseBtn.onclick = () => {
        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");
        window.open(url, "_blank");
        form.reset();
      };
    });
  }
}

// ==========================================================================
// 8. PDF DROPDOWN MENU
// ==========================================================================
function initPdfDropdown() {
  const btn = document.getElementById("pdfDropdownBtn");
  const menu = document.getElementById("pdfDropdownMenu");

  if (btn && menu) {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isExpanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", !isExpanded);
      menu.classList.toggle("show");
    });

    document.addEventListener("click", () => {
      btn.setAttribute("aria-expanded", "false");
      menu.classList.remove("show");
    });
  }
}

// ==========================================================================
// 9. BACK TO TOP BUTTON
// ==========================================================================
function initBackToTop() {
  const btn = document.getElementById("backToTopBtn");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 450) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// ==========================================================================
// 8. PRELOADER
// ==========================================================================
function hidePreloader() {
  const preloader = document.querySelector(".preloader");
  if (!preloader) return;

  // Fallback: hide after 3s even if load event doesn't fire
  const fallbackTimeout = setTimeout(() => {
    preloader.classList.add("hidden");
  }, 3000);

  window.addEventListener("load", () => {
    clearTimeout(fallbackTimeout);
    setTimeout(() => preloader.classList.add("hidden"), 300);
  });
}

// ==========================================================================
// 9. SCROLL REVEAL ANIMATIONS (IntersectionObserver)
// ==========================================================================
function initScrollReveal() {
  // Add reveal class to key elements
  const revealTargets = document.querySelectorAll(
    ".section-header, .service-card, .about-stat, .metric-card, " +
    ".package-card, .stall-card, .gallery-item, .terms-card, " +
    ".footer-column, .google-rating-banner, .pdf-download-card, " +
    ".about-image-collage, .about-text-content, .pillar-item"
  );

  revealTargets.forEach((el) => el.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Stagger children slightly
          const delay = entry.target.dataset.revealDelay || 0;
          setTimeout(() => {
            entry.target.classList.add("revealed");
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) => {
    observer.observe(el);
  });

  // Add stagger delays to grid children
  document.querySelectorAll(".services-grid .service-card, .stalls-grid .stall-card").forEach((card, i) => {
    card.dataset.revealDelay = i * 100;
  });
}

// ==========================================================================
// 10. TESTIMONIAL AUTO-ROTATION CAROUSEL
// ==========================================================================
function initTestimonialCarousel() {
  const cards = document.querySelectorAll(".testimonial-card");
  if (cards.length <= 1) return;

  const grid = document.querySelector(".testimonials-grid");
  if (!grid) return;

  let currentIndex = 0;
  let interval;

  // Create dot navigation
  const dotNav = document.createElement("div");
  dotNav.className = "testimonial-nav";
  cards.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "testimonial-dot" + (i === 0 ? " active" : "");
    dot.setAttribute("aria-label", `Show review ${i + 1}`);
    dot.addEventListener("click", () => goTo(i));
    dotNav.appendChild(dot);
  });
  grid.parentNode.insertBefore(dotNav, grid.nextSibling);

  function showCard(index) {
    cards.forEach((card, i) => {
      if (i === index) {
        card.style.display = "";
        card.style.opacity = "1";
        card.style.transform = "translateX(0)";
      } else {
        card.style.display = "none";
        card.style.opacity = "0";
        card.style.transform = "translateX(20px)";
      }
    });
    dotNav.querySelectorAll(".testimonial-dot").forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  function goTo(index) {
    currentIndex = index;
    showCard(currentIndex);
    resetInterval();
  }

  function next() {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
  }

  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(next, 5000);
  }

  // Show first card, hide others
  showCard(0);
  resetInterval();

  // Pause on hover
  grid.addEventListener("mouseenter", () => clearInterval(interval));
  grid.addEventListener("mouseleave", resetInterval);
}

// ==========================================================================
// 11. SCROLL PROGRESS INDICATOR (Ring on Back-to-Top Button)
// ==========================================================================
function initScrollProgress() {
  const btn = document.getElementById("backToTopBtn");
  if (!btn) return;

  // Create SVG progress ring
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.classList.add("scroll-progress-ring");
  svg.setAttribute("viewBox", "0 0 52 52");
  svg.innerHTML = `
    <circle class="ring-bg" cx="26" cy="26" r="24"/>
    <circle class="ring-progress" cx="26" cy="26" r="24"
            stroke-dasharray="150.8" stroke-dashoffset="150.8"/>
  `;
  btn.appendChild(svg);

  const progressCircle = svg.querySelector(".ring-progress");
  const circumference = 2 * Math.PI * 24; // ~150.8

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;
    const offset = circumference - (scrollPercent * circumference);
    progressCircle.style.strokeDashoffset = offset;
  });
}
