def pickingNumbers(a):
    picked_l = []
    for i in a:
        picked_l.append(a.count(i)+a.count(i+1))
    return max(picked_l)