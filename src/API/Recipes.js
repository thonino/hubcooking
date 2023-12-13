function Recipes() {
    return [
      { 
        id: 0, 
        user_id: 0, 
        Like: 71, 
        nom: "Ravioli", 
        DateTime: "12/12/23 10h30", 
        ingredients: "farine, viande hachée, eau, ail, choux blanc, sel, sauce soja", 
        preparation: "faire la pâte, faire la farce, faire les raviolies etc..", 
      },
      { 
        id: 1, 
        user_id: 0, 
        Like: 26, 
        nom: "Nem", 
        DateTime: "12/12/23 11h30", 
        ingredients: "farine, viande hachée, eau, ail, vermicelle, sel, sauce soja", 
        preparation: "faire la pâte, faire la farce, faire les nems etc..", 
      },
      { 
        id: 2, 
        user_id: 1, 
        Like: 32, 
        nom: "Crepe",
        DateTime: "14/13/23 12h30", 
        ingredients: "farine, lait, sucre, sel, oeufs",
        preparation: "faire la pâte, faire les crêpes etc..", 
      },
    ];
  }

export default Recipes;