import React, { useRef, useEffect } from 'react';
import rocket1 from '../img/rocket1.png';
import rocket2 from '../img/rocket2.png';
import rocket3 from '../img/rocket3.png';
import engines from '../img/engines.png';
import bus from '../img/bus.png';

const Rocket = () => {
  /* use REf*/
  const rocketRef = useRef();
  const areaRef = useRef();

  useEffect(() => {
    function handleScroll() {
      let trigger = window.innerHeight / 5;
      let off = areaRef.current.offsetTop - trigger;
      let off2 = rocketRef.current.children[2].offsetTop - trigger;

      if (window.scrollY > off) {
        rocketRef.current.children[0].classList.add('active');
        rocketRef.current.children[1].classList.add('active');
      } else {
        rocketRef.current.children[0].classList.remove('active');
        rocketRef.current.children[1].classList.remove('active');
      }
      if (window.scrollY > off2) {
        rocketRef.current.children[2].classList.add('active');
      } else {
        rocketRef.current.children[2].classList.remove('active');
      }
    }

    window.addEventListener('scroll', handleScroll, true);
  }, [areaRef]);

  return (
    <div className='rocket-area' ref={areaRef}>
      <div className='block'>
        <div className='falcon'>
          <h1>Falcon9</h1>
          <p>
            Falcon9 is a two stage rocket designed and manufactured by spaceX
            for the reliable and safe transport of satellites and the dragon
            spaceCraft into Orbit
          </p>
        </div>

        <div className='dragon'>
          <h2>Dragon SpaceCraft</h2>
          <p>
            Dragon carries cargo in the spacecraft's pressurized capsule and
            unpressurized trunk,which can also accomdate secondary payloads.In
            the future,Dragon will carry astronauts in the pressurized capsule
            as well
          </p>
          <button>Learn More</button>
        </div>

        <div className='composite'>
          <h2>Composite Fairing</h2>
          <p>
            The payload fairing is for the delivery of satellites to
            destinations in low earth orbit (LEO) geosynchronus orbit (GTO) and
            beyond
          </p>
          <button>Learn More</button>
        </div>

        <div className='first-stage'>
          <h2>First Stage</h2>
          <p>
            Falcon's first stage incorporates nine Merlin engines and
            aluminium-lithium alloy tanks containing liquid oxygen and
            rocket-grade Keroscene (RP-1) propellent
          </p>
          <button>Learn More</button>
        </div>

        <div className='Engine-BurnTime'>
          <div>
            <h6>ENGINE</h6>
            <h2>9</h2>
          </div>
          <div>
            <h6>BURNTIME</h6>
            <h2>
              162<small>sec</small>
            </h2>
          </div>
        </div>

        <div className='thrust'>
          <h6>THURST AT SEA LEVEL</h6>
          <h2>7,607KN1</h2>
        </div>
      </div>

      <div className='rocket' ref={rocketRef}>
        <span>
          <img src={rocket1} alt='rocket1' />
        </span>

        <span>
          <img src={rocket2} alt='rocket2' />
        </span>

        <span>
          <img src={rocket3} alt='rocket3' />
        </span>
      </div>

      <div className='block2'>
        <div className='bus'>
          <img src={bus} alt='bus' />
        </div>
        <div className='payload'>
          <h4>payload</h4>
          <small>
            Falcon9 delivers payloads to space abroad the Dragon spacecraft or
            inside a composite fairing.
          </small>
        </div>

        <div className='second-stage'>
          <h2>Second Stage</h2>
          <p>
            The Second Stage powered by single Merlin vaccum engine ,delivers
            Falcon9's payload to the desired orbit . For maximum reliablity,the
            second stage has redudant igniter systems
          </p>
        </div>

        <div className='Engine-BurnTime'>
          <div>
            <h6>ENGINE</h6>
            <h2>1</h2>
          </div>
          <div>
            <h6>BURNTIME</h6>
            <h2>
              397<small>sec</small>
            </h2>
          </div>
        </div>

        <div className='thrust'>
          <h6>THURST AT SEA LEVEL</h6>
          <h2>934KN210</h2>
        </div>

        <div className='engine'>
          <img src={engines} alt='engine' />
        </div>

        <div className='nine-marines'>
          <small>Nine Marline Engines</small>
          <p>
            with its nine first-stage Merlin engines clustered Together,Falcon 9
            can sustain up to two engines successfully complete its mission
            .Falcon 9 is the only launch vehicle in its class with this key
            reliablity feature.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rocket;
