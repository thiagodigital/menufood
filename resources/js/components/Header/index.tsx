import React from "react";
import { User, ShoppingBag } from "react-feather";

export default function HeaderComponent() {
    return (
        <header className="uk-background-primary">
            <div uk-sticky="animation: uk-animation-slide-top;  cls-active: uk-navbar-sticky  uk-background-primary; cls-inactive: uk-background-transparent; top: 200">
                <nav className="uk-navbar uk-container">
                    <div className="uk-navbar-left uk-light">
                        <div className="uk-navbar-item uk-logo">MenuFood</div>
                    </div>
                    <div className="uk-navbar-right">
                        <ul className="uk-navbar-nav">
                            <li>
                                <a href="#">
                                    <span className="uk-box-shadow uk-light">
                                        <User />
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <section className="uk-padding-small uk-background-dark">
                    <div className="uk-background-muted uk-border-rounded">
                        <div>
                            <form className="uk-search uk-search-navbar uk-width-1-1">
                                <span uk-search-icon=""></span>
                                <input
                                    className="uk-search-input uk-border-rounded"
                                    type="search"
                                    placeholder="Pesquisar"
                                />
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </header>
    );
}
