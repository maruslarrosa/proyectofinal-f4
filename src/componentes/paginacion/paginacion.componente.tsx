import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import './paginacion.css';
import { getCharacters } from '../../redux/charactersSlice';

/**
 * Componente que contiene los botones para paginar
 *
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 *
 *
 * @returns un JSX element
 */
const Paginacion = () => {
  const dispatch = useAppDispatch();
  const prev: string = useAppSelector((state) => state.character.prev);
  const next: string = useAppSelector((state) => state.character.next);

  const handlePrevClick = () => {
    dispatch(getCharacters(prev));
  };

  const handleNextClick = () => {
    dispatch(getCharacters(next));
  };

  return (
    <div className='paginacion'>
      <button disabled={!prev} className={'primary'} onClick={handlePrevClick}>
        Anterior
      </button>
      <button disabled={!next} className={'primary'} onClick={handleNextClick}>
        Siguiente
      </button>
    </div>
  );
};

export default Paginacion;
