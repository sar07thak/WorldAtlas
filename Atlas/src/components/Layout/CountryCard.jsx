import {NavLink} from "react-router-dom"

export const CountryCard = ({country}) => {
  const { flags, name, population, region, capital } = country;
  return(
    <>
    <li className="country-card card ">
      <div className="container-card  bg-white-box">
        <img src={flags.svg} alt={flags.alt } className="object-cover mb-5 rounded-2xl"/>
        <div className="countryInfo">
        <p className="card-title">
            {name.common.length > 10
              ? name.common.slice(0, 10) + "..."
              : name.common}
          </p>
          <p>
            <span className="card-description">Population:</span>
            {population.toLocaleString()}
          </p>
          <p>
            <span className="card-description">Region:</span> {region}
          </p>
          <p>
            <span className="card-description">Capital:</span>
            {capital[0]}
          </p>

          
          <NavLink to={`/country/${name.common}`}>
            <button className="px-10 py-4 mt-2 border-gray-400 shadow-lg shadow-[black]">Read More</button>
          </NavLink>
        </div>
      </div>

      
    </li>
    </>
  )
}
