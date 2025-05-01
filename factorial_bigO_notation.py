# better for big n
def fact(n):
    product = 1
    for i in range(n):
        print(product, i+1)
        product = product * (i+1)
    return product

print(fact(5000))

# better not for big n
def fact2(n):
    if n == 0:
        return 1
    else:
        return n * fact2(n-1)

print(fact2(5000))

