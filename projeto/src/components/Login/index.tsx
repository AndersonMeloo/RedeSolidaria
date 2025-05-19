// import videoLogin from '../../../imgs/vid/Animation - 1747364139322.webm'
import imgLogin from '../../../imgs/icon-conta.png'

import sass from './sass.module.scss'

type LoginProps = {
    
    id: string,
    labelText: string,
} & React.ComponentProps<'input'>

function Login({id, }) {

    return (

        <>
            <div className={sass.container}>

                <div className={sass.login}>
                    <img src={imgLogin} alt="" />
                </div>

                <div className={sass.loginApresentacao}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia qui, dolores nostrum corporis officia perferendis consequatur, molestias quaerat commodi odio alias nihil. Voluptatum voluptatem omnis minus eaque illum, nemo aliquid!
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia qui, dolores nostrum corporis officia perferendis consequatur, molestias quaerat commodi odio alias nihil. Voluptatum voluptatem omnis minus eaque illum, nemo aliquid!
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia qui, dolores nostrum corporis officia perferendis consequatur, molestias quaerat commodi odio alias nihil. Voluptatum voluptatem omnis minus eaque illum, nemo aliquid!
                    </p>
                </div>

            </div>

            {/* <video src={videoLogin}></video> */}
        </>
    );
}

export default Login;