import './grilla-personajes.css'
import TarjetaPersonaje from './tarjeta-personaje.componente'
import { getCharacters } from '../../redux/charactersSlice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { useEffect } from 'react'
import { Character } from '../../types.ts/character.types'

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */
const GrillaPersonajes = () => {
    const dispatch = useAppDispatch()
    const characters: Character[] = useAppSelector(state => state.character.characters)

    useEffect(() => {
        dispatch(getCharacters())
    }, [])

    return <div className="grilla-personajes">
        {characters &&
            characters.map((c: Character) => <TarjetaPersonaje key={c.id} id={c.id} name={c.name} image={c.image} />)
        }
    </div>
}

export default GrillaPersonajes