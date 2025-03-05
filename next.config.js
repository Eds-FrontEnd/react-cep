module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/cep/:cep',
          destination: 'https://viacep.com.br/ws/:cep/json/',
        },
      ];
    },
  };
  