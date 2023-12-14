import { useEffect, useState } from 'react';
import About from './About';
import LastRecipes from './LastRecipes';
import LastPictures from './LastPictures';

function Home() {
  // const [comments, setComments] = useState([]);

  // useEffect(() => {
  //   fetch("/api/comments")
  //     .then((response) => response.json())
  //     .then((json) => setComments(json.comments));
  // }, []);

  return (
    <div>
      <div className="flex justify-center items-center mt-2 ">
        <img className="w-1/4 " src="logo-hc.png" alt="placeholder"/>
      </div>
      <About />
      <br />
      <div className="flex flex-wrap justify-center gap-4">
        <div >
          <p className="hc-blue pacifico text-3xl mb-2">
            Les Dernières Photos !
          </p>
          <LastPictures />
          <br />
        </div>
        <div>
          <p className="hc-blue pacifico text-3xl mb-2">
            Les Dernières Recettes !
          </p>
          <LastRecipes />
        </div>
      </div>
      <br/>
    </div>
  );
}

export default Home;
