const DEFAULT_MENU = {
  restaurant: {
    name: "مرسم",
    latin: "El Marsem",
    tagline_fr: "Menu digital — Didouche Mourad",
    tagline_ar: "قائمة رقمية — ديدوش مراد",
    currency_fr: "DA",
    currency_ar: "د.ج",
    address_fr: "Didouche Mourad",
    address_ar: "ديدوش مراد"
  },
  categories: [
    {
      id: "fraicheur",
      icon: "🥗",
      name_fr: "L'Arc-en-ciel de Fraîcheur",
      name_ar: "قوس قزح الانتعاش",
      banner: "assets/illustrations/banner-fraicheur.jpg",
      items: [
        {id:"f1", name_fr:"Camembert Rôti au Four", name_ar:"كامامبير مشوي في الفرن", desc_fr:"Camembert, raisins secs, noix, miel, laitue, pain grillé, sauce pesto.", desc_ar:"كامامبير، زبيب، جوز، عسل، خس، خبز محمص، صلصة بيستو.", price:1400, img:"assets/illustrations/fraicheur.jpg"},
        {id:"f2", name_fr:"Salade César", name_ar:"سلطة سيزر", desc_fr:"Poulet pané, parmesan, œuf poché, romaine, croûtons de pain, tomates cerises, olives noires, sauce césar.", desc_ar:"دجاج مقرمش، بارميزان، بيضة بوشيه، خس روماني، خبز محمص، طماطم كرزية، زيتون أسود، صلصة سيزر.", price:1500, img:"assets/illustrations/fraicheur.jpg"},
        {id:"f3", name_fr:"Salade Composée", name_ar:"سلطة مركبة", desc_fr:"Rôti de bœuf, avocat, pommes vertes, artichaut, concombres, tomates, brocoli, amandes effilées, graines de chia, graines de lin, laitue, batavia, œuf, parmesan.", desc_ar:"روست بيف، أفوكادو، تفاح أخضر، خرشوف، خيار، طماطم، بروكلي، لوز شرائح، بذور الشيا، بذور الكتان، خس، باتافيا، بيض، بارميزان.", price:1900, img:"assets/illustrations/fraicheur.jpg"},
        {id:"f4", name_fr:"Burrata", name_ar:"بوراتا", desc_fr:"Burrata, tomates cerises, roquette, crème balsamique, sauce pesto.", desc_ar:"بوراتا، طماطم كرزية، جرجير، كريمة بلسميك، صلصة بيستو.", price:1700, img:"assets/illustrations/fraicheur.jpg"},
        {id:"f5", name_fr:"Trio Bourek", name_ar:"تريو بوراك", desc_fr:"Assortiment croustillant de boureks viande, poulet et fromage.", desc_ar:"تشكيلة مقرمشة من بوراك اللحم، الدجاج والجبن.", price:1100, img:"assets/illustrations/fraicheur.jpg"},
        {id:"f6", name_fr:"Salade Mechouia Mixte", name_ar:"سلطة مشوية مشكلة", desc_fr:"Caviar d'aubergines, hmiss.", desc_ar:"كافيار الباذنجان، حميس.", price:950, img:"assets/illustrations/fraicheur.jpg"}
      ]
    },
    {
      id: "burgers",
      icon: "🍔",
      name_fr: "Casting des Burgers",
      name_ar: "تشكيلة البرغر",
      banner: "assets/illustrations/banner-burgers.jpg",
      items: [
        {id:"b1", name_fr:"Classic Burger", name_ar:"برغر كلاسيك", desc_fr:"Steak haché grillé, fromage blanc, gouda, salade, tomates, oignons marinés, sauce maison.", desc_ar:"ستيك مفروم مشوي، جبن أبيض، غودة، سلطة، طماطم، بصل متبل، صلصة المنزل.", price:1200, img:"assets/illustrations/burgers.jpg"},
        {id:"b2", name_fr:"Crispy Burger", name_ar:"برغر مقرمش", desc_fr:"Galette de poulet pané, fromage blanc, gouda, tomate, roquette, oignons marinés, crème d'avocat.", desc_ar:"قطعة دجاج مقرمشة، جبن أبيض، غودة، طماطم، جرجير، بصل متبل، كريمة الأفوكادو.", price:1200, img:"assets/illustrations/burgers.jpg"},
        {id:"b3", name_fr:"Smash Burger", name_ar:"سماش برغر", desc_fr:"Double steak haché grillé, double gouda, fromage blanc, tomate, laitue, sauce BBQ, oignons caramélisés, cornichons, sauce maison.", desc_ar:"ستيك مفروم مزدوج مشوي، غودة مزدوجة، جبن أبيض، طماطم، خس، صلصة باربكيو، بصل مكرمل، مخلل، صلصة المنزل.", price:1500, img:"assets/illustrations/burgers.jpg"}
      ]
    },
    {
      id: "braise",
      icon: "🥩",
      name_fr: "Le Maître de Braise",
      name_ar: "سيد المشويات",
      banner: "assets/illustrations/banner-burgers.jpg",
      items: [
        {id:"br1", name_fr:"Escalope Milanaise", name_ar:"إسكالوب ميلانيز", desc_fr:"Sauce tomate et mozzarella.", desc_ar:"صلصة طماطم وموزاريلا.", price:1900, img:"assets/illustrations/braise.jpg"},
        {id:"br2", name_fr:"Blanc de Poulet Grillé", name_ar:"صدر دجاج مشوي", desc_fr:"Blanc de poulet grillé.", desc_ar:"صدر دجاج مشوي.", price:1700, img:"assets/illustrations/braise.jpg"},
        {id:"br3", name_fr:"Brochettes de Poulet", name_ar:"أسياخ دجاج", desc_fr:"Brochettes de poulet grillées.", desc_ar:"أسياخ دجاج مشوية.", price:1800, img:"assets/illustrations/braise.jpg"},
        {id:"br4", name_fr:"Steak Haché à Cheval", name_ar:"ستيك مفروم بالبيض", desc_fr:"Steak haché servi avec un œuf.", desc_ar:"ستيك مفروم يقدم مع بيضة.", price:1900, img:"assets/illustrations/braise.jpg"},
        {id:"br5", name_fr:"Entrecôte Grillée", name_ar:"أنتريكوت مشوي", desc_fr:"Servie avec une sauce au poivre.", desc_ar:"يقدم مع صلصة الفلفل.", price:2500, img:"assets/illustrations/braise.jpg"},
        {id:"br6", name_fr:"Noisettes d'Agneau Poêlées", name_ar:"قطع لحم غنم مقلاة", desc_fr:"Ail, romarin, sauce verte, tomate cerise.", desc_ar:"ثوم، إكليل الجبل، صلصة خضراء، طماطم كرزية.", price:2500, img:"assets/illustrations/braise.jpg"},
        {id:"br7", name_fr:"Épaule d'Agneau Mechoui", name_ar:"كتف غنم مشوي", desc_fr:"Sur commande (pour 4 personnes). Chakhchoukha, riz parfumé, légumes sautés.", desc_ar:"تحت الطلب (لـ 4 أشخاص). شخشوخة، أرز معطر، خضار سوتيه.", price:12000, img:"assets/illustrations/braise.jpg"},
        {id:"br8", name_fr:"Poisson du Jour", name_ar:"سمك اليوم", desc_fr:"Selon arrivage.", desc_ar:"حسب التوفر.", price:0, priceLabel_fr:"Selon arrivage", priceLabel_ar:"حسب التوفر", img:"assets/illustrations/braise.jpg"}
      ]
    },
    {
      id: "tartines",
      icon: "🥪",
      name_fr: "Le Secret du Pain Grillé à l'Italienne",
      name_ar: "سر الخبز المحمص على الطريقة الإيطالية",
      banner: "assets/illustrations/banner-fraicheur.jpg",
      items: [
        {id:"t1", name_fr:"Tartine Tomates Sardines Marinées", name_ar:"تارتين طماطم وسردين متبل", desc_fr:"Sardine marinée, tomate cerise, laitue, roquette, pain de campagne, tapenade d'olives noires.", desc_ar:"سردين متبل، طماطم كرزية، خس، جرجير، خبز ريفي، تابناد زيتون أسود.", price:1100, img:"assets/illustrations/tartines.jpg"},
        {id:"t2", name_fr:"Tartine Camembert", name_ar:"تارتين كامامبير", desc_fr:"Camembert, fromage, raisin sec, noix, filet de miel, pain de campagne.", desc_ar:"كامامبير، جبن، زبيب، جوز، رشة عسل، خبز ريفي.", price:1500, img:"assets/illustrations/tartines.jpg"},
        {id:"t3", name_fr:"Tartine Saumon et Avocat", name_ar:"تارتين سلمون وأفوكادو", desc_fr:"Saumon fumé, fromage, avocat, œufs au plat, pain de campagne.", desc_ar:"سلمون مدخن، جبن، أفوكادو، بيض مقلي، خبز ريفي.", price:1900, img:"assets/illustrations/tartines.jpg"},
        {id:"t4", name_fr:"Assortiment de Trois Tartines", name_ar:"تشكيلة ثلاث تارتينات", desc_fr:"Sélection de trois tartines au choix du chef.", desc_ar:"اختيار ثلاث تارتينات من اختيار الشيف.", price:2500, img:"assets/illustrations/tartines.jpg"}
      ]
    },
    {
      id: "pasta",
      icon: "🍝",
      name_fr: "Dolce Pasta",
      name_ar: "دولتشي باستا",
      banner: "assets/illustrations/banner-fraicheur.jpg",
      items: [
        {id:"p1", name_fr:"Tagliatelles au Saumon Fumé", name_ar:"تالياتيلي بالسلمون المدخن", desc_fr:"Pâtes fraîches au saumon fumé.", desc_ar:"معكرونة طازجة بالسلمون المدخن.", price:2400, img:"assets/illustrations/pasta.jpg"},
        {id:"p2", name_fr:"Linguine au Poulet et Champignons", name_ar:"لينغويني بالدجاج والفطر", desc_fr:"Linguine, poulet, champignons, sauce crémeuse.", desc_ar:"لينغويني، دجاج، فطر، صلصة كريمية.", price:1800, img:"assets/illustrations/pasta.jpg"},
        {id:"p3", name_fr:"Spaghetti Bolognaise", name_ar:"سباغيتي بولونيز", desc_fr:"Sauce bolognaise maison.", desc_ar:"صلصة بولونيز منزلية.", price:1400, img:"assets/illustrations/pasta.jpg"},
        {id:"p4", name_fr:"Penne Puttanesca", name_ar:"بيني بوتانيسكا", desc_fr:"Sauce tomate, olives, câpres, saveurs méditerranéennes.", desc_ar:"صلصة طماطم، زيتون، كبار، نكهات متوسطية.", price:1400, img:"assets/illustrations/pasta.jpg"}
      ]
    },
    {
      id: "kids",
      icon: "🧒",
      name_fr: "Le Menu du Petit Explorateur",
      name_ar: "قائمة المستكشف الصغير",
      banner: "assets/illustrations/banner-kids.jpg",
      items: [
        {id:"k1", name_fr:"Burger Steak Haché", name_ar:"برغر ستيك مفروم", desc_fr:"Servi avec frites, sauce fromage et soda au choix.", desc_ar:"يقدم مع بطاطا مقلية، صلصة جبن ومشروب غازي حسب الاختيار.", price:1000, img:"assets/illustrations/kids.jpg"},
        {id:"k2", name_fr:"Nuggets de Poulet", name_ar:"ناغتس الدجاج", desc_fr:"Servi avec frites, sauce fromage et soda au choix.", desc_ar:"يقدم مع بطاطا مقلية، صلصة جبن ومشروب غازي حسب الاختيار.", price:1000, img:"assets/illustrations/kids.jpg"},
        {id:"k3", name_fr:"Fish Burger", name_ar:"برغر السمك", desc_fr:"Filet de poisson pané, sauce tartare, salade. Servi avec frites, sauce fromage et soda au choix.", desc_ar:"فيليه سمك مقرمش، صلصة تارتار، سلطة. يقدم مع بطاطا مقلية، صلصة جبن ومشروب غازي حسب الاختيار.", price:1600, img:"assets/illustrations/kids.jpg"}
      ]
    },
    {
      id: "pizza",
      icon: "🍕",
      name_fr: "La Pizza",
      name_ar: "البيتزا",
      banner: "assets/illustrations/banner-pizza.jpg",
      items: [
        {id:"pz1", name_fr:"Margherita", name_ar:"مارغريتا", desc_fr:"Sauce tomate, mozzarella, cheddar.", desc_ar:"صلصة طماطم، موزاريلا، شيدر.", price:900, img:"assets/illustrations/pizza.jpg"},
        {id:"pz2", name_fr:"Oriental Spicy", name_ar:"أورينتال سبايسي", desc_fr:"Sauce tomate, piment vert, merguez, œuf coulant, cheddar, mozzarella.", desc_ar:"صلصة طماطم، فلفل أخضر، مرقاز، بيضة سائلة، شيدر، موزاريلا.", price:1200, img:"assets/illustrations/pizza.jpg"},
        {id:"pz3", name_fr:"Regina", name_ar:"ريجينا", desc_fr:"Sauce tomate, steak haché, tomates cerises, mozzarella, cheddar.", desc_ar:"صلصة طماطم، لحم مفروم، طماطم كرزية، موزاريلا، شيدر.", price:1500, img:"assets/illustrations/pizza.jpg"},
        {id:"pz4", name_fr:"Oceana", name_ar:"أوسيانا", desc_fr:"Sauce tomate, mozzarella, cheddar, thon, oignons.", desc_ar:"صلصة طماطم، موزاريلا، شيدر، تونة، بصل.", price:1500, img:"assets/illustrations/pizza.jpg"},
        {id:"pz5", name_fr:"Napolitaine", name_ar:"نابوليتان", desc_fr:"Sauce tomate, anchois, origan, câpres, huile d'olive.", desc_ar:"صلصة طماطم، أنشوة، أوريغانو، كبار، زيت زيتون.", price:900, img:"assets/illustrations/pizza.jpg"},
        {id:"pz6", name_fr:"Poulet Fumé", name_ar:"دجاج مدخن", desc_fr:"Poulet fumé, mozzarella, cheddar, tomate cerise, sauce crémeuse.", desc_ar:"دجاج مدخن، موزاريلا، شيدر، طماطم كرزية، صلصة كريمية.", price:1600, img:"assets/illustrations/pizza.jpg"},
        {id:"pz7", name_fr:"Quatre Saisons", name_ar:"الفصول الأربعة", desc_fr:"Sauce tomate, poulet, champignons, viande hachée, thon, mozzarella, cheddar, oignons caramélisés.", desc_ar:"صلصة طماطم، دجاج، فطر، لحم مفروم، تونة، موزاريلا، شيدر، بصل مكرمل.", price:1500, img:"assets/illustrations/pizza.jpg"},
        {id:"pz8", name_fr:"Foresta", name_ar:"فوريستا", desc_fr:"Champignons, mozzarella, cheddar, oignons caramélisés, roquette, sauce crémeuse.", desc_ar:"فطر، موزاريلا، شيدر، بصل مكرمل، جرجير، صلصة كريمية.", price:1200, img:"assets/illustrations/pizza.jpg"},
        {id:"pz9", name_fr:"Végétarienne", name_ar:"نباتية", desc_fr:"Sauce tomate, mozzarella, cheddar, champignon, tomate cerise, aubergine, poivron, courgette.", desc_ar:"صلصة طماطم، موزاريلا، شيدر، فطر، طماطم كرزية، باذنجان، فلفل، كوسة.", price:1200, img:"assets/illustrations/pizza.jpg"},
        {id:"pz10", name_fr:"Spinaci", name_ar:"سبيناتشي", desc_fr:"Sauce tomate, mozzarella, épinards, champignons, cheddar, œuf, tomate cerise, huile d'olive.", desc_ar:"صلصة طماطم، موزاريلا، سبانخ، فطر، شيدر، بيض، طماطم كرزية، زيت زيتون.", price:1200, img:"assets/illustrations/pizza.jpg"},
        {id:"pz11", name_fr:"Quatre Fromages", name_ar:"أربع أجبان", desc_fr:"Parmesan, camembert, cheddar, mozzarella, sauce crémeuse.", desc_ar:"بارميزان، كامامبير، شيدر، موزاريلا، صلصة كريمية.", price:1500, img:"assets/illustrations/pizza.jpg"},
        {id:"pz12", name_fr:"Suprême Chicken", name_ar:"سوبريم تشيكن", desc_fr:"Poulet, sauce crémeuse, cheddar, mozzarella, poivrons verts.", desc_ar:"دجاج، صلصة كريمية، شيدر، موزاريلا، فلفل أخضر.", price:1500, img:"assets/illustrations/pizza.jpg"},
        {id:"pz13", name_fr:"Saumon Fumé", name_ar:"سلمون مدخن", desc_fr:"Saumon fumé, mozzarella, cheddar, tomate cerise, sauce crémeuse.", desc_ar:"سلمون مدخن، موزاريلا، شيدر، طماطم كرزية، صلصة كريمية.", price:1900, img:"assets/illustrations/pizza.jpg"}
      ]
    },
    {
      id: "supplements",
      icon: "➕",
      name_fr: "Suppléments",
      name_ar: "إضافات",
      banner: "assets/illustrations/banner-supplements.jpg",
      items: [
        {id:"s1", name_fr:"Sauce Moutarde", name_ar:"صلصة الخردل", desc_fr:"", desc_ar:"", price:300, img:"assets/illustrations/supplements.jpg"},
        {id:"s2", name_fr:"Sauce au Poivre", name_ar:"صلصة الفلفل", desc_fr:"", desc_ar:"", price:500, img:"assets/illustrations/supplements.jpg"},
        {id:"s3", name_fr:"Sauce Champignons", name_ar:"صلصة الفطر", desc_fr:"", desc_ar:"", price:600, img:"assets/illustrations/supplements.jpg"},
        {id:"s4", name_fr:"Sauce Fromagère", name_ar:"صلصة الجبن", desc_fr:"", desc_ar:"", price:300, img:"assets/illustrations/supplements.jpg"},
        {id:"s5", name_fr:"Assiette de Frites", name_ar:"طبق بطاطا مقلية", desc_fr:"", desc_ar:"", price:300, img:"assets/illustrations/supplements.jpg"},
        {id:"s6", name_fr:"Assiette de Riz Maison", name_ar:"طبق أرز منزلي", desc_fr:"", desc_ar:"", price:400, img:"assets/illustrations/supplements.jpg"},
        {id:"s7", name_fr:"Assiette de Légumes de Saison", name_ar:"طبق خضار موسمية", desc_fr:"", desc_ar:"", price:500, img:"assets/illustrations/supplements.jpg"},
        {id:"s8", name_fr:"Garniture du Jour", name_ar:"مقبلات اليوم", desc_fr:"", desc_ar:"", price:400, img:"assets/illustrations/supplements.jpg"},
        {id:"s9", name_fr:"Purée de Pomme de Terre", name_ar:"بطاطا مهروسة", desc_fr:"", desc_ar:"", price:300, img:"assets/illustrations/supplements.jpg"},
        {id:"s10", name_fr:"Avocat", name_ar:"أفوكادو", desc_fr:"", desc_ar:"", price:400, img:"assets/illustrations/supplements.jpg"},
        {id:"s11", name_fr:"Parmesan", name_ar:"بارميزان", desc_fr:"", desc_ar:"", price:300, img:"assets/illustrations/supplements.jpg"}
      ]
    },
    {
      id: "matinale",
      icon: "☀️",
      name_fr: "La Table Matinale",
      name_ar: "مائدة الصباح",
      banner: "assets/illustrations/banner-matinale.jpg",
      items: [
        {id:"m1", name_fr:"Formule 1", name_ar:"صيغة 1", desc_fr:"Café ou thé, croissant + pain au chocolat, confiture, beurre, jus d'orange, eau petit modèle.", desc_ar:"قهوة أو شاي، كرواسون + خبز بالشوكولاتة، مربى، زبدة، عصير برتقال، ماء صغير.", price:950, img:"assets/illustrations/matinale.jpg"},
        {id:"m2", name_fr:"Formule 2", name_ar:"صيغة 2", desc_fr:"Café ou thé, croissant + pain au chocolat, pancake, confiture, beurre, omelette ou œuf à la coque, salade de fruits, jus d'orange pressé, eau petit modèle.", desc_ar:"قهوة أو شاي، كرواسون + خبز بالشوكولاتة، بان كيك، مربى، زبدة، أومليت أو بيضة مسلوقة، سلطة فواكه، عصير برتقال طازج، ماء صغير.", price:1850, img:"assets/illustrations/matinale.jpg"}
      ]
    },
    {
      id: "chaud",
      icon: "☕",
      name_fr: "Chaud",
      name_ar:"المشروبات الساخنة",
      banner:"assets/illustrations/banner-chaud.jpg",
      items:[
        {id:"c1", name_fr:"Espresso", name_ar:"إسبريسو", desc_fr:"", desc_ar:"", price:350, img:"assets/illustrations/chaud.jpg"},
        {id:"c2", name_fr:"Double Espresso", name_ar:"إسبريسو مزدوج", desc_fr:"", desc_ar:"", price:600, img:"assets/illustrations/chaud.jpg"},
        {id:"c3", name_fr:"Americano", name_ar:"أمريكانو", desc_fr:"", desc_ar:"", price:550, img:"assets/illustrations/chaud.jpg"},
        {id:"c4", name_fr:"Cappuccino", name_ar:"كابتشينو", desc_fr:"", desc_ar:"", price:500, img:"assets/illustrations/chaud.jpg"},
        {id:"c5", name_fr:"Café Latte", name_ar:"كافيه لاتيه", desc_fr:"", desc_ar:"", price:600, img:"assets/illustrations/chaud.jpg"},
        {id:"c6", name_fr:"Café Moka", name_ar:"كافيه موكا", desc_fr:"", desc_ar:"", price:550, img:"assets/illustrations/chaud.jpg"},
        {id:"c7", name_fr:"Café Viennois", name_ar:"كافيه فيينوا", desc_fr:"", desc_ar:"", price:550, img:"assets/illustrations/chaud.jpg"},
        {id:"c8", name_fr:"Café Glacé", name_ar:"قهوة مثلجة", desc_fr:"", desc_ar:"", price:600, img:"assets/illustrations/chaud.jpg"},
        {id:"c9", name_fr:"Café Affogato", name_ar:"أفوغاتو", desc_fr:"", desc_ar:"", price:600, img:"assets/illustrations/chaud.jpg"},
        {id:"c10", name_fr:"Café Eclyps", name_ar:"كافيه إكليبس", desc_fr:"", desc_ar:"", price:550, img:"assets/illustrations/chaud.jpg"},
        {id:"c11", name_fr:"Thé à la Menthe", name_ar:"شاي بالنعناع", desc_fr:"", desc_ar:"", price:350, img:"assets/illustrations/chaud.jpg"},
        {id:"c12", name_fr:"Thé Glacé", name_ar:"شاي مثلج", desc_fr:"", desc_ar:"", price:500, img:"assets/illustrations/chaud.jpg"},
        {id:"c13", name_fr:"Infusion au Choix", name_ar:"تيسان حسب الاختيار", desc_fr:"", desc_ar:"", price:500, img:"assets/illustrations/chaud.jpg"},
        {id:"c14", name_fr:"Infusion Nature", name_ar:"تيسان طبيعي", desc_fr:"", desc_ar:"", price:500, img:"assets/illustrations/chaud.jpg"}
      ]
    },
    {
      id:"frais", icon:"🍹", name_fr:"Les Tentations Fraîches", name_ar:"الإغراءات المنعشة", banner:"assets/illustrations/banner-boissons.jpg",
      items:[
        {id:"fr1", name_fr:"L'Orient", name_ar:"الشرق", desc_fr:"Dattes, banane, nectarine, jus d'ananas, jus de citron, eau de fleur d'oranger, cannelle.", desc_ar:"تمر، موز، نكتارين، عصير أناناس، عصير ليمون، ماء زهر البرتقال، قرفة.", price:800, img:"assets/illustrations/boissons.jpg"},
        {id:"fr2", name_fr:"El Bahdja", name_ar:"البهجة", desc_fr:"Mangue, kiwi, fruits de la passion, ananas, jus d'ananas.", desc_ar:"مانغو، كيوي، فاكهة العاطفة، أناناس، عصير أناناس.", price:1200, img:"assets/illustrations/boissons.jpg"},
        {id:"fr3", name_fr:"Green Kiss", name_ar:"القبلة الخضراء", desc_fr:"Kiwi, banane, fruits de la passion, jus ananas, fleurs d'oranger.", desc_ar:"كيوي، موز، فاكهة العاطفة، عصير أناناس، ماء زهر البرتقال.", price:1200, img:"assets/illustrations/boissons.jpg"},
        {id:"fr4", name_fr:"Fruits de Saison", name_ar:"فواكه الموسم", desc_fr:"Sélection de fruits frais de saison.", desc_ar:"تشكيلة فواكه موسمية طازجة.", price:1200, img:"assets/illustrations/boissons.jpg"},
        {id:"fr5", name_fr:"Bleu d'Alger", name_ar:"أزرق الجزائر", desc_fr:"Ananas, jus d'ananas, jus de citron.", desc_ar:"أناناس، عصير أناناس، عصير ليمون.", price:700, img:"assets/illustrations/boissons.jpg"},
        {id:"fr6", name_fr:"Jasmin", name_ar:"ياسمين", desc_fr:"Jus de pomme, ananas, purée de fruits rouges, cannelle, menthe fraîche, fleur d'oranger.", desc_ar:"عصير تفاح، أناناس، بيوريه فواكه حمراء، قرفة، نعناع طازج، ماء زهر البرتقال.", price:800, img:"assets/illustrations/boissons.jpg"},
        {id:"fr7", name_fr:"Rose des Sables", name_ar:"وردة الرمال", desc_fr:"Jus de fraise, purée de framboise, pêche, jus de citron, banane.", desc_ar:"عصير فراولة، بيوريه توت، خوخ، عصير ليمون، موز.", price:700, img:"assets/illustrations/boissons.jpg"},
        {id:"fr8", name_fr:"Mitidja", name_ar:"المتيجة", desc_fr:"Orange, pamplemousse, mandarine, jus d'orange.", desc_ar:"برتقال، غراب فروت، ماندرين، عصير برتقال.", price:700, img:"assets/illustrations/boissons.jpg"},
        {id:"fr9", name_fr:"Pink Lemonade", name_ar:"ليموناضة وردية", desc_fr:"Fraise, coulis de fraise, zeste et jus de citron, purée de framboise et limonade.", desc_ar:"فراولة، صلصة فراولة، قشر وعصير ليمون، بيوريه توت وليموناضة.", price:700, img:"assets/illustrations/boissons.jpg"},
        {id:"fr10", name_fr:"Pina Colada", name_ar:"بينا كولادا", desc_fr:"Cocktail exotique ananas et coco.", desc_ar:"كوكتيل استوائي بالأناناس وجوز الهند.", price:850, img:"assets/illustrations/boissons.jpg"},
        {id:"fr11", name_fr:"Mojito Classique", name_ar:"موهيتو كلاسيك", desc_fr:"Menthe fraîche, citron, limonade.", desc_ar:"نعناع طازج، ليمون، ليموناضة.", price:600, img:"assets/illustrations/boissons.jpg"},
        {id:"fr12", name_fr:"Mojito Parfumé au Choix", name_ar:"موهيتو بنكهات حسب الاختيار", desc_fr:"Fruits de la passion | fraise | framboise | pêche | mangue | fruits des bois.", desc_ar:"فاكهة العاطفة | فراولة | توت | خوخ | مانغو | فواكه الغابة.", price:700, img:"assets/illustrations/boissons.jpg"},
        {id:"fr13", name_fr:"Milkshake Banane", name_ar:"ميلك شيك موز", desc_fr:"", desc_ar:"", price:800, img:"assets/illustrations/boissons.jpg"},
        {id:"fr14", name_fr:"Milkshake Fraise", name_ar:"ميلك شيك فراولة", desc_fr:"", desc_ar:"", price:800, img:"assets/illustrations/boissons.jpg"},
        {id:"fr15", name_fr:"Milkshake Vanille", name_ar:"ميلك شيك فانيليا", desc_fr:"", desc_ar:"", price:800, img:"assets/illustrations/boissons.jpg"},
        {id:"fr16", name_fr:"Milkshake Chocolat", name_ar:"ميلك شيك شوكولاتة", desc_fr:"", desc_ar:"", price:800, img:"assets/illustrations/boissons.jpg"}
      ]
    },
    {
      id:"softs", icon:"🥤", name_fr:"Boissons", name_ar:"المشروبات", banner:"assets/illustrations/banner-boissons.jpg",
      items:[
        {id:"so1", name_fr:"Coca", name_ar:"كوكا", desc_fr:"", desc_ar:"", price:250, img:"assets/illustrations/boissons.jpg"},
        {id:"so2", name_fr:"Schweppes au Choix", name_ar:"شويبس حسب الاختيار", desc_fr:"", desc_ar:"", price:250, img:"assets/illustrations/boissons.jpg"},
        {id:"so3", name_fr:"Hamoud au Choix", name_ar:"حموض حسب الاختيار", desc_fr:"", desc_ar:"", price:250, img:"assets/illustrations/boissons.jpg"},
        {id:"so4", name_fr:"Eau Minérale P.M", name_ar:"ماء معدني صغير", desc_fr:"", desc_ar:"", price:100, img:"assets/illustrations/boissons.jpg"},
        {id:"so5", name_fr:"Eau Minérale G.M", name_ar:"ماء معدني كبير", desc_fr:"", desc_ar:"", price:200, img:"assets/illustrations/boissons.jpg"},
        {id:"so6", name_fr:"Eau Pétillante P.M", name_ar:"ماء غازي صغير", desc_fr:"", desc_ar:"", price:150, img:"assets/illustrations/boissons.jpg"},
        {id:"so7", name_fr:"Eau Pétillante G.M", name_ar:"ماء غازي كبير", desc_fr:"", desc_ar:"", price:250, img:"assets/illustrations/boissons.jpg"}
      ]
    },
    {
      id:"desserts", icon:"🍰", name_fr:"La Symphonie des Saveurs", name_ar:"سيمفونية النكهات", banner:"assets/illustrations/banner-desserts.jpg",
      items:[
        {id:"d1", name_fr:"Croissant au Beurre", name_ar:"كرواسون بالزبدة", desc_fr:"", desc_ar:"", price:200, img:"assets/illustrations/desserts.jpg"},
        {id:"d2", name_fr:"Pain au Chocolat", name_ar:"خبز بالشوكولاتة", desc_fr:"", desc_ar:"", price:200, img:"assets/illustrations/desserts.jpg"},
        {id:"d3", name_fr:"Toast Grillées", name_ar:"توست محمص", desc_fr:"", desc_ar:"", price:250, img:"assets/illustrations/desserts.jpg"},
        {id:"d4", name_fr:"Pâtisserie Fine au Choix", name_ar:"حلويات فاخرة حسب الاختيار", desc_fr:"", desc_ar:"", price:600, img:"assets/illustrations/desserts.jpg"},
        {id:"d5", name_fr:"Trompe l'Œil au Choix", name_ar:"ترومب لوي حسب الاختيار", desc_fr:"", desc_ar:"", price:900, img:"assets/illustrations/desserts.jpg"},
        {id:"d6", name_fr:"Fondant au Chocolat", name_ar:"فوندان الشوكولاتة", desc_fr:"", desc_ar:"", price:900, img:"assets/illustrations/desserts.jpg"},
        {id:"d7", name_fr:"Crème Brûlée", name_ar:"كريم بروليه", desc_fr:"", desc_ar:"", price:600, img:"assets/illustrations/desserts.jpg"},
        {id:"d8", name_fr:"Nougat Glacé", name_ar:"نوغا مثلجة", desc_fr:"", desc_ar:"", price:600, img:"assets/illustrations/desserts.jpg"},
        {id:"d9", name_fr:"Crème Renversée", name_ar:"كريم مقلوبة", desc_fr:"", desc_ar:"", price:600, img:"assets/illustrations/desserts.jpg"},
        {id:"d10", name_fr:"Brownie au Chocolat", name_ar:"براوني بالشوكولاتة", desc_fr:"", desc_ar:"", price:900, img:"assets/illustrations/desserts.jpg"},
        {id:"d11", name_fr:"Cake au Chocolat", name_ar:"كيك بالشوكولاتة", desc_fr:"", desc_ar:"", price:450, img:"assets/illustrations/desserts.jpg"},
        {id:"d12", name_fr:"Cake au Citron", name_ar:"كيك بالليمون", desc_fr:"", desc_ar:"", price:450, img:"assets/illustrations/desserts.jpg"},
        {id:"d13", name_fr:"Crêpe au Chocolat", name_ar:"كريب بالشوكولاتة", desc_fr:"", desc_ar:"", price:1000, img:"assets/illustrations/desserts.jpg"},
        {id:"d14", name_fr:"Crêpe Caramel au Beurre Salé", name_ar:"كريب كراميل بالزبدة المملحة", desc_fr:"", desc_ar:"", price:1000, img:"assets/illustrations/desserts.jpg"},
        {id:"d15", name_fr:"Crêpe aux Fruits", name_ar:"كريب بالفواكه", desc_fr:"", desc_ar:"", price:1200, img:"assets/illustrations/desserts.jpg"},
        {id:"d16", name_fr:"Gaufre au Chocolat et Fruits", name_ar:"وافل بالشوكولاتة والفواكه", desc_fr:"", desc_ar:"", price:1500, img:"assets/illustrations/desserts.jpg"},
        {id:"d17", name_fr:"Gaufre Fruits et Miel", name_ar:"وافل بالفواكه والعسل", desc_fr:"", desc_ar:"", price:1400, img:"assets/illustrations/desserts.jpg"},
        {id:"d18", name_fr:"Gaufre Glacée aux Fruits", name_ar:"وافل مثلجة بالفواكه", desc_fr:"", desc_ar:"", price:1600, img:"assets/illustrations/desserts.jpg"}
      ]
    },
    {
      id:"orientale", icon:"🍯", name_fr:"Gourmandise Orientale", name_ar:"حلوى شرقية", banner:"assets/illustrations/banner-orientale.jpg",
      items:[
        {id:"o1", name_fr:"Gourmandise Orientale", name_ar:"حلوى شرقية", desc_fr:"Voir avec le serveur ou la serveuse.", desc_ar:"استفسر من النادل أو النادلة.", price:0, priceLabel_fr:"Sur demande", priceLabel_ar:"عند الطلب", img:"assets/illustrations/orientale.jpg"}
      ]
    }
  ]
};
