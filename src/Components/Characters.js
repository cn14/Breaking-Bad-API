import React from 'react'
import Character from './Character'
import Spinner from './Spinner'

const Characters = ({isLoading, items}) => {
    return (
        isLoading ? (
            <Spinner/>
        ) : (
            <section className = 'cards'>
                {items.map((item, index)=> (
                    <Character key = {index} item = {item}/>
                )
            )}
            </section>
        )
    )
}

export default Characters
