import React from 'react';
import Name from "./Components/Name";
import Cloud from "./Components/Cloud";
import Task from "./Components/Task";
import './App.css';
import Particles from "react-particles-js";

function App() {
    const params = {
        particles: {
            number: {
                value:450
            },
            color: {
                value: '#5ec5e1'
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0.3,
                    color: '#5ec5e1'
                },
                "polygon": {
                    "nb_sides": 6 /* количество сторон полигона (type: polygon), от 3 до 12 */
                },
                image: {
                    src: 'http://www.iconsdb.com/icons/preview/white/contacts-xxl.png'
                }
            },
            opacity: {
                value: 0.4,
                random: true,
                anim: {
                    enable: false,
                    speed: 3
                }
            },
            size: {
                value: 3,
                random: false,
                anim: {
                    enable: false,
                    speed: 40
                }
            },
            line_linked: {
                enable: true,
                distance: 140,
                color: '#fff',
                width: 1
            },
            move: {
                enable: true,
                speed: 8,
                direction: 'none',
                "bounce": false
            }
        },
        interactivity: {
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse'
                },
                onclick: {
                    enable: false,
                    mode: 'push'
                }
            },
            modes: {
                repulse: {
                    distance: 50,
                    duration: 0.4
                },
                bubble: {
                    distance: 100,
                    size: 10
                }
            }
        }
    };
  return (
    <div className="App">
        <Particles className="particles" params={params}/>
        <Task />
        <Name />
        <Cloud />
        <div className="rand"></div>

    </div>

  );
}

export default App;
