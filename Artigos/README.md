# Space Shooter
## Sinopse:
Space Shooter é um jogo de aventura espacial no estilo arcade, onde o jogador assume o papel de um astronauta que precisa escapar de uma invasão alienígena em um ambiente 2D cheio de obstáculos. A jogabilidade é baseada em habilidades de navegação e reflexos rápidos, onde o jogador deve desviar de obstáculos, derrotar alienígenas invasores e coletar consumíveis para melhorar o desempenho.

## Como Jogar
O jogador controla uma nave espacial em um ambiente 2D, onde deve desviar de obstáculos e atirar nas naves dos alienígenas invasores até derrotá-las. Durante o jogo, o jogador enfrentará bosses que disparam mísseis capazes de perseguir a nave e desviar de obstáculos.

### Controles:
Movimento: Utilize as setas direcionais para mover a nave em todas as direções.
Atirar: Pressione a barra de espaço para disparar os tiros contra os inimigos.

## Objetivo:
O objetivo do jogo é derrotar os alienígenas e bosses enquanto desvia de obstáculos e evita que sua nave seja destruída. O jogo termina quando a vida do jogador chega a zero.
Funcionalidades de Jogo

## Grafos
O jogo utiliza grafos para gerar e gerenciar a posição dos consumíveis no cenário.

Busca em Largura e em Profundidade: São utilizados algoritmos de busca em largura e em profundidade para determinar a posição ideal dos consumíveis.
Waypoints: Cada nó do grafo representa um ponto estratégico (waypoint) no cenário.
Geração de Consumíveis: Os consumíveis são gerados no nó mais distante da posição do jogador, aumentando a complexidade do jogo.
Busca em Largura: Explora o grafo de forma nivelada, priorizando nós próximos.
Busca em Profundidade: Explora o grafo de forma mais profunda, indo mais longe no cenário.

## Inteligência Artificial (IA)
A inteligência artificial é utilizada para aumentar a complexidade e imersão do jogo, especialmente nos confrontos com os bosses.

Algoritmo A:* O algoritmo de busca A* é utilizado para a movimentação dos mísseis guiados pelos bosses.
Heurística de Distância Euclidiana: A IA utiliza a heurística de distância euclidiana para determinar o caminho mais curto até a nave do jogador.
Mísseis Inteligentes: Os mísseis disparados pelos bosses perseguem o jogador e desviam de obstáculos, tornando o jogo mais dinâmico e desafiador.
