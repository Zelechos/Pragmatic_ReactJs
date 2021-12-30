import './App.css'

const Title = () =>{

    const data = {
        Name : "Alex",
        LastName : "Tumiri Huanca",
        NickName: "Pragmatic Coder",
        Age : 25,
        Github : "https://github.com/Zelechos"
    }
    const keys = Object.keys(data);

    const labelRender = <div className="Title-container">
                            <fieldset>
                            <legend className="Title-legend">
                                Hello i am {data.NickName}...
                            </legend>
                                <p className="Title-text">{keys[0]} : {data.Name}</p>
                                <p className="Title-text">{keys[1]} : {data.LastName}</p>
                                <p className="Title-text">{keys[2]} : {data.NickName}</p>
                                <p className="Title-text">{keys[3]} : {data.Age}</p>
                                <p className="Title-text">{keys[4]} : {data.Github}</p>
                            </fieldset>
                        </div> 
    return(
        labelRender
    );
}

export default Title;