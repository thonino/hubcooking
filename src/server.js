import { createServer } from 'miragejs'
import Recipes from './API/Recipes.js'
import Users from './API/Users.js'
import Pictures from './API/Pictures.js'
import Comments from './API/Comments.js'

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({ environment,

    routes() {
      this.namespace = "api";
      
      this.get("/recipes", () => {
        return { recipes: Recipes() };
      });

      this.get("/users", () => {
        return { users: Users() };
      });
      
      this.get("/pictures", () => {
        return { pictures: Pictures() };
      });

      this.get("/comments", () => {
        return { comments: Comments() };
      });
    },
  });

  return server
}




