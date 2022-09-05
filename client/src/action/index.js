import axios from 'axios'


//ruta get de todos los usuarios
export function usuarios()
{
	return async function(dispatch){
		try{
			const usuarios = await axios("/usuarios")
			return dispatch({
				type:"USUARIOS",
				payload:usuarios.data
			})
		}catch(error){
			console.log({message:error.message})
		}
	}
}

//ruta get de las ensaldas de la casa
export function salads()
{
	return async function (dispatch)
	{
		try {
			const salad = await axios(`/menus`)
		
			return dispatch({

				type: "SALADS",
				payload: salad.data

			})
		} catch (error) {
			console.log(error)
		}

	}
}

//ruta get de las bases para las ensalada armadas por el usuario
export function bases()
{
	return async function (dispatch)
	{
		try {
			const base = await axios(`/bases`)

			return dispatch({

				type: "BASES",
				payload: base.data

			})
		} catch (error) {
			console.log(error)
		}

	}
}

//ruta get de las proteinas para las ensalada armadas por el usuario
export function proteins()
{
	return async function (dispatch)
	{
		try {
			const protein = await axios(`/proteins`)

			return dispatch({

				type: "PROTEINS",
				payload: protein.data

			})
		} catch (error) {
			console.log(error)
		}

	}
}

//ruta get de los complementos para las ensalada armadas por el usuario
export function complements()
{
	return async function (dispatch)
	{
		try {
			const protein = await axios(`/complements`)

			return dispatch({

				type: "COMPLEMENTS",
				payload: protein.data

			})
		} catch (error) {
			console.log(error)
		}

	}
}

//ruta get de las salsas para las ensalada armadas por el usuario
export function sauces()
{
	return async function (dispatch)
	{
		try {
			const sauce = await axios(`/salsas`)

			return dispatch({

				type: "SAUCES",
				payload: sauce.data

			})
		} catch (error) {
			console.log(error)
		}

	}
}

//ruta get de los toppings para las ensalada armadas por el usuario
export function toppings()
{
	return async function (dispatch)
	{
		try {
			const topings = await axios(`/toppings`)

			return dispatch({

				type: "TOPPINGS",
				payload: topings.data

			})
		} catch (error) {
			console.log(error)
		}

	}
}
//ruta get de las bebidas 
export function beverages()
{
	return async function (dispatch)
	{
		try {
			const beverage = await axios(`/bebidas`)

			return dispatch({

				type: "BEVERAGES",
				payload: beverage.data

			})
		} catch (error) {
			console.log(error)
		}

	}
}
//ruta get de los postres 
export function desserts()
{
	return async function (dispatch)
	{
		try {
			const dessert = await axios(`/postres`)

			return dispatch({

				type: "DESSERTS",
				payload: dessert.data

			})
		} catch (error) {
			console.log(error)
		}

	}
}

export function PostPedido(payload)
{
	return async function (dispatch)
	{
		try {
			const pedido = await axios.post(`/menus`, payload);
			return dispatch({
				type: 'POST_PEDIDO',
				payload: pedido,
			});
		} catch (error) {
			console.log(error.message);
			
		}
	};
}

export function PostRegistroUsuario(payload){
	return async function(dispatch){
		try{
			const registrado = await axios.post("/registro", payload);
			return dispatch({
				type:"POST_REGISTRO",
				payload: registrado
			})
		}catch(error){
			console.log({message:error.message})
		}
	}
}

export function PostLogeoUsuario(payload){
	return async function(dispatch){
		try{
			const logueado = await axios.post("/autenticar",payload)
			return dispatch({
				type:"POST_LOGEO",
				payload:logueado
			})
		}catch(error){
			console.log({message:error.message})
		}
	}
}
