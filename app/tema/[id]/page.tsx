type Props = {
  params: any;
};

const Tema = ({ params }: Props) => {
  const { id } = params;

  return <div>{id}</div>;
};

export default Tema;
