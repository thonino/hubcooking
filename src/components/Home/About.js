function About() {
  return (
    <div>
      <div className="w350">
        <p className="hc-red pacifico text-3xl">Qui sommes nous ?</p>
        <div className="flex flex-col justify-center items-center mt-3">
          <div className="bg-red text-white w350  p-3">
            <p className="roboto text-xl font-bold">Description</p>
          </div>
          <div className="bg-red-light w350  p-3 roboto">
            <p>
              HubCooking est une plateforme entièrement gratuite, dédiée au
              partage de photos et de recettes culinaires.
            </p>
            <p>
              Nous offrons aux passionnés de cuisine la possibilité de consulter
              où de proposer des recettes.
            </p>
            <p>
              Lancée début 2024, notre équipe de 3 membres donne tout pour vous
              garantir une expérience utilisateur optimale.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
