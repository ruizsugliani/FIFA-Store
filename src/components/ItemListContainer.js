import Item from "./Item";

function ItemListContainer(props) {
    return (
        <div className="ItemListContainer container-fluid d-flex justify-content-center align-items-top">
            <div className="itemListDescription container-fluid">
                <strong>
                    {props.greeting}
                </strong>
            </div>
            <div className="itemListItems d-flex">
                <Item title ="Al Rihla Official Match Ball"
                    price ="50"
                    pictureUrl="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4e9f4bf4ae664b0798d4ae6201337d82_9366/Pelota_Al_Rihla_League_Blanco_H57791_01_standard.jpg"
                    />
                <Item title ="Al Hilm Official Match Ball" 
                    price="50" 
                    pictureUrl="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ae4874fa8d2b40d483f5ae88012a2af4_9366/Pelota_Al_Hilm_Pro_Dorado_HC0437_01_standard.jpg"
                    />
            </div>
        </div>
    );
}

export default ItemListContainer