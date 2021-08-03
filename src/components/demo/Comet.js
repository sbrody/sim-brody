import React, { useState } from 'react';
import { ReactComponent as CometSVG } from '../../images/comet.svg';
import { Animate } from 'react-simple-animate';
import { connect } from 'react-redux';
import { styled, Box } from '@material-ui/core';
import Particles from 'react-tsparticles';
import './comet.css';


const CometBox = styled(Box)({
    top: '0',
    left: '0',
    position: 'absolute',
    zIndex: '100',
    textAlign: 'left',
    '& .comet': {
        position: 'fixed',
        left: '-200px',
        top: '-100px',
    },
    '& .rock ': {
        position: 'fixed',
        left: '110vw',
        top: '110vh',
    }
});




const Comet = (props) => {

    const [particlesOn, setParticlesOn] = useState(false);

    // useEffect(() => {

    // }, particlesOn) 

    const startParticles = () => {
        if (props.startComet) {
            setParticlesOn(true);
        }

    }


    const particles = () => {
        if (particlesOn && props.startComet) {
            return (
                <Particles
                    id="particles"
                    options={{
                        background: {
                            color: {
                                value: "transparent",
                            },
                        },
                        fpsLimit: 60,
                        interactivity: {
                            detectsOn: "window",
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                bubble: {
                                    distance: 400,
                                    duration: 2,
                                    opacity: 0.8,
                                    size: 40,
                                },
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: ["#00FFFC", "#FC00FF", "#fffc00"],
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "destroy",
                                    top: "none"
                                },
                                random: false,
                                speed: { min: 10, max: 20 },
                                straight: false,
                                gravity: {
                                    enable: true,
                                    acceleration: 20
                                },
                                rotate: {
                                    value: {
                                        min: 0,
                                        max: 360
                                    },
                                    direction: "random",
                                    move: true,
                                    animation: {
                                        enable: true,
                                        speed: 60
                                    }
                                },
                                tilt: {
                                    direction: "random",
                                    enable: true,
                                    move: true,
                                    value: {
                                        min: 0,
                                        max: 360
                                    },
                                    animation: true,
                                    speed: 60
                                },
                                wobble: {
                                    distance: 30,
                                    enable: true,
                                    move: true,
                                    speed: {
                                        min: -15,
                                        max: 15
                                    }
                                }
                            },
                            number: {
                                density: {
                                    enable: true,
                                    value_area: 800,
                                },
                                value: 80,
                            },
                            life: {
                                duration: {
                                    sync: true,
                                    value: 5
                                },
                                count: 1
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: ["circle", "square"],
                            },
                            size: {
                                random: true,
                                value: 7,
                            },
                        },
                        detectRetina: true,
                        fullScreen: {
                            enable: true,
                            zIndex: 5,
                        },
                        emitters: {
                            direction: "none",
                            life: {
                                count: 0,
                                duration: 0.1,
                                delay: 0.4
                            },
                            rate: {
                                delay: 0.1,
                                quantity: 100
                            },
                            size: {
                                width: 0,
                                height: 0
                            }
                        }
                    }}
                />
            )
        }

        else {
            return null;
        }
    }

    const comet = () => {
        if (props.startComet) {
            return <CometSVG />
        }
        else return null;
    }

    return (
        <>
            <CometBox>
                <Animate
                    play={props.startComet}
                    duration={3}
                    easeType="cubic-bezier(0.32, 0, 0.67, 0)"
                    start={{
                        transform: "translate(0, 0)"
                    }}
                    end={{
                        transform: "translate(105vw, 110vh)"
                    }}
                    complete={{
                        display: "none"
                    }}
                    onComplete={
                        startParticles
                    }
                >
                    {comet()}
                </Animate>
            </CometBox>
            <div>{particles()}</div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        startComet: state.animation.selection
    }
}

export default connect(mapStateToProps)(Comet);