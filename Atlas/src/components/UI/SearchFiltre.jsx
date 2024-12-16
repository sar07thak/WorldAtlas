import React from 'react'

export const SearchFiltre = ({ search , setsearch ,filtre ,setfiltre ,   countries , setCountries}) => {
    const handleInputChange = (e) => {
        e.preventDefault();
        setsearch(e.target.value);
    }

    const handleSelectchange = (e) => {
        e.preventDefault();
        setfiltre(e.target.value)
    }


    const sortCountries = (value) => {
        const sortCountry = [...countries].sort((a, b) => {
          return value === "asc"
            ? a.name.common.localeCompare(b.name.common)
            : b.name.common.localeCompare(a.name.common);
        });
        setCountries(sortCountry);
      };
    

  return (
    <section className='section-searchFilter flex  items-center justify-center gap-10 md:gap-40'>
        <input 
        className='rounded-lg p-3 placeholder:font-sans placeholder:text-gray-400  '
        type="text" name="" id="" value={search} onChange={handleInputChange} placeholder='search-country..' />

    <div >
        <span 
        className='text-2xl text-gray-400 font-semibold py-4 px-10  bg-gradient-to-br from-[#080509] via-[#1a171c] to-[#080509]  rounded-lg'
        onClick={() => sortCountries("asc")}>Asc</span>
      </div>

      <div>
        
        <span
        className='text-2xl font-semibold py-4 px-10  bg-gradient-to-br from-[#080509]  via-[#1a171c] to-[#080509] text-gray-400 rounded-lg'
        onClick={() => sortCountries("des")}>Desc</span>
      </div>

        <div >
            <select name="" id="" className='select-section text-gray-400 text-2xl font-semibold py-4 px-10 rounded-lg'value={filtre} onChange={handleSelectchange} >
            <option value="all">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option> 
            </select>
        </div>
    </section>
  )
}
