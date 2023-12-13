function CommentsAPI() {
    return [
      { 
        id: 0, 
        picture_id: null, 
        recette_id: 0, 
        user_id: null, 
        user_nom: "Toto", 
        Like: 15, 
        text: "Recette magnifique !", 
        DateTime: "13/12/23 15h30", 
      },
      { 
        id: 1, 
        picture_id: 1, 
        recette_id: null, 
        user_id: null, 
        user_nom: "Toto", 
        Like: 15, 
        text: "Photo superbe !", 
        DateTime: "14/12/23 09h00", 
      },
      { 
        id: 2, 
        picture_id: null, 
        recette_id: null, 
        user_id: 2, 
        user_nom: "Toto", 
        Like: 15, 
        text: "Merci pour vos publications !", 
        DateTime: "14/12/23 17h00", 
      },
    ];
  }

export default CommentsAPI;