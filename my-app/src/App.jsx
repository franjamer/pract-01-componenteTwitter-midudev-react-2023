import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwiterFollowCard.jsx'

export function App (){

  

    return (
        <section className='App'>
       <TwitterFollowCard 
       initialIsFollowing={true} 
       userName= "midudev" 
       name= "Miguel Angel Duran"/>
       <TwitterFollowCard 
       initialIsFollowing={false} 
       userName= "pheralb" 
       name= "Pablo Hernandez"/>
       <TwitterFollowCard 
      initialIisFollowing 
       userName= "elonmusk" 
       name= "Elon Musk"/>
       <TwitterFollowCard 
       initialIsFollowing 
       userName= "vxnder" 
       name= "VanderHard"/>

      
        </section>
    )
}