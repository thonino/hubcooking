function About() {
  return (
    <div>
      <p className="hc-red pacifico text-3xl">Qui sommes nous ?</p>
      <div className="flex flex-col justify-center items-center mt-3">
        <div className="w-about bg-red text-white p-3 rounded-t">
          <p className="roboto text-xl font-bold">Description</p>
        </div>
        <div className="w-about bg-red-light p-3 roboto rounded-b">
          <p>
            HubCooking est une plateforme entièrement gratuite, dédiée au
            partage de photos et de recettes culinaires.
          </p>
          <p>
            Nous offrons aux passionnés de cuisine la possibilité de consulter
            ou de proposer des recettes.
          </p>
          <p>
            Lancée début 2024, notre équipe de 3 membres donne tout pour vous
            garantir une expérience utilisateur optimale.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
