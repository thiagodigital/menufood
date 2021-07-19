import React from "react";
import { Plus } from "react-feather";

const CardList = ({ title, url, category }) => {
    return (
        <div>
            <div className="uk-card uk-card-default uk-card-small  uk-flex uk-margin-bottom uk-border-rounded">
                <div className="uk-cover-container uk-border-rounded uk-width-1-3">
                    <img src={url} alt="" uk-cover="" />
                    <canvas width="120" height="70"></canvas>
                </div>
                <div className="uk-width-2-3">
                    <div className="uk-card-body">
                        <h4 className="">{title}</h4>
                        <div className="uk-flex uk-flex-between">
                            <span className="uk-text-small uk-text-bold uk-text-uppercase uk-text-primary">
                                {category}
                            </span>
                            <span>
                                <Plus />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardList;
