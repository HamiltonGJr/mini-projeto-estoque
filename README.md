# Mini Projeto Estoque;

## Exercício;

1. Exibir uma lista de produtos: Cada produto deve ter nome, descrição, preço e quantidade em estoque. **- OK!**

1.1 A lista deve ser atualizada dinamicamente à medida que os produtos são adicionados, removidos ou modificados. **- OK!**

2. Adicionar novos produtos: Permitir ao usuário inserir o nome, descrição, preço e quantidade inicial do novo produto. **- OK!**

2.1 Validar as entradas do usuário (nome, preço e quantidade devem ser preenchidos). **- OK!**

2.2 Adicionar o novo produto à lista de produtos no estado. **- OK!**

3. Remover produtos: Permitir ao usuário remover um produto da lista selecionando-o. **- OK!**

3.1 Exibir uma mensagem de confirmação antes de remover o produto. (window.confirm) Remover o produto selecionado da lista de produtos no estado.

4. Atualizar a quantidade de um produto: Permitir ao usuário editar a quantidade em estoque de um produto selecionado. **- OK!**

4.1 Validar a nova quantidade (deve ser um número inteiro positivo). **- OK!**

## Desafios;

1. Implementar tema claro ou escuro utilizando o useContext()

2. Incluir no título de cada aba de produtos, a quantidade de produtos total para aquela aba em específico utilizando o useEffect()

3. Cada produto deverá ter um valor para compra. Você iniciará sua carteira com 100 “moedas”, ao “adicionar” um produto, sua carteira irá reduzir o total subtraindo o valor do produto em questão. a função “remover” deverá ser função “vender” e cada venda não poderá te dar um lucro maior do que 20% do valor total daquele produto.

3.1 Ao clicar para vender deverá exibir o modal de confirmação de venda e nele você deverá decidir quantos produtos você irá vender. (Não poderá passar nunca da quantidade que você tem daquele produto em estoque).

3.2 Deverá ser feito uma condição de 50% por meio de if else, para quando vender o produto realmente será vendido e o valor irá para sua carteira ou o produto será apenas removido e o valor não será adicionado à sua carteira. (fazer com Math.random).

3.3 Para fazer a interação de valores e atualizações em tempo real de valores da carteira, deverá ser utilizado useEffect().

4. Implementar um sistema de busca para filtrar produtos por nome ou descrição.

4.1 Exibir um alerta quando um produto estiver com estoque baixo. (produto.qtd < 5)

5. Trocar o window.confirm da confirmação de remoção de produto para um modal personalizado. (Não usar biblioteca)

6. Deverá ser possível alterar o valor do produto.

7. Separar produtos pelas seguintes características: Comida, Bebida, Não comestível.

**Dica**: Colocar atributo ao objeto ou identificar na sua descrição. Exemplo de objeto com atributos:

```
{
  id:
  nome:
  descricao:
  preco:
  qtd:
  isBebida:
  isComida:
}
```

8. Adicionar um filtro tipo select onde podemos filtrar pelas características do produto (comida, bebida, etc) <= isso você decide quais características colocar.

## Contato

**LinkedIn**: [Hamilton Gonçalves.](https://www.linkedin.com/in/hamilton-jr/)
