const crypto = require('crypto');

// Função para gerar um hash de senha com um salt
function generatePasswordHash(password, salt) {
  const hash = crypto.createHash('sha256');
  hash.update(password + salt);
  return hash.digest('hex');
}

const password = 'senha123';
const salt = 'umValoRAleatORio'; // Deve ser único para cada usuário

const hashedPassword = generatePasswordHash(password, salt);
console.log('Senha:', password);
console.log('Hash da Senha:', hashedPassword);
