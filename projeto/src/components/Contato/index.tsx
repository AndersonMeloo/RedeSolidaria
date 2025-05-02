import { useState } from "react";

function Atualizar() {

    const [doar, setDoar] = useState('')

    return (

        <>
            <label>Doar algo <br /></label>
            <input type=""
                onChange={(event) => setDoar(event.target.value)}
            />
            {doar}
        </>

    )
}

export default Atualizar;