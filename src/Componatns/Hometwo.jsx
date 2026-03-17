import { Products } from "../data/Product";
import Container from "./Common/Container";
import Productcard from "./Productcard";
export default function Hometwo(){
    return( 
        <Container>
        <div className="flex justify-between">
{Products.map((item)=>{
    return<Productcard key={item.id} item={item}/>
})}

        </div>
        </Container>
    )

}