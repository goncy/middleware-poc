import type { GetStaticProps } from "next";
import type { FC } from "react";

const PROPS = {
  background: 'yellow',
  habilities: {
    main: 'QUACK!'
  }
}

type Props = typeof PROPS;

export const getStaticProps: GetStaticProps<Props> = () => {
  return {
    props: PROPS
  }
}

const DuckPage:FC<Props> = (props) => {
  return (
    <div style={{width: '100vw', height: '100vh', backgroundColor: props.background}}>
      {props.habilities.main}
    </div>
  );
}

export default DuckPage;
