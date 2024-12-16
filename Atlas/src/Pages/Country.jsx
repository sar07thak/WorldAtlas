import React, { useEffect, useState, useTransition } from 'react'
import { getcountrydata } from '../Api/postApi';
import Loader from './Loaderpage/Loader';
import { CountryCard } from '../components/Layout/CountryCard';
import { use } from 'react';
import { SearchFiltre } from '../components/UI/SearchFiltre';

export const Country = () => {

const [search , setsearch] = useState();
const [filtre , setFiltre] = useState("all");

const [ countries , setCountries] = useState([]);
const [ispending , starttransition] = useTransition() ;
// const [pending ,setpending] = useState(true) ;

useEffect(()=>{
   starttransition(async() => {
    const resp = await getcountrydata();
    console.log(resp.data);
    setCountries(resp.data);   
   })
},[]);

if ( ispending ){
  return(
    <>
    <h1>
      <Loader />
    </h1>
    </>
  )
}

console.log(search);

const searchCountry = (country) => {
  if (search) {
    return country.name.common.toLowerCase().includes(search.toLowerCase());
  }
  return country ;
};

const filtreRegion = (country) => {
  if (filtre === "all") {
    return country ;
  }
  return country.region === filtre ;
} 

const filterCountries =  countries.filter((country) => searchCountry(country)&& filtreRegion(country) )


  return (
   <section className='country-section'>
  <SearchFiltre 
  search={search} 
  setsearch={setsearch} 
  filtre={filtre} 
  setfiltre={setFiltre}
  countries= {countries}
  setCountries = {setCountries}
  />



    <ul className='grid grid-four-cols'>
      {
        filterCountries.map((curCountry , index) => {
          return <CountryCard country={curCountry} /> 
        })
      }
    </ul>
   </section>
  )
}
