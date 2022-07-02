import React from 'react'

function Login() {
  return (
    <div className="row">
        <form className="col s12">
            <div className="row">
                <div className="input-field col s6">
                <input id="email" type="email" className="validate" autoFocus />
                <label for="email">Email</label>
                </div>
            </div>

            <div className="row">
                <div className="input-field col s6">
                <input id="password" type="password" className="validate" />
                <label for="password">Contraseña</label>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Login