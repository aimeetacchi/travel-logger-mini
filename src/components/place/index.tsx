import { PlaceData } from "../../interface";
import clsx from "clsx";
import H2 from "../ui/typography/h2";
import H3 from "../ui/typography/h3";
import P from "../ui/typography/paragraph";
import PlaceStyles from "./styles";

function Place({ place }: { place: PlaceData }) {
    console.log('place in place component', place);
    const { favourite, date, country, city } = place;

    // Use clsx to conditionally add classes
    const divClasses = clsx("place", { favorite: favourite.toLowerCase() === "yes" });
    return (
        <PlaceStyles className={divClasses}>
            <H2>{country}</H2>
            <H3>{city}</H3>
            <P>Date: {date}</P>
            {/* Access place.favourite, place.city, place.country, place.date */}
        </PlaceStyles>
    );
}

export default Place;
