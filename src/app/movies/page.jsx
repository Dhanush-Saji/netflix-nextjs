import React from 'react'
import axios from 'axios';
import styles from '@/app/styles/common.module.css'
const page = () => {
  let movieData;
  const getDataFn = async() =>{
    try {
      const response = await axios.get(`https://netflix54.p.rapidapi.com/search/`,{params: {
        query: 'stranger',
        offset: '0',
        limit_titles: '50',
        limit_suggestions: '20',
        lang: 'en'
      },
      headers: {
        'X-RapidAPI-Key': process.env.NETFLIXAPIKEY,
        'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
      }
    })
    movieData = await response.data
    const main_data = movieData.titles;
    console.log(main_data?.jawSummary)

    } catch (error) {
      
    }
  }
  getDataFn()
  return (
    <>
    <section className={`${styles.movieSection}`}>
      <div className={styles.container}>

      
    <h1>Movie Pages</h1>
    {
      movieData?.titles?.map((item)=>(
        <>
        {/* <MovieCard key={item.id} item={item} /> */}
        <h1>hi</h1>
        </>
      ))
    }
    </div>
    </section>
    </>
  )
}

export default page