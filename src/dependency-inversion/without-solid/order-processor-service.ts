import { Order } from "./order";

//mock external class  
class StringClient {
  charges: () => {
    create: (amount: number) => {

    }
  }
}

export class OrderProcessorService {

  constructor(
    private readonly stripeClient: StringClient
  ) { }


  process(order: Order): void {
    // Process the order
    console.log('Processing order');

    // primeiro problema o new, criando um acoplamento
    // segundo problema, a dependencia StringClient é uma dependencia de baixo nivel
    // que depende de detalhes, e nao de abstrações
    // o ideal seria depender de uma interface, e nao de uma classe concreta
    // assim, podemos trocar a implementacao da interface sem impactar o codigo que depende dela
    // terceiro problema, testabilidade
    // const stripe = new StringClient()
    // stripe.charges().create(1000)

    // tenta passar para o construtor a dependencia, não resolve o problema no teste.
    // agora quem cria o OrderProcessorService, vai ter que instancia o stripeClient

    //resolvemos com o padrão adapter
    this.stripeClient.charges().create(1000)


  }
}  