import leia = require("readline-sync");
import { colors } from './src/util/Colors';

export function main (){
    let opcao: number;
    while (true){
        console.log(colors.bg.black, colors.fg.yellow,
            "*******************************************");
        console.log("                                           ");
        console.log("            BANCO DO BRAZIL COM Z          ");
        console.log("                                           ");
        console.log("*******************************************");
        console.log("                                           ");
        console.log("    1 - Criar conta                        ");
        console.log("    2 - Listar todas as contas             ");
        console.log("    3 - Buscar conta por numero            ");
        console.log("    4 - Atualizar dados da conta           ");
        console.log("    5 - Apagar conta                       ");
        console.log("    6 - Sacar                              ");
        console.log("    7 - Depositar                          ");
        console.log("    8 - Transferir valores entre contas    ");
        console.log("    9 - Sair                               ");
        console.log("                                           ");
        console.log("*******************************************");
        console.log("                                           ",  colors.reset);

        console.log(colors.fg.whitestrong,
            "Entre com a opção desejada: ", colors.reset);
        opcao = leia.questionInt("");

        if (opcao == 9){
            console.log (colors.fg.greenstrong,
                "\n Banco do Brazil com Z - O seu futuro começa aqui!");
            process.exit(0);
        }

        switch (opcao){
            case 1:
                console.log(colors.fg.whitestrong,
                    "\n\nCriar conta\n\n", colors.reset);
                break;
            
            case 2:
                console.log(colors.fg.whitestrong,
                    "\n\nListar todas as contas\n\n", colors.reset);
                break;
            
            case 3:
                console.log(colors.fg.whitestrong,
                    "\n\nConsultar dados da conta - por número\n\n", colors.reset);
                break;
        
            case 4:
                console.log(colors.fg.whitestrong,
                    "\n\nAtualizar dados da conta\n\n", colors.reset);
                break;

            case 5:
                console.log(colors.fg.whitestrong,
                    "\n\nApagar uma conta\n\n", colors.reset);
                break;
                       
            case 6:
                console.log(colors.fg.whitestrong,
                    "\n\nSaque\n\n", colors.reset);
                break;
                                       
            case 7:
                console.log(colors.fg.whitestrong,
                    "\n\nDeposito\n\n", colors.reset);
                break;
                                       
            case 8:
                console.log(colors.fg.whitestrong,
                    "\n\nTransferência entre contas\n\n", colors.reset);
                break;
                default:
                   console.log(colors.fg.whitestrong,
                    "\nOpção inválida!\n", colors.reset);
                    keyPress()
                   break;
        }
        
    }
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    leia.prompt();
}
main();