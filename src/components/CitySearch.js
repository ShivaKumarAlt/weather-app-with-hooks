import React,{useState} from 'react'

export default function CitySearch(props) {
    const [state, setState] = useState("")
    const onFormSubmit = (event) => {
        event.preventDefault();
        props.onSearchSubmit(state)
    }


    return (
        <form className="search-loaction" onSubmit={onFormSubmit}>
            <input
                type="text"
                name="city"
                placeholder="What city?"
                onChange={(event) => setState(event.target.value)}
                className="form-control text-muted form-rounded p-4 shadow-sm" />
        </form>
    )
}
