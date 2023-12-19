import About from './About';
import TopRecipes from './TopRecipes';
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
      <div className="flex justify-center items-center mt-1">
        <img className="w-60 " src="logo-hc.png" alt="placeholder" />
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        <About />
        <TopRecipes />
      </div>
      <br />
      <div className="flex flex-wrap justify-center gap-2">
        <div className="">
          <p className="hc-blue pacifico text-3xl mb-3">
            Nos dernières photos !
          </p>
          <LastPictures />
          <br />
        </div>
        <div>
          <p className="hc-blue pacifico text-3xl mb-3">
            Nos dernières recettes !
          </p>
          <LastRecipes />
        </div>
      </div>
      <br />
    </div>
  );
}

export default Home;
