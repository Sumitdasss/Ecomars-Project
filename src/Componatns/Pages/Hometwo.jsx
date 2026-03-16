
import { products } from '../../data/Produck'
import Container from '../Common/Container'

import Produckcard from './Produckcard'



export default function Hometwo(){
    return(
        <Container>
           
        <div className='flex flex-wrap justify-between '>
            {products.map((item)=>{
return<Produckcard key={item.id} item={item}/>
        })}
        </div>
      
        </Container>
    )
}