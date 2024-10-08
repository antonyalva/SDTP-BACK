/*
    RUTAS DE USUARIO  /AUTH 
    host + /api/auth 
*/
const { Router } = require('express');
const {check} = require('express-validator')
const {validarCampos} = require('../middlewares/validar-campos')

const router = Router();

const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');


//Rutas 
// TODO: AUTH 
// TODO: CRUD: Eventos 

router.post(
    '/new',
    [//middleware
        check('name', 'El nomre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({min:6}),
        validarCampos
    ],
    crearUsuario);

router.post(
    '/', 
    [//middleware
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({min:6}),
        validarCampos
    ],    
    loginUsuario);

router.get('/renew', revalidarToken);




module.exports = router; 