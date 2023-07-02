"use client";

import React,{useState,useEffect} from 'react'
import axios from 'axios';
import styles from '@/app/styles/common.module.css'
const page = async() => {
  return (
    <>
    <section className={`${styles.movieSection}`}>
      <div className={styles.container}>

      
    <h1>Movie Pages</h1>
    {
      data?.map((item)=>(
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