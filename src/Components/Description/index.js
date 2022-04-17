import { DescriptionWrapper } from "./styles";
import { useEffect, useState } from "react";

import arrow from '../../Assets/Icons/icon-arrow.svg'

const Description = (props) => {
    const [anim, setAnim] = useState('shower 300ms ease-in-out');

    useEffect(() => {
        setAnim('shower 300ms ease-in-out')
        let timer = setTimeout( () => {
            clearTimeout(timer)
            setAnim('')
        }, 300)
    }, [props.position]);

  return (
    <DescriptionWrapper button={props.button} anim={anim}>
      <section className="content">
        <h3>{props.title}</h3>
        <p>{props.children}</p>
        <a href="/">SHOP NOW <img src={arrow}/></a>
      </section>
    </DescriptionWrapper>
  );
};

export default Description;
