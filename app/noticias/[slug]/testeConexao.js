import { Redis } from "@upstash/redis";

export async function testarConexao() {
  try {
    // Substitua 'SUA_URL' pelo URL do seu banco de dados Redis da Upstash
    const redis = Redis.fromEnv();

    // Teste de conexão: tentar definir e obter um valor
    await redis.set("testKey", "testValue");
    const testValue = await redis.get("testKey");

    console.log("Conexão com o Redis bem-sucedida!");
    console.log("Valor obtido do Redis:", testValue);

    // Fechar a conexão após o teste
    await redis.quit();
  } catch (error) {
    console.error("Erro ao conectar-se ao Redis:", error);
  }
}

// Chamar a função para testar a conexão
