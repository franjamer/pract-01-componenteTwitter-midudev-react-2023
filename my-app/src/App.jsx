import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwiterFollowCard.jsx'

const users=[
    {
      
    },
    {
          userName: 'pheralb',
        name: 'Pablo H.',
        isFollowing: false
    },
    {
        userName: 'PacoHdezs',
        name: 'Paco Hdez',
        isFollowing: true
    },
    {
        userName: 'tMchein',
        name: 'Tomás',
        isFollowing: false
    }

]

export function App (){
    return (
        <section className='App'>
        {
            users.map(({userName, name, isFollowing}) =>
            
                (
                    <TwitterFollowCard
                        key={userName}
                        userName = {userName} 
                        initialIsFollowing = {isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                )
            )
        }      
        </section>
    )
}