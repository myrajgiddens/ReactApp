import React, { Component } from 'react';

export default class TodoInput extends Component{
    render() {
        const{item, handleChange, handleSubmit, editItem} = this.props;
        return (
        <div className="card card-body my-3">
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <div className="input-group-prepened">
                        <div className="input-group-text bg-primary text-white">
                        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>
                            <i class="fa fa-book" />
                        </div>
                    </div>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="add a todo item"
                    value={item}
                    onChange={handleChange}
                    />
                </div>
                <button type="submit" 
                className={
                    editItem 
                    ?"btn btn-block btn-success mt-3"
                    :"btn btn-block btn-primary mt-3"
                 }
                   >
                    {editItem ? "edit item" : "add item"}
                </button>
            </form>
        </div>);
    }
}


