import { useState, useEffect } from "react";

const Header = () => {

  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    if(darkMode){
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <header className="-bg--Very-Pale-Blue dark:-bg--Very-Dark-Blue  h-[235px] rounded-b-[20px] pt-8 px-6 mb-[1000px] md:mb-[480px] xl:mb-[200px]">
        <h1 className="-text--Very-Dark-Blue dark:-text--Very-Pale-Blue text-2xl font-bold mb-1">Social Media Dashboard</h1>
        <p className="-text--Dark-Grayish-Blue dark:-text--Desaturated-Blue font-bold mb-6">  Total Followers: 23,004</p>
        <hr className="bg-black mb-[19px]" />
        <div className="flex justify-between">
            <p className="-text--Dark-Grayish-Blue dark:-text--Desaturated-Blue font-bold ">Dark Mode</p>
            <label htmlFor="darkmode" className="border -bg--Toggle w-12 h-6 rounded-full overflow-hidden cursor-pointer p-[3px] relative" >
                <input onClick={handleClick} id="darkmode" className="peer sr-only" type="checkbox" />
                <div className="w-full h-full  peer-checked:-bg--Toggle-Gradient absolute top-0 left-0"/>
                <div className="w-[18px] h-[18px] -bg--Light-Grayish-Blue rounded-full peer-checked:translate-x-6 transition-all"  />
            </label>
        </div>
    </header>
  )
}

export default Header



