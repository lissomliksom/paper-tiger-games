import Options from './Options';
import Intro from './Intro';
import Principles from './Principles';
import Games from './Games';

const ContentSection = () => {
  return(
    <div className="h-full md:w-3/5">
      <div className="max-w-3xl py-6 pl-4 pr-8 mx-auto space-y-6">
        <Options />
        <Intro />
        <Principles />
        <Games />
      </div>

    </div>
  )
}

export default ContentSection;