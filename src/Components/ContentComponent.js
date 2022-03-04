import React, { Component } from 'react'
import './ContentComponent.css';
export default class ContentComponent extends Component {
    render() {

        return (
            
            <div className='wrapper' >
                <div className="title">
                    TRY GLASSES APP ONLINE
                </div>
                <div className='content container'>

                    <div className="model row">
                        <div className="model__left col-6">
                            <img src="./img/glassesImage/model.jpg" alt="" />
                        </div>
                        <div className="model__right col-6">
                            <img src="./img/glassesImage/model.jpg" alt="" />
                            <div className="glasses-card">
                                <div className="glasses-model">
                                    <img src="./img/glassesImage/v1.png" alt="" />
                                </div>
                                <div className="glasses-info">
                                    kaka
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="glasses-list row">
                        <div className="glasses-item col-2">
                            <img src="./img/glassesImage/v1.png" alt="" />
                        </div>
                        <div className="glasses-item col-2">
                            <img src="./img/glassesImage/v1.png" alt="" />
                        </div>
                        <div className="glasses-item col-2">
                            <img src="./img/glassesImage/v1.png" alt="" />
                        </div>
                        <div className="glasses-item col-2">
                            <img src="./img/glassesImage/v1.png" alt="" />
                        </div>
                        <div className="glasses-item col-2">
                            <img src="./img/glassesImage/v1.png" alt="" />
                        </div>
                        <div className="glasses-item col-2">
                            <img src="./img/glassesImage/v1.png" alt="" />
                        </div>
                        <div className="glasses-item col-2">
                            <img src="./img/glassesImage/v1.png" alt="" />
                        </div>
                        <div className="glasses-item col-2">
                            <img src="./img/glassesImage/v1.png" alt="" />
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
