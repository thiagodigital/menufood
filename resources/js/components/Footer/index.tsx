import React from "react";
import { ShoppingBag } from "react-feather";

function FooterComponent() {
    return (
        <div className="uk-padding-small uk-background-secondary uk-position-fixed uk-position-bottom">
            <div className="uk-flex uk-flex-between">
                <div className="uk-light">
                    <span>Ver Carrinho</span>
                </div>
                <div>
                    <span className="uk-box-shadow ">
                        <ShoppingBag className="uk-light" />
                        <span className="uk-badge count-item">1</span>
                    </span>
                </div>
            </div>
        </div>
    );
}
export default FooterComponent;
