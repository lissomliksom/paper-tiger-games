const Principles = () => {
  return (
    <section>
      <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
        Main design principles:
      </p>
      <ul className="mt-3 space-y-1 text-zinc-600">

        <li className="flex items-center space-x-4">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect width="18" height="18" rx="3" fill="none" className="fill-rose-700" />
              <circle cx="9" cy="9" r="2" fill="white"/>
            </svg>
          </span>
          <span>All game components should be printable with a regular printer.</span>
        </li>

        <li className="flex items-center space-x-4">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect width="18" height="18" rx="3" fill="none" className="fill-rose-700" />
              <circle cx="6" cy="12" r="2" fill="white"/>
              <circle cx="12" cy="6" r="2" fill="white"/>
            </svg>
          </span>
          <span>All games should be playable with only a handful of dice.</span>
        </li>
        
        <li className="flex items-center space-x-4">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect width="18" height="18" rx="3" fill="none" className="fill-rose-700" />
              <circle cx="5" cy="13" r="2" fill="white"/>
              <circle cx="13" cy="5" r="2" fill="white"/>
              <circle cx="9" cy="9" r="2" fill="white"/>
            </svg>
          </span>
          <span>All rulesets should fit on a single A4 page.</span>
        </li>
      </ul>
    </section>
  );
}

export default Principles;