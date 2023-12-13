import { createServer } from 'miragejs'
import RecipesAPI from './components/API/RecipesAPI.js'
import UsersAPI from './components/API/UsersAPI.js'
import PicturesAPI from './components/API/PicturesAPI.js'

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

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
    },
  });

  return server
}




