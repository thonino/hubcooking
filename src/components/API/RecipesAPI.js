function RecipesAPI() {
    return [
      { recipe_id: 0, 
        nom: "Ravioli", 
        DateTime: "12/12/23 10h30", 
        user_id: 0, 
        ingredients: "farine, viande hachée, eau, ail, choux blanc, sel, sauce soja", 
        preparation: "faire la pâte, faire la farce, faire les raviolies etc..", 
        Like: 1, 
      },
      { recipe_id: 1, 
        nom: "Nem", 
        DateTime: "12/12/23 11h30", 
        user_id: 0, 
        ingredients: "farine, viande hachée, eau, ail, vermicelle, sel, sauce soja", 
        preparation: "faire la pâte, faire la farce, faire les nems etc..", 
        Like: 1, 
      },
      { recipe_id: 2, 
        nom: "Crepe",
        DateTime: "14/13/23 12h30", 
        user_id: 1, 
        ingredients: "farine, lait, sucre, sel, oeufs",
        preparation: "faire la pâte, faire les crêpes etc..", 
        Like: 1, 
      },
    ];
  }

export default RecipesAPI;