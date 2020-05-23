import React from 'react';


  const CartItem=(props)=> {
   
    const {price,title,qty}=props.product;
    const {
      product,
      onIncreaseQuantity,
      onDecreaseQuantity,
      onDeleteProduct
    }=props;


       
        return (
          <div className="cart-item">

            {/* {this.props.jsx} */}
              <div className="left-block"> 
                <img  style={styles.image}/>
              </div>
                <div className="right-block">
             <div style={ {fontSize:25} }>{title}</div>
             <div style={{color:'#777'}}>{price}</div>
            <div style={{color:'#777'}}>{qty}</div>
                 <div className="cart-item-actions">
                   {/* Button */}

                   <img 
                   alt="increase" 
                   className="action-icons" 
                   src="https://as1.ftcdn.net/jpg/03/46/94/28/500_F_346942841_2iGSPUeLvwj7JbgUjSewYiIkaJzjGJG9.jpg"
                   onClick={()=> onIncreaseQuantity(product)}
                  />
                   <img 
                   alt="decrease" 
                   className="action-icons" 
                   src="https://image.flaticon.com/icons/svg/1665/1665612.svg"
                   onClick={()=>onDecreaseQuantity(product)}/>
                   <img 
                   alt="delete" 
                   className="action-icons" 
                   src="https://as2.ftcdn.net/jpg/01/90/89/15/500_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg"
                   onClick={()=>onDeleteProduct(product.id)}
                   />
                 </div>
              </div>


          </div>
        );
    }


const styles={
  image:{
    height:110,
    width:110,
    borderRadius:4,
    background:'#ccc'
  }
}

export default CartItem;