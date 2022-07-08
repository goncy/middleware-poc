import type { GetStaticProps } from "next";
import type { FC } from "react";

const PROPS = {
  background: 'green',
  messages: {
    hello: 'wassssssup'
  }
}

type Props = typeof PROPS;

export const getStaticProps: GetStaticProps<Props> = () => {
  return {
    props: PROPS
  }
}

const LizardPage:FC<Props> = (props) => {
  return (
    <div style={{width: '100vw', height: '100vh', backgroundColor: props.background}}>
      {props.messages.hello}
    </div>
  );
}

export default LizardPage;
