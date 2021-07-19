import React, { useState, useEffect } from "react";
import { usePage } from "@inertiajs/inertia-react";
import HeaderComponent from "../../components/Header";
import CardList from "../../components/CardList";
import FooterComponent from "../../components/Footer";

function Home() {
    const { data } = usePage().props;
    const [dishes, setDishes] = useState([]);
    useEffect(() => {
        setDishes(data);
    }, []);
    console.log("ddd", dishes);
    return (
        <>
            <HeaderComponent />
            <div className="uk-container uk-margin-top uk-margin-xlarge-bottom">
                {dishes.map((dish) => {
                    return (
                        <CardList
                            key={dish.id}
                            title={dish.name}
                            url={"img/" + dish.img}
                            category={dish.category.name}
                        />
                    );
                })}
            </div>
            <FooterComponent />
        </>
    );
}

export default Home;
