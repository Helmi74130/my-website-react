import React from 'react'
import styles from '../css/homeViewport.module.css'

const HomeViewport = () => {
  return (
    <>
    <section className={`${styles.section} h-screen w-screen mt-20`}>
    <div className={styles.background}>
      <div className='text-cyan-400 text-5xl'>
        <h1 className=''>Votre e-agence de conception de site web, refonte, design et référencement</h1>
        <p>Vous souhaitez augmenter votre notoriété et développer votre chiffre d'affaire</p>
      </div>
    </div>
    </section>
    </>
  )
}

export default HomeViewport