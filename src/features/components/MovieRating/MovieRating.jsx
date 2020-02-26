import React from "react";
import {ReactComponent as FilledStar} from "../../../assets/svg/Star-1.svg";
import {ReactComponent as EmptyStar} from "../../../assets/svg/Star-2.svg";


export default class MovieRating extends React.Component {

    onStarClick = (event) => {
        const rating = +event.currentTarget.dataset['rating'];
        if (this.props.onSelect) {
            this.props.onSelect(rating);
        }
    };

    render() {
        const filledStars = this.props.stars;
        const emptyStars = 5 - filledStars;
        const rating = [];
        for (let i = 0; i < filledStars; i++) {
            rating.push(<FilledStar key={`filled-${i}`} data-rating={i + 1} onClick={this.onStarClick}/>);
        }

        for (let i = 0; i < emptyStars; i++) {
            rating.push(<EmptyStar key={`empty-${i}`} data-rating={filledStars + i + 1} onClick={this.onStarClick}/>);
        }

        return <div>
            {rating}
        </div>
    }
}