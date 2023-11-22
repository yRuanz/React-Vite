
const Exercicio1 = () => {
  const nome = 'React';
  return (
    <>
      <h1>Exercicio 1</h1>
      <p>Este é o exercicio 1</p>
      {nome === 'React' ? <p>Olá, meu nome é {nome}</p> : null}
    </>
  );
};
export default Exercicio1