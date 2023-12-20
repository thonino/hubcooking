function RecipesAPI() {
  return [
    {
      id: 0,
      user_id: 0,
      like: 71,
      category: "entree",
      name: "cordon-bleu",
      DateTime: "09/12/23 16h30",
      ingredients:
        "poitrine de poulet, jambon, fromage suisse, farine, œufs, chapelure, sel, poivre",
      preparation:
        "1. Aplatir la poitrine de poulet. 2. Placer une tranche de jambon et une tranche de fromage suisse sur le poulet. 3. Enrouler le tout et fixer avec des cure-dents. 4. Enrober le rouleau de poulet dans la farine, les œufs battus et la chapelure. 5. Faire frire jusqu'à ce qu'il soit doré. 6. Retirer les cure-dents avant de servir.",
      img: "cordon-bleu.png",
    },
    {
      id: 1,
      user_id: 2,
      like: 6,
      category: "plat",
      name: "frites",
      DateTime: "12/12/23 09h00",
      ingredients: "pommes de terre, huile végétale, sel",
      preparation:
        "1. Éplucher et couper les pommes de terre en bâtonnets. 2. Faire chauffer l'huile dans une friteuse. 3. Frire les pommes de terre jusqu'à ce qu'elles soient dorées. 4. Égoutter et saupoudrer de sel.",
      img: "frites.png",
    },
    {
      id: 2,
      user_id: 2,
      like: 50,
      category: "dessert",
      name: "panacota",
      DateTime: "13/12/23 17h00",
      ingredients: "crème, sucre, gélatine, extrait de vanille, framboises",
      preparation:
        "1. Faire chauffer la crème dans une casserole avec le sucre et l'extrait de vanille. 2. Ajouter la gélatine ramollie dans la crème chaude et mélanger jusqu'à dissolution. 3. Verser dans des moules et réfrigérer jusqu'à ce que la panacotta soit prise. 4. Servir avec des framboises.",
      img: "panacota.png",
    },
    {
      id: 3,
      user_id: 2,
      like: 13,
      category: "dessert",
      name: "fraisier",
      DateTime: "13/12/23 18h00",
      ingredients: "biscuit génoise, fraises, crème pâtissière, sucre glace",
      preparation:
        "1. Couper la génoise en deux. 2. Disposer une couche de génoise dans un moule. 3. Étaler une couche de crème pâtissière. 4. Ajouter une couche de fraises tranchées. 5. Répéter les couches jusqu'à épuisement des ingrédients. 6. Réfrigérer et saupoudrer de sucre glace avant de servir.",
      img: "fraisier.png",
    },
    {
      id: 5,
      user_id: 3,
      like: 8,
      category: "dessert",
      name: "crepe",
      DateTime: "14/12/23 15h45",
      ingredients: "farine, lait, sucre, sel, œufs, beurre",
      preparation:
        "1. Mélanger la farine, le sucre et le sel. 2. Incorporer le lait et les œufs. 3. Faire cuire dans une poêle chaude avec du beurre. 4. Garnir de sucre, de confiture ou de Nutella.",
      img: "crepe.png",
    },
    {
      id: 6,
      user_id: 4,
      like: 12,
      category: "boisson",
      name: "mojito",
      DateTime: "15/12/23 20h15",
      ingredients:
        "menthe fraîche, citron vert, sucre, rhum blanc, eau gazeuse, glace",
      preparation:
        "1. Dans un verre, mélanger des feuilles de menthe fraîche, des morceaux de citron vert et du sucre. 2. Écraser légèrement les ingrédients pour libérer les saveurs. 3. Ajouter de la glace et le rhum blanc. 4. Compléter avec de l'eau gazeuse. 5. Remuer et déguster.",
      img: "mojito.png",
    },
    {
      id: 7,
      user_id: 5,
      like: 7,
      category: "entree",
      name: "nem",
      DateTime: "15/12/23 19h00",
      ingredients:
        "feuilles de riz, viande hachée, vermicelles de riz, légumes, sauce soja",
      preparation:
        "1. Tremper les feuilles de riz dans de l'eau chaude pour les ramollir. 2. Garnir chaque feuille de riz avec de la viande hachée, des vermicelles de riz et des légumes. 3. Enrouler les feuilles de riz pour former des nems. 4. Faire frire jusqu'à ce qu'ils soient croustillants. 5. Servir avec de la sauce soja.",
      img: "nem.png",
    },
    {
      id: 8,
      user_id: 6,
      like: 100,
      category: "plat",
      name: "quiche-lorraine",
      DateTime: "16/12/23 13h45",
      ingredients:
        "pâte brisée, crème fraîche, lardons, œufs, fromage râpé, beurre",
      preparation:
        "1. Abaisser la pâte brisée dans un moule à tarte. 2. Faire revenir les lardons dans une poêle. 3. Dans un bol, mélanger la crème fraîche, les œufs et le fromage râpé. 4. Verser le mélange sur la pâte, ajouter les lardons et quelques morceaux de beurre. 5. Cuire au four à 240°C pendant 25 minutes.",
      img: "quiche-lorraine.png",
    },
    {
      id: 9,
      user_id: 7,
      like: 10,
      category: "plat",
      name: "ravioli",
      DateTime: "16/12/23 18h30",
      ingredients:
        "pâte à ravioli, viande hachée, eau, ail, choux blanc, sel, sauce soja",
      preparation:
        "1. Préparer la pâte à ravioli. 2. Préparer la farce en mélangeant la viande hachée, l'ail, le chou blanc et la sauce soja. 3. Façonner les raviolis en utilisant la pâte et la farce. 4. Cuire les raviolis dans de l'eau bouillante jusqu'à ce qu'ils flottent à la surface. 5. Servir chaud.",
      img: "ravioli.png",
    },
  ];
}

export default RecipesAPI;
