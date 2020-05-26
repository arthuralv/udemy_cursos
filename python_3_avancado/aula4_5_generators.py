# coding: utf-8

def main():
    pass


# Funcao que ira retornar um gerador
def generator():
    i = 0
    while i < 10:
        yield i
        i += 1

main()
