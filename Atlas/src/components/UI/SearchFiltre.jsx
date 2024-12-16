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
    <section className='section-searchFilter container '>
        <input type="text" name="" id="" value={search} onChange={handleInputChange} />

    <div>
        <button onClick={() => sortCountries("asc")}>Asc</button>
      </div>

      <div>
        <button onClick={() => sortCountries("des")}>Desc</button>
      </div>

        <div >
            <select name="" id="" className='select-section'value={filtre} onChange={handleSelectchange} >
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
