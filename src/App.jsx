import { useState, useEffect } from "react"
import { SunIcon } from "@heroicons/react/24/outline"
import { UserIcon, TrophyIcon, HeartIcon, Bars3Icon } from "@heroicons/react/24/solid"

const App = () => {
  const [mode, setMode] = useState(false)

  useEffect(() => {
    const El = document.getElementById("htmlTag")
    if (mode) {
      El.classList.remove("light")
      El.classList.add("dark")
    } else {
      El.classList.remove("dark")
      El.classList.add("light")
    }
  }, [mode])

  const BENEFITS = [
    {
      icon: <UserIcon className="h-16 w-16 text-gray-400" />,
      title: "The Original",
      description:
        "We were the first Driving School in NYS to adopt the MSF curriculum.",
    },
    {
      icon: <TrophyIcon className="h-16 w-16 text-gray-400" />,
      title: "We Truly Care",
      description:
        "We bring advanced techniques and cutting-edge technology to the table every time.",
    },
    {
      icon: <HeartIcon className="h-16 w-16 text-gray-400" />,
      title: "Our Promise to You",
      description:
        "We promise to always provide value and outstanding service.",
    },
  ]

  const GALLERY = [
    {
      name: "Ginger Smith",
      designation: "Buhgalter",
      extraCls:
        "justify-start items-end bg-[url('https://mobirise.com/extensions/schoolamp/assets/images/03.jpg')]",
    },
    {
      name: "Michalis Fotis",
      designation: "Library",
      extraCls:
        "justify-start items-start bg-[url('https://mobirise.com/extensions/schoolamp/assets/images/photo4-500x500.jpg')]",
    },
    {
      name: "Le Seon",
      designation: "Student",
      extraCls:
        "justify-center 2xl:row-span-1 items-end bg-[url('https://mobirise.com/extensions/schoolamp/assets/images/01.jpg')]",
    },
    {
      name: "Steve Smith",
      designation: "Teacher",
      extraCls:
        "justify-center items-center 2xl:row-span-2 bg-[url('https://mobirise.com/extensions/schoolamp/assets/images/photo2-800x1200.jpg')]",
    },
    {
      name: "Our Cars",
      designation: "Photo",
      extraCls:
        "justify-start items-end 2xl:col-span-2 bg-[url('https://mobirise.com/extensions/schoolamp/assets/images/photo1-1200x800.jpg')]",
    },
    {
      name: "Stive Morgan",
      designation: "Mechanic",
      extraCls:
        "justify-center 2xl:col-span-1 items-end bg-[url('https://mobirise.com/extensions/schoolamp/assets/images/photo3-952x628.jpg')] ",
    },
  ]

  const AWARDS = [
    "https://mobirise.com/extensions/schoolamp/assets/images/1.png",
    "https://mobirise.com/extensions/schoolamp/assets/images/2.png",
    "https://mobirise.com/extensions/schoolamp/assets/images/3.png",
    "https://mobirise.com/extensions/schoolamp/assets/images/4.png",
    "https://mobirise.com/extensions/schoolamp/assets/images/5.png",
  ]

  return (
    <div className="app">
      {/* HEADER */}
      <header className="sticky top-0 left-0 z-10">
        <nav>
          <div className="h-20 bg-black dark:bg-slate-200 flex text-white dark:text-black justify-between items-center px-8  font-mono">
            <button className="md:hidden">
              <Bars3Icon
                className="h-7 w-7 text-white dark:text-black"
                data-drawer-target="toggle-menu"
                aria-controls="toggle-menu"
              />
            </button>
            <div>
              <h2 className="font-bold text-3xl">DSchool</h2>
            </div>

            <ul className="gap-10 text-lg hidden md:flex">
              <li className="tracking-widest">Home</li>
              <li className="tracking-widest">About</li>
              <li className="tracking-widest">Services</li>
              <li className="tracking-widest">Contact</li>
            </ul>

            <button onClick={() => setMode((prev) => !prev)}>
              <SunIcon className="h-7 w-7 text-white dark:text-black" />
            </button>
          </div>
        </nav>
      </header>

      <main>
        {/* BANNER */}
        <div className="h-[35rem] lg:h-[50rem] md:h-[40rem] bg-[url('https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-cover flex justify-center items-center text-center">
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="font-bold text-5xl md:text-8xl text-white">
                Driving School
              </h1>
            </div>
            <div>
              <h4 className="text-3xl text-white">
                All the top courses – from our school.
              </h4>
            </div>
            <div>
              <button className="tracking-wide duration-300 ease-linear mt-5 py-4 px-8 bg-white border-white border-2 hover:bg-transparent hover:text-white font-bold">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* ABOUT US */}
        <section>
          <div className="flex flex-col 2xl:flex-row">
            <div className="w-full h-[30rem] 2xl:w-1/2">
              <img
                src="https://mobirise.com/extensions/schoolamp/assets/images/background7.jpg"
                alt="about us"
                className="bg-center object-cover w-full h-full"
              />
            </div>
            <div className="w-full bg-stone-300 flex justify-center items-center 2xl:w-1/2">
              <div className="py-16 px-5 lg:w-1/2 flex flex-col gap-5 2xl:py-0">
                <div>
                  <h2 className="font-bold text-4xl text-black tracking-wider">
                    About Us
                  </h2>
                </div>
                <div className="border border-3 border-stone-500 w-1/4" />
                <div>
                  <p className="font-mono py-5 text-lg">
                    Hello. Our school has been present for over 20 years in the
                    market. We make the most of all our students.Our driving
                    instructors are committed to providing you with quality
                    driving lessons, defensive strategies, and tips to keep you
                    safe on the road.
                  </p>
                </div>
                <div>
                  <button className="tracking-wide duration-300 ease-linear mt-5 py-4 px-8 bg-stone-600 border-stone-600 border-2 hover:bg-transparent hover:text-stone-400 font-bold text-stone-300">
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section>
          <div className="flex flex-col gap-5 justify-center items-center py-20 bg-gray-200">
            <div>
              <h2 className="font-bold text-4xl text-black tracking-wider">
                Benefits
              </h2>
            </div>
            <div className="border border-3 border-stone-500 w-24" />
            <div className="grid grid-col-1 lg:grid-cols-3 gap-8 2xl:w-2/3 px-10 2xl:px-0">
              {BENEFITS.map((benefit, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center text-center mt-5 bg-white p-8 gap-4 shadow-xl"
                >
                  <div>{benefit.icon}</div>
                  <div>
                    <h3 className="font-bold text-xl text-black">
                      {benefit.title}
                    </h3>
                  </div>
                  <div>
                    <p className="text-gray-500 tracking-wider text-lg">
                      {benefit.description}
                    </p>
                  </div>
                  <div>
                    <button className="text-white tracking-wide duration-300 ease-linear mt-5 py-4 px-8 bg-gray-400 border-gray-400 border-2 hover:bg-transparent hover:text-stone-400 font-bold">
                      More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section>
          <div className="grid h-[100rem] sm:h-[130rem] lg:h-[80rem] lg:grid-cols-2 2xl:grid-cols-4 2xl:h-[55rem]">
            {GALLERY.map((item, index) => (
              <div
                key={index}
                className={`w-full bg-cover p-5 flex hover:opacity-90 cursor-zoom-in ${item.extraCls}`}
              >
                <div>
                  <h4 className="text-white text-xl">{item.name}</h4>
                  <h5 className="text-white text-xl font-bold">
                    {item.designation}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* LEARN WITH US */}
        <section>
          <div className="bg-neutral-700 py-10">
            <div className="grid grid-cols-5 justify-center xl:w-2/3 m-auto">
              {AWARDS.map((item, index) => (
                <div key={index}>
                  <img
                    src={item}
                    alt="comfort zone"
                    className="m-auto brightness-200 w-16 sm:w-20 md:w-32"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="h-[5rem] flex justify-center items-center">
          <h4 className="text-slate-400">
            © Copyright 2018 Mobirise - All Rights Reserved
          </h4>
        </div>
      </footer>
    </div>
  )
}

export default App
