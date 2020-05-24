import React from 'react';
import CartItem from './CartItem';
import Cart from './Cart';
import NavBar from './Navbar';

  
class  App extends React.Component {

  constructor(){
    super();
    this.state={
     
        products:[
            {
                price:99,
                title:'Watch',
                qty:1,
                img:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MXMW2_VW_34FR+watch-44-alum-spacegray-nc-5s_VW_34FR_WF_CO?wid=750&hei=712&trim=1,0&fmt=p-jpg&qlt=80&op_usm=0.5,0.5&.v=1583262305957,1569365638987',
                id:1
              },
              {
                price:998,
                title:'Mobile Phone',
                qty:10,
                img:'https://i.pcmag.com/imagery/reviews/04R1s9xuQfmVH4MHFeuaghc-18..v_1570065414.jpg',
                id:2
              },
              {
                price:34998,
                title:'Laptop',
                qty:4,
                img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQHoc4r2phjXIuGUiqxkgp-crzvv6-e1gKbPj-2angXle45gng9YNPPwhhlDISfisQATq4x-fiz&usqp=CAc',
                id:'3'
              }


        ]


       
        
    }
    //  this.testing();
    //  this.increaseQuantity=this.increaseQuantity.bind(this);
   }

   handleIncreaseQuantity=(product)=>{
    console.log('Hey please inc of qty of',product);
    const {products}=this.state;
    const index=products.indexOf(product);
    
    
    products[index].qty+=1;
    this.setState({
      products:products
    })
  }

  handleDecreaseQuantity=(product)=>{
    console.log('Hey please inc of qty of',product);
    const {products}=this.state;
    const index=products.indexOf(product);
    
    if(products[index].qty===0){
      return;
    }
    
    products[index].qty-=1;
    this.setState({
      products:products
    })
  }

  handleDeleteProduct=(id)=>{ 
    const {products}=this.state;

    const items=products.filter((item)=>item.id!==id);

    this.setState({
      products:items  
    })
  }

  getCartCount =()=>{
    const {products}=this.state;

    let count=0;
    
    products.forEach((product)=>{
      count+=product.qty;
    })

    return count;
  }

  getCartTotal=()=>{
    const {products}=this.state;

    let cartTotal=0;
    products.map(product=>{
      if(product.qty>0){
        cartTotal=cartTotal+product.qty*product.price;  

      }
      return "";      
    });

    return cartTotal;
  }
   render(){
     const {products}=this.state;
     
  return (
    <div className="App">
        <NavBar count={this.getCartCount()}/>
        <Cart
         products={products}  
         onIncreaseQuantity={this.handleIncreaseQuantity}      
         onDecreaseQuantity={this. handleDecreaseQuantity}
         onDeleteProduct={this.handleDeleteProduct}
        />    

     <div style={{padding:10,fontSize:20}}>TOTAL: {this.getCartTotal()}</div>
    </div>
   );
}

}
export default App;
