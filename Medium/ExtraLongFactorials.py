def extraLongFactorials(n):
    ans = 1
    while (n != 1):
        ans *= n
        n -= 1
    print(ans)
