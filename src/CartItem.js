import React from 'react';


class CartItem extends React.Component {
   
  constructor(){
    super();
    this.state={
       price:998,
       title:'Phone',
       qty:2,
       img:''
     }
   }
  render(){
    const {price,title,qty}=this.state;
       
        return (
          <div className="cart-item">
              <div className="left-block">
                <img  style={styles.image}/>
              </div>
              <div className="right-block">
             <div style={ {fontSize:25} }>{title}</div>
             <div style={{color:'#777'}}>{price}</div>
            <div style={{color:'#777'}}>{qty}</div>
                 <div className="cart-item-actions">
                   {/* Button */}

                   <img alt="increase" className="action-icons" src="https://as1.ftcdn.net/jpg/03/46/94/28/500_F_346942841_2iGSPUeLvwj7JbgUjSewYiIkaJzjGJG9.jpg"/>
                   <img alt="decrease" className="action-icons" src="https://image.flaticon.com/icons/svg/1665/1665612.svg"/>
                   <img alt="delete" className="action-icons" src="https://as2.ftcdn.net/jpg/01/90/89/15/500_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg"/>
                 </div>
              </div>


          </div>
        );
    }
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