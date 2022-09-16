const Games = () => {

  const gamesData = [
    {
      title: 'Terra Futura',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam lorem, nec ultricies nisl nunc eget nisl.',
      image: 'https://images.unsplash.com/photo-1547638375-ebf04735d792?w=200',
      file: 'https://hellosimen.com/paper-tiger/games/game1.pdf',
    },
    {
      title: 'Parliament of Owls',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam lorem, nec ultricies nisl nunc eget nisl.',
      image: 'https://images.unsplash.com/photo-1547638375-ebf04735d792?w=200',
      file: 'https://hellosimen.com/paper-tiger/games/game2.pdf',
    },
    {
      title: 'Mage Cabal',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam lorem, nec ultricies nisl nunc eget nisl.',
      image: 'https://images.unsplash.com/photo-1547638375-ebf04735d792?w=200',
      file: 'https://hellosimen.com/paper-tiger/games/game3.pdf',
    },
    {
      title: 'Clockwork Tower',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam lorem, nec ultricies nisl nunc eget nisl.',
      image: 'https://images.unsplash.com/photo-1547638375-ebf04735d792?w=200',
      file: 'https://hellosimen.com/paper-tiger/games/game4.pdf',
    },
    {
      title: 'Squirrel Mob',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam lorem, nec ultricies nisl nunc eget nisl.',
      image: 'https://images.unsplash.com/photo-1547638375-ebf04735d792?w=200',
      file: 'https://hellosimen.com/paper-tiger/games/game5.pdf',
    }
  ];

  const randomStyle = () => {
    const styles = [
      '-rotate-1',
      'rotate-1',
      '-rotate-2',
      'rotate-2',
    ];
    return styles[Math.floor(Math.random() * styles.length)];
  }

  return(
    <section>
      <div className="flex flex-wrap gap-5 py-6 mt-6 sm:gap-8">
        { gamesData.map((game, index) => (
          <a 
            key={ index } 
            href={ game.file }
            target="_blank"
            rel="noreferrer"
            className={ `relative aspect-[9/10] w-48 flex-none overflow-hidden rounded-md ${ randomStyle() } hover:rotate-0 transition duration-500` }>
            <img 
              src="https://images.unsplash.com/photo-1547638375-ebf04735d792?w=300"
              alt={ game.title }
              className="absolute inset-0 object-cover w-full h-full transition duration-300 ease-in-out grayscale" 
              loading="lazy" 
            />
            <div className="absolute inset-0 w-full h-full text-2xl text-white bg-gray-900/75">
              <div className="flex items-center justify-center w-full h-full px-4 leading-none">
                { game.title }
              </div>
            </div>
          </a>
        )) }

      </div>
        
    </section>
  )
}

export default Games;