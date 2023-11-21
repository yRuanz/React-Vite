import React from 'react';

const Cliente = ({ dados }) => {
  const totalGasto = dados.compras
    .map((compra) => Number(compra.preco.replace('R$ ', '')))
    .reduce((a, b) => a + b, 0);

  return (
    <div>
      <h2>{dados.cliente}</h2>
      <h3>{dados.idade}</h3>
      <ul>
        {dados.compras.map((compra) => (
          <li key={compra.nome}>
            {compra.nome} - {compra.preco}
          </li>
        ))}
      </ul>
      <p style={{ color: dados.ativa ? 'green' : 'red' }}>
        Situação: {dados.ativa ? 'Ativa' : 'Inativa'}
      </p>
      <p>Total gasto: R$ {totalGasto}</p>
      {totalGasto > 10000 && <p style={{ color: 'red' }}>Cuidado! O seu gasto está alto!.</p>}
    </div>
  );
};

export default function App() {
  const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
    ],
    ativa: true,
  };

  const mario = {
    cliente: 'Mario',
    idade: 31,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
      { nome: 'Guitarra', preco: 'R$ 3500' },
    ],
    ativa: false,
  };

  return (
    <div>
      <Cliente dados={luana} />
      <Cliente dados={mario} />
    </div>
  );
}
