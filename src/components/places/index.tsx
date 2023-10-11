import { useAppContext } from '../../context/context';
import { PlaceData } from '../../interface';
import Place from '../place';

const Places = () => {
    const { state } = useAppContext();
    const { places } = state;

    console.log('places', places);

    return (
        <div className="mt-5 flex gap-4">
            {places.map((place: PlaceData, index: number) => (
                <Place key={index} place={place} />
            ))}
        </div>
    );
 
}

export default Places;
