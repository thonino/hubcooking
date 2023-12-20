import { createServer } from 'miragejs'
import RecipesAPI from './API/RecipesAPI.js'
import UsersAPI from './API/UsersAPI.js'
import PicturesAPI from './API/PicturesAPI.js'
import CommentsAPI from './API/CommentsAPI.js'
import CategoriesAPI from './API/CategoriesAPI.js'

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({ environment,

    routes() {
      this.namespace = "api";
      
      this.get("/recipes", () => {
        return { recipes: RecipesAPI() };
      });

      this.get("/users", () => {
        return { users: UsersAPI() };
      });
      
      this.get("/pictures", () => {
        return { pictures: PicturesAPI() };
      });

      this.get("/comments", () => {
        return { comments: CommentsAPI() };
      });

      this.get("/categories", () => {
        return { categories: CategoriesAPI() };
      });
    },
  });

  return server
}




