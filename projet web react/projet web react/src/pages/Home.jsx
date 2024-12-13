import HomeProduct from "../components/HomeProduct";
import Offers from "../components/Offers";
import Popular from "../components/Popular";

export default function Home (){
    return (
        <div><HomeProduct/>
        <Popular/>
        <Offers/>
        </div>
    )
}