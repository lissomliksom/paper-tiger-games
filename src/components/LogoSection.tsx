import LogoImage from '../assets/logo.png';

const Logo = () => {
    return(
      <div className="ml-2 h-20 w-28 rounded-b-lg md:h-full md:w-2/5 md:rounded-none md:m-0 bg-[#050505]">
        <div className="flex flex-col items-center justify-center h-full">
          <img 
            src={ LogoImage } 
            alt="Paper Tiger Games logo" 
            className="p-1" />
        </div>
      </div>
  )
}

export default Logo;