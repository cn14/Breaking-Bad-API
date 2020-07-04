import React from 'react'

const Search = ({query, onchange}) => {
    return (
        <section className = 'search'>
            <form >
                <input type="text" className = 'form-control' placeholder = 'Search Characters' value = {query} onChange = {onchange}/>
            </form>
        </section>
    )
}

export default Search
