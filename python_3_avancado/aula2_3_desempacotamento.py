# coding: utf-8

def main ():
    try:
        x, y = [1,2,3]
    except ValueError:
        print('duas variaveis para tres valores')
    
    # Correcao:
    x, y, _ = [1, 2, 3]
    print(x, y)
    
    # Para desempacotar como *kwargs, basta adicionar a variavel quando for atribuida um asterisco
    x, *y = [1, 2, 3]
    print(x, y) 
    notas = [9, 7, 5, 10]
    
    # Para pegar a primeira nota e a última nota, devemos:
    primeira_nota, *_, ultima_nota = [9, 7, 5, 10]
    print(primeira_nota, ultima_nota)
    pass


main()