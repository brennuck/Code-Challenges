// // React is loaded and is available as React and ReactDOM
// // imports should NOT be used
// class Username extends React.Component {
//     state = { value: "" };
  
//     changeValue(value) {
//       this.setState({ value });
//     }
  
//     render() {
//       const { value } = this.state;
//       return <h1>{value}</h1>;
//     }
//   }
  
//   function App() {
//     const ref = React.useRef(); // creates a plain javascript object
//     const inputRef = React.useRef();
    
//     function clickHandler() {
//       ref.current.changeValue(inputRef.current.value); // changes the value with the value of the input
//     }
  
//     return (
//       <div>
//         <button onClick={clickHandler}>Change Username</button>
//         <input type="text" ref={inputRef} />
//         <Username ref={ref} />
//       </div>
//     );
//   }
  
//   document.body.innerHTML = "<div id='root'></div>";
//   const rootElement = document.getElementById("root");
//   ReactDOM.render(<App />, rootElement);
  
//   document.querySelector("input").value = "John Doe";
//   document.querySelector("button").click();
//   setTimeout(() => console.log(document.getElementById("root").innerHTML));



// React is loaded and is available as React and ReactDOM
// imports should NOT be used
class ImageGallery extends React.Component {
    constructor(props) {
      super(props);
      this.state = { links: props.links } // get the links with props
    }
    
    delete = i => { 
      let divs = this.state.links;
      divs.splice(i, 1); // removes the inputed div
      this.setState({links: divs}) // sets the state with the new singular div
    };
    
    render() {
      return (
        <div>
          {this.state.links.map((item, index) => { // maps over the links and renders them with the images and remove buttons
            return (
              <div key={item} className="image">
                <img key={index} src={item} alt="" />
                <button className="remove" onClick={() => this.delete(index)}>
                  X
                </button>
              </div>
            )
          })}
        </div>
      )
    }
  }
  
  document.body.innerHTML = "<div id='root'> </div>";
    
  const rootElement = document.getElementById("root");
  const links = ["https://goo.gl/kjzfbE", "https://goo.gl/d2JncW"];
  ReactDOM.render(<ImageGallery links={ links } />,
                  rootElement);
  document.querySelectorAll('.remove')[0].click();
  console.log(rootElement.innerHTML);


  const events = require("events");

function createEmitter(onOpen, onClose) { 
  const newEmitter = new events();
  newEmitter.once('open', onOpen);
  newEmitter.once('close', onClose);
  return newEmitter;
}

function opened(emitter) {
  emitter.emit('open')
}
function closed(emitter) {
  emitter.emit('close')
}

let emitter = createEmitter(
  () => console.log("Opened!"), () => console.log("Closed!")
);
opened(emitter);
closed(emitter);

module.exports.createEmitter = createEmitter;
module.exports.opened = opened;
module.exports.closed = closed;