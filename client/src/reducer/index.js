/* import { saladsBig } from "../action" */

const initialState = {
  salads: [],
  saladsBig:[],
  bases: [],
  proteins:[],
  complements:[],
  sauces:[],
  toppings:[],
  beverages:[],
  desserts:[],
  menu:[],
  pedidoBebidas:[],
  usuarios:[],
  pedidos:[]
}


function rootReducer( state = initialState, action )
{
  switch (action.type) {
    case "USUARIOS":
      return{
        ...state,
        usuarios: action.payload
      }
     case "VACIAR_U":
      return{
        ...state,
        usuarios:[]
      }
    case 'SALADS':
      return {
        ...state,
        salads: action.payload
      }
    case "SALADS_BIG":
      return{
        ...state,
        saladsBig: action.payload
      }
    case 'BASES':
      return {
        ...state,
        bases: action.payload
      }
    case 'PROTEINS':
      return {
        ...state,
        proteins: action.payload
      }
    case 'COMPLEMENTS':
      return {
        ...state,
        complements: action.payload
      }
    case 'SAUCES':
      return {
        ...state,
        sauces: action.payload
      }
    case 'TOPPINGS':
      return {
        ...state,
        toppings: action.payload
      }
    case 'BEVERAGES':
      return {
        ...state,
        beverages: action.payload
      }
    case 'DESSERTS':
      return {
        ...state,
        desserts: action.payload
      }
      case "MENU":
        return {
          ...state,
          menu: action.payload
        }
    case 'PEDIDO_BEBIDAS':
      return {
        ...state,
      }
    case 'PEDIDO_POSTRES':
      return {
        ...state,
      }
    case 'PEDIDO_ENSALADAM':
      return {
        ...state,
      }
    case 'PEDIDO_ENSALADAG':
      return {
        ...state,
      }
    case 'PEDIDO_MENU':
      return {
        ...state,
      }
    case 'PEDIDO_MENU_BIG':
      return {
        ...state,
      }
    case "POST_REGISTRO":
      return{
        ...state
          }
    case "POST_LOGEO":
      return{
        ...state
          }
    case "PEDIDOS":
      return{
        ...state,
        pedidos: action.payload
      }
    case "ELIMINAR_DEL_PEDIDO":
      return {
        ...state
      }
      case "AGREGAR_AL_PEDIDO":
        return {
          ...state
        }
      case "MENU_MDIANO":
        return{
          ...state
        }
      case "MENU_GRANDE":
        return{
          ...state
        }
      case "PEDIDO_DE_BEBIDAS":
        return{
          ...state
        }
        case "PEDIDO_DE_POSTRES":
          return {
            ...state
          }
          case "SALAD_M_USER":
            return {
              ...state
            }
            case "SALAD_G_USER":
              return {
                ...state
              }      
    default:
      return {
        state
      }
  }
}


export default rootReducer;