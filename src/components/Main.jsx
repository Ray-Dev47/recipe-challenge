import React, { Component } from 'react'
import Rating from './Rating';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { meals: [] };
    }

    componentDidMount() {
        const apiUrl = 'https://asm-dev-api.herokuapp.com/api/v1/food';
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                this.setState(state => ({
                    meals: data.data.meals,
                }))
            });
    }

    render() {
        const { meals } = this.state;
        return (
            <div>
            <div className="w-full mx-auto justify-evenly flex-wrap flex">
                {meals.map((meal, index) => ( 
                    <div className="shadow-xl m-5 rounded-bl-3xl border-l border-t-0 border-r border-b text-bold w-96 flex">
                        <div className="">
                            <img src={meal.strMealThumb} className="mx-auto rounded-tr-3xl mb-6 rounded-bl-3xl" alt="" />
                            <div className="flex text-2xl px-3 mb-2 font-bold justify-between">
                                <div className="">{ meal.title }</div>
                                <div>{meal.price}$</div>
                            </div>
                            <div className="p-3">Lorem ipsum dolor sit amet consectetur</div>
                            <div className="mb-4 p-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam in enim ut? Id, et rem.
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex pl-7 py-9 text-custom-orange">
                                    <Rating ratingValue={meal.ratings} />
                                </div>
                                <div className="bg-custom-orange rounded-tl-2xl px-11 py-7">
                                    <i className="fas fa-plus text-white"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                ))} 
                   
            </div>
            <div className="text-center">
            <button className="bg-custom-orange my-10 text-white font-bold py-3 px-11 rounded-full">
                Learn More
            </button>
        </div>
        </div>
        )
    }
}


export default Main;

