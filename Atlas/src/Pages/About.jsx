import React from 'react'
import countryFact from "../Api/countrydata.json"
export const About = () => {
  return (
    <>
    <section className='section-about p-5 mt-40  '>
    <h2 className="container-title">
        Here are the Interesting Facts
        <br />
        we’re proud of
    </h2>

      <div className='gradient-cards p-10 '>
        {
          countryFact.map((country)=>{
            const { id, countryName, capital, population, interestingFact , famousSport ,famousPeople } = country;
            return(
            <div className="card">
                <div className="container-card bg-blue-box">
                <p className="card-title" key={id}>{countryName}</p>
                <p>
                  <span className="card-description">Capital:</span>
                  {capital}
                </p>
                <p>
                  <span className="card-description">Population:</span>
                  {population}
                </p>
                <p>
                  <span className="card-description">Interesting Fact:</span>
                  {interestingFact}
                </p>
                <p>
                  <span className="card-description">Famous People:</span>
                  {famousPeople}
                </p><p>
                  <span className="card-description">Famous Sport:</span>
                  {famousSport}
                </p>
              </div>
        </div>

            )
          })
        }
      </div>
    </section>
    </>
  )
}
