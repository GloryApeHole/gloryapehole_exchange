import Head from 'next/head';
import Image from 'next/image';
import getTokens from '../components/utils/get-tokens';

interface Props {
  tokenList: {
    tokens: [];
  };
}
const Home = ({ tokenList }: Props) => {
  const { tokens } = tokenList;
  return (
    <div className='bg-mustMakeBlack h-screen w-screen'>
      <div>
        <div></div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const tokenList: any = await getTokens();

  return {
    props: { tokenList },
  };
}

export default Home;
