export const coffees = [
  {
    name: "Ethiopian",
    region: "East Africa",
    scores: [8, 10, 8, 2, 2, 1],
    note: "Jasmine · Bergamot · Blueberry",
    roast: "Light",
    process: "Washed",
    brewMethods: ["Pour Over", "Chemex", "AeroPress", "Cold Brew"],
    highlights: [
      {
        tags: ["🫐 Blueberry", "🍋 Bergamot", "🍊 Tangerine"],
        note: "Washed Yirgacheffe delivers citrus-toned stone fruit with tea-like precision — the cleanest, brightest fruit expression in African coffee.",
      },
      {
        tags: ["🌸 Jasmine", "🌿 Bergamot", "💐 Narcissus"],
        note: "The world's benchmark for floral intensity. Top-grade Yirgacheffe G1 is often described as perfumed — jasmine and narcissus aromatics that no other origin can match.",
      },
      {
        tags: ["🍯 Honey", "🍵 Lemon Verbena", "🟤 Brown Sugar"],
        note: "A silky, tea-like sweetness without heaviness. Natural sugars are preserved by careful double-fermentation washing at top stations like Deri Kochoha and Idido.",
      },
      null,
      null,
      null,
    ],
  },
  {
    name: "Colombian",
    region: "South America",
    scores: [8, 5, 8, 3, 2, 2],
    note: "Red Cherry · Tropical Fruit · Caramel",
    roast: "Light–Medium",
    process: "Washed",
    brewMethods: ["Pour Over", "Espresso", "AeroPress", "Drip"],
    highlights: [
      {
        tags: ["🍒 Red Cherry", "🍇 Blackberry", "🍊 Blood Orange"],
        note: "The best Huila and Nariño micro-lots are vivid and fruit-forward — red cherry, blackberry, and tropical guava with a bright, clean tartness that distinguishes specialty-grade Colombian from commodity lots.",
      },
      {
        tags: ["🌸 Violet", "🌸 Jasmine"],
        note: "High-altitude farms in Nariño (1,700–2,300 MASL) produce a subtle floral lift — violet and jasmine notes that complement the dominant fruit character.",
      },
      {
        tags: ["🍮 Caramel Panela", "🟤 Brown Sugar", "🍫 Milk Chocolate"],
        note: "Panela (raw cane sugar) sweetness is the Colombian hallmark — rich, unrefined caramel depth with a smooth, medium body. Cup of Excellence Huila lots consistently score 90–94 for this profile.",
      },
      null,
      null,
      null,
    ],
  },
  {
    name: "Kenyan",
    region: "East Africa",
    scores: [9, 5, 7, 2, 3, 1],
    note: "Blackcurrant · Blood Orange · Brown Sugar",
    roast: "Light–Medium",
    process: "Washed",
    brewMethods: ["Pour Over", "Chemex", "AeroPress", "Cold Brew"],
    highlights: [
      {
        tags: ["🍇 Blackcurrant", "🍊 Blood Orange", "🍅 Tomato Sweetness"],
        note: "Kenya SL28 and SL34 — selected at Scott Agricultural Labs in 1935 — produce the world's most vivid blackcurrant and citrus acidity. The 'tomato sweetness' unique to SL28 is a defining cup characteristic found nowhere else.",
      },
      {
        tags: ["🌿 Bergamot", "🍵 Black Tea"],
        note: "A tea-like aromatic complexity lifts Kenyan coffee above the fruit — bergamot and English Breakfast tea aromatics give depth beyond the dominant berry profile.",
      },
      {
        tags: ["🟤 Brown Sugar", "🍷 Molasses", "🍬 Wine-like"],
        note: "Kenya's double-soak washing method (pulp → 24hr ferment → rinse → overnight soak) produces exceptional clean sweetness. The 'wine-like' quality is not ferment defect but genuine fruit sugar complexity.",
      },
      null,
      null,
      null,
    ],
  },
  {
    name: "Sumatran",
    region: "Indonesia",
    scores: [2, 1, 5, 4, 5, 10],
    note: "Cedar · Bittersweet Cocoa · Tobacco",
    roast: "Medium–Dark",
    process: "Wet-Hulled",
    brewMethods: ["French Press", "Drip", "Espresso", "Cold Brew"],
    highlights: [
      null,
      null,
      {
        tags: ["🍫 Bittersweet Cocoa", "🍂 Rustic Molasses"],
        note: "Wet-hulled processing (Giling Basah) transforms the bean's natural sugars into a distinctive dark, rustic sweetness — not clean caramel but deep, almost fermented complexity.",
      },
      null,
      {
        tags: ["🪵 Cedar", "🌶️ Black Pepper", "🍂 Clove"],
        note: "The wet-hull process and Indonesia's humid growing conditions at 1,200–1,500 MASL (Gayo Highlands, Aceh) create a spice character unlike any other origin — cedar-dominant with peppery warmth.",
      },
      {
        tags: ["🌍 Peat", "🍂 Tobacco", "🌿 Dark Earth"],
        note: "Sumatra's earthy profile is the most extreme on Earth — a defining terroir expression from the Giling Basah process, where parchment is removed at 50% moisture, fundamentally altering the bean's cellular structure.",
      },
    ],
  },
  {
    name: "Brazilian",
    region: "South America",
    scores: [5, 3, 8, 9, 2, 3],
    note: "Dark Chocolate · Hazelnut · Dried Apricot",
    roast: "Medium–Dark",
    process: "Natural",
    brewMethods: ["Espresso", "French Press", "Moka Pot", "Cold Brew"],
    highlights: [
      {
        tags: ["🍑 Dried Apricot", "🍇 Raisin", "🍒 Red Cherry"],
        note: "Brazil's natural (dry) processing allows fruit sugars to absorb into the bean during drying — producing a subtle but genuine stone fruit and dried fruit character beneath the dominant chocolate-nut profile.",
      },
      null,
      {
        tags: ["🍫 Dark Chocolate", "🟤 Brown Sugar", "🍮 Caramel Toffee"],
        note: "Top Sul de Minas and Carmo de Minas naturals score 93–95 at Coffee Review with consistent notes of 'baker's chocolate, caramel, and pistachio.' The global espresso blend benchmark for sweetness and body.",
      },
      {
        tags: ["🌰 Hazelnut", "🥜 Almond", "🍫 Cocoa Powder"],
        note: "The most celebrated nutty profile in coffee. Brazilian Bourbon Amarelo and Yellow Catuaí naturals define the hazelnut-cocoa dimension. Roasted medium-dark, the nutty depth is unmatched by any other origin.",
      },
      null,
      null,
    ],
  },
  {
    name: "Guatemalan",
    region: "Central America",
    scores: [5, 4, 8, 6, 3, 2],
    note: "Milk Chocolate · Caramel · Meyer Lemon",
    roast: "Light–Medium",
    process: "Washed",
    brewMethods: ["Pour Over", "French Press", "Espresso", "Drip"],
    highlights: [
      {
        tags: ["🍋 Meyer Lemon", "🍑 Peach", "🍎 Orchard Fruit"],
        note: "High-altitude Antigua and Huehuetenango coffees (1,500–2,000 MASL, grown in volcanic soil) show clean, precise orchard fruit brightness — more restrained than Ethiopian but with excellent clarity.",
      },
      {
        tags: ["🌸 Magnolia", "🌸 Light Floral"],
        note: "Antigua's microclimate — surrounded by three volcanoes — produces a gentle magnolia and floral lift that distinguishes it from other Central American origins.",
      },
      {
        tags: ["🍫 Milk Chocolate", "🍮 Dulce de Leche", "🟤 Brown Sugar"],
        note: "Rich, milk-chocolate sweetness with a dulce de leche character is the Antigua signature — volcanic soil and a freeze-free climate at 1,500–1,700 MASL concentrate sugars in the cherry.",
      },
      {
        tags: ["🌰 Cashew", "🌰 Almond", "🍫 Dark Cocoa"],
        note: "Distinctive cocoa and light nut character from high-altitude Bourbon and Caturra varietals. Huehuetenango Bourbon lots are especially prized for this quality.",
      },
      null,
      null,
    ],
  },
  {
    name: "Costa Rican",
    region: "Central America",
    scores: [7, 4, 9, 4, 2, 1],
    note: "Wild Honey · Apricot · Caramel",
    roast: "Light–Medium",
    process: "Honey",
    brewMethods: ["Pour Over", "AeroPress", "Chemex", "Espresso"],
    highlights: [
      {
        tags: ["🍑 Apricot", "🍒 Red Cherry", "🍎 Red Apple"],
        note: "Costa Rica's honey process leaves the mucilage intact during drying (Yellow Honey = 50–75%, Red Honey = 75–100%), creating a fruit clarity that's cleaner than a natural but richer than a washed — apricot and red cherry without ferment complexity.",
      },
      null,
      {
        tags: ["🍯 Wild Honey", "🌾 Cane Sugar", "🍮 Caramel"],
        note: "The honey process was invented in Costa Rica's Tarrazú region — and no origin on Earth expresses honey sweetness more cleanly. The mucilage sugars dry into the bean, producing an almost confectionery sweetness without artificial character.",
      },
      null,
      null,
      null,
    ],
  },
  {
    name: "Yemeni",
    region: "Middle East",
    scores: [7, 5, 7, 3, 9, 5],
    note: "Cardamom · Dried Apricot · Dark Chocolate",
    roast: "Medium",
    process: "Natural",
    brewMethods: ["Ibrik / Turkish", "French Press", "Chemex", "Espresso"],
    highlights: [
      {
        tags: ["🍇 Raisin", "🍑 Dried Apricot", "🫐 Fig"],
        note: "Ancient dry-processed Yemeni heirloom coffees — dried on mountain rooftops at 1,500–2,500 MASL — concentrate sugars to produce complex dried fruit unlike any other natural-process origin.",
      },
      {
        tags: ["🌿 Aromatic Herb", "🌸 Lemon Verbena"],
        note: "A subtle herbal floral lift from Yemen's ancient heirloom varieties (Mattari, Haimi, Kholani) — grown in terraced mountain farms with no modern varietals introduced since the 15th century.",
      },
      {
        tags: ["🍷 Wine-like", "🍮 Tamarind", "🍯 Dark Honey"],
        note: "Extreme water stress on terraced mountain farms concentrates sugars to near-wine complexity. Sweet Maria's describes the sweetness as 'fermented tamarind meets dark honey' — unlike any other origin.",
      },
      null,
      {
        tags: ["🌿 Cardamom", "🍂 Cinnamon", "🌶️ Dry Pepper"],
        note: "Yemen's spice profile is the most complex in coffee — born of ancient heirloom genetics and a desert-dry climate. Cardamom, dry cinnamon, and aromatic pepper are intrinsic to the bean, not the roast or preparation.",
      },
      {
        tags: ["🪵 Aromatic Cedar", "🍂 Leather", "🌍 Tobacco"],
        note: "The Port of Mocha is coffee's oldest trade origin. Yemen's earthy depth — cedar, leather, tobacco — reflects terroir from some of the world's oldest continuously cultivated coffee farms.",
      },
    ],
  },
  {
    name: "Jamaican Blue Mountain",
    region: "Caribbean",
    scores: [4, 5, 8, 5, 3, 2],
    note: "Chocolate · Orange Peel · Sweet Herbs",
    roast: "Medium",
    process: "Washed",
    brewMethods: ["Chemex", "Pour Over", "Drip", "French Press"],
    highlights: [
      null,
      {
        tags: ["🌸 Jasmine", "🌸 Magnolia", "🌿 Sweet Herb"],
        note: "The Blue Mountain's misty, slow-ripening climate (cherries take longer to mature here than almost anywhere else on Earth) produces delicate floral and herbal aromatics — jasmine, magnolia, fresh mint as the cup cools.",
      },
      {
        tags: ["🍫 Mild Chocolate", "🍊 Orange Peel", "🌾 Cream"],
        note: "Jamaica Blue Mountain's celebrated cup is built on balance and absence of defect rather than bold statement flavors — a gentle milk chocolate sweetness, fresh citrus peel, and creamy body with virtually zero bitterness.",
      },
      {
        tags: ["🌰 Walnut", "🍫 Cocoa"],
        note: "Blue Mountain Typica — a centuries-old locally-adapted Typica cultivar — produces a subtle walnut and cocoa nuttiness that adds structure to the otherwise delicate, mild profile.",
      },
      null,
      null,
    ],
  },
  {
    name: "Hawaiian Kona",
    region: "Pacific",
    scores: [5, 5, 8, 7, 2, 1],
    note: "Macadamia · Caramel Toffee · Peach",
    roast: "Light–Medium",
    process: "Washed",
    brewMethods: ["Pour Over", "Drip", "French Press", "Cold Brew"],
    highlights: [
      {
        tags: ["🍑 Peach", "🍒 Fresh Cherry", "🍊 Light Citrus"],
        note: "Kona's volcanic basalt soil (Hualalai and Mauna Loa slopes) and cool diurnal temperature swings contribute a clean, subtle stone fruit character — peach and fresh cherry that shine at light-medium roast.",
      },
      {
        tags: ["🌸 Jasmine", "🌿 Chamomile"],
        note: "Delicate jasmine and chamomile florals distinguish Kona from other Pacific origins. These are notably present in Peaberry Kona, which concentrates flavor by developing only one seed per cherry.",
      },
      {
        tags: ["🍮 Caramel Toffee", "🍯 Honey", "🟤 Brown Sugar"],
        note: "Silky caramel toffee sweetness is Kona's most consistent character — praised by Big Island Coffee Roasters and Coffee Review alike. Medium roast develops toffee depth without losing the honey-like finish.",
      },
      {
        tags: ["🌰 Macadamia", "🥜 Butternut"],
        note: "Kona's signature macadamia nuttiness — found in no other origin — is the result of Hawaii's unique volcanic soil chemistry and the locally-adapted Kona Typica cultivar. Peaberry Kona intensifies this character further.",
      },
      null,
      null,
    ],
  },
  {
    name: "Vietnamese",
    region: "Southeast Asia",
    scores: [1, 1, 6, 7, 3, 8],
    note: "Dark Chocolate · Roasted Walnut · Dark Caramel",
    roast: "Dark",
    process: "Natural",
    brewMethods: ["Phin Filter", "Espresso", "Moka Pot", "Cold Brew"],
    highlights: [
      null,
      null,
      {
        tags: ["🍫 Dark Chocolate", "🍮 Dark Caramel", "🍬 Dried Date"],
        note: "Robusta roasted dark transforms inherent bitterness into bold chocolate and dark caramel — the foundation for Vietnam's iconic cà phê sữa đá (iced condensed milk coffee). The dark roast is integral to the flavour system, not a defect.",
      },
      {
        tags: ["🌰 Roasted Walnut", "🍫 Cocoa Powder"],
        note: "Vietnamese Robusta (Dak Lak Province, Central Highlands) carries 2× the caffeine of Arabica and a heavier, more bitter nutty base — roasted walnut and cocoa powder notes that hold up under condensed milk and ice.",
      },
      null,
      {
        tags: ["🌍 Deep Earth", "🪵 Musty Wood", "🌿 Loam"],
        note: "The most earthy Robusta profile in Southeast Asia — a pronounced forest-floor character from Dak Lak's dense humid growing conditions. This earthiness is the signature of Vietnamese phin coffee, not a flaw.",
      },
    ],
  },
  {
    name: "Peruvian",
    region: "South America",
    scores: [6, 4, 7, 5, 2, 2],
    note: "Orange Zest · Milk Chocolate · Brown Sugar",
    roast: "Light–Medium",
    process: "Washed",
    brewMethods: ["Pour Over", "Chemex", "Drip", "AeroPress"],
    highlights: [
      {
        tags: ["🍋 Orange Zest", "🫐 Plum", "🍑 Passion Fruit"],
        note: "High-altitude Cajamarca coffees (1,600–2,000 MASL) show clean, precise fruit with gentle acidity — orange zest and passion fruit are characteristic of the best Cup of Excellence Peru lots.",
      },
      null,
      {
        tags: ["🍫 Milk Chocolate", "🍮 Toffee", "🟤 Brown Sugar"],
        note: "Consistent, dependable sweetness is Peru's calling card. FTO-certified washed lots from La Prosperidad de Chirinos and other Cajamarca cooperatives deliver milk chocolate and brown sugar in every cup.",
      },
      {
        tags: ["🌰 Almond", "🥜 Mild Nut"],
        note: "A gentle almond undertone from Caturra and Bourbon varietals rounds out the finish — light enough to complement rather than dominate the fruit and chocolate foundation.",
      },
      null,
      null,
    ],
  },
  {
    name: "Mexican",
    region: "North America",
    scores: [5, 4, 7, 6, 2, 2],
    note: "Milk Chocolate · Almond · Orange Zest",
    roast: "Light–Medium",
    process: "Washed",
    brewMethods: ["Pour Over", "Drip", "French Press", "Cold Brew"],
    highlights: [
      {
        tags: ["🍊 Orange Zest", "🍑 Peach", "🍋 Mild Citrus"],
        note: "Oaxacan Pluma Hidalgo — a centuries-old Typica descendant grown in the coastal Sierra Madre — shows clean, delicate citrus and peach notes. Perfect Daily Grind describes top Mexican coffees as 'a good white wine': dry, bright, nuanced.",
      },
      {
        tags: ["🌸 Floral Cream", "🌿 Herbal"],
        note: "Shade-grown at 900–1,700 MASL with slow cherry development, Oaxacan and Chiapas coffees develop a subtle floral-cream aroma — more delicate than Colombian or Ethiopian but distinctive in its own right.",
      },
      {
        tags: ["🍫 Milk Chocolate", "🍮 Caramel", "🍁 Maple"],
        note: "Chiapas coffees from the volcanic Sierra Madre (1,300–1,700 MASL) deliver consistent milk chocolate and maple sweetness — a well-rounded, accessible profile that has won 90+ Coffee Review scores in recent years.",
      },
      {
        tags: ["🌰 Almond", "🥜 Pecan", "🍫 Cocoa"],
        note: "Nutty and chocolaty notes from Caturra, Bourbon, and the traditional Pluma Typica varietals define the easygoing Mexican profile — pecan and almond without the boldness of Brazilian or Guatemalan.",
      },
      null,
      null,
    ],
  },
  {
    name: "Rwandan",
    region: "East Africa",
    scores: [8, 7, 8, 2, 5, 1],
    note: "Red Cherry · Clove · Caramelized Sugar",
    roast: "Light–Medium",
    process: "Washed",
    brewMethods: ["Pour Over", "AeroPress", "Chemex", "Cold Brew"],
    highlights: [
      {
        tags: ["🍒 Red Cherry", "🍊 Mandarin", "🫐 Red Currant"],
        note: "Rwanda's double-washed Bourbon (1,700–2,000 MASL, volcanic nitrogen-rich soils) produces the most vivid red cherry and mandarin brightness in East Africa — a profile often described as 'the Kenyan acidity of Ethiopia's sweetness.'",
      },
      {
        tags: ["🌹 Rose", "🌸 Orange Blossom", "🌺 Hibiscus"],
        note: "Rwandan washed Bourbon is among the most floral in the African coffee belt — rose, orange blossom, and hibiscus aromatics from the locally-adapted Mayaguez Bourbon cultivar that has grown here for over a century.",
      },
      {
        tags: ["🍮 Caramelized Sugar", "🍬 Toffee", "🟤 Brown Sugar"],
        note: "The combination of Bourbon genetics, high altitude, and Rwanda's 245 precision washing stations produces exceptional caramel sweetness. ~60% of Rwanda's crop achieves specialty grade — one of the highest rates globally.",
      },
      null,
      {
        tags: ["🍂 Clove", "🌶️ Allspice", "🍂 Cinnamon"],
        note: "A notable spice character — clove and allspice — distinguishes Rwandan Bourbon from other East African origins. This is a natural expression of the Bourbon varietal at altitude, not a processing artifact.",
      },
      null,
    ],
  },
  {
    name: "Indian Monsoon",
    region: "South Asia",
    scores: [1, 1, 5, 6, 9, 9],
    note: "Sandalwood · Cardamom · Dark Chocolate",
    roast: "Medium–Dark",
    process: "Monsooned",
    brewMethods: ["Espresso", "French Press", "Moka Pot", "Cold Brew"],
    highlights: [
      null,
      null,
      {
        tags: ["🍫 Dark Chocolate", "🌾 Malt", "🍮 Salted Caramel"],
        note: "The monsoon process (exposing green coffee to humid coastal winds for 12–16 weeks in open Kerala/Karnataka warehouses) strips acidity entirely and amplifies a heavy, malty sweetness — salted caramel and dark chocolate with almost zero brightness.",
      },
      {
        tags: ["🪵 Sandalwood", "🌰 Cedar", "🍫 Cocoa"],
        note: "Woody and chocolaty notes emerge from S795 and Chandragiri varietals monsooned at sea level on India's Malabar Coast — the process recreates what 18th-century sailing ships did accidentally to Indian coffee on the voyage to Europe.",
      },
      {
        tags: ["🌿 Cardamom", "🍂 Clove", "🌶️ Black Pepper", "🌿 Nutmeg"],
        note: "Indian Monsoon Malabar AA carries the most complex spice profile in all of coffee — cardamom, clove, black pepper, and nutmeg that evoke masala chai. This is intrinsic to the monsooned bean, present before any spices are added to the cup.",
      },
      {
        tags: ["🪵 Wet Wood", "🌍 Peat", "🍄 Mushroom"],
        note: "The monsoon exposure creates an unmistakably deep, musty earthiness — the 'AA' grade monsoon beans swell to nearly twice their original volume during the process, absorbing the humid coastal air and its characteristic terroir.",
      },
    ],
  },
  {
    name: "Panama Geisha",
    region: "Central America",
    scores: [8, 10, 8, 1, 1, 1],
    note: "Jasmine · Bergamot · Peach Nectar",
    roast: "Light",
    process: "Washed",
    brewMethods: ["Pour Over", "Chemex", "AeroPress"],
    highlights: [
      {
        tags: ["🍑 Apricot", "🍊 Tangerine", "🍇 Redcurrant"],
        note: "Geisha's fruit character is defined by precision rather than intensity — tangerine zest, apricot, and redcurrant with a tea-like clarity. The 96-point Coffee Review Hacienda La Esmeralda described it as 'delicately sweet-tart, juicy acidity, with very full syrupy mouthfeel.'",
      },
      {
        tags: ["🌸 Jasmine", "🌿 Bergamot", "🌸 Lilac", "🌸 Orange Blossom"],
        note: "Panama Geisha defines the ceiling of floral intensity in specialty coffee. The Jaramillo farm at Hacienda La Esmeralda (1,950+ MASL) produces the most consistently 'perfumed' cup ever measured — often described as wearing jasmine as a cologne, not just tasting it.",
      },
      {
        tags: ["🍯 Peach Nectar", "🍫 Cocoa Nib", "🟤 Silky Honey"],
        note: "The washed Geisha's sweetness is unique — a cocoa nib and peach nectar combination that justifies auction prices of $800–$10,000+ per pound. The silky body at light roast is arguably the best mouthfeel in coffee.",
      },
      null,
      null,
      null,
    ],
  },
  {
    name: "Burundian",
    region: "East Africa",
    scores: [8, 8, 8, 2, 3, 1],
    note: "Honeysuckle · Mulberry · Apricot",
    roast: "Light–Medium",
    process: "Washed",
    brewMethods: ["Pour Over", "Chemex", "AeroPress", "Cold Brew"],
    highlights: [
      {
        tags: ["🍇 Mulberry", "🍑 Dried Apricot", "🍊 Clementine"],
        note: "Intelligentsia's Burundi Yandaro: 'dried apricot, bright clementine, sweet persimmon, remarkable clarity.' Kayanza Province (1,700–1,900 MASL) produces some of the cleanest, most complex berry and stone fruit in all of East Africa.",
      },
      {
        tags: ["🌿 Honeysuckle", "🌸 Jasmine", "🌺 Hibiscus"],
        note: "Burundi's nearly-exclusive Bourbon varietal produces exceptional floral intensity — honeysuckle and hibiscus notes that rival Rwanda and approach Ethiopian Yirgacheffe. Blue Bottle's Burundi Kayanza Ninga (91 Coffee Review points) was described as 'gentle and sweetly bright with honeysuckle and mulberry.'",
      },
      {
        tags: ["🍮 Caramelized Sugar", "🍯 Honey", "🍵 Sweet Tea"],
        note: "A juicy, full-body sweetness from double-washed Bourbon at high altitude. Intelligentsia's Burundi Karyenda: 'tangerine and black plum, sugarcane, almond, vanilla, juicy acidity, sweet tea finish' — consistently among the cleanest and sweetest in Africa.",
      },
      null,
      null,
      null,
    ],
  },
  {
    name: "Tanzanian",
    region: "East Africa",
    scores: [8, 4, 6, 2, 4, 2],
    note: "Blackcurrant · Dark Plum · Bergamot",
    roast: "Light–Medium",
    process: "Washed",
    brewMethods: ["Pour Over", "Chemex", "French Press", "AeroPress"],
    highlights: [
      {
        tags: ["🍇 Blackcurrant", "🫐 Dark Plum", "🍓 Wild Berry"],
        note: "Tanzania Peaberry (5–9% of each crop, sorted by density) concentrates the blackcurrant-to-dark-chocolate transition that defines top Kilimanjaro and Arusha washed lots. Espresso Coffee Guide: 'vivid fruit-toned acidity, notes of black currant softening to chocolate — classic and unforgettable.'",
      },
      null,
      {
        tags: ["🍵 Black Tea", "🟤 Brown Sugar"],
        note: "A distinctive tea-like quality found in both Peaberry and AA grades — the Blue Mountain and Bourbon varietals grown on Kilimanjaro's slopes (1,200–1,900 MASL) produce a refined, clean sweetness that complements the dominant berry acidity.",
      },
      null,
      {
        tags: ["🌶️ Black Pepper", "🪵 Cedar"],
        note: "A subtle spice-and-cedar note in the finish — more restrained than Kenyan but adding depth to an otherwise fruit-forward profile. Present as the cup cools, typical of washed lots from the Southern Highlands (Mbeya, Ruvuma).",
      },
      null,
    ],
  },
  {
    name: "Honduran",
    region: "Central America",
    scores: [5, 3, 8, 6, 2, 2],
    note: "Dark Chocolate · Caramel · Orange Zest",
    roast: "Medium",
    process: "Washed",
    brewMethods: ["Pour Over", "Espresso", "French Press", "Drip"],
    highlights: [
      {
        tags: ["🍊 Orange Zest", "🍑 Peach", "🍒 Mild Cherry"],
        note: "Copán and Marcala farms (1,200–1,700 MASL) produce clean, fruit-forward cups with a Copán-specific orange-zest and dark chocolate combination. Cup of Excellence Honduras lots from El Paraíso have won 90–94 points with 'guava, mandarin, and melon' notes.",
      },
      null,
      {
        tags: ["🍫 Dark Chocolate", "🍮 Caramel", "🍯 Honey"],
        note: "Honduras became Central America's largest coffee producer in 2012, and its sweet profile reflects altitude-driven sugar development. Marcala — Honduras's only Denomination of Origin — is particularly prized for its caramel and honey sweetness from slow-maturing cherries.",
      },
      {
        tags: ["🥜 Pecan", "🌰 Walnut", "🍫 Mild Cocoa"],
        note: "Pacamara and Bourbon varietals in Copán deliver a mild nut-cocoa depth — understated enough to let the fruit and chocolate shine, but persistent through the finish.",
      },
      null,
      null,
    ],
  },
  {
    name: "Papua New Guinea",
    region: "Pacific",
    scores: [5, 2, 6, 6, 3, 7],
    note: "Dark Chocolate · Almond · Cedar",
    roast: "Medium",
    process: "Washed",
    brewMethods: ["French Press", "Drip", "Espresso", "Cold Brew"],
    highlights: [
      {
        tags: ["🍑 Dried Apricot", "🍇 Wild Berry", "🍷 Port-like"],
        note: "Sigri Estate (Wahgi Valley, 1,550+ MASL) — PNG's most celebrated washed lot — shows a port-like red wine fruit character. Two Brothers Coffee Roasters: 'dark chocolate, almond, cedar, red wine, aroma of soil after fresh rainfall.'",
      },
      null,
      {
        tags: ["🟤 Brown Sugar", "🍫 Dark Chocolate", "🍮 Caramel"],
        note: "Sigri's estate model (hand-picked, rigorous wet factory) produces a reliable medium-dark sweetness — brown sugar and dark chocolate that develop fully at medium roast. The Blue Mountain genetics from post-WWII varietal research give PNG a cleaner cup than other Pacific islands.",
      },
      {
        tags: ["🌰 Almond", "🪵 Cedar", "🍫 Cocoa"],
        note: "Blue Mountain, Arusha, and Mundo Novo varietals contribute a woody almond-cocoa character — heavier and more cedar-forward than Kona's macadamia nuttiness, fitting for a Pacific island origin.",
      },
      null,
      {
        tags: ["🌍 Forest Floor", "🪵 Damp Wood", "🍄 Mushroom"],
        note: "PNG's earthy depth comes from humid highland growing conditions — less extreme than wet-hulled Sumatran but with a distinctive forest-floor and damp wood character. French Press is universally recommended to let these earthy oils express fully.",
      },
    ],
  },
];
