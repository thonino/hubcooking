function RecipesAPI() {
    return [
      {
        id: 0,
        user_id: 0,
        like: 71,
        category: "plat",
        name: "Ravioli",
        DateTime: "12/12/23 10h30",
        ingredients:
          "farine, viande hachée, eau, ail, choux blanc, sel, sauce soja",
        preparation: "faire la pâte, faire la farce, faire les raviolies etc..",
        img: "ravioli.png",
      },
      {
        id: 1,
        user_id: 0,
        like: 26,
        category: "entree",
        name: "Nem",
        DateTime: "12/12/23 11h30",
        ingredients:
          "farine, viande hachée, eau, ail, vermicelle, sel, sauce soja",
        preparation: "faire la pâte, faire la farce, faire les nems etc..",
        img: "nem.png",
      },
      {
        id: 2,
        user_id: 1,
        like: 32,
        category: "dessert",
        name: "Crêpes",
        DateTime: "14/13/23 12h30",
        ingredients: "farine, lait, sucre, sel, oeufs",
        preparation: "faire la pâte, faire les crêpes etc..",
        img: "crepes.png",
      },
      {
        id: 3,
        user_id: 2,
        like: 19,
        category: "plat",
        name: "Quiche Lorraine",
        DateTime: "14/13/23 14h25",
        ingredients: "pâte brisée, creme fraiche, lardon, sel, oeufs, fromage, beurre",
        preparation: "25 minutes au four a 240° etc..",
        img: "quiche-lorraine.png",
      },
    ];
  }

export default RecipesAPI;