import { useState } from "react";

function Atualizar() {

    const [jogar, setJogar] = useState('')

    return (

        <>
            <label>Jogar Algo</label>
            <input type=""
                onChange={(event) => setJogar(event.target.value)}
            />
            {jogar}
        </>

    )
}

export default Atualizar;