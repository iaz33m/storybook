import React, { Component } from "react";

class Test extends Component{

    capitalize(str: string){
        const strArray = str.split("");
        strArray.forEach((item,index)=>{
            const tempstr = str.substring(0, index) +
                item.toUpperCase() +
                str.substring(index + 1);
            console.log(tempstr)
        })
    }
    capitalize2(str: string){
        let arr = str.split("")
        for (let i=0;i<arr.length;i++){
            arr = str.split("")
            arr[i] = arr[i].toUpperCase()
            console.log(arr.join(""))
        }
    }
    render() {
        return (
            <div className="checkbox-container">
                <button onClick={()=>this.capitalize2('hello')}>
                    here
                </button>
            </div>
        );
    }
}

export default Test;
