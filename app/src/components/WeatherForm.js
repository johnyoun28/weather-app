import React, {useState} from 'react'
import {connect} from "react-redux"
import {fetchWOEID} from '../actions'



const WeatherForm = (props) => {
    const [formValues, setFormValues] = useState('')

    const changeHandler = (evt) => {
        setFormValues(evt.target.value)
    }

    const submitHandler = evt => {
        evt.preventDefault()
        props.fetchWOEID(formValues)
    }

 

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" onChange={changeHandler} value={formValues} placeholder="Enter Location"> 
                </input>
                <button>submit</button>
            </form>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        woeid: state.woeid
    }

}

export default connect(mapStateToProps, {fetchWOEID}) (WeatherForm)
