//import React from 'react'
import { Link } from "react-scroll";

function AboutMeText() {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
        <h2 className="text-6xl text-cyan mb-10">
            About Me
        </h2>
        <p className="text-white">Bilgisayar güvenliği ve yazılım geliştirme alanlarına ilgi duyan biriyim. Küçük yaşlardan itibaren bilgisayarlarla iç içe oldum ve yeni teknolojiler öğrenmeye her zaman meraklıyım. Özellikle backend geliştirme, veritabanı yönetimi ve siber güvenlik konularında kendimi geliştirmeye devam ediyorum. Sorunlara çözüm üretmeyi ve ekip içinde uyumlu çalışmayı önemsiyorum.</p>
        <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>    
    </div>
  )
}

export default AboutMeText
