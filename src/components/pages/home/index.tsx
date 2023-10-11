import { useAppContext } from "../../../context/context";
import Form from "../../form"
import Places from '../../places';
import H1 from "../../ui/typography/h1";
import P from "../../ui/typography/paragraph";
import HomeStyles from "./styles"

const Home = () => {
    const { state } = useAppContext();
    const { places } = state;
    return (
        <HomeStyles>
            <div className="container">
                <H1>Travel Logger Mini</H1>
                <P>Add your places you have travelled and create a collection.</P>

                
                <Form/>
                {places.length > 0 ? (
                    <Places/>
                ): (
                    <P className="mt-5">You have added no places yet. Why don't you add one.</P>
                )}
                
            </div>
        </HomeStyles>
    )
}

export default Home