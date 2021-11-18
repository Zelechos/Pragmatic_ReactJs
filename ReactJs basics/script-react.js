// Trabajando con ReactJS
    'use strict'

    const $app = document.getElementById('app');
    const useState = React.useState;

// Crearemos el mismo componente avatar pero con ReactJs
    // const element =  React.createElement;

    // Primer Componente de React
    // podemos destructurar las props
    const Avatar = ({id, name = "sin nombre", age = "sin edad", size}) => {

        // Aplicamos destructuracion !!!
        const [enabled, setEnabled] = useState(true);
        const defaultImage = "https://104.218.49.26//uploads/user_7652aa71f7.png"
        
        // aqui usaremos el renderizado condicional


        const src = `https://randomuser.me/api/portraits/women/${id}.jpg`;

        // return element('img',{src}); sin JSX
        
        let pictureClassName = '';

        if(size === "small"){
            pictureClassName = 'is-small';
        } else if (size === "large"){
            pictureClassName = 'is-large';
        } else if (size === "very-small"){
            pictureClassName = 'is-very-small'
        } else if (size === "very-large"){
            pictureClassName = 'is-very-large'
        }

        const imgClassName = enabled ? '' : 'disabled';
        
        // aqui utilizaremos JSX
        return ( 
            <picture className={pictureClassName}>
                {
                    id ? (
                            <img 
                            onClick={() => setEnabled(!enabled)}
                            className={imgClassName} 
                            src={src}
                            />
                    ) : (
                            <img 
                            onClick={() => setEnabled(!enabled)}
                            className={imgClassName} 
                            src={defaultImage}
                            />
                    )
                }
                <span>{enabled ? name : "Desaparecida"}</span>
                <span>edad : {age}</span>
            </picture>
        );
    }

    // Realizamos el renderizado usando JSX
    ReactDOM.render(
        <div>
            <Avatar id={4} name="Morgan" age="7" size="very-small"/>
            <Avatar id={1} name="Yolamda" age= "23" size="small" />
            <Avatar id={2} name="Scarlett" age="7"/>
            <Avatar id={10} name="Morgan" age="7" size="large"/>
            <Avatar id={5} name="Morgan" size="very-large"/>

            {/* aqui creamos un componente sin un nombre */}
            <Avatar id={55} age="7" size="very-large"/>
            <Avatar id={55} age="7" size="very-large" name="lelith"/>

            {/* creamos un componente sin id */}
            <Avatar name="Morgan" age="7" size="very-small"/>
            <Avatar age="7" size="large"/>
            <Avatar age="7" size="very-large"/>

        </div> , $app);

    // Creamos los componentes que renderizaremos sin JSX
    // const iterator = ()=>{
    //     let elements = []
    //     for (let index = 0; index < 60; index++) {
    //         elements.push(element(Avatar , {id : (index+1) }))
    //     }
    //     return elements;
    // }
    // let elements = iterator();
    
    // renderizamos nuestro componente en la aplicacion con ReactDOM sin JSX
    // ReactDOM.render(
        // element('div' , null, elements
            // [
            //     element(Avatar , {id : 1}),
            //     element(Avatar , {id : 2}),
            //     element(Avatar , {id : 3})
            // ]
            // )
        // , $app);

    
