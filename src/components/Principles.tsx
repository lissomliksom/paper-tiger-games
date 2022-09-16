import Dice1 from '../assets/dice-1.svg';
import Dice2 from '../assets/dice-2.svg';
import Dice3 from '../assets/dice-3.svg';


const Principles = () => {

  const principlesData = [
    {
      title: 'All game components should be printable with a regular printer.',
      icon: Dice1,
    },
    {
      title: 'All games should be playable with only a handful of dice.',
      icon: Dice2,
    },
    {
      title: 'All rulesets should fit on a single A4 page.',
      icon: Dice3
    },
  ]

  return (
    <section>

      <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
        Main design principles:
      </p>

      <ul className="mt-3 space-y-1 text-zinc-600">

        {principlesData.map((principle, index) => (
          <li key={ index } className="flex items-center space-x-4">
            <span>
            <img src={ principle.icon } alt="Dice icon" />
            </span>
            <span>{ principle.title }</span>
          </li>
        )) }

      </ul>

    </section>
  );
}

export default Principles;