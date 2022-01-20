import React from "react";
import Reset from "./Reset";
import Start from "./Start";
import Wait from "./Wait";
import './Buttons.css'

const Buttons = (props) => {
    return (

        <div className="Buttons">
            {(props.status === 0) ?
                <button onClick={props.Start}>Start</button> : ''
            }
            {(props.status === 1) ?
                <div>
                    <button onClick={props.Stop}>Stop</button>
                    <button onClick={props.Reset}>Reset</button>
                </div> : ''

            }
            {(props.status === 2) ?
                <div>
                    <button onClick={props.Start}>Resume</button>
                    <button onClick={props.Reset}>Reset</button>
                </div> : ''

            }

        </div>
    )
}
export default Buttons;