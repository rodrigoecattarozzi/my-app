import React from 'react'

function Register() {
  return (
    <div className="row">
        <form className="col s12">
            <div class="row">
                <div class="input-field col s3">
                    <input id="first_name" type="text" class="validate" autoFocus />
                    <label for="first_name">Nombre</label>
                </div>

                <div class="input-field col s3">
                    <input id="last_name" type="text" class="validate" />
                    <label for="last_name">Apellido</label>
                </div>
            </div>

            <div className="row">
                <div className="input-field col s6">
                    <input id="email" type="email" className="validate" />
                    <label for="email">Email</label>
                </div>
            </div>

            <div className="row">
                <div className="input-field col s3">
                    <input id="password1" type="password" className="validate" />
                    <label for="password1">Contraseña</label>
                </div>

                <div className="input-field col s3">
                    <input id="password2" type="password" className="validate" />
                    <label for="password2">Repetir Contraseña</label>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Register