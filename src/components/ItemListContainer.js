function ItemListContainer(props) {
    return (
        <div className="ItemListContainer container-fluid d-flex justify-content-center align-items-top">
            <div className="itemListDescription container-fluid">
                <strong>
                    {props.greeting}
                </strong>
            </div>
        </div>
    );
}

export default ItemListContainer